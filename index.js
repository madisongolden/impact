(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1571,1727],[0,1729,1352,213]]},
		{name:"index_atlas_2", frames: [[1676,0,300,135],[1734,180,132,84],[1868,180,132,84],[0,214,132,84],[268,214,132,83],[134,214,132,84],[0,0,1052,212],[1978,0,4,14],[1437,180,295,41],[1054,0,620,144],[1676,137,331,41],[1054,146,381,144]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.CachedBmp_14 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
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


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AruFRIAAqhIXdAAIAAKhg");
	mask.setTransform(75.05,33.65);

	// Layer_3
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,150,67.3), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AohBfIAAi9IRDAAIAAC9g");
	mask.setTransform(54.6,9.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AlIBcIgCAAIgBAAIAAgCIACgCQAOgBAIgGQAIgHADgKQAFgKAAgNIgBg2IgCgaQgHAVgFALQgFAJgGAIQgFAGgEACQgEABgEgCQgCgBgDgFIgDgIQAAgGADgJIAHgRIAJgPQAHgIAGgEQAGgEAGAAQAGAAAGAFIAGBJQACAKgCAJIgEATQgDAKgEAIQgEAIgGAGQgGAFgHACIgDAAQgGAAgFgDgAktgzQgEABgFADIgHAIIgHALIgFALIgFATQACAFADAAQACAAADgDIAHgJIAUgqIgBgDIgCgBIgBAAgAE2BGIgCgBIAAgBQACgOAAgRIgBg5IgBggIABgDQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAABAAQAAABABAAQAAABAAAAQAAABAAAAIABAHIgBAHIAAAGIAXgPQAFgDAHgBQAHgCAGACQAJABADAEQADAEgBAFQAAAEgEAGIgJAMIgNALQgIAGgFADIgMAJIgIAFIgDAzIgCAAIgBAAgAFegsQgIACgGAEQgGADgHAHQgFAHgBAEIgBAGIADASIANgIQAIgEAIgHQAGgEAHgIQAFgGADgJQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgFAAIgJABgAICAcIgEhDIgCACIgGACQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIgCgBIgBgCIgBgDIAAgDIAQgIIAAgoQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAFABIABAAIAAABIgBAlIAYgHIABABIABAHIgaALIACBFQAAAEgCAAQgDAAgDgCgAhjAYQgEgEgBgFIgCgLIAAgKIgDABIgCAAIgEgBQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgBIACgCIAGgHIAIgUIAGgJQADgEAEgCQAEgDAHAAIAGABIAGAEIAEAFQADACAAAEQAAABAAAAQAAAAgBABQAAAAAAABQgBABAAAAIgGAFIgaAPIgFADIgCAIIgBALIABAHQAAADACACQADACAEAAQAFAAAFgDQAFgCADgEIAHgIIALgOIAEgCIADABQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAADgBAEIgHAHIgSAQIgJAGIgJACQgGAAgEgDgAhTguIgGAHIgDAHQgCAEAAADIAGgCIAJgFIAIgFQAEgEAAgCQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgDgCIgCgBIgEAAQgBAAgEACgAiUAbIgDgNIgJhUIgDAAIgUADIgKACIgKABIgEAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgDQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAqgGIAAgCIABgDQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAAAIACgBIADABIACACIABACQAAAAABAAQAAAAAAABQAAAAAAAAQABAAAAAAIABAAIAtgFIACAAIADAAQAAADgDACIgIADIgpAFIAAAXIAIBGIABAEIgBACIgCAAgAHGAXQgEgEgCgGIgDgMIgCgJIACgMIABgOIACgMQACgGADgFQACgEAEgDQAFgDAFAAQAEAAADAEQABADABAFIABARQgDAAgBgCQgDgDAAgEIgDgHIAAgEIgBAAQgDAAgCADIgEAHIgDAKIgEAWIgBAHIAAAJIACAIQACAEACADQADADAFABQAGAAAEgBQADgBACgEIAEgGIAEgMIAEgHIADAAIABACIAAACIAAACQAAAGgCAFQgBAFgFAGQgGAGgFACQgFADgHAAQgIAAgDgEgAmbAZIgFhVQAAgEADAAIACAAIABABQAAABAAAAQABAAAAABQAAAAAAABQAAABAAABIAGA3IAGgVQACgJACgJQADgIAGgGQAFgGAKgEQAHACACAFQAEAHACAIIADASIABAuIgBACIgCABIgCAAIgDgBIgDhFQgEgGgDAAQgEgBgDADIgFAIIgHANIgLArIgCAKQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDABgAnIAYQgCgCgBgEIgBgHIgBgTIABgNIACgPIAFgUIACgCIAEgCIADAAQAEAAACACIAFAFIAEAHIADAGIACAMQABAHgBAHIgCAOIgFAMQgCAEgGAGQgGAEgGABQgDAAgCgDgAm9gwIgEAFIgCAJIgBAqIACAJIABAAQAEAAADgDIAEgGIADgIIADgTIAAgOIgBgKIgCgEQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIgCgBIgEABgAoeAVIgChIIgBgKIAAgHQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIADAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQABABAAAEIADBTIABAAIA7gZIACAAIADABIABACIgBACIgBADQgLABgHAEIgjASQgJAEgJAAQgEAAAAgGgADXhAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBIAEAAIACAAIACAMIACA0IAHgiIACgHIADgDIADgBIAFAAIAEACIADAGQACADAAAFIACAOQAAABAAABQAAAAAAABQABAAAAABQAAAAAAABIAMgfIAEgGIACgCIADAAIACAAQAEAAACAEIAFAaIAAAVIACAJQACAFACAFIgCADIgDABIgEgBIgCgEIgCgHIgCghQgCgNgDAAQgCgBgFALIgKAiIgBABIgGAAQgEgYgCgIQgDgKgDACQgCADgDAOIgJAoIgHABgAAahAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBIAEAAIACAAQACAEAAAIIACA0IAHgiQABgEABgDIADgDIADgBIAFAAQAAAAABAAQAAABABAAQAAAAABAAQABABAAAAIADAGIAEAWQAAABAAABQAAAAAAABQABAAAAABQAAAAAAABIAMgfIAEgGIADgCIABAAIACAAQAEAAADAEIAEAOIABAhIACAJQABAGADAEIgCADIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgCgEQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAgBgBIAAgDIgCghQgCgNgDAAQgCAAgFAKQgEAPgGATIgBABIgGAAIgGggQgDgKgDACQgDADgCAOIgJAoIgIABgAgXAaIgDgDIgLhGIAAgCIABgCIADgBIADABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAABABIAGAtIACAFIAAgZQABgKAEgIQAFgHAHgDQAEgCAMABQAFAAAAAFQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgMABIgDACQgGADgDAHIgDAPIgDAoQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgCAAgADHAZIgDhqIgBgIIABgCIABAAIAFAAIACAHIACBqQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgBAAIgFgBgAGuAYIgBgBIgCgWIgCgKQgBgGgCgCIgNAZQgHAJgEAEQgFAEgDAAQgCAAgDgDQgCgCgBgFIgBgIIACgIIADgOIAPgdIAJgKQAEgEAFAAQAHgCADAEQADAEgCAKIABASIAFAsIgBADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAgAGggvIgGAHIgHALIgLAaIgEAJQAAAGADABQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIAGgHIAQgcIADgGIACgQIgDgBIgCAAgAkMgCIgDAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIACgEQAIAAAGgDIAcgLQAHgCAFAAIABABIABADIAAADIAAABIgwAOg");
	this.shape.setTransform(54.6,9.5218);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0.1,109.2,18.9), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiKBEIAAiIIEVAAIAACIg");
	mask_1.setTransform(13.875,6.85);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("ABrBDIgEhEIgFADIgDABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCgBIgBgCIgBgDIAAgCIAPgJIABgoQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAEABIABAAIABABIgBAlIAXgGIABABIABACIABAEIgbALIADBFQAAAFgDgBQgDAAgCgBgABRBCIgCgHIAAgHQAAgCgCgDIgDAFIgGAGIgHAGQgDACgDABQgFgBgDgEQgEgFgBgHIgDgRIgBgrQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACgBIACABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIADAyIABAJIABAGQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQADAAACgCIAFgGIAIgNIADgHIABgEIABgkIAJABIgBApQAAAJACAIIAEASIgCABIgCABQgEAAgBgCgAhaA5IgHgXQgCgGgCgCQgDACgEABIgJACIgHAFQgDACgBAFIgCASIgIAAIAMhxQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIACgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIACACIABADIACADIAVA3IAFgBIAGgDIAHgBIACAAIABhKIAHAAIADABIABADIgDBGIAKgLIAJgHIAIgDIAIAAQAFgBACADQADADACADIACAIIABAJIgCAOIgFAIIgIAKIgNAKIgTALIgGACIgFAAIgBgBIAAgzIgCAAIgPAFIgCABIALAqIgFAGIgEgKgAgsgDIgJAHQgEAEgDAGIgGAKIAAAfIAMgHIAKgGQAGgEAEgFIAIgLQAEgIAAgGIgCgIIgEgEQgCgCgDABQgFAAgGACgAh4geIgFA4IAHgBIAGgCIAGgDIAEgFIgDgLIgLgiIgBgBIgBAAIgCABgAgBA/IgDgGIgBgIIAAgFIgBgOIABgOIAFgeIABgDIADgDIADgCIADAAQADAAADACIAGAGIAGAMQACAFAAAHIAAAOQgBAKgBAEQgCAIgDAEQgDAHgFADQgFAEgHABQgDAAgBgCgAAJgKIgEAFIgCAIIgBAMIAAAOIAAAUIACAGIABAAQAEAAACgDQADgCACgEIADgIIADgTIAAgTIgCgFIgCgDQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDgBIgDABg");
	this.shape_1.setTransform(13.875,6.85);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,27.8,13.7), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiFA1IAAhpIELAAIAABpg");
	mask_2.setTransform(13.425,5.325);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("ABQAyQgFgFgBgEQgBgFAAgGIAAgLIgDABIgDAAIgDgBQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgBIACgCIAGgHIAIgTIAGgJQAEgFADgBQAFgDAGAAIAGACIAGADQADACABADQACADAAAEQABAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgGAFIgfARIgCAIIAAADIgBACIABAOQAAADACACQACACAFAAQAFAAAFgCIAIgHIASgWQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAAAIADABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAADgCAEIgGAIIgSARIgKAFIgIACQgHAAgDgDgABggTQgEACgCAEIgEAHQgCAEAAACQADAAAEgBIAJgEIAIgGQADgDAAgDIgBgCIgDgCIgDgBIgDAAQgDAAgCADgAg/AzIgCgGIgBgHIAAgGIgBgOIAAgOIAHgeIABgDIACgDIADgBIAEgBQADAAADACIAFAFIAEAHIADAGIACAMIAAAOQgBAKgCAEQgBAHgDAGQgDAFgFAEQgFAEgHABQgDAAgDgCgAgzgWIgEAFIgCAJIgBAqIACAJIABAAQADAAADgCIAFgHIADgJIADgSIAAgOIgBgFIgBgFIgCgEQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDgBIgDABgAhTAwIgBgFIAAgFIgDgmIgfARQgDADgBADQgCADAAAFIACARIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgDhjIAAgCIABgCIAFABIABABIACAvIACAMIANgFIAKgFQAFgEACgEQADgFAAgHIgBgNIgEgOQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAAAAAIADgBIADABIACACIABAEIAAADIAIBXIAAAFIgBACIgDABQgDgDAAgCgAgXgmQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIADAAIADAAQACAFAAAHIACAzIAGggIADgIIACgDIADgBIAEAAQADAAACADIADAFIADAWIACAEIAMgeIADgGIADgCIACAAIACAAQAFAAACAFIADANIACAhIABAKQACAEADAFIgCADIgEABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgDgDIgCgIIgCgiQgBgLgDgBQgDgBgEAMQgCAEgIAdIgBABIgCAAIgEAAIgHghQgDgJgCACQgCACgDAOIgIApIgIACg");
	this.shape_2.setTransform(13.425,5.325);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,26.9,10.7), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg9YBDcMAAAiG3MB6xAAAMAAACG3g");
	mask.setTransform(392.9,431.625);

	// Layer_3
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(0.05,-0.05,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0.1,0,785.5,863.3), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgmA+QgegOgJgaQgKgdAZgmIABAAQASgbAhAAQAVAAAVALQAVALAMARQAUAcgGATQgEALgPAWQgKAVgfAEIgMABQgWAAgXgLg");
	mask.setTransform(35.1527,18.6621);

	// Layer_3
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(27.1,11.4,16.1,14.499999999999998), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgmA/QgegPgJgZQgKgeAZglIABgBQASgbAhAAQAVAAAVALQAVALAMASQAUAbgGATQgEAMgPAVQgKAVgfAEIgNABQgWAAgWgKg");
	mask.setTransform(28.9027,12.9633);

	// Layer_3
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(20.9,5.7,16.1,14.600000000000001), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBwIAAjfIBXAAIAADfg");
	mask.setTransform(4.4,11.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0343E").s().p("AglBlQACgGAAgFIAAgFQAAgHgDgLIgEgSIgBgKQAAgKALgBIACAAQADABAEABIADAAIAAAAIACABIADAAQAEAAADgCIACgBIAAAAQgFgDABgJQABgJADgDIACAAIABAAIAAABIAAAAIABACIABAAQAFAFAHAAIADAAQAIgCAKgKQACAAACgHIAAAAIgGgTQAGAGAGADIgGAKIAIAaIgCACQgGAGgGAAIAAAAQgGAAgGgHIgBgCIgBAGIACAMQAAADgCACIAAgBIgCgCIgCABIgDABIgCgBIAAAAIABAFIgCAMIAAABIgBgBIgDAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAgBIAAACQgEARgGAAIgBAAQgCAAgEgDIgBAAIgBgCIgCANIgBALQAAAGABAJIAAABQAAADgCABQgGgFgIgGgAAXgkQgMgQgHgGQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgBAAIgFAEIgBAAIAAAAIgBAAIgBABIgBAAQgDACgFAAIgDAAQgVgOABgbIABgJIArgIIABAAIAZBVIgHgKg");
	this.shape.setTransform(4.4,11.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,8.8,22.4), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA+QgfgOgIgaQgKgdAZgmIAAAAQASgbAiAAQAUAAAVALQAVALANARQATAcgGATQgEALgOAWQgLAVgfAEIgMABQgWAAgWgLg");
	mask.setTransform(41.1291,26.0121);

	// Layer_3
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(33.1,18.8,16.1,14.499999999999996), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AghA7IAAh1IBDAAIAAB1g");
	mask.setTransform(3.425,5.875);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0343E").s().p("AgVArQgGgCgGgGQADgBAAgDIAAgBQgCgJAAgGIADgXIACACIAAAAQAEAEADAAIAAAAQAGAAAFgRIABgDQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADAAIACAAIAAAAIABgNIAAgEIAAAAIABAAIACgBIACAAIACACIAAAAQACgCAAgDIgCgMIACgGIABACQAGAIAFAAIAAAAQAGAAAGgHIACgCIgpB0QgGgOgIgCg");
	this.shape.setTransform(3.425,5.875);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0,0,6.9,11.8), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSBIQgfgEgLgVQgOgVgEgMQgGgTAUgbQAMgRAVgLQAVgLAUAAQAjAAARAaIABABQAZAmgKAdQgJAageAOQgWAJgVAAIgOAAg");
	mask.setTransform(32.0473,18.5971);

	// Layer_3
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(24,11.4,16.1,14.499999999999998), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhgBnIAAjNIDAAAIAADNg");
	mask_1.setTransform(9.65,10.275);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0343E").s().p("AgKBQIgfgXIgBAAQgCAAgDAEIgEADIgCAAQgMgCgOgKQgOgLgBgLQgFgeAOgeQANgeASgGQAFgDAEgGQADgGAHgDIAWgJIAcgJIgBAKQAAAaAUAOIAEABIAIgDIABAAIAAgBIABAAIAAAAIABAAIAFgDIACAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAIAHALAPQAJAOAKAFIgGALQgCAGgCAAQgKAKgHACIgEAAQgHAAgGgFIAAAAIgCgCIAAAAIAAAAIgBgBIgCABQgDACgBAJQgBAKAFACIAAABIgBAAQgEACgEAAIgDAAIgBAAIgBAAIgDgBQgDgBgEAAIgCAAQgLAAAAALIABAKIAFASQACAKAAAHIAAAFQAAAGgCAGIgbgXg");
	this.shape.setTransform(9.6342,10.275);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,19.3,20.6), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSBIQgfgEgLgVQgOgWgEgLQgGgTAUgcQAMgRAVgLQAVgLAUAAQAiAAASAbIAAAAQAZAmgKAdQgIAagfAOQgWALgWAAIgMgBg");
	mask.setTransform(23.6223,21.0621);

	// Layer_3
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(15.6,13.8,16.1,14.5), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,526,106), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,676,106.5), null);


