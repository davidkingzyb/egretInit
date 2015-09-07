/**
 * Created by May on 2015/5/18.
 * update by DKZ on 2015/8/28.
 */

module Iso
{
    export class IsoObject extends egret.Sprite
    {
        // projection x / y / z
        protected _px:number;
        protected _py:number;
        protected _pz:number;

        protected _position:Point3D;
        //protected _size:number;
        protected _width:number;
        protected _height:number;
        protected _walkable:boolean = false;

        //  motion
        protected _vx:number = 0;
        protected _vy:number = 0;
        protected _vz:number = 0;

        public constructor(width:number,height:number)
        {
            super();

            //this._size = size;
            this._height=height;
            this._width=width;
            this.position = new Point3D();
            //this.updateScreenPosition();
        }

        /**
         * 将调用方法时的此物体的等角投影坐标转换为2D平面坐标，并更新位置
         */
        protected updateScreenPosition():void
        {
            var screenPos:egret.Point = IsoUtils.isoToScreen(this._position);
            this.x = screenPos.x;
            this.y = screenPos.y;

            //console.log("final:", this.x, this.y);
        }

        /**
         * 在EnterFrame里调用
         * 更新布局
         */
        public validate():void
        {
            //Todo: 先全部自动运算，如果效率有问题，再手动validate
            this.updateScreenPosition();
        }

        /**
         * 重写 toString
         * @returns {string}
         */
        public toString():string
        {
            return "[IsoObject(x:" + this._px + ",y:" + this._py + ",z:" + this._pz + ")]";
        }

        /**
         * 设置/读取3D空间中的 x 坐标
         * @param value
         */
        public setPosition(x,y,z):void{
            this._px=this._position.x=x;
            this._py=this._position.y=y;
            this._pz=this._position.z=z;
            this.updateScreenPosition();
        }

        public get width(){
            return this._width;
        }

        public get height(){
            return this._height;
        }

        public set px(value:number)
        {
            this._px = this._position.x = value;
            this.updateScreenPosition();
        }

        public get px()
        {
            return this._position.x;
        }

        /**
         * 设置/读取3D空间中的 y 坐标
         * @param value
         */
        public set py(value:number)
        {
            this._py = this._position.y = value;
            this.updateScreenPosition();
        }

        public get py()
        {
            return this._position.y;
        }

        /**
         * 设置/读取3D空间中的 z 坐标
         * @param value
         */
        public set pz(value:number)
        {
            this._pz = this._position.z = value;
            this.updateScreenPosition();
        }

        public get pz()
        {
            return this._position.z;
        }

        /**
         * 设置/读取3D空间中的 坐标
         * @param value
         */
        public set position(value:Point3D)
        {
            this._position = value;
            this._px = this._position.x;
            this._py = this._position.y;
            this._pz = this._position.z;
            this.updateScreenPosition();
        }

        public get position()
        {
            return this._position;
        }

        /**
         * 转换之后的层深. 不影响显示，所以没有必要使用精确数值计算
         */
        public get depth()
        {
            return (this._position.x + this._position.z) * 0.866 - this._position.y * 0.707;
        }

        /**
         * 指定其他对象是否可以经过所处位置
         * @param value
         */
        public set walkable(value:boolean)
        {
            this._walkable = value;
        }

        public get walkable()
        {
            return this._walkable;
        }

        /**
         * 返回尺寸
         * @returns {number}
         */
        //public get size()
        //{
        //    return this._size;
        //}

        protected _rect:egret.Rectangle;

        /**
         * 返回所占用的矩形区域
         * @returns {egret.Rectangle}
         */
        public get rect():egret.Rectangle
        {
            if(this._rect)
            {
                this._rect.x = this._px;
                this._rect.y = this._pz;
            }
            else
                this._rect = new egret.Rectangle(this._px, this._pz, this._width, this._height);
            //return new egret.Rectangle(this._px - this.size / 2, this._pz - this.size / 2, this.size, this.size);
            //return new egret.Rectangle(this._px, this._pz, this.size, this.size);

            return this._rect;
        }


        /**
         * 设置/读取3D空间中的 x轴向速度
         * @param value
         */
        public set vx(value:number)
        {
            this._vx = value;
        }

        public get vx()
        {
            return this._vx;
        }

        /**
         * 设置/读取3D空间中的 y轴向速度
         * @param value
         */
        public set vy(value:number)
        {
            this._vy = value;
        }

        public get vy()
        {
            return this._vy;
        }

        /**
         * 设置/读取3D空间中的 z轴向速度
         * @param value
         */
        public set vz(value:number)
        {
            this._vz = value;
        }

        public get vz()
        {
            return this._vz;
        }

        public update(p:number = 1):void
        {
            this.px += p * this.vx;
            this.py += p * this.vy;
            this.pz += p * this.vz;
        }

    }
}
