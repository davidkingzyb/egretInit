/**
 * Created by May on 2015/5/18.
 * update by DKZ on 2015/8/28 have not test.
 */

module Iso
{
    export class DrawnIsoBox extends DrawnIsoTile
    {
        public constructor(w:number,h:number, color:number, height:number)
        {
            super(w,h, color, height);
        }

        protected draw():void
        {
            this.graphics.clear();

            //  把代表红色的两个十六进制数提取出来
            var red:number = this._color >> 16;

            //  把代表绿色的两个十六进制数提取出来
            var green:number = this._color >> 8 & 0xff;

            //  把代表蓝色的两个十六进制数提取出来
            var blue:number = this._color & 0xff;

            //  颜色全部加倍加深
            var leftShadow:number = (red * .5) << 16 | (green * .5) << 8 | (blue * .5);

            //  颜色全部加深一半
            var rightShadow:number = (red * .75) << 16 | (green * .75) << 8 | (blue * .75);

            var h:number = IsoUtils.Y_CORRECT * this._height;

            // draw top
            this.graphics.beginFill(this._color);
            this.graphics.lineStyle(0, 0, .5);
            this.graphics.moveTo(-this._size, -h);
            this.graphics.lineTo(0, -this._size * .5 - h);
            this.graphics.lineTo(this._size, -h);
            this.graphics.lineTo(0, this._size * .5  - h);
            this.graphics.lineTo(-this._size, -h);
            this.graphics.endFill();

            // draw left
            this.graphics.beginFill(leftShadow);
            this.graphics.lineStyle(0, 0, .5);
            this.graphics.moveTo(-this._size, -h);
            this.graphics.lineTo(0, this._size * .5 - h);
            this.graphics.lineTo(0, this._size * .5);
            this.graphics.lineTo(-this._size, 0);
            this.graphics.lineTo(-this._size, -h);
            this.graphics.endFill();

            // draw right
            this.graphics.beginFill(rightShadow);
            this.graphics.lineStyle(0, 0, .5);
            this.graphics.moveTo(this._size, -h);
            this.graphics.lineTo(0, this._size * .5 - h);
            this.graphics.lineTo(0, this._size * .5);
            this.graphics.lineTo(this._size, 0);
            this.graphics.lineTo(this._size, -h);
            this.graphics.endFill();
            
        }
    }
}
