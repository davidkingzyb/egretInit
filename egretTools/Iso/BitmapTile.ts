/**
 * Created by May on 2015/5/18.
 * update by DKZ on 2015/8/28.
 */

module Iso
{
    export class BitmapTile extends IsoObject
    {
        protected bm:egret.Bitmap;

        public constructor( bitmap:string)
        {
            this.bm = new egret.Bitmap(RES.getRes(bitmap));
            this.bm.anchorOffsetX = this.bm.texture.textureWidth / 2;
            this.bm.anchorOffsetY = this.bm.texture.textureHeight / 2;
            super(this.bm.texture.textureWidth,this.bm.texture.textureHeight);

            //this.bm.scaleX = Math.random() < 0.5 ? 1 : -1;
            this.addChild(this.bm);
        }
    }
}
