var loading=loading||{};
loading.Loading=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(loading.Loading,F2xContainer);
loading.Loading.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new loading.F2xAuto_3();
	_d0.name="con_mc";
	s.con_mc=_d0;
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
