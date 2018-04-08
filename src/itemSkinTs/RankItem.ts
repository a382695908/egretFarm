/**
 *
 * @author 
 *
 */
class RankItem extends eui.ItemRenderer {
    public constructor() {
        super();
        this.skinName = "PaiHangSkin";
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.creat,this);
    }
    public creat(){

    }

}