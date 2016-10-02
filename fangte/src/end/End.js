var end=end||{};
end.End=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	s.con_mc.addEventListener("onShowMore",function () {
		if(!s.moreMc){
			s.moreMc=new end.MoreInfo();
			s.addChild(s.moreMc);
			s.moreMc.x=320;
			s.moreMc.y=520;
		}else {
			s.moreMc.visible = true;
		}
	});
	sendCount("进入尾页");
};
F2xExtend(end.End,F2xContainer);
end.End.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new end.Content();
	_d0.name="con_mc";
	s.con_mc=_d0;
	s.addChild(_d0);
	//f2x_auto_created_init_end
};
