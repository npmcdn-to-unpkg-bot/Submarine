var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Coin object used in the game
     *
     * @export
     * @class Coin
     * @extends {objects.GameObject}
     */
    var Coin = (function (_super) {
        __extends(Coin, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Coin.
         *
         * @constructor
         * @param {string} imageString
         */
        function Coin(imageString) {
            _super.call(this, imageString);
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
        Coin.prototype._reset = function () {
            //this.x = -this.width;
            this.x = 700;
            // get a random x location
           // this.y = Math.floor((Math.random() * (480 - (this.height * 0.5))) + (this.height * 0.5));
            this.y = Math.floor((Math.random() * (640 - (this.height * 0.5))) + (this.height * 0.5));
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Coin.prototype._checkBounds = function () {
            if (this.x <= (-100 + (this.height * 0.5))) {
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
        Coin.prototype.start = function () {
            this._reset();
            this._dx = -7; // 5px per frame down
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Coin.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.x += this._dx;
            this._checkBounds();
        };
        return Coin;
    }(objects.GameObject));
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map