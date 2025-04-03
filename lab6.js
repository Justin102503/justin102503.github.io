document.getElementById("catFactsButton").addEventListener("click", function () {
    fetch("https://brianobruno.github.io/cats.json")
      .then(response => response.json())
      .then(data => {
        const factSorter = data.facts.sort((a, b) => a.factId - b.factId);
        const tableContents = document.querySelector("#catFacts tbody");
        tableContents.innerHTML = "";
        factSorter.forEach(fact => {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${fact.factId}</td><td>${fact.text}</td>`;
          tableContents.appendChild(row);
        });
  
        if (data.catPhoto) {
          document.getElementById("catImage").src = data.catPhoto;
        }
      })
      .catch(error => {
        console.error("Error, cannot display cat facts:", error);
      });
  });
  