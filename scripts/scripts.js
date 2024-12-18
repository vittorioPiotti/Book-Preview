

function resizeParticles() {
const container = document.getElementById('particles-js');

if (!container) {
    return; 
}

if (window.pJSDom && window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
}

particlesJS("particles-js", {
    "particles": {
            "number": {
            "value": 355,
            "density": {
                "enable": true,
                "value_area": 789.15
            }
            },
            "color": {
            "value": "#ffffff"
            },
            "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
            },
            "opacity": {
            "value": 0.49,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.25,
                "opacity_min": 0,
                "sync": false
            }
            },
            "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.333,
                "size_min": 0,
                "sync": false
            }
            },
            "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
            },
            "move": {
            "enable": true,
            "speed": 0.1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
            },
            "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                "opacity": 1
                }
            },
            "bubble": {
                "distance": 83.9,
                "size": 1,
                "duration": 3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
            }
        },
        "retina_detect": true
    });
}

document.addEventListener("DOMContentLoaded", () => {
    resizeParticles();
    window.addEventListener('resize', resizeParticles); 
});



const wrapper = document.querySelector('.wrapper')
const svg = document.querySelector('.svg-style');
const body = document.querySelector('body');
const container = document.querySelector('.inner-container');
const outerContainer = document.querySelector('.outer-container')
const btnContainer = document.querySelector('.button-outer-container')
const  overlay = document.querySelector('.overlay-darksoul');
const  circle = document.querySelector('.darksoul-fluid-liquid--circle');
const scrollThreshold = 3;
const section = document.querySelector(".book-showcase");
const book = document.querySelector(".book");
const overlays = document.querySelectorAll(".overlay");
const btn = document.querySelector(".button-first-container");
const containerDarksoul = document.querySelector(".container-darksoul");
const sensitivity = 1.5;
const maxRotationY = 30;
const minRotationY = -30;
const LONG_PRESS_DURATION = 250; 
const startTime = Date.now(); 
let x = 0;
let y = 0;
let prevX_ = 0;
let prevY_ = 0;
let calcX_ = 0;
let calcY_ = 0;
let movements = 0;
let lastMovements  = 0;
let incrementGradient = {};
let  decrementGradient = {};
let incScaleCircle = {};
let decrementInterval2 = {}
let incShadowInterval = {};
let decShadowInterval = {};
let fontSizeInterval = {};
let intervalId = {}
let fontSizeTarget = 10;
let isClickProcessing = false; 
let countScroll = 0;
let lastScroll = -1;
let isScrolling = false; 
let startX = 0, startY = 0; 
let gradientPosition = 20; 
let countGradientPosition = 0;
let currentScale = 0.1;
let prevX = 0, prevY = 0; 
let lastShadowDim = 0;
let reverseShadow = false;
let isDragging = false; 
let arrest = false;
let waitStopArrest = false;
let isHover = false;
let intervalBtnHover = {};
let intervalBtnPress = {};
let intervalBtnRelease = {}
let isSingleClick = false;
let countInteraction = 0;
let isFinished = true;
let isLongPress = false; 
let pressTimeout; 
let isMouseDown = false; 
let isMouseMoved = false; 
let lastRotationX = 0;
let lastRotationY = 0;
let countArrest = 0;
let switchCount = false;
let isOkay = false;
let cursorX = 0;
let cursorY = 0;
let scale = 0;
let scalend = 0;



document.addEventListener('mousemove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;
});





function showZoomAlert() {
    const screenWidth = window.screen.width;
    const viewportWidth = document.documentElement.clientWidth; 
    const zoomLevel = (screenWidth / viewportWidth) * 100; 
    const zoomPercentage = zoomLevel.toFixed(2); 
    return zoomPercentage;
}






function calculateProportionalFont(fontReference, zoomReference, currentZoom) {
    return fontReference * (zoomReference / currentZoom);
}
    
