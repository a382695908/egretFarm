/**
 *
 * @author 
 *
 */
class Home extends eui.Component{
    //    单例模式
    private static instance: Home = null;
    public static getInstance() {
        if(Home.instance == null) {
            Home.instance = new Home();
        }
        return Home.instance;
    }
    // 农场首页背景图
    public cancle_chose:eui.Group;
    // 展开、收起日志、排行榜面板按钮
    public user_panel:eui.Image;
    public up_down:eui.Image;
    public up_down_panel:eui.Group;
    public toggle:boolean = true;
    // 打开日志、排行榜、充值、农场按钮
    public rizhi:eui.Image;
    public paihang:eui.Image;
    public chongzhi:eui.Image;
    public nongchang:eui.Image;
    public open_save_house:eui.Image;
    public open_shop:eui.Image;
    public open_duihuan:eui.Image;
    public open_zhuangban:eui.Image;
    // public open_save_house:eui.Image;
    // 关闭日志、排行榜、充值、农场按钮
    public close_rizhi:eui.Label;
    public close_paihang:eui.Label;
    public close_chongzhi:eui.Label;
    public close_save_house:eui.Label;
    public close_shop:eui.Label;
    public close_duihuan:eui.Label;
    public close_zhuangban:eui.Label;
    // 打开个人信息按钮
    public open_user_msg:eui.Image;
    public close_user_msg:eui.Image;
    // 玩家搜索按钮
    public search_player:eui.Image;
    public close_search_player:eui.Image;
// 日志、排行榜、充值、查找玩家、我的仓库面板
    public day_record:eui.Group;
    public rank_gp:eui.Group;
    public more_money:eui.Group;
    public save_house:eui.Group;
    public find_player:eui.Group;
    public user_msg:eui.Group;
     public shop:eui.Group;
    public duihuan:eui.Group;
    public zhuangban:eui.Group;
    public land_info:eui.Group;
    public bozhong:eui.Group;
    // 两个黑色蒙版
    public black_mask01:eui.Rect;
    public black_mask02:eui.Rect;
    // 女神雕像列表
    public status_gp:eui.Group;
    // 滚动条和list列表组合容器
    public scroll_rank:eui.Scroller;
    public crops_list:eui.List;
    public pets_list:eui.List;
    public friends_list:eui.List;
    // 我的仓库
    public guoshi_list:eui.List;
    public cailiao_list:eui.List;
    public baoshi_list:eui.List;
    public daoju_list:eui.List;
    // 兑换中心
    public sucai_list:eui.List;
    public shenxiang_list:eui.List;
    public beijing_list:eui.List;
    public gouliang_list:eui.List;
    // 游戏商店
    public rexiao_list:eui.List;
    public gongju_list:eui.List;
    public baoxiang_list:eui.List;
    public chongwu_list:eui.List;
    // 土地升级
    public landup_list:eui.List;
    // 装扮
    public zhuangban_list:eui.List;
    // 选项卡切换
    public viewStack:eui.ViewStack;
    // 我的家园、我的果园图标按钮
    private my_jiayuan:eui.Button;
    private my_guoyuan:eui.Button;
    private guoyuan_gp:eui.Group;
    private jiayuan_gp:eui.Group;
    // 田地列表
    public crops_bottom:eui.Group;
    public crops_top:eui.Group;
    public crops_tishi:eui.Group;
    public tishi_left:eui.Image;
    public tishi_right:eui.Image;
    public crops_mask:eui.Image;
    public tabBar:eui.TabBar;
    public close_land_info:eui.Image;
    public close_bozhong:eui.Label;
    // 土地升级和房屋升级
    public up_level:eui.Label;
    public close_build_center:eui.Label;
    public build_center:eui.Group;
    public buildViewStack:eui.ViewStack;
    public up_house:eui.Image;
    // 宠物狗
    public dog_gp:eui.Group;
	public constructor() {
    	super();
//    	添加exml皮肤文件加载完成回调事件
        this.skinName = "resource/eui_skins/HomeSkin.exml";
        // 等待所有资源加载完成后再后续执行事件
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.completeFun,this);
        egret.callLater(this.creatCrops,this);
        var data = RES.getRes("dog_json");
        var txtr = RES.getRes("dog_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        var mc1:egret.MovieClip = new egret.MovieClip( mcFactory.generateMovieClipData( "idle" ) );
        this.dog_gp.addChild( mc1 );
        mc1.gotoAndPlay( "0",1);
        mc1.addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{
            mc1.gotoAndPlay( "1",5);
        }, this);
        mc1.x = 0;
        mc1.y = 0;
        // var timer: egret.Timer = new egret.Timer(20, 0);
        // timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        // timer.start();
        // egret.Tween.get(this.dog_gp,{loop:true}).to({x:580,y:640},3000).to({x:368,y:550},3000);
    }
   
    public changeTab(evt:eui.ItemTapEvent){
        console.log(evt.itemIndex);
    }
    public completeFun(){
        // 添加当前页所有事件监听器
        this.eventListen();
        // 设置果园，家园分类内容位置属性
        this.setPosition();
        // 动态创建田地
        // this.creatCrops();
        this.creatRankList();
        // 创建女神雕像
        this.creatStatus();
    }
    // 创建雕像
    public creatStatus(){
        var statusArr:Array<Object> = [{thumb:"diaoxiang03"},{thumb:"diaoxiang05"},{thumb:"diaoxiang06"},{thumb:"diaoxiang08"}];
        for (var i:number = 0;i<4;i++){
            var statusObj = new StatusItem();
            statusObj.$children[0]['source'] = statusArr[i]['thumb'];
            statusObj.x = 0.7*i*statusObj.width;
            statusObj.y = -i*30;
            this.status_gp.addChild(statusObj);
            this.status_gp.setChildIndex(statusObj,3-i);
        }
        this.status_gp.$children[1].$children[2].x = 100;
        this.status_gp.setChildIndex(this.status_gp.$children[1],5);
    }
    // 创建田地
    public creatCrops(){
        var cropsData:Array<Object> = [
            { thumb: "plants13",goodsName: "魔法石",comment: "法力加成 +3" }
            ,{ thumb: "plants06",goodsName: "诅咒娃娃",comment: "咒术加成 +3" }
            ,{ thumb: "plants07",goodsName: "万圣戒指",comment: "敏捷加成 +3" }
            ,{ thumb: "plants11",goodsName: "斗篷",comment: "耐力加成 +3" }
        ];
        // console.log(this.crops_bottom.$children);
        var bottom_land = this.crops_bottom.$children;
        for(var i:number = 0;i< bottom_land.length;i++){
            bottom_land[i]['index'] = i;
            bottom_land[i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.cropsClick,this);
            bottom_land[i]['pixelHitTest'] = true;
        }
    }
    // 土地点击事件
    public cropsClick(evt:egret.TouchEvent){
        var index = evt.currentTarget.index;
        var localX = evt.currentTarget.x-4;
        var localY = evt.currentTarget.y-4;
        var maskX = localX + evt.currentTarget.width/2;
        // var crops_top = this.crops_top.$children;
        // for(var i:number= 0;i<crops_top.length;i++){
        //     crops_top[i].visible = false;
        // }
        this.crops_mask.x = localX;
        this.crops_mask.y = localY;
        this.crops_mask.visible = false;
        this.crops_mask.visible = true;
        this.crops_tishi.x = maskX;
        this.crops_tishi.y = localY;
        this.crops_tishi.visible = false;
        this.crops_tishi.visible = true;
        egret.Tween.get(this.crops_tishi).to({scaleX:0,scaleY:0},200,egret.Ease.backIn).to({visible:true,scaleX:1.0,scaleY:1.0},200,egret.Ease.backOut);
        // this.crops_top.$children[index].visible = true;

    }
    
	// 事件监听
	public eventListen(){
        // 日志、排行榜、充值、查找玩家、我的仓库监听按钮
        var tanBtns:any[] = [
                    this.rizhi, this.paihang, this.chongzhi, this.nongchang,
                    this.open_save_house, this.open_user_msg, this.close_rizhi, this.close_paihang,
                    this.close_chongzhi, this.close_save_house, this.close_user_msg,
                    this.open_shop,this.open_duihuan,this.open_zhuangban,this.close_shop,this.close_duihuan,
                    this.close_zhuangban,this.tishi_left,this.tishi_right,this.close_land_info,this.close_bozhong,
                    this.up_level,this.close_build_center,this.up_house
        ];
        
        for(var i:number=0;i<tanBtns.length;i++){
            tanBtns[i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTapHandler,this);
        }
        // 玩家搜索监听按钮
        var searchBtns:any[] = [this.search_player, this.close_search_player];
        for(var j:number=0;j<searchBtns.length;j++) {
            searchBtns[j].addEventListener(egret.TouchEvent.TOUCH_TAP, this.searchPlayer, this);
            searchBtns[j].addEventListener(egret.TouchEvent.TOUCH_TAP, this.searchPlayer, this);
        }
        // 果园，家园监听按钮
        var yuanBtns:any[] = [this.my_guoyuan, this.my_jiayuan];
        for(var n:number=0;n<yuanBtns.length;n++) {
            yuanBtns[n].addEventListener(egret.TouchEvent.TOUCH_TAP, this.rotateIcons, this);
            yuanBtns[n].addEventListener(egret.TouchEvent.TOUCH_TAP, this.rotateIcons, this);
        }
        // 展开、收起日志排行榜面板按钮监听
        // 设置user面板的点击穿透，使得下面的up_down按钮点击事件生效
        this.user_panel.touchEnabled = false;
        this.up_down.addEventListener(egret.TouchEvent.TOUCH_TAP,this.upDown,this);
        // 选项卡单击事件监听
        this.tabBar.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.changeTab,this);
        // 单击农场首页按钮，隐藏播种弹出层
        this.cancle_chose.touchEnabled = true;
        this.cancle_chose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeBoZhong,this);
        this.tishi_left.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeBoZhong,this);
        this.tishi_right.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeBoZhong,this);
        // 土地升级按钮
        // this.up_level.addEventListener(egret.TouchEvent.TOUCH_TAP,this.upLand,this);
    }
    // 升级土地
    public upLand(){
        
    }
    public upDown(){
        if(this.toggle == true){
            egret.Tween.get(this.up_down_panel).to({y:-4},500);
            this.up_down.skewX = 180;

        }else{
            egret.Tween.get(this.up_down_panel).to({y:110},500);
            this.up_down.skewX = 0;
        }
        this.toggle = !this.toggle;
    }
    // 打开日志、排行榜、充值弹出框
    public btnTapHandler(evt:egret.TouchEvent):void{
        var openBtns:any[] = [this.rizhi,this.paihang,this.chongzhi,this.open_save_house,this.open_user_msg,this.open_shop,this.open_duihuan,this.open_zhuangban,this.tishi_left,this.tishi_right,this.up_level,this.up_house];
        var closeBtns:any[] = [this.close_rizhi,this.close_paihang,this.close_chongzhi,this.close_save_house,this.close_user_msg,this.close_shop,this.close_duihuan,this.close_zhuangban,this.close_land_info,this.close_bozhong,this.close_build_center,,this.close_build_center];
        var panel:any[] = [this.day_record,this.rank_gp,this.more_money,this.save_house,this.user_msg,this.shop,this.duihuan,this.zhuangban,this.land_info,this.bozhong,this.build_center,this.build_center];
        for(var i:number=0;i<openBtns.length;i++){
            if(evt.currentTarget == openBtns[i]){
                panel[i].visible = true;
                this.black_mask01.visible = true;
                egret.Tween.get(this.black_mask01).to({visible:true},1000,egret.Ease.backOut);
                egret.Tween.get(panel[i]).to({visible:true,scaleX:1.1,scaleY:1.1},1000,egret.Ease.backOut);
            }
            if(evt.currentTarget == closeBtns[i]){
                panel[i].visible = false;
                this.black_mask01.visible = false;
                egret.Tween.get(this.black_mask01).to({visible:false},500,egret.Ease.backIn);
                egret.Tween.get(panel[i]).to({visible:false,scaleX:0,scaleY:0},400,egret.Ease.backIn);
            }
            // 如果按钮是土地升级按钮，则关闭当前面板，并打开土地升级面板
            if(evt.currentTarget == openBtns[i] && openBtns[i] == this.up_level){
                this.buildViewStack.selectedIndex = 1;
                this.land_info.visible = false;
                this.black_mask01.visible = false;
                egret.Tween.get(this.black_mask01).to({visible:false},500,egret.Ease.backIn);
                egret.Tween.get(this.land_info).to({visible:false,scaleX:0,scaleY:0},400,egret.Ease.backIn);
            }
             if(evt.currentTarget == openBtns[i] && openBtns[i] == this.up_house){
                 this.buildViewStack.selectedIndex = 0;
             }
        }
    }
    // 查找玩家排行
    public searchPlayer(evt:egret.TouchEvent){
        if(evt.currentTarget == this.search_player){
            this.find_player.visible = true;
            this.black_mask02.visible = true;
            egret.Tween.get(this.black_mask02).to({visible:true},1000,egret.Ease.backOut);
            egret.Tween.get(this.find_player).to({visible:true,scaleX:1.1,scaleY:1.1},1000,egret.Ease.backOut);
        }
        if(evt.currentTarget == this.close_search_player){
            this.find_player.visible = false;
            this.black_mask02.visible = false;
            egret.Tween.get(this.black_mask02).to({visible:false},1000,egret.Ease.backIn);
            egret.Tween.get(this.find_player).to({visible:false,scaleX:0,scaleY:0},1000,egret.Ease.backIn);
        }
    }
    // 设置果园和家园的旋转类别的锚点以及显示位置
    public bool1:boolean = true;
    public bool2:boolean = true;
    public setPosition(){
        // 我的果园
        this.guoyuan_gp.rotation = 90;
        this.guoyuan_gp.anchorOffsetX = 0;
        this.guoyuan_gp.anchorOffsetY = this.guoyuan_gp.height;
        this.guoyuan_gp.y = this.guoyuan_gp.height+this.guoyuan_gp.y;
        // 我的家园
        this.jiayuan_gp.rotation = -90;
        this.jiayuan_gp.anchorOffsetX = this.jiayuan_gp.width;
        this.jiayuan_gp.anchorOffsetY = this.jiayuan_gp.height;
        this.jiayuan_gp.x = this.jiayuan_gp.width+this.jiayuan_gp.x;
        this.jiayuan_gp.y = this.jiayuan_gp.height+this.jiayuan_gp.y;
        // 顶部展开收缩按钮
        this.up_down.anchorOffsetX = this.up_down.width/2;
        this.up_down.anchorOffsetY = this.up_down.height/2;
        this.up_down.x = this.up_down.width/2+this.up_down.x;
        this.up_down.y = this.up_down.height/2+this.up_down.y;
        console.log(this.up_down.width);
    }
    public rotateIcons(evt:egret.TouchEvent){
        if(this.bool1 && evt.currentTarget == this.my_guoyuan){
            egret.Tween.get(this.guoyuan_gp).to({rotation:0},1000);
            this.bool1 = false;
        }else if(!this.bool1 && evt.currentTarget == this.my_guoyuan){
            egret.Tween.get(this.guoyuan_gp).to({rotation:90},1000);
            this.bool1 = true;
        }
        if(this.bool2 && evt.currentTarget == this.my_jiayuan){
            egret.Tween.get(this.jiayuan_gp).to({rotation:0},1000);
            this.bool2 = false;
        }else if(!this.bool2 && evt.currentTarget == this.my_jiayuan){
            egret.Tween.get(this.jiayuan_gp).to({rotation:-90},1000);
            this.bool2 = true;
        }
    }
    // 创建等级排行列表
	public creatRankList(){
        var cropsArr: Array<Object> = [
            { icon: "rank_16",goodsName: "魔法石",comment: "法力加成 +3" }
            ,{ icon: "rank_15",goodsName: "诅咒娃娃",comment: "咒术加成 +3" }
            ,{ icon: "rank_17",goodsName: "万圣戒指",comment: "敏捷加成 +3" }
            ,{ icon: "rank_16",goodsName: "斗篷",comment: "耐力加成 +3" }
            ,{ icon: "rank_15",goodsName: "鹅毛笔",comment: "精神加成 +3" }
            ,{ icon: "rank_17",goodsName: "血滴子",comment: "嗜血加成 +3" }
            ,{ icon: "rank_15",goodsName: "鹅毛笔",comment: "精神加成 +3" }
            ,{ icon: "rank_17",goodsName: "血滴子",comment: "嗜血加成 +3" }
            ,{ icon: "rank_15",goodsName: "鹅毛笔",comment: "精神加成 +3" }
            ,{ icon: "rank_17",goodsName: "血滴子",comment: "嗜血加成 +3" }
        ];
        var petsArr: Array<Object> = [{icon:"rank_16"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_15"},{icon:"rank_17"},{icon:"rank_15"},{icon:"rank_16"},{icon:"rank_17"}];
        var friendsArr: Array<Object> = [{icon:"rank_15"},{icon:"rank_17"},{icon:"rank_16"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_16"}];
        // 我的仓库
        var guoShiArr: Array<Object> = [{icon:"gongju_43"},{icon:"gongju_51"},{icon:"gongju_52"},{icon:"gongju_53"},{icon:"gongju_54"},{icon:"gongju_55"},{icon:"rank_17"},{icon:"rank_16"}];
        var caiLiaoArr: Array<Object> = [{icon:"gongju_55"},{icon:"gongju_54"},{icon:"gongju_53"},{icon:"gongju_52"},{icon:"gongju_53"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_16"}];
        var baoShiArr: Array<Object> = [{icon:"gongju_52"},{icon:"gongju_53"},{icon:"gongju_52"},{icon:"gongju_51"},{icon:"gongju_55"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_16"}];
        var daoJuArr: Array<Object> = [{icon:"gongju_51"},{icon:"gongju_55"},{icon:"gongju_43"},{icon:"gongju_53"},{icon:"gongju_54"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_16"}];
        // 游戏商店
        var reXiaoArr: Array<Object> = [{icon:"rank_16"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_15"},{icon:"rank_17"},{icon:"rank_15"},{icon:"rank_16"},{icon:"rank_17"}];
        var gongJuArr: Array<Object> = [{icon:"rank_15"},{icon:"rank_17"},{icon:"rank_16"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_16"}];
        var baoXiangArr: Array<Object> = [{icon:"gongju_43"},{icon:"gongju_51"},{icon:"gongju_52"},{icon:"gongju_53"},{icon:"gongju_54"},{icon:"gongju_55"},{icon:"rank_17"},{icon:"rank_16"}];
        var chongWuArr: Array<Object> = [{icon:"gongju_55"},{icon:"gongju_54"},{icon:"gongju_53"},{icon:"gongju_52"},{icon:"gongju_53"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_16"}];
        // 兑换中心
        var suCaiArr: Array<Object> = [{icon:"rank_16"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_15"},{icon:"rank_17"},{icon:"rank_15"},{icon:"rank_16"},{icon:"rank_17"}];
        var shenXiangArr: Array<Object> = [{icon:"rank_15"},{icon:"rank_17"},{icon:"rank_16"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_16"}];
        var beiJingArr: Array<Object> = [{icon:"gongju_43"},{icon:"gongju_51"},{icon:"gongju_52"},{icon:"gongju_53"},{icon:"gongju_54"},{icon:"gongju_55"},{icon:"rank_17"},{icon:"rank_16"}];
        var gouLiangArr: Array<Object> = [{icon:"gongju_55"},{icon:"gongju_54"},{icon:"gongju_53"},{icon:"gongju_52"},{icon:"gongju_53"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_16"}];
        // 装扮
        var zhuangBanArr: Array<Object> = [{icon:"gongju_55"},{icon:"gongju_54"},{icon:"gongju_53"},{icon:"gongju_52"},{icon:"gongju_53"},{icon:"rank_16"},{icon:"rank_17"},{icon:"rank_16"}];
        // 土地升级(只有三个等级的地可升级)
        var landUpArr: Array<Object> = [{icon:"gongju_54"},{icon:"gongju_53"},{icon:"gongju_52"}];
        // 选项卡标题和列表数据
        var listItem: Array<any> = [this.crops_list,this.pets_list,this.friends_list,this.guoshi_list,this.cailiao_list,this.baoshi_list,this.daoju_list,this.rexiao_list,this.gongju_list,this.baoxiang_list,this.chongwu_list,this.sucai_list,this.shenxiang_list,this.beijing_list,this.gouliang_list,this.zhuangban_list,this.landup_list];
        var listArray:Array<any> = [cropsArr,petsArr,friendsArr,guoShiArr,caiLiaoArr,baoShiArr,daoJuArr,reXiaoArr,gongJuArr,baoXiangArr,chongWuArr,suCaiArr,shenXiangArr,beiJingArr,gouLiangArr,zhuangBanArr,landUpArr];
        console.log(this.rexiao_list);
        // 选项卡和我的仓库列表数据填充
        for(var i:number = 0;i<listItem.length;i++){
            //        将数组数据赋值给list列表
            listItem[i].dataProvider = new eui.ArrayCollection(listArray[i]);
            //        将PaiHang类对应的皮肤文件赋值给list的itemRender属性，即将皮肤内容加到list列表内
            if(0 <= i && i <3){
                // 排行榜列表
                listItem[i].itemRenderer = RankItem;
            }else if(3 <= i && i < 7){
                // 我的仓库物品
                listItem[i].itemRenderer = GoodsItem;
            }else if(7 <= i && i < 11){
                // 游戏商店
                listItem[i].itemRenderer = ShopItem;
            }else if(11 <= i && i < 15){
                // 游戏商店
                listItem[i].itemRenderer = DuiHuanItem;
            }else if(i == 15){
                // 游戏商店
                listItem[i].itemRenderer = HouseImgItem;
            }else if(i == 16){
                // 游戏商店
                listItem[i].itemRenderer = LandUpItem;
                console.log(1111);
            }
        }
	}
	public closeBoZhong(){
        this.crops_tishi.visible = false;
        this.crops_mask.visible = false;
        egret.Tween.get(this.crops_tishi).to({visible:false,scaleX:0,scaleY:0},200,egret.Ease.backIn);
    }
}







