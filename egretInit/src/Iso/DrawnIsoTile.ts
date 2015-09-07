/**
 * Created by May on 2015/5/18.
 * update by DKZ on 2015/8/28 have not test.
 */

module Iso
{
    export class DrawnIsoTile extends IsoObject
    {
        protected _height:number;
        protected _color:number;

        public constructor(w:number,h:number, color:number, height:number = 0)
        {
            super(w,h);

            this._color = color;
            this._height = height;

            this.draw();
        }

        protected draw():void
        {
            this.graphics.clear();
            this.graphics.beginFill(this._color);
            this.graphics.lineStyle(1, 0, 0.5);
            this.graphics.moveTo(-this.size, 0);
            this.graphics.lineTo(0, -this.size * 0.5);
            this.graphics.lineTo(this.size, 0);
            this.graphics.lineTo(0, this.size * 0.5);
            this.graphics.lineTo(-this.size, 0);
            this.graphics.endFill();
        }

        /**
         * height µÄ getter/setter
         * @param value
         */
        public set height(value:number)
        {
            this._height = value;
            this.draw();
        }

        public get height()
        {
            return this._height;
        }

        /**
         * color µÄ getter / setter
         * @param value
         */
        public set color(value:number)
        {
            this._color = value;
            this.draw();
        }

        public get color()
        {
            return this._color;
        }
    }
}
