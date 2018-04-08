/**
 *登录界面
 * @author 
 *
 */
class Login extends eui.Component{

//    单例模式
	private static instance:Login = null;
	public static getInstance(){
		if(Login.instance == null){
			Login.instance = new Login();
		}
		return Login.instance;
	}
	public register_btn: eui.Label;
	public login_btn: eui.Label;
	public forget_btn:eui.Label;
	public constructor() {
    	super();
    	this.skinName = "resource/eui_skins/LoginSkin.exml";
    	this.eventListen();
	}
	public eventListen(){
        this.register_btn.touchEnabled = true;
        this.register_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toRegister,this);
        this.login_btn.touchEnabled = true;
        this.login_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toLogin,this);
        this.forget_btn.touchEnabled = true;
        this.forget_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.forgetPwd,this);
	}
	public toRegister(){
	    this.parent.addChild(Register.getInstance());
	    this.parent.removeChild(this);
	}
	public toLogin(){
        this.parent.addChild(Home.getInstance());
        this.parent.removeChild(this);
	}
	public forgetPwd(){
        this.parent.addChild(ForgetPwd.getInstance());
        this.parent.removeChild(this);
	}
}
