var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Water object used in the game
     *
     * @export
     * @class Water
     * @extends {objects.GameObject}
     */
    var Water = (function (_super) {
        __extends(Water, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Water.
         *
         * @constructor
         * @param {string} imageString
         */
        function Water(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Water.prototype._reset = function () {
            this.x = 0;
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Water.prototype._checkBounds = function () {
            if (this.x <= -1245) {
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
        Water.prototype.start = function () {
            this._reset();
            this._dx = 5; // 5px per frame down
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Water.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Water;
    }(createjs.Bitmap));
    objects.Water = Water;
})(objects || (objects = {}));
//# sourceMappingURL=water.js.map