(lib.long_term_outline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(54.6,9.45,1,1,0,0,0,54.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.2,19);


(lib.home_outline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(13.4,5.3,1,1,0,0,0,13.4,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.9,10.7);


(lib.Group_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.setTransform(75,33.6,1,1,0,0,0,75,33.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_1, new cjs.Rectangle(0,0,150.1,67.5), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AruFRIAAqhIXdAAIAAKhg");
	mask.setTransform(75.05,33.65);

	// Layer_3
	this.instance = new lib.Group_0_1();
	this.instance.setTransform(75,33.6,1,1,0,0,0,75,33.6);
	this.instance.alpha = 0.8984;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,150.1,67.3), null);


(lib.Group_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_2_1();
	this.instance_1.setTransform(9.6,10.2,1,1,0,0,0,9.6,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(0,0,19.3,20.6), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_3_1();
	this.instance.setTransform(3.4,5.9,1,1,0,0,0,3.4,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,6.9,11.8), null);


(lib.Group_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_4();
	this.instance_2.setTransform(4.4,11.2,1,1,0,0,0,4.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_2, new cjs.Rectangle(0,0,8.8,22.4), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgTBRQghgIgSgeQgSgdAIghQAIgiAegSQAdgSAhAIQAiAJASAdQASAegJAhQgIAhgeATQgUAMgWAAQgJAAgLgDg");
	mask_1.setTransform(10.6382,12.1632);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFC3E0").s().p("AgTAhIADgUIABgGIAAAAIABgCIACACQABAAABgHQACgGABAAIABABIgBgEIABgHIABAAIADABIABAAQACAAAFgFIABgCIAPgRIgrBPIACgHg");
	this.shape.setTransform(18.15,20.325);

	this.instance_1 = new lib.Group_0_2();
	this.instance_1.setTransform(15.15,11.2,1,1,0,0,0,4.4,11.2);
	this.instance_1.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CDC0DE").s().p("AgTAhIADgUIABgGIAAAAIABgCIACACQABAAABgHQACgGABAAIABABIgBgEIABgHIABAAIADABIABAAQACAAAFgFIABgCIAPgRIgrBPIACgHg");
	this.shape_1.setTransform(18.15,20.325);

	this.instance_2 = new lib.Group_1();
	this.instance_2.setTransform(16.1,18.9,1,1,0,0,0,3.4,5.9);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Group_2_1();
	this.instance_3.setTransform(9.6,11,1,1,0,0,0,9.6,10.2);
	this.instance_3.alpha = 0.5;

	var maskedShapeInstanceList = [this.shape,this.instance_1,this.shape_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(2.3,3.8,16.7,16.8), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiGB8IAAj3IENAAIAAD3g");
	mask.setTransform(13.5,12.4);

	// Layer_3
	this.instance = new lib.ClipGroup_1_2();
	this.instance.setTransform(10.2,12.3,1,1,0,0,0,10.2,12.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,20.4,24.8), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Group_2();
	this.instance_1.setTransform(263.1,52.9,1,1,0,0,0,263.1,52.9);
	this.instance_1.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,526,106), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Group_0();
	this.instance.setTransform(337.9,53.1,1,1,0,0,0,337.9,53.1);
	this.instance.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,676,106.5), null);


(lib.about_outline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(13.8,6.9,1,1,0,0,0,13.8,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.8,13.7);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.setTransform(75,33.6,1,1,0,0,0,75,33.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,150.1,67.5), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AruFRIAAqhIXdAAIAAKhg");
	mask_1.setTransform(75.05,33.65);

	// Layer_3
	this.instance_1 = new lib.Group_3();
	this.instance_1.setTransform(75,33.6,1,1,0,0,0,75,33.6);
	this.instance_1.alpha = 0.8984;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,150.1,67.3), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AruFRIAAqhIXdAAIAAKhg");
	mask_3.setTransform(75.05,33.65);

	// Layer_3
	this.instance = new lib.ClipGroup_0_1();
	this.instance.setTransform(75,33.6,1,1,0,0,0,75,33.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,150.1,67.3), null);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_0();
	this.instance_2.setTransform(13.5,12.4,1,1,0,0,0,13.5,12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,27,24.8), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg9YBDcMAAAiG3MB6xAAAMAAACG3g");
	mask.setTransform(392.9,431.625);

	// Layer_3
	this.instance = new lib.Group_4();
	this.instance.setTransform(144.1,461.4,1,1,0,0,0,13.5,12.4);
	this.instance.alpha = 0.5313;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, new cjs.Rectangle(130.6,449,27,24.80000000000001), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Eg9YBDcMAAAiG3MB6xAAAMAAACG3g");
	mask_4.setTransform(392.9,431.625);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_7();
	this.instance_1.setTransform(392.9,431.6,1,1,0,0,0,392.9,431.6);

	this.instance_2 = new lib.ClipGroup_1_0();
	this.instance_2.setTransform(138.3,698.35,1,1,0,0,0,33,20.9);

	this.instance_3 = new lib.ClipGroup_2_0();
	this.instance_3.setTransform(600.3,571.7,1,1,0,0,0,33,20.8);

	this.instance_4 = new lib.ClipGroup_3_0();
	this.instance_4.setTransform(570.2,98.05,1,1,0,0,0,33,20.9);

	this.instance_5 = new lib.ClipGroup_4_0();
	this.instance_5.setTransform(185.9,241.6,1,1,0,0,0,33,20.9);

	this.instance_6 = new lib.ClipGroup_5();
	this.instance_6.setTransform(635.1,335.7,1,1,0,0,0,33,20.9);

	this.instance_7 = new lib.ClipGroup_6_1();
	this.instance_7.setTransform(392.9,431.6,1,1,0,0,0,392.9,431.6);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,785.8,863.3), null);


