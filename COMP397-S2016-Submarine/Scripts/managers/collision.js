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
             //console.log(player.position);
             //console.log(canvas.toDataURL());
            // console.log(player.halfHeight + other.halfHeight);
            if (objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) {
             // alert("P:"+ other.name + " " + player.postion + " O:" + other.position + "D: " + player.halfHeight + other.halfHeight);
                // var url = canvas.toDataURL();
                // alert(url);
                //console.log(core.assets);
                if (!other.isColliding) {
                    other.isColliding = true;
                    // if sub collides with fish
                     
                    if (other.name === "fish1" || other.name === "fish2" || other.name === "fish3" || other.name === "fish4") {
                      //  other.name = "fish3";
                        createjs.Sound.play("Crash");
                        core.lives -= 1;
                        if(core.lives == 1){
                          //  other.name = "fish3";
                        }
                       // alert("Check" + imageString);

                    }
                    // if sub collides with coin
                    if (other.name === "coin") {
                        createjs.Sound.play("coinc");
                        core.score += 100;
                       
                    }
                    //To disappear the objects after collision
                    // other.x = -50;
                    // other.y = -50;
                    // other.position = new objects.Vector2(other.x, other.y);
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
//# sourceMappingURL=collision.js.map