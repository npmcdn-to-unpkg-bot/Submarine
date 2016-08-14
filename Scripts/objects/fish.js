var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Fish object used in the game
     *
     * @export
     * @class Fish
     * @extends {createjs.Bitmap}
     */
    var Fish = (function (_super) {
        __extends(Fish, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Fish.
         *
         * @constructor
         * @param {string} imageString
         */
        function Fish(imageString) {
            _super.call(this, imageString);
           // alert(imageString);
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Fish.prototype._reset = function () {
            this._dx = Math.floor((Math.random() * 5) + 4); // vertical speed
            this._dy = Math.floor((Math.random() * 4) - 2); // horizontal drift
            this.x = 700;
            // get a random x location
            this.y = Math.floor((Math.random() * (640 - (this.height * 0.5))) + (this.height * 0.5));
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Fish.prototype._checkBounds = function () {
            if (this.x <= (-180 + (this.height * 0.5))) {
                this._reset();
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
        Fish.prototype.start = function () {
            this._reset();
           // console.log("Size of fish:" + this.height + "Width:" + this.width);
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Fish.prototype.update = function () {

            this.position = new objects.Vector2(this.x, this.y);
            this.x -= this._dx;
            this.y -= this._dy;
            this._checkBounds();
            
        };
        return Fish;
    }(objects.GameObject));
    objects.Fish = Fish;
})(objects || (objects = {}));
//# sourceMappingURL=fish.js.map