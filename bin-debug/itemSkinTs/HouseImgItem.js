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
var HouseImgItem = (function (_super) {
    __extends(HouseImgItem, _super);
    function HouseImgItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "HouseImgSkin";
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.creat, _this);
        return _this;
    }
    HouseImgItem.prototype.creat = function () {
    };
    return HouseImgItem;
}(eui.ItemRenderer));
__reflect(HouseImgItem.prototype, "HouseImgItem");