(lib.AdobeArtBrushPlugin_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Group_1_1();
	this.instance.setTransform(263.1,52.9,1,1,0,0,0,263.1,52.9);
	this.instance.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AdobeArtBrushPlugin_0, new cjs.Rectangle(0,0,526,106), null);


(lib.AdobeArtBrushPlugin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Group();
	this.instance.setTransform(337.9,53.1,1,1,0,0,0,337.9,53.1);
	this.instance.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AdobeArtBrushPlugin, new cjs.Rectangle(0,0,676,106.5), null);


(lib.daily_motion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.AdobeArtBrushPlugin_0();
	this.instance.setTransform(163.1,32.75,0.62,0.62,0,0,0,263.1,52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:263,rotation:-8.4647,x:163.15,y:32.8},0).wait(3).to({regX:263.1,rotation:0,x:163.1,y:32.75},0).wait(3).to({rotation:14.9984,y:32.85},0).wait(3).to({rotation:0,y:32.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-41,332.2,147.9);


(lib.daily = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.AdobeArtBrushPlugin_0();
	this.instance.setTransform(163.1,32.75,0.62,0.62,0,0,0,263.1,52.9);

	this.instance_1 = new lib.daily_motion();
	this.instance_1.setTransform(163.1,32.8,1,1,0,0,0,163.1,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,326.1,65.7);


(lib.menu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AjkGYQgjgHgUgXQgXgbAWgdQAXgeArgRQAkgOAsgDQAngCA0AFQgEgogZgyIgjhCQgUgngJgeQgSg+AUhVQAWhYA4gXQAbgLArgGIAegEQgmABg1AGQhbALgtgEQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAcgZAhg9QAihAAZgYQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAAAAAABQAPApAhAvQAoA4AlAMIABABIAVABQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABABAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgrAGIgqAGQgcAFgQAFQgYAHgPANQgeAagQA6QgLAsgBAtQgBA4AzBgQAtBUAGA0QA0AGBBAMQCcAeA7ADQADAAAAAEQAAAEgDgBQgxgChBgMIhxgWQg5gKgvgEIAAAIQgBBAhAApQguAegvAAQgPAAgQgEgAioENQgrAHgkAXQgyAgALAdQAGAQATAMQAPAJAUAEQAhAHAkgLQAigJAagVQAdgXANgeQAJgUgBgaIgDAAQgggCgbAAQgiAAgZADgAh7k9QgdA3gZAaQAsACBSgKQA4gGAogBQgegRgggrQgjgugQgrQgYAZgfA6g");
	this.shape.setTransform(19.6925,82.6362,0.6699,0.6699,0,180,0);

	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(13.5,78.55,0.3741,0.5962,-90,0,0,75.1,33.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,50.5,46.1,59.7);


(lib.long_term_motion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.AdobeArtBrushPlugin();
	this.instance.setTransform(209.55,33,0.62,0.62,0,0,0,338,53.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({rotation:-9.9907},0).wait(3).to({rotation:0},0).wait(3).to({rotation:11.9731,x:209.6,y:32.95},0).wait(3).to({rotation:0,x:209.55,y:33},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-42.7,424.2,151.5);


(lib.long_term = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.AdobeArtBrushPlugin();
	this.instance.setTransform(209.55,33,0.62,0.62,0,0,0,338,53.2);

	this.instance_1 = new lib.long_term_motion();
	this.instance_1.setTransform(209.5,33,1,1,0,0,0,209.5,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,419.1,66.1);


(lib.menu_expand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.menu_btn = new lib.menu();
	this.menu_btn.name = "menu_btn";
	this.menu_btn.setTransform(36.3,82.55,1,1,0,180,0,19.8,27.6);
	new cjs.ButtonHelper(this.menu_btn, 0, 1, 2, false, new lib.menu(), 3);

	this.menu_btn_1 = new lib.menu();
	this.menu_btn_1.name = "menu_btn_1";
	this.menu_btn_1.setTransform(36.3,82.55,1,1,0,180,0,19.8,27.6);
	new cjs.ButtonHelper(this.menu_btn_1, 0, 1, 2, false, new lib.menu(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.menu_btn_1},{t:this.menu_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.9,0,46.1,59.7);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,9];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.daily_btn.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("index_a.html", "_self");
		}
		
		this.long_term_outline.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("index_1.html", "_self");
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.menu_expand.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(10);
		}
		
		
		this.home_outline.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("index.html", "_self");
		}
		
		this.about_outline.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("index_2.html", "_self");
		}
		
		this.long_term_btn.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("index_1.html", "_self");
		}
		
		this.menu_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_9 = function() {
		this.home_outline.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("index.html", "_self");
		}
		
		this.about_outline.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("index_2.html", "_self");
		}
		
		this.long_term_outline.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("index_1.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(17));

	// menu
	this.menu_expand = new lib.menu_expand();
	this.menu_expand.name = "menu_expand";
	this.menu_expand.setTransform(1338,96.25,1,1,0,0,0,28.1,41.3);
	new cjs.ButtonHelper(this.menu_expand, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC0EiIAAowIovAAIAAgTIL3AAIAAJDg");
	this.shape.setTransform(1327.9,136.15);

	this.long_term_outline = new lib.long_term_outline();
	this.long_term_outline.name = "long_term_outline";
	this.long_term_outline.setTransform(1299.55,315.05,1,1,0,0,0,54.6,9.5);
	new cjs.ButtonHelper(this.long_term_outline, 0, 1, 2, false, new lib.long_term_outline(), 3);

	this.about_outline = new lib.about_outline();
	this.about_outline.name = "about_outline";
	this.about_outline.setTransform(1340.2,268.05,1,1,0,0,0,13.8,6.9);
	new cjs.ButtonHelper(this.about_outline, 0, 1, 2, false, new lib.about_outline(), 3);

	this.home_outline = new lib.home_outline();
	this.home_outline.name = "home_outline";
	this.home_outline.setTransform(1340.7,226,1,1,0,0,0,13.4,5.3);
	new cjs.ButtonHelper(this.home_outline, 0, 1, 2, false, new lib.home_outline(), 3);

	this.menu_btn = new lib.menu();
	this.menu_btn.name = "menu_btn";
	this.menu_btn.setTransform(1346.2,82.6,1,1,0,0,0,19.8,27.6);
	new cjs.ButtonHelper(this.menu_btn, 0, 1, 2, false, new lib.menu(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.menu_expand}]}).to({state:[{t:this.menu_btn},{t:this.home_outline},{t:this.about_outline},{t:this.long_term_outline}]},9).wait(17));

	// Layer_4
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(497.25,589.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(543.65,592.15,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(497.15,111.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(585.85,116.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(26));

	// button_2
	this.daily_btn = new lib.daily();
	this.daily_btn.name = "daily_btn";
	this.daily_btn.setTransform(661.7,145.15,1,1,0,0,0,163.1,32.8);
	new cjs.ButtonHelper(this.daily_btn, 0, 1, 2, false, new lib.daily(), 3);

	this.timeline.addTween(cjs.Tween.get(this.daily_btn).wait(26));

	// buttons
	this.long_term_btn = new lib.long_term();
	this.long_term_btn.name = "long_term_btn";
	this.long_term_btn.setTransform(716.5,624.65,1,1,0,0,0,209.5,33);
	new cjs.ButtonHelper(this.long_term_btn, 0, 1, 2, false, new lib.long_term(), 3);

	this.timeline.addTween(cjs.Tween.get(this.long_term_btn).wait(26));

	// graphic
	this.instance_4 = new lib.ClipGroup_8();
	this.instance_4.setTransform(685.2,379.75,0.5246,0.5246,0,0,0,393.1,431.9);

	this.instance_5 = new lib.CachedBmp_5();
	this.instance_5.setTransform(440.15,326.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(26));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1123.2,438.9,242.70000000000005,225.30000000000007);
// library properties:
lib.properties = {
	id: 'A507BA6EE0485A44BD963D2AB220D70A',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1610917602481", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1610917602482", id:"index_atlas_2"}
	],
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
an.compositions['A507BA6EE0485A44BD963D2AB220D70A'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;