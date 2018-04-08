var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *登录界面
 * @author
 *
 */
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/LoginSkin.exml";
        _this.eventListen();
        return _this;
    }
    Login.getInstance = function () {
        if (Login.instance == null) {
            Login.instance = new Login();
        }
        return Login.instance;
    };
    Login.prototype.eventListen = function () {
        this.register_btn.touchEnabled = true;
        this.register_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toRegister, this);
        this.login_btn.touchEnabled = true;
        this.login_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toLogin, this);
        this.forget_btn.touchEnabled = true;
        this.forget_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.forgetPwd, this);
    };
    Login.prototype.toRegister = function () {
        this.parent.addChild(Register.getInstance());
        this.parent.removeChild(this);
    };
    Login.prototype.toLogin = function () {
        this.parent.addChild(Home.getInstance());
        this.parent.removeChild(this);
    };
    Login.prototype.forgetPwd = function () {
        this.parent.addChild(ForgetPwd.getInstance());
        this.parent.removeChild(this);
    };
    return Login;
}(eui.Component));
//    单例模式
Login.instance = null;
__reflect(Login.prototype, "Login");
