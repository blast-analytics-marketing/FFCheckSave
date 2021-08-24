function checkSaveNeeded(){
    window.checkSave = setInterval(checkButton, 500);
}
function checkButton(){
    if(typeof $("a#button-1023") != 'undefined' && typeof $("a#button-1023")[0] != 'undefined' && typeof $("a#button-1023")[0].className != 'undefined' && $("a#button-1023")[0].className.indexOf("f-item-disabled") == -1){
        clearInterval(window.checkSave);
        window.originalDocTitle = document.title;
       
        function blink_text() {
            if(document.getElementById("button-1023").style.background =='rgb(255, 255, 255)'){
                document.getElementById("button-1023").style.background='rgb(255, 0, 0)';  
            }else {
                document.getElementById("button-1023").style.background='rgb(255, 255, 255)';
                if($("a#button-1023")[0].className.indexOf("f-item-disabled") > -1){
                    clearInterval(window.blinkSave);
                    clearInterval(window.autoSaveTimer);
                    checkSaveNeeded();
                }
            }
            
        }
        window.blinkSave = setInterval(blink_text, 500);
        window.autoSaveTimer = setInterval(simulateClickSave, 300000);
    }
}
function simulateClickSave(){
    $("a#button-1023")[0].click();
}
checkSaveNeeded();

window.hoverHighlightColor = '#DDDDDD';
$( 'body').on('mouseenter', '.f-grid-item.f-grid-row-collapsed,.f-grid-item.f-grid-item-selected', function () {
        $( this ).css("background-color", window.hoverHighlightColor);
        $( this ).find('.f-form-trigger-wrap.f-form-trigger-wrap-default').css("background-color", window.hoverHighlightColor)
    
});
$( 'body').on('mouseleave', '.f-grid-item.f-grid-row-collapsed,.f-grid-item.f-grid-item-selected', function () {
        $( this ).css("background-color", "white");
        $( this ).find('.f-form-trigger-wrap.f-form-trigger-wrap-default').css("background-color", "white");   
});
