document.addEventListener("DOMContentLoaded", () => {
  let request = indexedDB.open("EatsyDb", 1); // Change to your DB name

  request.onsuccess = function (event) {
    let db = event.target.result;

    // COUNT workers
    let workerTx = db.transaction("workers", "readonly");
    let workerStore = workerTx.objectStore("workers");
    let workerCountRequest = workerStore.count();

    workerCountRequest.onsuccess = function () {
      document.getElementById("workersCount").textContent =
        workerCountRequest.result;
    };

    // COUNT departments
    let consumptionTx = db.transaction("consumption", "readonly");
    let consumptionStore = consumptionTx.objectStore("consumption");
    let consumptionCountRequest = consumptionStore.count();

    consumptionCountRequest.onsuccess = function () {
      document.getElementById("consumptionCount").textContent =
        consumptionCountRequest.result;
    };

    // SUM total amount from consumption table
    let amountTx = db.transaction("", "readonly");
    let amountStore = amountTx.objectStore("");
    let total = 0;
    amountStore.openCursor().onsuccess = function (e) {
      let cursor = e.target.result;
      if (cursor) {
        total += cursor.value || 0; // Change 'amount' to your actual field name
        cursor.continue();
      } else {
        document.getElementById("totalAmount").textContent = total;
      }
    };
  };
  request.onerror = function (event) {
    console.error("Error opening IndexedDB:", event.target.error);
  };
});
document.addEventListener("DOMContentLoaded", () => {
  let request = indexedDB.open("EatsyDb", 1); // use your DB name

  request.onsuccess = function (event) {
    let db = event.target.result;

    // open transaction on the store where consumptions are saved
    let transaction = db.transaction(["consumption"], "readonly");
    let store = transaction.objectStore("consumption");

    let getAllRequest = store.getAll();

    getAllRequest.onsuccess = function (event) {
      let data = event.target.result;

      // Sum all "Total amount" values
      let total = data.reduce((sum, record) => {
        // because your field is called "Total amount" (with a space):
        let rawAmount = record["amount"];

        // remove any non-digits like "XAF"
        let amount = parseInt(rawAmount.toString().replace(/\D/g, ""), 10);

        return sum + (isNaN(amount) ? 0 : amount);
      }, 0);

      // update the home page card
      document.getElementById("totalAmountCard").textContent = total + " XAF";
    };
  };
});
