/**
 * Created by May on 2015/5/18.
 * update by DKZ on 2015/8/28.
 */
var Iso;
(function (Iso) {
    var IsoObject = (function (_super) {
        __extends(IsoObject, _super);
        function IsoObject(width, height) {
            _super.call(this);
            this._walkable = false;
            //  motion
            this._vx = 0;
            this._vy = 0;
            this._vz = 0;
            //this._size = size;
            this._height = height;
            this._width = width;
            this.position = new Iso.Point3D();
            //this.updateScreenPosition();
        }
        var __egretProto__ = IsoObject.prototype;
        /**
         * 将调用方法时的此物体的等角投影坐标转换为2D平面坐标，并更新位置
         */
        __egretProto__.updateScreenPosition = function () {
            var screenPos = Iso.IsoUtils.isoToScreen(this._position);
            this.x = screenPos.x;
            this.y = screenPos.y;
            //console.log("final:", this.x, this.y);
        };
        /**
         * 在EnterFrame里调用
         * 更新布局
         */
        __egretProto__.validate = function () {
            //Todo: 先全部自动运算，如果效率有问题，再手动validate
            this.updateScreenPosition();
        };
        /**
         * 重写 toString
         * @returns {string}
         */
        __egretProto__.toString = function () {
            return "[IsoObject(x:" + this._px + ",y:" + this._py + ",z:" + this._pz + ")]";
        };
        /**
         * 设置/读取3D空间中的 x 坐标
         * @param value
         */
        __egretProto__.setPosition = function (x, y, z) {
            this._px = this._position.x = x;
            this._py = this._position.y = y;
            this._pz = this._position.z = z;
            this.updateScreenPosition();
        };
        Object.defineProperty(__egretProto__, "width", {
            get: function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "height", {
            get: function () {
                return this._height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "px", {
            get: function () {
                return this._position.x;
            },
            set: function (value) {
                this._px = this._position.x = value;
                this.updateScreenPosition();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "py", {
            get: function () {
                return this._position.y;
            },
            /**
             * 设置/读取3D空间中的 y 坐标
             * @param value
             */
            set: function (value) {
                this._py = this._position.y = value;
                this.updateScreenPosition();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "pz", {
            get: function () {
                return this._position.z;
            },
            /**
             * 设置/读取3D空间中的 z 坐标
             * @param value
             */
            set: function (value) {
                this._pz = this._position.z = value;
                this.updateScreenPosition();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "position", {
            get: function () {
                return this._position;
            },
            /**
             * 设置/读取3D空间中的 坐标
             * @param value
             */
            set: function (value) {
                this._position = value;
                this._px = this._position.x;
                this._py = this._position.y;
                this._pz = this._position.z;
                this.updateScreenPosition();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "depth", {
            /**
             * 转换之后的层深. 不影响显示，所以没有必要使用精确数值计算
             */
            get: function () {
                return (this._position.x + this._position.z) * 0.866 - this._position.y * 0.707;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "walkable", {
            get: function () {
                return this._walkable;
            },
            /**
             * 指定其他对象是否可以经过所处位置
             * @param value
             */
            set: function (value) {
                this._walkable = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "rect", {
            /**
             * 返回所占用的矩形区域
             * @returns {egret.Rectangle}
             */
            get: function () {
                if (this._rect) {
                    this._rect.x = this._px;
                    this._rect.y = this._pz;
                }
                else
                    this._rect = new egret.Rectangle(this._px, this._pz, this._width, this._height);
                //return new egret.Rectangle(this._px - this.size / 2, this._pz - this.size / 2, this.size, this.size);
                //return new egret.Rectangle(this._px, this._pz, this.size, this.size);
                return this._rect;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "vx", {
            get: function () {
                return this._vx;
            },
            /**
             * 设置/读取3D空间中的 x轴向速度
             * @param value
             */
            set: function (value) {
                this._vx = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "vy", {
            get: function () {
                return this._vy;
            },
            /**
             * 设置/读取3D空间中的 y轴向速度
             * @param value
             */
            set: function (value) {
                this._vy = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "vz", {
            get: function () {
                return this._vz;
            },
            /**
             * 设置/读取3D空间中的 z轴向速度
             * @param value
             */
            set: function (value) {
                this._vz = value;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.update = function (p) {
            if (p === void 0) { p = 1; }
            this.px += p * this.vx;
            this.py += p * this.vy;
            this.pz += p * this.vz;
        };
        return IsoObject;
    })(egret.Sprite);
    Iso.IsoObject = IsoObject;
    IsoObject.prototype.__class__ = "Iso.IsoObject";
})(Iso || (Iso = {}));
