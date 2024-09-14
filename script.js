var elem = document.querySelectorAll('.elem');

elem.forEach(function(val){
val.addEventListener("mouseenter", function(){
    val.style.background= "red"
})
val.addEventListener("mouseleave", function(){
    val.style.background= "transparent"
})
})