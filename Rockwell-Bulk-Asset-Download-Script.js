// Rockwell-Bulk-Asset-Download-Script.js
// Download from a list of item numbers, assets for using Rockwell products
// MARCH 2025
// version 1.0
// by TheNeutralConductor
// https://github.com/TheNeutralConductor/Rockwell-Bulk-Asset-Download-Script

// list of Rockwell item numbers to get assets for
const rockwellItemNumbers = [
  "440N-A02005",
  "1734-AENT",
  "100-C30T00",
  "100S-C09EJ14BC",
  "440G-S36005",
  "440G-A36050",
  "440G-EZS21STL05J",
  "140MT-C3E-B63",
  "140MT-C-ASA11",
];

const VERSION = "1.0";
const SECONDS = 3; // time delay between downloads

let assetARRAY = [];

console.clear();
console.log(
  "%c\r\n\r\n _____ _          _   _            _             _  ____                _            _             \r\n|_   _| |__   ___| \\ | | ___ _   _| |_ _ __ __ _| |/ ___|___  _ __   __| |_   _  ___| |_ ___  _ __ \r\n  | | | '_ \\ / _ \\  \\| |/ _ \\ | | | __| '__/ _` | | |   / _ \\| '_ \\ / _` | | | |/ __| __/ _ \\| '__|\r\n  | | | | | |  __/ |\\  |  __/ |_| | |_| | | (_| | | |__| (_) | | | | (_| | |_| | (__| || (_) | |   \r\n  |_| |_| |_|\\___|_| \\_|\\___|\\__,_|\\__|_|  \\__,_|_|\\____\\___/|_| |_|\\__,_|\\__,_|\\___|\\__\\___/|_|   \r\n\r\n",
  "color: blue;"
);

console.log("%cDATE: %c2nd March 2025", "font-weight:bold", "font-color:grey");

console.log(
  "%cFILENAME: %cRockwell-Bulk-Asset-Download-Script.js",
  "font-weight:bold",
  "font-color:grey"
);

console.log(`%cVERSION: %c${VERSION}`, "font-weight:bold", "font-color:grey");

console.log(
  "%cGITHUB REPOSITORY: %chttps://github.com/TheNeutralConductor/Rockwell-Bulk-Asset-Download-Script",
  "font-weight:bold",
  "font-color:grey"
);

console.log(
  "%cROCKWELL product page scraping in progress.",
  "color: navy; font-family:sans-serif; font-size: 16px"
);

async function fetchRockwellWebpage(item) {
  try {
    const response = await fetch(
      `https://www.rockwellautomation.com/en-us/products/details.${item}.html`,
      { cache: "no-store" }
    );
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    console.log(
      `%c${item}`,
      "color: black; font-family:sans-serif; font-size: 14px;background-color:lime;padding-left:6px;padding-right:6px;"
    );

    return doc;
  } catch (error) {
    return "ERROR";
  }
}

