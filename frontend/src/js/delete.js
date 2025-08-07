const deleteRequest = indexedDB.deleteDatabase("cantisyDb");

deleteRequest.onsuccess = function () {
  console.log("cantisyDb deleted successfully");
};

deleteRequest.onerror = function () {
  console.error("Failed to delete cantisyDb");
};

deleteRequest.onblocked = function () {
  console.warn("Delete blocked. Close other tabs or windows using cantisyDb");
};
