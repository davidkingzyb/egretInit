/**
 * Created by May on 2015/5/18.
 * update by DKZ on 2015/8/28.
 */
var Iso;
(function (Iso) {
    var BitmapTile = (function (_super) {
        __extends(BitmapTile, _super);
        function BitmapTile(bitmap) {
            this.bm = new egret.Bitmap(RES.getRes(bitmap));
            this.bm.anchorOffsetX = this.bm.texture.textureWidth / 2;
            this.bm.anchorOffsetY = this.bm.texture.textureHeight / 2;
            _super.call(this, this.bm.texture.textureWidth, this.bm.texture.textureHeight);
            //this.bm.scaleX = Math.random() < 0.5 ? 1 : -1;
            this.addChild(this.bm);
        }
        var __egretProto__ = BitmapTile.prototype;
        return BitmapTile;
    })(Iso.IsoObject);
    Iso.BitmapTile = BitmapTile;
    BitmapTile.prototype.__class__ = "Iso.BitmapTile";
})(Iso || (Iso = {}));
