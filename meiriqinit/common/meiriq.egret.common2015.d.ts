declare module meiriq {
    class InterFace {
        static home: string;
        static pause: string;
        static resume: string;
        static orientStart: string;
        static orientPause: string;
        static orientResume: string;
    }
    class Hook {
        static start: string;
        static gameover: string;
        static levelwin: string;
        static share: string;
        static more: string;
        static restart: string;
    }
    class CommonComponent {
        private static _instance;
        static instance: CommonComponent;
        private static _config;
        static config: any;
        interface: any;
        private common;
        constructor();
        private _opt;
        private _hasinit;
        init(name: string, opt: any): void;
        private loader;
        private onfinshload;
        load(finish: Function, thisObject: any, preload: any, ...groups: any[]): void;
        private startcb;
        private exehook;
        executedHook(exe: string, ...param: any[]): void;
        implementsInterFace(name: string, fn: Function, thisObject?: any): void;
        /**
         * GameData
         * @type {{hightScore: number, hightLevel: number}}
         */
        private _gameData;
        gameData: any;
        private getInitlizeGameData();
        /**
         * 兼容旧接口
         *
         * @returns {{}}
         * @param gamedata => config.gameData
         * @param cb_hooks
         * @param exe_hooks
         */
        polyfill(gamedata: any, cb_hooks: any, exe_hooks: any): any;
        /**
         *
         */
        checkOrient(first: boolean): void;
    }
}
declare module meiriq {
    class AssetsLoadP extends egret.EventDispatcher {
        private _assets_groups;
        private _loadcount;
        private _resourceConfig;
        private _resourceConfigReference;
        resourceConfig: string;
        resourceConfigReference: string;
        onpreload: () => void;
        onallload: () => void;
        onprogress: (loaded: number, total: number) => void;
        loadAssets(preload?: string, groups?: any[]): void;
        private loadcomplete(e);
        private loadprogress(e);
        private static _instance;
        static instance: AssetsLoadP;
    }
}
declare module meiriq {
    class StageResizeP {
        private _resizeTimer;
        private _width;
        private _height;
        private _maxwidth;
        private _maxheight;
        init(width?: number, height?: number, opts?: any): void;
        private _contentstrategy;
        private onResize();
        private static _instance;
        static instance: StageResizeP;
    }
}
declare module meiriq {
    function domWidth(): number;
    function domHeight(): number;
    function stageWidth(multiple?: number): number;
    function stageHeight(multiple?: number): number;
    function stage(): egret.Stage;
    function stageW2H(): number;
    function context(): egret.MainContext;
}
