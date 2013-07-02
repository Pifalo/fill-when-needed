/*
 * simple.js
 * basic javascript fillers to simplify cross-browser support
 * 
 * 
 * 
 */

/* loose augmentation module pattern */
var simple = (function() {
	
	var public = {};
	
	/* 
	 * var myElementsArray = simple.getElementsByClassName(DOM node, class string)
	 * returns array of DOM elements that have the given class string
	 */
	public.getElementsByClassName = function(node, classname) {
		var elems = [];
		
		if (document.getElementsByClassName) { // check for support of getElementsByClassName
			elems = document.getElementsByClassName(classname);
		} else if (document.querySelectorAll) { // IE8 supports querySelectorAll
			elems = document.querySelectorAll(classname);
		} else { // IE7 needs a helper fn
			var re = new RegExp('(^| )'+classname+'( |$)'),
				i = 0;
		    /*
		     * reg exp:
		     * 		'(^| )'			at the start of the string, OR a space ...
		     * 		+classname+		the exact match of the 'classname' var ...
		     * 		'( |$)'			followed by a space, OR end of the string
		     */
			var allElems = node.getElementsByTagName("*");
		    for (i=0; i<allElems.length; i++) {
		        if (re.test(allElems[i].className)) {
		        	elems.push(allElems[i]);
		        }
			}
		}
		return elems
	};
	
	return public;
	
}(simple || {}));



/*


*/