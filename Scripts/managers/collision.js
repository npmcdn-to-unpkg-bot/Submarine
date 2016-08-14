/*
*This is the collision manager js 
*to handle the collision between 
*different objects in the game
*/

var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        Collision.prototype.check = function (player, other) {
            //check to see if object is colliding
            
            if (objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) {
            
                if (!other.isColliding) {
                    other.isColliding = true;
                    // if sub collides with fish or shark
                     
                    if (other.name === "fish1") {
                    
                        createjs.Sound.play("Crash");
                        core.lives -= 1;
                    }
                    // if sub collides with coin
                    if (other.name === "coin") {
                        createjs.Sound.play("coinc");
                        core.score += 100;
                        
                    }

                }
            }
            else {
                other.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
