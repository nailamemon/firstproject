var DATA = [];
var username;
alert("hhh");
load();

$(document).ready(
    function(){
        username = prompt("Whatever");
    }
);

$('#submit').on('click',function(){
    var msg = $('#input').val();
    
    DATA.push(username + ': ' + msg); 
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
	    url: 'http://nodedatastore.herokuapp.com/rabna', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	    success:function(res){alert("successful");}
	});
    //localStorage.msg = JSON.stringify(DATA);

}

function load(){
    $.get('http://nodedatastore.herokuapp.com/maheen',function(res){
		DATA = res;
       // RenderJSON(DATA);
    //if(localStorage.msg != null){
      //  DATA = JSON.parse(localStorage.msg);
        //renderJson(DATA);
    }
    
}