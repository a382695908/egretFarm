/**
 *
 * @author 
 *
 */
class ForgetPwd extends eui.Component {
    public go_back: eui.Label;
    
    //    单例模式
    private static instance: ForgetPwd = null;
    public static getInstance() {
        if(ForgetPwd.instance == null) {
            ForgetPwd.instance = new ForgetPwd();
        }
        return ForgetPwd.instance;
    }
    
    public constructor() {
        super();
        this.skinName = "resource/eui_skins/ForgetPwdSkin.exml";
        this.eventListen();
    }
    public eventListen() {
        this.go_back.touchEnabled = true;
        this.go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goLogin,this);
    }
    public goLogin(){
        this.parent.addChild(Login.getInstance());
        this.parent.removeChild(this);
    }
}
