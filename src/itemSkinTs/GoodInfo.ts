// TypeScript file
/**
 *
 * @author 
 *
 */
class GoodInfo extends eui.ItemRenderer {
    //    单例模式
    private static instance: GoodInfo = null;
    public static getInstance() {
        if(GoodInfo.instance == null) {
            GoodInfo.instance = new GoodInfo();
        }
        return GoodInfo.instance;
    }
    public goods_cont:eui.Group;
    public constructor() {
        super();
        this.skinName = "GoodInfoSkin";
    }
}