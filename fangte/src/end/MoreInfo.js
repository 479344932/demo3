var end=end||{};
end.MoreInfo=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	s.addEventListener(annie.MouseEvent.MOUSE_UP,function (e) {
		s.visible=false;
		s.parent.con_mc.name_mc.visible=true;
		s.parent.con_mc.phone_mc.visible=true;
	})
};
F2xExtend(end.MoreInfo,F2xContainer);
end.MoreInfo.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("end","F2xAuto_77");
	Flash2x.d(_d0,{x:-205,y:-179.1});
	var _d1=Flash2x.b("end","F2xAuto_88");
	Flash2x.d(_d1,{x:-245,y:-246.1});
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
