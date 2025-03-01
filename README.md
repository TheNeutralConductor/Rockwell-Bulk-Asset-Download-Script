# Rockwell-Bulk-Asset-Download-Script

Javascript to run in the DevTools console of your browser to download assets from the Rockwell Automation website.

Exports a CSV file of the asset links.

- CAD blocks
- Documents
- Cutsheet


## How To Use

1. Download the Javascript file : _Rockwell-Bulk-Asset-Download-Script.js_
2. Edit in the Javascript file th array list of Rockwell item numbers to the list you plan to search for. The item numbers be formatted in the same way Rockwell format the item numbers. _e.g. with hyphens_
   
   <img src="/screenshots/Rockwell-Javascript-1.png" alt="Rockwell javascript bulk download" width="30%" height="30%">
3. Open your browser (Chrome is shown in these screenshots)
4. Go to the Rockwell website : https://www.rockwellautomation.com/en-us.html

   <img src="/screenshots/Rockwell-Javascript-2.png" alt="Rockwell javascript bulk download" width="30%" height="30%">
5. Press F12 to enter the browser DevTools, and select the "Console" tab.
   
   <img src="/screenshots/Rockwell-Javascript-3.png" alt="Rockwell javascript bulk download" width="30%" height="30%">
6. Copy and past the javascript code into the "Console" tab.
   
<img src="/screenshots/Rockwell-Javascript-4.png" alt="Rockwell javascript bulk download" width="30%" height="30%">

7. Press enter and the code will run.
<img src="/screenshots/Rockwell-Javascript-5.png" alt="Rockwell javascript bulk download" width="30%" height="30%">

8. The CSV will be automatically download in the browser
<img src="/screenshots/Rockwell-Javascript-6.png" alt="Rockwell javascript bulk download" width="30%" height="30%">
