/**
 *
 * @author 
 *
 */
class Crops extends eui.ItemRenderer{


	public constructor() {
		super();
		this.skinName = "resource/eui_skins/CropsSkin.exml";
		egret.callLater(this.creatPlants,this);
	}
	// 树苗
	public plant:eui.Image;
	public tudi:eui.Image;
	public crops_gp:eui.Group;s
	public creatPlants(){
		this.plant.anchorOffsetX = this.plant.width/2;
		this.plant.anchorOffsetY = this.plant.height;
		this.plant.x = this.crops_gp.width/2;
		this.plant.y = this.crops_gp.height/2;
		this.crops_gp.x = 0;
	}
}
