
/* -------------------------------------------------------------------------- */
Duktape.modSearch = function (id) {
	res = readFile('./lib/' + id);
	res = new TextDecoder("utf-8").decode(res);
	if (typeof res === 'string') {
		return res;
	}
}
/* -------------------------------------------------------------------------- */
var ES5Class=require('es5class.js')
var ES5Ext=require('es5ext.js')
/* -------------------------------------------------------------------------- */
var Rectangle=ES5Class({
	constructor:function (width, height) {
		this.width = width;
		this.height = height;
	},
	area: function () {
		return this.width * this.height;
	}
});
/* -------------------------------------------------------------------------- */
var Square=ES5Ext(
	Rectangle,{
		constructor:function(size){
		Rectangle.call(this,size,size);
	}
});
/* -------------------------------------------------------------------------- */
var s=new Square(5);
s.area();
console.log(s.area());
var r=new Rectangle(2,5);
console.log(r.area());

