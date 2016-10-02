/**
 * @desc 微信分享接口，前端示例
 */
function sendCount(msg){
    /*Flash2x.ajax({
        responseType:"text",
        type: "GET",
        url: serverUrl+"Home/Index/messageCount",
        data:{projectId:"fangTe",cid:id,message:msg},
    });*/
    DS.ready(function(){
        DS.sendBtnName(msg);
    });
}

var WxShare = (function(){
    var _shareInfo = {
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '' // 如果type是music或video，则要提供数据链接，默认为空
    };
    var _Share = function(){
    };
     /**
     *
     * @param info {title,desc,link,imgUrl,type,dataUrl,success,cancel} 可为空
     *
     */
    _Share.setInfo = function(info){
        for (var i in info){
            _shareInfo[i] = info[i];
        }
    };
    _Share.dsUserInfo = function(){
        //
        var urlLoader=new annie.URLLoader();
        urlLoader.data={
            url: location.href.split('#')[0],
            type: "signature"
        };
        urlLoader.responseType="json";
        urlLoader.load(serverUrl+"home/Index/getWeChatInfo");
        urlLoader.addEventListener(annie.Event.COMPLETE,function (e) {
            var result = e.data.response;
            DS.ready(function(){
                DS.sendAuthUserInfo(result.userInfo, result.appid);
            });
        });
    };
    /**
     *
     * @param postUrl 请求后台验证的地址
     * @param isDebug 是否开启调试模式
     * @param jsApiList 请求后需要激活的js接口列表  可为空
     * @param 请求准备好之后的回调设置  可为空
     *
     */
    _Share.initRemote = function (postUrl, isDebug, jsApiList, readyCallBack){
        var urlLoader=new annie.URLLoader();
        urlLoader.data={
            url: location.href.split('#')[0],
            type: "signature"
        };
        urlLoader.responseType="json";
        urlLoader.load(postUrl);
        urlLoader.addEventListener(annie.Event.COMPLETE,function (e){
            var result=e.data.response;
            if (result.code != 0) {
                alert('获取签名出错');
                return;
            }
            var options = result.data;
            var apiList;
            var callBack;
            if (jsApiList) {
                apiList = jsApiList;
            } else {
                apiList = [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone'
                ]; // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            }
            if (readyCallBack) {
                callBack = readyCallBack;
            } else {
                callBack = function () {
                        wx.onMenuShareAppMessage(_shareInfo);
                        wx.onMenuShareQQ(_shareInfo);
                        wx.onMenuShareWeibo(_shareInfo);
                        wx.onMenuShareQZone(_shareInfo);
                        wx.onMenuShareTimeline(_shareInfo);
                }
            }
            wx.config({
                debug: isDebug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: options.appId, // 必填，公众号的唯一标识
                timestamp: options.timestamp, // 必填，生成签名的时间戳
                nonceStr: options.nonceStr, // 必填，生成签名的随机串
                signature: options.signature,// 必填，签名，见附录1
                jsApiList: apiList
            });
            wx.ready(callBack);
        })
    };
    return _Share;
})();
//如果需要更改分享内容的话,随时调用这个方法,
DS.ready(function () {
    WxShare.setInfo({
        title: "大婚在即,祝英台你在哪里!",
        desc: "梁祝终成良缘,新娘却又离奇失踪?快来扭转结局吧!",
        link: DS.linkChange(serverUrl),
        imgUrl: serverUrl + "resource/share.jpg",
        success: function () {
            DS.sendRepost("分享成功");
        }, cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
});
WxShare.initRemote(serverUrl+"wxapi.php",false);
WxShare.dsUserInfo();