// Javascript 不是非同步，而是瀏覽器非同步的把東西放到event queue
// excution stack 處理完再接著處理event queue

function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    console.log("ms",ms);
    while(new Date() < ms){
        // console.log("ms",ms);
    }
    console.log("finish function");
}

function clickHandler(){
    console.log("click event");
}
document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log("finish excution");



/* 載入網頁時點擊頁面

輸出結果：
finish function
finish excution
click event
*/