const ln=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];class C{
constructor(t,e,n){
this.normal=e,this.property=t,n&&(this.space=n)
}
}C.prototype.normal={};C.prototype.property={};C.prototype.space=void 0;function _(l,t){
const e={},n={};for(const a of l)Object.assign(e,a.property),Object.assign(n,a.normal);return new C(e,n,t)
}function P(l){
return l.toLowerCase()
}class d{
constructor(t,e){
this.attribute=e,this.property=t
}
}d.prototype.attribute="";d.prototype.booleanish=!1;d.prototype.boolean=!1;d.prototype.commaOrSpaceSeparated=!1;d.prototype.commaSeparated=!1;d.prototype.defined=!1;d.prototype.mustUseProperty=!1;d.prototype.number=!1;d.prototype.overloadedBoolean=!1;d.prototype.property="";d.prototype.spaceSeparated=!1;d.prototype.space=void 0;let tn=0;const i=f(),g=f(),j=f(),o=f(),s=f(),y=f(),m=f();function f(){
return 2**++tn
}const E=Object.freeze(Object.defineProperty({__proto__:null,boolean:i,booleanish:g,commaOrSpaceSeparated:m,commaSeparated:y,number:o,overloadedBoolean:j,spaceSeparated:s},Symbol.toStringTag,{value:"Module"})),w=Object.keys(E);class D extends d{
constructor(t,e,n,a){
let r=-1;if(super(t,e),T(this,"space",a),typeof n=="number")for(;++r<w.length;){
const u=w[r];T(this,w[r],(n&E[u])===E[u])
}
}
}D.prototype.defined=!0;function T(l,t,e){
e&&(l[t]=e)
}function v(l){
const t={},e={};for(const[n,a]of Object.entries(l.properties)){
const r=new D(n,l.transform(l.attributes||{},n),a,l.space);l.mustUseProperty&&l.mustUseProperty.includes(n)&&(r.mustUseProperty=!0),t[n]=r,e[P(n)]=n,e[P(r.attribute)]=n
}return new C(t,e,l.space)
}const V=v({properties:{ariaActiveDescendant:null,ariaAtomic:g,ariaAutoComplete:null,ariaBusy:g,ariaChecked:g,ariaColCount:o,ariaColIndex:o,ariaColSpan:o,ariaControls:s,ariaCurrent:null,ariaDescribedBy:s,ariaDetails:null,ariaDisabled:g,ariaDropEffect:s,ariaErrorMessage:null,ariaExpanded:g,ariaFlowTo:s,ariaGrabbed:g,ariaHasPopup:null,ariaHidden:g,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:s,ariaLevel:o,ariaLive:null,ariaModal:g,ariaMultiLine:g,ariaMultiSelectable:g,ariaOrientation:null,ariaOwns:s,ariaPlaceholder:null,ariaPosInSet:o,ariaPressed:g,ariaReadOnly:g,ariaRelevant:null,ariaRequired:g,ariaRoleDescription:s,ariaRowCount:o,ariaRowIndex:o,ariaRowSpan:o,ariaSelected:g,ariaSetSize:o,ariaSort:null,ariaValueMax:o,ariaValueMin:o,ariaValueNow:o,ariaValueText:null,role:null},transform(l,t){
return t==="role"?t:"aria-"+t.slice(4).toLowerCase()
}});function $(l,t){
return t in l?l[t]:t
}function W(l,t){
return $(l,t.toLowerCase())
}const on=v({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:y,acceptCharset:s,accessKey:s,action:null,allow:null,allowFullScreen:i,allowPaymentRequest:i,allowUserMedia:i,alt:null,as:null,async:i,autoCapitalize:null,autoComplete:s,autoFocus:i,autoPlay:i,blocking:s,capture:null,charSet:null,checked:i,cite:null,className:s,cols:o,colSpan:null,content:null,contentEditable:g,controls:i,controlsList:s,coords:o|y,crossOrigin:null,data:null,dateTime:null,decoding:null,default:i,defer:i,dir:null,dirName:null,disabled:i,download:j,draggable:g,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:i,formTarget:null,headers:s,height:o,hidden:i,high:o,href:null,hrefLang:null,htmlFor:s,httpEquiv:s,id:null,imageSizes:null,imageSrcSet:null,inert:i,inputMode:null,integrity:null,is:null,isMap:i,itemId:null,itemProp:s,itemRef:s,itemScope:i,itemType:s,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:i,low:o,manifest:null,max:null,maxLength:o,media:null,method:null,min:null,minLength:o,multiple:i,muted:i,name:null,nonce:null,noModule:i,noValidate:i,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:i,optimum:o,pattern:null,ping:s,placeholder:null,playsInline:i,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:i,referrerPolicy:null,rel:s,required:i,reversed:i,rows:o,rowSpan:o,sandbox:s,scope:null,scoped:i,seamless:i,selected:i,shadowRootClonable:i,shadowRootDelegatesFocus:i,shadowRootMode:null,shape:null,size:o,sizes:null,slot:null,span:o,spellCheck:g,src:null,srcDoc:null,srcLang:null,srcSet:null,start:o,step:null,style:null,tabIndex:o,target:null,title:null,translate:null,type:null,typeMustMatch:i,useMap:null,value:g,width:o,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:s,axis:null,background:null,bgColor:null,border:o,borderColor:null,bottomMargin:o,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:i,declare:i,event:null,face:null,frame:null,frameBorder:null,hSpace:o,leftMargin:o,link:null,longDesc:null,lowSrc:null,marginHeight:o,marginWidth:o,noResize:i,noHref:i,noShade:i,noWrap:i,object:null,profile:null,prompt:null,rev:null,rightMargin:o,rules:null,scheme:null,scrolling:g,standby:null,summary:null,text:null,topMargin:o,valueType:null,version:null,vAlign:null,vLink:null,vSpace:o,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:i,disableRemotePlayback:i,prefix:null,property:null,results:o,security:null,unselectable:null},space:"html",transform:W}),an=v({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:m,accentHeight:o,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:o,amplitude:o,arabicForm:null,ascent:o,attributeName:null,attributeType:null,azimuth:o,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:o,by:null,calcMode:null,capHeight:o,className:s,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:o,diffuseConstant:o,direction:null,display:null,dur:null,divisor:o,dominantBaseline:null,download:i,dx:null,dy:null,edgeMode:null,editable:null,elevation:o,enableBackground:null,end:null,event:null,exponent:o,externalResourcesRequired:null,fill:null,fillOpacity:o,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:y,g2:y,glyphName:y,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:o,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:o,horizOriginX:o,horizOriginY:o,id:null,ideographic:o,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:o,k:o,k1:o,k2:o,k3:o,k4:o,kernelMatrix:m,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:o,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:o,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:o,overlineThickness:o,paintOrder:null,panose1:null,path:null,pathLength:o,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:s,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:o,pointsAtY:o,pointsAtZ:o,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:m,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:m,rev:m,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:m,requiredFeatures:m,requiredFonts:m,requiredFormats:m,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:o,specularExponent:o,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:o,strikethroughThickness:o,string:null,stroke:null,strokeDashArray:m,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:o,strokeOpacity:o,strokeWidth:null,style:null,surfaceScale:o,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:m,tabIndex:o,tableValues:null,target:null,targetX:o,targetY:o,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:m,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:o,underlineThickness:o,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:o,values:null,vAlphabetic:o,vMathematical:o,vectorEffect:null,vHanging:o,vIdeographic:o,version:null,vertAdvY:o,vertOriginX:o,vertOriginY:o,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:o,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:$}),Y=v({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(l,t){
return"xlink:"+t.slice(5).toLowerCase()
}}),K=v({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:W}),X=v({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(l,t){
return"xml:"+t.slice(3).toLowerCase()
}}),rn=/[A-Z]/g,U=/-[a-z]/g,un=/^data[-\w.:]+$/i;function sn(l,t){
const e=P(t);let n=t,a=d;if(e in l.normal)return l.property[l.normal[e]];if(e.length>4&&e.slice(0,4)==="data"&&un.test(t)){
if(t.charAt(4)==="-"){
const r=t.slice(5).replace(U,gn);n="data"+r.charAt(0).toUpperCase()+r.slice(1)
}else{
const r=t.slice(4);if(!U.test(r)){
let u=r.replace(rn,cn);u.charAt(0)!=="-"&&(u="-"+u),t="data"+u
}
}a=D
}return new a(n,t)
}function cn(l){
return"-"+l.toLowerCase()
}function gn(l){
return l.charAt(1).toUpperCase()
}const pn=_([V,on,Y,K,X],"html"),Z=_([V,an,Y,K,X],"svg"),z={}.hasOwnProperty;function dn(l,t){
const e=t||{};function n(a,...r){
let u=n.invalid;const c=n.handlers;if(a&&z.call(a,l)){
const h=String(a[l]);u=z.call(c,h)?c[h]:n.unknown
}if(u)return u.call(this,a,...r)
}return n.handlers=e.handlers||{},n.invalid=e.invalid,n.unknown=e.unknown,n
}const mn=/["&'<>`]/g,hn=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,fn=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,yn=/[|\\{}()[\]^$+*?.]/g,q=new WeakMap;function bn(l,t){
if(l=l.replace(t.subset?vn(t.subset):mn,n),t.subset||t.escapeOnly)return l;return l.replace(hn,e).replace(fn,n);function e(a,r,u){
return t.format((a.charCodeAt(0)-55296)*1024+a.charCodeAt(1)-56320+65536,u.charCodeAt(r+2),t)
}function n(a,r,u){
return t.format(a.charCodeAt(0),u.charCodeAt(r+1),t)
}
}function vn(l){
let t=q.get(l);return t||(t=xn(l),q.set(l,t)),t
}function xn(l){
const t=[];let e=-1;for(;++e<l.length;)t.push(l[e].replace(yn,"\\$&"));return new RegExp("(?:"+t.join("|")+")","g")
}const Cn=/[\dA-Fa-f]/;function Sn(l,t,e){
const n="&#x"+l.toString(16).toUpperCase();return e&&t&&!Cn.test(String.fromCharCode(t))?n:n+";"
}const kn=/\d/;function wn(l,t,e){
const n="&#"+String(l);return e&&t&&!kn.test(String.fromCharCode(t))?n:n+";"
}const On=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],O={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"},Nn=["cent","copy","divide","gt","lt","not","para","times"],G={}.hasOwnProperty,A={};let S;for(S in O)G.call(O,S)&&(A[O[S]]=S);const Pn=/[^\dA-Za-z]/;function En(l,t,e,n){
const a=String.fromCharCode(l);if(G.call(A,a)){
const r=A[a],u="&"+r;return e&&On.includes(r)&&!Nn.includes(r)&&(!n||t&&t!==61&&Pn.test(String.fromCharCode(t)))?u:u+";"
}return""
}function An(l,t,e){
let n=Sn(l,t,e.omitOptionalSemicolons),a;if((e.useNamedReferences||e.useShortestReferences)&&(a=En(l,t,e.omitOptionalSemicolons,e.attribute)),(e.useShortestReferences||!a)&&e.useShortestReferences){
const r=wn(l,t,e.omitOptionalSemicolons);r.length<n.length&&(n=r)
}return a&&(!e.useShortestReferences||a.length<n.length)?a:n
}function b(l,t){
return bn(l,Object.assign({format:An},t))
}const Dn=/^>|^->|<!--|-->|--!>|<!-$/g,Rn=[">"],Ln=["<",">"];function Mn(l,t,e,n){
return n.settings.bogusComments?"<?"+b(l.value,Object.assign({},n.settings.characterReferences,{subset:Rn}))+">":"<!--"+l.value.replace(Dn,a)+"-->";function a(r){
return b(r,Object.assign({},n.settings.characterReferences,{subset:Ln}))
}
}function Tn(l,t,e,n){
return"<!"+(n.settings.upperDoctype?"DOCTYPE":"doctype")+(n.settings.tightDoctype?"":" ")+"html>"
}function B(l,t){
const e=String(l);if(typeof t!="string")throw new TypeError("Expected character");let n=0,a=e.indexOf(t);for(;a!==-1;)n++,a=e.indexOf(t,a+t.length);return n
}function be(l){
const t=[],e=String(l||"");let n=e.indexOf(","),a=0,r=!1;for(;!r;){
n===-1&&(n=e.length,r=!0);const u=e.slice(a,n).trim();(u||!r)&&t.push(u),a=n+1,n=e.indexOf(",",a)
}return t
}function Un(l,t){
const e=t||{};return(l[l.length-1]===""?[...l,""]:l).join((e.padRight?" ":"")+","+(e.padLeft===!1?"":" ")).trim()
}function ve(l){
const t=String(l||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]
}function zn(l){
return l.join(" ").trim()
}const qn=/[ \t\n\f\r]/g;function R(l){
return typeof l=="object"?l.type==="text"?I(l.value):!1:I(l)
}function I(l){
return l.replace(qn,"")===""
}const p=Q(1),J=Q(-1),Bn=[];function Q(l){
return t;function t(e,n,a){
const r=e?e.children:Bn;let u=(n||0)+l,c=r[u];if(!a)for(;c&&R(c);)u+=l,c=r[u];return c
}
}const In={}.hasOwnProperty;function nn(l){
return t;function t(e,n,a){
return In.call(l,e.tagName)&&l[e.tagName](e,n,a)
}
}const L=nn({body:Hn,caption:N,colgroup:N,dd:$n,dt:Vn,head:N,html:Fn,li:jn,optgroup:Wn,option:Yn,p:_n,rp:F,rt:F,tbody:Xn,td:H,tfoot:Zn,th:H,thead:Kn,tr:Gn});function N(l,t,e){
const n=p(e,t,!0);return!n||n.type!=="comment"&&!(n.type==="text"&&R(n.value.charAt(0)))
}function Fn(l,t,e){
const n=p(e,t);return!n||n.type!=="comment"
}function Hn(l,t,e){
const n=p(e,t);return!n||n.type!=="comment"
}function _n(l,t,e){
const n=p(e,t);return n?n.type==="element"&&(n.tagName==="address"||n.tagName==="article"||n.tagName==="aside"||n.tagName==="blockquote"||n.tagName==="details"||n.tagName==="div"||n.tagName==="dl"||n.tagName==="fieldset"||n.tagName==="figcaption"||n.tagName==="figure"||n.tagName==="footer"||n.tagName==="form"||n.tagName==="h1"||n.tagName==="h2"||n.tagName==="h3"||n.tagName==="h4"||n.tagName==="h5"||n.tagName==="h6"||n.tagName==="header"||n.tagName==="hgroup"||n.tagName==="hr"||n.tagName==="main"||n.tagName==="menu"||n.tagName==="nav"||n.tagName==="ol"||n.tagName==="p"||n.tagName==="pre"||n.tagName==="section"||n.tagName==="table"||n.tagName==="ul"):!e||!(e.type==="element"&&(e.tagName==="a"||e.tagName==="audio"||e.tagName==="del"||e.tagName==="ins"||e.tagName==="map"||e.tagName==="noscript"||e.tagName==="video"))
}function jn(l,t,e){
const n=p(e,t);return!n||n.type==="element"&&n.tagName==="li"
}function Vn(l,t,e){
const n=p(e,t);return!!(n&&n.type==="element"&&(n.tagName==="dt"||n.tagName==="dd"))
}function $n(l,t,e){
const n=p(e,t);return!n||n.type==="element"&&(n.tagName==="dt"||n.tagName==="dd")
}function F(l,t,e){
const n=p(e,t);return!n||n.type==="element"&&(n.tagName==="rp"||n.tagName==="rt")
}function Wn(l,t,e){
const n=p(e,t);return!n||n.type==="element"&&n.tagName==="optgroup"
}function Yn(l,t,e){
const n=p(e,t);return!n||n.type==="element"&&(n.tagName==="option"||n.tagName==="optgroup")
}function Kn(l,t,e){
const n=p(e,t);return!!(n&&n.type==="element"&&(n.tagName==="tbody"||n.tagName==="tfoot"))
}function Xn(l,t,e){
const n=p(e,t);return!n||n.type==="element"&&(n.tagName==="tbody"||n.tagName==="tfoot")
}function Zn(l,t,e){
return!p(e,t)
}function Gn(l,t,e){
const n=p(e,t);return!n||n.type==="element"&&n.tagName==="tr"
}function H(l,t,e){
const n=p(e,t);return!n||n.type==="element"&&(n.tagName==="td"||n.tagName==="th")
}const Jn=nn({body:ee,colgroup:le,head:ne,html:Qn,tbody:te});function Qn(l){
const t=p(l,-1);return!t||t.type!=="comment"
}function ne(l){
const t=new Set;for(const n of l.children)if(n.type==="element"&&(n.tagName==="base"||n.tagName==="title")){
if(t.has(n.tagName))return!1;t.add(n.tagName)
}const e=l.children[0];return!e||e.type==="element"
}function ee(l){
const t=p(l,-1,!0);return!t||t.type!=="comment"&&!(t.type==="text"&&R(t.value.charAt(0)))&&!(t.type==="element"&&(t.tagName==="meta"||t.tagName==="link"||t.tagName==="script"||t.tagName==="style"||t.tagName==="template"))
}function le(l,t,e){
const n=J(e,t),a=p(l,-1,!0);return e&&n&&n.type==="element"&&n.tagName==="colgroup"&&L(n,e.children.indexOf(n),e)?!1:!!(a&&a.type==="element"&&a.tagName==="col")
}function te(l,t,e){
const n=J(e,t),a=p(l,-1);return e&&n&&n.type==="element"&&(n.tagName==="thead"||n.tagName==="tbody")&&L(n,e.children.indexOf(n),e)?!1:!!(a&&a.type==="element"&&a.tagName==="tr")
}const k={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function oe(l,t,e,n){
const a=n.schema,r=a.space==="svg"?!1:n.settings.omitOptionalTags;let u=a.space==="svg"?n.settings.closeEmptyElements:n.settings.voids.includes(l.tagName.toLowerCase());const c=[];let h;a.space==="html"&&l.tagName==="svg"&&(n.schema=Z);const x=ae(n,l.properties),M=n.all(a.space==="html"&&l.tagName==="template"?l.content:l);return n.schema=a,M&&(u=!1),(x||!r||!Jn(l,t,e))&&(c.push("<",l.tagName,x?" "+x:""),u&&(a.space==="svg"||n.settings.closeSelfClosing)&&(h=x.charAt(x.length-1),(!n.settings.tightSelfClosing||h==="/"||h&&h!=='"'&&h!=="'")&&c.push(" "),c.push("/")),c.push(">")),c.push(M),!u&&(!r||!L(l,t,e))&&c.push("</"+l.tagName+">"),c.join("")
}function ae(l,t){
const e=[];let n=-1,a;if(t){
for(a in t)if(t[a]!==null&&t[a]!==void 0){
const r=re(l,a,t[a]);r&&e.push(r)
}
}for(;++n<e.length;){
const r=l.settings.tightAttributes?e[n].charAt(e[n].length-1):void 0;n!==e.length-1&&r!=='"'&&r!=="'"&&(e[n]+=" ")
}return e.join("")
}function re(l,t,e){
const n=sn(l.schema,t),a=l.settings.allowParseErrors&&l.schema.space==="html"?0:1,r=l.settings.allowDangerousCharacters?0:1;let u=l.quote,c;if(n.overloadedBoolean&&(e===n.attribute||e==="")?e=!0:(n.boolean||n.overloadedBoolean)&&(typeof e!="string"||e===n.attribute||e==="")&&(e=!!e),e==null||e===!1||typeof e=="number"&&Number.isNaN(e))return"";const h=b(n.attribute,Object.assign({},l.settings.characterReferences,{subset:k.name[a][r]}));return e===!0||(e=Array.isArray(e)?(n.commaSeparated?Un:zn)(e,{padLeft:!l.settings.tightCommaSeparatedLists}):String(e),l.settings.collapseEmptyAttributes&&!e)?h:(l.settings.preferUnquoted&&(c=b(e,Object.assign({},l.settings.characterReferences,{attribute:!0,subset:k.unquoted[a][r]}))),c!==e&&(l.settings.quoteSmart&&B(e,u)>B(e,l.alternative)&&(u=l.alternative),c=u+b(e,Object.assign({},l.settings.characterReferences,{subset:(u==="'"?k.single:k.double)[a][r],attribute:!0}))+u),h+(c&&"="+c))
}const ie=["<","&"];function en(l,t,e,n){
return e&&e.type==="element"&&(e.tagName==="script"||e.tagName==="style")?l.value:b(l.value,Object.assign({},n.settings.characterReferences,{subset:ie}))
}function ue(l,t,e,n){
return n.settings.allowDangerousHtml?l.value:en(l,t,e,n)
}function se(l,t,e,n){
return n.all(l)
}const ce=dn("type",{invalid:ge,unknown:pe,handlers:{comment:Mn,doctype:Tn,element:oe,raw:ue,root:se,text:en}});function ge(l){
throw new Error("Expected node, not `"+l+"`")
}function pe(l){
const t=l;throw new Error("Cannot compile unknown node `"+t.type+"`")
}const de={},me={},he=[];function xe(l,t){
const e=t||de,n=e.quote||'"',a=n==='"'?"'":'"';if(n!=='"'&&n!=="'")throw new Error("Invalid quote `"+n+"`, expected `'` or `\"`");return{one:fe,all:ye,settings:{omitOptionalTags:e.omitOptionalTags||!1,allowParseErrors:e.allowParseErrors||!1,allowDangerousCharacters:e.allowDangerousCharacters||!1,quoteSmart:e.quoteSmart||!1,preferUnquoted:e.preferUnquoted||!1,tightAttributes:e.tightAttributes||!1,upperDoctype:e.upperDoctype||!1,tightDoctype:e.tightDoctype||!1,bogusComments:e.bogusComments||!1,tightCommaSeparatedLists:e.tightCommaSeparatedLists||!1,tightSelfClosing:e.tightSelfClosing||!1,collapseEmptyAttributes:e.collapseEmptyAttributes||!1,allowDangerousHtml:e.allowDangerousHtml||!1,voids:e.voids||ln,characterReferences:e.characterReferences||me,closeSelfClosing:e.closeSelfClosing||!1,closeEmptyElements:e.closeEmptyElements||!1},schema:e.space==="svg"?Z:pn,quote:n,alternative:a}.one(Array.isArray(l)?{type:"root",children:l}:l,void 0,void 0)
}function fe(l,t,e){
return ce(l,t,e,this)
}function ye(l){
const t=[],e=l&&l.children||he;let n=-1;for(;++n<e.length;)t[n]=this.one(e[n],n,l);return t.join("")
}export{Un as a,zn as b,B as c,be as d,ln as e,sn as f,pn as h,P as n,ve as p,Z as s,xe as t,R as w,dn as z};
