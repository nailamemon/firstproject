var DATA = [];
var username;
load();

$(document).ready(
    function(){
        username = prompt("Whatever !!!!!!");
    }
);
$('#clear').on('click',function(){
    localStorage.msg="";
    DATA=new Array();
        $('#container').empty();



})
$('#submit').on('click',function(){
    var msg = $('#input').val();
    
    DATA.push(username + ': ' + msg); //sumair: hello
    renderJson(DATA);
    save();
    
    $('#input').val('');
});

function renderJson(data){
    $('#container').empty();
    
    for(var i in data){
        $('#container').append(data[i] + '</br>');
    }
}

function save(){
    $.ajax({
	    url: 'http://nodedatastore.herokuapp.com/sana', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	    success:function(res){console.log(res);}
	});
    //localStorage.msg = JSON.stringify(DATA);
}

function load(){
    $.get('http://nodedatastore.herokuapp.com/sana',function(res){
       
        if (res.length) //cuz array has a length variable
           
            DATA = res;
       
        else
           
            DATA = [];

      
        RenderJSON(DATA);

  
   
    });

} 

   /* if(localStorage.msg){
        DATA = JSON.parse(localStorage.msg);
        renderJson(DATA);*/
    
    
