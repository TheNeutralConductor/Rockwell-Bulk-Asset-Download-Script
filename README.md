# Rockwell-Bulk-Asset-Download-Script

Run Javascript in the DevTools console of your browser to download assets from the Rockwell Automation website.

- Downloads automatically a CSV file of the asset links.
- Downloads the assets automatically to your PC.

<img src="/screenshots/Rockwell-Javascript-Chrome-2.png" alt="Rockwell javascript bulk download" width="30%" height="30%">
<img src="/screenshots/Rockwell-Javascript-Chrome-3.png" alt="Rockwell javascript bulk download" width="30%" height="30%">

## Rockwell Item Numbers

The correct syntax for Rockwell item numbers must be used in the script.

✅ 140MT-C-ASA11

❌ 140MTCASA11


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

## Check for Errors in the console
Check the browser console for any errors.

It is possible the item number was not recognized, or the file asset failed to download.

<img src="/screenshots/Rockwell-Javascript-Chrome-4.png" alt="Rockwell javascript bulk download" width="60%" height="60%">

## Use a 'snippet' in Chrome
For users of the "Chrome' browser, I recommend you use a 'snippet'.

1. In Chrome - go the DevTools 'Sources' tab
2. Under Snippets click on "+ New Snippet"
3. Name your snippet and copy/paste the code and save it.
4. Press CTRL+Enter to run the script, or click the button on the bottom of the frame.

<img src="/screenshots/Rockwell-Javascript-Chrome-1.png" alt="Rockwell javascript bulk download" width="50%" height="50%">






