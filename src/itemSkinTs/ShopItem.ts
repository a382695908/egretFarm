/**
 *
 * @author 
 *
 */
class ShopItem extends eui.ItemRenderer {
    public constructor() {
        super();
        this.skinName = "ShopSkin";
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.creat,this);
    }
    public creat(){

    }

}