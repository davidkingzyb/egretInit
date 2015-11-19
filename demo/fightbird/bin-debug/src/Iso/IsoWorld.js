/**
 * Created by May on 2015/5/18.
 * update by DKZ on 2015/8/28.
 */
var Iso;
(function (Iso) {
    var IsoWorld = (function (_super) {
        __extends(IsoWorld, _super);
        function IsoWorld() {
            _super.call(this);
            this._objects = [];
            this._floor = new egret.DisplayObjectContainer();
            this._world = new egret.DisplayObjectContainer();
            this.addChild(this._world);
            this.addChild(this._floor);
        }
        var __egretProto__ = IsoWorld.prototype;
        __egretProto__.addChildToWorld = function (child) {
            this._world.addChild(child);
            this._objects.push(child);
            this.sort();
        };
        __egretProto__.removeChildFromWorld = function (child) {
            if (this._world.contains(child)) {
                this._world.removeChild(child);
            }
            var index = this._objects.indexOf(child);
            if (index !== -1) {
                this._objects.splice(index, 1);
            }
        };
        __egretProto__.addChildToFloor = function (child) {
            this._floor.addChild(child);
        };
        __egretProto__.removeChildFromFloor = function (child) {
            if (this._floor.contains(child)) {
                this._floor.removeChild(child);
            }
        };
        /**
         * 对 world 内的对象进行层深排序
         */
        __egretProto__.sort = function () {
            this._objects.sort(function (a, b) {
                return a.depth - b.depth;
            });
            for (var i = 0; i < this._objects.length; i++)
                this._world.setChildIndex(this._objects[i], i);
        };
        /**
         * 检测一个IsoObject是否可以移动
         * @param obj
         * @returns {boolean}
         */
        __egretProto__.canMove = function (obj) {
            var rect = obj.rect;
            rect.x += obj.vx;
            rect.y += obj.vz;
            for (var i = 0; i < this._objects.length; i++) {
                var tarObj = this._objects[i];
                if (obj != tarObj && !tarObj.walkable && rect.intersects(tarObj.rect)) {
                    //obj.px = tarObj.px - obj.size;
                    //obj.pz = tarObj.pz - obj.size;
                    return false;
                }
            }
            return true;
        };
        return IsoWorld;
    })(egret.DisplayObjectContainer);
    Iso.IsoWorld = IsoWorld;
    IsoWorld.prototype.__class__ = "Iso.IsoWorld";
})(Iso || (Iso = {}));
