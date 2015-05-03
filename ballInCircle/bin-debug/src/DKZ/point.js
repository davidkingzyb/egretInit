var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DKZ;
(function (DKZ) {
    var point = (function (_super) {
        __extends(point, _super);
        function point() {
            _super.call(this);
            this.shp = new egret.Shape();
            this.shp.graphics.beginFill(0xff0000, 1);
            this.shp.graphics.drawCircle(0, 0, 3);
            this.shp.graphics.endFill();
            this.shp.anchorX = .5;
            this.shp.anchorY = .5;
            this.addChild(this.shp);
        }
        point.produce = function () {
            var thePoint;
            if (this.arr.length > 0) {
                thePoint = this.arr.pop();
            }
            else {
                thePoint = new DKZ.point();
            }
            return thePoint;
        };
        point.reclaim = function (thePoint) {
            if (this.arr.indexOf(thePoint) == -1) {
                this.arr.push(thePoint);
            }
        };
        point.arr = [];
        return point;
    })(egret.DisplayObjectContainer);
    DKZ.point = point;
    point.prototype.__class__ = "DKZ.point";
})(DKZ || (DKZ = {}));
