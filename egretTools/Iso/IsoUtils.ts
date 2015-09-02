/**
 * Created by May on 2015/5/18.
 * update by DKZ on 2015/8/28.
 */

module Iso
{
    export class IsoUtils
    {
        //  1.2247
        public static Y_CORRECT:number = Math.cos(-Math.PI / 6) * Math.SQRT2;


        /**
         * 将等角投影世界里的坐标映射到二维平面坐标
         * @param p3d
         */
        public static isoToScreen(p3d:Point3D):egret.Point
        {
            var screenX:number = p3d.x - p3d.z;
            var screenY:number = p3d.y * this.Y_CORRECT + (p3d.x + p3d.z) * .5;

            return new egret.Point(screenX, screenY);
        }

        public  static XYZToXY(x,y,z){
            var X=x-z;
            var Y=y*this.Y_CORRECT+(x+z)*.5;
            return {'x':X,'y':Y};
        }

        /**
         * 将二维平面世界里的坐标映射到等角投影坐标系下
         * @param p2d
         * @returns {may.Point3D}
         */
        public static screenToIso(p2d:egret.Point):Point3D
        {
            var isoX:number = p2d.y + p2d.x * .5;
            var isoY:number = 0;
            var isoZ:number = p2d.y - p2d.x * .5;

            return new Point3D(isoX, isoY, isoZ);
        }
    }
}