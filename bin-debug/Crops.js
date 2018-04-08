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
var Crops = (function (_super) {
    __extends(Crops, _super);
    function Crops() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/CropsSkin.exml";
        egret.callLater(_this.creatPlants, _this);
        return _this;
    }
    Crops.prototype.creatPlants = function () {
        this.plant.anchorOffsetX = this.plant.width / 2;
        this.plant.anchorOffsetY = this.plant.height;
        this.plant.x = this.crops_gp.width / 2;
        this.plant.y = this.crops_gp.height / 2;
        this.crops_gp.x = 0;
    };
    return Crops;
}(eui.ItemRenderer));
__reflect(Crops.prototype, "Crops");
