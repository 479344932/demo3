var home=home||{};
home.Content=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	//s.bg_mc.mouseChildren=false;
	lookCount=0;
	s.addEventListener(annie.MouseEvent.CLICK,function (e) {
		if(e.target.name.indexOf("p")==0){
			if(e.target.currentFrame==1){
				e.target.play();
				e.target.mouseEnable=false;
				lookCount++;
				if(lookCount==6){
					setTimeout(function () {
						globalDispatcher.dispatchEvent("onShowTip");
					},3000)
				}
				setTimeout(function () {
					e.target.play();
				},2000);
				globalDispatcher.dispatchEvent("onCloseArrow");
			}
		}
	})
};
F2xExtend(home.Content,F2xContainer);
home.Content.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new home.Person1();
	_d0.name="p1";
	s.p1=_d0;
	Flash2x.d(_d0,{x:25,y:1165});
	var _d1=new home.Person2();
	_d1.name="p2";
	s.p2=_d1;
	Flash2x.d(_d1,{x:264,y:1780});
	var _d2=new home.Person3();
	_d2.name="p3";
	s.p3=_d2;
	Flash2x.d(_d2,{x:19,y:2438});
	var _d3=new home.Person4();
	_d3.name="p4";
	s.p4=_d3;
	Flash2x.d(_d3,{x:327,y:3027});
	var _d4=new home.Person5();
	_d4.name="p5";
	s.p5=_d4;
	Flash2x.d(_d4,{x:33,y:3636});
	var _d5=new home.Person6();
	_d5.name="p6";
	s.p6=_d5;
	Flash2x.d(_d5,{x:300,y:4503});
	var _d6=new home.F2xAuto_67();
	_d6.name="bg_mc";
	s.bg_mc=_d6;
	s.addChild(_d6);
	s.addChild(_d5);
	s.addChild(_d4);
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
