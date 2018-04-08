/**
 *
 * @author 
 *
 */
class HouseImgItem extends eui.ItemRenderer {
    public constructor() {
        super();
        this.skinName = "HouseImgSkin";
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.creat,this);
    }
    public creat(){

    }

}