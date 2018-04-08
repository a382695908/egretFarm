// TypeScript file
class StatusItem extends eui.ItemRenderer{
    //    单例模式
    private static instance: StatusItem = null;
    public static getInstance() {
        if(StatusItem.instance == null) {
            StatusItem.instance = new StatusItem();
        }
        return StatusItem.instance;
    }
    public instro:eui.Group;
    public nvShenImg:eui.Image;
    public constructor(){
        super();
        this.skinName = "StatusSkin";
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.eventListen,this);
    }
    public eventListen(){
        this.nvShenImg.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.showInstro,this);
        this.nvShenImg.addEventListener(egret.TouchEvent.TOUCH_END,this.hideInstro,this);
    }
    // 显示雕像使用说明
    public showInstro(){
        this.instro.visible = true;
        egret.Tween.get(this.instro).to({visible:true,scaleX:1.1,scaleY:1.1},200,egret.Ease.backOut);
    }
    // 隐藏雕像使用说明
    public hideInstro(){
        egret.Tween.get(this.instro).to({visible:false,scaleX:0,scaleY:0},200,egret.Ease.backIn);
    }
}