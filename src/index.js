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

   /* for (var i=0; i<slides.length; i++) {
        let triggerEl =  slides[i].querySelector('.end');
        new ScrollMagic.Scene({
            offset: slides[i].clientHeight - window.innerHeight,
            triggerElement: triggerEl|| slides[i],
        })
            .setPin(slides[i], {pushFollowers: false})
            .addTo(controller);
    }*/
});
(function() {
    var tiltSettings = [];
    function init() {
        var idx = 0;
        [].slice.call(document.querySelectorAll('.tilter')).forEach(function(el, pos) {
            idx = pos%2 === 0 ? idx+1 : idx;
            new TiltFx(el, tiltSettings[idx-1]);
        });
        [].slice.call(document.querySelectorAll('.tilter--back')).forEach(function(el, pos) {
            idx = pos%2 === 0 ? idx+1 : idx;
            new TiltFx(el, tiltSettings[idx-1]);
        });
    }
    init();
})();
/*(function(){
    const maxCanvasWidth = 1360;
    let firstScreenCanvas = document.getElementById('firstScreenCanvas');
    let firstScreenContext = firstScreenCanvas.getContext("2d");
    firstScreenCanvas.height = document.documentElement.clientHeight;
    firstScreenCanvas.width = document.documentElement.clientWidth;

    const firstScreenItems = [
        {
            name:'Headphone',
            src: 'dist/img/Headphone_JD.png',
            canvas:firstScreenCanvas,
            xPos: calcPositionByPercent({
                axis: 'x',
                posPercent: 13.89
            },firstScreenCanvas),
            yPos: calcPositionByPercent({
                axis: 'y',
                posPercent: 14
            },firstScreenCanvas)
        },
        {
            name:'camera',
            src: 'dist/img/camera.png',
            canvas:firstScreenCanvas,
            xPos: calcPositionByPercent({
              axis: 'x',
              posPercent: 3.81
          },firstScreenCanvas),
            yPos: calcPositionByPercent({
              axis: 'y',
              posPercent: 55.375
          },firstScreenCanvas)
        },
        {
            name:'heart22',
            src: 'dist/img/heart22.png',
            canvas:firstScreenCanvas,
            xPos: calcPositionByPercent({
                axis: 'x',
                posPercent: 55.88
            },firstScreenCanvas),
            yPos: calcPositionByPercent({
                axis: 'y',
                posPercent: 73.25
            },firstScreenCanvas)
        },
        {
            name:'note2',
            src: 'dist/img/note2.png',
            canvas:firstScreenCanvas,
            xPos: calcPositionByPercent({
                axis: 'x',
                posPercent: 22.411
            },firstScreenCanvas),
            yPos: calcPositionByPercent({
                axis: 'y',
                posPercent: 82.875
            },firstScreenCanvas)
        },
        {
            name:'claqueta',
            src: 'dist/img/claqueta.png',
            canvas:firstScreenCanvas,
            xPos: calcPositionByPercent({
                axis: 'x',
                posPercent: 71.91
            },firstScreenCanvas),
            yPos: calcPositionByPercent({
                axis: 'y',
                posPercent: 50
            },firstScreenCanvas)
        },

    ];

    firstDraw(firstScreenItems,firstScreenContext);


    function firstDraw(arr,ctx){
        arr.forEach(function(item){
            let img = new Image();
            img.src = item.src;

            img.onload = function(){
                console.log(img.width);
                ctx.drawImage(img,item.xPos,item.yPos,
                    calcRelativeSize(item.canvas, img.width),
                    calcRelativeSize(item.canvas, img.height))
            };
        });

    }
    function calcPositionByPercent(obj,canvas){
        let size = 0;
        console.log(canvas);
        if(obj.axis === 'y'){
            size = canvas.height;
        }else if(obj.axis === 'x'){
            size = canvas.width;
        }
        return obj.posPercent * (size / 100);
    }
    function calcRelativeSize(canvas,elSize){
        return elSize/(maxCanvasWidth/100)*(canvas.width/100);
    }
})();*/
(function(){
    let cursor = document.getElementById('firstScreenCursor');
    let firstScreen = document.querySelector('.first-screen');
    let firstScreenCenterCord =  window.innerWidth/2;
    let sizeFactor =(50/(firstScreen.clientWidth/2));
    var targetCoords = firstScreen.getBoundingClientRect();
    window.onresize = function(){
        targetCoords = firstScreen.getBoundingClientRect();
    };
    firstScreen.addEventListener('mouseenter',function(){
        cursor.classList.add('active');
    });
    firstScreen.addEventListener('mouseleave',function(){
        cursor.classList.remove('active');
    });
    firstScreen.addEventListener('mousemove', function(e){
        if(e.clientX < firstScreenCenterCord ){
            cursor.style.width = sizeFactor * e.clientX + '%';
            cursor.style.paddingTop = sizeFactor * e.clientX + '%';
        }else if(e.clientX > firstScreenCenterCord){
            cursor.style.width = sizeFactor * (firstScreen.clientWidth - (e.clientX - targetCoords.left)) + '%';
            cursor.style.paddingTop = sizeFactor * (firstScreen.clientWidth - (e.clientX - targetCoords.left)) + '%';
        }
        cursor.style.top = (e.clientY - targetCoords.top) - (cursor.clientWidth/2) +'px';
        cursor.style.left = (e.clientX - targetCoords.left) - (cursor.clientWidth/2) + 'px';

    },false)
})();