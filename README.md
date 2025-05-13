# COMELEC Results Table Sorter Browser Extension

This is a simple browser extension designed to automatically sort the tables on the COMELEC 2025 election results page (https://2025electionresults.comelec.gov.ph/coc-result) in descending order based on the "Votes" column. It also adds a button to the "Votes" column header to toggle between ascending and descending sort order.

## Features

* **Automatic Sorting:** Upon loading the election results tables (after you've selected the Region, Province, and City), the extension will automatically sort them in descending order based on the "Votes" column.
* **Sort Toggle Button:** A "Sort ↓" button is added to the header of the "Votes" column. Clicking this button will toggle the sort order between descending (↓) and ascending (↑).
* **Dynamic Content Handling:** The extension is designed to work even with tables that are loaded dynamically after the initial page load.
* **Easy Installation via ZIP:** Share this extension with friends by providing them with a ZIP file of the extension files.

## Installation (via ZIP File)

1.  **Download the ZIP File:** Your friend will provide you with a ZIP file containing the extension files (`manifest.json` and `content.js`). Save this ZIP file to a location you can easily access.

2.  **Open your Browser's Extensions Page:**
    * **Google Chrome/Brave/Edge:** Open your browser and type `chrome://extensions` (or `edge://extensions`) in the address bar and press Enter.

3.  **Enable Developer Mode:** Toggle the "Developer mode" switch in the top right corner of the extensions page to the "on" position.

4.  **Load the Extension:**
    * Click the "Load unpacked" button in the top left corner of the extensions page.
    * In the file dialog that appears, navigate to the location where you saved the **unzipped** folder (you'll need to unzip the ZIP file first).
    * Select the folder containing the `manifest.json` and `content.js` files and click "Select Folder" (or a similar button).

5.  **The extension is now installed.** It will automatically run on the COMELEC election results page (https://2025electionresults.comelec.gov.ph/coc-result) after the tables are loaded.

## Usage

1.  Navigate to the COMELEC 2025 election results page: https://2025electionresults.comelec.gov.ph/coc-result
2.  Use the dropdown menus to select the **Region**, **Province**, and **City/Municipality**.
3.  Once the election results tables are loaded, the extension will automatically sort them in descending order based on the "Votes" column.
4.  You will also see a "Sort ↓" button in the header of the "Votes" column.
5.  Clicking the "Sort ↓" button will change the sort order to ascending, and the button text will update to "Sort ↑".
6.  Clicking the button again will revert the sorting to descending.

## Contributing

If you have any suggestions or find any issues, feel free to open an issue or submit a pull request on GitHub (if you decide to host it there).

