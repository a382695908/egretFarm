//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.loadingLength = 344;
        // this.skinName = "resource/eui_skins/LoadingSkin.exml";
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        // 背景图
        this.load_bg = new egret.Bitmap();
        this.load_bg.texture = RES.getRes("load4_png");
        this.load_bg.width = egret.MainContext.instance.stage.stageWidth;
        this.load_bg.height = egret.MainContext.instance.stage.stageHeight;
        this.load_bg.x = 0;
        this.load_bg.y = 0;
        this.addChild(this.load_bg);
        // 游戏标题
        this.load_title = new egret.Bitmap();
        this.load_title.texture = RES.getRes("load3_png");
        this.load_title.x = (egret.MainContext.instance.stage.stageWidth - this.load_title.width) / 2;
        this.load_title.y = 200;
        this.addChild(this.load_title);
        // 进度条容器
        this.progress_box = new egret.Bitmap();
        this.progress_box.texture = RES.getRes("load2_png");
        this.progress_box.x = (egret.MainContext.instance.stage.stageWidth - this.progress_box.width) / 2;
        this.progress_box.y = 430;
        this.addChild(this.progress_box);
        //    加载进度条
        this.load_progress = new egret.Bitmap();
        this.load_progress.texture = RES.getRes("load1_png");
        this.load_progress.x = (egret.MainContext.instance.stage.stageWidth - this.load_progress.width) / 2 + 12;
        this.load_progress.y = 465;
        this.load_progress.width = 0;
        this.addChild(this.load_progress);
        // 加载进度百分比
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.width = egret.MainContext.instance.stage.stageWidth;
        this.textField.height = 100;
        this.textField.y = 510;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.setProgress = function (current, total) {
        this.textField.text = "\u8D44\u6E90\u52A0\u8F7D\u4E2D" + current + "/" + total;
        this.load_progress.width = (current / total) * this.loadingLength;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI");
