/**
 * Created by May on 2015/5/18.
 * update by DKZ on 2015/8/28.
 */

module Iso
{
    export class IsoWorld extends egret.DisplayObjectContainer
    {
        private _floor:egret.DisplayObjectContainer;
        private _world:egret.DisplayObjectContainer;
        private _objects:IsoObject[] = [];

        public constructor()
        {
            super();

            this._floor = new egret.DisplayObjectContainer();


            this._world = new egret.DisplayObjectContainer();
            this.addChild(this._world);
            this.addChild(this._floor);
        }

        public addChildToWorld(child:IsoObject):void
        {
            this._world.addChild(child);
            this._objects.push(child);
            this.sort();
        }
        public removeChildFromWorld(child:IsoObject):void{
            if(this._world.contains(child)){
                this._world.removeChild(child);
            }
            var index=this._objects.indexOf(child);
            if(index!==-1){
                this._objects.splice(index,1);
            }
        }

        public addChildToFloor(child:IsoObject):void
        {
            this._floor.addChild(child);
        }
        public removeChildFromFloor(child:IsoObject):void{
            if(this._floor.contains(child)){
                this._floor.removeChild(child);
            }
        }

        /**
         * 对 world 内的对象进行层深排序
         */
        public sort():void
        {
            this._objects.sort(function(a:IsoObject, b:IsoObject):number
            {
                return a.depth - b.depth;
            });

            for(var i:number = 0; i < this._objects.length; i++)
                this._world.setChildIndex(this._objects[i], i);
        }

        /**
         * 检测一个IsoObject是否可以移动
         * @param obj
         * @returns {boolean}
         */
        public canMove(obj:IsoObject):boolean
        {
            var rect:egret.Rectangle = obj.rect;
            rect.x += obj.vx;
            rect.y += obj.vz;

            for(var i:number = 0; i < this._objects.length; i++)
            {
                var tarObj:IsoObject = this._objects[i];
                if(obj != tarObj && !tarObj.walkable && rect.intersects(tarObj.rect))
                {
                    //obj.px = tarObj.px - obj.size;
                    //obj.pz = tarObj.pz - obj.size;
                    return false;
                }
            }

            return true;
        }
    }
}
