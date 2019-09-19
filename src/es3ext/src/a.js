/* -------------------------------------------------------------------------- */
Duktape.modSearch = function (id) {
	res = readFile('./lib/' + id);
	res = new TextDecoder("utf-8").decode(res);
	if (typeof res === 'string') {
		return res;
	}
}
/* -------------------------------------------------------------------------- */
var ES3Class=require('es3class.js')
var ES3Ext=require('es3ext.js')
/* -------------------------------------------------------------------------- */
var Rectangle=ES3Class({
	constructor:function (width, height) {
		this.width = width;
		this.height = height;
	},
	area: function () {
		return this.width * this.height;
	}
});
/* -------------------------------------------------------------------------- */
var Square=ES3Ext(
	Rectangle,{
		constructor:function(size){
		Rectangle.call(this,size,size);
	}
});
/* -------------------------------------------------------------------------- */
var s=new Square(3);
s.area();
console.log(s.area());
var r=new Rectangle(2,3);
console.log(r.area());