function handleResize() {
    let zoomPercentage = showZoomAlert();
    const currentTime = Date.now(); 
    const elapsedTime = currentTime - startTime; 
    let flag = true;
    if (elapsedTime <= 1000) {
        flag = false;
    }
        const height = window.innerHeight;
        fontSizeTarget = 10;

        const width = window.innerWidth;

    
        let i = 0;
        scale = 1;
        do {            
            scale += 0.25;
            fontSizeTarget = 5+ 2 * i;
            i++;
        
        
        } while (width - (i-1) * 50>= 200 + 200 * (i-1) );


    

    do {
    
        let app = scale;
        scale -= 0.25;
        fontSizeTarget =  5+ 2 * i;
        if(scale < 0.25){
            scale = app/3;
        }
        i--;
    
        
    } while (height - (i+1) * 50 <= 400 + 100 * (i+1));

    
    const calculatedFont = calculateProportionalFont(10,100 ,zoomPercentage < 100 ? 130-(zoomPercentage/25)*3 : zoomPercentage > 100  ? 100+(zoomPercentage/15) : 100);
    fontSizeTarget = calculatedFont;
    outerContainer.style.transition = 'transform 0.5s ease';  
    outerContainer.style.transform = `scale(${scale})`
}


window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);


btn.style.pointerEvents = 'none';
btn.style.transform = 'scale(0.0)';
intBtn()
setTimeout(() => {
    btn.style.transform = `scale(1)`;
}, 600);
circle.style.display = "none";
section.style.display = "none";
overlay.style.transition = 'transform 0.5s ease';     
overlay.style.display = "flex";
overlay.style.transform = 'scale(0.0)';
overlay.style.transform = 'circle(0.0)';
setTimeout(startAnimationSequence, 600);


