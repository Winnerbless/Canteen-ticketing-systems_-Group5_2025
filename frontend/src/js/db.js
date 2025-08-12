let request = indexedDB.open("CanteenticketingDb", 1);
request.onerror = function (event) {
  console.error("Database error: ", event.target.errorCode);
};

request.onupgradeneeded = function (event) {
  var db = event.target.result;

  if (!db.objectStoreNames.contains("consumption")) {
    var objectStore = db.createObjectStore("consumption", {
      keyPath: "id",
      autoIncrement: true,
    });
    objectStore.createIndex("workerId", "workerId", { unique: false });
    objectStore.createIndex("consumerName", "consumerName", { unique: false });
    objectStore.createIndex("departement", "departement", { unique: false });
    objectStore.createIndex("consumptionType", "consumptionType", {
      unique: false,
    });
    objectStore.createIndex("exta", "exta", { unique: false });
    objectStore.createIndex("amount", "amount", { unique: false });
    objectStore.createIndex("date", "date", { unique: false });
    console.log("Object store 'consumption' created successfully");
  }

  if (!db.objectStoreNames.contains("workers")) {
    var objectStore = db.createObjectStore("workers", {
      keyPath: "id",
      autoIncrement: true,
    });
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("givingName", "givingName", { unique: false });
    objectStore.createIndex("departement", "departement", { unique: false });
    objectStore.createIndex("status", "status", { unique: false });
    objectStore.createIndex("dob", "dob", { unique: false });
    objectStore.createIndex("pob", "pob", { unique: false });
    objectStore.createIndex("rgdate", "rgdate", { unique: false });
    console.log("Object store 'workers' created successfully");
  }

  if (!db.objectStoreNames.contains("departement")) {
    var objectStore = db.createObjectStore("departement", {
      keyPath: "id",
      autoIncrement: true,
    });
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("description", "description", { unique: false });
    console.log("Object store 'departement' created successfully");
  }

  if (!db.objectStoreNames.contains("consumptionType")) {
    var objectStore = db.createObjectStore("consumptionType", {
      keyPath: "id",
      autoIncrement: true,
    });
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("description", "description", { unique: false });
    console.log("Object store 'consumptionType' created successfully");
  }
  listWorkers();
};

request.onsuccess = function (event) {
  console.log("Database opened successfully");
};

document.addEventListener("DOMContentLoaded", function () {
  listDepartements();
});
