function saveConsumptionData(){
    var chooseDepartment = document.getElementById("departement-consumption").value;
     var  chooseWorker= document.getElementById("worker").value;
      var consumptionType = document.getElementById("consumption-type").value;
       var  numberOfExtraConsumption= document.getElementById("extra").value;
        var  registerationDate= document.getElementById("rgdate").value;
         var amountConsumed = document.getElementById("amount-consummed").value;


        var consumptionData = {chooseDepartment, chooseWorker, consumptionType, numberOfExtraConsumption, registerationDate, amountConsumed };

        console.log(consumptionData);

}
 const request = indexedDB.open("CanteenticketingDb", 1);
    request.onsuccess = function(event){
    const db = event.target.result;
    const transaction = db.transaction(["consumption"],"readwrite");
    const objectStore = transaction.objectStore("consumption");
    const addRequest = objectStore.add(saveConsumptionData);


 addRequest .onsuccess = function(){
        console.log("consumption successful");
    };

    addRequest.onerror = function(){
        console.error("Error adding consumption: ",addRequest.error);
    };

};

   function consumptionList(){
    const table = document.getElementById("consumption-list");
    table.innerHTML = "";

    const request = indexedDB.open("CanteenticketingDb", 1);
    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(["consumption"], "readonly");
        const objectStore = transaction.objectStore("consumption");
        const getAllRequest = objectStore.getAll();

        getAllRequest.onsuccess = function() {
            const consumptionTable = getAllRequest.result;
            consumptionTable.forEach((consumption, index) =>{
                const row = table.insertRow();
                row.insertCell(0).innerText = index + 1;
                row.insertCell(1).innerText = consumption.name ;
                row.insertCell(2).innerText = consumption.givingName;
                row.insertCell(3).innerText = consumption.department;
                row.insertCell(4).innerText =consumption.consumption;
                row.insertCell(5).innerText = consumption.extra;
                 row.insertCell(5).innerText = consumption.amount;



            });
        }
    }
};