function doDecrementInterval2(){
    clearInterval(decrementInterval2)
    decrementInterval2 = setInterval(() => {
    if (currentScale > 0.01) {  
        currentScale -= 0.05; 
        circle.style.transform = `scale(${currentScale})`;  
    } else {
        countScroll = 0;
        clearInterval(incShadowInterval);
        clearInterval(decrementInterval2);  
        currentScale = 0.1; 
    }
    }, 25);
}
function doDecShadowInterval(){
    clearInterval(doDecShadowInterval)
    decShadowInterval = setInterval(() => {
        if(lastShadowDim >= 0){
            lastShadowDim += reverseShadow ? 1 : -1;
            let shadow = `inset 0 0 ${lastShadowDim}px rgba(60, 60, 60, 0.5)`; 
            overlay.style.boxShadow = shadow;
            reverseShadow = false;
            if(lastShadowDim <= 0){
                lastShadowDim = 0;
                clearInterval(decShadowInterval);
            }
        }else{
            clearInterval(decShadowInterval);
        }
    }, 25);
}
function doDecrementGradient(){
    decrementGradient = setInterval(() => {
        if (countGradientPosition > 20) { 
            countGradientPosition -= 0.5; 
            gradientPosition = countGradientPosition;
            overlay.style.background = `radial-gradient(circle, rgba(71, 76, 83, 0.9) 0%, rgb(39, 39, 46) ${countGradientPosition}%, rgb(18, 18, 18) 70%)`; 
        } else {
            clearInterval(incShadowInterval);
            clearInterval(decrementGradient);
            circle.style.display = "none";
                clearInterval(incrementGradient); 
                clearInterval(decShadowInterval);
                doDecShadowInterval();
            countGradientPosition = 0;
            gradientPosition = 20;
            
        }
    },25);
}
function resetPosition(rotateX, rotateY) {
    if (rotateX < -90 || rotateX > 90 || rotateY < -90 || rotateY > 90) {
        [rotateX, rotateY] = [-180 - Math.abs(rotateX),360 - Math.abs(rotateY)];
    }
    book.style.transition = "none";
    book.style.transform = `rotateY(${-rotateY}deg) rotateX(${rotateX}deg)`;
    setTimeout(() => {
        book.style.transition = "transform 1.5s ease-out";
        book.style.transform = "rotateY(30deg) rotateX(0deg)";
        x = 0;
        y = 0;
        prevX_ = 0;
        prevY_ = 0;
        calcX_ = 0;
        calcY_ = 0;
        clearInterval(incrementGradient)
        clearInterval(incScaleCircle)
        clearInterval(incShadowInterval)
        isClickProcessing = false; 
        countScroll = 0;
        lastScroll = -1;
        isScrolling = false; 
        startX = 0, startY = 0; 
        prevX = 0, prevY = 0; 
        reverseShadow = false;
        isDragging = false; 
        arrest = false;
        waitStopArrest = false;
    }, 50);
}
function initializeBookRotation() {
    book.style.transition = "none";
    book.style.transform = "rotateY(-330deg) rotateX(330deg)";
    let fontSize = 1;
    const fontSizeStep = fontSizeTarget < 15 ? 0.1 : 0.5;
    const intervalTime = 20;
    clearInterval(fontSizeInterval)
    fontSizeInterval = setInterval(() => {
        fontSize += fontSizeStep;
        section.style.fontSize = `${Math.min(fontSize, fontSizeTarget)}px`;
        if (fontSize >= fontSizeTarget) {
            clearInterval(fontSizeInterval);
        }
    }, intervalTime);
    setTimeout(() => {
        book.style.transition = "transform 1.5s ease-out";
        book.style.transform = "rotateY(30deg) rotateX(0deg)";
    }, 100);
}
function hoverBtn(){
    if(isFinished == true ){
        isHover = true;
        let shadowOuter = `0 0 12px 5px rgb(60, 60, 60)`; 
        btn.style.boxShadow = `${shadowOuter}`;
        doIntervalBtnHover();
    }
}
function leaveBtn(event){
    countInteraction++;
    if(isFinished == true){
        btn.style.boxShadow = `none`;
        const isTouchEvent = event.type.startsWith("touch");
        if(!isTouchEvent){
            if (isCursorOverElement(btnContainer)) {
                isHover = false;
                hoverBtn();
            } else {
                clearInterval(intervalBtnHover)
            }
        }
    }
}
function doIntervalBtnHover(){
    clearInterval(intervalBtnHover)
    intervalBtnHover = setInterval(() => {
        updateBorderRadiusSecond();
    }, 50);
}
function doIntervalBtnRelease(){
    clearInterval(intervalBtnRelease);
    const lastWidth = btn.clientHeight * 2;
    let width = btn.clientWidth;
    intervalBtnRelease = setInterval(() => {
    if (width < lastWidth) {
        width += 5; 
        btn.style.width = `${width}px`; 
    } else {
        clearInterval(intervalBtnRelease); 
    }
    }, 25);
}
function upBtn(event){
    if(isFinished == true ){            
        btn.style.boxShadow = `none`;
        clearInterval(intervalBtnPress)
        const computedStyles = getComputedStyle(document.documentElement);
        clearInterval(intervalBtnPress);
        doIntervalBtnRelease();
        const isTouchEvent = event.type.startsWith("touch");
        if(!isTouchEvent){
            if (isCursorOverElement(btnContainer)) {
                isHover = false;
                hoverBtn();
            } 
        }
    }
}
function isCursorOverElement(element) {
    const rect = element.getBoundingClientRect();
    return (
        cursorX >= rect.left &&
        cursorX <= rect.right &&
        cursorY >= rect.top &&
        cursorY <= rect.bottom
    );
}
function downloadPDF() {
    const link = './assets/Epoxopec 3036.pdf';
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.target = '_blank'; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

function completeAnimationBtn(event){
    if(countInteraction == 0 && !isSingleClick){
        clearInterval(intervalBtnHover)
        document.documentElement.style.setProperty('--border-top-left-btn', '100%');
        document.documentElement.style.setProperty('--border-top-right-btn', '100%');
        document.documentElement.style.setProperty('--border-bottom-left-btn', '100%');
        document.documentElement.style.setProperty('--border-left-btn', '100%');
        document.documentElement.style.setProperty('--border-right-btn', '100%');
        document.documentElement.style.setProperty('--border-top-btn', '100%');
        document.documentElement.style.setProperty('--border-bottom-btn', '100%');
        document.documentElement.style.setProperty('--border-bottom-right-btn', '100%');    
        btn.style.transition = 'all 0.5s ease';  
        btn.style.boxShadow = 'none';  
        btn.style.border = '2px solid white';  
        btn.style.background = 'radial-gradient(circle, rgba(71, 76, 83, 0.9) 0%, rgb(39, 39, 46) 20%, rgb(18, 18, 18) 70%)';
        setTimeout(()=>{
            btn.style.transition = 'all 0.5s ease';  
            let shadowInset = `0 0 12px 5px rgb(60, 60, 60)`; 
            btn.style.boxShadow = ` ${shadowInset}`;
            setTimeout(()=>{
                btn.style.transition = 'all 0.5s ease';  
                btn.style.boxShadow = 'none'; 
                btn.style.border = '4px solid rgb(60, 60, 60)';
                btn.style.background = ' rgb(18, 18, 18)';  
                doIntervalBtnHover();
                doIntervalBtnRelease();
                setTimeout(()=>{
                    const isTouchEvent = event.type.startsWith("touch");
                    if(!isTouchEvent){
                        if (isCursorOverElement(btnContainer)) {
                            isHover = false;
                            hoverBtn();
                        } else {
                            clearInterval(intervalBtnHover)
                        } 
                    }else {
                        clearInterval(intervalBtnHover)
                    } 
                    btn.style.transition = 'all 0.5s ease'; 
                    btn.style.boxShadow = 'none'; 
                    downloadPDF();
                    leaveBtn(event);
                    isHover = false;
                    setTimeout(()=>{
                        isFinished = true; 
                    },500)
                },500)
            },500)
        },500)
    }else{
        countInteraction = 0;
        doIntervalBtnRelease();
        isFinished = true;
        const isTouchEvent = event.type.startsWith("touch");
        if(!isTouchEvent){
            if (isCursorOverElement(btnContainer)) {
                isHover = false;
                hoverBtn();
            } else {
                clearInterval(intervalBtnHover)
                btn.style.transition = 'all 0.5s ease'; 
                btn.style.boxShadow = 'none';                 
            }
        }else {
            clearInterval(intervalBtnHover)
            btn.style.transition = 'all 0.5s ease'; 
            btn.style.boxShadow = 'none';  
        } 
    }
    if(isSingleClick){
        countInteraction = 0;
    }
}
function pressBtn(event){

    if(isFinished == true){
        hoverBtn();
        let shadowOuter = `0 0 12px 5px rgb(60, 60, 60)`; 
        btn.style.boxShadow = ` ${shadowOuter}`;
        let isPressed = true; 
        let width = btn.clientWidth;
        const height = btn.clientHeight;
        btn.style.transition = 'all 1s ease';
        clearInterval(intervalBtnPress);
        intervalBtnPress = setInterval(() => {
            if (width > height) {
                width -= 5; 
                btn.style.width = `${width}px`; 
            } else {
                isFinished = false;
                countInteraction = 0;
                clearInterval(intervalBtnPress);
                    setTimeout(   ()=>{
                        if(btn.clientWidth  <=  btn.clientHeight){
                            completeAnimationBtn(event);                            
                        }else{
                            isFinished = true;
                        }
                    },1000
                )
            }
        }, 25); 
    }
}
function handlePressStart(event) {
    isLongPress = false;
    isMouseDown = true;
    isMouseMoved = false;
    pressTimeout = setTimeout(() => {
        isLongPress = true;
        pressBtn(event);
    }, LONG_PRESS_DURATION);
}
function handlePressEnd(event) {
    clearTimeout(pressTimeout);
    if (isLongPress) {
        countInteraction++;
        upBtn(event);
    } else {
        pressBtn(event);
    }
    isMouseDown = false;
    isMouseMoved = false;
}
btnContainer.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    handlePressStart(e);
});
btnContainer.addEventListener('touchend', (e) => {
    e.preventDefault(); 
    handlePressEnd(e);
});
btnContainer.addEventListener('mouseover', (event) => {
    const isTouchEvent = event.type.startsWith("touch");
    if(!isTouchEvent){
            hoverBtn();
    }    
});
btnContainer.addEventListener('mouseleave', (e) => {
    clearInterval(intervalBtnHover)
    btn.style.transition = 'all 0.5s ease'; 
    btn.style.boxShadow = 'none'; 
});
btnContainer.addEventListener('mouseout', (e) => {
    clearInterval(intervalBtnHover)
    btn.style.transition = 'all 0.5s ease';
    btn.style.boxShadow = 'none'; 
});
btnContainer.addEventListener('mousedown', (e) => {
    handlePressStart(e);
});
btnContainer.addEventListener('mouseup', (e) => {
    handlePressEnd(e);
});
function startAnimationSequence() {
    overlay.style.transform = 'scale(1)';
    wheel(10, 10);
    setTimeout(() => {
        doIncrementGradient();
        doIncShadowInterval();
        section.style.display = "flex";
        initializeBookRotation();
        const maxCalls = 10; 
        let count = 0;
        const intervalTime = 200; 
        intervalId = setInterval(() => {
            if (!isOkay) {
                const randomValue1 = getRandomValue(10, 999);
                const randomValue2 = getRandomValue(10, 999);
                wheel(randomValue1, randomValue2);
                count++;
                if (count >= maxCalls || isOkay) {
                    clearInterval(intervalId);                        
                }
            } else {
                clearInterval(intervalId);
            }
        }, intervalTime);
        setTimeout(()=>{
            if(!isOkay){
                clearInterval(incrementGradient); 
                clearInterval(decrementGradient)
                doDecrementGradient();
                isClickProcessing = false; 
                clearInterval(incScaleCircle); 
                clearInterval(incShadowInterval)
                clearInterval(decrementInterval2)
                doDecrementInterval2();
                setTimeout(() => {
                    x = 0;
                    y = 0;
                    prevX_ = 0;
                    prevY_ = 0;
                    calcX_ = 0;
                    calcY_ = 0;
                    clearInterval(incrementGradient)
                    clearInterval(incScaleCircle)
                    clearInterval(incShadowInterval)
                    isClickProcessing = false; 
                    countScroll = 0;
                    lastScroll = -1;
                    isScrolling = false; 
                    startX = 0, startY = 0; 
                    prevX = 0, prevY = 0; 
                    reverseShadow = false;
                    isDragging = false; 
                    arrest = false;
                    waitStopArrest = false;
                }, 50);
            }
        },1500)  
    }, 500);
}
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
container.addEventListener('click', (event) => {
    click(event);
});
container.addEventListener('touchstart', (event) => {
    if (event.touches.length > 1) {  
        end(event)
    }else{
        startRotate(event);
    }
});
container.addEventListener('touchmove', (event) => {
    if (event.touches.length > 1) {  
        end(event)
        event.preventDefault(); 
    }else{
    move(event)
    event.preventDefault(); 
    }
});
body.addEventListener('touchend', () => {
    if (event.touches.length > 1 && arrest == false) {
        body.style.backgroundColor ="red";
        arrest = true;
        waitStopArrest = true;
        setTimeout(() => {
            waitStopArrest = false;
            isClickProcessing = false;
            isDragging = false;
            isScrolling = false;
    }, 1000);
    }else{
        if(arrest == false){
            end(event)
        }
    }
});
body.addEventListener('touchstart',(event) =>{
    if(event.touches.length === 1 && waitStopArrest == false){
        arrest = false;
    }
})
body.addEventListener('touchmove', (event) => {
    if (event.touches.length > 1 && arrest == false) {  
        arrest = true;
        waitStopArrest = true;
        setTimeout(() => {
            waitStopArrest = false;
            isClickProcessing = false;
            isDragging = false;
            isScrolling = false;
    }, 1000);
    }
});
container.addEventListener('mousedown', (event) => {
    isDragging = true;
    startRotate(event);
});

