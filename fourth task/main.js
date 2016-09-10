function addData(){
    document.getElementById('container').innerHTML = 
                    document.getElementById("input").value;

// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("name", "input");
    // Retrieve
    document.getElementById("container").innerHTML = localStorage.getItem("name");
} else {
    document.getElementById("container").innerHTML = "Sorry, your browser does not support Web Storage...";
}

}

$('#save').on('click', function(){

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
        
    });   
});

$('#load').on('click', function(){
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        
        $(this).val(value);
        
    }); 
});