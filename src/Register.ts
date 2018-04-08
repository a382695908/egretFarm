/**
 *
 * @author 
 *
 */
class Register extends eui.Component{
    private go_back:eui.Label;
    //    单例模式
    private static instance: Register = null;
    public static getInstance() {
        if(Register.instance == null) {
            Register.instance = new Register();
        }
        return Register.instance;
    }
    
	public constructor() {
    	super();
      this.skinName = "resource/eui_skins/RegisterSkin.exml";
      this.eventListen();
	}
	public eventListen(){
	    this.go_back.touchEnabled = true;
	    this.go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goLogin,this);
	}
    public goLogin() {
        this.parent.addChild(Login.getInstance());
        this.parent.removeChild(this);
    }
}
