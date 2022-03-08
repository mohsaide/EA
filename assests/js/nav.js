window.onscroll =   function() {scrollFunction()};


function scrollFunction() {
   
    
      var ch = vh(15) ; 
      var x = document.querySelectorAll("#litem a"); 
       
        if (document.body.scrollTop < ch || document.documentElement.scrollTop < ch)
        {   
            document.getElementById("navbar").style.background = "#3a4946b0";
            document.getElementById("navbar").style.boxShadow = "0px 0px";
            document.getElementById("navbar").style.borderBottom= "0px solid orange" ;
           
        }
         
       if (document.body.scrollTop >ch || document.documentElement.scrollTop > ch) 
        {
            document.getElementById("navbar").style.background = "#3a4946b0";
            document.getElementById("navbar").style.boxShadow = "0px 0px 25px black";
            document.getElementById("navbar").style.borderBottom= "1px solid black" ;
          
        }
       
   
  
}

function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }