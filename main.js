

document.getElementById("submit_button").addEventListener("click",function(){

    var data=document.getElementById("input_area").value;
    var langId=document.getElementById("language_select").value;
    var obj={
        data:data,
        langId:langId
    }
    
    
    
    var xhttp = new XMLHttpRequest();

    
    
    
      xhttp.onreadystatechange = function(e) {
    if (this.readyState == 4 && this.status == 200) {
//      document.getElementById("demo").innerHTML =
//      this.responseText;
         console.log(this.responseText); 
    }
          
        
          
  };
//    xhttp.addEventListener("load",function(e){
//        console.log(e.target.value);
//    })

    xhttp.open("post", "https://codequotient.com/api/executeCode");
    console.log(obj);
    xhttp.send(JSON.stringify(obj));
})