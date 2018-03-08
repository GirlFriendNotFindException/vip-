/**
 * 读取xml
 */
function  readXML(){
	var xmldom=createXMLDOM();
	
	xmldom.load('api.xml');
	
	var data=[];
	var nodes=xmldom.getElementsByTagName("root")[0].childNodes;
	var len=nodes.length;
	for(var i=0; i<len; i++){
		var attributes=nodes[i].attributes;
		if(attributes!=undefined){
			if(attributes.isValid.nodeValue=="true"){
				var arr={};
				
				arr["site"]=attributes.site.nodeValue;
				arr["api"]=nodes[i].childNodes[0].data;
				data.push(arr);
			}
		}
	}
	return data;
	
}

/**
 *  创建dom容器 
 */
function createXMLDOM(){
	var xmldoc;
	if(window.ActiveXObject){
		 xmldoc=new ActiveXObject(Microsoft.XMLDOM);
	}else if(document.implementation  &&  document.implementation.createDocument){
		 xmldoc=document.implementation.createDocument("", "doc", null);
	}
	xmldoc.async=false;
	xmldoc.preserveWhiteSpace=true;
	return xmldoc;
	
}

/**
 *  播放
 */
function play(){
	
	var api=$("#api option:selected").val();
	if(api==null ||  undefined){
		api="http://api.baiyug.cn/vip/index.php?url=";
		
	}
	var url=$("#url").val();
	url=api+url;
	
	// window.location=url;
	window.open(url);
} 
