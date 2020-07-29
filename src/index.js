import './style.scss';
import './js/tilter';
document.addEventListener('DOMContentLoaded',function(){
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%"
          }
    });
    var slides = document.querySelectorAll(".sticky-el");

    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
            .setPin(slides[i], {pushFollowers: false})
            .addTo(controller);
    }
});
