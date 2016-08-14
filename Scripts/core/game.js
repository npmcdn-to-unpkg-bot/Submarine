
/**
 * @author Harshil Mehta<hmehta16@my.centennialcollege.ca>, Dvij Kumar<dparma15@my.centennialcollege.ca>, Hitesh Chavda<hchavda1@my.centennialcollege.ca>
 * @studentID 300873927, 300876336, 300823257
 * @date July 18, 2016
 * @description This file is the entry point for the game
 * @version 0.1 - Initial version of the boilerplate
 */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var core;
(function (core) {
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    // score and lives variables
    
    core.score = 0;
    core.highScore = 0;
    core.lives = 5;
    //variable declaration
    var helloLabel;
    var startButton;
    var currentScene;
    var menu;
    var over;
    var play;
    // asset for images and sounds
    var assetData = [
        { id: "startButton", src: "../../Assets/images/startButton.png" },
        { id: "restartButton", src: "../../Assets/images/restartButton.png" },
        { id: "water", src: "../../Assets/images/water.png" },
        { id: "coin", src: "../../Assets/images/coin.png" },
        { id: "sub", src: "../../Assets/images/sub1.gif" },
        { id: "fish1", src: "../../Assets/images/fish1.gif" },
        { id: "Crash", src: "../../Assets/audio/Crash.mp3" },
        { id: "coinc", src: "../../Assets/audio/coin.mp3" },
        { id: "engine", src: "../../Assets/audio/engine.mp3" }
    ];
    /**
     * This method preloads assets for the game
     * @method preload
     * @returns {void}
     */
    function preload() {
        
        core.assets = new createjs.LoadQueue(); // instantiates the loader
        core.assets.installPlugin(createjs.Sound);
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    /**
     * This method is the entry point for the application
     *
     * @method init
     * @return {void}
     */
    function init() {
        
        core.stage = new createjs.Stage(canvas); // instatiate the stage container
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
    
        // setup the default scene
        core.scene = config.Scene.MENU;
        changeScene();
    }
    /**
     * This is the main game loop
     *
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event) {
        // call the scenes's update
        currentScene.Update();
        core.stage.update(); // refreshes the stage

    }
    /**
     * This is the startButton click event handler
     *
     * @param {createjs.MouseEvent} event
     */
    function startButtonClick(event) {
        helloLabel.text = "clicked!";
    }
    function changeScene() {
        //Launch Various Scenes
        switch (core.scene) {
            // Show the MENU Scene
            case config.Scene.MENU:
                core.stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the PLAY Scene
            case config.Scene.PLAY:
                core.stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                core.stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
        }
    }
    core.changeScene = changeScene;
    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);
})(core || (core = {}));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=game.js.map