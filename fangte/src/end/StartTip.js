var end=end||{};
end.StartTip=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(end.StartTip,F2xContainer);
end.StartTip.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new end.F2xAuto_31();
	_d0.mouseChildren=false;
	_d0.name="do_btn";
	s.do_btn=_d0;
	Flash2x.d(_d0,{x:-96.95,y:166.4});
	var _d1=Flash2x.b("end","F2xAuto_80");
	Flash2x.d(_d1,{x:-209.95,y:-209});
	var _d2=Flash2x.b("end","F2xAuto_88");
	Flash2x.d(_d2,{x:-245,y:-246.05});
	var _d3=new end.F2xAuto_32();
	Flash2x.d(_d3,{x:-320.1,y:-519.6,o:0.8008});
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
