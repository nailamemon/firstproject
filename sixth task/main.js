var chat = function(){

    var mainObject = this;
    var DATA = new Array();
    this.username = prompt('Enter username');
    console.log(this.username);
    
    mainObject.load();
   
    $('#submit').on('click',function(){
        mainObject.takeInput();
    });
}

chat.prototype.takeInput = function(){
    var mainObject = this;
    var takeInput = $('#input').val();

    DATA.push(this.username + ' ' + takeInput);
    mainObject.RenderJSON(DATA);
    mainObject.save();
    $('#input').val('');
}

chat.prototype.RenderJSON = function(data){
    var mainObject = this;
    $('#container').empty();
    for(var i in data){
        $('#container').append(data[i]+'</br>');

        $('#clear').on('click',function(value){
            DATA = [];
            mainObject.save();
            mainObject.load();
        });
    }
}

chat.prototype.save = function(){
      $.ajax({
	    url: 'http://nodedatastore.herokuapp.com/sumair', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	    success:function(res){console.log(res);}
	});
}

chat.prototype.load = function(){
    var mainObject = this;
    $.get('http://nodedatastore.herokuapp.com/sumair',function(res){
        
		if (res.length){
            DATA = res;
        }
		else{
             DATA = [];
        }
        mainObject.RenderJSON(DATA); 
	});
}
var newChat = new chat();