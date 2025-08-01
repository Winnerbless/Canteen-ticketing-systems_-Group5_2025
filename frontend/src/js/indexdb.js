// Open or create the database
const request = indexedDB.open("CanteenTicketDB", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;

  // Create object stores
  const userStore = db.createObjectStore("users", { keyPath: "userId" });
  userStore.createIndex("name", "name", { unique: false });

  const ticketStore = db.createObjectStore("tickets", {
    keyPath: "ticketId",
    autoIncrement: true,
  });
  ticketStore.createIndex("userId", "userId", { unique: false });
  ticketStore.createIndex("date", "date", { unique: false });

  const menuStore = db.createObjectStore("menu", {
    keyPath: "itemId",
    autoIncrement: true,
  });
  menuStore.createIndex("itemName", "itemName", { unique: false });
};

request.onsuccess = function (event) {
  const db = event.target.result;
  console.log("Database initialized!");

  // You can now perform read/write operations here
};

request.onerror = function (event) {
  console.error("Database failed to open", event.target.error);
};
