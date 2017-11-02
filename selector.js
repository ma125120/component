var $=(function() {
	var $=function(selector) {
		return new _$(selector);
	},_$=function(selector) {
		var t=this;
		if(typeof selector=='string') {
			var args=selector.split(","),
						arr=[],
						index=0;
				args.map(function(v,i) {
					var eles=Array.prototype.slice.call(document.querySelectorAll(v),0);
					eles.map(function(_v,_i) {
						t[index]=_v;
						index=index+1;
					})
				});
				t.length=index;
		} else {
			if(selector.length) {
				return selector;
			} else if($.isObeject(selector)) {
				t[0]=selector;
				t.length=1;
			}
		}
		return t;
	};
	_$.prototype.map=function(fn) {
		var t=this;
		for(var i=0,len=this.length;i<len;i++) {
	    fn(t[i],i);
	  }
	}
	_$.prototype.html=function(html) {
		var t=this;
		t.map(function(v,i) {
			v.innerHTML=html;
		})
	}
	$.fn={};
	$.fn.extend=function(name,fn) {
		_$.prototype[name]=fn;
	}
	$.fn.extend("addClass",function(args) {
		var c=args.split(","),t=this;
		for(var i=0,len=this.length;i<len;i++) {
			(function(index) {
				c.map(function(v,_i) {
					t[index].classList.add(v);
				});
			})(i);
		}
		return this;
	});
	$.fn.extend("removeClass",function(args) {
		var c=args.split(","),t=this;
		for(var i=0,len=this.length;i<len;i++) {
			(function(index) {
				c.map(function(v,_i) {
					t[index].classList.remove(v);
				});
			})(i);
		}
		return this;
	});
	$.isArray=function() {
		return Object.prototype.toString.call(value)=="[object Array]";
	};
	$.isObject=function() {
		return Object.prototype.toString.call(value)=="[object Object]";
	};
	$.toArray=function(obj) {
		return Array.prototype.slice.call(obj,0);
	};
	return $;
})();
