var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 *
 */
var DuiHuanItem = (function (_super) {
    __extends(DuiHuanItem, _super);
    function DuiHuanItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "DuiHuanSkin";
        return _this;
        // this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.eventListen,this);
    }
    DuiHuanItem.getInstance = function () {
        if (DuiHuanItem.instance == null) {
            DuiHuanItem.instance = new DuiHuanItem();
        }
        return DuiHuanItem.instance;
    };
    return DuiHuanItem;
}(eui.ItemRenderer));
//    单例模式
DuiHuanItem.instance = null;
__reflect(DuiHuanItem.prototype, "DuiHuanItem");
