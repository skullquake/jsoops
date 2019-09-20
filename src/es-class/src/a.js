/* -------------------------------------------------------------------------- */
Duktape.modSearch = function (id) {
	res = readFile('./lib/' + id);
	res = new TextDecoder("utf-8").decode(res);
	if (typeof res === 'string') {
		return res;
	}
}
/* -------------------------------------------------------------------------- */
	//add module.exports in es-class.js
var Class=require('es-class/2.0.0/es-class.js');
/* -------------------------------------------------------------------------- */
var Point=Class({
	constructor:function(x,y){
		this.x=x;
		this.y=y;
	},
	translate:function(x,y){
		this.x+=x;
		this.y+=y;
	}
});
var Person=Class({
	constructor:function(name){
		console.log('Person:ctor:s');
		this.name=name;
		console.log('Person:ctor:e');
	}
});
var Employee=Class({
	extends:Person,
	constructor:function(name){
		console.log('Employee:ctor:s');
		this.super(name);
		console.log('Employee:ctor:e');
	}
});
/* -------------------------------------------------------------------------- */
var p=new Point(0,0);
console.log(p);
p.translate(1,2);
console.log(p);
p.translate(-1,-2);
console.log(p);
var e=new Employee('John');
console.log(e.name);
