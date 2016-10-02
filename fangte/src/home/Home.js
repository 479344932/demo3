var home=home||{};
home.Home=function(){
	var s = this;
	F2xContainer.call(s);
	s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
		s.initUI();
		s.sPage=new annieUI.ScrollPage(640,s.stage.viewRect.height,4943);
		s.addChild(s.sPage);
		s.sPage.view.addChild(new home.Content());
		s.sPage.y=s.stage.viewRect.y;
		s.sPage.mouseEnable=false;
		var tip=new end.StartTip();
		tip.x=320;
		tip.y=520;
		s.addChild(tip);
		tip.do_btn.addEventListener(annie.MouseEvent.MOUSE_UP,function () {
			s.sPage.mouseEnable=true;
			s.removeChild(tip);
			s.arrow=new home.Arrow();
			s.arrow.x=285;
			s.arrow.y=s.stage.viewRect.height+s.stage.viewRect.y-75;
			s.addChild(s.arrow);
		})
	});
	globalDispatcher.addEventListener("onCloseArrow",function () {
		if(s.arrow) {
			//s.arrow.visible = false;
		}
	});
	globalDispatcher.addEventListener("onShowTip",function () {
		s.tip=new tip.Tip();
		s.addChild(s.tip);
	});
	globalDispatcher.addEventListener("onShowEnd",function () {
		s.removeChild(s.tip);
		s.removeChild(s.sPage);
		s.tip=null;
		s.end=new end.End();
		s.addChild(s.end);
	})
	globalDispatcher.addEventListener("onOnceAgain",function () {
		s.removeAllChildren();
		s.sPage=new annieUI.ScrollPage(640,s.stage.viewRect.height,4943);
		s.addChild(s.sPage);
		s.sPage.view.addChild(new home.Content());
		s.sPage.y=s.stage.viewRect.y;
	})
};
F2xExtend(home.Home,F2xContainer);
home.Home.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	Flash2x.getMediaByName("home","bg").play(0,32767);
	//f2x_auto_created_init_end
};
