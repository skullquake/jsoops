{
	var ES5Class=require('es5class.js');
	var ES5Ext=function(parent,obj){
		var constructor=obj.hasOwnProperty('constructor') ?
		obj.constructor:(obj.constructor=function(){});
		constructor.prototype=Object.create(parent.prototype);
		return ES5Class(obj);
	}
	module.exports=ES5Ext;
}
