var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Player object used in the game
     *
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    var Player = (function (_super) {
        __extends(Player, _super);
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */

        function Player(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        /**
        * This method checks if the object has reached its boundaries
        *
        * @private
        * @method _checkBounds
        * @returns {void}
        */
        Player.prototype._checkBounds = function () {
            // checkbounds to stop player from going outside
            // check right bounds
            if (this.x >= (500 - (this.height * 0.5))) {
                this.x = (500 - (this.height * 0.5));
            }
            // check left bounds
            if (this.y <= (0 + (this.height * 0.5))) {
                this.y = (0 + (this.height * 0.5));
            }

            if (this.y >= (480 - (this.height * 0.5))) {
                this.y = (480 -  (this.height * 0.5));
            }
            if (this.x <= (0+(this.height * 0.5))){
                this.x = (0 + (this.height * 0.5));
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Player.prototype.start = function () {
            this.x = 50;
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        //To move the submarine foward and backward
        var dx=50;
        var dy=50;
        Player.prototype.update = function () {
            // player to follow mouse

        
            // console.log("before" + this.y);
            //Using keystrokes move the submarine
            window.onkeydown = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
//alert(key);
//For Left arrow key
   if (key == 37) {
     dx -= 5;
     if (dx<=50){
         dx = 50;
     }
   }
// //For top arrow key
//    else if (key == 40) {
//      dy -= 5;
//      if (dy<=50){
//          dy = 50;
//    }
// }
//console.log(this.x);
//For Right arrow key       
   else if (key == 39) {
       dx += 5;
       if(dx>=500){
           dx=500;
       }
   }
//For UP arrow key
// else if (key == 38) {
//        dy += 5;
//        if(dy>=430){
//            dy=430;
//        }
//    }
   
}
// this.y = dy;
// this.x = dx;
  //console.log(this.x + " y:" + this.y);
            this.position = new objects.Vector2(this.x, this.y);
            this.y = dy;
            this.x = dx;
            dy = core.stage.mouseY;
           // dx = core.stage.mouseX;
            this._checkBounds();
// console.log("Position:" + Player.position);
        };
     //   console.log("Position:" + Player.position);
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map