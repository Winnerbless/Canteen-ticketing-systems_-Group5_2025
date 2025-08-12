<<<<<<< HEAD
function listWorkersByDepartement() {
  // Récupération des valeurs du formulaire
  const consumerName = document.getElementById("name").value;
  const  departement= document.getElementById("departement-consumption").value;
=======
function registerConsumption() {
  // Récupération des valeurs du formulaire
  const consumerName = document.getElementById("workerName").value;
  const departement = document.getElementById("departement-consumption").value;
>>>>>>> 29d3df407519f0fef826ca1d57bf54c091b89db2
  const consumptionType = document.getElementById("consumption-type").value;
  const exta = document.getElementById("extra").value;
  const date = document.getElementById("rgdate").value;
  const amount = document.getElementById("amount-consummed").value;

  const consumptionData = {
    consumerName,
    departement,
    consumptionType,
    exta,
    date,
    amount,
  };

  // Ajout dans IndexedDB
<<<<<<< HEAD
  const request = indexedDB.open("cantisysDb", 1);
=======
  const request = indexedDB.open("EatsyDb", 1);
>>>>>>> 29d3df407519f0fef826ca1d57bf54c091b89db2
  request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction(["consumption"], "readwrite");
    const objectStore = transaction.objectStore("consumption");
    const addRequest = objectStore.add(consumptionData);

    addRequest.onsuccess = function () {
<<<<<<< HEAD
      console.log("Consumption added successfully");
      listWorkers(); // Rafraîchit la liste après ajout
=======
      Swal.fire({
        title: "Good Job!",
        text: "New worker has been registered!",
        title: "success",
      }); // Rafraîchit la liste après ajout
>>>>>>> 29d3df407519f0fef826ca1d57bf54c091b89db2
    };

    addRequest.onerror = function () {
      console.error("Error adding consumption: ", addRequest.error);
    };
  };
}

// Fonction pour lister et afficher les workers dans le tableau HTML
function listConsumption() {
  const table = document.getElementById("consumptionList");
  table.innerHTML = ""; // Vide le tableau avant d'ajouter les lignes

<<<<<<< HEAD
  const request = indexedDB.open("cantisysDb", 1);
=======
  const request = indexedDB.open("EatsyDb", 1);
>>>>>>> 29d3df407519f0fef826ca1d57bf54c091b89db2
  request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction(["consumption"], "readonly");
    const objectStore = transaction.objectStore("consumption");
    const getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = function () {
      const consumptionTable = getAllRequest.result;
<<<<<<< HEAD
      workersTable.forEach((consumption, index) => {
=======
      consumptionTable.forEach((consumption, index) => {
>>>>>>> 29d3df407519f0fef826ca1d57bf54c091b89db2
        const row = table.insertRow();
        row.insertCell(0).innerText = index + 1;
        row.insertCell(1).innerText = consumption.consumerName;
        row.insertCell(2).innerText = consumption.departement;
        row.insertCell(3).innerText = consumption.consumptionType;
        row.insertCell(4).innerText = consumption.exta;
        row.insertCell(5).innerText = consumption.date;
        row.insertCell(6).innerText = consumption.amount;
<<<<<<< HEAD
        
      })}
    }
        
      console.log("Consumption retrieved successfully");

    getAllRequest.onerror = function () {
      console.error("Error retrieving consumption: ", getAllRequest.error);
    };
  };





    function totalPrice() {
      const consumptionType = document.getElementById('consumption-type').value;
      const extra = parseInt(document.getElementById('extra').value) || 0;

      const basePrice = {
        'Food': 500,
        'Drink': 500,
        'Food and Drink': 1000
      };

      let totalPrice = basePrice[consumptionType] || 0;
      if(exta > 0) {
        totalPrice += (extra * 500); //
      }
      const _totalPrice = document.getElementById("amount-consummed");

      _totalPrice.setAttribute("value", totalPrice + "XAF");
      return totalPrice;
     }
=======
      });
    };
  };

  console.log("Consumption retrieved successfully");

  getAllRequest.onerror = function () {
    console.error("Error retrieving consumption: ", getAllRequest.error);
  };
}

function totalPrice() {
  const consumptionType = document.getElementById("consumption-type").value;
  const extra = parseInt(document.getElementById("extra").value) || 0;

  const basePrice = {
    Food: 500,
    Drink: 500,
    "Food and Drink": 1000,
  };

  let totalPrice = basePrice[consumptionType] || 0;
  if (exta > 0) {
    totalPrice += extra * 500; //
  }
  const _totalPrice = document.getElementById("amount-consumed");

  _totalPrice.setAttribute("value", totalPrice + "XAF");
  return totalPrice;
}
>>>>>>> 29d3df407519f0fef826ca1d57bf54c091b89db2
