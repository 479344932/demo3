var tip=tip||{};
tip.Tip=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	setTimeout(function () {
		s.con_mc.play(false);
	},4000);
	s.con_mc.addEventListener(annie.Event.END_FRAME,function (e) {
		if(e.data.frameIndex==1){
			globalDispatcher.dispatchEvent("onShowEnd");
		}
	})
};
F2xExtend(tip.Tip,F2xContainer);
tip.Tip.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new tip.F2xAuto_2();
	_d0.name="con_mc";
	s.con_mc=_d0;
	s.addChild(_d0);
	//f2x_auto_created_init_end
};
