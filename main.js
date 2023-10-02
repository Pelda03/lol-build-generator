import ChampionData from "./championData.js";
import { zoeBuild } from "./champs/zoe.js"; 


// Define the table generator function
window.generate = () => {
  console.log("Button clicked");
  const championName = document.getElementById("championName").value;
  console.log("Entered championName:", championName);

  let championBuild = null;

  // Select the champion data based on the entered champion name
  if (championName.toLowerCase() === "zoe") {
    championBuild = zoeBuild;
  } else if (championName.toLowerCase() === "Ashe") {
    championBuild = asheBuild;
  // } else if (championName.toLowerCase() === "DALSI CHAMPION") {
   // championBuild = dalsiBuild; 
  }
  


  if (!championBuild) {
    console.log("No build found for championName:", championName);
    document.getElementById("result").innerHTML = `No build found for ${championName}.`;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").scrollIntoView();
    return;
  }

  // Generate the table HTML
  let tableHtml = "<table>";
  tableHtml += "<tr><th>Item</th><th>Icon</th></tr>";
  for (const build of championBuild.items) {
    tableHtml += `<tr><td>${build.name}</td><td><img src="${build.icon}" alt="${build.name}"></td></tr>`;
  }
  tableHtml += "</table>";

  // Display the table HTML
  document.getElementById("result").innerHTML = tableHtml;
  document.getElementById("result").style.display = "block";
  document.getElementById("result").scrollIntoView();
};

console.log("Hello World");
