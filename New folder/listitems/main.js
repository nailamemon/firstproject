var takeInput; //Take input from user.
var DATA = [];
load(); //Call All items

function insertItem(){
    takeInput = document.getElementById('item').value;
    
    DATA.push(takeInput);
    renderJson(DATA);
    save();
    
    document.getElementById('item').value = "";
}

function renderJson(data){
    document.getElementById('container').innerHTML = ""; //Clean the container
    
    for(var i=0;i<data.length;i++){
        document.getElementById('container').innerHTML = container.innerHTML + "<div id="+takeInput+"><input type='checkbox' onclick='removeItem()'/><label>"+data[i]+"</label><br></div>";
    }
    
    
}

function save(){
    localStorage.myData = JSON.stringify(DATA);
}

function load(){
    DATA = JSON.parse(localStorage.myData);
    renderJson(DATA);
}

function removeItem(){
    var itemId = document.getElementById(takeInput);
    itemId.parentNode.removeChild(itemId);
    
    for(var index = 0;index<DATA.length;index++){
        if(index > -1){
            DATA.splice(itemId,1);
            save();
        }
    }
}