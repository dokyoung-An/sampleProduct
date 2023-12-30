// Garden Gnome Software - Skin
// Pano2VR 7.0.8/20017
// Filename: ??????.ggsk
// Generated 2023-12-30T15:39:01

function pano2vrSkin(player,base) {
	player.addVariable('vis_button_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_onoff', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_tag', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick_5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_slidebutton', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_slidebutton_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_select', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_select_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_waterselect', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_waterselect_0', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._header=document.createElement('div');
		el.ggId="header";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 56px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._header.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._header.ggCurrentLogicStateSize != newLogicStateSize) {
				me._header.ggCurrentLogicStateSize = newLogicStateSize;
				me._header.style.transition='width 0s, height 0s';
				if (me._header.ggCurrentLogicStateSize == 0) {
					me._header.style.width='80%';
					me._header.style.height='45px';
					me._header.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me._header);
				}
				else {
					me._header.style.width='60%';
					me._header.style.height='56px';
					me._header.style.left = 'calc(50% - (60% / 2))';
					skin.updateSize(me._header);
				}
			}
		}
		me._header.logicBlock_size();
		me._header.ggUpdatePosition=function (useTransition) {
		}
		el=me._header_=document.createElement('div');
		el.ggId="header_\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 40px 40px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._header_.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxgAAACFCAYAAADYbV5kAAAACXBIWXMAAC4jAAAuIwF4pT92AAAXbUlEQVR4nO3deZgdVZnH8W93EggQQlgiqxKWAGJkNYACChEUQTYRcAXxEUTQQUQFHTccFRhQUQdxQQQGWRUEURAFUREIjhBB1giiiYhsE5YQNJCeP96OE2O607fqVJ2qe7+f5+lHo12nfreSW1Vv1Vn6BgYG6CIvAH4IvKyCtp8BDgSuqKBtSZIkqSv05w6Q0GTgRqopLgCWBy4DjqiofUmSJKn1uqXAeDlwA7B+xfvpB04DTqF7jp0kSZKUTF8XdJHaGzgfWK7m/X4PeDswr+b9SpIkSY3V9qfw7wEuof7iAmA/4BpgYoZ9S5IkSY3U1gKjDzgB+Cp5P8PLiXEfG2XMIEmSJDVGG7tILQN8C3hb7iCLeJzoqn'+
			'V97iCSJElSTm17g7ESMQ1tk4oLgFWAnxLT2EqSJEk9q00FxtrAL4BdcgcZwrLABcCxuYNIkiRJubSli9SmwFXAC3MHGaFvEOtlPJ87iCRJklSnNhQYrwQuJ7pHtclVwAHAU7mDSJIkSXVpehepA4Cf0L7iAmA3okvXWrmDSJIkSXVpcoHxAeBCYtaottoCmA5sljmHJEmSVIsmFhj9wKnA5zPnSGUdYvra1+YOIkmSJFWtaQXGWOAi4KjcQRJbkZhe97DcQSRJkqQqNanAWIUYb7Ff7iAVGQV8HTiJWIlckiRJ6jpNmUVqXWLWpU1yB6nJxcDBwLzcQSRJkqSUmvAGY0vgJkZeXJwNbEN0p+pryM9oYGPgP4BnR/AZ9idW/p44ws8sSZIktULuNxivAb5LjFEYiYOBc6qLk8SWwHXA+BH87v3A7sA9VQaSJEmS6pLz'+
			'DcY7gCsYeXHxVZpfXADcChw5wt9dH7gR2LG6OJIkSVJ9cr3B+BjRnagTGwL3VZClCv3AbGDNEf7+fOAQ4DuVJZIkSZJqUPcbjIUzKXVaXDxGe4oLgAXAbzr4/THAucDxOMOUJEmSWqzOAmN54DKKrQXxdOIsdXiswDafAM4jBrBLkiRJrVNXgTGRGPi8R037a7M3AT8DVs8dRJIkSepUHQXGZGIg89Qa9tUttgOmA1NyB5EkSZI6UXWBsS1wA7BBxfvpRusSx+51uYNIkiRJI1VlgTGN6OqzWoX76HYrElP5HpI7iCRJkjQSVRUYawKXAMtV1H4v6QfOAF6RO4gkSZK0NFUVGJ8AVqqo7V7UD5yYO4QkSZK0NFUUGH3AgRW02+t2BNbOHUKSJEkaThUFxguAlStoV/CS3AEkSZKk4VRRYDjuojrL5w4gSZIkDafOlb'+
			'wlSZIkdTkLDEmSJEnJWGBIkiRJSmZ07gBqpbHAcQW3PRF4NmGWOrwDmFRgu+8DMxLm6MQYYDKwMbAWMI4846P+BjwNPATcC9xD8//+RwGbA1OANei9sU9fI/6+OrEJ8KYC+3pocH+5rEFkXx8YD0zIlGMO8CRwP3A3nR//lA4njouGNoM4v3fq/RT7N3YW8ECB7VIYS1xHNiL+XYwDls2QYx5xLfkzcS2ZCczPkCOlccRx3QhYffDPYzLkmEsc29nENfo+4PmyjVpgqIixwCcLbnsqzb/BXNw7gFcV2O4B6i0w1iZu8l5HLMzYxAkX5gM3Az8GLiAuEk2xOfBeYH96ex2f71OswChyTvgt9RYYY4DdgH2BacC6Ne67E38EriH+Lq6i3hupw4nvgoZ2NsULjCL/5q6j3gJjMvBm4DXANuS56V2aecD1xLXkfODBvHFG'+
			'bHPgAGAX4GU0syfRk8AvgSuBC4FHizTSxA8mqTM7AT8EZgGnAK+mmcUFxIVqe+DTxFOoXwJ7E+vn5LIGcYGaAbyL3i4uutVqwGeIm5DLgUNobnEBke2dRNYHieyrZU2kbtcH7EOck+8FjifO1U0sLiCucbsS17xZxDWwyIPAOowG3gLcSlxnPkoUbk29Bx8P7AH8F/AX4LvAVp020tQPJ2npXgJcC/wM2J28N+lF7UA8CfwNcTGr207AbRTr3qPmWxb4BPH0999p5036akT2B4CPk6d7irrbDsAtwKWD/71t+olr4HXAT4FNs6b5Z7sDdwHfAbbIG6WQ0cB+xDX6MjroLm6BIbXPKOINwAxg57xRktmSeN39Nep7+7IXcDUwsab9qV7bALcTT2JXyJwlhRWI7/3txGeTyloO+Drx1mKLvFGSeTXR9fJTxLUyl5WBi4'+
			'g3KxtmzJHSXsCdwFGM4IGmBYbULhOJtxYfpzvHUL2bGKOxQcX72Y44+Tf19b/KeS9RsE7OHaQCk4nP9t7cQdRqGxDn2sNyB6nAaGJM2LXkeYC0FfFGaP8M+67acsRY2kuIQelDssCQ2mN94AbglbmDVGwKcCOwdUXtr0gMXLOrSffpI/pkf4XuLh7HEJ/xZNrZNVJ5vQy4iTjXdrNXAr8C1qtxn7sQXbUm1bjPHPYhPueQBZwFhtQO6wC/oHtetS7Nwjc1Vcxm80ngRRW0q/y+CByTO0SNPkh8ZmmktiBmKGvjeKQiJhPXznVq2NfOwI+Ih1i9YGviOr3ykv5PCwyp+VYmxgqsnTtIzcYTU3ROStjmRODIhO2pOY4l+gb3mqOAD+cOoVaYRJxTx2fOUbd1iOlsq5whcHNiwpJufnO6JFOAK1hCjwALDKnZ+oAzgRfn'+
			'DpLJGsRYiWUStfc2Yh0XdZdXA5/LHSKjE4hjIA1lGeJcunruIJlsCnyrorZXJKZy7bXCbaFXAJ9f/H+0wJCa7TCir2Mvm0rMBJTCPonaUXNMAM6lt69n/cQxcA0XDeXTxLm0l+0HHFpBu6fRO92Xh3Ik8PpF/4dePiFLTfcC4MTcIRrig5Sf23w0MXuUustniTddvW4NevstjoY2hd4amzSck4hrayo7AW9P2F6bnQYsv/APFhhSc32aeDqrKA7+5RVshyaRrquVmmFT4D25QzTI4TRrkTE1wyl057TmRaxMTPSRQh9OsrCoFwFHL/yDBYbUTGsCh+QO0TC7EQvyFTUhUQ41x3E4Teui+onB7tJCU4HX5g7RMO8krrFl7Un3LFCYytEMro9hRSs10xGkfdp+H3Ar8CAwkLDd4byAmFkj5RPVD1D8dfSwiwKNwPPEbF'+
			'4zqe8Y5vBI7gAjtDrwloTtzQWmE3+/zyZsdzjLApsQgyRTfd/fSswq9deC23+HmN++ThuwWP/tpXiKmPwil5sz7rtTqWdWu5NYKfvhxO0OpQ9Yi3i4lGoB1rHE276ybzLeXz7KPwwAtw3+PJ6w3eGMImbYmkq6WSpXJa7Rp1tgSM3TR5o+nc8TF+EvA79L0F5R6xHdWN5H+Rmc3jDY1tNlQ3Xor8DuxOqsaoa3EBfIsm4nxi5cCvwtQXtFrADsBXwEeGnJtkYRx6Zo142TS+6/iH3orMB4nLQ3d91qReKcWdY84jrydeAPCdoragpRMB1C+e/+QcCnKP6w6IXE+IuyniS+q98gHgDmsg0xTueABG0dBJxuFympeaYC65Zs417ihHEYeYsLiAvSh4mLQ9knf8sTN/p1ew8WF02zf8ntFwAfBbYCLiBfcQHx9uT8wSwf'+
			'J7KV8cbSidQNdgeWK9nGdOLcfRx5iwuIa9mhxLXt9yXbmkR834raj/LdM68GNiYKnZzFBcS1+UBgGvCXkm1tB6xjgSE1z7SS299KdLlo2g3xfcRKp1eXbKfs8enUM8DlNe9TwxtH3GQUtYC4mJ4APJckURrPAZ8hujmVKTK2pXyXQLVf2bVRriTO2fcnyJLSLcDLgRkl29mlxLZlj+15RAH4UMl2UvsZcf4o+3c+zQJDap7tS2z7MHHSeixRltSeIV7Z31WijTLHp4hHiO5mao7tKNdF4hhiYaymuoByg7VHETcJ6m07lNj2TuIt4bxEWVJ7FNiDcmPGylxLyhzb64GDae51ZRbRZXFuiTZ2sMCQmqfMoOj30bwnIoubS7kZsjYmTd97tVeZle1vAL6UKkiFPg/cVGJ7p6vtbaOBySW2fyflbjDr8CDwbyW2L/odWZ'+
			'3isxLOB95Bs96cLsldRHfNojaxwJCaZTTRN7SI3wEXp4tSqenADwtuO4YYYKfeVWbV3E/QjlnABig3y02qGXfUTpMoPlPoFcQ5ug0upPg4w0kUG0dR5vxzFtFduA1Oo/hsdBtZYEjNMo7i69OcTTtunBY6q8S2ExJlUDutVHC72cC1KYNU7CcUH3A5IWEOtc/4Ett+O1mK6g0A5xTcdhTFziWrFNwftOvY/p2YfKKIlSwwpGaZUGLbNt04QQwmK2pCqhBqpQkFt/sZ7SrCByj+vZ6QMIfap0yB0bZrSZm8RY5T0QkU5tKuNVQArim43VjXwZC6x925A3ToMWKA3sTcQdQzykwukMu1xGJYnco9PbXa6a/AnNwhOnRviW2LPGhftuC+7qe5A7uHUvjYWmBI3eOZ3AEKaGNmtVdTZ8QZzpnkXbVavaWuVexTeip3gBGq'+
			'a4XulOYU3dAuUpIkSZIW9/eiG1pgSJIkSUrGAkOSJElSMo7BkKThrUu7Zh4qa0tgRu4QkqT28g2GJEmSpGQsMCRJkiQlMxo4NXGbA8Dxiduck7i9xe0LvCpxmzNJfxzats6BJEmSesxo4KjEbT5B+1YQfRXpj8PRpC/eJEmSpEazi5QkSZKkZCwwJEmSJCVjgSFJkiQpGQsMSZIkSclYYEiSJElKxgJDdRuVO0ABfbkDSJIktcXo3AHUc1YGHssdokOr5A4gKYmxuQMU8GbgwALbTQdOSJxF3W+Z3AEKWCF3AP0rCwwV8UyJbTcEfp8qSA1GAesV3PbZlEEklbZJ7gAF7A7snTuEesaawHjgydxBOrBRiW0XJEuhf2IXKRXxd2B+wW13SpijDi+j+NORp1IGkfQPTxTc7lVJU1Svj+KZ5yTMofYpc/3ZOVmKepTJ26'+
			'ZCqlV8g6Gi5gATC2z3NuBjwHNJ01TnoBLbzkkVQlnNAjbLHaJGbSiMi94UTAJ2BH6ZLkqldgJeWHDbokWYukOZv/+DgMtSBanBwQW3W4AFRmUsMFTUTIoVGGsD7wK+ljZOJdYF3lli+zZ1BdPQFmCx2DRlvlufph1PaPuA40tsf1+qIGqlPxIP8orc5+0LbAHMSJinKvtS/AHQA9hFqjJ2kVJR95TY9kSKj2uoyyjg2xQfFDoH+GuyNJIWdVeJbXcCDk+Uo0pHEm9biipzjNR+8yleZPYBZ9H8SREmAl8psb3fkQpZYKioX5XYdiXgR8DqibKk1g+cTrmnnGWOj6ThTafck8cvA3smylKFvYAvlNh+AXBzoixqr+tLbLs5cAHNnVVqJeAKoldEUV6nK2SBoaKuKbn9JsBNwNQEWVJaFbgUOLRkO9cmyCJpyZ4Afl1i'+
			'+zHA94D306x1bvqITJcQGYu6GcdgCK4ruf3ewFXAWuWjJLUpURxsU7Idr9MVssBQUQ8At5RsYxJRZHwTeEnJtspaBTiG6Pq1V8m2BogbBEnVKfsdGwN8kXgbsid5FwFdZjDDzYOZyma5tHQidYMfAH8r2cbOwN3Ap4A1ygYqaX3gVGJsSNl7hlmUe0ihpXCQt8o4B9iqZBv9xKDvdxE39zcDD1LPGhKjiD6cLyXepJR5YrioXxAFmKTqnEssJFf2QdlU4HJiAdBfAX+gvkH9KxFrA+0EjEvU5gLi2EhPELNBHVCynRWBTwIfJ27Kbwcepvh09Z1Ylihstiau1amciwO8K2WBoTLOJmY5WSlRexsP/rTdqbkDSD3gQeBiiq1yvSSrUv7tZRNcTBwbCeKNWNkCY6F+YNvBnzabTztmsmw1u0ipjDnEYEn9vzto1/zhUp'+
			't9LneABvps7gBqlJsoPxaj25wJ/Cl3iG5ngaGyTgH+kjtEgxxNjMGQVL3bgG/lDtEgZxDdV6RFfQC7Ay30FOXWl9EIWWCorCeJWU8UU/r9JHcIqcccBzyaO0QDPEocC2lxt1JuvYhu8lF8KFoLCwylcBExHqOXPQAckTuE1IMeBQ7KHaIBDiIGqktLchzw29whMrsCOC13iF5hgaFUjiSekvSiecD+wP/mDiL1qCvp7W4PxxPHQBrKs8R1qleL0PuAg7ELc20sMJTKXOC1xJe4l8wH3gD8T+4gUo87nhiD0GvOINYokJZmJrAH8VCslzwEvAZ4PHeQXmKBoZQeIeZzvyNzjrrMA/YlVjqVlNcAcDhweu4gNTqd+MzSSE0nbrbnZM5Rlz8S9yX3Z87RcywwlNpsYEe6f7DzX4BpwA9zB5H0D88TY6E+SnfPmrOA+IxH'+
			'EJ9Z6sT1wA7A73MHqdivge2JRXxVMwsMVeF/gd2Aj1HPSp91+xGwGTG/uKTmOYF4ADA7d5AKzCI+2wm5g6jV7gC2As7LHaQCA8QU+tsDf86cpWdZYKgqC4gFnzYHrsmcJZU/ESui7oHTYkpN93NgE+A/6Y4HHfOBk4AXE59NKusp4K3E+MmZmbOkcjOwDfAhuuN731oWGKraXcAuwM7EWIU2zuBwL9HPeTJwceYskkZuLnAssD7wJeKGqm2eIrKvR0w1OjdvHHWhq4FNiWLjtsxZiroeeB2wHU660gijcwdQz7hu8OeFxElsN+JEsGy+SMO6g3jzcgFwY+YsksqZTSwI+hFgn8GfacBq2RIN71HgWuD7gz+9NuuP6vcc0V3qPGAL4M3Em43NgL58sYb0PDFg/Woic7e8gekaFhiq2yzgxMGfscTr/k2AtYFxwIQMme'+
			'YCTxOzYM0kiotcXaCeJJ5W9oozgVUKbFekb/1sih1bpzZcuvsodmzr7h89Dzh/8KcP2IA4/0wCViXOQWNqzjSfeEvxOLFg593E8Wzj296iOv3309bvZJ3nuzJmDP4cS1yTpxBv8FcnviPjas4D8ARxnX6I6Blx9+Cfc7iTYue7Ng6q/xsF70n6BgYGUp/EniDPTWIZpwJHJW7z6MF2JUmSpJ7hGAxJkiRJyVhgSJIkSUrGAkOSJElSMv3As7lDdCln/ZAkSVLP6Qd+lztEl7o9dwBJkiSpbv3EdH1KaxZwU+4QkiRJUt36ga8D9+cO0mU+BCzIHUKSJEmqWz+xyNjrgQczZ+kWJwEX5g4hSZIk5bBwFqm7gG2JlRtV3DHAcblDSJIkSbksOk3tbGAH4PJMWdrs78CBwBdyB5EkSZJyWnwdjLnAG4BTMmRpqyeAXYGL'+
			'cgeRJEmSclvSQnvPE4OUDwPm1xundWYB2wO/yB1EkiRJaoLhVvL+JrAbMKfDNlcExhQNlMn4AtvcBrwcuCNxFkmSJKm1hiswAK4lbqL/0GGbWxdOlMfUDn//p8ArgT9XkEWSJElqraUVGAB3EzNMdbJw3DHF4mSxKzClg98/F9iDGHshSZIkaREjKTAAHgGmAd8b4e+/ETi6UKJ6bQyc08HvnwgcRMwaJUmSJGkxIy0wAOYB+wMnj/D3v0AUJNsDYzvMVaV+YD3gI8B0YI0RbLMAOGJwm4HqokmSJEnt1jcwUOh++d3AV+msQGmrecCbgctyB5EkSZKarmiBATHD1EXErFHd6lFgL+DG3EEkSZKkNihTYABsAfwAWCdJmma5nyiiZuYOIkmSJLVF2S5OM4DtBv+zm/yGmJ7X4kKSJEnqQIoxFH8GdgSuTNBWE1xJrH'+
			'HxcO4gkiRJUtukGqT9NLAn8LVE7eVyBvE5nskdRJIkSWqjlLNAPQ+8Bzg2YZt1+iRwKPE5JEmSJBVQdpD3UPYH/htYtorGE3sOOAz4du4gkiRJUttVVWBALLB3GbBqVTtI4Gli1fEf5w4iSZIkdYMqCwyAycCPgA2r3ElBDwF7ALfkDiJJkiR1i6pX4p5JTPd6Q8X76dQ9RC6LC0mSJCmhqgsMiNWwdwG+W8O+RuJXwCuABzLnkCRJkrpOHQUGwDzgAODkmvY3lEuAXYHHM+eQJEmSulJdBQbAAPBh4AhgQY37XejLRJEzL8O+JUmSpJ5Q9SDvoewBXAisUNP+PgScUtO+JEmSpJ6Vq8AA2Aq4Alizwn3MBw4CLqhwH5IkSZIG5SwwAF5ETGP7kgrafhLYC/h5BW1LkiRJWoL/A/T4tUl142FvAAAAAElFTkSuQmCC'+
			'';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((156px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_10.style.transition='transform 0s';
				if (me._image_10.ggCurrentLogicStateScaling == 0) {
					me._image_10.ggParameter.sx = 0.8;
					me._image_10.ggParameter.sy = 0.8;
					me._image_10.style.transform=parameterToTransform(me._image_10.ggParameter);
					skin.updateSize(me._image_10);
				}
				else {
					me._image_10.ggParameter.sx = 1;
					me._image_10.ggParameter.sy = 1;
					me._image_10.style.transform=parameterToTransform(me._image_10.ggParameter);
					skin.updateSize(me._image_10);
				}
			}
		}
		me._image_10.logicBlock_scaling();
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me._header_.appendChild(me._image_10);
		me._header.appendChild(me._header_);
		me.divSkin.appendChild(me._header);
		el=me._footer=document.createElement('div');
		el.ggId="footer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._footer.ggUpdatePosition=function (useTransition) {
		}
		el=me._footer_=document.createElement('div');
		el.ggId="footer_\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._footer_.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \uc0c1\uae30 VR\uc740 \uc5b8\ud53d\uc158\uc758 \uae30\ub2a5\uc124\uba85\uc744 \uc704\ud574 \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uccb4\ud5d8\uc744 \ud1b5\ud574 \uc5b8\ud53d\uc158\uc758 \uae30\uc220\ub825\uc744 \ud655\uc778\ud574 \ubcf4\uc138\uc694. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_1.style.transition='transform 0s';
				if (me._text_1.ggCurrentLogicStateScaling == 0) {
					me._text_1.ggParameter.sx = 0.8;
					me._text_1.ggParameter.sy = 0.8;
					me._text_1.style.transform=parameterToTransform(me._text_1.ggParameter);
					skin.updateSize(me._text_1);
				}
				else {
					me._text_1.ggParameter.sx = 1;
					me._text_1.ggParameter.sy = 1;
					me._text_1.style.transform=parameterToTransform(me._text_1.ggParameter);
					skin.updateSize(me._text_1);
				}
			}
		}
		me._text_1.logicBlock_scaling();
		me._text_1.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_1.ggCurrentLogicStateText != newLogicStateText) {
				me._text_1.ggCurrentLogicStateText = newLogicStateText;
				me._text_1.style.transition='transform 0s';
				if (me._text_1.ggCurrentLogicStateText == 0) {
					if (me._text_1.ggUpdateText) {
					me._text_1.ggUpdateText=function() {
						var params = [];
						var hs = player._("* \uc0c1\uae30 VR\uc740 \uc5b8\ud53d\uc158\uc758 \uae30\ub2a5\uc124\uba85\uc744 \uc704\ud574 \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_1.ggUpdateText();
					} else {
						if (me._text_1.ggUpdatePosition) me._text_1.ggUpdatePosition();
					}
				}
				else {
					if (me._text_1.ggUpdateText) {
					me._text_1.ggUpdateText=function() {
						var params = [];
						var hs = player._("* \uc0c1\uae30 VR\uc740 \uc5b8\ud53d\uc158\uc758 \uae30\ub2a5\uc124\uba85\uc744 \uc704\ud574 \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uccb4\ud5d8\uc744 \ud1b5\ud574 \uc5b8\ud53d\uc158\uc758 \uae30\uc220\ub825\uc744 \ud655\uc778\ud574 \ubcf4\uc138\uc694. ", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_1.ggUpdateText();
					} else {
						if (me._text_1.ggUpdatePosition) me._text_1.ggUpdatePosition();
					}
				}
			}
		}
		me._text_1.logicBlock_text();
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._footer_.appendChild(me._text_1);
		me._footer.appendChild(me._footer_);
		me.divSkin.appendChild(me._footer);
		el=me._infopopup1=document.createElement('div');
		el.ggId="\uc138\ud0c1\uae30-info-popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopup1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infopopup1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infopopup1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infopopup1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infopopup1.style.transition='';
				if (me._infopopup1.ggCurrentLogicStateVisible == 0) {
					me._infopopup1.style.visibility="hidden";
					me._infopopup1.ggVisible=false;
				}
				else {
					me._infopopup1.style.visibility="hidden";
					me._infopopup1.ggVisible=false;
				}
			}
		}
		me._infopopup1.logicBlock_visible();
		me._infopopup1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__89=document.createElement('div');
		el.ggId="\uc138\ud0c1\uae30\ud31d\uc5c5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 537px;';
		hs+='left : calc(50% - ((1000px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((537px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1000px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__89.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__89.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_111=document.createElement('div');
		el.ggId="Rectangle 11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_111.ggUpdatePosition=function (useTransition) {
		}
		el=me.__94=document.createElement('div');
		el.ggId="\ub85c\uace0 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 4%;';
		hs+='position : absolute;';
		hs+='top : 5.5%;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__94.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__94.ggUpdatePosition=function (useTransition) {
		}
		el=me.__95=document.createElement('div');
		els=me.__95__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud68c\uc0ac\uba85";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__95.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__95.ggUpdateText();
		el.appendChild(els);
		me.__95.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__95.ggUpdatePosition=function (useTransition) {
		}
		me.__94.appendChild(me.__95);
		me._rectangle_111.appendChild(me.__94);
		el=me.__90=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 320px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__90.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__90.ggUpdatePosition=function (useTransition) {
		}
		el=me._contextbox1=document.createElement('div');
		el.ggId="context-box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 350px;';
		hs+='left : 550px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._contextbox1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contextbox1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__93=document.createElement('div');
		els=me.__93__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub0c9\uc7a5\uace0\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 75px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 113.429%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 800;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__93.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub4dc\ub7fc \uc138\ud0c1\uae30\n9kg", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__93.ggUpdateText();
		el.appendChild(els);
		me.__93.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__93.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_211=document.createElement('div');
		el.ggId="Rectangle 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -21px;';
		hs+='cursor : default;';
		hs+='height : 2.5%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_211.ggUpdatePosition=function (useTransition) {
		}
		me.__93.appendChild(me._rectangle_211);
		el=me._text_31=document.createElement('div');
		els=me._text_31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #0000ff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 29px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_31.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ube4c\ud2b8\uc778", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_31.ggUpdateText();
		el.appendChild(els);
		me._text_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_31.ggUpdatePosition=function (useTransition) {
		}
		me.__93.appendChild(me._text_31);
		me._contextbox1.appendChild(me.__93);
		el=me._container_211=document.createElement('div');
		el.ggId="Container 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_211.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_11111=document.createElement('div');
		el.ggId="Container 1111";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_11111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_11111.ggUpdatePosition=function (useTransition) {
		}
		el=me.__92=document.createElement('div');
		els=me.__92__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub0c9\uc7a5\uace0 \uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__92.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \uc8fc\uc694\uae30\ub2a5\n\uc138\ud0c1\ucf54\uc2a4 \n: \ud45c\uc900, \uc18c\ub7c9\/\ucf8c\uc18d, \ucc0c\ub4e0\ub54c, \uccad\ubc14\uc9c0, \uc544\uc6c3\ub3c4\uc5b4, \uc12c\uc138, \uc6b8\/\ub780\uc81c\ub9ac, \uc544\uae30\uc637, \ud0c8\uc218, \ud5f9\uad7c+\ud0c8\uc218, \ud1b5\uc138\ucc99\n\n* \uae30\ubcf8\uc0ac\uc591\n\uc138\ud0c1\uc6a9\ub7c9 : 9kg\n\uc0c9\uc0c1 : \ud654\uc774\ud2b8\n\ud06c\uae30(\ud3edx\ub113\uc774x\uae4a\uc774) : 595x855x565 mm\n\ubb34\uac8c : 71kg\n\uc5d0\ub108\uc9c0 \uc18c\ube44\ud6a8\uc728 : 4\ub4f1\uae09\n\uc804\uc6d0 : 220V\/60Hz\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__92.ggUpdateText();
		el.appendChild(els);
		me.__92.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__92.ggUpdatePosition=function (useTransition) {
		}
		me._container_11111.appendChild(me.__92);
		me._container_211.appendChild(me._container_11111);
		me._contextbox1.appendChild(me._container_211);
		me.__90.appendChild(me._contextbox1);
		el=me.__91=document.createElement('div');
		el.ggId="\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__91.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__91.ggUpdatePosition=function (useTransition) {
		}
		el=me.__123=document.createElement('div');
		el.ggId="\ubc84\ud2bc1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 37%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__123.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__123.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__123.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__123.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__123.style.transition='background-color 0s';
				if (me.__123.ggCurrentLogicStateBackgroundColor == 0) {
					me.__123.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__123.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__123.logicBlock_backgroundcolor();
		me.__123.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__123.ggUpdatePosition=function (useTransition) {
		}
		me.__91.appendChild(me.__123);
		el=me.__222=document.createElement('div');
		el.ggId="\ubc84\ud2bc2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 45%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__222.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__222.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__222.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__222.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__222.style.transition='background-color 0s';
				if (me.__222.ggCurrentLogicStateBackgroundColor == 0) {
					me.__222.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__222.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__222.logicBlock_backgroundcolor();
		me.__222.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__222.ggUpdatePosition=function (useTransition) {
		}
		me.__91.appendChild(me.__222);
		el=me.__321=document.createElement('div');
		el.ggId="\ubc84\ud2bc3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 53%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__321.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__321.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__321.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__321.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__321.style.transition='background-color 0s';
				if (me.__321.ggCurrentLogicStateBackgroundColor == 0) {
					me.__321.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__321.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__321.logicBlock_backgroundcolor();
		me.__321.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__321.ggUpdatePosition=function (useTransition) {
		}
		me.__91.appendChild(me.__321);
		el=me.__421=document.createElement('div');
		el.ggId="\ubc84\ud2bc4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 61%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__421.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__421.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__421.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__421.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__421.style.transition='background-color 0s';
				if (me.__421.ggCurrentLogicStateBackgroundColor == 0) {
					me.__421.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__421.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__421.logicBlock_backgroundcolor();
		me.__421.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__421.ggUpdatePosition=function (useTransition) {
		}
		me.__91.appendChild(me.__421);
		me.__90.appendChild(me.__91);
		el=me.__122=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ubc30\uacbd-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__122.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__122.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__122.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__122.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__122.style.transition='opacity 0s';
				if (me.__122.ggCurrentLogicStateAlpha == 0) {
					me.__122.style.visibility=me.__122.ggVisible?'inherit':'hidden';
					me.__122.style.opacity=1;
				}
				else {
					me.__122.style.visibility=me.__122.ggVisible?'inherit':'hidden';
					me.__122.style.opacity=0.01;
				}
			}
		}
		me.__122.logicBlock_alpha();
		me.__122.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_11110=document.createElement('div');
		els=me._image_11110__img=document.createElement('img');
		els.className='ggskin ggskin_image_11110';
		hs=basePath + 'images/image_11110.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_11110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_11110.ggUpdatePosition=function (useTransition) {
		}
		me.__122.appendChild(me._image_11110);
		me.__90.appendChild(me.__122);
		el=me.__221=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ubc30\uacbd-2";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__221.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__221.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__221.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__221.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__221.style.transition='opacity 0s';
				if (me.__221.ggCurrentLogicStateAlpha == 0) {
					me.__221.style.visibility=me.__221.ggVisible?'inherit':'hidden';
					me.__221.style.opacity=1;
				}
				else {
					me.__221.style.visibility=me.__221.ggVisible?'inherit':'hidden';
					me.__221.style.opacity=0.01;
				}
			}
		}
		me.__221.logicBlock_alpha();
		me.__221.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_211=document.createElement('div');
		els=me._image_211__img=document.createElement('img');
		els.className='ggskin ggskin_image_211';
		hs=basePath + 'images/image_211.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 21";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_211.ggUpdatePosition=function (useTransition) {
		}
		me.__221.appendChild(me._image_211);
		me.__90.appendChild(me.__221);
		el=me.__320=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ubc30\uacbd-3";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__320.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__320.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__320.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__320.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__320.style.transition='opacity 0s';
				if (me.__320.ggCurrentLogicStateAlpha == 0) {
					me.__320.style.visibility=me.__320.ggVisible?'inherit':'hidden';
					me.__320.style.opacity=1;
				}
				else {
					me.__320.style.visibility=me.__320.ggVisible?'inherit':'hidden';
					me.__320.style.opacity=0.01;
				}
			}
		}
		me.__320.logicBlock_alpha();
		me.__320.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_311=document.createElement('div');
		els=me._image_311__img=document.createElement('img');
		els.className='ggskin ggskin_image_311';
		hs=basePath + 'images/image_311.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 31";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_311.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_311.ggUpdatePosition=function (useTransition) {
		}
		me.__320.appendChild(me._image_311);
		me.__90.appendChild(me.__320);
		el=me.__420=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ubc30\uacbd-4";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__420.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__420.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__420.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__420.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__420.style.transition='opacity 0s';
				if (me.__420.ggCurrentLogicStateAlpha == 0) {
					me.__420.style.visibility=me.__420.ggVisible?'inherit':'hidden';
					me.__420.style.opacity=1;
				}
				else {
					me.__420.style.visibility=me.__420.ggVisible?'inherit':'hidden';
					me.__420.style.opacity=0.01;
				}
			}
		}
		me.__420.logicBlock_alpha();
		me.__420.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_411=document.createElement('div');
		els=me._image_411__img=document.createElement('img');
		els.className='ggskin ggskin_image_411';
		hs=basePath + 'images/image_411.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_411.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_411.ggUpdatePosition=function (useTransition) {
		}
		me.__420.appendChild(me._image_411);
		me.__90.appendChild(me.__420);
		el=me._smallwashcontainer=document.createElement('div');
		el.ggId="small-wash-container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -50px;';
		hs+='height : 28%;';
		hs+='left : 336px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallwashcontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallwashcontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._small_41=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0.22%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_41.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me._small_41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__419=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__419.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__419.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__419.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__419.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__419.style.transition='border-color 500ms ease 0ms';
				if (me.__419.ggCurrentLogicStateBorderColor == 0) {
					me.__419.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__419.ggCurrentLogicStateBorderColor == 1) {
					me.__419.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__419.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__419.logicBlock_bordercolor();
		me.__419.ggUpdatePosition=function (useTransition) {
		}
		me._small_41.appendChild(me.__419);
		el=me._smallimage41=document.createElement('div');
		els=me._smallimage41__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage41';
		hs=basePath + 'images/smallimage41.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="small-image-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._smallimage41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage41.ggUpdatePosition=function (useTransition) {
		}
		me._small_41.appendChild(me._smallimage41);
		me._smallwashcontainer.appendChild(me._small_41);
		el=me._small_11=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -342.63%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_11.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__121=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__121.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__121.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_1') == false))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__121.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__121.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__121.style.transition='border-color 500ms ease 0ms';
				if (me.__121.ggCurrentLogicStateBorderColor == 0) {
					me.__121.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__121.ggCurrentLogicStateBorderColor == 1) {
					me.__121.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__121.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__121.logicBlock_bordercolor();
		me.__121.ggUpdatePosition=function (useTransition) {
		}
		me._small_11.appendChild(me.__121);
		el=me._smallimage11=document.createElement('div');
		els=me._smallimage11__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage11';
		hs=basePath + 'images/smallimage11.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="small-image-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage11.ggUpdatePosition=function (useTransition) {
		}
		me._small_11.appendChild(me._smallimage11);
		me._smallwashcontainer.appendChild(me._small_11);
		el=me._small_21=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -228.35%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_21.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__220=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__220.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__220.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__220.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__220.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__220.style.transition='border-color 500ms ease 0ms';
				if (me.__220.ggCurrentLogicStateBorderColor == 0) {
					me.__220.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__220.ggCurrentLogicStateBorderColor == 1) {
					me.__220.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__220.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__220.logicBlock_bordercolor();
		me.__220.ggUpdatePosition=function (useTransition) {
		}
		me._small_21.appendChild(me.__220);
		el=me._smallimage21=document.createElement('div');
		els=me._smallimage21__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage21';
		hs=basePath + 'images/smallimage21.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="small-image-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage21.ggUpdatePosition=function (useTransition) {
		}
		me._small_21.appendChild(me._smallimage21);
		me._smallwashcontainer.appendChild(me._small_21);
		el=me._small_31=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -114.06%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_31.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_31.ggUpdatePosition=function (useTransition) {
		}
		el=me.__319=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__319.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__319.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__319.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__319.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__319.style.transition='border-color 500ms ease 0ms';
				if (me.__319.ggCurrentLogicStateBorderColor == 0) {
					me.__319.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__319.ggCurrentLogicStateBorderColor == 1) {
					me.__319.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__319.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__319.logicBlock_bordercolor();
		me.__319.ggUpdatePosition=function (useTransition) {
		}
		me._small_31.appendChild(me.__319);
		el=me._smallimage31=document.createElement('div');
		els=me._smallimage31__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage31';
		hs=basePath + 'images/smallimage31.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="small-image-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._smallimage31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage31.ggUpdatePosition=function (useTransition) {
		}
		me._small_31.appendChild(me._smallimage31);
		me._smallwashcontainer.appendChild(me._small_31);
		me.__90.appendChild(me._smallwashcontainer);
		me._rectangle_111.appendChild(me.__90);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_111.appendChild(me._rectangle_1);
		me.__89.appendChild(me._rectangle_111);
		el=me._image_52=document.createElement('div');
		els=me._image_52__img=document.createElement('img');
		els.className='ggskin ggskin_image_52';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAitJREFUeF7tmuFOwzAMhLM3gycDngzebJPFgqKqaWznzp5IKvEH0vjuyzlbQ29l8eu2uP+yAewELE5gt8DiAdib4G6B3QKLE/C2wFspRX4+X4ifS5MHwPfTfPX+Xkr5SQQhxj8aTaJFNKkuKwBZcSl2vLIgiHlZELceK4BeQREQDeFKy5e2Pa0AxOixBVr6URCuzIsetS/1wMblqDgbArS+B4CwgIpQ7Va/g+B1vQAoYgYg4OZNvdIRRxF1UotWZyYBVSdN3LMAdX4EAGY7UM0jWqBNK1oser7TLkYlAN0OIebRCUBBCDPPAjCzJ4SaZwLwQAg3zwZggZBiPgKABoI8uZ09Ytc9hfpsgf4U6H2bHa1w7z6q+agEaD8djhDo5q'+
			'MBaNohJPYt6agWaGv2jtXqGPVpTq9vLL+PBqDdC0LiH90CWvOhbRCVAKv5MAgRAEbm//X3gJH52uvacZb9TTWWmQCrKet4lcHRIBYArxnvfSOf3b8zAMyamL3fBAMNACUeNc8QBhIAWjR6vlMYKAAssax5/2AgALBFUuefBUAV12SWVmcGAE1UZ+ei1PMCoIgZbtkv8t/hLPPakyXTo7QnAfeLlTIVV6y454wx5SUpERplXpMEtRZrAnrxVxecWPWzW3t61MdqVgAion1JSuImxbLfE2xflaO2QF0FOdiUQpnGj4lwafIkAJzi3Ok2gFz++dV3AvLXIFfBTkAu//zqOwH5a5CrYPkEPADiMJpBN5ipjwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 3%;';
		hs+='position : absolute;';
		hs+='right : 4%;';
		hs+='top : 5.5%;';
		hs+='visibility : inherit;';
		hs+='width : 1.8%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_52.onclick=function (e) {
			me._infopopup1.style.transition='none';
			me._infopopup1.style.visibility='hidden';
			me._infopopup1.ggVisible=false;
		}
		me._image_52.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me._image_52);
		me._infopopup1.appendChild(me.__89);
		el=me._infopopupbg=document.createElement('div');
		el.ggId="info-popup-bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._infopopupbg.ggUpdatePosition=function (useTransition) {
		}
		me._infopopup1.appendChild(me._infopopupbg);
		me.divSkin.appendChild(me._infopopup1);
		el=me._infopopupm=document.createElement('div');
		el.ggId="\uc138\ud0c1\uae30-info-popup-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupm.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infopopupm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infopopupm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infopopupm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infopopupm.style.transition='';
				if (me._infopopupm.ggCurrentLogicStateVisible == 0) {
					me._infopopupm.style.visibility="hidden";
					me._infopopupm.ggVisible=false;
				}
				else {
					me._infopopupm.style.visibility="hidden";
					me._infopopupm.ggVisible=false;
				}
			}
		}
		me._infopopupm.logicBlock_visible();
		me._infopopupm.ggUpdatePosition=function (useTransition) {
		}
		el=me._infopopupmbg=document.createElement('div');
		el.ggId="info-popup-m-bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupmbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._infopopupmbg.ggUpdatePosition=function (useTransition) {
		}
		el=me._m3=document.createElement('div');
		el.ggId="\uc138\ud0c1\uae30\ud31d\uc5c5-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m3.ggUpdatePosition=function (useTransition) {
		}
		el=me._infopopupminnerbg=document.createElement('div');
		el.ggId="info-popup-m-inner-bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 71.0417%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((71.0417% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupminnerbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._infopopupminnerbg.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_31=document.createElement('div');
		el.ggId="Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90%;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_31.ggUpdatePosition=function (useTransition) {
		}
		el=me.__86=document.createElement('div');
		el.ggId="\uc81c\ud488\uc18c\uac1c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__86.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__86.ggUpdatePosition=function (useTransition) {
		}
		el=me.__87=document.createElement('div');
		els=me.__87__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 800;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__87.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub4dc\ub7fc \uc138\ud0c1\uae30 9kg", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__87.ggUpdateText();
		el.appendChild(els);
		me.__87.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__87.ggUpdatePosition=function (useTransition) {
		}
		el=me.__88=document.createElement('div');
		els=me.__88__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85 \ubd80\uc81c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -45px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:0px; word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__88.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\uc8fc \uc138\ud0c1\ud574\uc57c\ud558\ub294 \uc637\uc774\ub098 \uae09\ud558\uac8c \uc785\uc5b4\uc57c\ud558\ub294 \uc154\uce20 \ub4f1\uc744 \uae68\ub057\ud558\uac8c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__88.ggUpdateText();
		el.appendChild(els);
		me.__88.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__88.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1111=document.createElement('div');
		els=me._text_1111__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 111";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(0,0,0,0.784314);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1111.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1111.ggUpdateText();
		el.appendChild(els);
		me._text_1111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1111.ggUpdatePosition=function (useTransition) {
		}
		me.__88.appendChild(me._text_1111);
		me.__87.appendChild(me.__88);
		me.__86.appendChild(me.__87);
		el=me._text_3m=document.createElement('div');
		els=me._text_3m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #0000ff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ube4c\ud2b8\uc778", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3m.ggUpdateText();
		el.appendChild(els);
		me._text_3m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3m.ggUpdatePosition=function (useTransition) {
		}
		me.__86.appendChild(me._text_3m);
		me._container_31.appendChild(me.__86);
		el=me.__82=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__82.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		el=me.__85=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 108.507%;';
		hs+='left : calc(50% - ((82% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((108.507% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 82%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__85.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__85.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 900))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__85.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__85.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__85.style.transition='left 0s, top 0s';
				if (me.__85.ggCurrentLogicStatePosition == 0) {
					me.__85.style.left = 'calc(50% - (82% / 2))';
					me.__85.style.top = 'calc(50% - (108.507% / 2) + (0px / 2) + -30px)';
				}
				else {
					me.__85.style.left='calc(50% - ((82% + 0px) / 2) + 0px)';
					me.__85.style.top='calc(50% - ((108.507% + 0px) / 2) - 50px)';
				}
			}
		}
		me.__85.logicBlock_position();
		me.__85.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6661=document.createElement('div');
		els=me._image_6661__img=document.createElement('img');
		els.className='ggskin ggskin_image_6661';
		hs=basePath + 'images/image_6661.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 666";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.7513%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.7513% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6661.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6661.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_6661.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_6661.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_6661.style.transition='opacity 0s';
				if (me._image_6661.ggCurrentLogicStateAlpha == 0) {
					me._image_6661.style.visibility=me._image_6661.ggVisible?'inherit':'hidden';
					me._image_6661.style.opacity=1;
				}
				else {
					me._image_6661.style.visibility=me._image_6661.ggVisible?'inherit':'hidden';
					me._image_6661.style.opacity=0.01;
				}
			}
		}
		me._image_6661.logicBlock_alpha();
		me._image_6661.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_6661.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me._image_6661);
		el=me._image_1112=document.createElement('div');
		els=me._image_1112__img=document.createElement('img');
		els.className='ggskin ggskin_image_1112';
		hs=basePath + 'images/image_1112.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.7513%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.7513% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1112.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1112.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1112.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1112.style.transition='opacity 0s';
				if (me._image_1112.ggCurrentLogicStateAlpha == 0) {
					me._image_1112.style.visibility=me._image_1112.ggVisible?'inherit':'hidden';
					me._image_1112.style.opacity=1;
				}
				else {
					me._image_1112.style.visibility=me._image_1112.ggVisible?'inherit':'hidden';
					me._image_1112.style.opacity=0.01;
				}
			}
		}
		me._image_1112.logicBlock_alpha();
		me._image_1112.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_1112.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me._image_1112);
		el=me._image_121=document.createElement('div');
		els=me._image_121__img=document.createElement('img');
		els.className='ggskin ggskin_image_121';
		hs=basePath + 'images/image_121.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.7513%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.7513% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_121.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_121.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_121.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_121.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_121.style.transition='opacity 0s';
				if (me._image_121.ggCurrentLogicStateAlpha == 0) {
					me._image_121.style.visibility=me._image_121.ggVisible?'inherit':'hidden';
					me._image_121.style.opacity=1;
				}
				else {
					me._image_121.style.visibility=me._image_121.ggVisible?'inherit':'hidden';
					me._image_121.style.opacity=0.01;
				}
			}
		}
		me._image_121.logicBlock_alpha();
		me._image_121.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_121.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me._image_121);
		el=me._image_1311=document.createElement('div');
		els=me._image_1311__img=document.createElement('img');
		els.className='ggskin ggskin_image_1311';
		hs=basePath + 'images/image_1311.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 131";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.7513%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.7513% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1311.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1311.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1311.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1311.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1311.style.transition='opacity 0s';
				if (me._image_1311.ggCurrentLogicStateAlpha == 0) {
					me._image_1311.style.visibility=me._image_1311.ggVisible?'inherit':'hidden';
					me._image_1311.style.opacity=1;
				}
				else {
					me._image_1311.style.visibility=me._image_1311.ggVisible?'inherit':'hidden';
					me._image_1311.style.opacity=0.01;
				}
			}
		}
		me._image_1311.logicBlock_alpha();
		me._image_1311.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me._image_1311.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me._image_1311);
		me.__82.appendChild(me.__85);
		el=me.__84=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70%;';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__84.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_211=document.createElement('div');
		els=me._text_211__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 200%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_211.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \uc8fc\uc694\uae30\ub2a5\n\uc138\ud0c1\ucf54\uc2a4 \n: \ud45c\uc900, \uc18c\ub7c9\/\ucf8c\uc18d, \ucc0c\ub4e0\ub54c, \uccad\ubc14\uc9c0, \uc544\uc6c3\ub3c4\uc5b4, \uc12c\uc138, \uc6b8\/\ub780\uc81c\ub9ac, \uc544\uae30\uc637, \ud0c8\uc218, \ud5f9\uad7c+\ud0c8\uc218, \ud1b5\uc138\ucc99\n\n* \uae30\ubcf8\uc0ac\uc591\n\uc138\ud0c1\uc6a9\ub7c9 : 9kg\n\uc0c9\uc0c1 : \ud654\uc774\ud2b8\n\ud06c\uae30(\ud3edx\ub113\uc774x\uae4a\uc774) : 595x855x565 mm\n\ubb34\uac8c : 71kg\n\uc5d0\ub108\uc9c0 \uc18c\ube44\ud6a8\uc728 : 4\ub4f1\uae09\n\uc804\uc6d0 : 220V\/60Hz\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_211.ggUpdateText();
		el.appendChild(els);
		me._text_211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_211.ggUpdatePosition=function (useTransition) {
		}
		me.__84.appendChild(me._text_211);
		me.__82.appendChild(me.__84);
		el=me.__83=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -29%;';
		hs+='cursor : pointer;';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__83.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		el=me.__120=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__120.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__120.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__120.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__120.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__120.style.transition='border-color 0s';
				if (me.__120.ggCurrentLogicStateBorderColor == 0) {
					me.__120.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__120.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__120.logicBlock_bordercolor();
		me.__120.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__120.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_7111=document.createElement('div');
		els=me._image_7111__img=document.createElement('img');
		els.className='ggskin ggskin_image_7111';
		hs=basePath + 'images/image_7111.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 711";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7111.ggUpdatePosition=function (useTransition) {
		}
		me.__120.appendChild(me._image_7111);
		me.__83.appendChild(me.__120);
		el=me.__219=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__219.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__219.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__219.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__219.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__219.style.transition='border-color 0s';
				if (me.__219.ggCurrentLogicStateBorderColor == 0) {
					me.__219.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__219.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__219.logicBlock_bordercolor();
		me.__219.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__219.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8111=document.createElement('div');
		els=me._image_8111__img=document.createElement('img');
		els.className='ggskin ggskin_image_8111';
		hs=basePath + 'images/image_8111.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 811";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8111.ggUpdatePosition=function (useTransition) {
		}
		me.__219.appendChild(me._image_8111);
		me.__83.appendChild(me.__219);
		el=me.__318=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 50%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__318.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__318.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__318.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__318.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__318.style.transition='border-color 0s';
				if (me.__318.ggCurrentLogicStateBorderColor == 0) {
					me.__318.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__318.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__318.logicBlock_bordercolor();
		me.__318.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__318.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_911=document.createElement('div');
		els=me._image_911__img=document.createElement('img');
		els.className='ggskin ggskin_image_911';
		hs=basePath + 'images/image_911.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 911";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_911.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_911.ggUpdatePosition=function (useTransition) {
		}
		me.__318.appendChild(me._image_911);
		me.__83.appendChild(me.__318);
		el=me.__418=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 75%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__418.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__418.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__418.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__418.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__418.style.transition='border-color 0s';
				if (me.__418.ggCurrentLogicStateBorderColor == 0) {
					me.__418.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__418.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__418.logicBlock_bordercolor();
		me.__418.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__418.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_10111=document.createElement('div');
		els=me._image_10111__img=document.createElement('img');
		els.className='ggskin ggskin_image_10111';
		hs=basePath + 'images/image_10111.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1011";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10111.ggUpdatePosition=function (useTransition) {
		}
		me.__418.appendChild(me._image_10111);
		me.__83.appendChild(me.__418);
		me.__82.appendChild(me.__83);
		me._container_31.appendChild(me.__82);
		me._infopopupminnerbg.appendChild(me._container_31);
		el=me._image_1411=document.createElement('div');
		els=me._image_1411__img=document.createElement('img');
		els.className='ggskin ggskin_image_1411';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA01JREFUeF7t3W1uwjAMBuD2ZMDJgJMBJ2PypKD92Do78cfrxJGmTQIa10+dhKpT9vf7/d6qwWRgLxAYi+9ACgTLo0DAPAqkQNAyABZPzSEFApYBsHCqQgoELANg4Ygr5Pl8bvf7faPf1K7X63Y+n79/Vm4tL5QD+pvycTqdttvtJkqLCIQOThi/NYKRdi6KFPjNmnlhgxx12nK1IgonL4/Hgz2CsEEul8tnmDq6WFdC4WBQrmj4IhROY4Ps+8453mdemX344mK0pHFvqrNBuBWywvAlxaCchIO0FdhsldKDIRnG2RVCSzmqEmmTBCM9tvf7ezAoRpNJnQ7cG9AMKF7nzq6QdjV6BeZ99R/153nOYpDVKsUTg3LbBbIKijfGEM'+
			'jsKBEYwyCzokRhqIDMhhKJoQYyC0o0hipIdhQEDHWQrCgoGCYg2VCQMMxAsqCgYZiCoKMgYpiDoKKgYriAoKEgY7iBoKCgY7iCRKNkwHAHiULJghEC4o2SCSMMxAslG0YoiDVKRoxwECuUrBgQINoomTFgQLRQsmNAgYyi0Of/+lcJeu2vhvbMWPdTJ0cnOfJa71Xe0ycaBlyFtKR6oCBiwIKMDF+cSkHFgAaxQkHGgAfRRkHHSAGihZIBIw3IKEoWjALhrACc3wP3PeS389dYBmepEngQDYyGnAEFGkQTIwsKLIgFRgYUSBBLDHQUOBAPDGQUKJBeDJqs6/a78vp8BIM+O/LlEWn1BVEhGhijt+5RUMJBNDFmQAkFscDIjhIGYomRGSUExAMjK4o7iCdGRhRXkAiMbChuIJEYmVBcQBAwsqCYgyBhZEAxBUHEQEcx'+
			'A0HGQEYxAcmAgYqiDpIJAxFFFSQjBhqKGkhmDCQUFZAZMFBQhkFmwkBAGQKZESMapRtkZoxIlC6QFTCiUMQgK2FEoIhAVsTwRmGD1IYu/funmGzo0lMdKM86aT7T15OH8F3aKAEzYvQOX+EgM2P0ooTt0rYChhTFpEI4k/pKGBIUSV7Yq6z/ni6XdKo5ySIc62iil+ZFBNJQXq/XZ19cKse2hTdCcqJioBHk5xbevXkRg0Sd8Cr9FgiYdIEUCFgGwMKpCikQsAyAhVMVUiBgGQALpyqkQMAyABbOFwOw+BFBH87/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 141";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1411.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1411.onclick=function (e) {
			me._infopopupm.style.transition='none';
			me._infopopupm.style.visibility='hidden';
			me._infopopupm.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				me.__25.style.transition='none';
				me.__25.style.visibility=(Number(me.__25.style.opacity)>0||!me.__25.style.opacity)?'inherit':'hidden';
				me.__25.ggVisible=true;
			}
		}
		me._image_1411.ggUpdatePosition=function (useTransition) {
		}
		me._infopopupminnerbg.appendChild(me._image_1411);
		me._m3.appendChild(me._infopopupminnerbg);
		me._infopopupmbg.appendChild(me._m3);
		me._infopopupm.appendChild(me._infopopupmbg);
		me.divSkin.appendChild(me._infopopupm);
		el=me._infopopup0=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-info-popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopup0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infopopup0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infopopup0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infopopup0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infopopup0.style.transition='';
				if (me._infopopup0.ggCurrentLogicStateVisible == 0) {
					me._infopopup0.style.visibility="hidden";
					me._infopopup0.ggVisible=false;
				}
				else {
					me._infopopup0.style.visibility="hidden";
					me._infopopup0.ggVisible=false;
				}
			}
		}
		me._infopopup0.logicBlock_visible();
		me._infopopup0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__74=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8\ud31d\uc5c5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 537px;';
		hs+='left : calc(50% - ((1000px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((537px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1000px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_110=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-Rectangle 11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__79=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\ub85c\uace0 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 4%;';
		hs+='position : absolute;';
		hs+='top : 5.5%;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__79.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		el=me.__80=document.createElement('div');
		els=me.__80__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5d0\uc5b4\ucee8-\ud68c\uc0ac\uba85";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__80.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__80.ggUpdateText();
		el.appendChild(els);
		me.__80.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me.__80);
		me._rectangle_110.appendChild(me.__79);
		el=me.__75=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 208px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 340px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__75.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		el=me._contextbox0=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-context-box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 350px;';
		hs+='left : 550px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		hs+='word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._contextbox0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contextbox0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__78=document.createElement('div');
		els=me.__78__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5d0\uc5b4\ucee8-\ub0c9\uc7a5\uace0\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 75px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 113.429%;';
		hs+='pointer-events:auto;';
		hs+='line-height:40px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 800;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__78.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uc815\uc6a9 \ubb34\ud48d \uc2dc\uc2a4\ud15c 2\uc2e4\n(Wi-Fi \uc678\uc7a5\ud615)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__78.ggUpdateText();
		el.appendChild(els);
		me.__78.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_210=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-Rectangle 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -21px;';
		hs+='cursor : default;';
		hs+='height : 2.5%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_210.ggUpdatePosition=function (useTransition) {
		}
		me.__78.appendChild(me._rectangle_210);
		el=me._text_33333=document.createElement('div');
		els=me._text_33333__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 33333";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #0000ff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 29px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_33333.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ube4c\ud2b8\uc778", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_33333.ggUpdateText();
		el.appendChild(els);
		me._text_33333.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_33333.ggUpdatePosition=function (useTransition) {
		}
		me.__78.appendChild(me._text_33333);
		me._contextbox0.appendChild(me.__78);
		el=me._container_210=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-Container 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_210.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_11110=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-Container 1111";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_11110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_11110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__77=document.createElement('div');
		els=me.__77__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5d0\uc5b4\ucee8-\ub0c9\uc7a5\uace0 \uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__77.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud558\ub098\uc758 \uc2e4\uc678\uae30\uc5d0 \ucd5c\ub300 6\uac1c\uae4c\uc9c0 \uc2e4\ub0b4\uae30\ub97c \uc5f0\uacb0\ud560 \uc218 \uc788\uc5b4 \uac01 \uc2e4\ubcc4\ub85c \uc5d0\uc5b4\ucee8 \uc124\uce58\uac00 \uac00\ub2a5\ud55c \uacf5\uac04\ud6a8\uc728\uc131\uc744 \ub192\uc778 \uc81c\ud488\n\n* \uae30\ubcf8 \uc815\ubcf4\n\ubaa8\ub378\uba85 : PC1NWCK3N\n\uc81c\ud488 \uc911\ub7c9 : 5.6kg\n\uc81c\ud488 \uce58\uc218(\uac00\ub85cx\ub192\uc774x\uae4a\uc774) : 1,198x35x500mm\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__77.ggUpdateText();
		el.appendChild(els);
		me.__77.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		me._container_11110.appendChild(me.__77);
		me._container_210.appendChild(me._container_11110);
		me._contextbox0.appendChild(me._container_210);
		me.__75.appendChild(me._contextbox0);
		el=me.__76=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -140px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__76.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		el=me.__119=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\ubc84\ud2bc1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 37%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__119.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__119.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__119.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__119.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__119.style.transition='background-color 0s';
				if (me.__119.ggCurrentLogicStateBackgroundColor == 0) {
					me.__119.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__119.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__119.logicBlock_backgroundcolor();
		me.__119.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__119.ggUpdatePosition=function (useTransition) {
		}
		me.__76.appendChild(me.__119);
		el=me.__218=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\ubc84\ud2bc2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 45%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__218.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__218.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__218.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__218.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__218.style.transition='background-color 0s';
				if (me.__218.ggCurrentLogicStateBackgroundColor == 0) {
					me.__218.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__218.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__218.logicBlock_backgroundcolor();
		me.__218.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__218.ggUpdatePosition=function (useTransition) {
		}
		me.__76.appendChild(me.__218);
		el=me.__317=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\ubc84\ud2bc3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 53%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__317.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__317.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__317.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__317.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__317.style.transition='background-color 0s';
				if (me.__317.ggCurrentLogicStateBackgroundColor == 0) {
					me.__317.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__317.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__317.logicBlock_backgroundcolor();
		me.__317.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__317.ggUpdatePosition=function (useTransition) {
		}
		me.__76.appendChild(me.__317);
		el=me.__417=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\ubc84\ud2bc4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 61%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__417.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__417.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__417.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__417.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__417.style.transition='background-color 0s';
				if (me.__417.ggCurrentLogicStateBackgroundColor == 0) {
					me.__417.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__417.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__417.logicBlock_backgroundcolor();
		me.__417.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__417.ggUpdatePosition=function (useTransition) {
		}
		me.__76.appendChild(me.__417);
		me.__75.appendChild(me.__76);
		el=me.__118=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc774\ubbf8\uc9c0\ubc30\uacbd-1";
		el.ggDx=0;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 50px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__118.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__118.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__118.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__118.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__118.style.transition='opacity 0s';
				if (me.__118.ggCurrentLogicStateAlpha == 0) {
					me.__118.style.visibility=me.__118.ggVisible?'inherit':'hidden';
					me.__118.style.opacity=1;
				}
				else {
					me.__118.style.visibility=me.__118.ggVisible?'inherit':'hidden';
					me.__118.style.opacity=0.01;
				}
			}
		}
		me.__118.logicBlock_alpha();
		me.__118.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1111=document.createElement('div');
		els=me._image_1111__img=document.createElement('img');
		els.className='ggskin ggskin_image_1111';
		hs=basePath + 'images/image_1111.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="I\uc5d0\uc5b4\ucee8-mage 1111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1111.ggUpdatePosition=function (useTransition) {
		}
		me.__118.appendChild(me._image_1111);
		me.__75.appendChild(me.__118);
		el=me.__217=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc774\ubbf8\uc9c0\ubc30\uacbd-2";
		el.ggDx=0;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 50px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__217.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__217.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__217.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__217.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__217.style.transition='opacity 0s';
				if (me.__217.ggCurrentLogicStateAlpha == 0) {
					me.__217.style.visibility=me.__217.ggVisible?'inherit':'hidden';
					me.__217.style.opacity=1;
				}
				else {
					me.__217.style.visibility=me.__217.ggVisible?'inherit':'hidden';
					me.__217.style.opacity=0.01;
				}
			}
		}
		me.__217.logicBlock_alpha();
		me.__217.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_210=document.createElement('div');
		els=me._image_210__img=document.createElement('img');
		els.className='ggskin ggskin_image_210';
		hs=basePath + 'images/image_210.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-Image 21";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_210.ggUpdatePosition=function (useTransition) {
		}
		me.__217.appendChild(me._image_210);
		me.__75.appendChild(me.__217);
		el=me.__316=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc774\ubbf8\uc9c0\ubc30\uacbd-3";
		el.ggDx=0;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 50px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__316.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__316.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__316.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__316.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__316.style.transition='opacity 0s';
				if (me.__316.ggCurrentLogicStateAlpha == 0) {
					me.__316.style.visibility=me.__316.ggVisible?'inherit':'hidden';
					me.__316.style.opacity=1;
				}
				else {
					me.__316.style.visibility=me.__316.ggVisible?'inherit':'hidden';
					me.__316.style.opacity=0.01;
				}
			}
		}
		me.__316.logicBlock_alpha();
		me.__316.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_310=document.createElement('div');
		els=me._image_310__img=document.createElement('img');
		els.className='ggskin ggskin_image_310';
		hs=basePath + 'images/image_310.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-Image 31";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_310.ggUpdatePosition=function (useTransition) {
		}
		me.__316.appendChild(me._image_310);
		me.__75.appendChild(me.__316);
		el=me.__416=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc774\ubbf8\uc9c0\ubc30\uacbd-4";
		el.ggDx=0;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 50px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__416.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__416.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__416.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__416.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__416.style.transition='opacity 0s';
				if (me.__416.ggCurrentLogicStateAlpha == 0) {
					me.__416.style.visibility=me.__416.ggVisible?'inherit':'hidden';
					me.__416.style.opacity=1;
				}
				else {
					me.__416.style.visibility=me.__416.ggVisible?'inherit':'hidden';
					me.__416.style.opacity=0.01;
				}
			}
		}
		me.__416.logicBlock_alpha();
		me.__416.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_410=document.createElement('div');
		els=me._image_410__img=document.createElement('img');
		els.className='ggskin ggskin_image_410';
		hs=basePath + 'images/image_410.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-Image 41";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_410.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_410.ggUpdatePosition=function (useTransition) {
		}
		me.__416.appendChild(me._image_410);
		me.__75.appendChild(me.__416);
		el=me._smallcontainerair=document.createElement('div');
		el.ggId="small-container-air";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -150px;';
		hs+='height : 40%;';
		hs+='left : 374px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallcontainerair.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallcontainerair.ggUpdatePosition=function (useTransition) {
		}
		el=me._small_40=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -0.22%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_40.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me._small_40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__415=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__415.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__415.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__415.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__415.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__415.style.transition='border-color 500ms ease 0ms';
				if (me.__415.ggCurrentLogicStateBorderColor == 0) {
					me.__415.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__415.ggCurrentLogicStateBorderColor == 1) {
					me.__415.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__415.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__415.logicBlock_bordercolor();
		me.__415.ggUpdatePosition=function (useTransition) {
		}
		me._small_40.appendChild(me.__415);
		el=me._smallimage40=document.createElement('div');
		els=me._smallimage40__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage40';
		hs=basePath + 'images/smallimage40.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-small-image-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage40.ggUpdatePosition=function (useTransition) {
		}
		me._small_40.appendChild(me._smallimage40);
		me._smallcontainerair.appendChild(me._small_40);
		el=me._small_10=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -342.63%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_10.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__117=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__117.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__117.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_1') == false))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__117.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__117.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__117.style.transition='border-color 500ms ease 0ms';
				if (me.__117.ggCurrentLogicStateBorderColor == 0) {
					me.__117.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__117.ggCurrentLogicStateBorderColor == 1) {
					me.__117.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__117.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__117.logicBlock_bordercolor();
		me.__117.ggUpdatePosition=function (useTransition) {
		}
		me._small_10.appendChild(me.__117);
		el=me._smallimage10=document.createElement('div');
		els=me._smallimage10__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage10';
		hs=basePath + 'images/smallimage10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-small-image-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage10.ggUpdatePosition=function (useTransition) {
		}
		me._small_10.appendChild(me._smallimage10);
		me._smallcontainerair.appendChild(me._small_10);
		el=me._small_20=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -228.38%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_20.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__216=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__216.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__216.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__216.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__216.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__216.style.transition='border-color 500ms ease 0ms';
				if (me.__216.ggCurrentLogicStateBorderColor == 0) {
					me.__216.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__216.ggCurrentLogicStateBorderColor == 1) {
					me.__216.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__216.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__216.logicBlock_bordercolor();
		me.__216.ggUpdatePosition=function (useTransition) {
		}
		me._small_20.appendChild(me.__216);
		el=me._smallimage20=document.createElement('div');
		els=me._smallimage20__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage20';
		hs=basePath + 'images/smallimage20.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-small-image-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage20.ggUpdatePosition=function (useTransition) {
		}
		me._small_20.appendChild(me._smallimage20);
		me._smallcontainerair.appendChild(me._small_20);
		el=me._small_30=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -113.06%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_30.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__315=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__315.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__315.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__315.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__315.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__315.style.transition='border-color 500ms ease 0ms';
				if (me.__315.ggCurrentLogicStateBorderColor == 0) {
					me.__315.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__315.ggCurrentLogicStateBorderColor == 1) {
					me.__315.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__315.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__315.logicBlock_bordercolor();
		me.__315.ggUpdatePosition=function (useTransition) {
		}
		me._small_30.appendChild(me.__315);
		el=me._smallimage30=document.createElement('div');
		els=me._smallimage30__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage30';
		hs=basePath + 'images/smallimage30.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-small-image-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage30.ggUpdatePosition=function (useTransition) {
		}
		me._small_30.appendChild(me._smallimage30);
		me._smallcontainerair.appendChild(me._small_30);
		me.__75.appendChild(me._smallcontainerair);
		me._rectangle_110.appendChild(me.__75);
		el=me._rectangle_122222=document.createElement('div');
		el.ggId="Rectangle 122222";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_122222.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_122222.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_110.appendChild(me._rectangle_122222);
		me.__74.appendChild(me._rectangle_110);
		el=me._image_51=document.createElement('div');
		els=me._image_51__img=document.createElement('img');
		els.className='ggskin ggskin_image_51';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAitJREFUeF7tmuFOwzAMhLM3gycDngzebJPFgqKqaWznzp5IKvEH0vjuyzlbQ29l8eu2uP+yAewELE5gt8DiAdib4G6B3QKLE/C2wFspRX4+X4ifS5MHwPfTfPX+Xkr5SQQhxj8aTaJFNKkuKwBZcSl2vLIgiHlZELceK4BeQREQDeFKy5e2Pa0AxOixBVr6URCuzIsetS/1wMblqDgbArS+B4CwgIpQ7Va/g+B1vQAoYgYg4OZNvdIRRxF1UotWZyYBVSdN3LMAdX4EAGY7UM0jWqBNK1oser7TLkYlAN0OIebRCUBBCDPPAjCzJ4SaZwLwQAg3zwZggZBiPgKABoI8uZ09Ytc9hfpsgf4U6H2bHa1w7z6q+agEaD8djhDo5q'+
			'MBaNohJPYt6agWaGv2jtXqGPVpTq9vLL+PBqDdC0LiH90CWvOhbRCVAKv5MAgRAEbm//X3gJH52uvacZb9TTWWmQCrKet4lcHRIBYArxnvfSOf3b8zAMyamL3fBAMNACUeNc8QBhIAWjR6vlMYKAAssax5/2AgALBFUuefBUAV12SWVmcGAE1UZ+ei1PMCoIgZbtkv8t/hLPPakyXTo7QnAfeLlTIVV6y454wx5SUpERplXpMEtRZrAnrxVxecWPWzW3t61MdqVgAion1JSuImxbLfE2xflaO2QF0FOdiUQpnGj4lwafIkAJzi3Ok2gFz++dV3AvLXIFfBTkAu//zqOwH5a5CrYPkEPADiMJpBN5ipjwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 3%;';
		hs+='position : absolute;';
		hs+='right : 4%;';
		hs+='top : 5.5%;';
		hs+='visibility : inherit;';
		hs+='width : 1.8%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_51.onclick=function (e) {
			me._infopopup0.style.transition='none';
			me._infopopup0.style.visibility='hidden';
			me._infopopup0.ggVisible=false;
		}
		me._image_51.ggUpdatePosition=function (useTransition) {
		}
		me.__74.appendChild(me._image_51);
		me._infopopup0.appendChild(me.__74);
		el=me._popupbg0=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-popup-bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popupbg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popupbg0.ggUpdatePosition=function (useTransition) {
		}
		me._infopopup0.appendChild(me._popupbg0);
		me.divSkin.appendChild(me._infopopup0);
		el=me._popupm0=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-popup-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popupm0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popupm0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popupm0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popupm0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popupm0.style.transition='';
				if (me._popupm0.ggCurrentLogicStateVisible == 0) {
					me._popupm0.style.visibility="hidden";
					me._popupm0.ggVisible=false;
				}
				else {
					me._popupm0.style.visibility="hidden";
					me._popupm0.ggVisible=false;
				}
			}
		}
		me._popupm0.logicBlock_visible();
		me._popupm0.ggUpdatePosition=function (useTransition) {
		}
		el=me._popupmbg0=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-popup-m-bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popupmbg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popupmbg0.ggUpdatePosition=function (useTransition) {
		}
		el=me._m2=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8\ud31d\uc5c5-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90%;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 6%;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m2.ggUpdatePosition=function (useTransition) {
		}
		el=me._popupminnerbg0=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-popup-m-inner-bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popupminnerbg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popupminnerbg0.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_30=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90%;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_30.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_30.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_30.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_30.style.transition='transform 0s';
				if (me._container_30.ggCurrentLogicStateScaling == 0) {
					me._container_30.ggParameter.sx = 0.9;
					me._container_30.ggParameter.sy = 0.9;
					me._container_30.style.transform=parameterToTransform(me._container_30.ggParameter);
					skin.updateSize(me._container_30);
				}
				else {
					me._container_30.ggParameter.sx = 1;
					me._container_30.ggParameter.sy = 1;
					me._container_30.style.transform=parameterToTransform(me._container_30.ggParameter);
					skin.updateSize(me._container_30);
				}
			}
		}
		me._container_30.logicBlock_scaling();
		me._container_30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__71=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uc18c\uac1c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		el=me.__72=document.createElement('div');
		els=me.__72__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__72.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uc815\uc6a9 \ubb34\ud48d \uc2dc\uc2a4\ud15c 2\uc2e4(Wi-Fi \uc678\uc7a5\ud615)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__72.ggUpdateText();
		el.appendChild(els);
		me.__72.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__72.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__72.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__72.ggCurrentLogicStateSize = newLogicStateSize;
				me.__72.style.transition='width 0s, height 0s';
				if (me.__72.ggCurrentLogicStateSize == 0) {
					me.__72.style.width='120%';
					me.__72.style.height='20px';
					skin.updateSize(me.__72);
				}
				else {
					me.__72.style.width='100%';
					me.__72.style.height='20px';
					skin.updateSize(me.__72);
				}
			}
		}
		me.__72.logicBlock_size();
		me.__72.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__72.ggCurrentLogicStateText != newLogicStateText) {
				me.__72.ggCurrentLogicStateText = newLogicStateText;
				me.__72.style.transition='width 0s, height 0s';
				if (me.__72.ggCurrentLogicStateText == 0) {
					if (me.__72.ggUpdateText) {
					me.__72.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uac00\uc815\uc6a9 \ubb34\ud48d \uc2dc\uc2a4\ud15c 2\uc2e4", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__72.ggUpdateText();
					} else {
						if (me.__72.ggUpdatePosition) me.__72.ggUpdatePosition();
					}
				}
				else {
					if (me.__72.ggUpdateText) {
					me.__72.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uac00\uc815\uc6a9 \ubb34\ud48d \uc2dc\uc2a4\ud15c 2\uc2e4(Wi-Fi \uc678\uc7a5\ud615)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__72.ggUpdateText();
					} else {
						if (me.__72.ggUpdatePosition) me.__72.ggUpdatePosition();
					}
				}
			}
		}
		me.__72.logicBlock_text();
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		el=me.__73=document.createElement('div');
		els=me.__73__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uba85 \ubd80\uc81c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -45px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:0px; word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__73.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc9c1\ubc14\ub78c \uc5c6\uc774 \uc2dc\uc6d0\ud55c \ubb34\ud48d\ub0c9\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__73.ggUpdateText();
		el.appendChild(els);
		me.__73.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1110=document.createElement('div');
		els=me._text_1110__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5d0\uc5b4\ucee8-Text 111";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(0,0,0,0.784314);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1110.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1110.ggUpdateText();
		el.appendChild(els);
		me._text_1110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1110.ggUpdatePosition=function (useTransition) {
		}
		me.__73.appendChild(me._text_1110);
		me.__72.appendChild(me.__73);
		me.__71.appendChild(me.__72);
		el=me._text_3mm=document.createElement('div');
		els=me._text_3mm__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-mm";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #0000ff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3mm.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ube4c\ud2b8\uc778", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3mm.ggUpdateText();
		el.appendChild(els);
		me._text_3mm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3mm.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me._text_3mm);
		me._container_30.appendChild(me.__71);
		el=me.__67=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__67.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		el=me.__70=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uc774\ubbf8\uc9c0 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6660=document.createElement('div');
		els=me._image_6660__img=document.createElement('img');
		els.className='ggskin ggskin_image_6660';
		hs=basePath + 'images/image_6660.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-Image 666";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6660.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6660.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_6660.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_6660.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_6660.style.transition='opacity 0s';
				if (me._image_6660.ggCurrentLogicStateAlpha == 0) {
					me._image_6660.style.visibility=me._image_6660.ggVisible?'inherit':'hidden';
					me._image_6660.style.opacity=1;
				}
				else {
					me._image_6660.style.visibility=me._image_6660.ggVisible?'inherit':'hidden';
					me._image_6660.style.opacity=0.01;
				}
			}
		}
		me._image_6660.logicBlock_alpha();
		me._image_6660.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_6660.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me._image_6660);
		el=me._image_1110=document.createElement('div');
		els=me._image_1110__img=document.createElement('img');
		els.className='ggskin ggskin_image_1110';
		hs=basePath + 'images/image_1110.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-Image 111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1110.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1110.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1110.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1110.style.transition='opacity 0s';
				if (me._image_1110.ggCurrentLogicStateAlpha == 0) {
					me._image_1110.style.visibility=me._image_1110.ggVisible?'inherit':'hidden';
					me._image_1110.style.opacity=1;
				}
				else {
					me._image_1110.style.visibility=me._image_1110.ggVisible?'inherit':'hidden';
					me._image_1110.style.opacity=0.01;
				}
			}
		}
		me._image_1110.logicBlock_alpha();
		me._image_1110.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_1110.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me._image_1110);
		el=me._image_120=document.createElement('div');
		els=me._image_120__img=document.createElement('img');
		els.className='ggskin ggskin_image_120';
		hs=basePath + 'images/image_120.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_120.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_120.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_120.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_120.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_120.style.transition='opacity 0s';
				if (me._image_120.ggCurrentLogicStateAlpha == 0) {
					me._image_120.style.visibility=me._image_120.ggVisible?'inherit':'hidden';
					me._image_120.style.opacity=1;
				}
				else {
					me._image_120.style.visibility=me._image_120.ggVisible?'inherit':'hidden';
					me._image_120.style.opacity=0.01;
				}
			}
		}
		me._image_120.logicBlock_alpha();
		me._image_120.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_120.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me._image_120);
		el=me._image_1310=document.createElement('div');
		els=me._image_1310__img=document.createElement('img');
		els.className='ggskin ggskin_image_1310';
		hs=basePath + 'images/image_1310.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-Image 131";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1310.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1310.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1310.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1310.style.transition='opacity 0s';
				if (me._image_1310.ggCurrentLogicStateAlpha == 0) {
					me._image_1310.style.visibility=me._image_1310.ggVisible?'inherit':'hidden';
					me._image_1310.style.opacity=1;
				}
				else {
					me._image_1310.style.visibility=me._image_1310.ggVisible?'inherit':'hidden';
					me._image_1310.style.opacity=0.01;
				}
			}
		}
		me._image_1310.logicBlock_alpha();
		me._image_1310.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me._image_1310.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me._image_1310);
		me.__67.appendChild(me.__70);
		el=me.__69=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70%;';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__69.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_210=document.createElement('div');
		els=me._text_210__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5d0\uc5b4\ucee8-Text 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 200%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_210.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud558\ub098\uc758 \uc2e4\uc678\uae30\uc5d0 \ucd5c\ub300 6\uac1c\uae4c\uc9c0 \uc2e4\ub0b4\uae30\ub97c \uc5f0\uacb0\ud560 \uc218 \uc788\uc5b4 \uac01 \uc2e4\ubcc4\ub85c \uc5d0\uc5b4\ucee8 \uc124\uce58\uac00 \uac00\ub2a5\ud55c \uacf5\uac04\ud6a8\uc728\uc131\uc744 \ub192\uc778 \uc81c\ud488\n\n* \uae30\ubcf8 \uc815\ubcf4\n\ubaa8\ub378\uba85 : PC1NWCK3N\n\uc81c\ud488 \uc911\ub7c9 : 5.6kg\n\uc81c\ud488 \uce58\uc218(\uac00\ub85cx\ub192\uc774x\uae4a\uc774) : 1,198x35x500mm", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_210.ggUpdateText();
		el.appendChild(els);
		me._text_210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_210.ggUpdatePosition=function (useTransition) {
		}
		me.__69.appendChild(me._text_210);
		me.__67.appendChild(me.__69);
		el=me.__68=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uc2a4\ubab0\uc0f7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -29%;';
		hs+='cursor : pointer;';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__68.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		el=me.__116=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__116.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__116.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__116.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__116.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__116.style.transition='border-color 0s';
				if (me.__116.ggCurrentLogicStateBorderColor == 0) {
					me.__116.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__116.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__116.logicBlock_bordercolor();
		me.__116.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__116.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_7110=document.createElement('div');
		els=me._image_7110__img=document.createElement('img');
		els.className='ggskin ggskin_image_7110';
		hs=basePath + 'images/image_7110.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-Image 711";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7110.ggUpdatePosition=function (useTransition) {
		}
		me.__116.appendChild(me._image_7110);
		me.__68.appendChild(me.__116);
		el=me.__215=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__215.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__215.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__215.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__215.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__215.style.transition='border-color 0s';
				if (me.__215.ggCurrentLogicStateBorderColor == 0) {
					me.__215.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__215.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__215.logicBlock_bordercolor();
		me.__215.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__215.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8110=document.createElement('div');
		els=me._image_8110__img=document.createElement('img');
		els.className='ggskin ggskin_image_8110';
		hs=basePath + 'images/image_8110.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-Image 811";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8110.ggUpdatePosition=function (useTransition) {
		}
		me.__215.appendChild(me._image_8110);
		me.__68.appendChild(me.__215);
		el=me.__314=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 50%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__314.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__314.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__314.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__314.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__314.style.transition='border-color 0s';
				if (me.__314.ggCurrentLogicStateBorderColor == 0) {
					me.__314.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__314.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__314.logicBlock_bordercolor();
		me.__314.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__314.ggUpdatePosition=function (useTransition) {
		}
		el=me._mage_9110=document.createElement('div');
		els=me._mage_9110__img=document.createElement('img');
		els.className='ggskin ggskin_mage_9110';
		hs=basePath + 'images/mage_9110.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-mage 911";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mage_9110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mage_9110.ggUpdatePosition=function (useTransition) {
		}
		me.__314.appendChild(me._mage_9110);
		me.__68.appendChild(me.__314);
		el=me.__414=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 75%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__414.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__414.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__414.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__414.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__414.style.transition='border-color 0s';
				if (me.__414.ggCurrentLogicStateBorderColor == 0) {
					me.__414.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__414.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__414.logicBlock_bordercolor();
		me.__414.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__414.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_10110=document.createElement('div');
		els=me._image_10110__img=document.createElement('img');
		els.className='ggskin ggskin_image_10110';
		hs=basePath + 'images/image_10110.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-Image 1011";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10110.ggUpdatePosition=function (useTransition) {
		}
		me.__414.appendChild(me._image_10110);
		me.__68.appendChild(me.__414);
		me.__67.appendChild(me.__68);
		me._container_30.appendChild(me.__67);
		me._popupminnerbg0.appendChild(me._container_30);
		el=me._image_1410=document.createElement('div');
		els=me._image_1410__img=document.createElement('img');
		els.className='ggskin ggskin_image_1410';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA01JREFUeF7t3W1uwjAMBuD2ZMDJgJMBJ2PypKD92Do78cfrxJGmTQIa10+dhKpT9vf7/d6qwWRgLxAYi+9ACgTLo0DAPAqkQNAyABZPzSEFApYBsHCqQgoELANg4Ygr5Pl8bvf7faPf1K7X63Y+n79/Vm4tL5QD+pvycTqdttvtJkqLCIQOThi/NYKRdi6KFPjNmnlhgxx12nK1IgonL4/Hgz2CsEEul8tnmDq6WFdC4WBQrmj4IhROY4Ps+8453mdemX344mK0pHFvqrNBuBWywvAlxaCchIO0FdhsldKDIRnG2RVCSzmqEmmTBCM9tvf7ezAoRpNJnQ7cG9AMKF7nzq6QdjV6BeZ99R/153nOYpDVKsUTg3LbBbIKijfGEM'+
			'jsKBEYwyCzokRhqIDMhhKJoQYyC0o0hipIdhQEDHWQrCgoGCYg2VCQMMxAsqCgYZiCoKMgYpiDoKKgYriAoKEgY7iBoKCgY7iCRKNkwHAHiULJghEC4o2SCSMMxAslG0YoiDVKRoxwECuUrBgQINoomTFgQLRQsmNAgYyi0Of/+lcJeu2vhvbMWPdTJ0cnOfJa71Xe0ycaBlyFtKR6oCBiwIKMDF+cSkHFgAaxQkHGgAfRRkHHSAGihZIBIw3IKEoWjALhrACc3wP3PeS389dYBmepEngQDYyGnAEFGkQTIwsKLIgFRgYUSBBLDHQUOBAPDGQUKJBeDJqs6/a78vp8BIM+O/LlEWn1BVEhGhijt+5RUMJBNDFmQAkFscDIjhIGYomRGSUExAMjK4o7iCdGRhRXkAiMbChuIJEYmVBcQBAwsqCYgyBhZEAxBUHEQEcx'+
			'A0HGQEYxAcmAgYqiDpIJAxFFFSQjBhqKGkhmDCQUFZAZMFBQhkFmwkBAGQKZESMapRtkZoxIlC6QFTCiUMQgK2FEoIhAVsTwRmGD1IYu/funmGzo0lMdKM86aT7T15OH8F3aKAEzYvQOX+EgM2P0ooTt0rYChhTFpEI4k/pKGBIUSV7Yq6z/ni6XdKo5ySIc62iil+ZFBNJQXq/XZ19cKse2hTdCcqJioBHk5xbevXkRg0Sd8Cr9FgiYdIEUCFgGwMKpCikQsAyAhVMVUiBgGQALpyqkQMAyABbOFwOw+BFBH87/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5d0\uc5b4\ucee8-Image 141";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1410.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1410.onclick=function (e) {
			me._popupm0.style.transition='none';
			me._popupm0.style.visibility='hidden';
			me._popupm0.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				me.__25.style.transition='none';
				me.__25.style.visibility=(Number(me.__25.style.opacity)>0||!me.__25.style.opacity)?'inherit':'hidden';
				me.__25.ggVisible=true;
			}
		}
		me._image_1410.ggUpdatePosition=function (useTransition) {
		}
		me._popupminnerbg0.appendChild(me._image_1410);
		me._m2.appendChild(me._popupminnerbg0);
		me._popupmbg0.appendChild(me._m2);
		me._popupm0.appendChild(me._popupmbg0);
		me.divSkin.appendChild(me._popupm0);
		el=me._infopopup=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-info-popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infopopup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infopopup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infopopup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infopopup.style.transition='';
				if (me._infopopup.ggCurrentLogicStateVisible == 0) {
					me._infopopup.style.visibility="hidden";
					me._infopopup.ggVisible=false;
				}
				else {
					me._infopopup.style.visibility="hidden";
					me._infopopup.ggVisible=false;
				}
			}
		}
		me._infopopup.logicBlock_visible();
		me._infopopup.ggUpdatePosition=function (useTransition) {
		}
		el=me.__58=document.createElement('div');
		el.ggId="\uc778\ub355\uc158\ud31d\uc5c5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 537px;';
		hs+='left : calc(50% - ((1000px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((537px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1000px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_11=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-Rectangle 11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__64=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\ub85c\uace0 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 4%;';
		hs+='position : absolute;';
		hs+='top : 5.5%;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		el=me.__65=document.createElement('div');
		els=me.__65__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc778\ub355\uc158-\ud68c\uc0ac\uba85";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__65.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__65.ggUpdateText();
		el.appendChild(els);
		me.__65.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		me.__64.appendChild(me.__65);
		me._rectangle_11.appendChild(me.__64);
		el=me.__59=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 320px;';
		hs+='left : 65px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me._contextbox=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-context-box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 350px;';
		hs+='left : 530px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._contextbox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contextbox.ggUpdatePosition=function (useTransition) {
		}
		el=me.__62=document.createElement('div');
		els=me.__62__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc778\ub355\uc158-\ub0c9\uc7a5\uace0\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 75px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 113.429%;';
		hs+='pointer-events:auto;';
		hs+='line-height:40px; word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 800;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__62.ggUpdateText=function() {
			var params = [];
			var hs = player._("SK\ub9e4\uc9c1 2\uad6c \uc778\ub355\uc158\n265*492", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__62.ggUpdateText();
		el.appendChild(els);
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_21=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-Rectangle 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -21px;';
		hs+='cursor : default;';
		hs+='height : 2.5%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_21.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me._rectangle_21);
		el=me.__63=document.createElement('div');
		els=me.__63__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uae30\ubcf8\ud615";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #f29900;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 29px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__63.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uae30\ubcf8\ud615\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__63.ggUpdateText();
		el.appendChild(els);
		me.__63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__63);
		me._contextbox.appendChild(me.__62);
		el=me._container_21=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-Container 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 230px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_21.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1111=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-Container 1111";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1111.ggUpdatePosition=function (useTransition) {
		}
		el=me.__61=document.createElement('div');
		els=me.__61__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc778\ub355\uc158-\ub0c9\uc7a5\uace0 \uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__61.ggUpdateText=function() {
			var params = [];
			var hs = player._("1~9\ub2e8\uacc4\uc758 \ucd9c\ub825 \uc870\uc808\uc774 \uac00\ub2a5\ud574 \ucd5c\uc0c1\uc758 \uc870\ub9ac \uacb0\uacfc\ubb3c\uc744 \uc5bb\uc744 \uc218 \uc788\uac8c \ub3c4\uc640\ub4dc\ub9bd\ub2c8\ub2e4. \n\n* \uae30\ubcf8 \uc0ac\uc591\n\ubaa8\ub378\uba85 : IHR B200E\n\ubc84\ub108 \uc0ac\uc591 : 2\uad6c(\uc778\ub355\uc158 2\uad6c)\n\uc0c1\ud310 : \uc138\ub77c\ubbf9 \uae00\ub77c\uc2a4\n\uc0c9\uc0c1 : \ube14\ub799\n\uc870\uc791\ubc29\ubc95 : \ud130\uce58\uc2dd\n\ubb34\uac8c : 5.1kg\n\uc81c\ud488 \ud06c\uae30(\uac00\ub85cx\uc138\ub85cx\ub192\uc774) : 285x512x744mm", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__61.ggUpdateText();
		el.appendChild(els);
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		me._container_1111.appendChild(me.__61);
		me._container_21.appendChild(me._container_1111);
		me._contextbox.appendChild(me._container_21);
		me.__59.appendChild(me._contextbox);
		el=me.__60=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me.__115=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\ubc84\ud2bc1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 37%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__115.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__115.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__115.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__115.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__115.style.transition='background-color 0s';
				if (me.__115.ggCurrentLogicStateBackgroundColor == 0) {
					me.__115.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__115.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__115.logicBlock_backgroundcolor();
		me.__115.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__115.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me.__115);
		el=me.__214=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\ubc84\ud2bc2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 45%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__214.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__214.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__214.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__214.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__214.style.transition='background-color 0s';
				if (me.__214.ggCurrentLogicStateBackgroundColor == 0) {
					me.__214.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__214.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__214.logicBlock_backgroundcolor();
		me.__214.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__214.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me.__214);
		el=me.__313=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\ubc84\ud2bc3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 53%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__313.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__313.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__313.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__313.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__313.style.transition='background-color 0s';
				if (me.__313.ggCurrentLogicStateBackgroundColor == 0) {
					me.__313.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__313.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__313.logicBlock_backgroundcolor();
		me.__313.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__313.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me.__313);
		el=me.__413=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\ubc84\ud2bc4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 61%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__413.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__413.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__413.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__413.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__413.style.transition='background-color 0s';
				if (me.__413.ggCurrentLogicStateBackgroundColor == 0) {
					me.__413.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__413.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__413.logicBlock_backgroundcolor();
		me.__413.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__413.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me.__413);
		me.__59.appendChild(me.__60);
		el=me.__114=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc774\ubbf8\uc9c0\ubc30\uacbd-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__114.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__114.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__114.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__114.style.transition='opacity 0s';
				if (me.__114.ggCurrentLogicStateAlpha == 0) {
					me.__114.style.visibility=me.__114.ggVisible?'inherit':'hidden';
					me.__114.style.opacity=1;
				}
				else {
					me.__114.style.visibility=me.__114.ggVisible?'inherit':'hidden';
					me.__114.style.opacity=0.01;
				}
			}
		}
		me.__114.logicBlock_alpha();
		me.__114.ggUpdatePosition=function (useTransition) {
		}
		el=me._mage_1111=document.createElement('div');
		els=me._mage_1111__img=document.createElement('img');
		els.className='ggskin ggskin_mage_1111';
		hs=basePath + 'images/mage_1111.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-mage 1111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mage_1111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mage_1111.ggUpdatePosition=function (useTransition) {
		}
		me.__114.appendChild(me._mage_1111);
		me.__59.appendChild(me.__114);
		el=me.__213=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc774\ubbf8\uc9c0\ubc30\uacbd-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__213.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__213.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__213.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__213.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__213.style.transition='opacity 0s';
				if (me.__213.ggCurrentLogicStateAlpha == 0) {
					me.__213.style.visibility=me.__213.ggVisible?'inherit':'hidden';
					me.__213.style.opacity=1;
				}
				else {
					me.__213.style.visibility=me.__213.ggVisible?'inherit':'hidden';
					me.__213.style.opacity=0.01;
				}
			}
		}
		me.__213.logicBlock_alpha();
		me.__213.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_21=document.createElement('div');
		els=me._image_21__img=document.createElement('img');
		els.className='ggskin ggskin_image_21';
		hs=basePath + 'images/image_21.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-Image 21";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_21.ggUpdatePosition=function (useTransition) {
		}
		me.__213.appendChild(me._image_21);
		me.__59.appendChild(me.__213);
		el=me.__312=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc774\ubbf8\uc9c0\ubc30\uacbd-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__312.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__312.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__312.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__312.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__312.style.transition='opacity 0s';
				if (me.__312.ggCurrentLogicStateAlpha == 0) {
					me.__312.style.visibility=me.__312.ggVisible?'inherit':'hidden';
					me.__312.style.opacity=1;
				}
				else {
					me.__312.style.visibility=me.__312.ggVisible?'inherit':'hidden';
					me.__312.style.opacity=0.01;
				}
			}
		}
		me.__312.logicBlock_alpha();
		me.__312.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_31=document.createElement('div');
		els=me._image_31__img=document.createElement('img');
		els.className='ggskin ggskin_image_31';
		hs=basePath + 'images/image_31.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-Image 31";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_31.ggUpdatePosition=function (useTransition) {
		}
		me.__312.appendChild(me._image_31);
		me.__59.appendChild(me.__312);
		el=me.__412=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc774\ubbf8\uc9c0\ubc30\uacbd-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__412.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__412.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__412.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__412.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__412.style.transition='opacity 0s';
				if (me.__412.ggCurrentLogicStateAlpha == 0) {
					me.__412.style.visibility=me.__412.ggVisible?'inherit':'hidden';
					me.__412.style.opacity=1;
				}
				else {
					me.__412.style.visibility=me.__412.ggVisible?'inherit':'hidden';
					me.__412.style.opacity=0.01;
				}
			}
		}
		me.__412.logicBlock_alpha();
		me.__412.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_41=document.createElement('div');
		els=me._image_41__img=document.createElement('img');
		els.className='ggskin ggskin_image_41';
		hs=basePath + 'images/image_41.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-Image 41";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_41.ggUpdatePosition=function (useTransition) {
		}
		me.__412.appendChild(me._image_41);
		me.__59.appendChild(me.__412);
		el=me._smallcontianer=document.createElement('div');
		el.ggId="small-contianer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -50px;';
		hs+='height : 28%;';
		hs+='left : 336px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallcontianer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallcontianer.ggUpdatePosition=function (useTransition) {
		}
		el=me._small_4=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0.22%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_4.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me._small_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__411=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__411.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__411.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__411.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__411.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__411.style.transition='border-color 500ms ease 0ms';
				if (me.__411.ggCurrentLogicStateBorderColor == 0) {
					me.__411.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__411.ggCurrentLogicStateBorderColor == 1) {
					me.__411.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__411.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__411.logicBlock_bordercolor();
		me.__411.ggUpdatePosition=function (useTransition) {
		}
		me._small_4.appendChild(me.__411);
		el=me._smallimage4=document.createElement('div');
		els=me._smallimage4__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage4';
		hs=basePath + 'images/smallimage4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-small-image-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage4.ggUpdatePosition=function (useTransition) {
		}
		me._small_4.appendChild(me._smallimage4);
		me._smallcontianer.appendChild(me._small_4);
		el=me._small_1=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -342.63%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_1.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__113=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__113.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_1') == false))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__113.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__113.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__113.style.transition='border-color 500ms ease 0ms';
				if (me.__113.ggCurrentLogicStateBorderColor == 0) {
					me.__113.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__113.ggCurrentLogicStateBorderColor == 1) {
					me.__113.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__113.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__113.logicBlock_bordercolor();
		me.__113.ggUpdatePosition=function (useTransition) {
		}
		me._small_1.appendChild(me.__113);
		el=me._smallimage1=document.createElement('div');
		els=me._smallimage1__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage1';
		hs=basePath + 'images/smallimage1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-small-image-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage1.ggUpdatePosition=function (useTransition) {
		}
		me._small_1.appendChild(me._smallimage1);
		me._smallcontianer.appendChild(me._small_1);
		el=me._small_2=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -228.35%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_2.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__212=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__212.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__212.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__212.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__212.style.transition='border-color 500ms ease 0ms';
				if (me.__212.ggCurrentLogicStateBorderColor == 0) {
					me.__212.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__212.ggCurrentLogicStateBorderColor == 1) {
					me.__212.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__212.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__212.logicBlock_bordercolor();
		me.__212.ggUpdatePosition=function (useTransition) {
		}
		me._small_2.appendChild(me.__212);
		el=me._smallimage2=document.createElement('div');
		els=me._smallimage2__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage2';
		hs=basePath + 'images/smallimage2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-small-image-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage2.ggUpdatePosition=function (useTransition) {
		}
		me._small_2.appendChild(me._smallimage2);
		me._smallcontianer.appendChild(me._small_2);
		el=me._small_3=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -114.06%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_3.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__311=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__311.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__311.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__311.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__311.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__311.style.transition='border-color 500ms ease 0ms';
				if (me.__311.ggCurrentLogicStateBorderColor == 0) {
					me.__311.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__311.ggCurrentLogicStateBorderColor == 1) {
					me.__311.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__311.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__311.logicBlock_bordercolor();
		me.__311.ggUpdatePosition=function (useTransition) {
		}
		me._small_3.appendChild(me.__311);
		el=me._smallimage3=document.createElement('div');
		els=me._smallimage3__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage3';
		hs=basePath + 'images/smallimage3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-small-image-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage3.ggUpdatePosition=function (useTransition) {
		}
		me._small_3.appendChild(me._smallimage3);
		me._smallcontianer.appendChild(me._small_3);
		me.__59.appendChild(me._smallcontianer);
		me._rectangle_11.appendChild(me.__59);
		el=me._rectangle_1222222=document.createElement('div');
		el.ggId="Rectangle 1222222";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1222222.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1222222.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_11.appendChild(me._rectangle_1222222);
		me.__58.appendChild(me._rectangle_11);
		el=me._image_50=document.createElement('div');
		els=me._image_50__img=document.createElement('img');
		els.className='ggskin ggskin_image_50';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAitJREFUeF7tmuFOwzAMhLM3gycDngzebJPFgqKqaWznzp5IKvEH0vjuyzlbQ29l8eu2uP+yAewELE5gt8DiAdib4G6B3QKLE/C2wFspRX4+X4ifS5MHwPfTfPX+Xkr5SQQhxj8aTaJFNKkuKwBZcSl2vLIgiHlZELceK4BeQREQDeFKy5e2Pa0AxOixBVr6URCuzIsetS/1wMblqDgbArS+B4CwgIpQ7Va/g+B1vQAoYgYg4OZNvdIRRxF1UotWZyYBVSdN3LMAdX4EAGY7UM0jWqBNK1oser7TLkYlAN0OIebRCUBBCDPPAjCzJ4SaZwLwQAg3zwZggZBiPgKABoI8uZ09Ytc9hfpsgf4U6H2bHa1w7z6q+agEaD8djhDo5q'+
			'MBaNohJPYt6agWaGv2jtXqGPVpTq9vLL+PBqDdC0LiH90CWvOhbRCVAKv5MAgRAEbm//X3gJH52uvacZb9TTWWmQCrKet4lcHRIBYArxnvfSOf3b8zAMyamL3fBAMNACUeNc8QBhIAWjR6vlMYKAAssax5/2AgALBFUuefBUAV12SWVmcGAE1UZ+ei1PMCoIgZbtkv8t/hLPPakyXTo7QnAfeLlTIVV6y454wx5SUpERplXpMEtRZrAnrxVxecWPWzW3t61MdqVgAion1JSuImxbLfE2xflaO2QF0FOdiUQpnGj4lwafIkAJzi3Ok2gFz++dV3AvLXIFfBTkAu//zqOwH5a5CrYPkEPADiMJpBN5ipjwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 3%;';
		hs+='position : absolute;';
		hs+='right : 4%;';
		hs+='top : 5.5%;';
		hs+='visibility : inherit;';
		hs+='width : 1.8%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_50.onclick=function (e) {
			me._infopopup.style.transition='none';
			me._infopopup.style.visibility='hidden';
			me._infopopup.ggVisible=false;
		}
		me._image_50.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me._image_50);
		me._infopopup.appendChild(me.__58);
		el=me._popupbg=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-popup-bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 1275px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popupbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popupbg.ggUpdatePosition=function (useTransition) {
		}
		me._infopopup.appendChild(me._popupbg);
		me.divSkin.appendChild(me._infopopup);
		el=me._popupm=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-popup-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='word-break:keep-all; font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popupm.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popupm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popupm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popupm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popupm.style.transition='';
				if (me._popupm.ggCurrentLogicStateVisible == 0) {
					me._popupm.style.visibility="hidden";
					me._popupm.ggVisible=false;
				}
				else {
					me._popupm.style.visibility="hidden";
					me._popupm.ggVisible=false;
				}
			}
		}
		me._popupm.logicBlock_visible();
		me._popupm.ggUpdatePosition=function (useTransition) {
		}
		el=me._popupmbg=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-popup-m-bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popupmbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popupmbg.ggUpdatePosition=function (useTransition) {
		}
		el=me._m1=document.createElement('div');
		el.ggId="\uc778\ub355\uc158\ud31d\uc5c5-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90%;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m1.ggUpdatePosition=function (useTransition) {
		}
		el=me._popupminnerbg=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-popup-m-inner-bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popupminnerbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popupminnerbg.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_3=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90%;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__55=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc81c\ud488\uc18c\uac1c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__56=document.createElement('div');
		els=me.__56__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc778\ub355\uc158-\uc81c\ud488\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__56.ggUpdateText=function() {
			var params = [];
			var hs = player._("SK\ub9e4\uc9c1 2\uad6c \uc778\ub355\uc158 265*492", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__56.ggUpdateText();
		el.appendChild(els);
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		el=me.__57=document.createElement('div');
		els=me.__57__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc778\ub355\uc158-\uc81c\ud488\uba85 \ubd80\uc81c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -45px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:0px; word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__57.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\uc804\ud558\uac8c \uce5c\uc808\ud558\uac8c \uc27d\uac8c \uc870\ub9ac\uc2dc\uac04\uc774 \uc990\uac70\uc6b4 \ub9de\ucda4 \uc8fc\ubc29\uac00\uad6c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__57.ggUpdateText();
		el.appendChild(els);
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_111=document.createElement('div');
		els=me._text_111__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc778\ub355\uc158-Text 111";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(0,0,0,0.784314);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_111.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_111.ggUpdateText();
		el.appendChild(els);
		me._text_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_111.ggUpdatePosition=function (useTransition) {
		}
		me.__57.appendChild(me._text_111);
		me.__56.appendChild(me.__57);
		me.__55.appendChild(me.__56);
		el=me._text_3333=document.createElement('div');
		els=me._text_3333__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3333";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #f29900;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3333.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc120\ud0dd\ud615", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3333.ggUpdateText();
		el.appendChild(els);
		me._text_3333.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3333.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me._text_3333);
		me._container_3.appendChild(me.__55);
		el=me.__51=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc81c\ud488\uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me.__54=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc81c\ud488\uc774\ubbf8\uc9c0 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_666=document.createElement('div');
		els=me._image_666__img=document.createElement('img');
		els.className='ggskin ggskin_image_666';
		hs=basePath + 'images/image_666.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-Image 666";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90.75%;';
		hs+='left : calc(50% - ((82.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90.75% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 82.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_666.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_666.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_666.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_666.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_666.style.transition='opacity 0s';
				if (me._image_666.ggCurrentLogicStateAlpha == 0) {
					me._image_666.style.visibility=me._image_666.ggVisible?'inherit':'hidden';
					me._image_666.style.opacity=1;
				}
				else {
					me._image_666.style.visibility=me._image_666.ggVisible?'inherit':'hidden';
					me._image_666.style.opacity=0.01;
				}
			}
		}
		me._image_666.logicBlock_alpha();
		me._image_666.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_666.ggUpdatePosition=function (useTransition) {
		}
		me.__54.appendChild(me._image_666);
		el=me._image_111=document.createElement('div');
		els=me._image_111__img=document.createElement('img');
		els.className='ggskin ggskin_image_111';
		hs=basePath + 'images/image_111.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-Image 111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_111.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_111.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_111.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_111.style.transition='opacity 0s';
				if (me._image_111.ggCurrentLogicStateAlpha == 0) {
					me._image_111.style.visibility=me._image_111.ggVisible?'inherit':'hidden';
					me._image_111.style.opacity=1;
				}
				else {
					me._image_111.style.visibility=me._image_111.ggVisible?'inherit':'hidden';
					me._image_111.style.opacity=0.01;
				}
			}
		}
		me._image_111.logicBlock_alpha();
		me._image_111.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_111.ggUpdatePosition=function (useTransition) {
		}
		me.__54.appendChild(me._image_111);
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs=basePath + 'images/image_12.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_12.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_12.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_12.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_12.style.transition='opacity 0s';
				if (me._image_12.ggCurrentLogicStateAlpha == 0) {
					me._image_12.style.visibility=me._image_12.ggVisible?'inherit':'hidden';
					me._image_12.style.opacity=1;
				}
				else {
					me._image_12.style.visibility=me._image_12.ggVisible?'inherit':'hidden';
					me._image_12.style.opacity=0.01;
				}
			}
		}
		me._image_12.logicBlock_alpha();
		me._image_12.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_12.ggUpdatePosition=function (useTransition) {
		}
		me.__54.appendChild(me._image_12);
		el=me._image_131=document.createElement('div');
		els=me._image_131__img=document.createElement('img');
		els.className='ggskin ggskin_image_131';
		hs=basePath + 'images/image_131.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-Image 131";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_131.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_131.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_131.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_131.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_131.style.transition='opacity 0s';
				if (me._image_131.ggCurrentLogicStateAlpha == 0) {
					me._image_131.style.visibility=me._image_131.ggVisible?'inherit':'hidden';
					me._image_131.style.opacity=1;
				}
				else {
					me._image_131.style.visibility=me._image_131.ggVisible?'inherit':'hidden';
					me._image_131.style.opacity=0.01;
				}
			}
		}
		me._image_131.logicBlock_alpha();
		me._image_131.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me._image_131.ggUpdatePosition=function (useTransition) {
		}
		me.__54.appendChild(me._image_131);
		me.__51.appendChild(me.__54);
		el=me.__53=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc81c\ud488\uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70%;';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_21=document.createElement('div');
		els=me._text_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc778\ub355\uc158-Text 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 200%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_21.ggUpdateText=function() {
			var params = [];
			var hs = player._("1~9\ub2e8\uacc4\uc758 \ucd9c\ub825 \uc870\uc808\uc774 \uac00\ub2a5\ud574 \ucd5c\uc0c1\uc758 \uc870\ub9ac \uacb0\uacfc\ubb3c\uc744 \uc5bb\uc744 \uc218 \uc788\uac8c \ub3c4\uc640\ub4dc\ub9bd\ub2c8\ub2e4. \n\n* \uae30\ubcf8 \uc0ac\uc591\n\ubaa8\ub378\uba85 : IHR B200E\n\ubc84\ub108 \uc0ac\uc591 : 2\uad6c(\uc778\ub355\uc158 2\uad6c)\n\uc0c1\ud310 : \uc138\ub77c\ubbf9 \uae00\ub77c\uc2a4\n\uc0c9\uc0c1 : \ube14\ub799\n\uc870\uc791\ubc29\ubc95 : \ud130\uce58\uc2dd\n\ubb34\uac8c : 5.1kg\n\uc81c\ud488 \ud06c\uae30(\uac00\ub85cx\uc138\ub85cx\ub192\uc774) : 285x512x744mm", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_21.ggUpdateText();
		el.appendChild(els);
		me._text_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_21.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me._text_21);
		me.__51.appendChild(me.__53);
		el=me.__52=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc81c\ud488\uc2a4\ubab0\uc0f7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -29%;';
		hs+='cursor : pointer;';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me.__112=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__112.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__112.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__112.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__112.style.transition='border-color 0s';
				if (me.__112.ggCurrentLogicStateBorderColor == 0) {
					me.__112.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__112.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__112.logicBlock_bordercolor();
		me.__112.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__112.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_711=document.createElement('div');
		els=me._image_711__img=document.createElement('img');
		els.className='ggskin ggskin_image_711';
		hs=basePath + 'images/image_711.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-Image 711";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_711.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_711.ggUpdatePosition=function (useTransition) {
		}
		me.__112.appendChild(me._image_711);
		me.__52.appendChild(me.__112);
		el=me.__211=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__211.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__211.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__211.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__211.style.transition='border-color 0s';
				if (me.__211.ggCurrentLogicStateBorderColor == 0) {
					me.__211.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__211.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__211.logicBlock_bordercolor();
		me.__211.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_811=document.createElement('div');
		els=me._image_811__img=document.createElement('img');
		els.className='ggskin ggskin_image_811';
		hs=basePath + 'images/image_811.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-Image 811";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_811.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_811.ggUpdatePosition=function (useTransition) {
		}
		me.__211.appendChild(me._image_811);
		me.__52.appendChild(me.__211);
		el=me.__310=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 50%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__310.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__310.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__310.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__310.style.transition='border-color 0s';
				if (me.__310.ggCurrentLogicStateBorderColor == 0) {
					me.__310.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__310.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__310.logicBlock_bordercolor();
		me.__310.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__310.ggUpdatePosition=function (useTransition) {
		}
		el=me._mage_911=document.createElement('div');
		els=me._mage_911__img=document.createElement('img');
		els.className='ggskin ggskin_mage_911';
		hs=basePath + 'images/mage_911.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-mage 911";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mage_911.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mage_911.ggUpdatePosition=function (useTransition) {
		}
		me.__310.appendChild(me._mage_911);
		me.__52.appendChild(me.__310);
		el=me.__410=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 75%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__410.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__410.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__410.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__410.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__410.style.transition='border-color 0s';
				if (me.__410.ggCurrentLogicStateBorderColor == 0) {
					me.__410.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__410.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__410.logicBlock_bordercolor();
		me.__410.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__410.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1011=document.createElement('div');
		els=me._image_1011__img=document.createElement('img');
		els.className='ggskin ggskin_image_1011';
		hs=basePath + 'images/image_1011.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-Image 1011";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1011.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1011.ggUpdatePosition=function (useTransition) {
		}
		me.__410.appendChild(me._image_1011);
		me.__52.appendChild(me.__410);
		me.__51.appendChild(me.__52);
		me._container_3.appendChild(me.__51);
		me._popupminnerbg.appendChild(me._container_3);
		el=me._image_141=document.createElement('div');
		els=me._image_141__img=document.createElement('img');
		els.className='ggskin ggskin_image_141';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA01JREFUeF7t3W1uwjAMBuD2ZMDJgJMBJ2PypKD92Do78cfrxJGmTQIa10+dhKpT9vf7/d6qwWRgLxAYi+9ACgTLo0DAPAqkQNAyABZPzSEFApYBsHCqQgoELANg4Ygr5Pl8bvf7faPf1K7X63Y+n79/Vm4tL5QD+pvycTqdttvtJkqLCIQOThi/NYKRdi6KFPjNmnlhgxx12nK1IgonL4/Hgz2CsEEul8tnmDq6WFdC4WBQrmj4IhROY4Ps+8453mdemX344mK0pHFvqrNBuBWywvAlxaCchIO0FdhsldKDIRnG2RVCSzmqEmmTBCM9tvf7ezAoRpNJnQ7cG9AMKF7nzq6QdjV6BeZ99R/153nOYpDVKsUTg3LbBbIKijfGEM'+
			'jsKBEYwyCzokRhqIDMhhKJoQYyC0o0hipIdhQEDHWQrCgoGCYg2VCQMMxAsqCgYZiCoKMgYpiDoKKgYriAoKEgY7iBoKCgY7iCRKNkwHAHiULJghEC4o2SCSMMxAslG0YoiDVKRoxwECuUrBgQINoomTFgQLRQsmNAgYyi0Of/+lcJeu2vhvbMWPdTJ0cnOfJa71Xe0ycaBlyFtKR6oCBiwIKMDF+cSkHFgAaxQkHGgAfRRkHHSAGihZIBIw3IKEoWjALhrACc3wP3PeS389dYBmepEngQDYyGnAEFGkQTIwsKLIgFRgYUSBBLDHQUOBAPDGQUKJBeDJqs6/a78vp8BIM+O/LlEWn1BVEhGhijt+5RUMJBNDFmQAkFscDIjhIGYomRGSUExAMjK4o7iCdGRhRXkAiMbChuIJEYmVBcQBAwsqCYgyBhZEAxBUHEQEcx'+
			'A0HGQEYxAcmAgYqiDpIJAxFFFSQjBhqKGkhmDCQUFZAZMFBQhkFmwkBAGQKZESMapRtkZoxIlC6QFTCiUMQgK2FEoIhAVsTwRmGD1IYu/funmGzo0lMdKM86aT7T15OH8F3aKAEzYvQOX+EgM2P0ooTt0rYChhTFpEI4k/pKGBIUSV7Yq6z/ni6XdKo5ySIc62iil+ZFBNJQXq/XZ19cKse2hTdCcqJioBHk5xbevXkRg0Sd8Cr9FgiYdIEUCFgGwMKpCikQsAyAhVMVUiBgGQALpyqkQMAyABbOFwOw+BFBH87/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc778\ub355\uc158-Image 141";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_141.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_141.onclick=function (e) {
			me._popupm.style.transition='none';
			me._popupm.style.visibility='hidden';
			me._popupm.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				me.__25.style.transition='none';
				me.__25.style.visibility=(Number(me.__25.style.opacity)>0||!me.__25.style.opacity)?'inherit':'hidden';
				me.__25.ggVisible=true;
			}
		}
		me._image_141.ggUpdatePosition=function (useTransition) {
		}
		me._popupminnerbg.appendChild(me._image_141);
		me._m1.appendChild(me._popupminnerbg);
		me._popupmbg.appendChild(me._m1);
		me._popupm.appendChild(me._popupmbg);
		me.divSkin.appendChild(me._popupm);
		el=me.__37=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=300;
		el.ggId="\ud0dc\uadf8 \ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 244px;';
		hs+='position : absolute;';
		hs+='top : 145px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			return (me.__37.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__37.ggTimestamp) / me.__37.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__37.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__37.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__37.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__37.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__37.style.transition='';
				if (me.__37.ggCurrentLogicStateVisible == 0) {
					me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
					me.__37.ggVisible=true;
				}
				else {
					me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
					me.__37.ggVisible=true;
				}
			}
		}
		me.__37.logicBlock_visible();
		me.__37.ggActivate=function () {
			player.setVariableValue('vis_tag', !player.getVariableValue('vis_tag'));
		}
		me.__37.ggCurrentLogicStateVisible = -1;
		me.__37.ggUpdateConditionTimer=function () {
			me.__37.logicBlock_visible();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__37);
		el=me.__25=document.createElement('div');
		el.ggId="\uae30\ub2a5\uc774\ub3d9\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 165px;';
		hs+='left : 20%;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__25.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__25.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__25.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__25.style.transition='left 0s, top 0s, transform 0s';
				if (me.__25.ggCurrentLogicStatePosition == 0) {
					me.__25.style.left='10%';
					me.__25.style.top='100px';
				}
				else {
					me.__25.style.left='20%';
					me.__25.style.top='100px';
				}
			}
		}
		me.__25.logicBlock_position();
		me.__25.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__25.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__25.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__25.style.transition='left 0s, top 0s, transform 0s';
				if (me.__25.ggCurrentLogicStateScaling == 0) {
					me.__25.ggParameter.sx = 0.9;
					me.__25.ggParameter.sy = 0.9;
					me.__25.style.transform=parameterToTransform(me.__25.ggParameter);
					skin.updateSize(me.__25);
				}
				else {
					me.__25.ggParameter.sx = 1;
					me.__25.ggParameter.sy = 1;
					me.__25.style.transform=parameterToTransform(me.__25.ggParameter);
					skin.updateSize(me.__25);
				}
			}
		}
		me.__25.logicBlock_scaling();
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		el.ggId="\uac00\uad6c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.onmouseover=function (e) {
			me.elementMouseOver['_32']=true;
			me.__33.logicBlock_visible();
		}
		me.__32.onmouseout=function (e) {
			me.elementMouseOver['_32']=false;
			me.__33.logicBlock_visible();
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 4px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__36.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__36.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__36.style.transition='border-color 0s';
				if (me.__36.ggCurrentLogicStateBorderColor == 0) {
					me.__36.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me.__36.ggCurrentLogicStateBorderColor == 1) {
					me.__36.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__36.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__36.logicBlock_bordercolor();
		me.__36.onclick=function (e) {
			player.openNext("{node19}","");
			me._onoff.style.transition='none';
			me._onoff.style.visibility=(Number(me._onoff.style.opacity)>0||!me._onoff.style.opacity)?'inherit':'hidden';
			me._onoff.ggVisible=true;
			me.__5.style.transition='none';
			me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
			me.__5.ggVisible=true;
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me._rectangle_2);
		el=me._image_20=document.createElement('div');
		els=me._image_20__img=document.createElement('img');
		els.className='ggskin ggskin_image_20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZUlEQVRYhe2YPWgUURSFzxuTmLiggiCKhT+wbmMjooVFopYWgiI2CoIGRKy0SCNYaCMKgTQKIoIIgoiCoAgKYmlpEhZMEdBGJJXZxUSN8bPI7HLnZWZnd3aGKHhg4Mzde+85O7Pz3p11SgFQkXRIUkXSgKTfaTUGTlJN0qSk1865Lx3UNg1sBx6TH+aAMWB1JyaGgPkcTVhMAVviLp1vYoekaS9clfRe0nxn11WStE7SfklW/JOksnNuIbEKGPe+wXAGcb9nH3Dd63urVcGgl3y8WxNe/xte/81JiXdN0qs8TRiNz0bjXCMeeHm7DH9YhBFJLwzfmWRkleHfCjIyY3h/kpEfhs8WZOSn4fVlnwKXgVlz/94BQ3'+
			'k6AE4B00bjI3DaJjxLXn84nJOJKy00rgo42yIBYBFY26WJ3SkaCJg058+BrcBB4KuJn+nSyD3T6wNQAcpANYzNCaiZpLIpfmDiN7s08tL0umDiw2GsHkj6ZWpKhi8k8CxYNNzF8UDR+aLP8F7DO5lB4pCk0eT+OrJi+G/Exz9nZCY9pSVqaQk9bTY6CpTS0xKxJy8jB8KjMPw1v5F2r0hV0rhipv42MajoFB9rxE5l9nXhu+H3nXOZ9xvgkaQTMX2bPFD09li+PsFgFljxNXG8R9KUpL3h+R1gRNI2SUesKWBfRhMour9cAia0tP+MhLFeBxyT9CSjSG4InHNPJd1eYR/nm08BcFLSqKSNYaiu6FSfF0pa+ntDkiYkXXTOvYlkAG/teAgMFHCMGY1rDW1/HdlgeN051+3TsgyAnfY2NUirF6x+FQO7bjVN/QHvchBM'+
			'TCZh9AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '1');
		el.style.transformOrigin='50% 50%';
		me._image_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_20.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me._image_20);
		me.__32.appendChild(me.__36);
		el=me._onoff=document.createElement('div');
		el.ggId="\uac00\uad6conoff\ubc84\ud2bc";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : -104px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._onoff.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._onoff.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._onoff.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._onoff.style.transition='right 0s, top 0s, transform 0s';
				if (me._onoff.ggCurrentLogicStatePosition == 0) {
					me._onoff.style.right='-90px';
					me._onoff.style.top = 'calc(50% - (30px / 2) + (0px / 2) + -5px)';
				}
				else {
					me._onoff.style.right='-104px';
					me._onoff.style.top='calc(50% - ((30px + 0px) / 2) + 0px)';
				}
			}
		}
		me._onoff.logicBlock_position();
		me._onoff.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._onoff.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._onoff.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._onoff.style.transition='right 0s, top 0s, transform 0s';
				if (me._onoff.ggCurrentLogicStateScaling == 0) {
					me._onoff.ggParameter.sx = 0.8;
					me._onoff.ggParameter.sy = 0.8;
					me._onoff.style.transform=parameterToTransform(me._onoff.ggParameter);
					skin.updateSize(me._onoff);
				}
				else {
					me._onoff.ggParameter.sx = 1;
					me._onoff.ggParameter.sy = 1;
					me._onoff.style.transform=parameterToTransform(me._onoff.ggParameter);
					skin.updateSize(me._onoff);
				}
			}
		}
		me._onoff.logicBlock_scaling();
		me._onoff.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc628\uc624\ud504") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._onoff.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._onoff.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._onoff.style.transition='right 0s, top 0s, transform 0s';
				if (me._onoff.ggCurrentLogicStateVisible == 0) {
					me._onoff.style.visibility=(Number(me._onoff.style.opacity)>0||!me._onoff.style.opacity)?'inherit':'hidden';
					me._onoff.ggVisible=true;
				}
				else {
					me._onoff.style.visibility="hidden";
					me._onoff.ggVisible=false;
				}
			}
		}
		me._onoff.logicBlock_visible();
		me._onoff.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
		el.ggId="\uac00\uad6c\uce74\ud14c\uace0\ub9ac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.onclick=function (e) {
			player.setVariableValue('vis_onoff', !player.getVariableValue('vis_onoff'));
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me._off=document.createElement('div');
		el.ggId="\uac00\uad6cOFF";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off.style.transition='';
				if (me._off.ggCurrentLogicStateVisible == 0) {
					me._off.style.visibility=(Number(me._off.style.opacity)>0||!me._off.style.opacity)?'inherit':'hidden';
					me._off.ggVisible=true;
				}
				else {
					me._off.style.visibility="hidden";
					me._off.ggVisible=false;
				}
			}
		}
		me._off.logicBlock_visible();
		me._off.onclick=function (e) {
			player.openNext("{node19}","$(cur)");
		}
		me._off.ggUpdatePosition=function (useTransition) {
		}
		el=me._off0=document.createElement('div');
		els=me._off0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px 7px 7px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off0.ggUpdateText=function() {
			var params = [];
			var hs = player._("OFF\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off0.ggUpdateText();
		el.appendChild(els);
		me._off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off0.ggUpdatePosition=function (useTransition) {
		}
		me._off.appendChild(me._off0);
		me.__35.appendChild(me._off);
		el=me._on=document.createElement('div');
		el.ggId="\uac00\uad6cON";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._on.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._on.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._on.style.transition='left 0s, top 0s';
				if (me._on.ggCurrentLogicStatePosition == 0) {
					me._on.style.left='0px';
					me._on.style.top='0px';
				}
				else {
					me._on.style.left='0px';
					me._on.style.top='0px';
				}
			}
		}
		me._on.logicBlock_position();
		me._on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on.style.transition='left 0s, top 0s';
				if (me._on.ggCurrentLogicStateVisible == 0) {
					me._on.style.visibility=(Number(me._on.style.opacity)>0||!me._on.style.opacity)?'inherit':'hidden';
					me._on.ggVisible=true;
				}
				else {
					me._on.style.visibility="hidden";
					me._on.ggVisible=false;
				}
			}
		}
		me._on.logicBlock_visible();
		me._on.onclick=function (e) {
			player.openNext("{node18}","$(cur)");
		}
		me._on.ggUpdatePosition=function (useTransition) {
		}
		el=me._on0=document.createElement('div');
		els=me._on0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px 7px 7px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on0.ggUpdateText=function() {
			var params = [];
			var hs = player._("ON\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on0.ggUpdateText();
		el.appendChild(els);
		me._on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on0.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._on0);
		me.__35.appendChild(me._on);
		me._onoff.appendChild(me.__35);
		el=me.__34=document.createElement('div');
		el.ggId="\uc6d0";
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 3px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '99');
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_onoff') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__34.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__34.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__34.style.transition='left 500ms linear 0ms, top 500ms linear 0ms';
				if (me.__34.ggCurrentLogicStatePosition == 0) {
					me.__34.style.left='66px';
					me.__34.style.top = 'calc(50% - (20px / 2) + (0px / 2) + 3px)';
				}
				else {
					me.__34.style.left='6px';
					me.__34.style.top='calc(50% - ((20px + 0px) / 2) + 3px)';
				}
			}
		}
		me.__34.logicBlock_position();
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me._onoff.appendChild(me.__34);
		me.__32.appendChild(me._onoff);
		el=me.__33=document.createElement('div');
		els=me.__33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc815\ubcf4\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : -110px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__33.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON\/OFF", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__33.ggUpdateText();
		el.appendChild(els);
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_32'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__33.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__33.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__33.style.transition='';
				if (me.__33.ggCurrentLogicStateVisible == 0) {
					me.__33.style.visibility="hidden";
					me.__33.ggVisible=false;
				}
				else if (me.__33.ggCurrentLogicStateVisible == 1) {
					me.__33.style.visibility=(Number(me.__33.style.opacity)>0||!me.__33.style.opacity)?'inherit':'hidden';
					me.__33.ggVisible=true;
				}
				else {
					me.__33.style.visibility="hidden";
					me.__33.ggVisible=false;
				}
			}
		}
		me.__33.logicBlock_visible();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me.__33);
		me.__25.appendChild(me.__32);
		el=me.__29=document.createElement('div');
		el.ggId="\uc218\uce58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.onclick=function (e) {
			me.__5.style.transition='none';
			me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
			me.__5.ggVisible=true;
			player.setMediaVisibility("\ub0c9\uc7a5\uace0\uce58\uc218","0",0);
			player.setMediaVisibility("\ucc3d\ubb381","0",0);
			player.setMediaVisibility("\ucc3d\ubb382","0",0);
			player.setMediaVisibility("\uc2dd\ud0c11","0",0);
			player.setMediaVisibility("\uac70\uc2e4\uac00\ub85c","0",0);
			player.setMediaVisibility("\uac70\uc2e4\uc138\ub85c","0",0);
			player.setMediaVisibility("\ud070\ucc3d","0",0);
		}
		me.__29.onmouseover=function (e) {
			me.elementMouseOver['_29']=true;
			me.__30.logicBlock_visible();
		}
		me.__29.onmouseout=function (e) {
			me.elementMouseOver['_29']=false;
			me.__30.logicBlock_visible();
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__31=document.createElement('div');
		el.ggId="\uce58\uc218\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 4px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc218\uce58\uc120") != -1))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__31.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__31.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__31.style.transition='border-color 0s';
				if (me.__31.ggCurrentLogicStateBorderColor == 0) {
					me.__31.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__31.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__31.logicBlock_bordercolor();
		me.__31.onclick=function (e) {
			player.openNext("{node17}","");
			player.setMediaVisibility("\ub0c9\uc7a5\uace0\uce58\uc218","0",0);
			player.setMediaVisibility("\ucc3d\ubb381","0",0);
			player.setMediaVisibility("\ucc3d\ubb382","0",0);
			player.setMediaVisibility("\uc2dd\ud0c11","0",0);
			player.setMediaVisibility("\uac70\uc2e4\uac00\ub85c","0",0);
			player.setMediaVisibility("\uac70\uc2e4\uc138\ub85c","0",0);
			player.setMediaVisibility("\ud070\ucc3d","0",0);
			me._onoff.style.transition='none';
			me._onoff.style.visibility='hidden';
			me._onoff.ggVisible=false;
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._rectangle_3);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAG0UlEQVR4nO2cX4gVVRzHP9cVlGXb1aBEhVhs1U0L1tTCEv8VbAmJKWpgEUQFPRRBGun2VPbHol4LhF7KyhUE7UGEyk3N1Fp3Hyqz1fxDJNJDuW7QLqunh98o2+xv5p6ZO/fec8fzgcH1N3N+vzPzvXP+zykYY/C4w5hqZ8Dzf7wgjuEFcQwviGN4QRzDC+IYXhDH8II4hhfEMbwgjuEFcQwviGN4QRzDC+IYXhDH8II4hhfEMbwgjuEFcYyx1c5AmZgFLAXmAq3AbUAD0GSZ/hIwAJwHfgG6gf3Az5nnNEQhR4scmoGngPXAtDLF+A3YDnwEnC1HgDwI0gK8ighRqTd+GBFmC3AqS8e1LMh4YBPwcvB3NRgEtg'+
			'JvAf9m4bBWBZkOdAJtVc7HNXqBtUBfqY5qUZAHgF1AY8w1V4ADwFfAD8BJ4C+ksrahCZgIzATmBTEXAXUxafqBVUHM9BhjaulYbYwZNNFcNMZ0GGOmlCH2FGPM5iBGFIPGmFWlxKn2A05yLDPRYgwaY940xtRXIB/1Qay4vCxL679WiqzpwPfo/Yg+pPzurWSGkPqrE8lbmEvAPcCvSZ3WgiDjgcPAHOXcIWAFUj9Ug4nAHmChcq4HuI+Era9aGDrZRLQY7VRPDILY7cBB5dwcYHNSh66/IS3Aj8C4kL0PmI99q6ncNCFFarj4GgTuJEHn0fU35DVGizEErMMdMUDysg4RYCTjkHuwxmVBpgFrFPt7SPnsGj3A+4p9HXC7rROXBXmG0WNTfwJvlOCzFdgI7EZaQH8DJvi3L7BvDK5Lw5YgjyMZg9yLHQ70L6KOs0ob'+
			'vyOFn4IxZqUx5khEvyGKI0G6QsJ4HYqvc7bpq/3Qo47Zyk0NG2MmJ/TTYozp0p52AroCP7YxJwd5DTPbJr2rRdYSxXYQuJDAxxrgOLC4xLwsRuoHrT7TuICMo4VZapPYVUHmKbYvE6R/GvgcuCmb7NAQ+LOtC7S8zrVJ6KogMxRbt2Xa1cCHRN9bD7ABWABMRZqmU4P/byC6BTcG+AC7N+W4Yptpkc7ZOuSCUgY3W6SbYYzpj6gLThljllvGXx5cr9EfxIlL36yk+90mdrUffNShjaQ2FklTMNEV+G6L9OGjwRizK8Jfl4lvfTUqaS7ZxK32g486NIqlWRmRbp8xpi5lPuqMiKmxsgz34OxYlpapQpE0h5F6YCSnkcq0lGGWBqReaQnZv0NGc6NIcw/OVupJaWW0GADPU/qY1wDwgmJfQPoefSR5EeQRxdYL7M3I/1'+
			'70ltOKjPxfJy+CaBNE2zOO8aliuz/jGLkR5A7FdijjGN8otlkZx8iNIJMU2/mMY5xWbLdmHCM3rSzt+rHI+qwsSZKvG7qV1a/Y4hbSpWGiYruccYzcCHJRsYX7DaWizfppcUsiL4KcUGylDruHWaTYMv9eJKkgpkJHUrQW1foUfuLQ/H2bcYzcvCFfKLY24OGM/D8E3K3Y92Tk/zpJW1nVbJIVa6EcAe4N2bJYv9WA9NLDa678WFYR3lZs04EdxH9GEEcd0uPX1u++k9JnLHl6QwpAF3rluw94DFnuY8sEZNq2XTl3AJn3j3seVXtDCqEji2vSYJA57wHlXDsyBbzKwn8huK4bXYwB4FnixdD6QFZ9lizekPANZnFNql9XwFpkIDCqmOoFPkZ+5aeQt2YC0m9ZBDxB9KdyV5DW1o4ieWgGzoRsfyBz97Hk8Tv1TmTx'+
			'c9RChzbSfZt4FXiO4mKAvqDhnE2QPFXqI9mG1Bla8ZWGgcDfNsvrtSU/J20S5lUQgJ3Ig9EWrSXhALJObGeCNA8qNqtlTHkWBGRB9RLgUeBYwrTHgnRLsPx1B0xGb+ntt0lcjko9C8oVpxWZdl2ITGpNQlY3XkYGCk8gwzB7kD1O0rCZ0Sv0zyMVfdGHfaMJUm7qkT1QbgnZtwKv2DjIe5FVaToYLcZV7BsDXpAMmQO8pNg70ad/VXyRlQ1NSCMgvEh8ELiLBHug+DekdOqRRoC2Yv9dEm5Ik6fBxWoQt3FAL7K6MXcbB7hKG3AUXYxrn0kn3kPLC5KceqSfcRR9nmQIGS1OvM8J5HNwsVxMAZ4EXiR6gdwQ8DjwddogXhCdRuBmpKKeDyxDVrHEzTxeRoqpkhZ4ZyFIpZq9Ti6xDOgloy3+fB1SGkPA60hrqmQxwB'+
			'dZaRkGPkM2lsl0m1gvSDLOAJ9Qxo2UvSA6/cA/yLTryK3Gfyp34KSCVKq37GKvvCL4St0xvCCO4QVxDC+IY3hBHMML4hheEMfwgjiGF8QxvCCO4QVxDC+IY3hBHMML4hheEMfwgjiGF8QxvCCO4QVxjP8AZ8EQ26bpSAUAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image \uce58\uc218";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 68.8889%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((68.8889% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._image_6);
		me.__29.appendChild(me.__31);
		el=me.__30=document.createElement('div');
		els=me.__30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce58\uc218\uc120\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : -110px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__30.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce58\uc218\uae30\ub2a5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__30.ggUpdateText();
		el.appendChild(els);
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_29'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__30.style.transition='';
				if (me.__30.ggCurrentLogicStateVisible == 0) {
					me.__30.style.visibility="hidden";
					me.__30.ggVisible=false;
				}
				else if (me.__30.ggCurrentLogicStateVisible == 1) {
					me.__30.style.visibility=(Number(me.__30.style.opacity)>0||!me.__30.style.opacity)?'inherit':'hidden';
					me.__30.ggVisible=true;
				}
				else {
					me.__30.style.visibility="hidden";
					me.__30.ggVisible=false;
				}
			}
		}
		me.__30.logicBlock_visible();
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__30);
		me.__25.appendChild(me.__29);
		el=me.__26=document.createElement('div');
		el.ggId="\uc81c\ud488\uc815\ubcf4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.onclick=function (e) {
			me.__5.style.transition='none';
			me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
			me.__5.ggVisible=true;
			player.setMediaVisibility("\uac00\uc2a4\ub808\uc778\uc9c0","0",0);
			player.setMediaVisibility("\ube14\ub799\uc218\ub3c4","0",0);
			player.setMediaVisibility("\ud654\uc774\ud2b8\uc218\ub3c4","0",0);
			player.startAutoplayMedia();
		}
		me.__26.onmouseover=function (e) {
			me.elementMouseOver['_26']=true;
			me.__27.logicBlock_visible();
		}
		me.__26.onmouseout=function (e) {
			me.elementMouseOver['_26']=false;
			me.__27.logicBlock_visible();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		el.ggId="\uc81c\ud488\uc815\ubcf4\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 4px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc81c\ud488\uc815\ubcf4") != -1))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__28.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__28.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__28.style.transition='border-color 0s';
				if (me.__28.ggCurrentLogicStateBorderColor == 0) {
					me.__28.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__28.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__28.logicBlock_bordercolor();
		me.__28.onclick=function (e) {
			player.openNext("{node15}","");
			me._onoff.style.transition='none';
			me._onoff.style.visibility='hidden';
			me._onoff.ggVisible=false;
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._rectangle_4);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVRYhe2Y0Q2CMBRFL88JWMEVWIEVdARdwU8/dQRdwRFkBB1BV2CDqz/UmAZsnk9SYt5J+lFoX05IobcUMEKyBLACUHeX7gBOItJYa5ukSF5IPnraKqfYbkAqtPLb2mJ0q4z3B7GKjYaLaXExLS6mxcW0uJiWAnhFlwOARV4d3AHsReQYxC4wbLgjsJyRrABsc5vECICvM9OIlJNd/NJl8za3SEQTntga05FrRGRfhF73ydC+mbvEnA2Aq6JeKyKa8f2QPCcOI3W6Sj/TXfy5BYZwMS0upsXFtLiYlr8VSyWSPImFZP1hAz9nkXqTW5C8RVIHy2/On0Jybok5MU/bY8Sut5lQVwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image \uc81c\ud488\uc815\ubcf4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._image_5);
		me.__26.appendChild(me.__28);
		el=me.__27=document.createElement('div');
		els=me.__27__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc815\ubcf4\uba58\ud2b8";
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : -110px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 5px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__27.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud0dc\uadf8\uae30\ub2a5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__27.ggUpdateText();
		el.appendChild(els);
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_26'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__27.style.transition='';
				if (me.__27.ggCurrentLogicStateVisible == 0) {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
				else if (me.__27.ggCurrentLogicStateVisible == 1) {
					me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
					me.__27.ggVisible=true;
				}
				else {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
			}
		}
		me.__27.logicBlock_visible();
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		me.__26.appendChild(me.__27);
		me.__25.appendChild(me.__26);
		me.divSkin.appendChild(me.__25);
		el=me._start=document.createElement('div');
		el.ggId="start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 81px;';
		hs+='position : absolute;';
		hs+='top : 98px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._start.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._start);
		el=me.__5=document.createElement('div');
		el.ggId="\uac00\uc6b4\ub370 \uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 0;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._center0=document.createElement('div');
		el.ggId="center-\uc81c\ud488\uc815\ubcf4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((52% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 52%;';
		hs+='pointer-events:none;';
		hs+='min-width:320px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._center0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._center0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._center0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._center0.ggCurrentLogicStateSize = newLogicStateSize;
				me._center0.style.transition='width 0s, height 0s';
				if (me._center0.ggCurrentLogicStateSize == 0) {
					me._center0.style.width='90%';
					me._center0.style.height='55%';
					me._center0.style.left = 'calc(50% - (90% / 2))';
					me._center0.style.top = 'calc(50% - (55% / 2))';
					skin.updateSize(me._center0);
				}
				else {
					me._center0.style.width='52%';
					me._center0.style.height='55%';
					me._center0.style.left = 'calc(50% - (52% / 2))';
					me._center0.style.top = 'calc(50% - (55% / 2))';
					skin.updateSize(me._center0);
				}
			}
		}
		me._center0.logicBlock_size();
		me._center0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc81c\ud488\uc815\ubcf4") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._center0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._center0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._center0.style.transition='width 0s, height 0s';
				if (me._center0.ggCurrentLogicStateVisible == 0) {
					me._center0.style.visibility=(Number(me._center0.style.opacity)>0||!me._center0.style.opacity)?'inherit':'hidden';
					me._center0.ggVisible=true;
				}
				else {
					me._center0.style.visibility="hidden";
					me._center0.ggVisible=false;
				}
			}
		}
		me._center0.logicBlock_visible();
		me._center0.ggUpdatePosition=function (useTransition) {
		}
		el=me._center_0=document.createElement('div');
		el.ggId="center_\uc81c\ud488\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._center_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._center_0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._center_0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._center_0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._center_0.style.transition='transform 0s';
				if (me._center_0.ggCurrentLogicStateScaling == 0) {
					me._center_0.ggParameter.sx = 0.8;
					me._center_0.ggParameter.sy = 0.8;
					me._center_0.style.transform=parameterToTransform(me._center_0.ggParameter);
					skin.updateSize(me._center_0);
				}
				else {
					me._center_0.ggParameter.sx = 1;
					me._center_0.ggParameter.sy = 1;
					me._center_0.style.transform=parameterToTransform(me._center_0.ggParameter);
					skin.updateSize(me._center_0);
				}
			}
		}
		me._center_0.logicBlock_scaling();
		me._center_0.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
				)
			) {
				player.openNext("{node11}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
				)
			) {
				player.openNext("{node13}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.title) == "\ubcf5\ub3c4"))
				)
			) {
				player.openNext("{node12}","$(cur)");
			}
		}
		me._center_0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_2=document.createElement('div');
		el.ggId="\uc124\uba851_\uc81c\ud488\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__1_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__1_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__1_2.style.transition='transform 0s';
				if (me.__1_2.ggCurrentLogicStateScaling == 0) {
					me.__1_2.ggParameter.sx = 0.8;
					me.__1_2.ggParameter.sy = 0.8;
					me.__1_2.style.transform=parameterToTransform(me.__1_2.ggParameter);
					skin.updateSize(me.__1_2);
				}
				else {
					me.__1_2.ggParameter.sx = 1;
					me.__1_2.ggParameter.sy = 1;
					me.__1_2.style.transform=parameterToTransform(me.__1_2.ggParameter);
					skin.updateSize(me.__1_2);
				}
			}
		}
		me.__1_2.logicBlock_scaling();
		me.__1_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.ggId="\uc81c\ud488\uc815\ubcf4 \ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__9.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__9.ggCurrentLogicStateSize = newLogicStateSize;
				me.__9.style.transition='width 0s, height 0s';
				if (me.__9.ggCurrentLogicStateSize == 0) {
					me.__9.style.width='100%';
					me.__9.style.height='70%';
					me.__9.style.left = 'calc(50% - (100% / 2))';
					me.__9.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__9);
				}
				else {
					me.__9.style.width='70%';
					me.__9.style.height='70%';
					me.__9.style.left = 'calc(50% - (70% / 2))';
					me.__9.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__9);
				}
			}
		}
		me.__9.logicBlock_size();
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-\uc81c\ud488\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_20.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud0dc\uadf8 \uc815\ubcf4 \uc0bd\uc785", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_20.ggUpdateText();
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_20.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_30=document.createElement('div');
		els=me._text_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-\uc81c\ud488\uc815\ubcf4";
		el.ggDx=0;
		el.ggDy=100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 100px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 28px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_30.ggUpdateText=function() {
			var params = [];
			var hs = player._("VR \uc18d \ud0dc\uadf8\ubc84\ud2bc\uc744 \ub20c\ub7ec \uae30\ub2a5\uc744 \ud655\uc778\ud574 \ubcf4\uc138\uc694.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_30.ggUpdateText();
		el.appendChild(els);
		me._text_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_30.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_30.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_30.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_30.style.transition='transform 0s';
				if (me._text_30.ggCurrentLogicStateScaling == 0) {
					me._text_30.ggParameter.sx = 0.8;
					me._text_30.ggParameter.sy = 0.8;
					me._text_30.style.transform=parameterToTransform(me._text_30.ggParameter);
					skin.updateSize(me._text_30);
				}
				else {
					me._text_30.ggParameter.sx = 1;
					me._text_30.ggParameter.sy = 1;
					me._text_30.style.transform=parameterToTransform(me._text_30.ggParameter);
					skin.updateSize(me._text_30);
				}
			}
		}
		me._text_30.logicBlock_scaling();
		me._text_30.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_40=document.createElement('div');
		els=me._text_40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-\uc81c\ud488\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 105%;';
		hs+='left : calc(50% - ((182% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 182%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_40.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf8 VR\uc740 \uae30\ub2a5\uc124\uba85\uc744 \uc704\ud574 \uc5f0\ucd9c\ub41c VR \uc785\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_40.ggUpdateText();
		el.appendChild(els);
		me._text_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_40.ggUpdatePosition=function (useTransition) {
		}
		me._text_30.appendChild(me._text_40);
		me._text_20.appendChild(me._text_30);
		me.__9.appendChild(me._text_20);
		el=me._rectangle_0=document.createElement('div');
		el.ggId="Rectangle \uc81c\ud488\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_0.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAB40lEQVR4nO3bwU0CURRG4R/3GpowWoI2SDdQgHGvJWAXg7IfF7BQDEPI4NzzyPkSNkPCvOTkAuGGWd/3EcdN9QH0m0FgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgE5hqC3CdZJtnsH8v9tSbNGv9/yEOS9yTzg+tdkqckHxOfZ7TWJ2SRvzGyv7aY9CQX0vqEbJLcHXlum+R2wrNcROtBTh1+NskpLqj1t6yrYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAEIL83Gf0Zz5OOff1yvcp1T8uHttnVOtStE+pnpBj+4xq8xTtU6onZGifUa'+
			'1kn1I9ITpQHeS1+P5DXipuWv2W9ZjkLbzPkS7Jc5L11DeunpB1dt9mVkm+is+S7M6wyu5Mk8dI6idkLHfq+l8GgTEIjEFgDAJjEBiDwBgExiAwBoExCEzrQT4HnttOdooLaj3I0D6lZJ8xVuu/9h7bp3Qp2meM1fqEHO5TyvcZY7U+IVen9Qm5OgaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWC+AWn5YYNPXUeOAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image \uc81c\ud488\uc815\ubcf41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_0.appendChild(me._image_1);
		me.__9.appendChild(me._rectangle_0);
		me.__1_2.appendChild(me.__9);
		me._center_0.appendChild(me.__1_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._center_0.appendChild(me._image_3);
		me._center0.appendChild(me._center_0);
		me.__5.appendChild(me._center0);
		el=me._center=document.createElement('div');
		el.ggId="center-\uce58\uc218\uc120\ubcf4\uae30";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((52% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 52%;';
		hs+='pointer-events:none;';
		hs+='min-width:320px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._center.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._center.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._center.ggCurrentLogicStateSize != newLogicStateSize) {
				me._center.ggCurrentLogicStateSize = newLogicStateSize;
				me._center.style.transition='width 0s, height 0s';
				if (me._center.ggCurrentLogicStateSize == 0) {
					me._center.style.width='90%';
					me._center.style.height='55%';
					me._center.style.left = 'calc(50% - (90% / 2))';
					me._center.style.top = 'calc(50% - (55% / 2))';
					skin.updateSize(me._center);
				}
				else {
					me._center.style.width='52%';
					me._center.style.height='55%';
					me._center.style.left = 'calc(50% - (52% / 2))';
					me._center.style.top = 'calc(50% - (55% / 2))';
					skin.updateSize(me._center);
				}
			}
		}
		me._center.logicBlock_size();
		me._center.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc218\uce58\uc120") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._center.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._center.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._center.style.transition='width 0s, height 0s';
				if (me._center.ggCurrentLogicStateVisible == 0) {
					me._center.style.visibility=(Number(me._center.style.opacity)>0||!me._center.style.opacity)?'inherit':'hidden';
					me._center.ggVisible=true;
				}
				else {
					me._center.style.visibility="hidden";
					me._center.ggVisible=false;
				}
			}
		}
		me._center.logicBlock_visible();
		me._center.ggUpdatePosition=function (useTransition) {
		}
		el=me._center_=document.createElement('div');
		el.ggId="center_\uce58\uc218\uc120\ubcf4\uae30";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._center_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._center_.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._center_.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._center_.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._center_.style.transition='transform 0s';
				if (me._center_.ggCurrentLogicStateScaling == 0) {
					me._center_.ggParameter.sx = 0.8;
					me._center_.ggParameter.sy = 0.8;
					me._center_.style.transform=parameterToTransform(me._center_.ggParameter);
					skin.updateSize(me._center_);
				}
				else {
					me._center_.ggParameter.sx = 1;
					me._center_.ggParameter.sy = 1;
					me._center_.style.transform=parameterToTransform(me._center_.ggParameter);
					skin.updateSize(me._center_);
				}
			}
		}
		me._center_.logicBlock_scaling();
		me._center_.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
				)
			) {
				player.openNext("{node11}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
				)
			) {
				player.openNext("{node13}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.title) == "\ubcf5\ub3c4"))
				)
			) {
				player.openNext("{node12}","$(cur)");
			}
		}
		me._center_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_1=document.createElement('div');
		el.ggId="\uc124\uba851_\uce58\uc218\uc120";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__1_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__1_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__1_1.style.transition='transform 0s';
				if (me.__1_1.ggCurrentLogicStateScaling == 0) {
					me.__1_1.ggParameter.sx = 0.8;
					me.__1_1.ggParameter.sy = 0.8;
					me.__1_1.style.transform=parameterToTransform(me.__1_1.ggParameter);
					skin.updateSize(me.__1_1);
				}
				else {
					me.__1_1.ggParameter.sx = 1;
					me.__1_1.ggParameter.sy = 1;
					me.__1_1.style.transform=parameterToTransform(me.__1_1.ggParameter);
					skin.updateSize(me.__1_1);
				}
			}
		}
		me.__1_1.logicBlock_scaling();
		me.__1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		el.ggId="\uce58\uc218\uc120 \ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__8.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__8.ggCurrentLogicStateSize = newLogicStateSize;
				me.__8.style.transition='width 0s, height 0s';
				if (me.__8.ggCurrentLogicStateSize == 0) {
					me.__8.style.width='100%';
					me.__8.style.height='70%';
					me.__8.style.left = 'calc(50% - (100% / 2))';
					me.__8.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__8);
				}
				else {
					me.__8.style.width='70%';
					me.__8.style.height='70%';
					me.__8.style.left = 'calc(50% - (70% / 2))';
					me.__8.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__8);
				}
			}
		}
		me.__8.logicBlock_size();
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-\uce58\uc218\uc120";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce58\uc218 \ud655\uc778", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-\uce58\uc218\uc120";
		el.ggDx=0;
		el.ggDy=100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 100px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 28px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("VR \uc18d \uce58\uc218\ubc84\ud2bc\uc73c\ub85c \uae30\ub2a5\uc744 \ud655\uc778\ud574 \ubcf4\uc138\uc694.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_3.style.transition='transform 0s';
				if (me._text_3.ggCurrentLogicStateScaling == 0) {
					me._text_3.ggParameter.sx = 0.8;
					me._text_3.ggParameter.sy = 0.8;
					me._text_3.style.transform=parameterToTransform(me._text_3.ggParameter);
					skin.updateSize(me._text_3);
				}
				else {
					me._text_3.ggParameter.sx = 1;
					me._text_3.ggParameter.sy = 1;
					me._text_3.style.transform=parameterToTransform(me._text_3.ggParameter);
					skin.updateSize(me._text_3);
				}
			}
		}
		me._text_3.logicBlock_scaling();
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-\uce58\uc218\uc120";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 105%;';
		hs+='left : calc(50% - ((182% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 182%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf8 VR\uc740 \uae30\ub2a5\uc124\uba85\uc744 \uc704\ud574 \uc5f0\ucd9c\ub41c VR \uc785\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me._text_3.appendChild(me._text_4);
		me._text_2.appendChild(me._text_3);
		me.__8.appendChild(me._text_2);
		el=me._rectangle_=document.createElement('div');
		el.ggId="Rectangle \uce58\uc218\uc120";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_0=document.createElement('div');
		els=me._image_0__img=document.createElement('img');
		els.className='ggskin ggskin_image_0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAG0UlEQVR4nO2cX4gVVRzHP9cVlGXb1aBEhVhs1U0L1tTCEv8VbAmJKWpgEUQFPRRBGun2VPbHol4LhF7KyhUE7UGEyk3N1Fp3Hyqz1fxDJNJDuW7QLqunh98o2+xv5p6ZO/fec8fzgcH1N3N+vzPzvXP+zykYY/C4w5hqZ8Dzf7wgjuEFcQwviGN4QRzDC+IYXhDH8II4hhfEMbwgjuEFcQwviGN4QRzDC+IYXhDH8II4hhfEMbwgjuEFcYyx1c5AmZgFLAXmAq3AbUAD0GSZ/hIwAJwHfgG6gf3Az5nnNEQhR4scmoGngPXAtDLF+A3YDnwEnC1HgDwI0gK8ighRqTd+GBFmC3AqS8e1LMh4YBPwcvB3NRgEtg'+
			'JvAf9m4bBWBZkOdAJtVc7HNXqBtUBfqY5qUZAHgF1AY8w1V4ADwFfAD8BJ4C+ksrahCZgIzATmBTEXAXUxafqBVUHM9BhjaulYbYwZNNFcNMZ0GGOmlCH2FGPM5iBGFIPGmFWlxKn2A05yLDPRYgwaY940xtRXIB/1Qay4vCxL679WiqzpwPfo/Yg+pPzurWSGkPqrE8lbmEvAPcCvSZ3WgiDjgcPAHOXcIWAFUj9Ug4nAHmChcq4HuI+Era9aGDrZRLQY7VRPDILY7cBB5dwcYHNSh66/IS3Aj8C4kL0PmI99q6ncNCFFarj4GgTuJEHn0fU35DVGizEErMMdMUDysg4RYCTjkHuwxmVBpgFrFPt7SPnsGj3A+4p9HXC7rROXBXmG0WNTfwJvlOCzFdgI7EZaQH8DJvi3L7BvDK5Lw5YgjyMZg9yLHQ70L6KOs0ob'+
			'vyOFn4IxZqUx5khEvyGKI0G6QsJ4HYqvc7bpq/3Qo47Zyk0NG2MmJ/TTYozp0p52AroCP7YxJwd5DTPbJr2rRdYSxXYQuJDAxxrgOLC4xLwsRuoHrT7TuICMo4VZapPYVUHmKbYvE6R/GvgcuCmb7NAQ+LOtC7S8zrVJ6KogMxRbt2Xa1cCHRN9bD7ABWABMRZqmU4P/byC6BTcG+AC7N+W4Yptpkc7ZOuSCUgY3W6SbYYzpj6gLThljllvGXx5cr9EfxIlL36yk+90mdrUffNShjaQ2FklTMNEV+G6L9OGjwRizK8Jfl4lvfTUqaS7ZxK32g486NIqlWRmRbp8xpi5lPuqMiKmxsgz34OxYlpapQpE0h5F6YCSnkcq0lGGWBqReaQnZv0NGc6NIcw/OVupJaWW0GADPU/qY1wDwgmJfQPoefSR5EeQRxdYL7M3I/1'+
			'70ltOKjPxfJy+CaBNE2zOO8aliuz/jGLkR5A7FdijjGN8otlkZx8iNIJMU2/mMY5xWbLdmHCM3rSzt+rHI+qwsSZKvG7qV1a/Y4hbSpWGiYruccYzcCHJRsYX7DaWizfppcUsiL4KcUGylDruHWaTYMv9eJKkgpkJHUrQW1foUfuLQ/H2bcYzcvCFfKLY24OGM/D8E3K3Y92Tk/zpJW1nVbJIVa6EcAe4N2bJYv9WA9NLDa678WFYR3lZs04EdxH9GEEcd0uPX1u++k9JnLHl6QwpAF3rluw94DFnuY8sEZNq2XTl3AJn3j3seVXtDCqEji2vSYJA57wHlXDsyBbzKwn8huK4bXYwB4FnixdD6QFZ9lizekPANZnFNql9XwFpkIDCqmOoFPkZ+5aeQt2YC0m9ZBDxB9KdyV5DW1o4ieWgGzoRsfyBz97Hk8Tv1TmTx'+
			'c9RChzbSfZt4FXiO4mKAvqDhnE2QPFXqI9mG1Bla8ZWGgcDfNsvrtSU/J20S5lUQgJ3Ig9EWrSXhALJObGeCNA8qNqtlTHkWBGRB9RLgUeBYwrTHgnRLsPx1B0xGb+ntt0lcjko9C8oVpxWZdl2ITGpNQlY3XkYGCk8gwzB7kD1O0rCZ0Sv0zyMVfdGHfaMJUm7qkT1QbgnZtwKv2DjIe5FVaToYLcZV7BsDXpAMmQO8pNg70ad/VXyRlQ1NSCMgvEh8ELiLBHug+DekdOqRRoC2Yv9dEm5Ik6fBxWoQt3FAL7K6MXcbB7hKG3AUXYxrn0kn3kPLC5KceqSfcRR9nmQIGS1OvM8J5HNwsVxMAZ4EXiR6gdwQ8DjwddogXhCdRuBmpKKeDyxDVrHEzTxeRoqpkhZ4ZyFIpZq9Ti6xDOgloy3+fB1SGkPA60hrqmQxwB'+
			'dZaRkGPkM2lsl0m1gvSDLOAJ9Qxo2UvSA6/cA/yLTryK3Gfyp34KSCVKq37GKvvCL4St0xvCCO4QVxDC+IY3hBHMML4hheEMfwgjiGF8QxvCCO4QVxDC+IY3hBHMML4hheEMfwgjiGF8QxvCCO4QVxjP8AZ8EQ26bpSAUAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image \uce58\uc218\uc120";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_0.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_.appendChild(me._image_0);
		me.__8.appendChild(me._rectangle_);
		me.__1_1.appendChild(me.__8);
		me._center_.appendChild(me.__1_1);
		el=me.__7=document.createElement('div');
		els=me.__7__img=document.createElement('img');
		els.className='ggskin ggskin__7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uce58\uc218\uc120 \ub2eb\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		me._center_.appendChild(me.__7);
		me._center.appendChild(me._center_);
		me.__5.appendChild(me._center);
		el=me._centeronoff=document.createElement('div');
		el.ggId="center-\uac00\uad6conoff";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((52% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 52%;';
		hs+='pointer-events:none;';
		hs+='min-width:320px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._centeronoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._centeronoff.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._centeronoff.ggCurrentLogicStateSize != newLogicStateSize) {
				me._centeronoff.ggCurrentLogicStateSize = newLogicStateSize;
				me._centeronoff.style.transition='width 0s, height 0s';
				if (me._centeronoff.ggCurrentLogicStateSize == 0) {
					me._centeronoff.style.width='90%';
					me._centeronoff.style.height='55%';
					me._centeronoff.style.left = 'calc(50% - (90% / 2))';
					me._centeronoff.style.top = 'calc(50% - (55% / 2))';
					skin.updateSize(me._centeronoff);
				}
				else {
					me._centeronoff.style.width='52%';
					me._centeronoff.style.height='55%';
					me._centeronoff.style.left = 'calc(50% - (52% / 2))';
					me._centeronoff.style.top = 'calc(50% - (55% / 2))';
					skin.updateSize(me._centeronoff);
				}
			}
		}
		me._centeronoff.logicBlock_size();
		me._centeronoff.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc628\uc624\ud504") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._centeronoff.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._centeronoff.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._centeronoff.style.transition='width 0s, height 0s';
				if (me._centeronoff.ggCurrentLogicStateVisible == 0) {
					me._centeronoff.style.visibility=(Number(me._centeronoff.style.opacity)>0||!me._centeronoff.style.opacity)?'inherit':'hidden';
					me._centeronoff.ggVisible=true;
				}
				else {
					me._centeronoff.style.visibility="hidden";
					me._centeronoff.ggVisible=false;
				}
			}
		}
		me._centeronoff.logicBlock_visible();
		me._centeronoff.ggUpdatePosition=function (useTransition) {
		}
		el=me._center_onoff=document.createElement('div');
		el.ggId="center_\uac00\uad6conoff";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._center_onoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._center_onoff.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._center_onoff.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._center_onoff.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._center_onoff.style.transition='transform 0s';
				if (me._center_onoff.ggCurrentLogicStateScaling == 0) {
					me._center_onoff.ggParameter.sx = 0.8;
					me._center_onoff.ggParameter.sy = 0.8;
					me._center_onoff.style.transform=parameterToTransform(me._center_onoff.ggParameter);
					skin.updateSize(me._center_onoff);
				}
				else {
					me._center_onoff.ggParameter.sx = 1;
					me._center_onoff.ggParameter.sy = 1;
					me._center_onoff.style.transform=parameterToTransform(me._center_onoff.ggParameter);
					skin.updateSize(me._center_onoff);
				}
			}
		}
		me._center_onoff.logicBlock_scaling();
		me._center_onoff.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
				)
			) {
				player.openNext("{node11}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
				)
			) {
				player.openNext("{node13}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.title) == "\ubcf5\ub3c4"))
				)
			) {
				player.openNext("{node12}","$(cur)");
			}
		}
		me._center_onoff.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1onoff=document.createElement('div');
		el.ggId="\uc124\uba851-\uac00\uad6conoff";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1onoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1onoff.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__1onoff.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__1onoff.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__1onoff.style.transition='transform 0s';
				if (me.__1onoff.ggCurrentLogicStateScaling == 0) {
					me.__1onoff.ggParameter.sx = 0.8;
					me.__1onoff.ggParameter.sy = 0.8;
					me.__1onoff.style.transform=parameterToTransform(me.__1onoff.ggParameter);
					skin.updateSize(me.__1onoff);
				}
				else {
					me.__1onoff.ggParameter.sx = 1;
					me.__1onoff.ggParameter.sy = 1;
					me.__1onoff.style.transform=parameterToTransform(me.__1onoff.ggParameter);
					skin.updateSize(me.__1onoff);
				}
			}
		}
		me.__1onoff.logicBlock_scaling();
		me.__1onoff.ggUpdatePosition=function (useTransition) {
		}
		el=me._onoff_0=document.createElement('div');
		el.ggId="\uac00\uad6conoff \ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onoff_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._onoff_0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._onoff_0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._onoff_0.ggCurrentLogicStateSize = newLogicStateSize;
				me._onoff_0.style.transition='width 0s, height 0s';
				if (me._onoff_0.ggCurrentLogicStateSize == 0) {
					me._onoff_0.style.width='100%';
					me._onoff_0.style.height='70%';
					me._onoff_0.style.left = 'calc(50% - (100% / 2))';
					me._onoff_0.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me._onoff_0);
				}
				else {
					me._onoff_0.style.width='70%';
					me._onoff_0.style.height='70%';
					me._onoff_0.style.left = 'calc(50% - (70% / 2))';
					me._onoff_0.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me._onoff_0);
				}
			}
		}
		me._onoff_0.logicBlock_size();
		me._onoff_0.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2onoff=document.createElement('div');
		els=me._text_2onoff__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-\uac00\uad6conoff";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2onoff.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON \/ OFF", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2onoff.ggUpdateText();
		el.appendChild(els);
		me._text_2onoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2onoff.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3onoff=document.createElement('div');
		els=me._text_3onoff__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-\uac00\uad6conoff";
		el.ggDx=0;
		el.ggDy=100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((120% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 100px);';
		hs+='visibility : inherit;';
		hs+='width : 120%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 28px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3onoff.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc88c\uce21 \uc0c1\ub2e8 ON \/ OFF \ubc84\ud2bc\uc73c\ub85c \uae30\ub2a5\uc744 \ud655\uc778\ud574 \ubcf4\uc138\uc694. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3onoff.ggUpdateText();
		el.appendChild(els);
		me._text_3onoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3onoff.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._text_3onoff.ggCurrentLogicStateSize != newLogicStateSize) {
				me._text_3onoff.ggCurrentLogicStateSize = newLogicStateSize;
				me._text_3onoff.style.transition='width 0s, height 0s, transform 0s';
				if (me._text_3onoff.ggCurrentLogicStateSize == 0) {
					me._text_3onoff.style.width='120%';
					me._text_3onoff.style.height='100%';
					me._text_3onoff.style.left = 'calc(50% - (120% / 2))';
					me._text_3onoff.style.top = 'calc(50% - (100% / 2) + (0px / 2) + 100px)';
					skin.updateSize(me._text_3onoff);
				}
				else {
					me._text_3onoff.style.width='120%';
					me._text_3onoff.style.height='100%';
					me._text_3onoff.style.left = 'calc(50% - (120% / 2))';
					me._text_3onoff.style.top = 'calc(50% - (100% / 2) + (0px / 2) + 100px)';
					skin.updateSize(me._text_3onoff);
				}
			}
		}
		me._text_3onoff.logicBlock_size();
		me._text_3onoff.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_3onoff.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_3onoff.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_3onoff.style.transition='width 0s, height 0s, transform 0s';
				if (me._text_3onoff.ggCurrentLogicStateScaling == 0) {
					me._text_3onoff.ggParameter.sx = 0.8;
					me._text_3onoff.ggParameter.sy = 0.8;
					me._text_3onoff.style.transform=parameterToTransform(me._text_3onoff.ggParameter);
					skin.updateSize(me._text_3onoff);
				}
				else {
					me._text_3onoff.ggParameter.sx = 1;
					me._text_3onoff.ggParameter.sy = 1;
					me._text_3onoff.style.transform=parameterToTransform(me._text_3onoff.ggParameter);
					skin.updateSize(me._text_3onoff);
				}
			}
		}
		me._text_3onoff.logicBlock_scaling();
		me._text_3onoff.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4onoff=document.createElement('div');
		els=me._text_4onoff__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-\uac00\uad6conoff";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 105%;';
		hs+='left : calc(50% - ((182% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 182%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4onoff.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf8 VR\uc740 \uae30\ub2a5\uc124\uba85\uc744 \uc704\ud574 \uc5f0\ucd9c\ub41c VR \uc785\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4onoff.ggUpdateText();
		el.appendChild(els);
		me._text_4onoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4onoff.ggUpdatePosition=function (useTransition) {
		}
		me._text_3onoff.appendChild(me._text_4onoff);
		me._text_2onoff.appendChild(me._text_3onoff);
		me._onoff_0.appendChild(me._text_2onoff);
		el=me._rectangle_onoff=document.createElement('div');
		el.ggId="Rectangle -\uac00\uad6conoff";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_onoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_onoff.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_onoff=document.createElement('div');
		els=me._image_onoff__img=document.createElement('img');
		els.className='ggskin ggskin_image_onoff';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEiklEQVR4nO2dz2seRRjHPzGptS2iIlHxYELjRQSpvQhBFEVRFK2ggmCPetCTJ1MplOotHix6sP+AgqCCSBHFH6iHQk+1IIoHfx0Ua6FVJI3JG/t42PfwdjNv8s7uzOz3TZ8P7CHzzsyzz37Yd9+d3ZlMmBmODpd1vQPOxbgQMVyIGC5EDBcihgsRw4WI4ULEcCFiuBAxXIgYLkQMFyLGVAcxrwOeBO4BbgVuAK7uYD824y/gT+Bb4Avg3f7fWZkoOPx+C3AIeBzYVipoQnrA+8ArwPe5gpQQMgUcBl5kPEXU6QGvUuW0lrrz3EKuAT4A7soZpCO+Bh4DzqXsNKeQq4AvgT25AghwCrgb+DtVh7mETAIfA/cN+X'+
			'wJ+Aj4EPgJOA0oPUueAK4HdgOPAg8Bu4bU/Qx4EPgvSWQzy7EdsDAXzOyomU1niptrm+7v94Uheb2UKlaOM2QW+A7YUStfAfYD76UOWJAngLeA7bXyf6l+Rf7SNkCOG8MDrJcB8CzjLQOq/X8mUH4FVd6tSX2GXAn8AeyslR8Fnk8ZqGPeBJ6rlS0B08Bym45TnyH7WC/jH+Bg4jhdc5Aqr0F2Afe27Ti1kNAOvU3i3+oCnKO6ltTZ17bj1EJuC5QdSxxDhVBee9t2mlrIbKDsm8QxVDgVKJtt22nqi3qP9SPI28gw5iPAFFW+g6zRcrwutZBQZxMpA4iRPF9/QCWGCxHDhYjhQsRwIWKkEDIDLABfDfl8oV9nq5A33xZj9zvM7DUzWx3yjGCQVTM7YmY7O3qekWIrkm/T+5Bp4BPg9sh2J4EHgDNNgnZIsXybCLmc'+
			'6gH/HbEN+5ygeulhtWH70hTNt8k1ZJHmO0e/7WKL9qUpm2/kd9xNZtYLfGcum9khM5szs8n+NtcvWw7U75nZbIbv+dRb8Xxjd/BwINiSmc1v0Ga+X6fOyxkOYOqteL6xX1mh13oWgeMbtDk+5JS9PzJ2FxTPN/ai/htwY63sZuDHTdrtDtQ5C1wbE7wDiucbK2SN6iW4QabY/CWxScLPRNSH5ovnGyukzfj/OD4rKZ6vj2WJ4ULEcCFiuBAxXIgYLkQMFyKGCxHDhYjhQsRwIWK4EDFciBguRIwuVgMaRGmxAAn8DBHDhYjhQsRwIWJ0fVEfx2fqWfEzRAwXIoYLEcOFiOFCxIgVEnqFsv6qZYhR6ihSPN9YIacDZbMjtAtNgjwbGbsLiucbK+TnQNnTI7TbHyj7ITJ2FxTPN1bI54GyBWB+gzbz/Tp1Po2M3QXl84'+
			'2cUTRsitd5Gz7F63yg/lYgJt+Rp7Q1mYV7BHghttElzuuMeMyaCNlOtYpBm5mplxInqJYjXxmlcpP7kBXgEapJ8c7GnKQ6ViPJgOY3hmeAO6lOxfoyd051TN6gOkZRq1akWOJvBngKeBiYo1rEPnRjpD7UPiozhJcU/53qHwscA94Bfm3Sea7/jjCO8wljyJafj2WJ4ULEcCFiuBAxXIgYLkSMXK8BbaWfuCGy5edniBguRAwXIoYLEcOFiOFCxHAhYrgQMVyIGC5EDBcixv9dyzrZleMsDQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image -\uac00\uad6conoff";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_onoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_onoff.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_onoff.appendChild(me._image_onoff);
		me._onoff_0.appendChild(me._rectangle_onoff);
		me.__1onoff.appendChild(me._onoff_0);
		me._center_onoff.appendChild(me.__1onoff);
		el=me._onoff_=document.createElement('div');
		els=me._onoff___img=document.createElement('img');
		els.className='ggskin ggskin_onoff_';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6conoff \ub2eb\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onoff_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._onoff_.ggUpdatePosition=function (useTransition) {
		}
		me._center_onoff.appendChild(me._onoff_);
		me._centeronoff.appendChild(me._center_onoff);
		me.__5.appendChild(me._centeronoff);
		el=me.__6=document.createElement('div');
		el.ggId="\uac00\uc6b4\ub370 \uc815\ubcf4 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.onclick=function (e) {
			me.__5.style.transition='none';
			me.__5.style.visibility='hidden';
			me.__5.ggVisible=false;
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me.__6);
		me.divSkin.appendChild(me.__5);
		me._header.logicBlock_size();
		me._image_10.logicBlock_scaling();
		me._text_1.logicBlock_scaling();
		me._text_1.logicBlock_text();
		me._infopopup1.logicBlock_visible();
		me.__123.logicBlock_backgroundcolor();
		player.setVariableValue('vis_button_1', true);
		me.__222.logicBlock_backgroundcolor();
		me.__321.logicBlock_backgroundcolor();
		me.__421.logicBlock_backgroundcolor();
		me.__122.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me.__221.logicBlock_alpha();
		me.__320.logicBlock_alpha();
		me.__420.logicBlock_alpha();
		me.__419.logicBlock_bordercolor();
		me.__121.logicBlock_bordercolor();
		me.__220.logicBlock_bordercolor();
		me.__319.logicBlock_bordercolor();
		me._infopopupm.logicBlock_visible();
		me.__85.logicBlock_position();
		me._image_6661.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me._image_1112.logicBlock_alpha();
		me._image_121.logicBlock_alpha();
		me._image_1311.logicBlock_alpha();
		me.__120.logicBlock_bordercolor();
		player.setVariableValue('vis_button_1', true);
		me.__219.logicBlock_bordercolor();
		me.__318.logicBlock_bordercolor();
		me.__418.logicBlock_bordercolor();
		me._infopopup0.logicBlock_visible();
		me.__119.logicBlock_backgroundcolor();
		player.setVariableValue('vis_button_1', true);
		me.__218.logicBlock_backgroundcolor();
		me.__317.logicBlock_backgroundcolor();
		me.__417.logicBlock_backgroundcolor();
		me.__118.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me.__217.logicBlock_alpha();
		me.__316.logicBlock_alpha();
		me.__416.logicBlock_alpha();
		me.__415.logicBlock_bordercolor();
		me.__117.logicBlock_bordercolor();
		me.__216.logicBlock_bordercolor();
		me.__315.logicBlock_bordercolor();
		me._popupm0.logicBlock_visible();
		me._container_30.logicBlock_scaling();
		me.__72.logicBlock_size();
		me.__72.logicBlock_text();
		me._image_6660.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me._image_1110.logicBlock_alpha();
		me._image_120.logicBlock_alpha();
		me._image_1310.logicBlock_alpha();
		me.__116.logicBlock_bordercolor();
		player.setVariableValue('vis_button_1', true);
		me.__215.logicBlock_bordercolor();
		me.__314.logicBlock_bordercolor();
		me.__414.logicBlock_bordercolor();
		me._infopopup.logicBlock_visible();
		me.__115.logicBlock_backgroundcolor();
		player.setVariableValue('vis_button_1', true);
		me.__214.logicBlock_backgroundcolor();
		me.__313.logicBlock_backgroundcolor();
		me.__413.logicBlock_backgroundcolor();
		me.__114.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me.__213.logicBlock_alpha();
		me.__312.logicBlock_alpha();
		me.__412.logicBlock_alpha();
		me.__411.logicBlock_bordercolor();
		me.__113.logicBlock_bordercolor();
		me.__212.logicBlock_bordercolor();
		me.__311.logicBlock_bordercolor();
		me._popupm.logicBlock_visible();
		me._image_666.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me._image_111.logicBlock_alpha();
		me._image_12.logicBlock_alpha();
		me._image_131.logicBlock_alpha();
		me.__112.logicBlock_bordercolor();
		player.setVariableValue('vis_button_1', true);
		me.__211.logicBlock_bordercolor();
		me.__310.logicBlock_bordercolor();
		me.__410.logicBlock_bordercolor();
		me.__37.logicBlock_visible();
		me.__25.logicBlock_position();
		me.__25.logicBlock_scaling();
		me.__36.logicBlock_bordercolor();
		me._onoff.logicBlock_position();
		me._onoff.logicBlock_scaling();
		me._onoff.logicBlock_visible();
		me._off.logicBlock_visible();
		me._on.logicBlock_position();
		me._on.logicBlock_visible();
		me.__34.logicBlock_position();
		me.__33.logicBlock_visible();
		me.__31.logicBlock_bordercolor();
		me.__30.logicBlock_visible();
		me.__28.logicBlock_bordercolor();
		me.__27.logicBlock_visible();
		me._center0.logicBlock_size();
		me._center0.logicBlock_visible();
		me._center_0.logicBlock_scaling();
		me.__1_2.logicBlock_scaling();
		me.__9.logicBlock_size();
		me._text_30.logicBlock_scaling();
		me._center.logicBlock_size();
		me._center.logicBlock_visible();
		me._center_.logicBlock_scaling();
		me.__1_1.logicBlock_scaling();
		me.__8.logicBlock_size();
		me._text_3.logicBlock_scaling();
		me._centeronoff.logicBlock_size();
		me._centeronoff.logicBlock_visible();
		me._center_onoff.logicBlock_scaling();
		me.__1onoff.logicBlock_scaling();
		me._onoff_0.logicBlock_size();
		me._text_3onoff.logicBlock_size();
		me._text_3onoff.logicBlock_scaling();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('세탁기')) {
				for(var i = 0; i < hotspotTemplates['세탁기'].length; i++) {
					hotspotTemplates['세탁기'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션')) {
				for(var i = 0; i < hotspotTemplates['인덕션'].length; i++) {
					hotspotTemplates['인덕션'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문1')) {
				for(var i = 0; i < hotspotTemplates['창문1'].length; i++) {
					hotspotTemplates['창문1'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문2')) {
				for(var i = 0; i < hotspotTemplates['창문2'].length; i++) {
					hotspotTemplates['창문2'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('식탁1')) {
				for(var i = 0; i < hotspotTemplates['식탁1'].length; i++) {
					hotspotTemplates['식탁1'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('큰창')) {
				for(var i = 0; i < hotspotTemplates['큰창'].length; i++) {
					hotspotTemplates['큰창'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실가로')) {
				for(var i = 0; i < hotspotTemplates['거실가로'].length; i++) {
					hotspotTemplates['거실가로'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실세로')) {
				for(var i = 0; i < hotspotTemplates['거실세로'].length; i++) {
					hotspotTemplates['거실세로'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('수도')) {
				for(var i = 0; i < hotspotTemplates['수도'].length; i++) {
					hotspotTemplates['수도'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션-m')) {
				for(var i = 0; i < hotspotTemplates['인덕션-m'].length; i++) {
					hotspotTemplates['인덕션-m'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지-m')) {
				for(var i = 0; i < hotspotTemplates['가스레인지-m'].length; i++) {
					hotspotTemplates['가스레인지-m'][i].ggEvent_changenode();
				}
			}
			me.__123.logicBlock_backgroundcolor();
			me.__222.logicBlock_backgroundcolor();
			me.__321.logicBlock_backgroundcolor();
			me.__421.logicBlock_backgroundcolor();
			me.__122.logicBlock_alpha();
			me.__221.logicBlock_alpha();
			me.__320.logicBlock_alpha();
			me.__420.logicBlock_alpha();
			me.__419.logicBlock_bordercolor();
			me.__121.logicBlock_bordercolor();
			me.__220.logicBlock_bordercolor();
			me.__319.logicBlock_bordercolor();
			me._image_6661.logicBlock_alpha();
			me._image_1112.logicBlock_alpha();
			me._image_121.logicBlock_alpha();
			me._image_1311.logicBlock_alpha();
			me.__120.logicBlock_bordercolor();
			me.__219.logicBlock_bordercolor();
			me.__318.logicBlock_bordercolor();
			me.__418.logicBlock_bordercolor();
			me.__119.logicBlock_backgroundcolor();
			me.__218.logicBlock_backgroundcolor();
			me.__317.logicBlock_backgroundcolor();
			me.__417.logicBlock_backgroundcolor();
			me.__118.logicBlock_alpha();
			me.__217.logicBlock_alpha();
			me.__316.logicBlock_alpha();
			me.__416.logicBlock_alpha();
			me.__415.logicBlock_bordercolor();
			me.__117.logicBlock_bordercolor();
			me.__216.logicBlock_bordercolor();
			me.__315.logicBlock_bordercolor();
			me._image_6660.logicBlock_alpha();
			me._image_1110.logicBlock_alpha();
			me._image_120.logicBlock_alpha();
			me._image_1310.logicBlock_alpha();
			me.__116.logicBlock_bordercolor();
			me.__215.logicBlock_bordercolor();
			me.__314.logicBlock_bordercolor();
			me.__414.logicBlock_bordercolor();
			me.__115.logicBlock_backgroundcolor();
			me.__214.logicBlock_backgroundcolor();
			me.__313.logicBlock_backgroundcolor();
			me.__413.logicBlock_backgroundcolor();
			me.__114.logicBlock_alpha();
			me.__213.logicBlock_alpha();
			me.__312.logicBlock_alpha();
			me.__412.logicBlock_alpha();
			me.__411.logicBlock_bordercolor();
			me.__113.logicBlock_bordercolor();
			me.__212.logicBlock_bordercolor();
			me.__311.logicBlock_bordercolor();
			me._image_666.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__112.logicBlock_bordercolor();
			me.__211.logicBlock_bordercolor();
			me.__310.logicBlock_bordercolor();
			me.__410.logicBlock_bordercolor();
			me.__37.logicBlock_visible();
			me.__36.logicBlock_bordercolor();
			me._onoff.logicBlock_visible();
			me._off.logicBlock_visible();
			me._on.logicBlock_visible();
			me.__34.logicBlock_position();
			me.__31.logicBlock_bordercolor();
			me.__28.logicBlock_bordercolor();
			me._center0.logicBlock_visible();
			me._center.logicBlock_visible();
			me._centeronoff.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('세탁기')) {
				for(var i = 0; i < hotspotTemplates['세탁기'].length; i++) {
					hotspotTemplates['세탁기'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션')) {
				for(var i = 0; i < hotspotTemplates['인덕션'].length; i++) {
					hotspotTemplates['인덕션'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문1')) {
				for(var i = 0; i < hotspotTemplates['창문1'].length; i++) {
					hotspotTemplates['창문1'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문2')) {
				for(var i = 0; i < hotspotTemplates['창문2'].length; i++) {
					hotspotTemplates['창문2'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('식탁1')) {
				for(var i = 0; i < hotspotTemplates['식탁1'].length; i++) {
					hotspotTemplates['식탁1'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('큰창')) {
				for(var i = 0; i < hotspotTemplates['큰창'].length; i++) {
					hotspotTemplates['큰창'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실가로')) {
				for(var i = 0; i < hotspotTemplates['거실가로'].length; i++) {
					hotspotTemplates['거실가로'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실세로')) {
				for(var i = 0; i < hotspotTemplates['거실세로'].length; i++) {
					hotspotTemplates['거실세로'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('수도')) {
				for(var i = 0; i < hotspotTemplates['수도'].length; i++) {
					hotspotTemplates['수도'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션-m')) {
				for(var i = 0; i < hotspotTemplates['인덕션-m'].length; i++) {
					hotspotTemplates['인덕션-m'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지-m')) {
				for(var i = 0; i < hotspotTemplates['가스레인지-m'].length; i++) {
					hotspotTemplates['가스레인지-m'][i].ggEvent_configloaded();
				}
			}
			me._infopopup1.logicBlock_visible();
			me.__123.logicBlock_backgroundcolor();
			me.__222.logicBlock_backgroundcolor();
			me.__321.logicBlock_backgroundcolor();
			me.__421.logicBlock_backgroundcolor();
			me.__122.logicBlock_alpha();
			me.__221.logicBlock_alpha();
			me.__320.logicBlock_alpha();
			me.__420.logicBlock_alpha();
			me.__419.logicBlock_bordercolor();
			me.__121.logicBlock_bordercolor();
			me.__220.logicBlock_bordercolor();
			me.__319.logicBlock_bordercolor();
			me._image_6661.logicBlock_alpha();
			me._image_1112.logicBlock_alpha();
			me._image_121.logicBlock_alpha();
			me._image_1311.logicBlock_alpha();
			me.__120.logicBlock_bordercolor();
			me.__219.logicBlock_bordercolor();
			me.__318.logicBlock_bordercolor();
			me.__418.logicBlock_bordercolor();
			me._infopopup0.logicBlock_visible();
			me.__119.logicBlock_backgroundcolor();
			me.__218.logicBlock_backgroundcolor();
			me.__317.logicBlock_backgroundcolor();
			me.__417.logicBlock_backgroundcolor();
			me.__118.logicBlock_alpha();
			me.__217.logicBlock_alpha();
			me.__316.logicBlock_alpha();
			me.__416.logicBlock_alpha();
			me.__415.logicBlock_bordercolor();
			me.__117.logicBlock_bordercolor();
			me.__216.logicBlock_bordercolor();
			me.__315.logicBlock_bordercolor();
			me._image_6660.logicBlock_alpha();
			me._image_1110.logicBlock_alpha();
			me._image_120.logicBlock_alpha();
			me._image_1310.logicBlock_alpha();
			me.__116.logicBlock_bordercolor();
			me.__215.logicBlock_bordercolor();
			me.__314.logicBlock_bordercolor();
			me.__414.logicBlock_bordercolor();
			me._infopopup.logicBlock_visible();
			me.__115.logicBlock_backgroundcolor();
			me.__214.logicBlock_backgroundcolor();
			me.__313.logicBlock_backgroundcolor();
			me.__413.logicBlock_backgroundcolor();
			me.__114.logicBlock_alpha();
			me.__213.logicBlock_alpha();
			me.__312.logicBlock_alpha();
			me.__412.logicBlock_alpha();
			me.__411.logicBlock_bordercolor();
			me.__113.logicBlock_bordercolor();
			me.__212.logicBlock_bordercolor();
			me.__311.logicBlock_bordercolor();
			me._image_666.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__112.logicBlock_bordercolor();
			me.__211.logicBlock_bordercolor();
			me.__310.logicBlock_bordercolor();
			me.__410.logicBlock_bordercolor();
			me.__34.logicBlock_position();
			player.setMediaVisibility("\ub0c9\uc7a5\uace0\uce58\uc218","0",0);
			player.setMediaVisibility("\ucc3d\ubb381","0",0);
			player.setMediaVisibility("\ucc3d\ubb382","0",0);
			player.setMediaVisibility("\uc2dd\ud0c11","0",0);
			player.setMediaVisibility("\uac70\uc2e4\uac00\ub85c","0",0);
			player.setMediaVisibility("\uac70\uc2e4\uc138\ub85c","0",0);
			player.setMediaVisibility("\ud070\ucc3d","0",0);
			player.setMediaVisibility("\uac00\uc2a4\ub808\uc778\uc9c0","0",0);
			player.setMediaVisibility("\ube14\ub799\uc218\ub3c4","0",0);
			player.setMediaVisibility("\ud654\uc774\ud2b8\uc218\ub3c4","0",0);
			player.startAutoplayMedia();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('hsproxyclick', function(event) {
			if (hotspotTemplates.hasOwnProperty('세탁기')) {
				for(var i = 0; i < hotspotTemplates['세탁기'].length; i++) {
					hotspotTemplates['세탁기'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션')) {
				for(var i = 0; i < hotspotTemplates['인덕션'].length; i++) {
					hotspotTemplates['인덕션'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문1')) {
				for(var i = 0; i < hotspotTemplates['창문1'].length; i++) {
					hotspotTemplates['창문1'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문2')) {
				for(var i = 0; i < hotspotTemplates['창문2'].length; i++) {
					hotspotTemplates['창문2'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('식탁1')) {
				for(var i = 0; i < hotspotTemplates['식탁1'].length; i++) {
					hotspotTemplates['식탁1'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('큰창')) {
				for(var i = 0; i < hotspotTemplates['큰창'].length; i++) {
					hotspotTemplates['큰창'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실가로')) {
				for(var i = 0; i < hotspotTemplates['거실가로'].length; i++) {
					hotspotTemplates['거실가로'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실세로')) {
				for(var i = 0; i < hotspotTemplates['거실세로'].length; i++) {
					hotspotTemplates['거실세로'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('tv')) {
				for(var i = 0; i < hotspotTemplates['tv'].length; i++) {
					hotspotTemplates['tv'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('수도')) {
				for(var i = 0; i < hotspotTemplates['수도'].length; i++) {
					hotspotTemplates['수도'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('tv-on')) {
				for(var i = 0; i < hotspotTemplates['tv-on'].length; i++) {
					hotspotTemplates['tv-on'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('냉장고빌트인')) {
				for(var i = 0; i < hotspotTemplates['냉장고빌트인'].length; i++) {
					hotspotTemplates['냉장고빌트인'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션-m')) {
				for(var i = 0; i < hotspotTemplates['인덕션-m'].length; i++) {
					hotspotTemplates['인덕션-m'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지-m')) {
				for(var i = 0; i < hotspotTemplates['가스레인지-m'].length; i++) {
					hotspotTemplates['가스레인지-m'][i].ggEvent_hsproxyclick();
				}
			}
		});
		player.addListener('hsproxydblclick', function(event) {
			if (hotspotTemplates.hasOwnProperty('세탁기')) {
				for(var i = 0; i < hotspotTemplates['세탁기'].length; i++) {
					hotspotTemplates['세탁기'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션')) {
				for(var i = 0; i < hotspotTemplates['인덕션'].length; i++) {
					hotspotTemplates['인덕션'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문1')) {
				for(var i = 0; i < hotspotTemplates['창문1'].length; i++) {
					hotspotTemplates['창문1'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문2')) {
				for(var i = 0; i < hotspotTemplates['창문2'].length; i++) {
					hotspotTemplates['창문2'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('식탁1')) {
				for(var i = 0; i < hotspotTemplates['식탁1'].length; i++) {
					hotspotTemplates['식탁1'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('큰창')) {
				for(var i = 0; i < hotspotTemplates['큰창'].length; i++) {
					hotspotTemplates['큰창'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실가로')) {
				for(var i = 0; i < hotspotTemplates['거실가로'].length; i++) {
					hotspotTemplates['거실가로'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실세로')) {
				for(var i = 0; i < hotspotTemplates['거실세로'].length; i++) {
					hotspotTemplates['거실세로'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('tv')) {
				for(var i = 0; i < hotspotTemplates['tv'].length; i++) {
					hotspotTemplates['tv'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('수도')) {
				for(var i = 0; i < hotspotTemplates['수도'].length; i++) {
					hotspotTemplates['수도'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('tv-on')) {
				for(var i = 0; i < hotspotTemplates['tv-on'].length; i++) {
					hotspotTemplates['tv-on'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('냉장고빌트인')) {
				for(var i = 0; i < hotspotTemplates['냉장고빌트인'].length; i++) {
					hotspotTemplates['냉장고빌트인'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션-m')) {
				for(var i = 0; i < hotspotTemplates['인덕션-m'].length; i++) {
					hotspotTemplates['인덕션-m'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지-m')) {
				for(var i = 0; i < hotspotTemplates['가스레인지-m'].length; i++) {
					hotspotTemplates['가스레인지-m'][i].ggEvent_hsproxydblclick();
				}
			}
		});
		player.addListener('hsproxyout', function(event) {
			if (hotspotTemplates.hasOwnProperty('세탁기')) {
				for(var i = 0; i < hotspotTemplates['세탁기'].length; i++) {
					hotspotTemplates['세탁기'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션')) {
				for(var i = 0; i < hotspotTemplates['인덕션'].length; i++) {
					hotspotTemplates['인덕션'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문1')) {
				for(var i = 0; i < hotspotTemplates['창문1'].length; i++) {
					hotspotTemplates['창문1'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문2')) {
				for(var i = 0; i < hotspotTemplates['창문2'].length; i++) {
					hotspotTemplates['창문2'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('식탁1')) {
				for(var i = 0; i < hotspotTemplates['식탁1'].length; i++) {
					hotspotTemplates['식탁1'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('큰창')) {
				for(var i = 0; i < hotspotTemplates['큰창'].length; i++) {
					hotspotTemplates['큰창'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실가로')) {
				for(var i = 0; i < hotspotTemplates['거실가로'].length; i++) {
					hotspotTemplates['거실가로'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실세로')) {
				for(var i = 0; i < hotspotTemplates['거실세로'].length; i++) {
					hotspotTemplates['거실세로'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('tv')) {
				for(var i = 0; i < hotspotTemplates['tv'].length; i++) {
					hotspotTemplates['tv'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('수도')) {
				for(var i = 0; i < hotspotTemplates['수도'].length; i++) {
					hotspotTemplates['수도'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('tv-on')) {
				for(var i = 0; i < hotspotTemplates['tv-on'].length; i++) {
					hotspotTemplates['tv-on'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('냉장고빌트인')) {
				for(var i = 0; i < hotspotTemplates['냉장고빌트인'].length; i++) {
					hotspotTemplates['냉장고빌트인'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션-m')) {
				for(var i = 0; i < hotspotTemplates['인덕션-m'].length; i++) {
					hotspotTemplates['인덕션-m'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지-m')) {
				for(var i = 0; i < hotspotTemplates['가스레인지-m'].length; i++) {
					hotspotTemplates['가스레인지-m'][i].ggEvent_hsproxyout();
				}
			}
		});
		player.addListener('hsproxyover', function(event) {
			if (hotspotTemplates.hasOwnProperty('세탁기')) {
				for(var i = 0; i < hotspotTemplates['세탁기'].length; i++) {
					hotspotTemplates['세탁기'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션')) {
				for(var i = 0; i < hotspotTemplates['인덕션'].length; i++) {
					hotspotTemplates['인덕션'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문1')) {
				for(var i = 0; i < hotspotTemplates['창문1'].length; i++) {
					hotspotTemplates['창문1'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문2')) {
				for(var i = 0; i < hotspotTemplates['창문2'].length; i++) {
					hotspotTemplates['창문2'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('식탁1')) {
				for(var i = 0; i < hotspotTemplates['식탁1'].length; i++) {
					hotspotTemplates['식탁1'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('큰창')) {
				for(var i = 0; i < hotspotTemplates['큰창'].length; i++) {
					hotspotTemplates['큰창'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실가로')) {
				for(var i = 0; i < hotspotTemplates['거실가로'].length; i++) {
					hotspotTemplates['거실가로'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실세로')) {
				for(var i = 0; i < hotspotTemplates['거실세로'].length; i++) {
					hotspotTemplates['거실세로'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('tv')) {
				for(var i = 0; i < hotspotTemplates['tv'].length; i++) {
					hotspotTemplates['tv'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('수도')) {
				for(var i = 0; i < hotspotTemplates['수도'].length; i++) {
					hotspotTemplates['수도'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('tv-on')) {
				for(var i = 0; i < hotspotTemplates['tv-on'].length; i++) {
					hotspotTemplates['tv-on'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('냉장고빌트인')) {
				for(var i = 0; i < hotspotTemplates['냉장고빌트인'].length; i++) {
					hotspotTemplates['냉장고빌트인'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션-m')) {
				for(var i = 0; i < hotspotTemplates['인덕션-m'].length; i++) {
					hotspotTemplates['인덕션-m'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지-m')) {
				for(var i = 0; i < hotspotTemplates['가스레인지-m'].length; i++) {
					hotspotTemplates['가스레인지-m'][i].ggEvent_hsproxyover();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('세탁기')) {
				for(var i = 0; i < hotspotTemplates['세탁기'].length; i++) {
					hotspotTemplates['세탁기'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션')) {
				for(var i = 0; i < hotspotTemplates['인덕션'].length; i++) {
					hotspotTemplates['인덕션'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문1')) {
				for(var i = 0; i < hotspotTemplates['창문1'].length; i++) {
					hotspotTemplates['창문1'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문2')) {
				for(var i = 0; i < hotspotTemplates['창문2'].length; i++) {
					hotspotTemplates['창문2'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('식탁1')) {
				for(var i = 0; i < hotspotTemplates['식탁1'].length; i++) {
					hotspotTemplates['식탁1'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('큰창')) {
				for(var i = 0; i < hotspotTemplates['큰창'].length; i++) {
					hotspotTemplates['큰창'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실가로')) {
				for(var i = 0; i < hotspotTemplates['거실가로'].length; i++) {
					hotspotTemplates['거실가로'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실세로')) {
				for(var i = 0; i < hotspotTemplates['거실세로'].length; i++) {
					hotspotTemplates['거실세로'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('수도')) {
				for(var i = 0; i < hotspotTemplates['수도'].length; i++) {
					hotspotTemplates['수도'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('냉장고빌트인')) {
				for(var i = 0; i < hotspotTemplates['냉장고빌트인'].length; i++) {
					hotspotTemplates['냉장고빌트인'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('실외기실')) {
				for(var i = 0; i < hotspotTemplates['실외기실'].length; i++) {
					hotspotTemplates['실외기실'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션-m')) {
				for(var i = 0; i < hotspotTemplates['인덕션-m'].length; i++) {
					hotspotTemplates['인덕션-m'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지-m')) {
				for(var i = 0; i < hotspotTemplates['가스레인지-m'].length; i++) {
					hotspotTemplates['가스레인지-m'][i].ggEvent_sizechanged();
				}
			}
			me._header.logicBlock_size();
			me._image_10.logicBlock_scaling();
			me._text_1.logicBlock_scaling();
			me._text_1.logicBlock_text();
			me._infopopupm.logicBlock_visible();
			me.__85.logicBlock_position();
			me._popupm0.logicBlock_visible();
			me._container_30.logicBlock_scaling();
			me.__72.logicBlock_size();
			me.__72.logicBlock_text();
			me._popupm.logicBlock_visible();
			me.__25.logicBlock_position();
			me.__25.logicBlock_scaling();
			me._onoff.logicBlock_position();
			me._onoff.logicBlock_scaling();
			me._on.logicBlock_position();
			me.__33.logicBlock_visible();
			me.__30.logicBlock_visible();
			me.__27.logicBlock_visible();
			me._center0.logicBlock_size();
			me._center_0.logicBlock_scaling();
			me.__1_2.logicBlock_scaling();
			me.__9.logicBlock_size();
			me._text_30.logicBlock_scaling();
			me._center.logicBlock_size();
			me._center_.logicBlock_scaling();
			me.__1_1.logicBlock_scaling();
			me.__8.logicBlock_size();
			me._text_3.logicBlock_scaling();
			me._centeronoff.logicBlock_size();
			me._center_onoff.logicBlock_scaling();
			me.__1onoff.logicBlock_scaling();
			me._onoff_0.logicBlock_size();
			me._text_3onoff.logicBlock_size();
			me._text_3onoff.logicBlock_scaling();
		});
		player.addListener('varchanged_vis_buttonClick', function(event) {
			if (hotspotTemplates.hasOwnProperty('세탁기')) {
				for(var i = 0; i < hotspotTemplates['세탁기'].length; i++) {
					hotspotTemplates['세탁기'][i].ggEvent_varchanged_vis_buttonClick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_varchanged_vis_buttonClick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션')) {
				for(var i = 0; i < hotspotTemplates['인덕션'].length; i++) {
					hotspotTemplates['인덕션'][i].ggEvent_varchanged_vis_buttonClick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문1')) {
				for(var i = 0; i < hotspotTemplates['창문1'].length; i++) {
					hotspotTemplates['창문1'][i].ggEvent_varchanged_vis_buttonClick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션-m')) {
				for(var i = 0; i < hotspotTemplates['인덕션-m'].length; i++) {
					hotspotTemplates['인덕션-m'][i].ggEvent_varchanged_vis_buttonClick();
				}
			}
		});
		player.addListener('varchanged_vis_buttonClick_1', function(event) {
			if (hotspotTemplates.hasOwnProperty('창문2')) {
				for(var i = 0; i < hotspotTemplates['창문2'].length; i++) {
					hotspotTemplates['창문2'][i].ggEvent_varchanged_vis_buttonClick_1();
				}
			}
		});
		player.addListener('varchanged_vis_buttonClick_2', function(event) {
			if (hotspotTemplates.hasOwnProperty('식탁1')) {
				for(var i = 0; i < hotspotTemplates['식탁1'].length; i++) {
					hotspotTemplates['식탁1'][i].ggEvent_varchanged_vis_buttonClick_2();
				}
			}
		});
		player.addListener('varchanged_vis_buttonClick_3', function(event) {
			if (hotspotTemplates.hasOwnProperty('큰창')) {
				for(var i = 0; i < hotspotTemplates['큰창'].length; i++) {
					hotspotTemplates['큰창'][i].ggEvent_varchanged_vis_buttonClick_3();
				}
			}
		});
		player.addListener('varchanged_vis_buttonClick_4', function(event) {
			if (hotspotTemplates.hasOwnProperty('거실가로')) {
				for(var i = 0; i < hotspotTemplates['거실가로'].length; i++) {
					hotspotTemplates['거실가로'][i].ggEvent_varchanged_vis_buttonClick_4();
				}
			}
		});
		player.addListener('varchanged_vis_buttonClick_5', function(event) {
			if (hotspotTemplates.hasOwnProperty('거실세로')) {
				for(var i = 0; i < hotspotTemplates['거실세로'].length; i++) {
					hotspotTemplates['거실세로'][i].ggEvent_varchanged_vis_buttonClick_5();
				}
			}
		});
		player.addListener('varchanged_vis_button_1', function(event) {
			me.__123.logicBlock_backgroundcolor();
			me.__122.logicBlock_alpha();
			me.__121.logicBlock_bordercolor();
			me._image_6661.logicBlock_alpha();
			me.__120.logicBlock_bordercolor();
			me.__119.logicBlock_backgroundcolor();
			me.__118.logicBlock_alpha();
			me.__117.logicBlock_bordercolor();
			me._image_6660.logicBlock_alpha();
			me.__116.logicBlock_bordercolor();
			me.__115.logicBlock_backgroundcolor();
			me.__114.logicBlock_alpha();
			me.__113.logicBlock_bordercolor();
			me._image_666.logicBlock_alpha();
			me.__112.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_2', function(event) {
			me.__222.logicBlock_backgroundcolor();
			me.__221.logicBlock_alpha();
			me.__220.logicBlock_bordercolor();
			me._image_1112.logicBlock_alpha();
			me.__219.logicBlock_bordercolor();
			me.__218.logicBlock_backgroundcolor();
			me.__217.logicBlock_alpha();
			me.__216.logicBlock_bordercolor();
			me._image_1110.logicBlock_alpha();
			me.__215.logicBlock_bordercolor();
			me.__214.logicBlock_backgroundcolor();
			me.__213.logicBlock_alpha();
			me.__212.logicBlock_bordercolor();
			me._image_111.logicBlock_alpha();
			me.__211.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_3', function(event) {
			me.__321.logicBlock_backgroundcolor();
			me.__320.logicBlock_alpha();
			me.__319.logicBlock_bordercolor();
			me._image_121.logicBlock_alpha();
			me.__318.logicBlock_bordercolor();
			me.__317.logicBlock_backgroundcolor();
			me.__316.logicBlock_alpha();
			me.__315.logicBlock_bordercolor();
			me._image_120.logicBlock_alpha();
			me.__314.logicBlock_bordercolor();
			me.__313.logicBlock_backgroundcolor();
			me.__312.logicBlock_alpha();
			me.__311.logicBlock_bordercolor();
			me._image_12.logicBlock_alpha();
			me.__310.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_4', function(event) {
			me.__421.logicBlock_backgroundcolor();
			me.__420.logicBlock_alpha();
			me.__419.logicBlock_bordercolor();
			me._image_1311.logicBlock_alpha();
			me.__418.logicBlock_bordercolor();
			me.__417.logicBlock_backgroundcolor();
			me.__416.logicBlock_alpha();
			me.__415.logicBlock_bordercolor();
			me._image_1310.logicBlock_alpha();
			me.__414.logicBlock_bordercolor();
			me.__413.logicBlock_backgroundcolor();
			me.__412.logicBlock_alpha();
			me.__411.logicBlock_bordercolor();
			me._image_131.logicBlock_alpha();
			me.__410.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_onoff', function(event) {
			me.__34.logicBlock_position();
		});
		player.addListener('varchanged_vis_select', function(event) {
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_varchanged_vis_select();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지-m')) {
				for(var i = 0; i < hotspotTemplates['가스레인지-m'].length; i++) {
					hotspotTemplates['가스레인지-m'][i].ggEvent_varchanged_vis_select();
				}
			}
		});
		player.addListener('varchanged_vis_select_1', function(event) {
			if (hotspotTemplates.hasOwnProperty('수도')) {
				for(var i = 0; i < hotspotTemplates['수도'].length; i++) {
					hotspotTemplates['수도'][i].ggEvent_varchanged_vis_select_1();
				}
			}
		});
		player.addListener('varchanged_vis_slidebutton', function(event) {
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_varchanged_vis_slidebutton();
				}
			}
			if (hotspotTemplates.hasOwnProperty('가스레인지-m')) {
				for(var i = 0; i < hotspotTemplates['가스레인지-m'].length; i++) {
					hotspotTemplates['가스레인지-m'][i].ggEvent_varchanged_vis_slidebutton();
				}
			}
		});
		player.addListener('varchanged_vis_slidebutton_1', function(event) {
			if (hotspotTemplates.hasOwnProperty('수도')) {
				for(var i = 0; i < hotspotTemplates['수도'].length; i++) {
					hotspotTemplates['수도'][i].ggEvent_varchanged_vis_slidebutton_1();
				}
			}
		});
		player.addListener('varchanged_vis_tag', function(event) {
			if (hotspotTemplates.hasOwnProperty('세탁기')) {
				for(var i = 0; i < hotspotTemplates['세탁기'].length; i++) {
					hotspotTemplates['세탁기'][i].ggEvent_varchanged_vis_tag();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_varchanged_vis_tag();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션')) {
				for(var i = 0; i < hotspotTemplates['인덕션'].length; i++) {
					hotspotTemplates['인덕션'][i].ggEvent_varchanged_vis_tag();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문1')) {
				for(var i = 0; i < hotspotTemplates['창문1'].length; i++) {
					hotspotTemplates['창문1'][i].ggEvent_varchanged_vis_tag();
				}
			}
			if (hotspotTemplates.hasOwnProperty('창문2')) {
				for(var i = 0; i < hotspotTemplates['창문2'].length; i++) {
					hotspotTemplates['창문2'][i].ggEvent_varchanged_vis_tag();
				}
			}
			if (hotspotTemplates.hasOwnProperty('식탁1')) {
				for(var i = 0; i < hotspotTemplates['식탁1'].length; i++) {
					hotspotTemplates['식탁1'][i].ggEvent_varchanged_vis_tag();
				}
			}
			if (hotspotTemplates.hasOwnProperty('큰창')) {
				for(var i = 0; i < hotspotTemplates['큰창'].length; i++) {
					hotspotTemplates['큰창'][i].ggEvent_varchanged_vis_tag();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실가로')) {
				for(var i = 0; i < hotspotTemplates['거실가로'].length; i++) {
					hotspotTemplates['거실가로'][i].ggEvent_varchanged_vis_tag();
				}
			}
			if (hotspotTemplates.hasOwnProperty('거실세로')) {
				for(var i = 0; i < hotspotTemplates['거실세로'].length; i++) {
					hotspotTemplates['거실세로'][i].ggEvent_varchanged_vis_tag();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션-m')) {
				for(var i = 0; i < hotspotTemplates['인덕션-m'].length; i++) {
					hotspotTemplates['인덕션-m'][i].ggEvent_varchanged_vis_tag();
				}
			}
		});
		player.addListener('varchanged_vis_waterselect', function(event) {
			if (hotspotTemplates.hasOwnProperty('수도')) {
				for(var i = 0; i < hotspotTemplates['수도'].length; i++) {
					hotspotTemplates['수도'][i].ggEvent_varchanged_vis_waterselect();
				}
			}
		});
		player.addListener('varchanged_vis_waterselect_0', function(event) {
			if (hotspotTemplates.hasOwnProperty('수도')) {
				for(var i = 0; i < hotspotTemplates['수도'].length; i++) {
					hotspotTemplates['수도'][i].ggEvent_varchanged_vis_waterselect_0();
				}
			}
		});
	};
	function SkinHotspotClass_m(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._m=document.createElement('div');
		el.ggId="\uac00\uc2a4\ub808\uc778\uc9c0-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._m.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._m.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._m.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._m.style.transition='left 0s, top 0s';
				if (me._m.ggCurrentLogicStatePosition == 0) {
					me._m.style.left='0px';
					me._m.style.top='-40px';
				}
				else {
					me._m.style.left='0px';
					me._m.style.top='0px';
				}
			}
		}
		me._m.logicBlock_position();
		me._m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m.style.transition='left 0s, top 0s';
				if (me._m.ggCurrentLogicStateVisible == 0) {
					me._m.style.visibility=(Number(me._m.style.opacity)>0||!me._m.style.opacity)?'inherit':'hidden';
					me._m.ggVisible=true;
				}
				else {
					me._m.style.visibility="hidden";
					me._m.ggVisible=false;
				}
			}
		}
		me._m.logicBlock_visible();
		me._m.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._m.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._m.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['m']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._m.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['m']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		el.ggId="\uc2a4\ub974\ub975\ubc84\ud2bc";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -55px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__0.style.transition='transform 0s, opacity 0s';
				if (me.__0.ggCurrentLogicStateScaling == 0) {
					me.__0.ggParameter.sx = 0.9;
					me.__0.ggParameter.sy = 0.9;
					me.__0.style.transform=parameterToTransform(me.__0.ggParameter);
					skin.updateSize(me.__0);
				}
				else {
					me.__0.ggParameter.sx = 1;
					me.__0.ggParameter.sy = 1;
					me.__0.style.transform=parameterToTransform(me.__0.ggParameter);
					skin.updateSize(me.__0);
				}
			}
		}
		me.__0.logicBlock_scaling();
		me.__0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_slidebutton') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__0.style.transition='transform 0s, opacity 0s';
				if (me.__0.ggCurrentLogicStateAlpha == 0) {
					me.__0.style.visibility=me.__0.ggVisible?'inherit':'hidden';
					me.__0.style.opacity=1;
				}
				else {
					me.__0.style.visibility="hidden";
					me.__0.style.opacity=0;
				}
			}
		}
		me.__0.logicBlock_alpha();
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		el.ggId="\uc2a4\ub974\ub975\uc2ac\ub77c\uc774\ub4dc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 1%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_slidebutton') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1.style.transition='width 500ms ease 0ms, height 500ms ease 0ms';
				if (me.__1.ggCurrentLogicStateSize == 0) {
					me.__1.style.width='100%';
					me.__1.style.height='100%';
					setTimeout(function() {skin.updateSize(me.__1);}, 550);
				}
				else {
					me.__1.style.width='100%';
					me.__1.style.height='1%';
					setTimeout(function() {skin.updateSize(me.__1);}, 550);
				}
			}
		}
		me.__1.logicBlock_size();
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3=document.createElement('div');
		el.ggId="\uac00\uc2a4\ub808\uc778\uc9c0-\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_select') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__3.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__3.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__3.style.transition='border-color 0s';
				if (me.__3.ggCurrentLogicStateBorderColor == 0) {
					me.__3.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__3.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__3.logicBlock_bordercolor();
		me.__3.onclick=function (e) {
			player.setMediaVisibility("\uac00\uc2a4\ub808\uc778\uc9c0","0",500);
			player.setVariableValue('vis_select', false);
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_a=document.createElement('div');
		els=me._text_a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text A";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-weight:600;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_a.ggUpdateText=function() {
			var params = [];
			var hs = player._("A", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_a.ggUpdateText();
		el.appendChild(els);
		me._text_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_a.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._text_a);
		me.__1.appendChild(me.__3);
		el=me.__2=document.createElement('div');
		el.ggId="\uc778\ub355\uc158_\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_select') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__2.style.transition='border-color 0s';
				if (me.__2.ggCurrentLogicStateBorderColor == 0) {
					me.__2.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__2.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__2.logicBlock_bordercolor();
		me.__2.onclick=function (e) {
			player.setMediaVisibility("\uac00\uc2a4\ub808\uc778\uc9c0","1",500);
			player.setVariableValue('vis_select', true);
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_b=document.createElement('div');
		els=me._text_b__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text B";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-weight:600;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_b.ggUpdateText=function() {
			var params = [];
			var hs = player._("B\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_b.ggUpdateText();
		el.appendChild(els);
		me._text_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_b.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me._text_b);
		me.__1.appendChild(me.__2);
		me.__0.appendChild(me.__1);
		me._m.appendChild(me.__0);
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 3px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_2.style.transition='width 0s, height 0s';
				if (me._external_2.ggCurrentLogicStateSize == 0) {
					me._external_2.style.width='30px';
					me._external_2.style.height='30px';
					me._external_2.style.left = 'calc(50% - (30px / 2) + (6px / 2))';
					me._external_2.style.top = 'calc(50% - (30px / 2) + (6px / 2))';
					skin.updateSize(me._external_2);
				}
				else {
					me._external_2.style.width='40px';
					me._external_2.style.height='40px';
					me._external_2.style.left = 'calc(50% - (40px / 2) + (6px / 2))';
					me._external_2.style.top = 'calc(50% - (40px / 2) + (6px / 2))';
					skin.updateSize(me._external_2);
				}
			}
		}
		me._external_2.logicBlock_size();
		me._external_2.onclick=function (e) {
			player.setVariableValue('vis_slidebutton', !player.getVariableValue('vis_slidebutton'));
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__=document.createElement('div');
		el.ggId="\uac00\uc2a4\ub808\uc778\uc9c0\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 4px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_slidebutton') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__.style.transition='border-color 0s';
				if (me.__.ggCurrentLogicStateBorderColor == 0) {
					me.__.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__.logicBlock_bordercolor();
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4=document.createElement('div');
		el.ggId="\uac00\uc2a4\ub808\uc778\uc9c0 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me.__4);
		el=me._image_=document.createElement('div');
		els=me._image___img=document.createElement('img');
		els.className='ggskin ggskin_image_';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAACDklEQVR4nO3cQUocURRG4d+eZAOOMoxbCGQrGsjqsoPeRaAnLkKDnWQBycDrIOUgGWjXo+7rA54PClGrLrc40NoleFFVEcfu3AvoXwaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoGZGWSX5CbJPskxSS0f98vXR3bZembHjutU1YzjQ1Ud6mWH5bxzzezYcfUxK8bDKzf67OHEG956ZseOQ8dFVet/A9ol+Zbk44prDkk+JXmcNLNjx2Hdr4nXWXejWc6/njizY8dh3UG+NFy39c'+
			'yOHYd1v2T9SHI5cN33JO8nzezYcVh3kNHhf5K8mzSzY8dh3S9ZPwev+zVxZseOw7qDHAavu504s2PHYd1BvjZct/XMjh2H+T7kjb0Peczf39ePJ55/XM5/6Ua3ntmx47iuRwD/HVd12nOiqzPO7NgR+Szr+dhV1U1V7avqrqp+V9X98vnn5fvnntmx46qj+2eIVvIPVDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgME/6AHD9wMnPMgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image \uac00\uc2a4\ub808\uc778\uc9c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me._image_);
		me._external_2.appendChild(me.__);
		me._m.appendChild(me._external_2);
		me._m.logicBlock_position();
		me._m.logicBlock_visible();
		me.__0.logicBlock_scaling();
		me.__0.logicBlock_alpha();
		me.__1.logicBlock_size();
		me.__3.logicBlock_bordercolor();
		me.__2.logicBlock_bordercolor();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 3) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 3) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_2.logicBlock_size();
		me.__.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me.__0.logicBlock_alpha();
				me.__1.logicBlock_size();
				me.__3.logicBlock_bordercolor();
				me.__2.logicBlock_bordercolor();
				me.__.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me.__0.logicBlock_alpha();
				me.__1.logicBlock_size();
				me.__3.logicBlock_bordercolor();
				me.__2.logicBlock_bordercolor();
				me.__.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='가스레인지') {
					me._m.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='가스레인지') {
					me._m.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='가스레인지') {
					me._m.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='가스레인지') {
					me._m.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._m.logicBlock_position();
				me._m.logicBlock_visible();
				me.__0.logicBlock_scaling();
				me._external_2.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_select=function() {
				me.__3.logicBlock_bordercolor();
				me.__2.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_slidebutton=function() {
				me.__0.logicBlock_alpha();
				me.__1.logicBlock_size();
				me.__.logicBlock_bordercolor();
			};
			me.__div = me._m;
	};
	function SkinHotspotClass_m0(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._m0=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._m0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._m0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._m0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._m0.style.transition='left 0s, top 0s';
				if (me._m0.ggCurrentLogicStatePosition == 0) {
					me._m0.style.left='-150px';
					me._m0.style.top='0px';
				}
				else {
					me._m0.style.left='0px';
					me._m0.style.top='0px';
				}
			}
		}
		me._m0.logicBlock_position();
		me._m0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m0.style.transition='left 0s, top 0s';
				if (me._m0.ggCurrentLogicStateVisible == 0) {
					me._m0.style.visibility=(Number(me._m0.style.opacity)>0||!me._m0.style.opacity)?'inherit':'hidden';
					me._m0.ggVisible=true;
				}
				else {
					me._m0.style.visibility="hidden";
					me._m0.ggVisible=false;
				}
			}
		}
		me._m0.logicBlock_visible();
		me._m0.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._m0.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._m0.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['m0']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._m0.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['m0']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._m0.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._external_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._external_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._external_1.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._external_1.ggCurrentLogicStatePosition == 0) {
					me._external_1.style.left = 'calc(50% - (50px / 2))';
					me._external_1.style.top = 'calc(50% - (50px / 2))';
				}
				else {
					me._external_1.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me._external_1.style.top='calc(50% - ((50px + 0px) / 2) + 0px)';
				}
			}
		}
		me._external_1.logicBlock_position();
		me._external_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_1.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._external_1.ggCurrentLogicStateSize == 0) {
					me._external_1.style.width='30px';
					me._external_1.style.height='30px';
					me._external_1.style.left = 'calc(50% - (30px / 2))';
					me._external_1.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._external_1);
				}
				else {
					me._external_1.style.width='50px';
					me._external_1.style.height='50px';
					me._external_1.style.left = 'calc(50% - (50px / 2))';
					me._external_1.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._external_1);
				}
			}
		}
		me._external_1.logicBlock_size();
		me._external_1.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width >= 460))
				)
			) {
				skin._infopopup.style.transition='none';
				skin._infopopup.style.visibility=(Number(skin._infopopup.style.opacity)>0||!skin._infopopup.style.opacity)?'inherit':'hidden';
				skin._infopopup.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				skin._popupm.style.transition='none';
				skin._popupm.style.visibility=(Number(skin._popupm.style.opacity)>0||!skin._popupm.style.opacity)?'inherit':'hidden';
				skin._popupm.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				skin.__25.style.transition='none';
				skin.__25.style.visibility='hidden';
				skin.__25.ggVisible=false;
			}
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._bg1=document.createElement('div');
		el.ggId="bg-\ucc3d\ubb381";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 5px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bg1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._bg1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._bg1.ggCurrentLogicStateSize = newLogicStateSize;
				me._bg1.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg1.ggCurrentLogicStateSize == 0) {
					me._bg1.style.width='30px';
					me._bg1.style.height='30px';
					skin.updateSize(me._bg1);
				}
				else {
					me._bg1.style.width='40px';
					me._bg1.style.height='40px';
					skin.updateSize(me._bg1);
				}
			}
		}
		me._bg1.logicBlock_size();
		me._bg1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_tag') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg1.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg1.ggCurrentLogicStateScaling == 0) {
					me._bg1.ggParameter.sx = 1.1;
					me._bg1.ggParameter.sy = 1.1;
					me._bg1.style.transform=parameterToTransform(me._bg1.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg1);}, 550);
				}
				else {
					me._bg1.ggParameter.sx = 1;
					me._bg1.ggParameter.sy = 1;
					me._bg1.style.transform=parameterToTransform(me._bg1.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg1);}, 550);
				}
			}
		}
		me._bg1.logicBlock_scaling();
		me._bg1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_buttonClick') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._bg1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._bg1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._bg1.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg1.ggCurrentLogicStateBorderColor == 0) {
					me._bg1.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._bg1.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me._bg1.logicBlock_bordercolor();
		me._bg1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_0=document.createElement('div');
		el.ggId="\ucc3d\ubb381 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1_0.ggUpdatePosition=function (useTransition) {
		}
		me._bg1.appendChild(me.__1_0);
		el=me.__1_=document.createElement('div');
		els=me.__1___img=document.createElement('img');
		els.className='ggskin ggskin__1_';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVRYhe2Y0Q2CMBRFL88JWMEVWIEVdARdwU8/dQRdwRFkBB1BV2CDqz/UmAZsnk9SYt5J+lFoX05IobcUMEKyBLACUHeX7gBOItJYa5ukSF5IPnraKqfYbkAqtPLb2mJ0q4z3B7GKjYaLaXExLS6mxcW0uJiWAnhFlwOARV4d3AHsReQYxC4wbLgjsJyRrABsc5vECICvM9OIlJNd/NJl8za3SEQTntga05FrRGRfhF73ydC+mbvEnA2Aq6JeKyKa8f2QPCcOI3W6Sj/TXfy5BYZwMS0upsXFtLiYlr8VSyWSPImFZP1hAz9nkXqTW5C8RVIHy2/On0Jybok5MU/bY8Sut5lQVwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucc3d\ubb381 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1_.ggUpdatePosition=function (useTransition) {
		}
		me._bg1.appendChild(me.__1_);
		me._external_1.appendChild(me._bg1);
		me._m0.appendChild(me._external_1);
		me._m0.logicBlock_position();
		me._m0.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_1.logicBlock_position();
		me._external_1.logicBlock_size();
		me._bg1.logicBlock_size();
		me._bg1.logicBlock_scaling();
		me._bg1.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._bg1.logicBlock_scaling();
				me._bg1.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._bg1.logicBlock_scaling();
				me._bg1.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='인덕션') {
					me._m0.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='인덕션') {
					me._m0.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='인덕션') {
					me._m0.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='인덕션') {
					me._m0.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._m0.logicBlock_position();
				me._m0.logicBlock_visible();
				me._external_1.logicBlock_position();
				me._external_1.logicBlock_size();
				me._bg1.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_buttonClick=function() {
				me._bg1.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_tag=function() {
				me._bg1.logicBlock_scaling();
			};
			me.__div = me._m0;
	};
	function SkinHotspotClass__10(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__10=document.createElement('div');
		el.ggId="\uc2e4\uc678\uae30\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__10.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__10.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__10.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_10']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__10.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_10']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_6=document.createElement('div');
		els=me._external_6__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_6.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_6.ggSubElement.setAttribute('alt', player._(me._external_6.ggAltText));
			me._external_6.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_6.ggText_untranslated = img;
			me._external_6.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_6.ggSubElement.style.width = '0px';
			me._external_6.ggSubElement.style.height = '0px';
			me._external_6.ggSubElement.src='';
			me._external_6.ggSubElement.src=me._external_6.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_6.ggText != player._(me._external_6.ggText_untranslated)) {
				me._external_6.ggText = player._(me._external_6.ggText_untranslated);
				me._external_6.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._external_6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._external_6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._external_6.style.transition='transform 0s';
				if (me._external_6.ggCurrentLogicStateScaling == 0) {
					me._external_6.ggParameter.sx = 0.8;
					me._external_6.ggParameter.sy = 0.8;
					me._external_6.style.transform=parameterToTransform(me._external_6.ggParameter);
					skin.updateSize(me._external_6);
				}
				else {
					me._external_6.ggParameter.sx = 1;
					me._external_6.ggParameter.sy = 1;
					me._external_6.style.transform=parameterToTransform(me._external_6.ggParameter);
					skin.updateSize(me._external_6);
				}
			}
		}
		me._external_6.logicBlock_scaling();
		me._external_6.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_6.clientWidth;
			var parentHeight = me._external_6.clientHeight;
			var img = me._external_6__img;
			var aspectRatioDiv = me._external_6.clientWidth / me._external_6.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_6.ggScrollbars || currentWidth < me._external_6.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_6.ggScrollbars || currentHeight < me._external_6.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._text_6=document.createElement('div');
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:20px; font-weight:700;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_6.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2e4\uc678\uae30\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6.ggUpdateText();
		el.appendChild(els);
		me._text_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_6.ggUpdatePosition=function (useTransition) {
		}
		me._external_6.appendChild(me._text_6);
		me.__10.appendChild(me._external_6);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_6.style.width=hotspot.customimagewidth + 'px';
			me._external_6.style.height=hotspot.customimageheight + 'px';
		}
		me._external_6.logicBlock_scaling();
			me.ggEvent_sizechanged=function() {
				me._external_6.logicBlock_scaling();
			};
			me.__div = me.__10;
	};
	function SkinHotspotClass__11(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__11=document.createElement('div');
		el.ggId="\ub0c9\uc7a5\uace0\ube4c\ud2b8\uc778";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__11.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__11.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__11.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_11']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__11.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_11']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_5=document.createElement('div');
		els=me._external_5__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_5.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_5.ggSubElement.setAttribute('alt', player._(me._external_5.ggAltText));
			me._external_5.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_5.ggText_untranslated = img;
			me._external_5.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_5.ggSubElement.style.width = '0px';
			me._external_5.ggSubElement.style.height = '0px';
			me._external_5.ggSubElement.src='';
			me._external_5.ggSubElement.src=me._external_5.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_5.ggText != player._(me._external_5.ggText_untranslated)) {
				me._external_5.ggText = player._(me._external_5.ggText_untranslated);
				me._external_5.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_5.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._external_5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._external_5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._external_5.style.transition='left 0s, top 0s, transform 0s';
				if (me._external_5.ggCurrentLogicStatePosition == 0) {
					me._external_5.style.left = 'calc(50% - (80px / 2) + (0px / 2) + 15px)';
					me._external_5.style.top = 'calc(50% - (80px / 2))';
				}
				else {
					me._external_5.style.left='calc(50% - ((80px + 0px) / 2) + 0px)';
					me._external_5.style.top='calc(50% - ((80px + 0px) / 2) + 0px)';
				}
			}
		}
		me._external_5.logicBlock_position();
		me._external_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._external_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._external_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._external_5.style.transition='left 0s, top 0s, transform 0s';
				if (me._external_5.ggCurrentLogicStateScaling == 0) {
					me._external_5.ggParameter.sx = 0.6;
					me._external_5.ggParameter.sy = 0.6;
					me._external_5.style.transform=parameterToTransform(me._external_5.ggParameter);
					skin.updateSize(me._external_5);
				}
				else {
					me._external_5.ggParameter.sx = 1;
					me._external_5.ggParameter.sy = 1;
					me._external_5.style.transform=parameterToTransform(me._external_5.ggParameter);
					skin.updateSize(me._external_5);
				}
			}
		}
		me._external_5.logicBlock_scaling();
		me._external_5.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_5.clientWidth;
			var parentHeight = me._external_5.clientHeight;
			var img = me._external_5__img;
			var aspectRatioDiv = me._external_5.clientWidth / me._external_5.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_5.ggScrollbars || currentWidth < me._external_5.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_5.ggScrollbars || currentHeight < me._external_5.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(254,153,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:20px; font-weight:700;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ube4c\ud2b8\uc778\n\ub0c9\uc7a5\uace0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5.ggUpdateText();
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		me._external_5.appendChild(me._text_5);
		me.__11.appendChild(me._external_5);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_5.style.width=hotspot.customimagewidth + 'px';
			me._external_5.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_5.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_5.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_5.logicBlock_position();
		me._external_5.logicBlock_scaling();
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='냉장고빌트인') {
					me.__11.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='냉장고빌트인') {
					me.__11.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='냉장고빌트인') {
					me.__11.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='냉장고빌트인') {
					me.__11.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._external_5.logicBlock_position();
				me._external_5.logicBlock_scaling();
			};
			me.__div = me.__11;
	};
	function SkinHotspotClass_tvon(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._tvon=document.createElement('div');
		el.ggId="tv-on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._tvon.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._tvon.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._tvon.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._tvon.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['tvon']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._tvon.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['tvon']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._tvon.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_3=document.createElement('div');
		els=me._external_3__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_3.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_3.ggSubElement.setAttribute('alt', player._(me._external_3.ggAltText));
			me._external_3.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_3.ggText_untranslated = img;
			me._external_3.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_3.ggSubElement.style.width = '0px';
			me._external_3.ggSubElement.style.height = '0px';
			me._external_3.ggSubElement.src='';
			me._external_3.ggSubElement.src=me._external_3.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_3.ggText != player._(me._external_3.ggText_untranslated)) {
				me._external_3.ggText = player._(me._external_3.ggText_untranslated);
				me._external_3.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_3.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_3.clientWidth;
			var parentHeight = me._external_3.clientHeight;
			var img = me._external_3__img;
			var aspectRatioDiv = me._external_3.clientWidth / me._external_3.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentHeight;
			img.style.width=parentWidth + 'px';
			img.style.height=parentHeight + 'px';
			if (!me._external_3.ggScrollbars || currentWidth < me._external_3.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_3.ggScrollbars || currentHeight < me._external_3.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._video_1=document.createElement('div');
		me._video_1.seekbars = [];
		me._video_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if (me._video_1__vid) {
				me._video_1__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1.ggVideoNotLoaded == false && me._video_1.ggDeactivate && player.isPlaying('video_1')) { me._video_1.ggDeactivate(); }
				me._video_1.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_1');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('video');
			me._video_1__vid.className='ggskin ggskin_video';
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_1__vid.setAttribute('controlsList', 'nodownload');
			me._video_1__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_1__vid.setAttribute('autoplay', '');
			me._video_1__source=document.createElement('source');
			me._video_1__source.setAttribute('src', media);
			me._video_1__vid.setAttribute('playsinline', 'playsinline');
			me._video_1__vid.setAttribute('style', ';');
			me._video_1__vid.style.outline = 'none';
			me._video_1__vid.appendChild(me._video_1__source);
			me._video_1.appendChild(me._video_1__vid);
			var videoEl = player.registerVideoElement('Video 1', me._video_1__vid);
			videoEl.autoplay = true;
			player.changeVolume('Video 1', 0.0);
			notifySeekbars();
			me._video_1.ggVideoSource = media;
		}
		el.ggId="Video 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((160px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_1.ggIsActive=function() {
			if (me._video_1__vid != null) {
				return (me._video_1__vid.paused == false && me._video_1__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_1.ggUpdatePosition=function (useTransition) {
		}
		me._external_3.appendChild(me._video_1);
		me._tvon.appendChild(me._external_3);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_3.style.width=hotspot.customimagewidth + 'px';
			me._external_3.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_3.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_3.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._video_1.ggInitMedia('media/');
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='tv') {
					me._tvon.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='tv') {
					me._tvon.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='tv') {
					me._tvon.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='tv') {
					me._tvon.onmouseover();
				}
			};
			me.__div = me._tvon;
	};
	function SkinHotspotClass__12(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__12=document.createElement('div');
		el.ggId="\uac00\uc2a4\ub808\uc778\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__12.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__12.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__12.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__12.style.transition='left 0s, top 0s';
				if (me.__12.ggCurrentLogicStatePosition == 0) {
					me.__12.style.left='0px';
					me.__12.style.top='-40px';
				}
				else {
					me.__12.style.left='0px';
					me.__12.style.top='0px';
				}
			}
		}
		me.__12.logicBlock_position();
		me.__12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__12.style.transition='left 0s, top 0s';
				if (me.__12.ggCurrentLogicStateVisible == 0) {
					me.__12.style.visibility="hidden";
					me.__12.ggVisible=false;
				}
				else {
					me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
					me.__12.ggVisible=true;
				}
			}
		}
		me.__12.logicBlock_visible();
		me.__12.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__12.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__12.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_12']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__12.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_12']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		el.ggId="\uc2a4\ub974\ub975\ubc84\ud2bc";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -55px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__14.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__14.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__14.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__14.style.transition='transform 0s, opacity 0s';
				if (me.__14.ggCurrentLogicStateScaling == 0) {
					me.__14.ggParameter.sx = 0.9;
					me.__14.ggParameter.sy = 0.9;
					me.__14.style.transform=parameterToTransform(me.__14.ggParameter);
					skin.updateSize(me.__14);
				}
				else {
					me.__14.ggParameter.sx = 1;
					me.__14.ggParameter.sy = 1;
					me.__14.style.transform=parameterToTransform(me.__14.ggParameter);
					skin.updateSize(me.__14);
				}
			}
		}
		me.__14.logicBlock_scaling();
		me.__14.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_slidebutton') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__14.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__14.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__14.style.transition='transform 0s, opacity 0s';
				if (me.__14.ggCurrentLogicStateAlpha == 0) {
					me.__14.style.visibility=me.__14.ggVisible?'inherit':'hidden';
					me.__14.style.opacity=1;
				}
				else {
					me.__14.style.visibility="hidden";
					me.__14.style.opacity=0;
				}
			}
		}
		me.__14.logicBlock_alpha();
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		el.ggId="\uc2a4\ub974\ub975\uc2ac\ub77c\uc774\ub4dc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 1%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__15.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_slidebutton') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__15.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__15.ggCurrentLogicStateSize = newLogicStateSize;
				me.__15.style.transition='width 500ms ease 0ms, height 500ms ease 0ms';
				if (me.__15.ggCurrentLogicStateSize == 0) {
					me.__15.style.width='100%';
					me.__15.style.height='100%';
					setTimeout(function() {skin.updateSize(me.__15);}, 550);
				}
				else {
					me.__15.style.width='100%';
					me.__15.style.height='1%';
					setTimeout(function() {skin.updateSize(me.__15);}, 550);
				}
			}
		}
		me.__15.logicBlock_size();
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		el.ggId="\uac00\uc2a4\ub808\uc778\uc9c0-\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__17.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_select') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__17.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__17.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__17.style.transition='border-color 0s';
				if (me.__17.ggCurrentLogicStateBorderColor == 0) {
					me.__17.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__17.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__17.logicBlock_bordercolor();
		me.__17.onclick=function (e) {
			player.setMediaVisibility("\uac00\uc2a4\ub808\uc778\uc9c0","0",500);
			player.setVariableValue('vis_select', false);
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_a0=document.createElement('div');
		els=me._text_a0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text A";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-weight:600;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_a0.ggUpdateText=function() {
			var params = [];
			var hs = player._("A", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_a0.ggUpdateText();
		el.appendChild(els);
		me._text_a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_a0.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me._text_a0);
		me.__15.appendChild(me.__17);
		el=me.__16=document.createElement('div');
		el.ggId="\uc778\ub355\uc158_\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__16.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_select') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__16.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__16.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__16.style.transition='border-color 0s';
				if (me.__16.ggCurrentLogicStateBorderColor == 0) {
					me.__16.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__16.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__16.logicBlock_bordercolor();
		me.__16.onclick=function (e) {
			player.setMediaVisibility("\uac00\uc2a4\ub808\uc778\uc9c0","1",500);
			player.setVariableValue('vis_select', true);
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_b0=document.createElement('div');
		els=me._text_b0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text B";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-weight:600;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_b0.ggUpdateText=function() {
			var params = [];
			var hs = player._("B\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_b0.ggUpdateText();
		el.appendChild(els);
		me._text_b0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_b0.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me._text_b0);
		me.__15.appendChild(me.__16);
		me.__14.appendChild(me.__15);
		me.__12.appendChild(me.__14);
		el=me._external_20=document.createElement('div');
		els=me._external_20__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_20.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_20.ggSubElement.setAttribute('alt', player._(me._external_20.ggAltText));
			me._external_20.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_20.ggText_untranslated = img;
			me._external_20.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_20.ggSubElement.style.width = '0px';
			me._external_20.ggSubElement.style.height = '0px';
			me._external_20.ggSubElement.src='';
			me._external_20.ggSubElement.src=me._external_20.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_20.ggText != player._(me._external_20.ggText_untranslated)) {
				me._external_20.ggText = player._(me._external_20.ggText_untranslated);
				me._external_20.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 3px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_20.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_20.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_20.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_20.style.transition='width 0s, height 0s';
				if (me._external_20.ggCurrentLogicStateSize == 0) {
					me._external_20.style.width='30px';
					me._external_20.style.height='30px';
					me._external_20.style.left = 'calc(50% - (30px / 2) + (6px / 2))';
					me._external_20.style.top = 'calc(50% - (30px / 2) + (6px / 2))';
					skin.updateSize(me._external_20);
				}
				else {
					me._external_20.style.width='40px';
					me._external_20.style.height='40px';
					me._external_20.style.left = 'calc(50% - (40px / 2) + (6px / 2))';
					me._external_20.style.top = 'calc(50% - (40px / 2) + (6px / 2))';
					skin.updateSize(me._external_20);
				}
			}
		}
		me._external_20.logicBlock_size();
		me._external_20.onclick=function (e) {
			player.setVariableValue('vis_slidebutton', !player.getVariableValue('vis_slidebutton'));
		}
		me._external_20.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_20.clientWidth;
			var parentHeight = me._external_20.clientHeight;
			var img = me._external_20__img;
			var aspectRatioDiv = me._external_20.clientWidth / me._external_20.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_20.ggScrollbars || currentWidth < me._external_20.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_20.ggScrollbars || currentHeight < me._external_20.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__13=document.createElement('div');
		el.ggId="\uac00\uc2a4\ub808\uc778\uc9c0\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 4px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__13.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_slidebutton') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__13.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__13.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__13.style.transition='border-color 0s';
				if (me.__13.ggCurrentLogicStateBorderColor == 0) {
					me.__13.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__13.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__13.logicBlock_bordercolor();
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="\uac00\uc2a4\ub808\uc778\uc9c0 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me.__40);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAACDklEQVR4nO3cQUocURRG4d+eZAOOMoxbCGQrGsjqsoPeRaAnLkKDnWQBycDrIOUgGWjXo+7rA54PClGrLrc40NoleFFVEcfu3AvoXwaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoGZGWSX5CbJPskxSS0f98vXR3bZembHjutU1YzjQ1Ud6mWH5bxzzezYcfUxK8bDKzf67OHEG956ZseOQ8dFVet/A9ol+Zbk44prDkk+JXmcNLNjx2Hdr4nXWXejWc6/njizY8dh3UG+NFy39c'+
			'yOHYd1v2T9SHI5cN33JO8nzezYcVh3kNHhf5K8mzSzY8dh3S9ZPwev+zVxZseOw7qDHAavu504s2PHYd1BvjZct/XMjh2H+T7kjb0Peczf39ePJ55/XM5/6Ua3ntmx47iuRwD/HVd12nOiqzPO7NgR+Szr+dhV1U1V7avqrqp+V9X98vnn5fvnntmx46qj+2eIVvIPVDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgME/6AHD9wMnPMgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image \uac00\uc2a4\ub808\uc778\uc9c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me._image_2);
		me._external_20.appendChild(me.__13);
		me.__12.appendChild(me._external_20);
		me.__12.logicBlock_position();
		me.__12.logicBlock_visible();
		me.__14.logicBlock_scaling();
		me.__14.logicBlock_alpha();
		me.__15.logicBlock_size();
		me.__17.logicBlock_bordercolor();
		me.__16.logicBlock_bordercolor();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_20.style.width=hotspot.customimagewidth + 'px';
			me._external_20.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_20.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 3) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_20.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 3) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_20.logicBlock_size();
		me.__13.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me.__14.logicBlock_alpha();
				me.__15.logicBlock_size();
				me.__17.logicBlock_bordercolor();
				me.__16.logicBlock_bordercolor();
				me.__13.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me.__14.logicBlock_alpha();
				me.__15.logicBlock_size();
				me.__17.logicBlock_bordercolor();
				me.__16.logicBlock_bordercolor();
				me.__13.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='가스레인지') {
					me.__12.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='가스레인지') {
					me.__12.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='가스레인지') {
					me.__12.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='가스레인지') {
					me.__12.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me.__12.logicBlock_position();
				me.__12.logicBlock_visible();
				me.__14.logicBlock_scaling();
				me._external_20.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_select=function() {
				me.__17.logicBlock_bordercolor();
				me.__16.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_slidebutton=function() {
				me.__14.logicBlock_alpha();
				me.__15.logicBlock_size();
				me.__13.logicBlock_bordercolor();
			};
			me.__div = me.__12;
	};
	function SkinHotspotClass__18(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__18=document.createElement('div');
		el.ggId="\uc218\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__18.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__18.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__18.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_18']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__18.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_18']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		el.ggId="\uc2a4\ub974\ub975\ubc84\ud2bc";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -55px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__20.style.transition='transform 0s, opacity 0s';
				if (me.__20.ggCurrentLogicStateScaling == 0) {
					me.__20.ggParameter.sx = 0.9;
					me.__20.ggParameter.sy = 0.9;
					me.__20.style.transform=parameterToTransform(me.__20.ggParameter);
					skin.updateSize(me.__20);
				}
				else {
					me.__20.ggParameter.sx = 1;
					me.__20.ggParameter.sy = 1;
					me.__20.style.transform=parameterToTransform(me.__20.ggParameter);
					skin.updateSize(me.__20);
				}
			}
		}
		me.__20.logicBlock_scaling();
		me.__20.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_slidebutton_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__20.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__20.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__20.style.transition='transform 0s, opacity 0s';
				if (me.__20.ggCurrentLogicStateAlpha == 0) {
					me.__20.style.visibility=me.__20.ggVisible?'inherit':'hidden';
					me.__20.style.opacity=1;
				}
				else {
					me.__20.style.visibility="hidden";
					me.__20.style.opacity=0;
				}
			}
		}
		me.__20.logicBlock_alpha();
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__21=document.createElement('div');
		el.ggId="\uc2a4\ub974\ub975\uc2ac\ub77c\uc774\ub4dc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 1%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__21.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_slidebutton_1') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__21.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__21.ggCurrentLogicStateSize = newLogicStateSize;
				me.__21.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms';
				if (me.__21.ggCurrentLogicStateSize == 0) {
					me.__21.style.width='100%';
					me.__21.style.height='100%';
					me.__21.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__21);}, 550);
				}
				else {
					me.__21.style.width='100%';
					me.__21.style.height='1%';
					me.__21.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__21);}, 550);
				}
			}
		}
		me.__21.logicBlock_size();
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__24=document.createElement('div');
		el.ggId="\uc218\ub3c4-\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #777777;';
		hs+='border : 2px solid rgba(119,119,119,0);';
		hs+='border-radius : 50px;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__24.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_waterselect_0') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_waterselect') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else if (
				((player.getVariableValue('vis_select_1') == true))
			)
			{
				newLogicStateBorderColor = 2;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__24.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__24.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__24.style.transition='border-color 0s';
				if (me.__24.ggCurrentLogicStateBorderColor == 0) {
					me.__24.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me.__24.ggCurrentLogicStateBorderColor == 1) {
					me.__24.style.borderColor="rgba(119,119,119,0)";
				}
				else if (me.__24.ggCurrentLogicStateBorderColor == 2) {
					me.__24.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__24.style.borderColor="rgba(119,119,119,0)";
				}
			}
		}
		me.__24.logicBlock_bordercolor();
		me.__24.onclick=function (e) {
			player.setMediaVisibility("\ud654\uc774\ud2b8\uc218\ub3c4","0",500);
			player.setMediaVisibility("\ube14\ub799\uc218\ub3c4","0",500);
			player.setVariableValue('vis_waterselect_0', true);
			player.setVariableValue('vis_waterselect', false);
			player.setVariableValue('vis_select_1', false);
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me.__24);
		el=me.__23=document.createElement('div');
		el.ggId="\ube14\ub799\uc218\ub3c4_\ubc84\ud2bc";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__23.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_waterselect') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__23.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__23.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__23.style.transition='border-color 0s';
				if (me.__23.ggCurrentLogicStateBorderColor == 0) {
					me.__23.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__23.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__23.logicBlock_bordercolor();
		me.__23.onclick=function (e) {
			player.setMediaVisibility("\ud654\uc774\ud2b8\uc218\ub3c4","0",500);
			player.setMediaVisibility("\ube14\ub799\uc218\ub3c4","1",500);
			player.setVariableValue('vis_waterselect', true);
			player.setVariableValue('vis_select_1', false);
			player.setVariableValue('vis_waterselect_0', false);
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me.__23);
		el=me.__22=document.createElement('div');
		el.ggId="\ud654\uc774\ud2b8\uc218\ub3c4-\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__22.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_select_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__22.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__22.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__22.style.transition='border-color 0s';
				if (me.__22.ggCurrentLogicStateBorderColor == 0) {
					me.__22.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__22.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__22.logicBlock_bordercolor();
		me.__22.onclick=function (e) {
			player.setMediaVisibility("\ud654\uc774\ud2b8\uc218\ub3c4","1",500);
			player.setMediaVisibility("\ube14\ub799\uc218\ub3c4","0",500);
			player.setVariableValue('vis_waterselect', false);
			player.setVariableValue('vis_select_1', true);
			player.setVariableValue('vis_waterselect_0', false);
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me.__22);
		me.__20.appendChild(me.__21);
		me.__18.appendChild(me.__20);
		el=me._external_21=document.createElement('div');
		els=me._external_21__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_21.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_21.ggSubElement.setAttribute('alt', player._(me._external_21.ggAltText));
			me._external_21.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_21.ggText_untranslated = img;
			me._external_21.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_21.ggSubElement.style.width = '0px';
			me._external_21.ggSubElement.style.height = '0px';
			me._external_21.ggSubElement.src='';
			me._external_21.ggSubElement.src=me._external_21.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_21.ggText != player._(me._external_21.ggText_untranslated)) {
				me._external_21.ggText = player._(me._external_21.ggText_untranslated);
				me._external_21.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 3px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_21.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_21.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_21.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_21.style.transition='width 0s, height 0s';
				if (me._external_21.ggCurrentLogicStateSize == 0) {
					me._external_21.style.width='30px';
					me._external_21.style.height='30px';
					me._external_21.style.left = 'calc(50% - (30px / 2) + (6px / 2))';
					me._external_21.style.top = 'calc(50% - (30px / 2) + (6px / 2))';
					skin.updateSize(me._external_21);
				}
				else {
					me._external_21.style.width='40px';
					me._external_21.style.height='40px';
					me._external_21.style.left = 'calc(50% - (40px / 2) + (6px / 2))';
					me._external_21.style.top = 'calc(50% - (40px / 2) + (6px / 2))';
					skin.updateSize(me._external_21);
				}
			}
		}
		me._external_21.logicBlock_size();
		me._external_21.onclick=function (e) {
			player.setVariableValue('vis_slidebutton_1', !player.getVariableValue('vis_slidebutton_1'));
		}
		me._external_21.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_21.clientWidth;
			var parentHeight = me._external_21.clientHeight;
			var img = me._external_21__img;
			var aspectRatioDiv = me._external_21.clientWidth / me._external_21.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_21.ggScrollbars || currentWidth < me._external_21.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_21.ggScrollbars || currentHeight < me._external_21.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__19=document.createElement('div');
		el.ggId="\uac00\uc2a4\ub808\uc778\uc9c0\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 4px solid rgba(0,0,0,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__19.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_slidebutton_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__19.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__19.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__19.style.transition='border-color 0s';
				if (me.__19.ggCurrentLogicStateBorderColor == 0) {
					me.__19.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__19.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__19.logicBlock_bordercolor();
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		el.ggId="\uac00\uc2a4\ub808\uc778\uc9c0 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me.__41);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAACDklEQVR4nO3cQUocURRG4d+eZAOOMoxbCGQrGsjqsoPeRaAnLkKDnWQBycDrIOUgGWjXo+7rA54PClGrLrc40NoleFFVEcfu3AvoXwaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoGZGWSX5CbJPskxSS0f98vXR3bZembHjutU1YzjQ1Ud6mWH5bxzzezYcfUxK8bDKzf67OHEG956ZseOQ8dFVet/A9ol+Zbk44prDkk+JXmcNLNjx2Hdr4nXWXejWc6/njizY8dh3UG+NFy39c'+
			'yOHYd1v2T9SHI5cN33JO8nzezYcVh3kNHhf5K8mzSzY8dh3S9ZPwev+zVxZseOw7qDHAavu504s2PHYd1BvjZct/XMjh2H+T7kjb0Peczf39ePJ55/XM5/6Ua3ntmx47iuRwD/HVd12nOiqzPO7NgR+Szr+dhV1U1V7avqrqp+V9X98vnn5fvnntmx46qj+2eIVvIPVDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgME/6AHD9wMnPMgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image \uac00\uc2a4\ub808\uc778\uc9c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me._image_4);
		me._external_21.appendChild(me.__19);
		me.__18.appendChild(me._external_21);
		me.__20.logicBlock_scaling();
		me.__20.logicBlock_alpha();
		me.__21.logicBlock_size();
		me.__24.logicBlock_bordercolor();
		player.setVariableValue('vis_waterselect_0', true);
		me.__23.logicBlock_bordercolor();
		me.__22.logicBlock_bordercolor();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_21.style.width=hotspot.customimagewidth + 'px';
			me._external_21.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_21.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 3) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_21.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 3) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_21.logicBlock_size();
		me.__19.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me.__20.logicBlock_alpha();
				me.__21.logicBlock_size();
				me.__24.logicBlock_bordercolor();
				me.__23.logicBlock_bordercolor();
				me.__22.logicBlock_bordercolor();
				me.__19.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me.__20.logicBlock_alpha();
				me.__21.logicBlock_size();
				me.__24.logicBlock_bordercolor();
				me.__23.logicBlock_bordercolor();
				me.__22.logicBlock_bordercolor();
				me.__19.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='수도') {
					me.__18.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='수도') {
					me.__18.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='수도') {
					me.__18.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='수도') {
					me.__18.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me.__20.logicBlock_scaling();
				me._external_21.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_select_1=function() {
				me.__24.logicBlock_bordercolor();
				me.__22.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_slidebutton_1=function() {
				me.__20.logicBlock_alpha();
				me.__21.logicBlock_size();
				me.__19.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_waterselect=function() {
				me.__24.logicBlock_bordercolor();
				me.__23.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_waterselect_0=function() {
				me.__24.logicBlock_bordercolor();
			};
			me.__div = me.__18;
	};
	function SkinHotspotClass_tv(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._tv=document.createElement('div');
		el.ggId="tv";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._tv.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._tv.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._tv.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._tv.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['tv']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._tv.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['tv']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._tv.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_4=document.createElement('div');
		els=me._external_4__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_4.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_4.ggSubElement.setAttribute('alt', player._(me._external_4.ggAltText));
			me._external_4.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_4.ggText_untranslated = img;
			me._external_4.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_4.ggSubElement.style.width = '0px';
			me._external_4.ggSubElement.style.height = '0px';
			me._external_4.ggSubElement.src='';
			me._external_4.ggSubElement.src=me._external_4.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_4.ggText != player._(me._external_4.ggText_untranslated)) {
				me._external_4.ggText = player._(me._external_4.ggText_untranslated);
				me._external_4.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((220px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_4.onclick=function (e) {
			player.setMediaVisibility("TVs","2",0);
		}
		me._external_4.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_4.clientWidth;
			var parentHeight = me._external_4.clientHeight;
			var img = me._external_4__img;
			var aspectRatioDiv = me._external_4.clientWidth / me._external_4.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = Math.round(parentWidth / aspectRatioImg);
			img.style.width=parentWidth + 'px';
			img.style.height='';
			if (!me._external_4.ggScrollbars || currentWidth < me._external_4.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_4.ggScrollbars || currentHeight < me._external_4.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._text_41=document.createElement('div');
		els=me._text_41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 9px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_41.ggUpdateText=function() {
			var params = [];
			var hs = player._("*\uc6d0\ud558\uc2dc\ub294 \uc601\uc0c1\uc744 \uc790\uc720\ub86d\uac8c \ub123\uc73c\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_41.ggUpdateText();
		el.appendChild(els);
		me._text_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_41.ggUpdatePosition=function (useTransition) {
		}
		me._external_4.appendChild(me._text_41);
		me._tv.appendChild(me._external_4);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_4.style.width=hotspot.customimagewidth + 'px';
			me._external_4.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_4.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='TV') {
					me._tv.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='TV') {
					me._tv.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='TV') {
					me._tv.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='TV') {
					me._tv.onmouseover();
				}
			};
			me.__div = me._tv;
	};
	function SkinHotspotClass__38(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__38=document.createElement('div');
		el.ggId="\uac70\uc2e4\uc138\ub85c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__38.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__38.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__38.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_38']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__38.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_38']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_10=document.createElement('div');
		els=me._external_10__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_10.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_10.ggSubElement.setAttribute('alt', player._(me._external_10.ggAltText));
			me._external_10.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_10.ggText_untranslated = img;
			me._external_10.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_10.ggSubElement.style.width = '0px';
			me._external_10.ggSubElement.style.height = '0px';
			me._external_10.ggSubElement.src='';
			me._external_10.ggSubElement.src=me._external_10.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_10.ggText != player._(me._external_10.ggText_untranslated)) {
				me._external_10.ggText = player._(me._external_10.ggText_untranslated);
				me._external_10.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_10.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_10.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_10.style.transition='width 0s, height 0s';
				if (me._external_10.ggCurrentLogicStateSize == 0) {
					me._external_10.style.width='30px';
					me._external_10.style.height='30px';
					me._external_10.style.left = 'calc(50% - (30px / 2))';
					me._external_10.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._external_10);
				}
				else {
					me._external_10.style.width='50px';
					me._external_10.style.height='50px';
					me._external_10.style.left = 'calc(50% - (50px / 2))';
					me._external_10.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._external_10);
				}
			}
		}
		me._external_10.logicBlock_size();
		me._external_10.onclick=function (e) {
			player.setMediaVisibility("\uac70\uc2e4\uc138\ub85c","2",0);
			player.setVariableValue('vis_buttonClick_5', !player.getVariableValue('vis_buttonClick_5'));
		}
		me._external_10.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_10.clientWidth;
			var parentHeight = me._external_10.clientHeight;
			var img = me._external_10__img;
			var aspectRatioDiv = me._external_10.clientWidth / me._external_10.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_10.ggScrollbars || currentWidth < me._external_10.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_10.ggScrollbars || currentHeight < me._external_10.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._bg=document.createElement('div');
		el.ggId="bg-\uac00\ub85c\uc138\ub85c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 5px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._bg.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg.ggCurrentLogicStateSize == 0) {
					me._bg.style.width='30px';
					me._bg.style.height='30px';
					skin.updateSize(me._bg);
				}
				else {
					me._bg.style.width='40px';
					me._bg.style.height='40px';
					skin.updateSize(me._bg);
				}
			}
		}
		me._bg.logicBlock_size();
		me._bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_tag') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg.ggCurrentLogicStateScaling == 0) {
					me._bg.ggParameter.sx = 1.1;
					me._bg.ggParameter.sy = 1.1;
					me._bg.style.transform=parameterToTransform(me._bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg);}, 550);
				}
				else {
					me._bg.ggParameter.sx = 1;
					me._bg.ggParameter.sy = 1;
					me._bg.style.transform=parameterToTransform(me._bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg);}, 550);
				}
			}
		}
		me._bg.logicBlock_scaling();
		me._bg.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_buttonClick_5') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._bg.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._bg.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._bg.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg.ggCurrentLogicStateBorderColor == 0) {
					me._bg.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._bg.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me._bg.logicBlock_bordercolor();
		me._bg.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
		el.ggId="\uac00\ub85c\uc138\ub85c \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me._bg.appendChild(me.__42);
		el=me.__39=document.createElement('div');
		els=me.__39__img=document.createElement('img');
		els.className='ggskin ggskin__39';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAUlEQVRYhcWYXYhVVRiGnzUzVhOaRZppif1QSWF/IGRJXnShFEhRXhQVdKFdVERJESFI0UVF9HNRkTfpRQkpZGH4k0qIoZBkYmg4aWJqoqbjb9KoTxd7neZre87MOZ4z9sJhf/td33rXO9/ss9a3T+I8QR0F3AoMBwYDJ4CDwKaU0o7z5aNPqIPV6epidZ/VcUhdpT6nDv8/zT6v7qlhshaOqrPVtlq6aQCMXg3MByYG+gCwDPgB6AKOAp3A9cAdwBRgdMjfDDyeUtrQan9ls7eoB0LFdqoz1MH9zOtQH1M3lSp+/0CaHa0eC4vNVTtLOZ3qOPUe9Xb10io6b5ZMTyzntMpwV1jk9dLYfepnVZ7pg+qX6oOl/B'+
			'kh57h6WavNvhUW+Djw7eo868M3hl1CfSmMLW6l2VFBeGvgB6nrS6a+Umeqj6jPqp+rPWH8d/XKoLE8jN3dKsPvBNFJgV8S+DXqbTXmX6N+EXK3hLHRgV/SCrNJ/SMLbgz8tLDQ6jq15oY5swK/IPAjmjU8PojNDPzWzB22ny2tpLc9zzuhXpy5qWGNJ2qeKHVifIhX5wXGATdk7sOU0rEG9F7L105gco7XAj05vrNZw2Py9W9gR44nhPFFDeotA07n+C6AlNL+oD2mWcND87UbOJ7j+JztblBvH7A3x1cE/mC+XtKs4fZ8PQWcCXEFg85B78Icnw58RbutWcMVoURvI/VbGL+pQb1rgWE53hH4inbtNq5OHKnCfRfi6Q3qPRXiFdUSOiyaiwvorVa9+AsYWyZTSnvVpRQt48PqhJTS2v7ELNrSF/PttpTSulqJrcAe'+
			'Q2em3hzGjljjlAv5V6nbwpwppfG1mV/ZlivVUqSUNgMv59shwAb1FUuvQOoQdTrwM3BdpueklJbWFFe7s/vF6mT1IXVX5tapD+TPT5nryjmT1W+rVThov1H6TxxVV1gct0vU/aXxeTU8/lvhaHh2SNidua8DtzpzmwP3dl+Gc8409Rf7xl716T6K+n3OW9UR+Ngkb6TYE3cG7lfgRor3rQqG0g9SSgvUhcCjFF/EscDlFDtMF7AKmJ9SOtyfFpBihd8v/VUXlbPLnPpJfxWuBvt4K66RX3lTWRgnHopJKaWT5YlVuHqqchZSSnVvoeq9wMh8uz4+ElMtWrr2s6dVxWl6O6qBxAchnh8fiWawayCcWry4VjAHIFa4BzhJYxXuzBrt6jDgWAPzz/JHcdqOBCYBL1D8FgewHXimbPhT4FWg3i/EGeBd4EmKVnALRafWrO'+
			'ER/PcXqR+BKSmlnorhytY0KKX0Z0Mr9O4MbfR2Wa3CIeCjlNKsSHYA71Ecn8vPQXQRRfN+qu+0utCWdbqBDcDKlFJ3OekfORT6yintb1MAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\ub85c\uc138\ub85c \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		me._bg.appendChild(me.__39);
		me._external_10.appendChild(me._bg);
		me.__38.appendChild(me._external_10);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_10.style.width=hotspot.customimagewidth + 'px';
			me._external_10.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_10.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_10.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_10.logicBlock_size();
		me._bg.logicBlock_size();
		me._bg.logicBlock_scaling();
		me._bg.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._bg.logicBlock_scaling();
				me._bg.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._bg.logicBlock_scaling();
				me._bg.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='거실세로') {
					me.__38.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='거실세로') {
					me.__38.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='거실세로') {
					me.__38.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='거실세로') {
					me.__38.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._external_10.logicBlock_size();
				me._bg.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_buttonClick_5=function() {
				me._bg.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_tag=function() {
				me._bg.logicBlock_scaling();
			};
			me.__div = me.__38;
	};
	function SkinHotspotClass__43(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__43=document.createElement('div');
		el.ggId="\uac70\uc2e4\uac00\ub85c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__43.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__43.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__43.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_43']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__43.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_43']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_11=document.createElement('div');
		els=me._external_11__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_11.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_11.ggSubElement.setAttribute('alt', player._(me._external_11.ggAltText));
			me._external_11.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_11.ggText_untranslated = img;
			me._external_11.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_11.ggSubElement.style.width = '0px';
			me._external_11.ggSubElement.style.height = '0px';
			me._external_11.ggSubElement.src='';
			me._external_11.ggSubElement.src=me._external_11.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_11.ggText != player._(me._external_11.ggText_untranslated)) {
				me._external_11.ggText = player._(me._external_11.ggText_untranslated);
				me._external_11.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_11.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_11.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_11.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_11.style.transition='width 0s, height 0s';
				if (me._external_11.ggCurrentLogicStateSize == 0) {
					me._external_11.style.width='30px';
					me._external_11.style.height='30px';
					me._external_11.style.left = 'calc(50% - (30px / 2))';
					me._external_11.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._external_11);
				}
				else {
					me._external_11.style.width='50px';
					me._external_11.style.height='50px';
					me._external_11.style.left = 'calc(50% - (50px / 2))';
					me._external_11.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._external_11);
				}
			}
		}
		me._external_11.logicBlock_size();
		me._external_11.onclick=function (e) {
			player.setMediaVisibility("\uac70\uc2e4\uac00\ub85c","2",0);
			player.setVariableValue('vis_buttonClick_4', !player.getVariableValue('vis_buttonClick_4'));
		}
		me._external_11.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_11.clientWidth;
			var parentHeight = me._external_11.clientHeight;
			var img = me._external_11__img;
			var aspectRatioDiv = me._external_11.clientWidth / me._external_11.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_11.ggScrollbars || currentWidth < me._external_11.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_11.ggScrollbars || currentHeight < me._external_11.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._bg0=document.createElement('div');
		el.ggId="bg-\uac70\uc2e4\uac00\ub85c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 5px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bg0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._bg0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._bg0.ggCurrentLogicStateSize = newLogicStateSize;
				me._bg0.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg0.ggCurrentLogicStateSize == 0) {
					me._bg0.style.width='30px';
					me._bg0.style.height='30px';
					skin.updateSize(me._bg0);
				}
				else {
					me._bg0.style.width='40px';
					me._bg0.style.height='40px';
					skin.updateSize(me._bg0);
				}
			}
		}
		me._bg0.logicBlock_size();
		me._bg0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_tag') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg0.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg0.ggCurrentLogicStateScaling == 0) {
					me._bg0.ggParameter.sx = 1.1;
					me._bg0.ggParameter.sy = 1.1;
					me._bg0.style.transform=parameterToTransform(me._bg0.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg0);}, 550);
				}
				else {
					me._bg0.ggParameter.sx = 1;
					me._bg0.ggParameter.sy = 1;
					me._bg0.style.transform=parameterToTransform(me._bg0.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg0);}, 550);
				}
			}
		}
		me._bg0.logicBlock_scaling();
		me._bg0.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_buttonClick_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._bg0.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._bg0.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._bg0.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg0.ggCurrentLogicStateBorderColor == 0) {
					me._bg0.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._bg0.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me._bg0.logicBlock_bordercolor();
		me._bg0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		el.ggId="\uac70\uc2e4\uac00\ub85c \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		me._bg0.appendChild(me.__45);
		el=me.__44=document.createElement('div');
		els=me.__44__img=document.createElement('img');
		els.className='ggskin ggskin__44';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAUlEQVRYhcWYXYhVVRiGnzUzVhOaRZppif1QSWF/IGRJXnShFEhRXhQVdKFdVERJESFI0UVF9HNRkTfpRQkpZGH4k0qIoZBkYmg4aWJqoqbjb9KoTxd7neZre87MOZ4z9sJhf/td33rXO9/ss9a3T+I8QR0F3AoMBwYDJ4CDwKaU0o7z5aNPqIPV6epidZ/VcUhdpT6nDv8/zT6v7qlhshaOqrPVtlq6aQCMXg3MByYG+gCwDPgB6AKOAp3A9cAdwBRgdMjfDDyeUtrQan9ls7eoB0LFdqoz1MH9zOtQH1M3lSp+/0CaHa0eC4vNVTtLOZ3qOPUe9Xb10io6b5ZMTyzntMpwV1jk9dLYfepnVZ7pg+qX6oOl/B'+
			'kh57h6WavNvhUW+Djw7eo868M3hl1CfSmMLW6l2VFBeGvgB6nrS6a+Umeqj6jPqp+rPWH8d/XKoLE8jN3dKsPvBNFJgV8S+DXqbTXmX6N+EXK3hLHRgV/SCrNJ/SMLbgz8tLDQ6jq15oY5swK/IPAjmjU8PojNDPzWzB22ny2tpLc9zzuhXpy5qWGNJ2qeKHVifIhX5wXGATdk7sOU0rEG9F7L105gco7XAj05vrNZw2Py9W9gR44nhPFFDeotA07n+C6AlNL+oD2mWcND87UbOJ7j+JztblBvH7A3x1cE/mC+XtKs4fZ8PQWcCXEFg85B78Icnw58RbutWcMVoURvI/VbGL+pQb1rgWE53hH4inbtNq5OHKnCfRfi6Q3qPRXiFdUSOiyaiwvorVa9+AsYWyZTSnvVpRQt48PqhJTS2v7ELNrSF/PttpTSulqJrcAe'+
			'Q2em3hzGjljjlAv5V6nbwpwppfG1mV/ZlivVUqSUNgMv59shwAb1FUuvQOoQdTrwM3BdpueklJbWFFe7s/vF6mT1IXVX5tapD+TPT5nryjmT1W+rVThov1H6TxxVV1gct0vU/aXxeTU8/lvhaHh2SNidua8DtzpzmwP3dl+Gc8409Rf7xl716T6K+n3OW9UR+Ngkb6TYE3cG7lfgRor3rQqG0g9SSgvUhcCjFF/EscDlFDtMF7AKmJ9SOtyfFpBihd8v/VUXlbPLnPpJfxWuBvt4K66RX3lTWRgnHopJKaWT5YlVuHqqchZSSnVvoeq9wMh8uz4+ElMtWrr2s6dVxWl6O6qBxAchnh8fiWawayCcWry4VjAHIFa4BzhJYxXuzBrt6jDgWAPzz/JHcdqOBCYBL1D8FgewHXimbPhT4FWg3i/EGeBd4EmKVnALRafWrO'+
			'ER/PcXqR+BKSmlnorhytY0KKX0Z0Mr9O4MbfR2Wa3CIeCjlNKsSHYA71Ecn8vPQXQRRfN+qu+0utCWdbqBDcDKlFJ3OekfORT6yintb1MAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac70\uc2e4\uac00\ub85c \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me._bg0.appendChild(me.__44);
		me._external_11.appendChild(me._bg0);
		me.__43.appendChild(me._external_11);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_11.style.width=hotspot.customimagewidth + 'px';
			me._external_11.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_11.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_11.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_11.logicBlock_size();
		me._bg0.logicBlock_size();
		me._bg0.logicBlock_scaling();
		me._bg0.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._bg0.logicBlock_scaling();
				me._bg0.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._bg0.logicBlock_scaling();
				me._bg0.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='거실가로') {
					me.__43.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='거실가로') {
					me.__43.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='거실가로') {
					me.__43.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='거실가로') {
					me.__43.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._external_11.logicBlock_size();
				me._bg0.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_buttonClick_4=function() {
				me._bg0.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_tag=function() {
				me._bg0.logicBlock_scaling();
			};
			me.__div = me.__43;
	};
	function SkinHotspotClass__46(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__46=document.createElement('div');
		el.ggId="\ud070\ucc3d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__46.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__46.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__46.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_46']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__46.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_46']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_12=document.createElement('div');
		els=me._external_12__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_12.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_12.ggSubElement.setAttribute('alt', player._(me._external_12.ggAltText));
			me._external_12.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_12.ggText_untranslated = img;
			me._external_12.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_12.ggSubElement.style.width = '0px';
			me._external_12.ggSubElement.style.height = '0px';
			me._external_12.ggSubElement.src='';
			me._external_12.ggSubElement.src=me._external_12.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_12.ggText != player._(me._external_12.ggText_untranslated)) {
				me._external_12.ggText = player._(me._external_12.ggText_untranslated);
				me._external_12.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_12.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_12.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_12.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_12.style.transition='width 0s, height 0s';
				if (me._external_12.ggCurrentLogicStateSize == 0) {
					me._external_12.style.width='30px';
					me._external_12.style.height='30px';
					me._external_12.style.left = 'calc(50% - (30px / 2))';
					me._external_12.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._external_12);
				}
				else {
					me._external_12.style.width='50px';
					me._external_12.style.height='50px';
					me._external_12.style.left = 'calc(50% - (50px / 2))';
					me._external_12.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._external_12);
				}
			}
		}
		me._external_12.logicBlock_size();
		me._external_12.onclick=function (e) {
			player.setMediaVisibility("\ud070\ucc3d","2",0);
			player.setVariableValue('vis_buttonClick_3', !player.getVariableValue('vis_buttonClick_3'));
		}
		me._external_12.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_12.clientWidth;
			var parentHeight = me._external_12.clientHeight;
			var img = me._external_12__img;
			var aspectRatioDiv = me._external_12.clientWidth / me._external_12.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_12.ggScrollbars || currentWidth < me._external_12.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_12.ggScrollbars || currentHeight < me._external_12.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._bg2=document.createElement('div');
		el.ggId="bg-\ud070\ucc3d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 5px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bg2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._bg2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._bg2.ggCurrentLogicStateSize = newLogicStateSize;
				me._bg2.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg2.ggCurrentLogicStateSize == 0) {
					me._bg2.style.width='30px';
					me._bg2.style.height='30px';
					skin.updateSize(me._bg2);
				}
				else {
					me._bg2.style.width='40px';
					me._bg2.style.height='40px';
					skin.updateSize(me._bg2);
				}
			}
		}
		me._bg2.logicBlock_size();
		me._bg2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_tag') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg2.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg2.ggCurrentLogicStateScaling == 0) {
					me._bg2.ggParameter.sx = 1.1;
					me._bg2.ggParameter.sy = 1.1;
					me._bg2.style.transform=parameterToTransform(me._bg2.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg2);}, 550);
				}
				else {
					me._bg2.ggParameter.sx = 1;
					me._bg2.ggParameter.sy = 1;
					me._bg2.style.transform=parameterToTransform(me._bg2.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg2);}, 550);
				}
			}
		}
		me._bg2.logicBlock_scaling();
		me._bg2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_buttonClick_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._bg2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._bg2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._bg2.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg2.ggCurrentLogicStateBorderColor == 0) {
					me._bg2.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._bg2.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me._bg2.logicBlock_bordercolor();
		me._bg2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__48=document.createElement('div');
		el.ggId="\ud070\ucc3d \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		me._bg2.appendChild(me.__48);
		el=me.__47=document.createElement('div');
		els=me.__47__img=document.createElement('img');
		els.className='ggskin ggskin__47';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAUlEQVRYhcWYXYhVVRiGnzUzVhOaRZppif1QSWF/IGRJXnShFEhRXhQVdKFdVERJESFI0UVF9HNRkTfpRQkpZGH4k0qIoZBkYmg4aWJqoqbjb9KoTxd7neZre87MOZ4z9sJhf/td33rXO9/ss9a3T+I8QR0F3AoMBwYDJ4CDwKaU0o7z5aNPqIPV6epidZ/VcUhdpT6nDv8/zT6v7qlhshaOqrPVtlq6aQCMXg3MByYG+gCwDPgB6AKOAp3A9cAdwBRgdMjfDDyeUtrQan9ls7eoB0LFdqoz1MH9zOtQH1M3lSp+/0CaHa0eC4vNVTtLOZ3qOPUe9Xb10io6b5ZMTyzntMpwV1jk9dLYfepnVZ7pg+qX6oOl/B'+
			'kh57h6WavNvhUW+Djw7eo868M3hl1CfSmMLW6l2VFBeGvgB6nrS6a+Umeqj6jPqp+rPWH8d/XKoLE8jN3dKsPvBNFJgV8S+DXqbTXmX6N+EXK3hLHRgV/SCrNJ/SMLbgz8tLDQ6jq15oY5swK/IPAjmjU8PojNDPzWzB22ny2tpLc9zzuhXpy5qWGNJ2qeKHVifIhX5wXGATdk7sOU0rEG9F7L105gco7XAj05vrNZw2Py9W9gR44nhPFFDeotA07n+C6AlNL+oD2mWcND87UbOJ7j+JztblBvH7A3x1cE/mC+XtKs4fZ8PQWcCXEFg85B78Icnw58RbutWcMVoURvI/VbGL+pQb1rgWE53hH4inbtNq5OHKnCfRfi6Q3qPRXiFdUSOiyaiwvorVa9+AsYWyZTSnvVpRQt48PqhJTS2v7ELNrSF/PttpTSulqJrcAe'+
			'Q2em3hzGjljjlAv5V6nbwpwppfG1mV/ZlivVUqSUNgMv59shwAb1FUuvQOoQdTrwM3BdpueklJbWFFe7s/vF6mT1IXVX5tapD+TPT5nryjmT1W+rVThov1H6TxxVV1gct0vU/aXxeTU8/lvhaHh2SNidua8DtzpzmwP3dl+Gc8409Rf7xl716T6K+n3OW9UR+Ngkb6TYE3cG7lfgRor3rQqG0g9SSgvUhcCjFF/EscDlFDtMF7AKmJ9SOtyfFpBihd8v/VUXlbPLnPpJfxWuBvt4K66RX3lTWRgnHopJKaWT5YlVuHqqchZSSnVvoeq9wMh8uz4+ElMtWrr2s6dVxWl6O6qBxAchnh8fiWawayCcWry4VjAHIFa4BzhJYxXuzBrt6jDgWAPzz/JHcdqOBCYBL1D8FgewHXimbPhT4FWg3i/EGeBd4EmKVnALRafWrO'+
			'ER/PcXqR+BKSmlnorhytY0KKX0Z0Mr9O4MbfR2Wa3CIeCjlNKsSHYA71Ecn8vPQXQRRfN+qu+0utCWdbqBDcDKlFJ3OekfORT6yintb1MAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud070\ucc3d \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		me._bg2.appendChild(me.__47);
		me._external_12.appendChild(me._bg2);
		me.__46.appendChild(me._external_12);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_12.style.width=hotspot.customimagewidth + 'px';
			me._external_12.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_12.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_12.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_12.logicBlock_size();
		me._bg2.logicBlock_size();
		me._bg2.logicBlock_scaling();
		me._bg2.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._bg2.logicBlock_scaling();
				me._bg2.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._bg2.logicBlock_scaling();
				me._bg2.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='큰창') {
					me.__46.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='큰창') {
					me.__46.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='큰창') {
					me.__46.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='큰창') {
					me.__46.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._external_12.logicBlock_size();
				me._bg2.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_buttonClick_3=function() {
				me._bg2.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_tag=function() {
				me._bg2.logicBlock_scaling();
			};
			me.__div = me.__46;
	};
	function SkinHotspotClass__110(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__110=document.createElement('div');
		el.ggId="\uc2dd\ud0c11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__110.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__110.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__110.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_110']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__110.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_110']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_13=document.createElement('div');
		els=me._external_13__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_13.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_13.ggSubElement.setAttribute('alt', player._(me._external_13.ggAltText));
			me._external_13.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_13.ggText_untranslated = img;
			me._external_13.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_13.ggSubElement.style.width = '0px';
			me._external_13.ggSubElement.style.height = '0px';
			me._external_13.ggSubElement.src='';
			me._external_13.ggSubElement.src=me._external_13.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_13.ggText != player._(me._external_13.ggText_untranslated)) {
				me._external_13.ggText = player._(me._external_13.ggText_untranslated);
				me._external_13.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_13.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_13.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_13.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_13.style.transition='width 0s, height 0s';
				if (me._external_13.ggCurrentLogicStateSize == 0) {
					me._external_13.style.width='30px';
					me._external_13.style.height='30px';
					me._external_13.style.left = 'calc(50% - (30px / 2))';
					me._external_13.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._external_13);
				}
				else {
					me._external_13.style.width='50px';
					me._external_13.style.height='50px';
					me._external_13.style.left = 'calc(50% - (50px / 2))';
					me._external_13.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._external_13);
				}
			}
		}
		me._external_13.logicBlock_size();
		me._external_13.onclick=function (e) {
			player.setMediaVisibility("\uc2dd\ud0c11","2",0);
			player.setVariableValue('vis_buttonClick_2', !player.getVariableValue('vis_buttonClick_2'));
		}
		me._external_13.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_13.clientWidth;
			var parentHeight = me._external_13.clientHeight;
			var img = me._external_13__img;
			var aspectRatioDiv = me._external_13.clientWidth / me._external_13.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_13.ggScrollbars || currentWidth < me._external_13.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_13.ggScrollbars || currentHeight < me._external_13.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._bg10=document.createElement('div');
		el.ggId="bg-\uc2dd\ud0c11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 5px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bg10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._bg10.ggCurrentLogicStateSize != newLogicStateSize) {
				me._bg10.ggCurrentLogicStateSize = newLogicStateSize;
				me._bg10.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg10.ggCurrentLogicStateSize == 0) {
					me._bg10.style.width='30px';
					me._bg10.style.height='30px';
					skin.updateSize(me._bg10);
				}
				else {
					me._bg10.style.width='40px';
					me._bg10.style.height='40px';
					skin.updateSize(me._bg10);
				}
			}
		}
		me._bg10.logicBlock_size();
		me._bg10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_tag') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg10.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg10.ggCurrentLogicStateScaling == 0) {
					me._bg10.ggParameter.sx = 1.1;
					me._bg10.ggParameter.sy = 1.1;
					me._bg10.style.transform=parameterToTransform(me._bg10.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg10);}, 550);
				}
				else {
					me._bg10.ggParameter.sx = 1;
					me._bg10.ggParameter.sy = 1;
					me._bg10.style.transform=parameterToTransform(me._bg10.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg10);}, 550);
				}
			}
		}
		me._bg10.logicBlock_scaling();
		me._bg10.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_buttonClick_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._bg10.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._bg10.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._bg10.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg10.ggCurrentLogicStateBorderColor == 0) {
					me._bg10.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._bg10.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me._bg10.logicBlock_bordercolor();
		me._bg10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_4=document.createElement('div');
		el.ggId="\uc2dd\ud0c11 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1_4.ggUpdatePosition=function (useTransition) {
		}
		me._bg10.appendChild(me.__1_4);
		el=me.__1_3=document.createElement('div');
		els=me.__1_3__img=document.createElement('img');
		els.className='ggskin ggskin__1_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAUlEQVRYhcWYXYhVVRiGnzUzVhOaRZppif1QSWF/IGRJXnShFEhRXhQVdKFdVERJESFI0UVF9HNRkTfpRQkpZGH4k0qIoZBkYmg4aWJqoqbjb9KoTxd7neZre87MOZ4z9sJhf/td33rXO9/ss9a3T+I8QR0F3AoMBwYDJ4CDwKaU0o7z5aNPqIPV6epidZ/VcUhdpT6nDv8/zT6v7qlhshaOqrPVtlq6aQCMXg3MByYG+gCwDPgB6AKOAp3A9cAdwBRgdMjfDDyeUtrQan9ls7eoB0LFdqoz1MH9zOtQH1M3lSp+/0CaHa0eC4vNVTtLOZ3qOPUe9Xb10io6b5ZMTyzntMpwV1jk9dLYfepnVZ7pg+qX6oOl/B'+
			'kh57h6WavNvhUW+Djw7eo868M3hl1CfSmMLW6l2VFBeGvgB6nrS6a+Umeqj6jPqp+rPWH8d/XKoLE8jN3dKsPvBNFJgV8S+DXqbTXmX6N+EXK3hLHRgV/SCrNJ/SMLbgz8tLDQ6jq15oY5swK/IPAjmjU8PojNDPzWzB22ny2tpLc9zzuhXpy5qWGNJ2qeKHVifIhX5wXGATdk7sOU0rEG9F7L105gco7XAj05vrNZw2Py9W9gR44nhPFFDeotA07n+C6AlNL+oD2mWcND87UbOJ7j+JztblBvH7A3x1cE/mC+XtKs4fZ8PQWcCXEFg85B78Icnw58RbutWcMVoURvI/VbGL+pQb1rgWE53hH4inbtNq5OHKnCfRfi6Q3qPRXiFdUSOiyaiwvorVa9+AsYWyZTSnvVpRQt48PqhJTS2v7ELNrSF/PttpTSulqJrcAe'+
			'Q2em3hzGjljjlAv5V6nbwpwppfG1mV/ZlivVUqSUNgMv59shwAb1FUuvQOoQdTrwM3BdpueklJbWFFe7s/vF6mT1IXVX5tapD+TPT5nryjmT1W+rVThov1H6TxxVV1gct0vU/aXxeTU8/lvhaHh2SNidua8DtzpzmwP3dl+Gc8409Rf7xl716T6K+n3OW9UR+Ngkb6TYE3cG7lfgRor3rQqG0g9SSgvUhcCjFF/EscDlFDtMF7AKmJ9SOtyfFpBihd8v/VUXlbPLnPpJfxWuBvt4K66RX3lTWRgnHopJKaWT5YlVuHqqchZSSnVvoeq9wMh8uz4+ElMtWrr2s6dVxWl6O6qBxAchnh8fiWawayCcWry4VjAHIFa4BzhJYxXuzBrt6jDgWAPzz/JHcdqOBCYBL1D8FgewHXimbPhT4FWg3i/EGeBd4EmKVnALRafWrO'+
			'ER/PcXqR+BKSmlnorhytY0KKX0Z0Mr9O4MbfR2Wa3CIeCjlNKsSHYA71Ecn8vPQXQRRfN+qu+0utCWdbqBDcDKlFJ3OekfORT6yintb1MAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2dd\ud0c11 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1_3.ggUpdatePosition=function (useTransition) {
		}
		me._bg10.appendChild(me.__1_3);
		me._external_13.appendChild(me._bg10);
		me.__110.appendChild(me._external_13);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_13.style.width=hotspot.customimagewidth + 'px';
			me._external_13.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_13.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_13.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_13.logicBlock_size();
		me._bg10.logicBlock_size();
		me._bg10.logicBlock_scaling();
		me._bg10.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._bg10.logicBlock_scaling();
				me._bg10.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._bg10.logicBlock_scaling();
				me._bg10.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='식탁1') {
					me.__110.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='식탁1') {
					me.__110.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='식탁1') {
					me.__110.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='식탁1') {
					me.__110.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._external_13.logicBlock_size();
				me._bg10.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_buttonClick_2=function() {
				me._bg10.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_tag=function() {
				me._bg10.logicBlock_scaling();
			};
			me.__div = me.__110;
	};
	function SkinHotspotClass__210(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__210=document.createElement('div');
		el.ggId="\ucc3d\ubb382";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__210.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__210.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__210.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_210']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__210.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_210']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_14=document.createElement('div');
		els=me._external_14__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_14.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_14.ggSubElement.setAttribute('alt', player._(me._external_14.ggAltText));
			me._external_14.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_14.ggText_untranslated = img;
			me._external_14.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_14.ggSubElement.style.width = '0px';
			me._external_14.ggSubElement.style.height = '0px';
			me._external_14.ggSubElement.src='';
			me._external_14.ggSubElement.src=me._external_14.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_14.ggText != player._(me._external_14.ggText_untranslated)) {
				me._external_14.ggText = player._(me._external_14.ggText_untranslated);
				me._external_14.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_14.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_14.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_14.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_14.style.transition='width 0s, height 0s';
				if (me._external_14.ggCurrentLogicStateSize == 0) {
					me._external_14.style.width='30px';
					me._external_14.style.height='30px';
					me._external_14.style.left = 'calc(50% - (30px / 2))';
					me._external_14.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._external_14);
				}
				else {
					me._external_14.style.width='50px';
					me._external_14.style.height='50px';
					me._external_14.style.left = 'calc(50% - (50px / 2))';
					me._external_14.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._external_14);
				}
			}
		}
		me._external_14.logicBlock_size();
		me._external_14.onclick=function (e) {
			player.setMediaVisibility("\ucc3d\ubb382","2",0);
			player.setVariableValue('vis_buttonClick_1', !player.getVariableValue('vis_buttonClick_1'));
		}
		me._external_14.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_14.clientWidth;
			var parentHeight = me._external_14.clientHeight;
			var img = me._external_14__img;
			var aspectRatioDiv = me._external_14.clientWidth / me._external_14.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_14.ggScrollbars || currentWidth < me._external_14.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_14.ggScrollbars || currentHeight < me._external_14.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._bg20=document.createElement('div');
		el.ggId="bg-\ucc3d\ubb382";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 5px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bg20.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._bg20.ggCurrentLogicStateSize != newLogicStateSize) {
				me._bg20.ggCurrentLogicStateSize = newLogicStateSize;
				me._bg20.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg20.ggCurrentLogicStateSize == 0) {
					me._bg20.style.width='30px';
					me._bg20.style.height='30px';
					skin.updateSize(me._bg20);
				}
				else {
					me._bg20.style.width='40px';
					me._bg20.style.height='40px';
					skin.updateSize(me._bg20);
				}
			}
		}
		me._bg20.logicBlock_size();
		me._bg20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_tag') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg20.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg20.ggCurrentLogicStateScaling == 0) {
					me._bg20.ggParameter.sx = 1.1;
					me._bg20.ggParameter.sy = 1.1;
					me._bg20.style.transform=parameterToTransform(me._bg20.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg20);}, 550);
				}
				else {
					me._bg20.ggParameter.sx = 1;
					me._bg20.ggParameter.sy = 1;
					me._bg20.style.transform=parameterToTransform(me._bg20.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg20);}, 550);
				}
			}
		}
		me._bg20.logicBlock_scaling();
		me._bg20.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_buttonClick_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._bg20.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._bg20.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._bg20.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg20.ggCurrentLogicStateBorderColor == 0) {
					me._bg20.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._bg20.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me._bg20.logicBlock_bordercolor();
		me._bg20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_0=document.createElement('div');
		el.ggId="\ucc3d\ubb382 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__2_0.ggUpdatePosition=function (useTransition) {
		}
		me._bg20.appendChild(me.__2_0);
		el=me.__2_=document.createElement('div');
		els=me.__2___img=document.createElement('img');
		els.className='ggskin ggskin__2_';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAUlEQVRYhcWYXYhVVRiGnzUzVhOaRZppif1QSWF/IGRJXnShFEhRXhQVdKFdVERJESFI0UVF9HNRkTfpRQkpZGH4k0qIoZBkYmg4aWJqoqbjb9KoTxd7neZre87MOZ4z9sJhf/td33rXO9/ss9a3T+I8QR0F3AoMBwYDJ4CDwKaU0o7z5aNPqIPV6epidZ/VcUhdpT6nDv8/zT6v7qlhshaOqrPVtlq6aQCMXg3MByYG+gCwDPgB6AKOAp3A9cAdwBRgdMjfDDyeUtrQan9ls7eoB0LFdqoz1MH9zOtQH1M3lSp+/0CaHa0eC4vNVTtLOZ3qOPUe9Xb10io6b5ZMTyzntMpwV1jk9dLYfepnVZ7pg+qX6oOl/B'+
			'kh57h6WavNvhUW+Djw7eo868M3hl1CfSmMLW6l2VFBeGvgB6nrS6a+Umeqj6jPqp+rPWH8d/XKoLE8jN3dKsPvBNFJgV8S+DXqbTXmX6N+EXK3hLHRgV/SCrNJ/SMLbgz8tLDQ6jq15oY5swK/IPAjmjU8PojNDPzWzB22ny2tpLc9zzuhXpy5qWGNJ2qeKHVifIhX5wXGATdk7sOU0rEG9F7L105gco7XAj05vrNZw2Py9W9gR44nhPFFDeotA07n+C6AlNL+oD2mWcND87UbOJ7j+JztblBvH7A3x1cE/mC+XtKs4fZ8PQWcCXEFg85B78Icnw58RbutWcMVoURvI/VbGL+pQb1rgWE53hH4inbtNq5OHKnCfRfi6Q3qPRXiFdUSOiyaiwvorVa9+AsYWyZTSnvVpRQt48PqhJTS2v7ELNrSF/PttpTSulqJrcAe'+
			'Q2em3hzGjljjlAv5V6nbwpwppfG1mV/ZlivVUqSUNgMv59shwAb1FUuvQOoQdTrwM3BdpueklJbWFFe7s/vF6mT1IXVX5tapD+TPT5nryjmT1W+rVThov1H6TxxVV1gct0vU/aXxeTU8/lvhaHh2SNidua8DtzpzmwP3dl+Gc8409Rf7xl716T6K+n3OW9UR+Ngkb6TYE3cG7lfgRor3rQqG0g9SSgvUhcCjFF/EscDlFDtMF7AKmJ9SOtyfFpBihd8v/VUXlbPLnPpJfxWuBvt4K66RX3lTWRgnHopJKaWT5YlVuHqqchZSSnVvoeq9wMh8uz4+ElMtWrr2s6dVxWl6O6qBxAchnh8fiWawayCcWry4VjAHIFa4BzhJYxXuzBrt6jDgWAPzz/JHcdqOBCYBL1D8FgewHXimbPhT4FWg3i/EGeBd4EmKVnALRafWrO'+
			'ER/PcXqR+BKSmlnorhytY0KKX0Z0Mr9O4MbfR2Wa3CIeCjlNKsSHYA71Ecn8vPQXQRRfN+qu+0utCWdbqBDcDKlFJ3OekfORT6yintb1MAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucc3d\ubb382 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__2_.ggUpdatePosition=function (useTransition) {
		}
		me._bg20.appendChild(me.__2_);
		me._external_14.appendChild(me._bg20);
		me.__210.appendChild(me._external_14);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_14.style.width=hotspot.customimagewidth + 'px';
			me._external_14.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_14.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_14.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_14.logicBlock_size();
		me._bg20.logicBlock_size();
		me._bg20.logicBlock_scaling();
		me._bg20.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._bg20.logicBlock_scaling();
				me._bg20.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._bg20.logicBlock_scaling();
				me._bg20.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='창문2') {
					me.__210.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='창문2') {
					me.__210.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='창문2') {
					me.__210.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='창문2') {
					me.__210.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._external_14.logicBlock_size();
				me._bg20.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_buttonClick_1=function() {
				me._bg20.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_tag=function() {
				me._bg20.logicBlock_scaling();
			};
			me.__div = me.__210;
	};
	function SkinHotspotClass__111(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__111=document.createElement('div');
		el.ggId="\ucc3d\ubb381";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__111.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__111.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__111.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__111.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_111']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__111.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_111']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_15=document.createElement('div');
		els=me._external_15__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_15.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_15.ggSubElement.setAttribute('alt', player._(me._external_15.ggAltText));
			me._external_15.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_15.ggText_untranslated = img;
			me._external_15.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_15.ggSubElement.style.width = '0px';
			me._external_15.ggSubElement.style.height = '0px';
			me._external_15.ggSubElement.src='';
			me._external_15.ggSubElement.src=me._external_15.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_15.ggText != player._(me._external_15.ggText_untranslated)) {
				me._external_15.ggText = player._(me._external_15.ggText_untranslated);
				me._external_15.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_15.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_15.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_15.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_15.style.transition='width 0s, height 0s';
				if (me._external_15.ggCurrentLogicStateSize == 0) {
					me._external_15.style.width='30px';
					me._external_15.style.height='30px';
					me._external_15.style.left = 'calc(50% - (30px / 2))';
					me._external_15.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._external_15);
				}
				else {
					me._external_15.style.width='50px';
					me._external_15.style.height='50px';
					me._external_15.style.left = 'calc(50% - (50px / 2))';
					me._external_15.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._external_15);
				}
			}
		}
		me._external_15.logicBlock_size();
		me._external_15.onclick=function (e) {
			player.setMediaVisibility("\ucc3d\ubb381","2",0);
			player.setVariableValue('vis_buttonClick', !player.getVariableValue('vis_buttonClick'));
		}
		me._external_15.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_15.clientWidth;
			var parentHeight = me._external_15.clientHeight;
			var img = me._external_15__img;
			var aspectRatioDiv = me._external_15.clientWidth / me._external_15.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_15.ggScrollbars || currentWidth < me._external_15.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_15.ggScrollbars || currentHeight < me._external_15.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._bg11=document.createElement('div');
		el.ggId="bg-\ucc3d\ubb381";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 5px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bg11.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._bg11.ggCurrentLogicStateSize != newLogicStateSize) {
				me._bg11.ggCurrentLogicStateSize = newLogicStateSize;
				me._bg11.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg11.ggCurrentLogicStateSize == 0) {
					me._bg11.style.width='30px';
					me._bg11.style.height='30px';
					skin.updateSize(me._bg11);
				}
				else {
					me._bg11.style.width='40px';
					me._bg11.style.height='40px';
					skin.updateSize(me._bg11);
				}
			}
		}
		me._bg11.logicBlock_size();
		me._bg11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_tag') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg11.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg11.ggCurrentLogicStateScaling == 0) {
					me._bg11.ggParameter.sx = 1.1;
					me._bg11.ggParameter.sy = 1.1;
					me._bg11.style.transform=parameterToTransform(me._bg11.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg11);}, 550);
				}
				else {
					me._bg11.ggParameter.sx = 1;
					me._bg11.ggParameter.sy = 1;
					me._bg11.style.transform=parameterToTransform(me._bg11.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg11);}, 550);
				}
			}
		}
		me._bg11.logicBlock_scaling();
		me._bg11.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_buttonClick') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._bg11.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._bg11.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._bg11.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg11.ggCurrentLogicStateBorderColor == 0) {
					me._bg11.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._bg11.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me._bg11.logicBlock_bordercolor();
		me._bg11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_6=document.createElement('div');
		el.ggId="\ucc3d\ubb381 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1_6.ggUpdatePosition=function (useTransition) {
		}
		me._bg11.appendChild(me.__1_6);
		el=me.__1_5=document.createElement('div');
		els=me.__1_5__img=document.createElement('img');
		els.className='ggskin ggskin__1_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAUlEQVRYhcWYXYhVVRiGnzUzVhOaRZppif1QSWF/IGRJXnShFEhRXhQVdKFdVERJESFI0UVF9HNRkTfpRQkpZGH4k0qIoZBkYmg4aWJqoqbjb9KoTxd7neZre87MOZ4z9sJhf/td33rXO9/ss9a3T+I8QR0F3AoMBwYDJ4CDwKaU0o7z5aNPqIPV6epidZ/VcUhdpT6nDv8/zT6v7qlhshaOqrPVtlq6aQCMXg3MByYG+gCwDPgB6AKOAp3A9cAdwBRgdMjfDDyeUtrQan9ls7eoB0LFdqoz1MH9zOtQH1M3lSp+/0CaHa0eC4vNVTtLOZ3qOPUe9Xb10io6b5ZMTyzntMpwV1jk9dLYfepnVZ7pg+qX6oOl/B'+
			'kh57h6WavNvhUW+Djw7eo868M3hl1CfSmMLW6l2VFBeGvgB6nrS6a+Umeqj6jPqp+rPWH8d/XKoLE8jN3dKsPvBNFJgV8S+DXqbTXmX6N+EXK3hLHRgV/SCrNJ/SMLbgz8tLDQ6jq15oY5swK/IPAjmjU8PojNDPzWzB22ny2tpLc9zzuhXpy5qWGNJ2qeKHVifIhX5wXGATdk7sOU0rEG9F7L105gco7XAj05vrNZw2Py9W9gR44nhPFFDeotA07n+C6AlNL+oD2mWcND87UbOJ7j+JztblBvH7A3x1cE/mC+XtKs4fZ8PQWcCXEFg85B78Icnw58RbutWcMVoURvI/VbGL+pQb1rgWE53hH4inbtNq5OHKnCfRfi6Q3qPRXiFdUSOiyaiwvorVa9+AsYWyZTSnvVpRQt48PqhJTS2v7ELNrSF/PttpTSulqJrcAe'+
			'Q2em3hzGjljjlAv5V6nbwpwppfG1mV/ZlivVUqSUNgMv59shwAb1FUuvQOoQdTrwM3BdpueklJbWFFe7s/vF6mT1IXVX5tapD+TPT5nryjmT1W+rVThov1H6TxxVV1gct0vU/aXxeTU8/lvhaHh2SNidua8DtzpzmwP3dl+Gc8409Rf7xl716T6K+n3OW9UR+Ngkb6TYE3cG7lfgRor3rQqG0g9SSgvUhcCjFF/EscDlFDtMF7AKmJ9SOtyfFpBihd8v/VUXlbPLnPpJfxWuBvt4K66RX3lTWRgnHopJKaWT5YlVuHqqchZSSnVvoeq9wMh8uz4+ElMtWrr2s6dVxWl6O6qBxAchnh8fiWawayCcWry4VjAHIFa4BzhJYxXuzBrt6jDgWAPzz/JHcdqOBCYBL1D8FgewHXimbPhT4FWg3i/EGeBd4EmKVnALRafWrO'+
			'ER/PcXqR+BKSmlnorhytY0KKX0Z0Mr9O4MbfR2Wa3CIeCjlNKsSHYA71Ecn8vPQXQRRfN+qu+0utCWdbqBDcDKlFJ3OekfORT6yintb1MAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucc3d\ubb381 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1_5.ggUpdatePosition=function (useTransition) {
		}
		me._bg11.appendChild(me.__1_5);
		me._external_15.appendChild(me._bg11);
		me.__111.appendChild(me._external_15);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_15.style.width=hotspot.customimagewidth + 'px';
			me._external_15.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_15.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_15.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_15.logicBlock_size();
		me._bg11.logicBlock_size();
		me._bg11.logicBlock_scaling();
		me._bg11.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._bg11.logicBlock_scaling();
				me._bg11.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._bg11.logicBlock_scaling();
				me._bg11.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='창문1') {
					me.__111.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='창문1') {
					me.__111.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='창문1') {
					me.__111.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='창문1') {
					me.__111.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._external_15.logicBlock_size();
				me._bg11.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_buttonClick=function() {
				me._bg11.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_tag=function() {
				me._bg11.logicBlock_scaling();
			};
			me.__div = me.__111;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(cur)");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: 99,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggLottie.setSpeed(1.5);
		el.ggId="Lottie 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lottie_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lottie_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStatePosition == 0) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else if (me._lottie_2.ggCurrentLogicStatePosition == 1) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else {
					me._lottie_2.style.left='-30px';
					me._lottie_2.style.top='-20px';
				}
			}
		}
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._lottie_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._lottie_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStateSize == 0) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else if (me._lottie_2.ggCurrentLogicStateSize == 1) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else {
					me._lottie_2.style.width='70px';
					me._lottie_2.style.height='70px';
					skin.updateSize(me._lottie_2);
				}
			}
		}
		me._lottie_2.logicBlock_size();
		me._lottie_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
			if (
				(
					((me.ggUserdata.tags.indexOf("\uc218\uce58\uc120") != -1))
				)
			) {
				player.setMediaVisibility("\ub0c9\uc7a5\uace0\uce58\uc218","0",0);
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\uc218\uce58\uc120") != -1))
				)
			) {
				player.setMediaVisibility("\ucc3d\ubb381","0",0);
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\uc218\uce58\uc120") != -1))
				)
			) {
				player.setMediaVisibility("\ucc3d\ubb382","0",0);
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\uc218\uce58\uc120") != -1))
				)
			) {
				player.setMediaVisibility("\uc2dd\ud0c11","0",0);
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\uc218\uce58\uc120") != -1))
				)
			) {
				player.setMediaVisibility("\uac70\uc2e4\uac00\ub85c","0",0);
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\uc218\uce58\uc120") != -1))
				)
			) {
				player.setMediaVisibility("\uac70\uc2e4\uc138\ub85c","0",0);
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\uc218\uce58\uc120") != -1))
				)
			) {
				player.setMediaVisibility("\ud070\ucc3d","0",0);
			}
			player.setMediaVisibility("\uac00\uc2a4\ub808\uc778\uc9c0","0",0);
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__50=document.createElement('div');
		els=me.__50__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__50.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__50.ggUpdateText();
		player.addListener('changenode', function() {
			me.__50.ggUpdateText();
		});
		el.appendChild(els);
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__50.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__50.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__50.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__50.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__50.ggCurrentLogicStatePosition == 0) {
					me.__50.style.left = 'calc(50% - (50px / 2))';
					me.__50.style.bottom='0px';
				}
				else {
					me.__50.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__50.style.bottom='-28px';
				}
			}
		}
		me.__50.logicBlock_position();
		me.__50.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__50.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__50.ggCurrentLogicStateSize = newLogicStateSize;
				me.__50.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__50.ggCurrentLogicStateSize == 0) {
					me.__50.style.width='95px';
					me.__50.style.height='25px';
					me.__50.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__50);
				}
				else if (me.__50.ggCurrentLogicStateSize == 1) {
					me.__50.style.width='60px';
					me.__50.style.height='25px';
					me.__50.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__50);
				}
				else if (me.__50.ggCurrentLogicStateSize == 2) {
					me.__50.style.width='60px';
					me.__50.style.height='25px';
					me.__50.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__50);
				}
				else {
					me.__50.style.width='50px';
					me.__50.style.height='25px';
					me.__50.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__50);
				}
			}
		}
		me.__50.logicBlock_size();
		me.__50.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__50.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__50.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__50.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__50.ggCurrentLogicStateVisible == 0) {
					me.__50.style.visibility="hidden";
					me.__50.ggVisible=false;
				}
				else if (me.__50.ggCurrentLogicStateVisible == 1) {
					me.__50.style.visibility="hidden";
					me.__50.ggVisible=false;
				}
				else {
					me.__50.style.visibility="hidden";
					me.__50.ggVisible=false;
				}
			}
		}
		me.__50.logicBlock_visible();
		me.__50.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__50.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__50.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__50.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__50.ggCurrentLogicStateBackgroundColor == 0) {
					me.__50.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__50.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__50.logicBlock_backgroundcolor();
		me.__50.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__50.ggCurrentLogicStateText != newLogicStateText) {
				me.__50.ggCurrentLogicStateText = newLogicStateText;
				me.__50.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__50.ggCurrentLogicStateText == 0) {
					if (me.__50.ggUpdateText) {
					me.__50.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__50.ggUpdateText();
					} else {
						if (me.__50.ggUpdatePosition) me.__50.ggUpdatePosition();
					}
				}
				else {
					if (me.__50.ggUpdateText) {
					me.__50.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__50.ggUpdateText();
					} else {
						if (me.__50.ggUpdatePosition) me.__50.ggUpdatePosition();
					}
				}
			}
		}
		me.__50.logicBlock_text();
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__50);
		el=me.__49=document.createElement('div');
		els=me.__49__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text menu";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__49.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__49.ggUpdateText();
		player.addListener('changenode', function() {
			me.__49.ggUpdateText();
		});
		el.appendChild(els);
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__49.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__49.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__49.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__49.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__49.ggCurrentLogicStatePosition == 0) {
					me.__49.style.left = 'calc(50% - (60px / 2))';
					me.__49.style.bottom='0px';
				}
				else if (me.__49.ggCurrentLogicStatePosition == 1) {
					me.__49.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -5px)';
					me.__49.style.bottom='40px';
				}
				else {
					me.__49.style.left='calc(50% - ((60px + 0px) / 2) + 0px)';
					me.__49.style.bottom='-40px';
				}
			}
		}
		me.__49.logicBlock_position();
		me.__49.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__49.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__49.ggCurrentLogicStateSize = newLogicStateSize;
				me.__49.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__49.ggCurrentLogicStateSize == 0) {
					me.__49.style.width='50px';
					me.__49.style.height='25px';
					me.__49.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__49);
				}
				else if (me.__49.ggCurrentLogicStateSize == 1) {
					me.__49.style.width='50px';
					me.__49.style.height='25px';
					me.__49.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__49);
				}
				else if (me.__49.ggCurrentLogicStateSize == 2) {
					me.__49.style.width='95px';
					me.__49.style.height='25px';
					me.__49.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__49);
				}
				else {
					me.__49.style.width='60px';
					me.__49.style.height='30px';
					me.__49.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__49);
				}
			}
		}
		me.__49.logicBlock_size();
		me.__49.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__49.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__49.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__49.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__49.ggCurrentLogicStateVisible == 0) {
					me.__49.style.visibility="hidden";
					me.__49.ggVisible=false;
				}
				else if (me.__49.ggCurrentLogicStateVisible == 1) {
					me.__49.style.visibility="hidden";
					me.__49.ggVisible=false;
				}
				else {
					me.__49.style.visibility="hidden";
					me.__49.ggVisible=false;
				}
			}
		}
		me.__49.logicBlock_visible();
		me.__49.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__49.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__49.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__49.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__49.ggCurrentLogicStateBackgroundColor == 0) {
					me.__49.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__49.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__49.logicBlock_backgroundcolor();
		me.__49.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__49.ggCurrentLogicStateText != newLogicStateText) {
				me.__49.ggCurrentLogicStateText = newLogicStateText;
				me.__49.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__49.ggCurrentLogicStateText == 0) {
					if (me.__49.ggUpdateText) {
					me.__49.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__49.ggUpdateText();
					} else {
						if (me.__49.ggUpdatePosition) me.__49.ggUpdatePosition();
					}
				}
				else {
					if (me.__49.ggUpdateText) {
					me.__49.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__49.ggUpdateText();
					} else {
						if (me.__49.ggUpdatePosition) me.__49.ggUpdatePosition();
					}
				}
			}
		}
		me.__49.logicBlock_text();
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__49);
		me._lottie_2.appendChild(me._container_6);
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
		me.__50.logicBlock_position();
		me.__50.logicBlock_size();
		me.__50.logicBlock_visible();
		me.__50.logicBlock_backgroundcolor();
		me.__50.logicBlock_text();
		me.__49.logicBlock_position();
		me.__49.logicBlock_size();
		me.__49.logicBlock_visible();
		me.__49.logicBlock_backgroundcolor();
		me.__49.logicBlock_text();
			me.ggEvent_activehotspotchanged=function() {
				me.__50.logicBlock_size();
				me.__50.logicBlock_backgroundcolor();
				me.__50.logicBlock_text();
				me.__49.logicBlock_size();
				me.__49.logicBlock_backgroundcolor();
				me.__49.logicBlock_text();
			};
			me.ggEvent_changenode=function() {
				me.__50.logicBlock_size();
				me.__50.logicBlock_backgroundcolor();
				me.__50.logicBlock_text();
				me.__49.logicBlock_size();
				me.__49.logicBlock_backgroundcolor();
				me.__49.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__50.logicBlock_size();
				me.__50.logicBlock_visible();
				me.__50.logicBlock_backgroundcolor();
				me.__50.logicBlock_text();
				me.__49.logicBlock_position();
				me.__49.logicBlock_size();
				me.__49.logicBlock_visible();
				me.__49.logicBlock_backgroundcolor();
				me.__49.logicBlock_text();
			};
			me.ggEvent_hotspotsupdated=function() {
				me.__50.logicBlock_position();
				me.__49.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__50.logicBlock_size();
				me.__50.logicBlock_visible();
				me.__49.logicBlock_size();
				me.__49.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass__66(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__66=document.createElement('div');
		el.ggId="\uc778\ub355\uc158";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__66.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__66.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__66.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__66.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__66.style.transition='left 0s, top 0s';
				if (me.__66.ggCurrentLogicStatePosition == 0) {
					me.__66.style.left='-150px';
					me.__66.style.top='0px';
				}
				else {
					me.__66.style.left='0px';
					me.__66.style.top='0px';
				}
			}
		}
		me.__66.logicBlock_position();
		me.__66.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__66.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__66.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__66.style.transition='left 0s, top 0s';
				if (me.__66.ggCurrentLogicStateVisible == 0) {
					me.__66.style.visibility="hidden";
					me.__66.ggVisible=false;
				}
				else {
					me.__66.style.visibility=(Number(me.__66.style.opacity)>0||!me.__66.style.opacity)?'inherit':'hidden';
					me.__66.ggVisible=true;
				}
			}
		}
		me.__66.logicBlock_visible();
		me.__66.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__66.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__66.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_66']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__66.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_66']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_16=document.createElement('div');
		els=me._external_16__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_16.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_16.ggSubElement.setAttribute('alt', player._(me._external_16.ggAltText));
			me._external_16.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_16.ggText_untranslated = img;
			me._external_16.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_16.ggSubElement.style.width = '0px';
			me._external_16.ggSubElement.style.height = '0px';
			me._external_16.ggSubElement.src='';
			me._external_16.ggSubElement.src=me._external_16.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_16.ggText != player._(me._external_16.ggText_untranslated)) {
				me._external_16.ggText = player._(me._external_16.ggText_untranslated);
				me._external_16.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_16.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._external_16.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._external_16.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._external_16.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._external_16.ggCurrentLogicStatePosition == 0) {
					me._external_16.style.left = 'calc(50% - (50px / 2))';
					me._external_16.style.top = 'calc(50% - (50px / 2))';
				}
				else {
					me._external_16.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me._external_16.style.top='calc(50% - ((50px + 0px) / 2) + 0px)';
				}
			}
		}
		me._external_16.logicBlock_position();
		me._external_16.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_16.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_16.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_16.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._external_16.ggCurrentLogicStateSize == 0) {
					me._external_16.style.width='30px';
					me._external_16.style.height='30px';
					me._external_16.style.left = 'calc(50% - (30px / 2))';
					me._external_16.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._external_16);
				}
				else {
					me._external_16.style.width='50px';
					me._external_16.style.height='50px';
					me._external_16.style.left = 'calc(50% - (50px / 2))';
					me._external_16.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._external_16);
				}
			}
		}
		me._external_16.logicBlock_size();
		me._external_16.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width >= 460))
				)
			) {
				skin._infopopup.style.transition='none';
				skin._infopopup.style.visibility=(Number(skin._infopopup.style.opacity)>0||!skin._infopopup.style.opacity)?'inherit':'hidden';
				skin._infopopup.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				skin._popupm.style.transition='none';
				skin._popupm.style.visibility=(Number(skin._popupm.style.opacity)>0||!skin._popupm.style.opacity)?'inherit':'hidden';
				skin._popupm.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				skin.__25.style.transition='none';
				skin.__25.style.visibility='hidden';
				skin.__25.ggVisible=false;
			}
		}
		me._external_16.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_16.clientWidth;
			var parentHeight = me._external_16.clientHeight;
			var img = me._external_16__img;
			var aspectRatioDiv = me._external_16.clientWidth / me._external_16.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_16.ggScrollbars || currentWidth < me._external_16.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_16.ggScrollbars || currentHeight < me._external_16.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._bg12=document.createElement('div');
		el.ggId="bg-\ucc3d\ubb381";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 5px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bg12.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._bg12.ggCurrentLogicStateSize != newLogicStateSize) {
				me._bg12.ggCurrentLogicStateSize = newLogicStateSize;
				me._bg12.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg12.ggCurrentLogicStateSize == 0) {
					me._bg12.style.width='30px';
					me._bg12.style.height='30px';
					skin.updateSize(me._bg12);
				}
				else {
					me._bg12.style.width='40px';
					me._bg12.style.height='40px';
					skin.updateSize(me._bg12);
				}
			}
		}
		me._bg12.logicBlock_size();
		me._bg12.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_tag') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg12.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg12.ggCurrentLogicStateScaling == 0) {
					me._bg12.ggParameter.sx = 1.1;
					me._bg12.ggParameter.sy = 1.1;
					me._bg12.style.transform=parameterToTransform(me._bg12.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg12);}, 550);
				}
				else {
					me._bg12.ggParameter.sx = 1;
					me._bg12.ggParameter.sy = 1;
					me._bg12.style.transform=parameterToTransform(me._bg12.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg12);}, 550);
				}
			}
		}
		me._bg12.logicBlock_scaling();
		me._bg12.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_buttonClick') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._bg12.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._bg12.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._bg12.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg12.ggCurrentLogicStateBorderColor == 0) {
					me._bg12.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._bg12.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me._bg12.logicBlock_bordercolor();
		me._bg12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_8=document.createElement('div');
		el.ggId="\ucc3d\ubb381 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1_8.ggUpdatePosition=function (useTransition) {
		}
		me._bg12.appendChild(me.__1_8);
		el=me.__1_7=document.createElement('div');
		els=me.__1_7__img=document.createElement('img');
		els.className='ggskin ggskin__1_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVRYhe2Y0Q2CMBRFL88JWMEVWIEVdARdwU8/dQRdwRFkBB1BV2CDqz/UmAZsnk9SYt5J+lFoX05IobcUMEKyBLACUHeX7gBOItJYa5ukSF5IPnraKqfYbkAqtPLb2mJ0q4z3B7GKjYaLaXExLS6mxcW0uJiWAnhFlwOARV4d3AHsReQYxC4wbLgjsJyRrABsc5vECICvM9OIlJNd/NJl8za3SEQTntga05FrRGRfhF73ydC+mbvEnA2Aq6JeKyKa8f2QPCcOI3W6Sj/TXfy5BYZwMS0upsXFtLiYlr8VSyWSPImFZP1hAz9nkXqTW5C8RVIHy2/On0Jybok5MU/bY8Sut5lQVwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucc3d\ubb381 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1_7.ggUpdatePosition=function (useTransition) {
		}
		me._bg12.appendChild(me.__1_7);
		me._external_16.appendChild(me._bg12);
		me.__66.appendChild(me._external_16);
		me.__66.logicBlock_position();
		me.__66.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_16.style.width=hotspot.customimagewidth + 'px';
			me._external_16.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_16.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_16.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_16.logicBlock_position();
		me._external_16.logicBlock_size();
		me._bg12.logicBlock_size();
		me._bg12.logicBlock_scaling();
		me._bg12.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._bg12.logicBlock_scaling();
				me._bg12.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._bg12.logicBlock_scaling();
				me._bg12.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='인덕션') {
					me.__66.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='인덕션') {
					me.__66.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='인덕션') {
					me.__66.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='인덕션') {
					me.__66.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me.__66.logicBlock_position();
				me.__66.logicBlock_visible();
				me._external_16.logicBlock_position();
				me._external_16.logicBlock_size();
				me._bg12.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_buttonClick=function() {
				me._bg12.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_tag=function() {
				me._bg12.logicBlock_scaling();
			};
			me.__div = me.__66;
	};
	function SkinHotspotClass__81(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__81=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__81.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__81.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__81.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__81.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_81']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__81.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_81']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_17=document.createElement('div');
		els=me._external_17__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_17.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_17.ggSubElement.setAttribute('alt', player._(me._external_17.ggAltText));
			me._external_17.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_17.ggText_untranslated = img;
			me._external_17.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_17.ggSubElement.style.width = '0px';
			me._external_17.ggSubElement.style.height = '0px';
			me._external_17.ggSubElement.src='';
			me._external_17.ggSubElement.src=me._external_17.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_17.ggText != player._(me._external_17.ggText_untranslated)) {
				me._external_17.ggText = player._(me._external_17.ggText_untranslated);
				me._external_17.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_17.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_17.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_17.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_17.style.transition='width 0s, height 0s';
				if (me._external_17.ggCurrentLogicStateSize == 0) {
					me._external_17.style.width='30px';
					me._external_17.style.height='30px';
					me._external_17.style.left = 'calc(50% - (30px / 2))';
					me._external_17.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._external_17);
				}
				else {
					me._external_17.style.width='50px';
					me._external_17.style.height='50px';
					me._external_17.style.left = 'calc(50% - (50px / 2))';
					me._external_17.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._external_17);
				}
			}
		}
		me._external_17.logicBlock_size();
		me._external_17.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width >= 460))
				)
			) {
				skin._infopopup0.style.transition='none';
				skin._infopopup0.style.visibility=(Number(skin._infopopup0.style.opacity)>0||!skin._infopopup0.style.opacity)?'inherit':'hidden';
				skin._infopopup0.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				skin._popupm0.style.transition='none';
				skin._popupm0.style.visibility=(Number(skin._popupm0.style.opacity)>0||!skin._popupm0.style.opacity)?'inherit':'hidden';
				skin._popupm0.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				skin.__25.style.transition='none';
				skin.__25.style.visibility='hidden';
				skin.__25.ggVisible=false;
			}
		}
		me._external_17.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_17.clientWidth;
			var parentHeight = me._external_17.clientHeight;
			var img = me._external_17__img;
			var aspectRatioDiv = me._external_17.clientWidth / me._external_17.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_17.ggScrollbars || currentWidth < me._external_17.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_17.ggScrollbars || currentHeight < me._external_17.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._bg13=document.createElement('div');
		el.ggId="bg-\ucc3d\ubb381";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 5px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bg13.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._bg13.ggCurrentLogicStateSize != newLogicStateSize) {
				me._bg13.ggCurrentLogicStateSize = newLogicStateSize;
				me._bg13.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg13.ggCurrentLogicStateSize == 0) {
					me._bg13.style.width='30px';
					me._bg13.style.height='30px';
					skin.updateSize(me._bg13);
				}
				else {
					me._bg13.style.width='40px';
					me._bg13.style.height='40px';
					skin.updateSize(me._bg13);
				}
			}
		}
		me._bg13.logicBlock_size();
		me._bg13.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_tag') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg13.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg13.ggCurrentLogicStateScaling == 0) {
					me._bg13.ggParameter.sx = 1.1;
					me._bg13.ggParameter.sy = 1.1;
					me._bg13.style.transform=parameterToTransform(me._bg13.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg13);}, 550);
				}
				else {
					me._bg13.ggParameter.sx = 1;
					me._bg13.ggParameter.sy = 1;
					me._bg13.style.transform=parameterToTransform(me._bg13.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg13);}, 550);
				}
			}
		}
		me._bg13.logicBlock_scaling();
		me._bg13.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_buttonClick') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._bg13.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._bg13.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._bg13.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg13.ggCurrentLogicStateBorderColor == 0) {
					me._bg13.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._bg13.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me._bg13.logicBlock_bordercolor();
		me._bg13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_10=document.createElement('div');
		el.ggId="\ucc3d\ubb381 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1_10.ggUpdatePosition=function (useTransition) {
		}
		me._bg13.appendChild(me.__1_10);
		el=me.__1_9=document.createElement('div');
		els=me.__1_9__img=document.createElement('img');
		els.className='ggskin ggskin__1_9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVRYhe2Y0Q2CMBRFL88JWMEVWIEVdARdwU8/dQRdwRFkBB1BV2CDqz/UmAZsnk9SYt5J+lFoX05IobcUMEKyBLACUHeX7gBOItJYa5ukSF5IPnraKqfYbkAqtPLb2mJ0q4z3B7GKjYaLaXExLS6mxcW0uJiWAnhFlwOARV4d3AHsReQYxC4wbLgjsJyRrABsc5vECICvM9OIlJNd/NJl8za3SEQTntga05FrRGRfhF73ydC+mbvEnA2Aq6JeKyKa8f2QPCcOI3W6Sj/TXfy5BYZwMS0upsXFtLiYlr8VSyWSPImFZP1hAz9nkXqTW5C8RVIHy2/On0Jybok5MU/bY8Sut5lQVwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucc3d\ubb381 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1_9.ggUpdatePosition=function (useTransition) {
		}
		me._bg13.appendChild(me.__1_9);
		me._external_17.appendChild(me._bg13);
		me.__81.appendChild(me._external_17);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_17.style.width=hotspot.customimagewidth + 'px';
			me._external_17.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_17.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_17.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_17.logicBlock_size();
		me._bg13.logicBlock_size();
		me._bg13.logicBlock_scaling();
		me._bg13.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._bg13.logicBlock_scaling();
				me._bg13.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._bg13.logicBlock_scaling();
				me._bg13.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='에어컨') {
					me.__81.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='에어컨') {
					me.__81.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='에어컨') {
					me.__81.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='에어컨') {
					me.__81.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._external_17.logicBlock_size();
				me._bg13.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_buttonClick=function() {
				me._bg13.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_tag=function() {
				me._bg13.logicBlock_scaling();
			};
			me.__div = me.__81;
	};
	function SkinHotspotClass__96(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__96=document.createElement('div');
		el.ggId="\uc138\ud0c1\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__96.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__96.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__96.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__96.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_96']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__96.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_96']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__96.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_18=document.createElement('div');
		els=me._external_18__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_18.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_18.ggSubElement.setAttribute('alt', player._(me._external_18.ggAltText));
			me._external_18.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_18.ggText_untranslated = img;
			me._external_18.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_18.ggSubElement.style.width = '0px';
			me._external_18.ggSubElement.style.height = '0px';
			me._external_18.ggSubElement.src='';
			me._external_18.ggSubElement.src=me._external_18.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_18.ggText != player._(me._external_18.ggText_untranslated)) {
				me._external_18.ggText = player._(me._external_18.ggText_untranslated);
				me._external_18.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_18.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._external_18.ggCurrentLogicStateSize != newLogicStateSize) {
				me._external_18.ggCurrentLogicStateSize = newLogicStateSize;
				me._external_18.style.transition='width 0s, height 0s';
				if (me._external_18.ggCurrentLogicStateSize == 0) {
					me._external_18.style.width='30px';
					me._external_18.style.height='30px';
					me._external_18.style.left = 'calc(50% - (30px / 2))';
					me._external_18.style.top = 'calc(50% - (30px / 2))';
					skin.updateSize(me._external_18);
				}
				else {
					me._external_18.style.width='50px';
					me._external_18.style.height='50px';
					me._external_18.style.left = 'calc(50% - (50px / 2))';
					me._external_18.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._external_18);
				}
			}
		}
		me._external_18.logicBlock_size();
		me._external_18.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width >= 460))
				)
			) {
				skin._infopopup1.style.transition='none';
				skin._infopopup1.style.visibility=(Number(skin._infopopup1.style.opacity)>0||!skin._infopopup1.style.opacity)?'inherit':'hidden';
				skin._infopopup1.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				skin._infopopupm.style.transition='none';
				skin._infopopupm.style.visibility=(Number(skin._infopopupm.style.opacity)>0||!skin._infopopupm.style.opacity)?'inherit':'hidden';
				skin._infopopupm.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				skin.__25.style.transition='none';
				skin.__25.style.visibility='hidden';
				skin.__25.ggVisible=false;
			}
		}
		me._external_18.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_18.clientWidth;
			var parentHeight = me._external_18.clientHeight;
			var img = me._external_18__img;
			var aspectRatioDiv = me._external_18.clientWidth / me._external_18.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_18.ggScrollbars || currentWidth < me._external_18.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_18.ggScrollbars || currentHeight < me._external_18.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._bg14=document.createElement('div');
		el.ggId="bg-\ucc3d\ubb381";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 5px solid rgba(255,255,255,0);';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bg14.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 440))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._bg14.ggCurrentLogicStateSize != newLogicStateSize) {
				me._bg14.ggCurrentLogicStateSize = newLogicStateSize;
				me._bg14.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg14.ggCurrentLogicStateSize == 0) {
					me._bg14.style.width='30px';
					me._bg14.style.height='30px';
					skin.updateSize(me._bg14);
				}
				else {
					me._bg14.style.width='40px';
					me._bg14.style.height='40px';
					skin.updateSize(me._bg14);
				}
			}
		}
		me._bg14.logicBlock_size();
		me._bg14.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_tag') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bg14.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bg14.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bg14.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg14.ggCurrentLogicStateScaling == 0) {
					me._bg14.ggParameter.sx = 1.1;
					me._bg14.ggParameter.sy = 1.1;
					me._bg14.style.transform=parameterToTransform(me._bg14.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg14);}, 550);
				}
				else {
					me._bg14.ggParameter.sx = 1;
					me._bg14.ggParameter.sy = 1;
					me._bg14.style.transform=parameterToTransform(me._bg14.ggParameter);
					setTimeout(function() {skin.updateSize(me._bg14);}, 550);
				}
			}
		}
		me._bg14.logicBlock_scaling();
		me._bg14.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_buttonClick') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._bg14.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._bg14.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._bg14.style.transition='width 0s, height 0s, transform 500ms linear 0ms, border-color 0s';
				if (me._bg14.ggCurrentLogicStateBorderColor == 0) {
					me._bg14.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._bg14.style.borderColor="rgba(255,255,255,0)";
				}
			}
		}
		me._bg14.logicBlock_bordercolor();
		me._bg14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_12=document.createElement('div');
		el.ggId="\ucc3d\ubb381 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1_12.ggUpdatePosition=function (useTransition) {
		}
		me._bg14.appendChild(me.__1_12);
		el=me.__1_11=document.createElement('div');
		els=me.__1_11__img=document.createElement('img');
		els.className='ggskin ggskin__1_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVRYhe2Y0Q2CMBRFL88JWMEVWIEVdARdwU8/dQRdwRFkBB1BV2CDqz/UmAZsnk9SYt5J+lFoX05IobcUMEKyBLACUHeX7gBOItJYa5ukSF5IPnraKqfYbkAqtPLb2mJ0q4z3B7GKjYaLaXExLS6mxcW0uJiWAnhFlwOARV4d3AHsReQYxC4wbLgjsJyRrABsc5vECICvM9OIlJNd/NJl8za3SEQTntga05FrRGRfhF73ydC+mbvEnA2Aq6JeKyKa8f2QPCcOI3W6Sj/TXfy5BYZwMS0upsXFtLiYlr8VSyWSPImFZP1hAz9nkXqTW5C8RVIHy2/On0Jybok5MU/bY8Sut5lQVwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucc3d\ubb381 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1_11.ggUpdatePosition=function (useTransition) {
		}
		me._bg14.appendChild(me.__1_11);
		me._external_18.appendChild(me._bg14);
		me.__96.appendChild(me._external_18);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_18.style.width=hotspot.customimagewidth + 'px';
			me._external_18.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_18.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_18.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._external_18.logicBlock_size();
		me._bg14.logicBlock_size();
		me._bg14.logicBlock_scaling();
		me._bg14.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._bg14.logicBlock_scaling();
				me._bg14.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._bg14.logicBlock_scaling();
				me._bg14.logicBlock_bordercolor();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='세탁기') {
					me.__96.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='세탁기') {
					me.__96.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='세탁기') {
					me.__96.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='세탁기') {
					me.__96.onmouseover();
				}
			};
			me.ggEvent_sizechanged=function() {
				me._external_18.logicBlock_size();
				me._bg14.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_buttonClick=function() {
				me._bg14.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_vis_tag=function() {
				me._bg14.logicBlock_scaling();
			};
			me.__div = me.__96;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='세탁기') {
				hotspot.skinid = '세탁기';
				hsinst = new SkinHotspotClass__96(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='에어컨') {
				hotspot.skinid = '에어컨';
				hsinst = new SkinHotspotClass__81(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='인덕션') {
				hotspot.skinid = '인덕션';
				hsinst = new SkinHotspotClass__66(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='창문1') {
				hotspot.skinid = '창문1';
				hsinst = new SkinHotspotClass__111(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='창문2') {
				hotspot.skinid = '창문2';
				hsinst = new SkinHotspotClass__210(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='식탁1') {
				hotspot.skinid = '식탁1';
				hsinst = new SkinHotspotClass__110(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='큰창') {
				hotspot.skinid = '큰창';
				hsinst = new SkinHotspotClass__46(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='거실가로') {
				hotspot.skinid = '거실가로';
				hsinst = new SkinHotspotClass__43(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='거실세로') {
				hotspot.skinid = '거실세로';
				hsinst = new SkinHotspotClass__38(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='tv') {
				hotspot.skinid = 'tv';
				hsinst = new SkinHotspotClass_tv(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='수도') {
				hotspot.skinid = '수도';
				hsinst = new SkinHotspotClass__18(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='가스레인지') {
				hotspot.skinid = '가스레인지';
				hsinst = new SkinHotspotClass__12(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='tv-on') {
				hotspot.skinid = 'tv-on';
				hsinst = new SkinHotspotClass_tvon(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='냉장고빌트인') {
				hotspot.skinid = '냉장고빌트인';
				hsinst = new SkinHotspotClass__11(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='실외기실') {
				hotspot.skinid = '실외기실';
				hsinst = new SkinHotspotClass__10(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='인덕션-m') {
				hotspot.skinid = '인덕션-m';
				hsinst = new SkinHotspotClass_m0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = '가스레인지-m';
				hsinst = new SkinHotspotClass_m(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__37.ggUpdateConditionTimer();
		if (me.__37.ggLastIsActive!=me.__37.ggIsActive()) {
			me.__37.ggLastIsActive=me.__37.ggIsActive();
			if (me.__37.ggLastIsActive) {
				player.setVariableValue('vis_tag', !player.getVariableValue('vis_tag'));
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"); .ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};