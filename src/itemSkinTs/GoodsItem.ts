// TypeScript file
/**
 *
 * @author 
 *
 */
class GoodsItem extends eui.ItemRenderer {
    //    单例模式
    private static instance: GoodsItem = null;
    public static getInstance() {
        if(GoodsItem.instance == null) {
            GoodsItem.instance = new GoodsItem();
        }
        return GoodsItem.instance;
    }
    public goodsItem:eui.Group;
    public goods_cont:eui.Group;
    public constructor() {
        super();
        this.skinName = "SaveStoreSkin";
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.eventListen,this);
    }
    public eventListen(){
        this.goodsItem.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.showInstro,this);
        this.goodsItem.addEventListener(egret.TouchEvent.TOUCH_END,this.hideInstro,this);
    }
    // 显示物品使用说明
    public showInstro(){
        this.goods_cont.visible = true;
        egret.Tween.get(this.goods_cont).to({visible:true,scaleX:1.1,scaleY:1.1},200,egret.Ease.backOut);
    }
    // 隐藏物品使用说明
    public hideInstro(){
        egret.Tween.get(this.goods_cont).to({visible:false,scaleX:0,scaleY:0},200,egret.Ease.backIn);
    }
}