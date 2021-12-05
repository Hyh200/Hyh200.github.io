(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AiRRRQg8iMAAjHQAAjGA7iNQA8iMBVAAQBUAAA8CMQA8CMAADHQAADGg8CNQg8CMhUAAQhVAAg7iMgAtwNwQg8g8A4iNQA5iNCMiNQCMiMCNg5QCNg5A8A7QA8A8g5COQg4CNiMCNQiMCMiNA5QhFAcgxAAQg0AAgfgfgAKoNyQiOg5iMiMQiNiMg5iOQg5iNA8g8QA8g8CNA4QCOA5CNCMQCMCMA5COQA6CNg8A8QgfAfg1AAQgxAAhFgbgAxTCQQiMg7AAhVQAAhUCMg8QCMg7DHgBQDGAACMA8QCMA8AABUQAABUiMA8QiMA8jGAAIgEAAQjEAAiLg8gAGsCOQiMg8AAhUQgBhVCNg8QCMg8DHAAQDHAACNA8QCMA8ABBVQAABUiNA8QiMA8jHAAQjHAAiNg8gAmYjIQiNg4iMiMQiMiMg5iMQg5iOA8g7QA7g8CNA4QCOA5CMCLQCMCMA5CNQA5CNg8A8QgfAeg0AAQgxAAhFgbgADLjPQg9g8A5iNQA5iOCNiNQCNiNCNg4QCOg6A8A9QA8A8g5COQg4CNiNCNQiNCNiOA5QhEAbgyAAQg0AAgfgfgAiUmsQg8iMAAjGQAAjGA8iMQA7iMBVAAQBTAAA8CMQA8CLAADGQAADGg8CMQg7CMhUAAIAAAAQhUAAg8iLg");
	this.shape.setTransform(124.775,124.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,249.6,249.1), null);


// stage content:
(lib.旋转动画 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_4
	this.instance = new lib.元件2();
	this.instance.setTransform(823.7,368.15,1,1,0,0,0,124.8,124.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AiRRRQg8iMAAjHQAAjGA7iNQA8iMBVAAQBUAAA8CMQA8CMAADHQAADGg8CNQg8CMhUAAQhVAAg7iMgAtwNwQg8g8A4iNQA5iNCMiNQCMiMCNg5QCNg5A8A7QA8A8g5COQg4CNiMCNQiMCMiNA5QhFAcgxAAQg0AAgfgfgAKoNyQiOg5iMiMQiNiMg5iOQg5iNA8g8QA8g8CNA4QCOA5CNCMQCMCMA5COQA6CNg8A8QgfAfg1AAQgxAAhFgbgAxTCQQiMg7AAhVQAAhUCMg8QCMg7DHgBQDGAACMA8QCMA8AABUQAABUiMA8QiMA8jGAAIgEAAQjEAAiLg8gAGsCOQiMg8AAhUQgBhVCNg8QCMg8DHAAQDHAACNA8QCMA8ABBVQAABUiNA8QiMA8jHAAQjHAAiNg8gAmYjIQiNg4iMiMQiMiMg5iMQg5iOA8g7QA7g8CNA4QCOA5CMCLQCMCMA5CNQA5CNg8A8QgfAeg0AAQgxAAhFgbgADLjPQg9g8A5iNQA5iOCNiNQCNiNCNg4QCOg6A8A9QA8A8g5COQg4CNiNCNQiNCNiOA5QhEAbgyAAQg0AAgfgfgAiUmsQg8iMAAjGQAAjGA8iMQA7iMBVAAQBTAAA8CMQA8CLAADGQAADGg8CMQg7CMhUAAIAAAAQhUAAg8iLg");
	this.shape.setTransform(823.675,368.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:12.8571,x:823.65},0).wait(1).to({rotation:25.7143,x:823.7},0).wait(1).to({rotation:38.5714,x:823.65},0).wait(1).to({rotation:51.4286,y:368.1},0).wait(1).to({rotation:64.2857,y:368.15},0).wait(1).to({rotation:77.1429,x:823.6},0).wait(1).to({rotation:90,x:823.65,y:368.2},0).wait(1).to({rotation:102.8571,x:823.6,y:368.15},0).wait(1).to({rotation:115.7143,y:368.2},0).wait(1).to({rotation:128.5714,y:368.15},0).wait(1).to({rotation:141.4286,x:823.65},0).wait(1).to({rotation:154.2857,x:823.6},0).wait(1).to({rotation:167.1429,y:368.1},0).wait(1).to({rotation:180,y:368.15},0).wait(1).to({rotation:192.8571,y:368.1},0).wait(1).to({rotation:205.7143,x:823.55},0).wait(1).to({rotation:218.5714,x:823.6},0).wait(1).to({rotation:231.4286,y:368.15},0).wait(1).to({rotation:244.2857,y:368.1},0).wait(1).to({rotation:257.1429,x:823.65},0).wait(1).to({rotation:270},0).wait(1).to({rotation:282.8571},0).wait(1).to({rotation:295.7143,y:368.05},0).wait(1).to({rotation:308.5714,y:368.1},0).wait(1).to({rotation:321.4286,x:823.6},0).wait(1).to({rotation:334.2857,x:823.65},0).wait(1).to({rotation:347.1429,y:368.15},0).wait(1).to({rotation:360,x:823.7},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1658.9,783.4,-710.4000000000001,-290.4);
// library properties:
lib.properties = {
	id: 'F8879D6C0CB8554BBFD3FF36786DBDE1',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F8879D6C0CB8554BBFD3FF36786DBDE1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;