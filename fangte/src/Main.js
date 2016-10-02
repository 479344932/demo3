/**
 * @author anlun214 QQ:58529016
 */
var serverUrl="http://ft.help2x.com/";
var F2xExtend=__extends;
window.addEventListener("load",function(){
    /**
     * 最上层div的id,可以在一个页面同时放多个stage.
     * 设计尺寸的宽
     * 设计尺寸的高
     * FPS刷新率
     * 缩放模式
     * 渲染模式
     */
    var stage=new annie.Stage("annieEngine",640,1040,30,annie.StageScaleMode.FIXED_WIDTH,0);
    stage.addEventListener(annie.Event.INIT_TO_STAGE,function (e) {
        Flash2x.loadScene("loading",function(per){
            //加载进度
            //console.log("加载进度:"+per+"%");
        },function(){
            //加载完成
            sendCount("进入首页");
            var loadObj=new loading.Loading();
            stage.addChild(loadObj);
            Flash2x.loadScene(["home","tip","end"],function(per){
                //加载进度
                //console.log("加载进度:"+per+"%");
                loadObj.con_mc.per_txt.text=per+"%";
                loadObj.con_mc.gotoAndStop(per);
            },function(){
                //加载完成
                annie.Tween.to(loadObj,0.6,{alpha:0,onComplete:function () {
                    stage.removeChild(loadObj);
                    var h=new home.Home();
                    h.alpha=0;
                    annie.Tween.to(h,0.6,{alpha:1});
                    stage.addChild(h);
                }})
            });
        });
    })
});