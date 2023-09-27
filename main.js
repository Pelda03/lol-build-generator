import { zoeBuild } from "./zoe.js";

// Define the table generator function
const generateTable = () => {
  // Get the user input for the champion name
  const buildDatabases = [zoeBuild];
  const championName = document.getElementById("championName").value;

  let championBuild = null;

  for (const build of buildDatabases) {
    if (build.champion === championName) {
      championBuild = build;
      break;
    }
  }

  // If the champion build is not found, display an error message
  if (!championBuild) {
    document.getElementById("result").innerHTML = `No build found for ${championName}.`;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").scrollIntoView();
    return;
  }

  // Generate the table HTML
  let tableHtml = "<table>";
  tableHtml += "<tr><th>Item</th><th>Icon</th></tr>";
  for (let i = 0; i < championBuild.items.length; i++) {
    tableHtml += `<tr><td>${championBuild.items[i].name}</td><td><img src="${championBuild.items[i].icon}" alt="${championBuild.items[i].name}"></td></tr>`;
  }
  tableHtml += "</table>";

  // Display the table HTML
  document.getElementById("result").innerHTML = tableHtml;
  document.getElementById("result").style.display = "block";
  document.getElementById("result").scrollIntoView();
};