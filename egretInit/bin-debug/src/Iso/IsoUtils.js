/**
 * Created by May on 2015/5/18.
 * update by DKZ on 2015/8/28.
 */
var Iso;
(function (Iso) {
    var IsoUtils = (function () {
        function IsoUtils() {
        }
        var __egretProto__ = IsoUtils.prototype;
        /**
         * ���Ƚ�ͶӰ������������ӳ�䵽��άƽ������
         * @param p3d
         */
        IsoUtils.isoToScreen = function (p3d) {
            var screenX = p3d.x - p3d.z;
            var screenY = p3d.y * this.Y_CORRECT + (p3d.x + p3d.z) * .5;
            return new egret.Point(screenX, screenY);
        };
        IsoUtils.XYZToXY = function (x, y, z) {
            var X = x - z;
            var Y = y * this.Y_CORRECT + (x + z) * .5;
            return { 'x': X, 'y': Y };
        };
        /**
         * ����άƽ��������������ӳ�䵽�Ƚ�ͶӰ����ϵ��
         * @param p2d
         * @returns {may.Point3D}
         */
        IsoUtils.screenToIso = function (p2d) {
            var isoX = p2d.y + p2d.x * .5;
            var isoY = 0;
            var isoZ = p2d.y - p2d.x * .5;
            return new Iso.Point3D(isoX, isoY, isoZ);
        };
        //  1.2247
        IsoUtils.Y_CORRECT = Math.cos(-Math.PI / 6) * Math.SQRT2;
        return IsoUtils;
    })();
    Iso.IsoUtils = IsoUtils;
    IsoUtils.prototype.__class__ = "Iso.IsoUtils";
})(Iso || (Iso = {}));
