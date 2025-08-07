function saveWorkerData(){
    var name = document.getElementById("name").value;
    var givingName = document.getElementById("givingName").value;
    var departement = document.getElementById("department").value;
     var status = document.getElementById("status").value;
     var dateOfBirth = document.getElementById("dob").value;
      var placeOfBirth = document.getElementById("pob").value;
       var registerDate = document.getElementById("rgdate").value;

       var workersData = {  name, givingName, departement, status, dateOfBirth, placeOfBirth, registerDate };
       console.log(workersData);



    const request = indexedDB.open("CanteenticketingDb", 1);
    request.onsuccess = function(event){
    const db = event.target.result;
    const transaction = db.transaction(["workers"],"readwrite");
    const objectStore = transaction.objectStore("workers");
    const addRequest = objectStore.add(workersData);


    
   addRequest .onsuccess = function(){
        console.log("worker addes successfully");
    };

    addRequest.onerror = function(){
        console.error("Error adding workers: ",addRequest.error);
    };

};
}



function listWorkers(){
    const table = document.getElementById("workerLists");
    table.innerHTML = "";

    const request = indexedDB.open("CanteenticketingDb", 1);
    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(["workers"], "readonly");
        const objectStore = transaction.objectStore("workers");
        const getAllRequest = objectStore.getAll();

        getAllRequest.onsuccess = function() {
            const workersTable = getAllRequest.result;
            workersTable.forEach((worker, index) =>{
                const row = table.insertRow();
                row.insertCell(0).innerText = index + 1;
                row.insertCell(1).innerText = worker.name ;
                row.insertCell(2).innerText = worker.givingName;
                row.insertCell(3).innerText = worker.department;
                row.insertCell(4).innerText = worker.status;
                row.insertCell(5).innerText = worker.dateOfBirth;
                row.insertCell(6).innerText = worker.placeOfBirth;
                row.insertCell(7).innerText = worker.registerDate;
                const actionsCell = row.insertCell();
                 actionsCell.innerHTML = `
                    <select class="form-select">
                       <option>Choose...</option>
                       <option>Add Consumption</option>
                       <option>Edit</option>
                       <option>Delete</option>
                    </select> 
                    `;  



                
            });
            console.log("Workers retrived successfully")
        };
       
        getAllRequest.onerror = function(){
            console.error("Error retriving workers:", getAllRequest.error);
        };

    };
}




 
