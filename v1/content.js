(function () {
    const SORT_COLUMN_INDEX_MOBILE = 1; // Second column for mobile
    const SORT_COLUMN_INDEX_DESKTOP = 2; // Votes column for desktop
    const SORT_BUTTON_CLASS = "sort-toggle-btn";
    const SORTED_CLASS = "extension-sorted";

    function sortTable(table, columnIndex, order = "desc") {
        const tbody = table.querySelector("tbody");
        if (!tbody) return;

        const rows = Array.from(tbody.querySelectorAll("tr"));

        rows.sort((a, b) => {
            const aText = a.cells[columnIndex]?.innerText.replace(/,/g, "") || "0";
            const bText = b.cells[columnIndex]?.innerText.replace(/,/g, "") || "0";

            const aValue = parseFloat(aText);
            const bValue = parseFloat(bText);

            return order === "asc" ? aValue - bValue : bValue - aValue;
        });

        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
        rows.forEach(row => tbody.appendChild(row));
        table.classList.add(SORTED_CLASS);
        console.log("✅ Table sorted (column index: " + columnIndex + "):", table);
    }

    function addSortButtonToTable(table, columnIndex) {
        if (!table.querySelector("thead") || !table.querySelector("tbody")) return;
        const thead = table.querySelector("thead");
        const headerRow = thead.rows[0];
        const targetCell = headerRow?.cells[columnIndex];
        if (!targetCell) return;

        if (!targetCell.querySelector(`.${SORT_BUTTON_CLASS}`)) {
            const button = document.createElement("button");
            button.textContent = "Sort ↓";
            button.className = SORT_BUTTON_CLASS;
            button.style.marginLeft = "8px";
            button.style.fontSize = "0.8em";
            button.style.cursor = "pointer";

            let currentOrder = "desc";

            button.addEventListener("click", function(e) {
                e.stopPropagation();
                currentOrder = currentOrder === "desc" ? "asc" : "desc";
                button.textContent = currentOrder === "desc" ? "Sort ↓" : "Sort ↑";
                sortTable(table, columnIndex, currentOrder);
            });

            targetCell.appendChild(button);
        }
        table.dataset.sortEnhanced = "true";
    }

    function enhanceTable(table) {
        // Check for mobile view (simplistic check based on number of visible columns)
        const firstRowCells = table.querySelector('thead tr')?.cells;
        if (firstRowCells && firstRowCells.length <= 2) {
            addSortButtonToTable(table, SORT_COLUMN_INDEX_MOBILE);
            sortTable(table, SORT_COLUMN_INDEX_MOBILE, "desc");
            console.log("✅ Mobile view detected, sort button added to column " + SORT_COLUMN_INDEX_MOBILE);
        } else {
            addSortButtonToTable(table, SORT_COLUMN_INDEX_DESKTOP);
            sortTable(table, SORT_COLUMN_INDEX_DESKTOP, "desc");
            console.log("✅ Desktop view detected, sort button added to column " + SORT_COLUMN_INDEX_DESKTOP);
        }
    }

    function observeTableLoad() {
        const targetNode = document.body;
        const config = { childList: true, subtree: true };

        const observer = new MutationObserver((mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                            if (node.tagName === 'TABLE' && !node.classList.contains(SORTED_CLASS)) {
                                enhanceTable(node);
                            } else if (node.querySelectorAll) {
                                const newTables = node.querySelectorAll('table');
                                newTables.forEach(table => {
                                    if (!table.classList.contains(SORTED_CLASS)) {
                                        enhanceTable(table);
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });

        observer.observe(targetNode, config);
        console.log("✅ Mutation observer started to watch for table elements.");
    }

    // Start observing for table elements
    observeTableLoad();
})();