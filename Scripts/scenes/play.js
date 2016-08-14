var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        /**
         * Creates an instance of Stage One.
         *
         */
        function Play() {
            _super.call(this);
        }
        Play.prototype._updateScoreBoard = function () {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        };
        /**
         *
         */
        Play.prototype.Start = function () {
            // water object
            this._water = new objects.Water("water");
            this.addChild(this._water);
            // coin object
            this._coin = new objects.Coin("coin");
            this.addChild(this._coin);
            // player object
            this._player = new objects.Player("sub");
            this.addChild(this._player);
            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.loop = -1;
            
            // fish array
            
            this._fishs = new Array();
            for (var count = 0; count < 3; count++) {
                this._fishs.push(new objects.Fish("fish1"));
                this.addChild(this._fishs[count]);
            }

            // include a collision managers
            this._collision = new managers.Collision();
            // add lives and score label
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Consolas", "#FFFF00", 10, 5, false);
            this.addChild(this._livesLabel);
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Consolas", "#FFFF00", 350, 5, false);
            this.addChild(this._scoreLabel);
            // add this scene to the global scene container
            core.stage.addChild(this);

        };
        Play.prototype.Update = function () {
            var _this = this;
            
            this._water.update();
            this._coin.update();
            this._player.update();
            this._collision.check(this._player, this._coin);
            
            // update each fish
            this._fishs.forEach(function (fish) {
                fish.update();
                _this._collision.check(_this._player, fish);                
            });
            this._updateScoreBoard();
            if (core.lives < 1) {
               
                this._engineSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }

            
        };
        // EVENT HANDLERS ++++++++++++++++
        Play.prototype._startButtonClick = function (event) {
            // Switch the scene
            
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));