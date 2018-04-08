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
var ForgetPwd = (function (_super) {
    __extends(ForgetPwd, _super);
    function ForgetPwd() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/ForgetPwdSkin.exml";
        _this.eventListen();
        return _this;
    }
    ForgetPwd.getInstance = function () {
        if (ForgetPwd.instance == null) {
            ForgetPwd.instance = new ForgetPwd();
        }
        return ForgetPwd.instance;
    };
    ForgetPwd.prototype.eventListen = function () {
        this.go_back.touchEnabled = true;
        this.go_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goLogin, this);
    };
    ForgetPwd.prototype.goLogin = function () {
        this.parent.addChild(Login.getInstance());
        this.parent.removeChild(this);
    };
    return ForgetPwd;
}(eui.Component));
//    单例模式
ForgetPwd.instance = null;
__reflect(ForgetPwd.prototype, "ForgetPwd");
