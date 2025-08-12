/*var departement = ["PDL", "MARKETING", "PRINTING", "MOUNTING", "TYPESETTING", "FINISHING", "ACOUNTAN", "SECURITY", "SCREEN PRINTING", "CANTIN"];
var description = ["Project Driving Licence", "Manage intrance", "Print Everything", "Mount Before Print", "Apply Form To What To Print", "Finish The Work", "Manage Money", "Insure Company Security", "Screen Printing", "Food Is Ready"];

// Pour chaque departement et une decription on cree un objet
for (let i = 0; i < departement.length; i++) {
    let request = indexedDB.open("EatsyDb", 1);
    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(["departement"], "readwrite");
        const objectStore = transaction.objectStore("departement");
        const departementData = {
            name: departement[i],
            description: description[i]
        };
        const addRequest = objectStore.add(departementData);

        addRequest.onerror = function() {
            console.error(`Error adding departement ${departement[i]}: `, addRequest.error);
        };
    };
}*/

function listDepartements() {
  const request = indexedDB.open("EatsyDb", 1);
  request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction(["departement"], "readonly");
    const objectStore = transaction.objectStore("departement");
    const getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = function () {
      const departements = getAllRequest.result;

      //  Register Consumption
      const selectConsumption = document.getElementById(
        "departement-consumption"
      );
      if (selectConsumption) {
        selectConsumption.innerHTML = '<option value="">Select...</option>';
        departements.forEach((departement) => {
          const option = document.createElement("option");
          option.value = departement.name;
          option.textContent = departement.name;
          selectConsumption.appendChild(option);
        });
      }

      // For Register Worker
      const selectWorker = document.getElementById("departement");
      if (selectWorker) {
        selectWorker.innerHTML = '<option value="">Select...</option>';
        departements.forEach((departement) => {
          const option = document.createElement("option");
          option.value = departement.name;
          option.textContent = departement.name;
          selectWorker.appendChild(option);
        });
      }
    };
  };
}

function listWorkersByDepartment() {
  // Retrieves the value selected in the select
  const selectedDepartment = document.getElementById(
    "departement-consumption"
  ).value;
  alert(selectedDepartment);
  const request = indexedDB.open("EatsyDb", 1);
  request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction(["workers"], "readonly");
    const objectStore = transaction.objectStore("workers");
    const getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = function () {
      const allWorkers = getAllRequest.result;
      //Filter workers according to the chosen department
      const filteredWorkers = allWorkers.filter(
        (worker) => worker.departement === selectedDepartment
      );

      // Exemple : remplir le select des workers
      const workerSelect = document.getElementById("workerName");
      if (workerSelect) {
        workerSelect.innerHTML = '<option value="">Choose Worker...</option>';
        filteredWorkers.forEach((worker) => {
          const option = document.createElement("option");
          option.value = worker.name;
          option.textContent = worker.name + " " + worker.givingName;
          workerSelect.appendChild(option);
        });
      }
    };
  };
}
