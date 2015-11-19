/**
 * Created by May on 2015/5/18.
 * update by DKZ on 2015/8/28 have not test.
 */
var Iso;
(function (Iso) {
    var DrawnIsoTile = (function (_super) {
        __extends(DrawnIsoTile, _super);
        function DrawnIsoTile(w, h, color, height) {
            if (height === void 0) { height = 0; }
            _super.call(this, w, h);
            this._color = color;
            this._height = height;
            this.draw();
        }
        var __egretProto__ = DrawnIsoTile.prototype;
        __egretProto__.draw = function () {
            this.graphics.clear();
            this.graphics.beginFill(this._color);
            this.graphics.lineStyle(1, 0, 0.5);
            this.graphics.moveTo(-this.size, 0);
            this.graphics.lineTo(0, -this.size * 0.5);
            this.graphics.lineTo(this.size, 0);
            this.graphics.lineTo(0, this.size * 0.5);
            this.graphics.lineTo(-this.size, 0);
            this.graphics.endFill();
        };
        Object.defineProperty(__egretProto__, "height", {
            get: function () {
                return this._height;
            },
            /**
             * height �� getter/setter
             * @param value
             */
            set: function (value) {
                this._height = value;
                this.draw();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "color", {
            get: function () {
                return this._color;
            },
            /**
             * color �� getter / setter
             * @param value
             */
            set: function (value) {
                this._color = value;
                this.draw();
            },
            enumerable: true,
            configurable: true
        });
        return DrawnIsoTile;
    })(Iso.IsoObject);
    Iso.DrawnIsoTile = DrawnIsoTile;
    DrawnIsoTile.prototype.__class__ = "Iso.DrawnIsoTile";
})(Iso || (Iso = {}));
