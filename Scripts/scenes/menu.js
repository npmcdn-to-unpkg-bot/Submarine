var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Menu() {
            _super.call(this);
        }
        /**
         *
         */
        Menu.prototype.Start = function () {
            // Add Water Background
            this._water = new objects.Water("water");
            this.addChild(this._water);
            
            // Add Menu Label
            this._menuLabel = new objects.Label("SUBMARINE", "60px", "Bradley Hand ITC", "#FFFFDD", 320, 140, true);
            this.addChild(this._menuLabel);
            // add the start button
            this._startButton = new objects.Button("startButton", 320, 300, true);
            this.addChild(this._startButton);
            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Menu.prototype.Update = function () {
            // scene updates happen here...
            this._water.update();
        };
        // EVENT HANDLERS ++++++++++++++++
        Menu.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));