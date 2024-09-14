var elem = document.querySelectorAll('.elem');

elem.forEach(function(val) {

    val.addEventListener("mouseenter", function() {
        // Use querySelector to target the img element directly
        var img = val.querySelector('img');
        img.style.opacity = 1;
    });

    val.addEventListener("mouseleave", function() {
        var img = val.querySelector('img');
        img.style.opacity = 0;
    });

    val.addEventListener("mousemove", function(dets) {
        var img = val.querySelector('img');
        // Use clientX and clientY for mouse coordinates
        img.style.left = dets.clientX + "px";
        img.style.top = dets.clientY + "px";
    });

});
