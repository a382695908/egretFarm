var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
/**
 *
 * @author
 *
 */
var GoodsItem = (function (_super) {
    __extends(GoodsItem, _super);
    function GoodsItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "SaveStoreSkin";
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.eventListen, _this);
        return _this;
    }
    GoodsItem.getInstance = function () {
        if (GoodsItem.instance == null) {
            GoodsItem.instance = new GoodsItem();
        }
        return GoodsItem.instance;
    };
    GoodsItem.prototype.eventListen = function () {
        this.goodsItem.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.showInstro, this);
        this.goodsItem.addEventListener(egret.TouchEvent.TOUCH_END, this.hideInstro, this);
    };
    // 显示物品使用说明
    GoodsItem.prototype.showInstro = function () {
        this.goods_cont.visible = true;
        egret.Tween.get(this.goods_cont).to({ visible: true, scaleX: 1.1, scaleY: 1.1 }, 200, egret.Ease.backOut);
    };
    // 隐藏物品使用说明
    GoodsItem.prototype.hideInstro = function () {
        egret.Tween.get(this.goods_cont).to({ visible: false, scaleX: 0, scaleY: 0 }, 200, egret.Ease.backIn);
    };
    return GoodsItem;
}(eui.ItemRenderer));
//    单例模式
GoodsItem.instance = null;
__reflect(GoodsItem.prototype, "GoodsItem");
