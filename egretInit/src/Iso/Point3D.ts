/**
 * Created by May on 2015/5/18.
 * update by DKZ on 2015/8/28.
 */

module Iso
{
    export class Point3D
    {
        public x:number;
        public y:number;
        public z:number;

        constructor(x:number = 0, y:number = 0, z:number = 0)
        {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        public toString():string
        {
            return "[Point3D(x:" + this.x + ";y:" + this.y + ";z:" + this.z + ")]";
        }
    }
}