container.addEventListener('mousemove', (event) => {
    if (isDragging) {
        move(event);
    }
});
body.addEventListener('mouseup', () => {
    if (isDragging) {
        isScrolling = false;
        isDragging = false;
        end(event);
    }
});
function click(event) {
    if(movements == 0){
        const isTouchEvent = event.type.startsWith("touch");
        const isScrollingOrDragging = isTouchEvent ? isScrolling : isDragging;
        if(arrest == false  ){
            if (!isClickProcessing && !isScrollingOrDragging) {
                isClickProcessing = true;
                const matrix = window.getComputedStyle(book).transform;
                if (matrix !== 'none') {
                    const values = matrix.match(/matrix3d\(([^)]+)\)/);
                    if (values) {
                        const matrixValues = values[1].split(', ').map(parseFloat);        
                        const rotateX = Math.atan2(matrixValues[6], matrixValues[10]) * (180 / Math.PI);
                        const rotateY = Math.atan2(matrixValues[2], matrixValues[0]) * (180 / Math.PI);
                        resetPosition(rotateX, rotateY)
                    }
                }
                setTimeout(() => {
                    isClickProcessing = false;
                    isScrolling = false;
                }, 250);
            }
        }
    }
}
function start(event = {}){
    if (arrest == false){
        let length = -1;
        try {
            startX = event.touches[0].pageX ;
            startY = event.touches[0].pageY ;
            length = event.touches.length;
        } catch (error) {
            try {
                startX =  event.pageX;
                startY =  event.pageY;
                length = 1;

            } catch (error) {
                return;
            }
        }
        if (isOkay == false || (length === 1 && !isClickProcessing && !isScrolling)) {
            prevX = startX; 
            prevY = startY; 
            isClickProcessing = true;
            clearInterval(decrementGradient); 
            clearInterval(decrementInterval2);
            clearInterval(decShadowInterval);
            doIncrementGradient();

        }
    }
}
function doIncShadowInterval(){
    clearInterval(incShadowInterval);
    incShadowInterval = setInterval(() => {
            lastShadowDim += reverseShadow ? -1 : 1;
            
            let shadow = `inset 0 0 ${lastShadowDim}px rgba(60, 60, 60, 0.5)`; 
            overlay.style.boxShadow = shadow;
            if(lastShadowDim >= 50){
                reverseShadow = true;
            }if(lastShadowDim <= 0){
                reverseShadow = false;
            }
        }, 25);
}
function doIncrementGradient(){
    clearInterval(incrementGradient);
        incrementGradient = setInterval(() => {
            if (gradientPosition < 40) {
                gradientPosition += 0.5; 
                countGradientPosition = gradientPosition;
                overlay.style.background = `radial-gradient(circle, rgba(71, 76, 83, 0.9) 0%, rgb(39, 39, 46) ${gradientPosition}%, rgb(18, 18, 18) 70%)`;
            } else {
                clearInterval(incrementGradient); 
                isClickProcessing = false; 
                doIncShadowInterval()
            }
    }, 25);
}
function move(event = {}){
    if(arrest == false){
        let moveX;
        let moveY;
        try {
            moveX = event.touches[0].pageX ;
            moveY = event.touches[0].pageY ;
        } catch (error) {
            try {
                moveX =  event.pageX;
                moveY =  event.pageY;
            } catch (error) {
                return;
            }
        }
        let currentX;
        let currentY;
        try {
            currentX = event.touches[0].clientX ;
            currentY = event.touches[0].clientY ;
        } catch (error) {
            try {
                currentX =  event.clientX;
                currentY =  event.clientY;
            } catch (error) {
                return;
            }
        }
        isOkay = true;
        const deltaX_ = currentX - x;
        const deltaY_ = currentY - y;
        calcX_ = deltaX_ / sensitivity;
        calcY_ = -deltaY_ / sensitivity;
        const totalRotationX = calcX_ + prevX_;
        let totalRotationY = calcY_ + prevY_;
        movements++;
        totalRotationY = Math.max(Math.min(totalRotationY, maxRotationY), minRotationY);
        book.style.transform = `rotateY(${totalRotationX}deg) rotateX(${totalRotationY}deg)`;
        updateOverlays(totalRotationX, calcX_);
        const deltaX = moveX - prevX;
        const deltaY = moveY - prevY;
        if (Math.abs(deltaX) > scrollThreshold || Math.abs(deltaY) > scrollThreshold) {
            isScrolling = true;
            wheel(deltaX, deltaY); 
        }
        prevX = moveX;
        prevY = moveY;
    }
}
function end(event){
    if(arrest == false){
        const isTouchEvent = event.type.startsWith("touch");
        const isScrollingOrDragging = isTouchEvent ? isScrolling : isDragging;
        if (!isScrollingOrDragging && !isClickProcessing) {
            clearInterval(incrementGradient);
            clearInterval(decrementGradient)
            doDecrementGradient();
            isClickProcessing = false; 
            clearInterval(incScaleCircle); 
            clearInterval(incShadowInterval)
            clearInterval(decrementInterval2)
            doDecrementInterval2();
        }else{
            clearInterval(incrementGradient); 
            clearInterval(decrementGradient)
            doDecrementGradient();
            isClickProcessing = false; 
            clearInterval(incScaleCircle); 
            clearInterval(incShadowInterval)
            clearInterval(decrementInterval2)
            doDecrementInterval2();
        }
        isClickProcessing = false;
        isScrolling = false;
        countScroll = 0;
        stopRotate()
    }
    lastMovements = movements;
    setTimeout(()=>{
        if(lastMovements == movements){
            movements = 0;
        }
    },100)
}
function wheel(deltaX = 0, deltaY = 0) {
    if(arrest == false){
        isScrolling = true;
        if (deltaX !== 0 || deltaY !== 0) {
            if(countScroll == 0){
                if (circle.style.display === "none") {
                    circle.style.display = "block";  
                    currentScale = 0.1;
                    circle.style.transform = `scale(${currentScale})`; 
                    incScaleCircle = setInterval(() => {
                        if (currentScale < 1) {
                            currentScale += 0.05; 
                            circle.style.transform = `scale(${currentScale})`;  
                        } else {
                            clearInterval(incScaleCircle);  
                        }
                    }, 25);  
                } else {
                    let currentScale = 1;  
                    circle.style.transform = `scale(${currentScale})`; 
                }      
            }
            updateBorderRadius(deltaX,deltaY);
        }
    }
}
function intBtn(){
    document.documentElement.style.setProperty('--border-top-left-btn', `${ parseFloat(Math.floor( 20 + Math.random() * 50)).toFixed(2)}%`);
    document.documentElement.style.setProperty('--border-top-right-btn', `${ parseFloat(Math.floor( 20 + Math.random() * 50)).toFixed(2)}%`);
    document.documentElement.style.setProperty('--border-bottom-left-btn', `${ parseFloat(Math.floor( 20 + Math.random() * 50)).toFixed(2)}%`);
    document.documentElement.style.setProperty('--border-left-btn', `${ parseFloat(Math.floor( 20 + Math.random() * 50)).toFixed(2)}%`);
    document.documentElement.style.setProperty('--border-right-btn', `${ parseFloat(Math.floor( 20 + Math.random() * 50)).toFixed(2)}%`);
    document.documentElement.style.setProperty('--border-top-btn', `${ parseFloat(Math.floor( 20 + Math.random() * 50)).toFixed(2)}%`);
    document.documentElement.style.setProperty('--border-bottom-btn', `${ parseFloat(Math.floor( 20 + Math.random() * 50)).toFixed(2)}%`);
    document.documentElement.style.setProperty('--border-bottom-right-btn', `${ parseFloat(Math.floor( 20 + Math.random() * 50)).toFixed(2)}%`);
}
function updateBorderRadiusSecond() {
    let randomNumber = Math.floor(Math.random() * 8);
    let randomNumberSecond = Math.floor( 20 + Math.random() * 50);
    const lastRandomNumber = randomNumber;
    switch(randomNumber){
        case 0:
            document.documentElement.style.setProperty('--border-top-left-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);

            break;
        case 1:
            document.documentElement.style.setProperty('--border-top-right-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 2:
            document.documentElement.style.setProperty('--border-bottom-left-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 3:
            document.documentElement.style.setProperty('--border-left-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;  
        case 4:
            document.documentElement.style.setProperty('--border-right-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 5:
            document.documentElement.style.setProperty('--border-top-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 6:
            document.documentElement.style.setProperty('--border-bottom-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 7:
            document.documentElement.style.setProperty('--border-bottom-right-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
    }
    do{
        randomNumber = Math.floor(Math.random() * 8);
    }while(randomNumber == lastRandomNumber);
    randomNumberSecond = Math.floor( 20 + Math.random() * 50);
    switch(randomNumber){
        case 0:
            document.documentElement.style.setProperty('--border-top-left-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 1:
            document.documentElement.style.setProperty('--border-top-right-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 2:
            document.documentElement.style.setProperty('--border-bottom-left-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 3:
            document.documentElement.style.setProperty('--border-left-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;  
        case 4:
            document.documentElement.style.setProperty('--border-right-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 5:
            document.documentElement.style.setProperty('--border-top-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 6:
            document.documentElement.style.setProperty('--border-bottom-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 7:
            document.documentElement.style.setProperty('--border-bottom-right-btn', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
    }
}

function updateBorderRadius() {
    countScroll++;
    let randomNumber = Math.floor(Math.random() * 8);
    let randomNumberSecond = Math.floor( 20 + Math.random() * 50);
    const lastRandomNumber = randomNumber;
    switch(randomNumber){
        case 0:
            document.documentElement.style.setProperty('--border-top-left', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);

            break;
        case 1:
            document.documentElement.style.setProperty('--border-top-right', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 2:
            document.documentElement.style.setProperty('--border-bottom-left', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 3:
            document.documentElement.style.setProperty('--border-left', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;  
        case 4:
            document.documentElement.style.setProperty('--border-right', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 5:
            document.documentElement.style.setProperty('--border-top', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 6:
            document.documentElement.style.setProperty('--border-bottom', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 7:
            document.documentElement.style.setProperty('--border-bottom-right', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
    }
    do{
        randomNumber = Math.floor(Math.random() * 8);
    }while(randomNumber == lastRandomNumber);
    randomNumberSecond = Math.floor( 20 + Math.random() * 50);
    switch(randomNumber){
        case 0:
            document.documentElement.style.setProperty('--border-top-left', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 1:
            document.documentElement.style.setProperty('--border-top-right', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 2:
            document.documentElement.style.setProperty('--border-bottom-left', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 3:
            document.documentElement.style.setProperty('--border-left', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;  
        case 4:
            document.documentElement.style.setProperty('--border-right', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 5:
            document.documentElement.style.setProperty('--border-top', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 6:
            document.documentElement.style.setProperty('--border-bottom', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
        case 7:
            document.documentElement.style.setProperty('--border-bottom-right', `${ parseFloat(randomNumberSecond).toFixed(2)}%`);
            break;
    }
}
function startRotate(event) {
    x = event.clientX || event.touches[0].clientX;
    y = event.clientY || event.touches[0].clientY;
    applyOverlayTransition("background 0.5s ease", 1);
    start(event);
}
function stopRotate() {
    clearInterval(incShadowInterval);
    applyOverlayTransition("opacity 1s ease", 0);
    prevX_ += calcX_;
    prevY_ += calcY_;
} 
function applyOverlayTransition(transition, opacity) {
    overlays.forEach((overlay) => {
        overlay.style.transition = transition;
        overlay.style.opacity = opacity;
    });
}
function updateOverlays(totalRotationX, calcX_) {
    const light = Math.abs((totalRotationX % 360) / 360);
    const gradientAngle = 135 + calcX_ * 5;
    overlays.forEach((overlay) => {
        const dynamicLight = light < 0.5 ? 1 - light : light;
        const secondaryLight = dynamicLight * 0.8;
        overlay.style.background = `linear-gradient(${gradientAngle / 2}deg, rgba(180, 180, 180, ${dynamicLight / 2}), rgba(80, 80, 120, ${secondaryLight / 2}))`;
    });
}