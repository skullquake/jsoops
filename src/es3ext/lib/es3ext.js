{
	var ES3Class=require('es3class.js');
	var ES3Ext=(function(){
		function Bridge(constructor) {
			this.constructor=constructor;
			Bridge.prototype=Function.prototype;
		}
		return function ES3Extends(parent,obj){
			var constructor=obj.hasOwnProperty('constructor') ?
				obj.constructor:
				(obj.constructor=function(){})
			;
			Bridge.prototype=parent.prototype;
			constructor.prototype=new Bridge(constructor);
			return ES3Class(obj);
		};

	}());
	module.exports=ES3Ext;
}
