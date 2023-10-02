import championMap from "./championMap.js";

// Define the table generator function
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  button.addEventListener("click", () => {
    console.log("Button clicked");
    const championName = document.getElementById("championName").value.toLowerCase(); // Convert to lowercase

    const championBuild = championMap.get(championName);

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
  });

  console.log("je to naloadovany");
});