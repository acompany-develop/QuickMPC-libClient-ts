// stringをサニタイズして返す処理
export function sanitize(str: string): string {
	return str.replace(/[&'"<>]/g, (match):string => {
		if (match=='&'){
		    return '&amp;';
		}else if(match=="'"){
		    return '&#x27;';
		}else if(match=='"'){
		    return '&quot;';
		}else if(match=='<'){
		    return '&lt;';
		}else if(match=='>'){
		    return '&gt;';
		}else{
		    return match
		}
	    });
}