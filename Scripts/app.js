var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    
    var dice = new createjs.Bitmap("Assets/images/1.png");
    var dice = new createjs.Bitmap("Assets/images/2.png");
    var dice = new createjs.Bitmap("Assets/images/3.png");
    var dice = new createjs.Bitmap("Assets/images/4.png");
    var dice = new createjs.Bitmap("Assets/images/5.png");
    var dice = new createjs.Bitmap("Assets/images/6.png");

    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
  
    }
    function gameLoop() {
        stage.update();
    }
    function rollButton_clicked() {
      
    }
    function main() {
        var dice1 = new createjs.Bitmap("Assets/images/blank.png");
        dice1.x = 50;
        dice1.y = 50;
        stage.addChild(dice1);
       
       
        var dice2 = new createjs.Bitmap("Assets/images/blank.png");
        dice2.x=400;
        dice2.y=50;
        stage.addChild(dice2);
       
       
        var rollButton = new createjs.Bitmap(" Assets/images/rollButton.png");
        rollButton.x = 250;
        rollButton.y = 400;
        stage.addChild(rollButton);
        rollButton.addEventListener("click", rollButton_clicked);
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map