async function getRockwellAssets(items) {
  const assetARRAY = [];
  for (const item of items) {
    try {
      const webpage = await fetchRockwellWebpage(item);
      const description = webpage.querySelector(
        "#ra-product-new__product-details div.ra-product-new__header-top h1"
      ).textContent;
      const lifeCycleStatus = webpage
        .querySelector(".ra-product-new__product-detail-options-status-value")
        .innerText.replace(/[\r\n\s]+/g, "");

      console.log(
        `%c\t${item} - https://www.rockwellautomation.com/en-us/products/details.${item}.html`,
        "color: darkgreen; font-family:sans-serif; font-size: 12px"
      );

      assetARRAY.push({
        itemNumberRockwell: item,
        itemDescription: description,
        itemLifeCycleStatus: lifeCycleStatus,
        title: `${item} Product Page`,
        urllink: `https://www.rockwellautomation.com/en-us/products/details.${item}.html`,
        filename: "",
      });

      const photoArray = webpage.querySelectorAll(
        ".ra-product-new__product-detail-header-content-image-desktop .ra-product-new__header-image-gallery-image.ra-product-new__product-image"
      );
      photoArray.forEach((itemR) => {
        let photoLink = itemR.src;
        let photoTitle = "Photo";
        if (photoLink.includes("configurator")) {
          photoTitle = "Photo Configurator";
        }
        console.log(
          `%c\t\t${item} - ${photoTitle} - ${photoLink}`,
          "color: navy; font-family:sans-serif; font-size: 12px"
        );

        let fileName = "";
        let check = photoLink.split("/").pop();
        if (check.includes(".")) {
          fileName = check;
        }

        assetARRAY.push({
          itemNumberRockwell: item,
          itemDescription: description,
          itemLifeCycleStatus: lifeCycleStatus,
          title: photoTitle,
          urllink: photoLink,
          filename: fileName,
        });
      });

      if (photoArray.length === 0) {
        const singlePhoto = webpage.querySelector(
          ".ra-product-new__main-image-frame img"
        );
        let photoLink = singlePhoto.src;
        let photoTitle = "Photo";
        console.log(
          `%c\t\t${item} - ${photoTitle} - ${photoLink}`,
          "color: navy; font-family:sans-serif; font-size: 12px"
        );

        let fileName = "";
        let check = photoLink.split("/").pop();
        if (check.includes(".")) {
          fileName = check;
        }
        assetARRAY.push({
          itemNumberRockwell: item,
          itemDescription: description,
          itemLifeCycleStatus: lifeCycleStatus,
          title: photoTitle,
          urllink: photoLink,
          filename: fileName,
        });
      }

      const drawingsTable = webpage.querySelectorAll(
        ".ra-product-new__content-desktop .ra-product-new__drawings-table-wide tr:not(:first-child)"
      );
      drawingsTable.forEach((row) => {
        const cells = row.querySelectorAll("td");
        const link = cells[1].querySelector("a");
        if (link) {
          mylink = link.href;
        } else {
          mylink = "";
        }
        console.log(
          `%c\t\t${item} - ${cells[0].textContent} - ${mylink}`,
          "color: navy; font-family:sans-serif; font-size: 12px"
        );

        let fileName = "";
        let check = mylink.split("/").pop();
        if (check.includes(".")) {
          fileName = check;
        }
        assetARRAY.push({
          itemNumberRockwell: item,
          itemDescription: description,
          itemLifeCycleStatus: lifeCycleStatus,
          title: cells[0].textContent,
          urllink: mylink,
          filename: fileName,
        });
      });

      const documentsTable = webpage.querySelectorAll(
        ".ra-product-new__documentation-table.ra-product-new__documentation-table-desktop tr:not(:first-child)"
      );
      documentsTable.forEach((row) => {
        const cells = row.querySelectorAll("td");
        if (cells.length == 3) {
          const link = cells[1].querySelector("a");
          if (link) {
            mylink = link.href;
          } else {
            mylink = "";
          }
          console.log(
            `%c\t\t${item} - ${cells[0].textContent} - ${mylink}`,
            "color: navy; font-family:sans-serif; font-size: 12px"
          );

          let fileName = "";
          let check = mylink.split("/").pop();
          if (check.includes(".")) {
            fileName = check;
          }
          assetARRAY.push({
            itemNumberRockwell: item,
            itemDescription: description,
            itemLifeCycleStatus: lifeCycleStatus,
            title: cells[0].textContent,
            urllink: mylink,
            filename: fileName,
          });
        }
      });
    } catch (error) {
      console.log(
        `%c⚠️ ${item} - *** PRODUCT ITEM NOT FOUND ***  `,
        "color: white; font-family:sans-serif; font-size: 14px;background-color:red;padding-left:6px;padding-right:6px;"
      );
    }
  }
  return assetARRAY;
}

function exportToCSV(data) {
  const csvRows = [];
  const urlArray = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));

  for (const row of data) {
    const values = headers.map((header) => JSON.stringify(row[header]));
    csvRows.push(values.join(","));
  }

  const csvString = csvRows.join("\n");
  const blob = new Blob([csvString], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);

  const filename = `ROCKWELL-ASSET-CSV-${Date()
    .slice(0, 24)
    .replaceAll(" ", "-")
    .replaceAll(":", "-")}.csv`;

  a.setAttribute("download", `${filename}`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  console.log(
    "%cAssets are downloading to your computer now.",
    "color: navy; font-family:sans-serif; font-size: 16px"
  );

  const filteredURLS = data.filter((x) => x.fileName != "");

  filteredURLS.forEach((item) => {
    if (item.filename != "") {
      urlArray.push(`${item.urllink}`);
    }
  });

  const finalURLS = [...new Set(urlArray)];

  const downloadFile = async (url, index, total) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const fileName = url.split("/").pop();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(
      `%c\t${index + 1}/${total} - Download Success : ${url}`,
      "background-color:Chartreuse;"
    );
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const downloadAllFiles = async (urls) => {
    for (let index = 0; index < urls.length; index++) {
      try {
        await downloadFile(urls[index], index, urls.length);
        await delay(SECONDS); // time delay between downloads
      } catch (error) {
        console.log(
          `%c\tFailed to download: ${url}`,
          "color:red;font-weight:bold"
        );
      }
    }
  };

  downloadAllFiles(finalURLS);
}

getRockwellAssets(rockwellItemNumbers)
  .then((assetARRAY) => {
    // console.log(assetARRAY);
    exportToCSV(assetARRAY);
  })
  .catch((error) => {
    console.log("*** Something went wrong !! ***");
  });
