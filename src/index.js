import './style.scss';
import './js/tilter';
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}
const UTILS = {
  tapEvent: isMobile ? 'touchstart' :'click' ,
};
/*let AnimationFollowing  = function(canvas,items){
    let self = this;
    self.canvas = canvas;
    self.items = items;
    self.canvasX = self.canvas.getBoundingClientRect().left;
    self.canvasY = self.canvas.getBoundingClientRect().top;
    self.canvasCenterX = self.canvasX/2;
    self.canvasCenterY = self.canvasY/2;
    self.animDuration = 60;
    self.animFrameCounter = 0;
    self.currentItemsPos =[];
    self.floatDistance = 40;
    self.ctx = canvas.getContext('2d');
    self.locked = false;
    self.canvas.addEventListener('mousemove',function(e){
        if(!self.locked){
            self.locked = true;
            let render = [];
            for(let i = 0, l = self.items.length; i < l; i++){
                let xPos, yPos;
                let img = new Image();
                img.src = self.items[i].src;
                if(e.x - self.canvasX > self.canvasCenterX){
                    xPos = self.items[i].x + self.floatDistance;
                }else{
                    xPos = self.items[i].x -self.floatDistance;
                }
                if(e.y - self.canvasY > self.canvasCenterY){
                    yPos = self.items[i].y + self.floatDistance;
                }else{
                    yPos = self.items[i].y - self.floatDistance;
                }
                render.push({
                    img: img,
                    nextX: xPos,
                    nextY: yPos,
                    startX: xPos = self.items[i].x,
                    startY: yPos = self.items[i].y ,
                });
                self.animFrameCounter = 0;

            }
            animation(render);
            setTimeout(function(){
                self.locked = false;
            },300)
        }

    });
    function animation(array){
        self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
        array.forEach(function(item){
            let x ,y;
            if(item.startX > item.nextX){
                x = item.startX - (((item.startX - item.nextX)/ self.animDuration) * self.animFrameCounter );
            }else{
                x = item.startX + (((item.nextX - item.startX)/ self.animDuration) * self.animFrameCounter );
            }
            if(item.startY > item.nextY) {
                y = item.startY - (((item.startY - item.nextY) / self.animDuration) * self.animFrameCounter );
            }else{
                y = item.startY + (((item.nextY - item.startY )/ self.animDuration) * self.animFrameCounter );
            }
            self.ctx.drawImage(item.img,x,y);
            if(self.animFrameCounter <= self.animDuration ){
                requestAnimationFrame(function(){
                    animation(array)
                });
                self.animFrameCounter++;
            }
        })

    }
};*/
document.addEventListener('DOMContentLoaded',function(){
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%"
          }
    });
    var slides = document.querySelectorAll(".sticky-el");

    for (var i=0; i<slides.length; i++) {
        let triggerEl =  slides[i].querySelector('.end');
        new ScrollMagic.Scene({
            offset: slides[i].clientHeight - window.innerHeight,
            triggerElement: triggerEl|| slides[i],
        })
            .setPin(slides[i], {pushFollowers: false})
            .addTo(controller);
    }
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
    let targetCoords = firstScreen.getBoundingClientRect();

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
        cursor.style.top = (e.clientY - targetCoords.top) - (cursor.clientWidth/2) + 'px';
        cursor.style.left = (e.clientX - targetCoords.left) - (cursor.clientWidth/2) + 'px';


    },false)
})();
/**
 weDo block function
 */
(function(){
    let grid = document.getElementById('wedoGrid');
    let previewBlock = document.getElementById('wedoPreview');
    let previewItems = previewBlock.querySelectorAll('.wedo-preview__item');

    let canvas = previewBlock.querySelector('canvas');
    canvas.width = previewBlock.clientWidth;
    canvas.height = previewBlock.clientHeight;
    let centerCanvas = {x:canvas.width/2,y:canvas.height/2};
    let ctx = canvas.getContext("2d");
    let previewObj = {};
    let canvasItems = [
        {
            src:'dist/img/heart22.png',
            x: calcPositionByPercent({
                axis: 'x',
                posPercent: 1
            },canvas),
            y: calcPositionByPercent({
                axis: 'y',
                posPercent: 80
            },canvas),
        },
        {
            src:"dist/img/spot1.png",
            x: calcPositionByPercent({
                axis: 'x',
                posPercent: 80
            },canvas),
            y: calcPositionByPercent({
                axis: 'y',
                posPercent: 30
            },canvas),
        },
        {
            src:"dist/img/spot-small.png",
            x: calcPositionByPercent({
                axis: 'x',
                posPercent: 2
            },canvas),
            y: calcPositionByPercent({
                axis: 'y',
                posPercent: 20
            },canvas),
        }
    ];
    let currentItem = {
        preview: previewItems[0],
        button: grid.querySelector('.wedo__item.active')
    };
    let animFrameCounter = 0;
    let firstAnimDuration = 30; //in ms
    previewItems.forEach(function(item){
        let name = item.dataset.wedo;
        previewObj[name] = item;
    });
    grid.addEventListener(UTILS.tapEvent, function(e){
        if(e.target.hasAttribute('data-wedo') && currentItem.button !== e.target){
            changeItem(e.target);
        }
    });
    canvasItems.forEach(function(item){
        let img = new Image();
        img.src = item.src;
        ctx.drawImage(img,item.x,item.y);
    });
    function changeItem(newItem){
        let name = newItem.dataset.wedo;
        currentItem.preview.classList.remove('active');
        currentItem.button.classList.remove('active');
        newItem.className += ' active';
        previewObj[name].className += ' active';
        currentItem.preview = previewObj[name];
        currentItem.button = newItem;
        animationStart();
    }
    function animationStart(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        canvasItems.forEach(function(item){
            let img = new Image();
            img.src = item.src;
            let x,y;
            if(centerCanvas.x > item.x){
                x = centerCanvas.x - (((centerCanvas.x - item.x)/firstAnimDuration) * animFrameCounter)
            }else{
                x = centerCanvas.x + (((item.x - centerCanvas.x)/firstAnimDuration) * animFrameCounter);
            }
            if(centerCanvas.y > item.y) {
                y = centerCanvas.y - (((centerCanvas.y - item.y) / firstAnimDuration) * animFrameCounter)
            }else{
                y = centerCanvas.y + (((item.y - centerCanvas.y )/firstAnimDuration) * animFrameCounter)
            }
            ctx.drawImage(img,x,y);
        });
        if(animFrameCounter < firstAnimDuration){
            animFrameCounter++;
            requestAnimationFrame(animationStart);
        }else{
            animFrameCounter = 0;
        }
    }
})();

function calcPositionByPercent(obj,canvas){
    let size  = {
        y: canvas.height,
        x: canvas.width
    };
    return obj.posPercent * (size[obj.axis] / 100);
}
(function(){
    new Swiper('.ourTeam-slider', {
        slidesPerView: 4,
        initialSlide: 0,
        spaceBetween: 17,
        navigation: {
            nextEl: '.ourTeam__slider-next',
            prevEl: '.ourTeam__slider-prev'
        },
        breakpoints: {
            1300: {
                slidesPerView: 3
            },
            976: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            }
        }
    });
})();
