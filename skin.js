// Garden Gnome Software - Skin
// Pano2VR 7.0.8/20017
// Filename: ??????.ggsk
// Generated 2023-12-23T17:36:35

function pano2vrSkin(player,base) {
	player.addVariable('vis_button_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_4', 2, false, { ignoreInState: 0  });
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
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
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
		hs+='border-radius : 0px 0px 20px 20px;';
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
		hs+='height : 46.4286%;';
		hs+='left : calc(50% - ((168px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.4286% + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
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
				((player.getViewerSize().width <= 420))
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
		el=me._centeronoff=document.createElement('div');
		el.ggId="center-\uac00\uad6con\/off";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : calc(50% - ((610px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -450.02%;';
		hs+='visibility : hidden;';
		hs+='width : 610px;';
		hs+='pointer-events:none;';
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
		me._centeronoff.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._centeronoff.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._centeronoff.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._centeronoff.style.transition='left 0s, top 0s, transform 0s';
				if (me._centeronoff.ggCurrentLogicStatePosition == 0) {
					me._centeronoff.style.left = 'calc(50% - (610px / 2))';
					me._centeronoff.style.top='-300%';
				}
				else if (me._centeronoff.ggCurrentLogicStatePosition == 1) {
					me._centeronoff.style.left = 'calc(50% - (610px / 2))';
					me._centeronoff.style.top='-350%';
				}
				else {
					me._centeronoff.style.left='calc(50% - ((610px + 0px) / 2) + 0px)';
					me._centeronoff.style.top='-450.02%';
				}
			}
		}
		me._centeronoff.logicBlock_position();
		me._centeronoff.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 370))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 470))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._centeronoff.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._centeronoff.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._centeronoff.style.transition='left 0s, top 0s, transform 0s';
				if (me._centeronoff.ggCurrentLogicStateScaling == 0) {
					me._centeronoff.ggParameter.sx = 0.5;
					me._centeronoff.ggParameter.sy = 0.65;
					me._centeronoff.style.transform=parameterToTransform(me._centeronoff.ggParameter);
					skin.updateSize(me._centeronoff);
				}
				else if (me._centeronoff.ggCurrentLogicStateScaling == 1) {
					me._centeronoff.ggParameter.sx = 0.6;
					me._centeronoff.ggParameter.sy = 0.7;
					me._centeronoff.style.transform=parameterToTransform(me._centeronoff.ggParameter);
					skin.updateSize(me._centeronoff);
				}
				else if (me._centeronoff.ggCurrentLogicStateScaling == 2) {
					me._centeronoff.ggParameter.sx = 0.8;
					me._centeronoff.ggParameter.sy = 0.9;
					me._centeronoff.style.transform=parameterToTransform(me._centeronoff.ggParameter);
					skin.updateSize(me._centeronoff);
				}
				else {
					me._centeronoff.ggParameter.sx = 1;
					me._centeronoff.ggParameter.sy = 1;
					me._centeronoff.style.transform=parameterToTransform(me._centeronoff.ggParameter);
					skin.updateSize(me._centeronoff);
				}
			}
		}
		me._centeronoff.logicBlock_scaling();
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
				me._centeronoff.style.transition='left 0s, top 0s, transform 0s';
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
		el=me._center_on=document.createElement('div');
		el.ggId="center_\ubc30\uacbd_\uac00\uad6con";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
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
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._center_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._center_on.logicBlock_visible = function() {
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
			if (me._center_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._center_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._center_on.style.transition='';
				if (me._center_on.ggCurrentLogicStateVisible == 0) {
					me._center_on.style.visibility=(Number(me._center_on.style.opacity)>0||!me._center_on.style.opacity)?'inherit':'hidden';
					me._center_on.ggVisible=true;
				}
				else {
					me._center_on.style.visibility="hidden";
					me._center_on.ggVisible=false;
				}
			}
		}
		me._center_on.logicBlock_visible();
		me._center_on.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
				)
			) {
				player.openNext("{node7}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
				)
			) {
				player.openNext("{node9}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.title) == "\ubcf5\ub3c4"))
				)
			) {
				player.openNext("{node10}","$(cur)");
			}
		}
		me._center_on.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_on=document.createElement('div');
		el.ggId="\uc124\uba851_\uac00\uad6con";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_on.logicBlock_scaling = function() {
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
			if (me.__1_on.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__1_on.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__1_on.style.transition='transform 0s';
				if (me.__1_on.ggCurrentLogicStateScaling == 0) {
					me.__1_on.ggParameter.sx = 0.9;
					me.__1_on.ggParameter.sy = 0.9;
					me.__1_on.style.transform=parameterToTransform(me.__1_on.ggParameter);
					skin.updateSize(me.__1_on);
				}
				else {
					me.__1_on.ggParameter.sx = 1;
					me.__1_on.ggParameter.sy = 1;
					me.__1_on.style.transform=parameterToTransform(me.__1_on.ggParameter);
					skin.updateSize(me.__1_on);
				}
			}
		}
		me.__1_on.logicBlock_scaling();
		me.__1_on.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2on=document.createElement('div');
		els=me._text_2on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 65px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31.94%;';
		hs+='pointer-events:auto;';
		hs+='font-size:1.4em;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2on.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc84\ud2bc\uc744 \ub20c\ub7ec \uac00\uad6c\uac00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2on.ggUpdateText();
		el.appendChild(els);
		me._text_2on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2on.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3on=document.createElement('div');
		els=me._text_3on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-on";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 60%;';
		hs+='position : absolute;';
		hs+='right : -30px;';
		hs+='top : calc(50% - ((60% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		hs+='font-size:1em; font-weight:600;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 800;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3on.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc788\ub294", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3on.ggUpdateText();
		el.appendChild(els);
		me._text_3on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3on.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4on=document.createElement('div');
		els=me._text_4on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 105%;';
		hs+='position : absolute;';
		hs+='right : -185px;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 289%;';
		hs+='pointer-events:auto;';
		hs+='font-weight:100;';
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
		me._text_4on.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubaa8\uc2b5\uc744 \ud655\uc778\ud574 \ubcf4\uc138\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4on.ggUpdateText();
		el.appendChild(els);
		me._text_4on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4on.ggUpdatePosition=function (useTransition) {
		}
		me._text_3on.appendChild(me._text_4on);
		me._text_2on.appendChild(me._text_3on);
		me.__1_on.appendChild(me._text_2on);
		el=me._rectangle_on=document.createElement('div');
		el.ggId="Rectangle on";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f29900;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_on.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_on=document.createElement('div');
		els=me._image_on__img=document.createElement('img');
		els.className='ggskin ggskin_image_on';
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
		el.ggId="Image on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 45%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_on.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_on.appendChild(me._image_on);
		me.__1_on.appendChild(me._rectangle_on);
		el=me._rectangle_onclick=document.createElement('div');
		el.ggId="Rectangle on-click";
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 42px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_onclick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_onclick.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_onclick=document.createElement('div');
		els=me._image_onclick__img=document.createElement('img');
		els.className='ggskin ggskin_image_onclick';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA7CAYAAADrYNMhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGnElEQVRogc2aa4jVRRjGnzm6uurmNS+Zopti2qopWubli4ohSopmIF0wJKKIbhZFQUp2oSKwy4cg/BCVFWhCpCldNg3FS1Ko6YamoXgrb6vrurrq/vow8/fMmf2fs+fs7jmnB5Y9M+/MO8/MeWfmfd85UgyAhPe5TVyb/wNMWAHcImmipCGSukpaLelfY8yewlLLAUA34GPgPEnUAQ3AJmBhsTnGAmgLvE9mnAImAO2Kzfc6AAPMD4heA+pjJrADmFxszilwZuFjF/AqsBTYF8g+KDbf6wAGAVs9cvuBUU7WCXjU2b0vLykybQtgKHDUI3cykJc7e/dNanSx+PpISDokCa+uBzDCKx+WtDnoM7MA3JpEwhhTJ2'+
			'mLV2fkkTPGXJO0Pug3pQDcsgOwMNiUG/BuVmAwcDlo07WIlJMAbiZ5IeGIDvPkJtjUAPOLyVmy9itJxyRVKmn77SRNBYwkGWOQtDboO6sgDDMgIV0nt1/JyUjWrku9ciO7jyZXdADTArM4CgwP2hwN2gxPp68FPEqbbmXR1vu8QdJlSe1dua+kicB+Y8xlV7deku+gzZb0R/OpWr9K0nBJEyR1lFQDVEvaaIw5kYuitcHKfgH09uTzAvn2LPX2BGYBLwIPA+OAcidbAOwGqoFz3oHxNZD9kYx1BXyX+E/gDk/e2w0S4SrOywT6ATOAiUBHoKernw5sdMRq3B/AKuBL7I2dDkeACrIJiNwK/ex1rgcex/NlgHXBAIuB14C9wD/u/xngIyf7KwO5OIST2QlUZLv67wK1XufPgb6e/FlSHbVqkqvZEmwFZgKfAicC2UvZ'+
			'kp8NHPI67gImefKRwOlmkDsLLAfWkLTtCFeAsU5/d+DlQL4lPeNU8oNJNZ0a4GlPXgJUYu3dRwP2K/4RuBhD/i2gPdAfeCSQVXr6E8Ao7I0foR7v4MhEvi3wNqmR1FdAD6/NEhqbygbs5qoAniTVtC4Ag7z+3YE9wCfA/UD/GA7bA/0PZrv6c4DDXsfdwERPPhU4GChf4sl7YE3vJ+AZoF+g37hv4AbSnCTYSM7HqmzJDwN+8DqeARZ58q7YePa8W/ElwMBAR/esBkvPYWxA/nS6iYYdy4A3vI5XgdVAe6/NFOxl0xMoxUtUtQbct3MkmMCd2XaeSeqRdQAY48lblWwaDssD8q/78kwEqpTqt/SSND4qGGMaWpdqLL4NynP8QibyJyX5vkuprBuc9xX38IukOq88FBjcZC9nc6NJvW2PAQPyRjWeR2VgOk9EsrSr6A'+
			'KUfpLOedW9VfjgO4zgZpApCAI6AE8BVTR2lFbkl2sjLhUBh/PYXFLjCWBvt6VkRsHCP8dnJ6k39kNAmzizKZf0SlB3VjaKel7SCKVGYHmFMeaqpF+V+pYwJrYxsAi45M1yOzbAKHObuOBBN42z2JVAu7gV7KxkHFsraYUxZnNMu0Jim2xaJlq4kZI6p5gN9gy/4Fcp811QKNTLpmYiJCQNCYklZBOrta5cJmk8gVdYBHSRdMYrH5J0JIW82xxVkvZ51RWShqm4qJd94IvQxxhzOM4kjsnu7gh9JY0txkb1cEE2BRnhINAzjvw5SZuUzFt2ljRJ9lmzWLhbUievvF/SuUbknenskPS3q0pIuk3SqDwTjAU2LzRVyZPmmiQZY+rTnSRHlepR3ii7+sVAL0njvHJC0mfRhzjUybqjETpKmgaU5YVeZpRLutUrn5I163i4'+
			'm7Sc1NTfFeC+Qm9cYFtwuy4DOjTVKQGsDDqupID+PDYB5qOOHFIg87A5lwhngHfyzDkaux/2zdfHmlwUdAbeCxTUApPI409ZsHmfFcG4p4EJuSoqw/rTPnYDDzRpe80nH/6I4xo2E527K4596jweKKwCHmuWwvTj3ITN24f4Hpfvb47SMuyLhh/NNLgVWUwLj1CgDTAZ+IbGvzbZS5DLbM4ApcCb2AeEEN9hk6t9ctBXAnQB7gI+JD5tvhW4vUXEgwGXYJ97QlQDvwEvANNd+wGRWbnV7eb+BmKPwWXY/RSudoMjPoYM90qzLhzgHklLld7f2Sd7e1fL3tQVskmsE5IGuvLQDOOvlzTX/S6i9QGMwObXD8R8C3G40oT8AjbjvIAc3mJbMoGO2DN/mZtEQzpmGXAZG+Q/R5Ambwqt5qcA42TNaK6kGkn3SrokG1JGry'+
			'qnJV2UzXvWygY96yRVGmMO5TpmqzpZQIkx5gr21CmXDSCGy/rgVZJKZIOb45J+N8bUtOb4rQq8k4I8eKP/ASrVZ8AsGeABAAAAAElFTkSuQmCC';
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
		el.ggId="Image on-click";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 45%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_onclick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_onclick.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_onclick.appendChild(me._image_onclick);
		me.__1_on.appendChild(me._rectangle_onclick);
		me._center_on.appendChild(me.__1_on);
		me._centeronoff.appendChild(me._center_on);
		el=me._center_off=document.createElement('div');
		el.ggId="center_\ubc30\uacbd_\uac00\uad6coff";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
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
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._center_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._center_off.logicBlock_visible = function() {
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
			if (me._center_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._center_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._center_off.style.transition='';
				if (me._center_off.ggCurrentLogicStateVisible == 0) {
					me._center_off.style.visibility=(Number(me._center_off.style.opacity)>0||!me._center_off.style.opacity)?'inherit':'hidden';
					me._center_off.ggVisible=true;
				}
				else {
					me._center_off.style.visibility="hidden";
					me._center_off.ggVisible=false;
				}
			}
		}
		me._center_off.logicBlock_visible();
		me._center_off.onclick=function (e) {
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
		me._center_off.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_off=document.createElement('div');
		el.ggId="\uc124\uba851_\uac00\uad6coff";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_off.logicBlock_scaling = function() {
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
			if (me.__1_off.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__1_off.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__1_off.style.transition='transform 0s';
				if (me.__1_off.ggCurrentLogicStateScaling == 0) {
					me.__1_off.ggParameter.sx = 0.9;
					me.__1_off.ggParameter.sy = 0.9;
					me.__1_off.style.transform=parameterToTransform(me.__1_off.ggParameter);
					skin.updateSize(me.__1_off);
				}
				else {
					me.__1_off.ggParameter.sx = 1;
					me.__1_off.ggParameter.sy = 1;
					me.__1_off.style.transform=parameterToTransform(me.__1_off.ggParameter);
					skin.updateSize(me.__1_off);
				}
			}
		}
		me.__1_off.logicBlock_scaling();
		me.__1_off.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2off=document.createElement('div');
		els=me._text_2off__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 65px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31.94%;';
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
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2off.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc84\ud2bc\uc744 \ub20c\ub7ec \uac00\uad6c\uac00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2off.ggUpdateText();
		el.appendChild(els);
		me._text_2off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2off.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3off=document.createElement('div');
		els=me._text_3off__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 60%;';
		hs+='position : absolute;';
		hs+='right : -30px;';
		hs+='top : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
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
		hs+='font-weight: 800;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3off.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5c6\ub294", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3off.ggUpdateText();
		el.appendChild(els);
		me._text_3off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3off.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4off=document.createElement('div');
		els=me._text_4off__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 105%;';
		hs+='position : absolute;';
		hs+='right : -185px;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 289%;';
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
		me._text_4off.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubaa8\uc2b5\uc744 \ud655\uc778\ud574 \ubcf4\uc138\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4off.ggUpdateText();
		el.appendChild(els);
		me._text_4off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4off.ggUpdatePosition=function (useTransition) {
		}
		me._text_3off.appendChild(me._text_4off);
		me._text_2off.appendChild(me._text_3off);
		me.__1_off.appendChild(me._text_2off);
		el=me._rectangle_off=document.createElement('div');
		el.ggId="Rectangle off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f29900;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_off.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_off=document.createElement('div');
		els=me._image_off__img=document.createElement('img');
		els.className='ggskin ggskin_image_off';
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
		el.ggId="Image off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 45%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_off.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_off.appendChild(me._image_off);
		me.__1_off.appendChild(me._rectangle_off);
		el=me._rectangle_offclick=document.createElement('div');
		el.ggId="Rectangle off-click";
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 42px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_offclick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_offclick.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_offclick=document.createElement('div');
		els=me._image_offclick__img=document.createElement('img');
		els.className='ggskin ggskin_image_offclick';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA7CAYAAADrYNMhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGnElEQVRogc2aa4jVRRjGnzm6uurmNS+Zopti2qopWubli4ohSopmIF0wJKKIbhZFQUp2oSKwy4cg/BCVFWhCpCldNg3FS1Ko6YamoXgrb6vrurrq/vow8/fMmf2fs+fs7jmnB5Y9M+/MO8/MeWfmfd85UgyAhPe5TVyb/wNMWAHcImmipCGSukpaLelfY8yewlLLAUA34GPgPEnUAQ3AJmBhsTnGAmgLvE9mnAImAO2Kzfc6AAPMD4heA+pjJrADmFxszilwZuFjF/AqsBTYF8g+KDbf6wAGAVs9cvuBUU7WCXjU2b0vLykybQtgKHDUI3cykJc7e/dNanSx+PpISDokCa+uBzDCKx+WtDnoM7MA3JpEwhhTJ2'+
			'mLV2fkkTPGXJO0Pug3pQDcsgOwMNiUG/BuVmAwcDlo07WIlJMAbiZ5IeGIDvPkJtjUAPOLyVmy9itJxyRVKmn77SRNBYwkGWOQtDboO6sgDDMgIV0nt1/JyUjWrku9ciO7jyZXdADTArM4CgwP2hwN2gxPp68FPEqbbmXR1vu8QdJlSe1dua+kicB+Y8xlV7deku+gzZb0R/OpWr9K0nBJEyR1lFQDVEvaaIw5kYuitcHKfgH09uTzAvn2LPX2BGYBLwIPA+OAcidbAOwGqoFz3oHxNZD9kYx1BXyX+E/gDk/e2w0S4SrOywT6ATOAiUBHoKernw5sdMRq3B/AKuBL7I2dDkeACrIJiNwK/ex1rgcex/NlgHXBAIuB14C9wD/u/xngIyf7KwO5OIST2QlUZLv67wK1XufPgb6e/FlSHbVqkqvZEmwFZgKfAicC2UvZ'+
			'kp8NHPI67gImefKRwOlmkDsLLAfWkLTtCFeAsU5/d+DlQL4lPeNU8oNJNZ0a4GlPXgJUYu3dRwP2K/4RuBhD/i2gPdAfeCSQVXr6E8Ao7I0foR7v4MhEvi3wNqmR1FdAD6/NEhqbygbs5qoAniTVtC4Ag7z+3YE9wCfA/UD/GA7bA/0PZrv6c4DDXsfdwERPPhU4GChf4sl7YE3vJ+AZoF+g37hv4AbSnCTYSM7HqmzJDwN+8DqeARZ58q7YePa8W/ElwMBAR/esBkvPYWxA/nS6iYYdy4A3vI5XgdVAe6/NFOxl0xMoxUtUtQbct3MkmMCd2XaeSeqRdQAY48lblWwaDssD8q/78kwEqpTqt/SSND4qGGMaWpdqLL4NynP8QibyJyX5vkuprBuc9xX38IukOq88FBjcZC9nc6NJvW2PAQPyRjWeR2VgOk9EsrSr6A'+
			'KUfpLOedW9VfjgO4zgZpApCAI6AE8BVTR2lFbkl2sjLhUBh/PYXFLjCWBvt6VkRsHCP8dnJ6k39kNAmzizKZf0SlB3VjaKel7SCKVGYHmFMeaqpF+V+pYwJrYxsAi45M1yOzbAKHObuOBBN42z2JVAu7gV7KxkHFsraYUxZnNMu0Jim2xaJlq4kZI6p5gN9gy/4Fcp811QKNTLpmYiJCQNCYklZBOrta5cJmk8gVdYBHSRdMYrH5J0JIW82xxVkvZ51RWShqm4qJd94IvQxxhzOM4kjsnu7gh9JY0txkb1cEE2BRnhINAzjvw5SZuUzFt2ljRJ9lmzWLhbUievvF/SuUbknenskPS3q0pIuk3SqDwTjAU2LzRVyZPmmiQZY+rTnSRHlepR3ii7+sVAL0njvHJC0mfRhzjUybqjETpKmgaU5YVeZpRLutUrn5I163i4'+
			'm7Sc1NTfFeC+Qm9cYFtwuy4DOjTVKQGsDDqupID+PDYB5qOOHFIg87A5lwhngHfyzDkaux/2zdfHmlwUdAbeCxTUApPI409ZsHmfFcG4p4EJuSoqw/rTPnYDDzRpe80nH/6I4xo2E527K4596jweKKwCHmuWwvTj3ITN24f4Hpfvb47SMuyLhh/NNLgVWUwLj1CgDTAZ+IbGvzbZS5DLbM4ApcCb2AeEEN9hk6t9ctBXAnQB7gI+JD5tvhW4vUXEgwGXYJ97QlQDvwEvANNd+wGRWbnV7eb+BmKPwWXY/RSudoMjPoYM90qzLhzgHklLld7f2Sd7e1fL3tQVskmsE5IGuvLQDOOvlzTX/S6i9QGMwObXD8R8C3G40oT8AjbjvIAc3mJbMoGO2DN/mZtEQzpmGXAZG+Q/R5Ambwqt5qcA42TNaK6kGkn3SrokG1JGry'+
			'qnJV2UzXvWygY96yRVGmMO5TpmqzpZQIkx5gr21CmXDSCGy/rgVZJKZIOb45J+N8bUtOb4rQq8k4I8eKP/ASrVZ8AsGeABAAAAAElFTkSuQmCC';
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
		el.ggId="Image off-click";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 45%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_offclick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_offclick.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_offclick.appendChild(me._image_offclick);
		me.__1_off.appendChild(me._rectangle_offclick);
		me._center_off.appendChild(me.__1_off);
		me._centeronoff.appendChild(me._center_off);
		me._footer.appendChild(me._centeronoff);
		el=me._center0=document.createElement('div');
		el.ggId="center-\uc218\uce58\uc120";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 65px;';
		hs+='left : calc(50% - ((610px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -450.02%;';
		hs+='visibility : hidden;';
		hs+='width : 610px;';
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
		me._center0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._center0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._center0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._center0.style.transition='left 0s, top 0s, transform 0s';
				if (me._center0.ggCurrentLogicStatePosition == 0) {
					me._center0.style.left = 'calc(50% - (610px / 2))';
					me._center0.style.top='-300%';
				}
				else if (me._center0.ggCurrentLogicStatePosition == 1) {
					me._center0.style.left = 'calc(50% - (610px / 2))';
					me._center0.style.top='-350%';
				}
				else {
					me._center0.style.left='calc(50% - ((610px + 0px) / 2) + 0px)';
					me._center0.style.top='-450.02%';
				}
			}
		}
		me._center0.logicBlock_position();
		me._center0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 370))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 470))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._center0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._center0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._center0.style.transition='left 0s, top 0s, transform 0s';
				if (me._center0.ggCurrentLogicStateScaling == 0) {
					me._center0.ggParameter.sx = 0.5;
					me._center0.ggParameter.sy = 0.65;
					me._center0.style.transform=parameterToTransform(me._center0.ggParameter);
					skin.updateSize(me._center0);
				}
				else if (me._center0.ggCurrentLogicStateScaling == 1) {
					me._center0.ggParameter.sx = 0.6;
					me._center0.ggParameter.sy = 0.7;
					me._center0.style.transform=parameterToTransform(me._center0.ggParameter);
					skin.updateSize(me._center0);
				}
				else if (me._center0.ggCurrentLogicStateScaling == 2) {
					me._center0.ggParameter.sx = 0.8;
					me._center0.ggParameter.sy = 0.9;
					me._center0.style.transform=parameterToTransform(me._center0.ggParameter);
					skin.updateSize(me._center0);
				}
				else {
					me._center0.ggParameter.sx = 1;
					me._center0.ggParameter.sy = 1;
					me._center0.style.transform=parameterToTransform(me._center0.ggParameter);
					skin.updateSize(me._center0);
				}
			}
		}
		me._center0.logicBlock_scaling();
		me._center0.logicBlock_visible = function() {
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
			if (me._center0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._center0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._center0.style.transition='left 0s, top 0s, transform 0s';
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
		el.ggId="center_\uc218\uce58\uc120";
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
		el=me.__1_0=document.createElement('div');
		el.ggId="\uc124\uba851_\uc218\uce58\uc120";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
			return player.getCurrentNode();
		}
		me.__1_0.logicBlock_scaling = function() {
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
			if (me.__1_0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__1_0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__1_0.style.transition='transform 0s';
				if (me.__1_0.ggCurrentLogicStateScaling == 0) {
					me.__1_0.ggParameter.sx = 0.9;
					me.__1_0.ggParameter.sy = 0.9;
					me.__1_0.style.transform=parameterToTransform(me.__1_0.ggParameter);
					skin.updateSize(me.__1_0);
				}
				else {
					me.__1_0.ggParameter.sx = 1;
					me.__1_0.ggParameter.sy = 1;
					me.__1_0.style.transform=parameterToTransform(me.__1_0.ggParameter);
					skin.updateSize(me.__1_0);
				}
			}
		}
		me.__1_0.logicBlock_scaling();
		me.__1_0.onclick=function (e) {
			player.setMediaVisibility("\uce58\uc218\uc120","2",0);
		}
		me.__1_0.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_22=document.createElement('div');
		els=me._text_22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-\uc218\uce58\uc120";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 65px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 37.94%;';
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
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_22.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc84\ud2bc\uc744 \ub20c\ub7ec \ud544\uc694\ud55c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_22.ggUpdateText();
		el.appendChild(els);
		me._text_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_22.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_31=document.createElement('div');
		els=me._text_31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-\uc218\uce58\uc120";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 60%;';
		hs+='position : absolute;';
		hs+='right : -18px;';
		hs+='top : calc(50% - ((60% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
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
		hs+='font-weight: 800;';
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
			var hs = player._("\uce58\uc218\ub97c", params);
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
		el=me._text_40=document.createElement('div');
		els=me._text_40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-\uc218\uce58\uc120";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 105%;';
		hs+='position : absolute;';
		hs+='right : -146px;';
		hs+='top : -1px;';
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
			var hs = player._("\ud655\uc778\ud574 \ubcf4\uc138\uc694", params);
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
		me._text_31.appendChild(me._text_40);
		me._text_22.appendChild(me._text_31);
		me.__1_0.appendChild(me._text_22);
		el=me._rectangle_0=document.createElement('div');
		el.ggId="Rectangle \uc218\uce58\uc120";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f29900;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
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
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAlCAYAAADvLtGsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEbElEQVRYhdWYXYhVVRTHf3sccxQ/KhJRK7IiU7PIeikRSvDBh6AepDLzpZCQRPpCCnuQ9MkwxAJjoKIHrR4iSN9SUkopcAhtqB78Sh0hbfJrdEYdfz2cc+duz9xz78z9sv4PM+futfZ/7f8566y99gncIKgBmALMBO4DJgA3AReBv4BDwM8hhN4btcaKUO9Sl6s/qVcsj5PqNvXZVPx/A+oYda3aW0FAHn5RXy0Xoylq1cXAWmBaxnQWOADsB04DvcBY4E5gBjCnxBq3A0tDCN2NXPMgqEFdUeIu71eXqBMrzH9EXaV2ZeafVhc2S0dhMWvU/mgRXeoCtXWYPGPVTWpPxNWjzov9GpZm6nvA6mhoH/BUCOFkxm'+
			'8mMJeksrUBZ4DDwN4QwrESvj8At6RDJ4AHG5py6hz1fHQXN6stGZ9l6j71Ws4L36d+ps4zqmTqQ+qpyO+UenMjxXwbBduTsU1Xv84RkIcNGY771TOR/SMbUbrVF6Ig59VHI9s09VJmoWfVLepq9Q11vbpDvZjx+1IdF3EtyHBMqreQW1PiAtZGtjb1cEboanVqDtd0dWdG0M7IPioVXcDyeot5Tr2akh+JxlvUjV7/fjw+BL4R6kqvr4gvRvaXIs4/6ykkmJTPAlZGticzd3jJMLnbo7kH1FHp+PhYaD3FjDTptwqYHdl2RePrq+QvvGsX1TnR+ECxqYeOAukoiyXzmDo5ssW4p0r+jyOO16Lx8Y0Q0xYF+9W09pu8yNYaUF0U0XRlbGpmI6sRcZ3vAfrS6ynReGcN/J0k3QHA5IztLEA9xcS4BpR6CrWkQrm5V6Fx'+
			'YmLEKfFADTyzSE6jACcztpaBP41ECOGP+He1BQBYQDGV3y/l0IwnA7A7un6lSo6l6f9LwPelHFrV24FFwJUqgxQwsoxtDbAjvX5T7QghbB0qsdpOcjwAOEheIVHnW3/sVduiGKXamceGIGKEyUk1bmcGdQ9qt2pTxKQB29Qjkc859R2jzTXjf6/6XYZ3V45vtw4+vp4AvkivL1E8KfYAnwCXgduAxSRpdQHYSJICrcBKchBC6FXnk3zAGAOMA9YBq9RtwO8k38wmAQ+TnD5HRxRfAS/n8RdUxU9me8ZWwHGLzd1s9UI6fjDyHV3uyUR+M9RvhvmkP6ig4W8d3AGMzfEfQfEutVAskRNKu+cjhPBbCOFpYBnQAfTnuPYBnwNPAK9XoL0GSWpcFyvz+1OSFuIcSdpB8ul0E0lq/VNp8XkIIbQD7Sbd9VxgKskN6yb5NL'+
			's3hHB0iHRjgEFptrvCpFwMNc3qDZPPUJZKs3PNWECdMVDhsmk2S327StJym2ZDoD5DUvkGBpqyzzRAyGT1YBRzc6N6s37SClNvmGy+zwM/Anenw6eBd7NpdhzYUmWcVool9A7gLbXWfi/LPxFYCEzP2FaEEE6V3TSHg0w1axY61bmx2hhT+H+gC9gKrAshDOx1rcBRYAPJEeBQDQGuAh+S9GuNQB/J1tEB7AkhXM46/As9oPRk7m7vhgAAAABJRU5ErkJggg==';
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
		el.ggId="Image \uc218\uce58\uc120";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 45%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
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
		me._rectangle_0.appendChild(me._image_3);
		me.__1_0.appendChild(me._rectangle_0);
		el=me._rectangle_click0=document.createElement('div');
		el.ggId="Rectangle \uc218\uce58\uc120-click";
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 42px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_click0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_click0.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_click0=document.createElement('div');
		els=me._image_click0__img=document.createElement('img');
		els.className='ggskin ggskin_image_click0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA7CAYAAADrYNMhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGnElEQVRogc2aa4jVRRjGnzm6uurmNS+Zopti2qopWubli4ohSopmIF0wJKKIbhZFQUp2oSKwy4cg/BCVFWhCpCldNg3FS1Ko6YamoXgrb6vrurrq/vow8/fMmf2fs+fs7jmnB5Y9M+/MO8/MeWfmfd85UgyAhPe5TVyb/wNMWAHcImmipCGSukpaLelfY8yewlLLAUA34GPgPEnUAQ3AJmBhsTnGAmgLvE9mnAImAO2Kzfc6AAPMD4heA+pjJrADmFxszilwZuFjF/AqsBTYF8g+KDbf6wAGAVs9cvuBUU7WCXjU2b0vLykybQtgKHDUI3cykJc7e/dNanSx+PpISDokCa+uBzDCKx+WtDnoM7MA3JpEwhhTJ2'+
			'mLV2fkkTPGXJO0Pug3pQDcsgOwMNiUG/BuVmAwcDlo07WIlJMAbiZ5IeGIDvPkJtjUAPOLyVmy9itJxyRVKmn77SRNBYwkGWOQtDboO6sgDDMgIV0nt1/JyUjWrku9ciO7jyZXdADTArM4CgwP2hwN2gxPp68FPEqbbmXR1vu8QdJlSe1dua+kicB+Y8xlV7deku+gzZb0R/OpWr9K0nBJEyR1lFQDVEvaaIw5kYuitcHKfgH09uTzAvn2LPX2BGYBLwIPA+OAcidbAOwGqoFz3oHxNZD9kYx1BXyX+E/gDk/e2w0S4SrOywT6ATOAiUBHoKernw5sdMRq3B/AKuBL7I2dDkeACrIJiNwK/ex1rgcex/NlgHXBAIuB14C9wD/u/xngIyf7KwO5OIST2QlUZLv67wK1XufPgb6e/FlSHbVqkqvZEmwFZgKfAicC2UvZ'+
			'kp8NHPI67gImefKRwOlmkDsLLAfWkLTtCFeAsU5/d+DlQL4lPeNU8oNJNZ0a4GlPXgJUYu3dRwP2K/4RuBhD/i2gPdAfeCSQVXr6E8Ao7I0foR7v4MhEvi3wNqmR1FdAD6/NEhqbygbs5qoAniTVtC4Ag7z+3YE9wCfA/UD/GA7bA/0PZrv6c4DDXsfdwERPPhU4GChf4sl7YE3vJ+AZoF+g37hv4AbSnCTYSM7HqmzJDwN+8DqeARZ58q7YePa8W/ElwMBAR/esBkvPYWxA/nS6iYYdy4A3vI5XgdVAe6/NFOxl0xMoxUtUtQbct3MkmMCd2XaeSeqRdQAY48lblWwaDssD8q/78kwEqpTqt/SSND4qGGMaWpdqLL4NynP8QibyJyX5vkuprBuc9xX38IukOq88FBjcZC9nc6NJvW2PAQPyRjWeR2VgOk9EsrSr6A'+
			'KUfpLOedW9VfjgO4zgZpApCAI6AE8BVTR2lFbkl2sjLhUBh/PYXFLjCWBvt6VkRsHCP8dnJ6k39kNAmzizKZf0SlB3VjaKel7SCKVGYHmFMeaqpF+V+pYwJrYxsAi45M1yOzbAKHObuOBBN42z2JVAu7gV7KxkHFsraYUxZnNMu0Jim2xaJlq4kZI6p5gN9gy/4Fcp811QKNTLpmYiJCQNCYklZBOrta5cJmk8gVdYBHSRdMYrH5J0JIW82xxVkvZ51RWShqm4qJd94IvQxxhzOM4kjsnu7gh9JY0txkb1cEE2BRnhINAzjvw5SZuUzFt2ljRJ9lmzWLhbUievvF/SuUbknenskPS3q0pIuk3SqDwTjAU2LzRVyZPmmiQZY+rTnSRHlepR3ii7+sVAL0njvHJC0mfRhzjUybqjETpKmgaU5YVeZpRLutUrn5I163i4'+
			'm7Sc1NTfFeC+Qm9cYFtwuy4DOjTVKQGsDDqupID+PDYB5qOOHFIg87A5lwhngHfyzDkaux/2zdfHmlwUdAbeCxTUApPI409ZsHmfFcG4p4EJuSoqw/rTPnYDDzRpe80nH/6I4xo2E527K4596jweKKwCHmuWwvTj3ITN24f4Hpfvb47SMuyLhh/NNLgVWUwLj1CgDTAZ+IbGvzbZS5DLbM4ApcCb2AeEEN9hk6t9ctBXAnQB7gI+JD5tvhW4vUXEgwGXYJ97QlQDvwEvANNd+wGRWbnV7eb+BmKPwWXY/RSudoMjPoYM90qzLhzgHklLld7f2Sd7e1fL3tQVskmsE5IGuvLQDOOvlzTX/S6i9QGMwObXD8R8C3G40oT8AjbjvIAc3mJbMoGO2DN/mZtEQzpmGXAZG+Q/R5Ambwqt5qcA42TNaK6kGkn3SrokG1JGry'+
			'qnJV2UzXvWygY96yRVGmMO5TpmqzpZQIkx5gr21CmXDSCGy/rgVZJKZIOb45J+N8bUtOb4rQq8k4I8eKP/ASrVZ8AsGeABAAAAAElFTkSuQmCC';
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
		el.ggId="Image \uc218\uce58\uc120-click";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 45%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_click0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_click0.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_click0.appendChild(me._image_click0);
		me.__1_0.appendChild(me._rectangle_click0);
		me._center_0.appendChild(me.__1_0);
		me._center0.appendChild(me._center_0);
		me._footer.appendChild(me._center0);
		el=me._center=document.createElement('div');
		el.ggId="center-\uc81c\ud488\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 65px;';
		hs+='left : calc(50% - ((610px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -449.93%;';
		hs+='visibility : hidden;';
		hs+='width : 610px;';
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
		me._center.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._center.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._center.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._center.style.transition='left 0s, top 0s, transform 0s';
				if (me._center.ggCurrentLogicStatePosition == 0) {
					me._center.style.left = 'calc(50% - (610px / 2))';
					me._center.style.top='-300%';
				}
				else if (me._center.ggCurrentLogicStatePosition == 1) {
					me._center.style.left = 'calc(50% - (610px / 2))';
					me._center.style.top='-350%';
				}
				else {
					me._center.style.left='calc(50% - ((610px + 0px) / 2) + 0px)';
					me._center.style.top='-449.93%';
				}
			}
		}
		me._center.logicBlock_position();
		me._center.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 370))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 470))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._center.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._center.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._center.style.transition='left 0s, top 0s, transform 0s';
				if (me._center.ggCurrentLogicStateScaling == 0) {
					me._center.ggParameter.sx = 0.5;
					me._center.ggParameter.sy = 0.65;
					me._center.style.transform=parameterToTransform(me._center.ggParameter);
					skin.updateSize(me._center);
				}
				else if (me._center.ggCurrentLogicStateScaling == 1) {
					me._center.ggParameter.sx = 0.6;
					me._center.ggParameter.sy = 0.7;
					me._center.style.transform=parameterToTransform(me._center.ggParameter);
					skin.updateSize(me._center);
				}
				else if (me._center.ggCurrentLogicStateScaling == 2) {
					me._center.ggParameter.sx = 0.8;
					me._center.ggParameter.sy = 0.9;
					me._center.style.transform=parameterToTransform(me._center.ggParameter);
					skin.updateSize(me._center);
				}
				else {
					me._center.ggParameter.sx = 1;
					me._center.ggParameter.sy = 1;
					me._center.style.transform=parameterToTransform(me._center.ggParameter);
					skin.updateSize(me._center);
				}
			}
		}
		me._center.logicBlock_scaling();
		me._center.logicBlock_visible = function() {
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
			if (me._center.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._center.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._center.style.transition='left 0s, top 0s, transform 0s';
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
		el.ggId="center_\uc81c\ud488\uc815\ubcf4";
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
		el=me.__1_=document.createElement('div');
		el.ggId="\uc124\uba851_\uc81c\ud488\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
			return player.getCurrentNode();
		}
		me.__1_.logicBlock_scaling = function() {
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
			if (me.__1_.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__1_.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__1_.style.transition='transform 0s';
				if (me.__1_.ggCurrentLogicStateScaling == 0) {
					me.__1_.ggParameter.sx = 0.9;
					me.__1_.ggParameter.sy = 0.9;
					me.__1_.style.transform=parameterToTransform(me.__1_.ggParameter);
					skin.updateSize(me.__1_);
				}
				else {
					me.__1_.ggParameter.sx = 1;
					me.__1_.ggParameter.sy = 1;
					me.__1_.style.transform=parameterToTransform(me.__1_.ggParameter);
					skin.updateSize(me.__1_);
				}
			}
		}
		me.__1_.logicBlock_scaling();
		me.__1_.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-\uc81c\ud488\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 65px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 29.94%;';
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
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_20.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc84\ud2bc\uc744 \ub20c\ub7ec \uc124\uce58\ub41c", params);
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
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 60%;';
		hs+='position : absolute;';
		hs+='right : -99px;';
		hs+='top : calc(50% - ((60% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 61%;';
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
		hs+='font-weight: 800;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_30.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488 \uc815\ubcf4\ub97c", params);
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
		me._text_30.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-\uc81c\ud488\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 105%;';
		hs+='position : absolute;';
		hs+='right : -170px;';
		hs+='top : -1px;';
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
			var hs = player._("\ud655\uc778\ud574 \ubcf4\uc138\uc694", params);
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
		me._text_30.appendChild(me._text_4);
		me._text_20.appendChild(me._text_30);
		me.__1_.appendChild(me._text_20);
		el=me._rectangle_=document.createElement('div');
		el.ggId="Rectangle \uc81c\ud488\uc815\ubcf4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f29900;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
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
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
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
		el.ggId="Image \uc81c\ud488\uc815\ubcf41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 45%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
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
		me._rectangle_.appendChild(me._image_1);
		me.__1_.appendChild(me._rectangle_);
		el=me._rectangle_click=document.createElement('div');
		el.ggId="Rectangle \uc81c\ud488\uc815\ubcf4-click";
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 42px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_click.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_click.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_click=document.createElement('div');
		els=me._image_click__img=document.createElement('img');
		els.className='ggskin ggskin_image_click';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA7CAYAAADrYNMhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGnElEQVRogc2aa4jVRRjGnzm6uurmNS+Zopti2qopWubli4ohSopmIF0wJKKIbhZFQUp2oSKwy4cg/BCVFWhCpCldNg3FS1Ko6YamoXgrb6vrurrq/vow8/fMmf2fs+fs7jmnB5Y9M+/MO8/MeWfmfd85UgyAhPe5TVyb/wNMWAHcImmipCGSukpaLelfY8yewlLLAUA34GPgPEnUAQ3AJmBhsTnGAmgLvE9mnAImAO2Kzfc6AAPMD4heA+pjJrADmFxszilwZuFjF/AqsBTYF8g+KDbf6wAGAVs9cvuBUU7WCXjU2b0vLykybQtgKHDUI3cykJc7e/dNanSx+PpISDokCa+uBzDCKx+WtDnoM7MA3JpEwhhTJ2'+
			'mLV2fkkTPGXJO0Pug3pQDcsgOwMNiUG/BuVmAwcDlo07WIlJMAbiZ5IeGIDvPkJtjUAPOLyVmy9itJxyRVKmn77SRNBYwkGWOQtDboO6sgDDMgIV0nt1/JyUjWrku9ciO7jyZXdADTArM4CgwP2hwN2gxPp68FPEqbbmXR1vu8QdJlSe1dua+kicB+Y8xlV7deku+gzZb0R/OpWr9K0nBJEyR1lFQDVEvaaIw5kYuitcHKfgH09uTzAvn2LPX2BGYBLwIPA+OAcidbAOwGqoFz3oHxNZD9kYx1BXyX+E/gDk/e2w0S4SrOywT6ATOAiUBHoKernw5sdMRq3B/AKuBL7I2dDkeACrIJiNwK/ex1rgcex/NlgHXBAIuB14C9wD/u/xngIyf7KwO5OIST2QlUZLv67wK1XufPgb6e/FlSHbVqkqvZEmwFZgKfAicC2UvZ'+
			'kp8NHPI67gImefKRwOlmkDsLLAfWkLTtCFeAsU5/d+DlQL4lPeNU8oNJNZ0a4GlPXgJUYu3dRwP2K/4RuBhD/i2gPdAfeCSQVXr6E8Ao7I0foR7v4MhEvi3wNqmR1FdAD6/NEhqbygbs5qoAniTVtC4Ag7z+3YE9wCfA/UD/GA7bA/0PZrv6c4DDXsfdwERPPhU4GChf4sl7YE3vJ+AZoF+g37hv4AbSnCTYSM7HqmzJDwN+8DqeARZ58q7YePa8W/ElwMBAR/esBkvPYWxA/nS6iYYdy4A3vI5XgdVAe6/NFOxl0xMoxUtUtQbct3MkmMCd2XaeSeqRdQAY48lblWwaDssD8q/78kwEqpTqt/SSND4qGGMaWpdqLL4NynP8QibyJyX5vkuprBuc9xX38IukOq88FBjcZC9nc6NJvW2PAQPyRjWeR2VgOk9EsrSr6A'+
			'KUfpLOedW9VfjgO4zgZpApCAI6AE8BVTR2lFbkl2sjLhUBh/PYXFLjCWBvt6VkRsHCP8dnJ6k39kNAmzizKZf0SlB3VjaKel7SCKVGYHmFMeaqpF+V+pYwJrYxsAi45M1yOzbAKHObuOBBN42z2JVAu7gV7KxkHFsraYUxZnNMu0Jim2xaJlq4kZI6p5gN9gy/4Fcp811QKNTLpmYiJCQNCYklZBOrta5cJmk8gVdYBHSRdMYrH5J0JIW82xxVkvZ51RWShqm4qJd94IvQxxhzOM4kjsnu7gh9JY0txkb1cEE2BRnhINAzjvw5SZuUzFt2ljRJ9lmzWLhbUievvF/SuUbknenskPS3q0pIuk3SqDwTjAU2LzRVyZPmmiQZY+rTnSRHlepR3ii7+sVAL0njvHJC0mfRhzjUybqjETpKmgaU5YVeZpRLutUrn5I163i4'+
			'm7Sc1NTfFeC+Qm9cYFtwuy4DOjTVKQGsDDqupID+PDYB5qOOHFIg87A5lwhngHfyzDkaux/2zdfHmlwUdAbeCxTUApPI409ZsHmfFcG4p4EJuSoqw/rTPnYDDzRpe80nH/6I4xo2E527K4596jweKKwCHmuWwvTj3ITN24f4Hpfvb47SMuyLhh/NNLgVWUwLj1CgDTAZ+IbGvzbZS5DLbM4ApcCb2AeEEN9hk6t9ctBXAnQB7gI+JD5tvhW4vUXEgwGXYJ97QlQDvwEvANNd+wGRWbnV7eb+BmKPwWXY/RSudoMjPoYM90qzLhzgHklLld7f2Sd7e1fL3tQVskmsE5IGuvLQDOOvlzTX/S6i9QGMwObXD8R8C3G40oT8AjbjvIAc3mJbMoGO2DN/mZtEQzpmGXAZG+Q/R5Ambwqt5qcA42TNaK6kGkn3SrokG1JGry'+
			'qnJV2UzXvWygY96yRVGmMO5TpmqzpZQIkx5gr21CmXDSCGy/rgVZJKZIOb45J+N8bUtOb4rQq8k4I8eKP/ASrVZ8AsGeABAAAAAElFTkSuQmCC';
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
		el.ggId="Image \uc81c\ud488\uc815\ubcf4-click";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 45%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_click.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_click.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_click.appendChild(me._image_click);
		me.__1_.appendChild(me._rectangle_click);
		me._center_.appendChild(me.__1_);
		me._center.appendChild(me._center_);
		me._footer.appendChild(me._center);
		el=me.__73=document.createElement('div');
		el.ggId="\uae30\ub2a5\uc774\ub3d9\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -200%;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__73.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__73.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__73.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__73.style.transition='left 0s, top 0s, transform 0s';
				if (me.__73.ggCurrentLogicStatePosition == 0) {
					me.__73.style.left = 'calc(50% - (50% / 2))';
					me.__73.style.top='-150%';
				}
				else if (me.__73.ggCurrentLogicStatePosition == 1) {
					me.__73.style.left = 'calc(50% - (50% / 2))';
					me.__73.style.top='-180%';
				}
				else {
					me.__73.style.left='calc(50% - ((50% + 0px) / 2) + 0px)';
					me.__73.style.top='-200%';
				}
			}
		}
		me.__73.logicBlock_position();
		me.__73.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 470))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__73.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__73.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__73.style.transition='left 0s, top 0s, transform 0s';
				if (me.__73.ggCurrentLogicStateScaling == 0) {
					me.__73.ggParameter.sx = 0.6;
					me.__73.ggParameter.sy = 0.6;
					me.__73.style.transform=parameterToTransform(me.__73.ggParameter);
					skin.updateSize(me.__73);
				}
				else if (me.__73.ggCurrentLogicStateScaling == 1) {
					me.__73.ggParameter.sx = 0.8;
					me.__73.ggParameter.sy = 0.8;
					me.__73.style.transform=parameterToTransform(me.__73.ggParameter);
					skin.updateSize(me.__73);
				}
				else {
					me.__73.ggParameter.sx = 1;
					me.__73.ggParameter.sy = 1;
					me.__73.style.transform=parameterToTransform(me.__73.ggParameter);
					skin.updateSize(me.__73);
				}
			}
		}
		me.__73.logicBlock_scaling();
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		el=me.__78=document.createElement('div');
		el.ggId="\uac00\uad6c";
		el.ggDx=-70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) - 70px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me.__79=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f29900;';
		hs+='border : 3px solid rgba(0,0,0,0);';
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
		me.__79.logicBlock_bordercolor = function() {
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
			if (me.__79.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__79.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__79.style.transition='border-color 0s';
				if (me.__79.ggCurrentLogicStateBorderColor == 0) {
					me.__79.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me.__79.ggCurrentLogicStateBorderColor == 1) {
					me.__79.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__79.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__79.logicBlock_bordercolor();
		me.__79.onclick=function (e) {
			player.openNext("{node11}","");
		}
		me.__79.onmouseover=function (e) {
			me.elementMouseOver['_79']=true;
			me._text_2.logicBlock_visible();
		}
		me.__79.onmouseout=function (e) {
			me.elementMouseOver['_79']=false;
			me._text_2.logicBlock_visible();
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
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
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
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
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me._image_2);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,0.588235);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -27px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
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
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6con\/off", params);
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
		me._text_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_79'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_2.style.transition='';
				if (me._text_2.ggCurrentLogicStateVisible == 0) {
					me._text_2.style.visibility=(Number(me._text_2.style.opacity)>0||!me._text_2.style.opacity)?'inherit':'hidden';
					me._text_2.ggVisible=true;
				}
				else {
					me._text_2.style.visibility="hidden";
					me._text_2.ggVisible=false;
				}
			}
		}
		me._text_2.logicBlock_visible();
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me._text_2);
		me.__78.appendChild(me.__79);
		me.__73.appendChild(me.__78);
		el=me.__76=document.createElement('div');
		el.ggId="\uc218\uce58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
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
		el=me.__77=document.createElement('div');
		el.ggId="\uce58\uc218\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f29900;';
		hs+='border : 3px solid rgba(0,0,0,0);';
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
		me.__77.logicBlock_bordercolor = function() {
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
			if (me.__77.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__77.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__77.style.transition='border-color 0s';
				if (me.__77.ggCurrentLogicStateBorderColor == 0) {
					me.__77.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__77.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__77.logicBlock_bordercolor();
		me.__77.onclick=function (e) {
			player.openNext("{node16}","");
			player.setMediaVisibility("\ub0c9\uc7a5\uace0\uce58\uc218","0",0);
			player.setMediaVisibility("\ucc3d\ubb381","0",0);
			player.setMediaVisibility("\ucc3d\ubb382","0",0);
			player.setMediaVisibility("\uc2dd\ud0c11","0",0);
			player.setMediaVisibility("\uac70\uc2e4\uac00\ub85c","0",0);
			player.setMediaVisibility("\uac70\uc2e4\uc138\ub85c","0",0);
			player.setMediaVisibility("\ud070\ucc3d","0",0);
		}
		me.__77.onmouseover=function (e) {
			me.elementMouseOver['_77']=true;
			me._text_0.logicBlock_visible();
		}
		me.__77.onmouseout=function (e) {
			me.elementMouseOver['_77']=false;
			me._text_0.logicBlock_visible();
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_0=document.createElement('div');
		els=me._image_0__img=document.createElement('img');
		els.className='ggskin ggskin_image_0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAlCAYAAADvLtGsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEbElEQVRYhdWYXYhVVRTHf3sccxQ/KhJRK7IiU7PIeikRSvDBh6AepDLzpZCQRPpCCnuQ9MkwxAJjoKIHrR4iSN9SUkopcAhtqB78Sh0hbfJrdEYdfz2cc+duz9xz78z9sv4PM+futfZ/7f8566y99gncIKgBmALMBO4DJgA3AReBv4BDwM8hhN4btcaKUO9Sl6s/qVcsj5PqNvXZVPx/A+oYda3aW0FAHn5RXy0Xoylq1cXAWmBaxnQWOADsB04DvcBY4E5gBjCnxBq3A0tDCN2NXPMgqEFdUeIu71eXqBMrzH9EXaV2ZeafVhc2S0dhMWvU/mgRXeoCtXWYPGPVTWpPxNWjzov9GpZm6nvA6mhoH/BUCOFkxm'+
			'8mMJeksrUBZ4DDwN4QwrESvj8At6RDJ4AHG5py6hz1fHQXN6stGZ9l6j71Ws4L36d+ps4zqmTqQ+qpyO+UenMjxXwbBduTsU1Xv84RkIcNGY771TOR/SMbUbrVF6Ig59VHI9s09VJmoWfVLepq9Q11vbpDvZjx+1IdF3EtyHBMqreQW1PiAtZGtjb1cEboanVqDtd0dWdG0M7IPioVXcDyeot5Tr2akh+JxlvUjV7/fjw+BL4R6kqvr4gvRvaXIs4/6ykkmJTPAlZGticzd3jJMLnbo7kH1FHp+PhYaD3FjDTptwqYHdl2RePrq+QvvGsX1TnR+ECxqYeOAukoiyXzmDo5ssW4p0r+jyOO16Lx8Y0Q0xYF+9W09pu8yNYaUF0U0XRlbGpmI6sRcZ3vAfrS6ynReGcN/J0k3QHA5IztLEA9xcS4BpR6CrWkQrm5V6Fx'+
			'YmLEKfFADTyzSE6jACcztpaBP41ECOGP+He1BQBYQDGV3y/l0IwnA7A7un6lSo6l6f9LwPelHFrV24FFwJUqgxQwsoxtDbAjvX5T7QghbB0qsdpOcjwAOEheIVHnW3/sVduiGKXamceGIGKEyUk1bmcGdQ9qt2pTxKQB29Qjkc859R2jzTXjf6/6XYZ3V45vtw4+vp4AvkivL1E8KfYAnwCXgduAxSRpdQHYSJICrcBKchBC6FXnk3zAGAOMA9YBq9RtwO8k38wmAQ+TnD5HRxRfAS/n8RdUxU9me8ZWwHGLzd1s9UI6fjDyHV3uyUR+M9RvhvmkP6ig4W8d3AGMzfEfQfEutVAskRNKu+cjhPBbCOFpYBnQAfTnuPYBnwNPAK9XoL0GSWpcFyvz+1OSFuIcSdpB8ul0E0lq/VNp8XkIIbQD7Sbd9VxgKskN6yb5NL'+
			's3hHB0iHRjgEFptrvCpFwMNc3qDZPPUJZKs3PNWECdMVDhsmk2S327StJym2ZDoD5DUvkGBpqyzzRAyGT1YBRzc6N6s37SClNvmGy+zwM/Anenw6eBd7NpdhzYUmWcVool9A7gLbXWfi/LPxFYCEzP2FaEEE6V3TSHg0w1axY61bmx2hhT+H+gC9gKrAshDOx1rcBRYAPJEeBQDQGuAh+S9GuNQB/J1tEB7AkhXM46/As9oPRk7m7vhgAAAABJRU5ErkJggg==';
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
		hs+='height : 46.6667%;';
		hs+='left : calc(50% - ((56% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.6667% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 56%;';
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
		me.__77.appendChild(me._image_0);
		el=me._text_0=document.createElement('div');
		els=me._text_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text \uce58\uc218";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,0.588235);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -27px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
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
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce58\uc218\uc120", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_0.ggUpdateText();
		el.appendChild(els);
		me._text_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_77'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_0.style.transition='';
				if (me._text_0.ggCurrentLogicStateVisible == 0) {
					me._text_0.style.visibility=(Number(me._text_0.style.opacity)>0||!me._text_0.style.opacity)?'inherit':'hidden';
					me._text_0.ggVisible=true;
				}
				else {
					me._text_0.style.visibility="hidden";
					me._text_0.ggVisible=false;
				}
			}
		}
		me._text_0.logicBlock_visible();
		me._text_0.ggUpdatePosition=function (useTransition) {
		}
		me.__77.appendChild(me._text_0);
		me.__76.appendChild(me.__77);
		me.__73.appendChild(me.__76);
		el=me.__74=document.createElement('div');
		el.ggId="\uc81c\ud488\uc815\ubcf4";
		el.ggDx=70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 70px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
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
		el=me.__75=document.createElement('div');
		el.ggId="\uc81c\ud488\uc815\ubcf4\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f29900;';
		hs+='border : 3px solid rgba(0,0,0,0);';
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
		me.__75.logicBlock_bordercolor = function() {
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
			if (me.__75.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__75.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__75.style.transition='border-color 0s';
				if (me.__75.ggCurrentLogicStateBorderColor == 0) {
					me.__75.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me.__75.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__75.logicBlock_bordercolor();
		me.__75.onclick=function (e) {
			player.openNext("{node15}","");
		}
		me.__75.onmouseover=function (e) {
			me.elementMouseOver['_75']=true;
			me._text_.logicBlock_visible();
		}
		me.__75.onmouseout=function (e) {
			me.elementMouseOver['_75']=false;
			me._text_.logicBlock_visible();
		}
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_=document.createElement('div');
		els=me._image___img=document.createElement('img');
		els.className='ggskin ggskin_image_';
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
			return player.getCurrentNode();
		}
		me._image_.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me._image_);
		el=me._text_=document.createElement('div');
		els=me._text___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text \uc81c\ud488\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,0.588235);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -27px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
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
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_.ggUpdateText();
		el.appendChild(els);
		me._text_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_75'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_.style.transition='';
				if (me._text_.ggCurrentLogicStateVisible == 0) {
					me._text_.style.visibility=(Number(me._text_.style.opacity)>0||!me._text_.style.opacity)?'inherit':'hidden';
					me._text_.ggVisible=true;
				}
				else {
					me._text_.style.visibility="hidden";
					me._text_.ggVisible=false;
				}
			}
		}
		me._text_.logicBlock_visible();
		me._text_.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me._text_);
		me.__74.appendChild(me.__75);
		me.__73.appendChild(me.__74);
		me._footer.appendChild(me.__73);
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
		el=me.__64=document.createElement('div');
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
		el=me.__69=document.createElement('div');
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
		el=me.__70=document.createElement('div');
		els=me.__70__text=document.createElement('div');
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
		me.__70.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__70.ggUpdateText();
		el.appendChild(els);
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
		me.__69.appendChild(me.__70);
		me._rectangle_111.appendChild(me.__69);
		el=me.__65=document.createElement('div');
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
		el=me._small_11=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28%;';
		hs+='left : 120%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
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
		el=me.__119=document.createElement('div');
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
		me.__119.logicBlock_bordercolor = function() {
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
			if (me.__119.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__119.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__119.style.transition='border-color 500ms ease 0ms';
				if (me.__119.ggCurrentLogicStateBorderColor == 0) {
					me.__119.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__119.ggCurrentLogicStateBorderColor == 1) {
					me.__119.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__119.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__119.logicBlock_bordercolor();
		me.__119.ggUpdatePosition=function (useTransition) {
		}
		me._small_11.appendChild(me.__119);
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
		me.__65.appendChild(me._small_11);
		el=me._small_21=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28%;';
		hs+='left : 120%;';
		hs+='position : absolute;';
		hs+='top : 32%;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
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
		el=me.__217=document.createElement('div');
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
		me.__217.logicBlock_bordercolor = function() {
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
			if (me.__217.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__217.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__217.style.transition='border-color 500ms ease 0ms';
				if (me.__217.ggCurrentLogicStateBorderColor == 0) {
					me.__217.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__217.ggCurrentLogicStateBorderColor == 1) {
					me.__217.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__217.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__217.logicBlock_bordercolor();
		me.__217.ggUpdatePosition=function (useTransition) {
		}
		me._small_21.appendChild(me.__217);
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
		me.__65.appendChild(me._small_21);
		el=me._small_31=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28%;';
		hs+='left : 120%;';
		hs+='position : absolute;';
		hs+='top : 64%;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
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
		el=me.__316=document.createElement('div');
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
		me.__316.logicBlock_bordercolor = function() {
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
			if (me.__316.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__316.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__316.style.transition='border-color 500ms ease 0ms';
				if (me.__316.ggCurrentLogicStateBorderColor == 0) {
					me.__316.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__316.ggCurrentLogicStateBorderColor == 1) {
					me.__316.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__316.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__316.logicBlock_bordercolor();
		me.__316.ggUpdatePosition=function (useTransition) {
		}
		me._small_31.appendChild(me.__316);
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
		me.__65.appendChild(me._small_31);
		el=me._small_41=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28%;';
		hs+='left : 120%;';
		hs+='position : absolute;';
		hs+='top : 96%;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
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
		el=me.__416=document.createElement('div');
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
		me.__416.logicBlock_bordercolor = function() {
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
			if (me.__416.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__416.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__416.style.transition='border-color 500ms ease 0ms';
				if (me.__416.ggCurrentLogicStateBorderColor == 0) {
					me.__416.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__416.ggCurrentLogicStateBorderColor == 1) {
					me.__416.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__416.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__416.logicBlock_bordercolor();
		me.__416.ggUpdatePosition=function (useTransition) {
		}
		me._small_41.appendChild(me.__416);
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
		me.__65.appendChild(me._small_41);
		el=me._contextbox1=document.createElement('div');
		el.ggId="context-box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 264px;';
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
		el=me.__68=document.createElement('div');
		els=me.__68__text=document.createElement('div');
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
		me.__68.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub4dc\ub7fc \uc138\ud0c1\uae30\n9kg", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__68.ggUpdateText();
		el.appendChild(els);
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
		el=me._rectangle_211=document.createElement('div');
		el.ggId="Rectangle 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
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
		me.__68.appendChild(me._rectangle_211);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
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
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ube4c\ud2b8\uc778", params);
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
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me.__68.appendChild(me._text_3);
		me._contextbox1.appendChild(me.__68);
		el=me._container_211=document.createElement('div');
		el.ggId="Container 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 155px;';
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
		hs+='height : 155px;';
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
		el=me.__67=document.createElement('div');
		els=me.__67__text=document.createElement('div');
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
		hs+='height : 155px;';
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
		me.__67.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \uc8fc\uc694\uae30\ub2a5\n\uc138\ud0c1\ucf54\uc2a4 \n: \ud45c\uc900, \uc18c\ub7c9\/\ucf8c\uc18d, \ucc0c\ub4e0\ub54c, \uccad\ubc14\uc9c0, \uc544\uc6c3\ub3c4\uc5b4, \uc12c\uc138, \uc6b8\/\ub780\uc81c\ub9ac, \uc544\uae30\uc637, \ud0c8\uc218, \ud5f9\uad7c+\ud0c8\uc218, \ud1b5\uc138\ucc99\n\n* \uae30\ubcf8\uc0ac\uc591\n\uc138\ud0c1\uc6a9\ub7c9 : 9kg\n\uc0c9\uc0c1 : \ud654\uc774\ud2b8\n\ud06c\uae30(\ud3edx\ub113\uc774x\uae4a\uc774) : 595x855x565 mm\n\ubb34\uac8c : 71kg\n\uc5d0\ub108\uc9c0 \uc18c\ube44\ud6a8\uc728 : 4\ub4f1\uae09\n\uc804\uc6d0 : 220V\/60Hz\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__67.ggUpdateText();
		el.appendChild(els);
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
		me._container_11111.appendChild(me.__67);
		me._container_211.appendChild(me._container_11111);
		me._contextbox1.appendChild(me._container_211);
		me.__65.appendChild(me._contextbox1);
		el=me.__66=document.createElement('div');
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
		me.__66.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		el=me.__118=document.createElement('div');
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
		me.__118.logicBlock_backgroundcolor = function() {
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
			if (me.__118.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__118.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__118.style.transition='background-color 0s';
				if (me.__118.ggCurrentLogicStateBackgroundColor == 0) {
					me.__118.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__118.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__118.logicBlock_backgroundcolor();
		me.__118.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__118.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__118);
		el=me.__216=document.createElement('div');
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
		me.__216.logicBlock_backgroundcolor = function() {
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
			if (me.__216.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__216.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__216.style.transition='background-color 0s';
				if (me.__216.ggCurrentLogicStateBackgroundColor == 0) {
					me.__216.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__216.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__216.logicBlock_backgroundcolor();
		me.__216.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__216.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__216);
		el=me.__315=document.createElement('div');
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
		me.__315.logicBlock_backgroundcolor = function() {
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
			if (me.__315.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__315.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__315.style.transition='background-color 0s';
				if (me.__315.ggCurrentLogicStateBackgroundColor == 0) {
					me.__315.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__315.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__315.logicBlock_backgroundcolor();
		me.__315.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__315.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__315);
		el=me.__415=document.createElement('div');
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
		me.__415.logicBlock_backgroundcolor = function() {
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
			if (me.__415.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__415.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__415.style.transition='background-color 0s';
				if (me.__415.ggCurrentLogicStateBackgroundColor == 0) {
					me.__415.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__415.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__415.logicBlock_backgroundcolor();
		me.__415.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__415.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__415);
		me.__65.appendChild(me.__66);
		el=me.__117=document.createElement('div');
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
		me.__117.logicBlock_alpha = function() {
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
			if (me.__117.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__117.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__117.style.transition='opacity 0s';
				if (me.__117.ggCurrentLogicStateAlpha == 0) {
					me.__117.style.visibility=me.__117.ggVisible?'inherit':'hidden';
					me.__117.style.opacity=1;
				}
				else {
					me.__117.style.visibility=me.__117.ggVisible?'inherit':'hidden';
					me.__117.style.opacity=0.01;
				}
			}
		}
		me.__117.logicBlock_alpha();
		me.__117.ggUpdatePosition=function (useTransition) {
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
		me.__117.appendChild(me._image_11110);
		me.__65.appendChild(me.__117);
		el=me.__215=document.createElement('div');
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
		me.__215.logicBlock_alpha = function() {
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
			if (me.__215.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__215.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__215.style.transition='opacity 0s';
				if (me.__215.ggCurrentLogicStateAlpha == 0) {
					me.__215.style.visibility=me.__215.ggVisible?'inherit':'hidden';
					me.__215.style.opacity=1;
				}
				else {
					me.__215.style.visibility=me.__215.ggVisible?'inherit':'hidden';
					me.__215.style.opacity=0.01;
				}
			}
		}
		me.__215.logicBlock_alpha();
		me.__215.ggUpdatePosition=function (useTransition) {
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
		me.__215.appendChild(me._image_211);
		me.__65.appendChild(me.__215);
		el=me.__314=document.createElement('div');
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
		me.__314.logicBlock_alpha = function() {
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
			if (me.__314.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__314.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__314.style.transition='opacity 0s';
				if (me.__314.ggCurrentLogicStateAlpha == 0) {
					me.__314.style.visibility=me.__314.ggVisible?'inherit':'hidden';
					me.__314.style.opacity=1;
				}
				else {
					me.__314.style.visibility=me.__314.ggVisible?'inherit':'hidden';
					me.__314.style.opacity=0.01;
				}
			}
		}
		me.__314.logicBlock_alpha();
		me.__314.ggUpdatePosition=function (useTransition) {
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
		me.__314.appendChild(me._image_311);
		me.__65.appendChild(me.__314);
		el=me.__414=document.createElement('div');
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
		me.__414.logicBlock_alpha = function() {
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
			if (me.__414.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__414.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__414.style.transition='opacity 0s';
				if (me.__414.ggCurrentLogicStateAlpha == 0) {
					me.__414.style.visibility=me.__414.ggVisible?'inherit':'hidden';
					me.__414.style.opacity=1;
				}
				else {
					me.__414.style.visibility=me.__414.ggVisible?'inherit':'hidden';
					me.__414.style.opacity=0.01;
				}
			}
		}
		me.__414.logicBlock_alpha();
		me.__414.ggUpdatePosition=function (useTransition) {
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
		me.__414.appendChild(me._image_411);
		me.__65.appendChild(me.__414);
		me._rectangle_111.appendChild(me.__65);
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
		me.__64.appendChild(me._rectangle_111);
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
			me._infopopup1.style.transition='none';
			me._infopopup1.style.visibility='hidden';
			me._infopopup1.ggVisible=false;
		}
		me._image_51.ggUpdatePosition=function (useTransition) {
		}
		me.__64.appendChild(me._image_51);
		me._infopopup1.appendChild(me.__64);
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
		el=me._m1=document.createElement('div');
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
		el=me.__61=document.createElement('div');
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
		el=me.__62=document.createElement('div');
		els=me.__62__text=document.createElement('div');
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
		me.__62.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub4dc\ub7fc \uc138\ud0c1\uae30 9kg", params);
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
		el=me.__63=document.createElement('div');
		els=me.__63__text=document.createElement('div');
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
		me.__63.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\uc8fc \uc138\ud0c1\ud574\uc57c\ud558\ub294 \uc637\uc774\ub098 \uae09\ud558\uac8c \uc785\uc5b4\uc57c\ud558\ub294 \uc154\uce20 \ub4f1\uc744 \uae68\ub057\ud558\uac8c", params);
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
		me.__63.appendChild(me._text_1111);
		me.__62.appendChild(me.__63);
		me.__61.appendChild(me.__62);
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
		me.__61.appendChild(me._text_3m);
		me._container_31.appendChild(me.__61);
		el=me.__57=document.createElement('div');
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
		el=me.__60=document.createElement('div');
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
		me.__60.appendChild(me._image_6661);
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
		me.__60.appendChild(me._image_1112);
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
		me.__60.appendChild(me._image_121);
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
		me.__60.appendChild(me._image_1311);
		me.__57.appendChild(me.__60);
		el=me.__59=document.createElement('div');
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
		me.__59.appendChild(me._text_211);
		me.__57.appendChild(me.__59);
		el=me.__58=document.createElement('div');
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
		el=me.__116=document.createElement('div');
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
		me.__116.appendChild(me._image_7111);
		me.__58.appendChild(me.__116);
		el=me.__214=document.createElement('div');
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
		me.__214.logicBlock_bordercolor = function() {
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
			if (me.__214.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__214.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__214.style.transition='border-color 0s';
				if (me.__214.ggCurrentLogicStateBorderColor == 0) {
					me.__214.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__214.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__214.logicBlock_bordercolor();
		me.__214.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__214.ggUpdatePosition=function (useTransition) {
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
		me.__214.appendChild(me._image_8111);
		me.__58.appendChild(me.__214);
		el=me.__313=document.createElement('div');
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
		me.__313.logicBlock_bordercolor = function() {
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
			if (me.__313.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__313.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__313.style.transition='border-color 0s';
				if (me.__313.ggCurrentLogicStateBorderColor == 0) {
					me.__313.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__313.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__313.logicBlock_bordercolor();
		me.__313.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__313.ggUpdatePosition=function (useTransition) {
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
		me.__313.appendChild(me._image_911);
		me.__58.appendChild(me.__313);
		el=me.__413=document.createElement('div');
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
		me.__413.logicBlock_bordercolor = function() {
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
			if (me.__413.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__413.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__413.style.transition='border-color 0s';
				if (me.__413.ggCurrentLogicStateBorderColor == 0) {
					me.__413.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__413.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__413.logicBlock_bordercolor();
		me.__413.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__413.ggUpdatePosition=function (useTransition) {
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
		me.__413.appendChild(me._image_10111);
		me.__58.appendChild(me.__413);
		me.__57.appendChild(me.__58);
		me._container_31.appendChild(me.__57);
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
		}
		me._image_1411.ggUpdatePosition=function (useTransition) {
		}
		me._infopopupminnerbg.appendChild(me._image_1411);
		me._m1.appendChild(me._infopopupminnerbg);
		me._infopopupmbg.appendChild(me._m1);
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
		el=me.__48=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__48.ggUpdatePosition=function (useTransition) {
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
		el=me.__53=document.createElement('div');
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
		el=me.__54=document.createElement('div');
		els=me.__54__text=document.createElement('div');
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
		me.__54.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__54.ggUpdateText();
		el.appendChild(els);
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
		me.__53.appendChild(me.__54);
		me._rectangle_110.appendChild(me.__53);
		el=me.__49=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me._small_10=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39.9%;';
		hs+='left : 110%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 24%;';
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
		el=me.__115=document.createElement('div');
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
		me.__115.logicBlock_bordercolor = function() {
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
			if (me.__115.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__115.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__115.style.transition='border-color 500ms ease 0ms';
				if (me.__115.ggCurrentLogicStateBorderColor == 0) {
					me.__115.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__115.ggCurrentLogicStateBorderColor == 1) {
					me.__115.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__115.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__115.logicBlock_bordercolor();
		me.__115.ggUpdatePosition=function (useTransition) {
		}
		me._small_10.appendChild(me.__115);
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
		me.__49.appendChild(me._small_10);
		el=me._small_20=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39.9%;';
		hs+='left : 110%;';
		hs+='position : absolute;';
		hs+='top : 43%;';
		hs+='visibility : inherit;';
		hs+='width : 24%;';
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
		el=me.__213=document.createElement('div');
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
		me.__213.logicBlock_bordercolor = function() {
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
			if (me.__213.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__213.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__213.style.transition='border-color 500ms ease 0ms';
				if (me.__213.ggCurrentLogicStateBorderColor == 0) {
					me.__213.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__213.ggCurrentLogicStateBorderColor == 1) {
					me.__213.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__213.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__213.logicBlock_bordercolor();
		me.__213.ggUpdatePosition=function (useTransition) {
		}
		me._small_20.appendChild(me.__213);
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
		me.__49.appendChild(me._small_20);
		el=me._small_30=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39.9%;';
		hs+='left : 110%;';
		hs+='position : absolute;';
		hs+='top : 86%;';
		hs+='visibility : inherit;';
		hs+='width : 24%;';
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
		el=me.__312=document.createElement('div');
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
		me.__312.logicBlock_bordercolor = function() {
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
			if (me.__312.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__312.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__312.style.transition='border-color 500ms ease 0ms';
				if (me.__312.ggCurrentLogicStateBorderColor == 0) {
					me.__312.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__312.ggCurrentLogicStateBorderColor == 1) {
					me.__312.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__312.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__312.logicBlock_bordercolor();
		me.__312.ggUpdatePosition=function (useTransition) {
		}
		me._small_30.appendChild(me.__312);
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
		me.__49.appendChild(me._small_30);
		el=me._small_40=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39.9038%;';
		hs+='left : 110%;';
		hs+='position : absolute;';
		hs+='top : 130%;';
		hs+='visibility : inherit;';
		hs+='width : 24%;';
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
		el=me.__412=document.createElement('div');
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
		me.__412.logicBlock_bordercolor = function() {
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
			if (me.__412.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__412.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__412.style.transition='border-color 500ms ease 0ms';
				if (me.__412.ggCurrentLogicStateBorderColor == 0) {
					me.__412.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__412.ggCurrentLogicStateBorderColor == 1) {
					me.__412.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__412.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__412.logicBlock_bordercolor();
		me.__412.ggUpdatePosition=function (useTransition) {
		}
		me._small_40.appendChild(me.__412);
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
		me.__49.appendChild(me._small_40);
		el=me._contextbox0=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-context-box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 264px;';
		hs+='left : 550px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
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
		el=me.__52=document.createElement('div');
		els=me.__52__text=document.createElement('div');
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
		me.__52.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uc815\uc6a9 \ubb34\ud48d \uc2dc\uc2a4\ud15c 2\uc2e4\n(Wi-Fi \uc678\uc7a5\ud615)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__52.ggUpdateText();
		el.appendChild(els);
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
		el=me._rectangle_210=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-Rectangle 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
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
		me.__52.appendChild(me._rectangle_210);
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
		me.__52.appendChild(me._text_33333);
		me._contextbox0.appendChild(me.__52);
		el=me._container_210=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-Container 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 155px;';
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
		hs+='height : 155px;';
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
		el=me.__51=document.createElement('div');
		els=me.__51__text=document.createElement('div');
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
		hs+='height : 155px;';
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
		me.__51.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud558\ub098\uc758 \uc2e4\uc678\uae30\uc5d0 \ucd5c\ub300 6\uac1c\uae4c\uc9c0 \uc2e4\ub0b4\uae30\ub97c \uc5f0\uacb0\ud560 \uc218 \uc788\uc5b4 \uac01 \uc2e4\ubcc4\ub85c \uc5d0\uc5b4\ucee8 \uc124\uce58\uac00 \uac00\ub2a5\ud55c \uacf5\uac04\ud6a8\uc728\uc131\uc744 \ub192\uc778 \uc81c\ud488\n\n* \uae30\ubcf8 \uc815\ubcf4\n\ubaa8\ub378\uba85 : PC1NWCK3N\n\uc81c\ud488 \uc911\ub7c9 : 5.6kg\n\uc81c\ud488 \uce58\uc218(\uac00\ub85cx\ub192\uc774x\uae4a\uc774) : 1,198x35x500mm\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__51.ggUpdateText();
		el.appendChild(els);
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
		me._container_11110.appendChild(me.__51);
		me._container_210.appendChild(me._container_11110);
		me._contextbox0.appendChild(me._container_210);
		me.__49.appendChild(me._contextbox0);
		el=me.__50=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__114=document.createElement('div');
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
		me.__114.logicBlock_backgroundcolor = function() {
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
			if (me.__114.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__114.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__114.style.transition='background-color 0s';
				if (me.__114.ggCurrentLogicStateBackgroundColor == 0) {
					me.__114.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__114.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__114.logicBlock_backgroundcolor();
		me.__114.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__114.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__114);
		el=me.__212=document.createElement('div');
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
		me.__212.logicBlock_backgroundcolor = function() {
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
			if (me.__212.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__212.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__212.style.transition='background-color 0s';
				if (me.__212.ggCurrentLogicStateBackgroundColor == 0) {
					me.__212.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__212.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__212.logicBlock_backgroundcolor();
		me.__212.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__212.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__212);
		el=me.__311=document.createElement('div');
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
		me.__311.logicBlock_backgroundcolor = function() {
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
			if (me.__311.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__311.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__311.style.transition='background-color 0s';
				if (me.__311.ggCurrentLogicStateBackgroundColor == 0) {
					me.__311.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__311.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__311.logicBlock_backgroundcolor();
		me.__311.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__311.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__311);
		el=me.__411=document.createElement('div');
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
		me.__411.logicBlock_backgroundcolor = function() {
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
			if (me.__411.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__411.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__411.style.transition='background-color 0s';
				if (me.__411.ggCurrentLogicStateBackgroundColor == 0) {
					me.__411.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__411.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__411.logicBlock_backgroundcolor();
		me.__411.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__411.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__411);
		me.__49.appendChild(me.__50);
		el=me.__113=document.createElement('div');
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
		me.__113.logicBlock_alpha = function() {
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
			if (me.__113.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__113.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__113.style.transition='opacity 0s';
				if (me.__113.ggCurrentLogicStateAlpha == 0) {
					me.__113.style.visibility=me.__113.ggVisible?'inherit':'hidden';
					me.__113.style.opacity=1;
				}
				else {
					me.__113.style.visibility=me.__113.ggVisible?'inherit':'hidden';
					me.__113.style.opacity=0.01;
				}
			}
		}
		me.__113.logicBlock_alpha();
		me.__113.ggUpdatePosition=function (useTransition) {
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
		me.__113.appendChild(me._image_1111);
		me.__49.appendChild(me.__113);
		el=me.__211=document.createElement('div');
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
		me.__211.logicBlock_alpha = function() {
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
			if (me.__211.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__211.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__211.style.transition='opacity 0s';
				if (me.__211.ggCurrentLogicStateAlpha == 0) {
					me.__211.style.visibility=me.__211.ggVisible?'inherit':'hidden';
					me.__211.style.opacity=1;
				}
				else {
					me.__211.style.visibility=me.__211.ggVisible?'inherit':'hidden';
					me.__211.style.opacity=0.01;
				}
			}
		}
		me.__211.logicBlock_alpha();
		me.__211.ggUpdatePosition=function (useTransition) {
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
		me.__211.appendChild(me._image_210);
		me.__49.appendChild(me.__211);
		el=me.__310=document.createElement('div');
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
		me.__310.logicBlock_alpha = function() {
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
			if (me.__310.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__310.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__310.style.transition='opacity 0s';
				if (me.__310.ggCurrentLogicStateAlpha == 0) {
					me.__310.style.visibility=me.__310.ggVisible?'inherit':'hidden';
					me.__310.style.opacity=1;
				}
				else {
					me.__310.style.visibility=me.__310.ggVisible?'inherit':'hidden';
					me.__310.style.opacity=0.01;
				}
			}
		}
		me.__310.logicBlock_alpha();
		me.__310.ggUpdatePosition=function (useTransition) {
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
		me.__310.appendChild(me._image_310);
		me.__49.appendChild(me.__310);
		el=me.__410=document.createElement('div');
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
		me.__410.logicBlock_alpha = function() {
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
			if (me.__410.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__410.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__410.style.transition='opacity 0s';
				if (me.__410.ggCurrentLogicStateAlpha == 0) {
					me.__410.style.visibility=me.__410.ggVisible?'inherit':'hidden';
					me.__410.style.opacity=1;
				}
				else {
					me.__410.style.visibility=me.__410.ggVisible?'inherit':'hidden';
					me.__410.style.opacity=0.01;
				}
			}
		}
		me.__410.logicBlock_alpha();
		me.__410.ggUpdatePosition=function (useTransition) {
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
		me.__410.appendChild(me._image_410);
		me.__49.appendChild(me.__410);
		me._rectangle_110.appendChild(me.__49);
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
		me.__48.appendChild(me._rectangle_110);
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
			me._infopopup0.style.transition='none';
			me._infopopup0.style.visibility='hidden';
			me._infopopup0.ggVisible=false;
		}
		me._image_50.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me._image_50);
		me._infopopup0.appendChild(me.__48);
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
		el=me._m0=document.createElement('div');
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
		me._m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m0.ggUpdatePosition=function (useTransition) {
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
		me._container_30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uc18c\uac1c";
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
			return player.getCurrentNode();
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me.__46=document.createElement('div');
		els=me.__46__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uba85";
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
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__46.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uc815\uc6a9 \ubb34\ud48d \uc2dc\uc2a4\ud15c 2\uc2e4(Wi-Fi \uc678\uc7a5\ud615)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__46.ggUpdateText();
		el.appendChild(els);
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me.__47=document.createElement('div');
		els=me.__47__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5d0\uc5b4\ucee8-\uc81c\ud488\uba85 \ubd80\uc81c";
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
		me.__47.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc9c1\ubc14\ub78c \uc5c6\uc774 \uc2dc\uc6d0\ud55c \ubb34\ud48d\ub0c9\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__47.ggUpdateText();
		el.appendChild(els);
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
			return player.getCurrentNode();
		}
		me.__47.ggUpdatePosition=function (useTransition) {
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
		me.__47.appendChild(me._text_1110);
		me.__46.appendChild(me.__47);
		me.__45.appendChild(me.__46);
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
		me.__45.appendChild(me._text_3mm);
		me._container_30.appendChild(me.__45);
		el=me.__35=document.createElement('div');
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
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me.__39=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__39.ggUpdatePosition=function (useTransition) {
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
		me.__39.appendChild(me._image_6660);
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
		me.__39.appendChild(me._image_1110);
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
		me.__39.appendChild(me._image_120);
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
		me.__39.appendChild(me._image_1310);
		me.__35.appendChild(me.__39);
		el=me.__38=document.createElement('div');
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
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
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
		me.__38.appendChild(me._text_210);
		me.__35.appendChild(me.__38);
		el=me.__36=document.createElement('div');
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
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me.__112=document.createElement('div');
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
		me.__112.appendChild(me._image_7110);
		me.__36.appendChild(me.__112);
		el=me.__210=document.createElement('div');
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
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.logicBlock_bordercolor = function() {
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
			if (me.__210.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__210.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__210.style.transition='border-color 0s';
				if (me.__210.ggCurrentLogicStateBorderColor == 0) {
					me.__210.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__210.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__210.logicBlock_bordercolor();
		me.__210.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__210.ggUpdatePosition=function (useTransition) {
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
		me.__210.appendChild(me._image_8110);
		me.__36.appendChild(me.__210);
		el=me.__37=document.createElement('div');
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
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.logicBlock_bordercolor = function() {
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
			if (me.__37.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__37.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__37.style.transition='border-color 0s';
				if (me.__37.ggCurrentLogicStateBorderColor == 0) {
					me.__37.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__37.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__37.logicBlock_bordercolor();
		me.__37.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__37.ggUpdatePosition=function (useTransition) {
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
		me.__37.appendChild(me._mage_9110);
		me.__36.appendChild(me.__37);
		el=me.__44=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__44.logicBlock_bordercolor = function() {
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
			if (me.__44.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__44.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__44.style.transition='border-color 0s';
				if (me.__44.ggCurrentLogicStateBorderColor == 0) {
					me.__44.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__44.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__44.logicBlock_bordercolor();
		me.__44.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__44.ggUpdatePosition=function (useTransition) {
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
		me.__44.appendChild(me._image_10110);
		me.__36.appendChild(me.__44);
		me.__35.appendChild(me.__36);
		me._container_30.appendChild(me.__35);
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
		}
		me._image_1410.ggUpdatePosition=function (useTransition) {
		}
		me._popupminnerbg0.appendChild(me._image_1410);
		me._m0.appendChild(me._popupminnerbg0);
		me._popupmbg0.appendChild(me._m0);
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
		el=me.__16=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
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
		el=me.__27=document.createElement('div');
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
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		els=me.__28__text=document.createElement('div');
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
		me.__28.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__28.ggUpdateText();
		el.appendChild(els);
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
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me.__28);
		me._rectangle_11.appendChild(me.__27);
		el=me.__17=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me._small_1=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28%;';
		hs+='left : 120%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
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
		el=me.__111=document.createElement('div');
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
		me.__111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__111.logicBlock_bordercolor = function() {
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
			if (me.__111.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__111.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__111.style.transition='border-color 500ms ease 0ms';
				if (me.__111.ggCurrentLogicStateBorderColor == 0) {
					me.__111.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__111.ggCurrentLogicStateBorderColor == 1) {
					me.__111.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__111.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__111.logicBlock_bordercolor();
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		me._small_1.appendChild(me.__111);
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
		me.__17.appendChild(me._small_1);
		el=me._small_2=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28%;';
		hs+='left : 120%;';
		hs+='position : absolute;';
		hs+='top : 32%;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
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
		el=me.__26=document.createElement('div');
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
		me.__26.logicBlock_bordercolor = function() {
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
			if (me.__26.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__26.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__26.style.transition='border-color 500ms ease 0ms';
				if (me.__26.ggCurrentLogicStateBorderColor == 0) {
					me.__26.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__26.ggCurrentLogicStateBorderColor == 1) {
					me.__26.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__26.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__26.logicBlock_bordercolor();
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me._small_2.appendChild(me.__26);
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
		me.__17.appendChild(me._small_2);
		el=me._small_3=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28%;';
		hs+='left : 120%;';
		hs+='position : absolute;';
		hs+='top : 64%;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
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
		el=me.__33=document.createElement('div');
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
		me.__33.logicBlock_bordercolor = function() {
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
			if (me.__33.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__33.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__33.style.transition='border-color 500ms ease 0ms';
				if (me.__33.ggCurrentLogicStateBorderColor == 0) {
					me.__33.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__33.ggCurrentLogicStateBorderColor == 1) {
					me.__33.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__33.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__33.logicBlock_bordercolor();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me._small_3.appendChild(me.__33);
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
		me.__17.appendChild(me._small_3);
		el=me._small_4=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28%;';
		hs+='left : 120%;';
		hs+='position : absolute;';
		hs+='top : 96%;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
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
		el=me.__43=document.createElement('div');
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
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.logicBlock_bordercolor = function() {
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
			if (me.__43.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__43.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__43.style.transition='border-color 500ms ease 0ms';
				if (me.__43.ggCurrentLogicStateBorderColor == 0) {
					me.__43.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__43.ggCurrentLogicStateBorderColor == 1) {
					me.__43.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__43.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__43.logicBlock_bordercolor();
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		me._small_4.appendChild(me.__43);
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
		me.__17.appendChild(me._small_4);
		el=me._contextbox=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-context-box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 264px;';
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
		el=me.__25=document.createElement('div');
		els=me.__25__text=document.createElement('div');
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
		me.__25.ggUpdateText=function() {
			var params = [];
			var hs = player._("SK\ub9e4\uc9c1 2\uad6c \uc778\ub355\uc158\n265*492", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__25.ggUpdateText();
		el.appendChild(els);
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_21=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-Rectangle 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
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
		me.__25.appendChild(me._rectangle_21);
		el=me._text_333=document.createElement('div');
		els=me._text_333__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 333";
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
		me._text_333.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc120\ud0dd\ud615", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_333.ggUpdateText();
		el.appendChild(els);
		me._text_333.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_333.ggUpdatePosition=function (useTransition) {
		}
		me.__25.appendChild(me._text_333);
		me._contextbox.appendChild(me.__25);
		el=me._container_21=document.createElement('div');
		el.ggId="\uc778\ub355\uc158-Container 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 155px;';
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
		hs+='height : 155px;';
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
		el=me.__24=document.createElement('div');
		els=me.__24__text=document.createElement('div');
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
		hs+='height : 155px;';
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
		me.__24.ggUpdateText=function() {
			var params = [];
			var hs = player._("1~9\ub2e8\uacc4\uc758 \ucd9c\ub825 \uc870\uc808\uc774 \uac00\ub2a5\ud574 \ucd5c\uc0c1\uc758 \uc870\ub9ac \uacb0\uacfc\ubb3c\uc744 \uc5bb\uc744 \uc218 \uc788\uac8c \ub3c4\uc640\ub4dc\ub9bd\ub2c8\ub2e4. \n\n* \uae30\ubcf8 \uc0ac\uc591\n\ubaa8\ub378\uba85 : IHR B200E\n\ubc84\ub108 \uc0ac\uc591 : 2\uad6c(\uc778\ub355\uc158 2\uad6c)\n\uc0c1\ud310 : \uc138\ub77c\ubbf9 \uae00\ub77c\uc2a4\n\uc0c9\uc0c1 : \ube14\ub799\n\uc870\uc791\ubc29\ubc95 : \ud130\uce58\uc2dd\n\ubb34\uac8c : 5.1kg\n\uc81c\ud488 \ud06c\uae30(\uac00\ub85cx\uc138\ub85cx\ub192\uc774) : 285x512x744mm", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__24.ggUpdateText();
		el.appendChild(els);
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
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me._container_1111.appendChild(me.__24);
		me._container_21.appendChild(me._container_1111);
		me._contextbox.appendChild(me._container_21);
		me.__17.appendChild(me._contextbox);
		el=me.__19=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me.__110=document.createElement('div');
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
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__110.logicBlock_backgroundcolor = function() {
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
			if (me.__110.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__110.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__110.style.transition='background-color 0s';
				if (me.__110.ggCurrentLogicStateBackgroundColor == 0) {
					me.__110.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__110.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__110.logicBlock_backgroundcolor();
		me.__110.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me.__110);
		el=me.__23=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__23.logicBlock_backgroundcolor = function() {
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
			if (me.__23.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__23.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__23.style.transition='background-color 0s';
				if (me.__23.ggCurrentLogicStateBackgroundColor == 0) {
					me.__23.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__23.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__23.logicBlock_backgroundcolor();
		me.__23.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me.__23);
		el=me.__32=document.createElement('div');
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
		me.__32.logicBlock_backgroundcolor = function() {
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
			if (me.__32.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__32.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__32.style.transition='background-color 0s';
				if (me.__32.ggCurrentLogicStateBackgroundColor == 0) {
					me.__32.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__32.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__32.logicBlock_backgroundcolor();
		me.__32.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me.__32);
		el=me.__42=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__42.logicBlock_backgroundcolor = function() {
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
			if (me.__42.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__42.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__42.style.transition='background-color 0s';
				if (me.__42.ggCurrentLogicStateBackgroundColor == 0) {
					me.__42.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__42.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__42.logicBlock_backgroundcolor();
		me.__42.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me.__42);
		me.__17.appendChild(me.__19);
		el=me.__18=document.createElement('div');
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
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.logicBlock_alpha = function() {
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
			if (me.__18.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__18.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__18.style.transition='opacity 0s';
				if (me.__18.ggCurrentLogicStateAlpha == 0) {
					me.__18.style.visibility=me.__18.ggVisible?'inherit':'hidden';
					me.__18.style.opacity=1;
				}
				else {
					me.__18.style.visibility=me.__18.ggVisible?'inherit':'hidden';
					me.__18.style.opacity=0.01;
				}
			}
		}
		me.__18.logicBlock_alpha();
		me.__18.ggUpdatePosition=function (useTransition) {
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
		me.__18.appendChild(me._mage_1111);
		me.__17.appendChild(me.__18);
		el=me.__22=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__22.logicBlock_alpha = function() {
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
			if (me.__22.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__22.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__22.style.transition='opacity 0s';
				if (me.__22.ggCurrentLogicStateAlpha == 0) {
					me.__22.style.visibility=me.__22.ggVisible?'inherit':'hidden';
					me.__22.style.opacity=1;
				}
				else {
					me.__22.style.visibility=me.__22.ggVisible?'inherit':'hidden';
					me.__22.style.opacity=0.01;
				}
			}
		}
		me.__22.logicBlock_alpha();
		me.__22.ggUpdatePosition=function (useTransition) {
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
		me.__22.appendChild(me._image_21);
		me.__17.appendChild(me.__22);
		el=me.__31=document.createElement('div');
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
		me.__31.logicBlock_alpha = function() {
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
			if (me.__31.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__31.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__31.style.transition='opacity 0s';
				if (me.__31.ggCurrentLogicStateAlpha == 0) {
					me.__31.style.visibility=me.__31.ggVisible?'inherit':'hidden';
					me.__31.style.opacity=1;
				}
				else {
					me.__31.style.visibility=me.__31.ggVisible?'inherit':'hidden';
					me.__31.style.opacity=0.01;
				}
			}
		}
		me.__31.logicBlock_alpha();
		me.__31.ggUpdatePosition=function (useTransition) {
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
		me.__31.appendChild(me._image_31);
		me.__17.appendChild(me.__31);
		el=me.__41=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__41.logicBlock_alpha = function() {
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
			if (me.__41.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__41.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__41.style.transition='opacity 0s';
				if (me.__41.ggCurrentLogicStateAlpha == 0) {
					me.__41.style.visibility=me.__41.ggVisible?'inherit':'hidden';
					me.__41.style.opacity=1;
				}
				else {
					me.__41.style.visibility=me.__41.ggVisible?'inherit':'hidden';
					me.__41.style.opacity=0.01;
				}
			}
		}
		me.__41.logicBlock_alpha();
		me.__41.ggUpdatePosition=function (useTransition) {
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
		me.__41.appendChild(me._image_41);
		me.__17.appendChild(me.__41);
		me._rectangle_11.appendChild(me.__17);
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
		me.__16.appendChild(me._rectangle_11);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
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
		me._image_5.onclick=function (e) {
			me._infopopup.style.transition='none';
			me._infopopup.style.visibility='hidden';
			me._infopopup.ggVisible=false;
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me._image_5);
		me._infopopup.appendChild(me.__16);
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
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
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
		el=me._m=document.createElement('div');
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
		me._m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m.ggUpdatePosition=function (useTransition) {
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
		el=me.__13=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		els=me.__14__text=document.createElement('div');
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
		me.__14.ggUpdateText=function() {
			var params = [];
			var hs = player._("SK\ub9e4\uc9c1 2\uad6c \uc778\ub355\uc158 265*492", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__14.ggUpdateText();
		el.appendChild(els);
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
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		els=me.__15__text=document.createElement('div');
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
		me.__15.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\uc804\ud558\uac8c \uce5c\uc808\ud558\uac8c \uc27d\uac8c \uc870\ub9ac\uc2dc\uac04\uc774 \uc990\uac70\uc6b4 \ub9de\ucda4 \uc8fc\ubc29\uac00\uad6c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__15.ggUpdateText();
		el.appendChild(els);
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
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
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
		me.__15.appendChild(me._text_111);
		me.__14.appendChild(me.__15);
		me.__13.appendChild(me.__14);
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
		me.__13.appendChild(me._text_3333);
		me._container_3.appendChild(me.__13);
		el=me.__6=document.createElement('div');
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
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
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
		hs+='height : 108.51%;';
		hs+='left : calc(50% - ((82% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((108.51% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 82%;';
		hs+='pointer-events:auto;';
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
		me.__9.ggUpdatePosition=function (useTransition) {
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
		me.__9.appendChild(me._image_666);
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
		me.__9.appendChild(me._image_111);
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
		me.__9.appendChild(me._image_12);
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
		me.__9.appendChild(me._image_131);
		me.__6.appendChild(me.__9);
		el=me.__8=document.createElement('div');
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
		me.__8.ggUpdatePosition=function (useTransition) {
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
		me.__8.appendChild(me._text_21);
		me.__6.appendChild(me.__8);
		el=me.__7=document.createElement('div');
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
		el=me.__12=document.createElement('div');
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
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.logicBlock_bordercolor = function() {
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
			if (me.__12.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__12.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__12.style.transition='border-color 0s';
				if (me.__12.ggCurrentLogicStateBorderColor == 0) {
					me.__12.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__12.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__12.logicBlock_bordercolor();
		me.__12.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__12.ggUpdatePosition=function (useTransition) {
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
		me.__12.appendChild(me._image_711);
		me.__7.appendChild(me.__12);
		el=me.__21=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__21.logicBlock_bordercolor = function() {
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
			if (me.__21.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__21.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__21.style.transition='border-color 0s';
				if (me.__21.ggCurrentLogicStateBorderColor == 0) {
					me.__21.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__21.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__21.logicBlock_bordercolor();
		me.__21.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__21.ggUpdatePosition=function (useTransition) {
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
		me.__21.appendChild(me._image_811);
		me.__7.appendChild(me.__21);
		el=me.__30=document.createElement('div');
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
		me.__30.logicBlock_bordercolor = function() {
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
			if (me.__30.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__30.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__30.style.transition='border-color 0s';
				if (me.__30.ggCurrentLogicStateBorderColor == 0) {
					me.__30.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__30.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__30.logicBlock_bordercolor();
		me.__30.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__30.ggUpdatePosition=function (useTransition) {
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
		me.__30.appendChild(me._mage_911);
		me.__7.appendChild(me.__30);
		el=me.__40=document.createElement('div');
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
			return player.getCurrentNode();
		}
		me.__40.logicBlock_bordercolor = function() {
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
			if (me.__40.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__40.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__40.style.transition='border-color 0s';
				if (me.__40.ggCurrentLogicStateBorderColor == 0) {
					me.__40.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__40.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__40.logicBlock_bordercolor();
		me.__40.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__40.ggUpdatePosition=function (useTransition) {
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
		me.__40.appendChild(me._image_1011);
		me.__7.appendChild(me.__40);
		me.__6.appendChild(me.__7);
		me._container_3.appendChild(me.__6);
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
		}
		me._image_141.ggUpdatePosition=function (useTransition) {
		}
		me._popupminnerbg.appendChild(me._image_141);
		me._m.appendChild(me._popupminnerbg);
		me._popupmbg.appendChild(me._m);
		me._popupm.appendChild(me._popupmbg);
		me.divSkin.appendChild(me._popupm);
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
		me._image_10.logicBlock_scaling();
		me._text_1.logicBlock_scaling();
		me._text_1.logicBlock_text();
		me._centeronoff.logicBlock_position();
		me._centeronoff.logicBlock_scaling();
		me._centeronoff.logicBlock_visible();
		me._center_on.logicBlock_visible();
		me.__1_on.logicBlock_scaling();
		me._center_off.logicBlock_visible();
		me.__1_off.logicBlock_scaling();
		me._center0.logicBlock_position();
		me._center0.logicBlock_scaling();
		me._center0.logicBlock_visible();
		me.__1_0.logicBlock_scaling();
		me._center.logicBlock_position();
		me._center.logicBlock_scaling();
		me._center.logicBlock_visible();
		me.__1_.logicBlock_scaling();
		me.__73.logicBlock_position();
		me.__73.logicBlock_scaling();
		me.__79.logicBlock_bordercolor();
		me._text_2.logicBlock_visible();
		me.__77.logicBlock_bordercolor();
		me._text_0.logicBlock_visible();
		me.__75.logicBlock_bordercolor();
		me._text_.logicBlock_visible();
		me._infopopup1.logicBlock_visible();
		me.__119.logicBlock_bordercolor();
		me.__217.logicBlock_bordercolor();
		me.__316.logicBlock_bordercolor();
		me.__416.logicBlock_bordercolor();
		me.__118.logicBlock_backgroundcolor();
		player.setVariableValue('vis_button_1', true);
		me.__216.logicBlock_backgroundcolor();
		me.__315.logicBlock_backgroundcolor();
		me.__415.logicBlock_backgroundcolor();
		me.__117.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me.__215.logicBlock_alpha();
		me.__314.logicBlock_alpha();
		me.__414.logicBlock_alpha();
		me._infopopupm.logicBlock_visible();
		me._image_6661.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me._image_1112.logicBlock_alpha();
		me._image_121.logicBlock_alpha();
		me._image_1311.logicBlock_alpha();
		me.__116.logicBlock_bordercolor();
		player.setVariableValue('vis_button_1', true);
		me.__214.logicBlock_bordercolor();
		me.__313.logicBlock_bordercolor();
		me.__413.logicBlock_bordercolor();
		me._infopopup0.logicBlock_visible();
		me.__115.logicBlock_bordercolor();
		me.__213.logicBlock_bordercolor();
		me.__312.logicBlock_bordercolor();
		me.__412.logicBlock_bordercolor();
		me.__114.logicBlock_backgroundcolor();
		player.setVariableValue('vis_button_1', true);
		me.__212.logicBlock_backgroundcolor();
		me.__311.logicBlock_backgroundcolor();
		me.__411.logicBlock_backgroundcolor();
		me.__113.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me.__211.logicBlock_alpha();
		me.__310.logicBlock_alpha();
		me.__410.logicBlock_alpha();
		me._popupm0.logicBlock_visible();
		me._image_6660.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me._image_1110.logicBlock_alpha();
		me._image_120.logicBlock_alpha();
		me._image_1310.logicBlock_alpha();
		me.__112.logicBlock_bordercolor();
		player.setVariableValue('vis_button_1', true);
		me.__210.logicBlock_bordercolor();
		me.__37.logicBlock_bordercolor();
		me.__44.logicBlock_bordercolor();
		me._infopopup.logicBlock_visible();
		me.__111.logicBlock_bordercolor();
		me.__26.logicBlock_bordercolor();
		me.__33.logicBlock_bordercolor();
		me.__43.logicBlock_bordercolor();
		me.__110.logicBlock_backgroundcolor();
		player.setVariableValue('vis_button_1', true);
		me.__23.logicBlock_backgroundcolor();
		me.__32.logicBlock_backgroundcolor();
		me.__42.logicBlock_backgroundcolor();
		me.__18.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me.__22.logicBlock_alpha();
		me.__31.logicBlock_alpha();
		me.__41.logicBlock_alpha();
		me._popupm.logicBlock_visible();
		me._image_666.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me._image_111.logicBlock_alpha();
		me._image_12.logicBlock_alpha();
		me._image_131.logicBlock_alpha();
		me.__12.logicBlock_bordercolor();
		player.setVariableValue('vis_button_1', true);
		me.__21.logicBlock_bordercolor();
		me.__30.logicBlock_bordercolor();
		me.__40.logicBlock_bordercolor();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('세탁기')) {
				for(var i = 0; i < hotspotTemplates['세탁기'].length; i++) {
					hotspotTemplates['세탁기'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('인덕션')) {
				for(var i = 0; i < hotspotTemplates['인덕션'].length; i++) {
					hotspotTemplates['인덕션'][i].ggEvent_activehotspotchanged();
				}
			}
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
			me._centeronoff.logicBlock_visible();
			me._center_on.logicBlock_visible();
			me._center_off.logicBlock_visible();
			me._center0.logicBlock_visible();
			me._center.logicBlock_visible();
			me.__79.logicBlock_bordercolor();
			me.__77.logicBlock_bordercolor();
			me.__75.logicBlock_bordercolor();
			me.__119.logicBlock_bordercolor();
			me.__217.logicBlock_bordercolor();
			me.__316.logicBlock_bordercolor();
			me.__416.logicBlock_bordercolor();
			me.__118.logicBlock_backgroundcolor();
			me.__216.logicBlock_backgroundcolor();
			me.__315.logicBlock_backgroundcolor();
			me.__415.logicBlock_backgroundcolor();
			me.__117.logicBlock_alpha();
			me.__215.logicBlock_alpha();
			me.__314.logicBlock_alpha();
			me.__414.logicBlock_alpha();
			me._image_6661.logicBlock_alpha();
			me._image_1112.logicBlock_alpha();
			me._image_121.logicBlock_alpha();
			me._image_1311.logicBlock_alpha();
			me.__116.logicBlock_bordercolor();
			me.__214.logicBlock_bordercolor();
			me.__313.logicBlock_bordercolor();
			me.__413.logicBlock_bordercolor();
			me.__115.logicBlock_bordercolor();
			me.__213.logicBlock_bordercolor();
			me.__312.logicBlock_bordercolor();
			me.__412.logicBlock_bordercolor();
			me.__114.logicBlock_backgroundcolor();
			me.__212.logicBlock_backgroundcolor();
			me.__311.logicBlock_backgroundcolor();
			me.__411.logicBlock_backgroundcolor();
			me.__113.logicBlock_alpha();
			me.__211.logicBlock_alpha();
			me.__310.logicBlock_alpha();
			me.__410.logicBlock_alpha();
			me._image_6660.logicBlock_alpha();
			me._image_1110.logicBlock_alpha();
			me._image_120.logicBlock_alpha();
			me._image_1310.logicBlock_alpha();
			me.__112.logicBlock_bordercolor();
			me.__210.logicBlock_bordercolor();
			me.__37.logicBlock_bordercolor();
			me.__44.logicBlock_bordercolor();
			me.__111.logicBlock_bordercolor();
			me.__26.logicBlock_bordercolor();
			me.__33.logicBlock_bordercolor();
			me.__43.logicBlock_bordercolor();
			me.__110.logicBlock_backgroundcolor();
			me.__23.logicBlock_backgroundcolor();
			me.__32.logicBlock_backgroundcolor();
			me.__42.logicBlock_backgroundcolor();
			me.__18.logicBlock_alpha();
			me.__22.logicBlock_alpha();
			me.__31.logicBlock_alpha();
			me.__41.logicBlock_alpha();
			me._image_666.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__12.logicBlock_bordercolor();
			me.__21.logicBlock_bordercolor();
			me.__30.logicBlock_bordercolor();
			me.__40.logicBlock_bordercolor();
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
			player.setMediaVisibility("\uce58\uc218\uc120","0",0);
			me._infopopup1.logicBlock_visible();
			me.__119.logicBlock_bordercolor();
			me.__217.logicBlock_bordercolor();
			me.__316.logicBlock_bordercolor();
			me.__416.logicBlock_bordercolor();
			me.__118.logicBlock_backgroundcolor();
			me.__216.logicBlock_backgroundcolor();
			me.__315.logicBlock_backgroundcolor();
			me.__415.logicBlock_backgroundcolor();
			me.__117.logicBlock_alpha();
			me.__215.logicBlock_alpha();
			me.__314.logicBlock_alpha();
			me.__414.logicBlock_alpha();
			me._image_6661.logicBlock_alpha();
			me._image_1112.logicBlock_alpha();
			me._image_121.logicBlock_alpha();
			me._image_1311.logicBlock_alpha();
			me.__116.logicBlock_bordercolor();
			me.__214.logicBlock_bordercolor();
			me.__313.logicBlock_bordercolor();
			me.__413.logicBlock_bordercolor();
			me._infopopup0.logicBlock_visible();
			me.__115.logicBlock_bordercolor();
			me.__213.logicBlock_bordercolor();
			me.__312.logicBlock_bordercolor();
			me.__412.logicBlock_bordercolor();
			me.__114.logicBlock_backgroundcolor();
			me.__212.logicBlock_backgroundcolor();
			me.__311.logicBlock_backgroundcolor();
			me.__411.logicBlock_backgroundcolor();
			me.__113.logicBlock_alpha();
			me.__211.logicBlock_alpha();
			me.__310.logicBlock_alpha();
			me.__410.logicBlock_alpha();
			me._image_6660.logicBlock_alpha();
			me._image_1110.logicBlock_alpha();
			me._image_120.logicBlock_alpha();
			me._image_1310.logicBlock_alpha();
			me.__112.logicBlock_bordercolor();
			me.__210.logicBlock_bordercolor();
			me.__37.logicBlock_bordercolor();
			me.__44.logicBlock_bordercolor();
			me._infopopup.logicBlock_visible();
			me.__111.logicBlock_bordercolor();
			me.__26.logicBlock_bordercolor();
			me.__33.logicBlock_bordercolor();
			me.__43.logicBlock_bordercolor();
			me.__110.logicBlock_backgroundcolor();
			me.__23.logicBlock_backgroundcolor();
			me.__32.logicBlock_backgroundcolor();
			me.__42.logicBlock_backgroundcolor();
			me.__18.logicBlock_alpha();
			me.__22.logicBlock_alpha();
			me.__31.logicBlock_alpha();
			me.__41.logicBlock_alpha();
			me._image_666.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__12.logicBlock_bordercolor();
			me.__21.logicBlock_bordercolor();
			me.__30.logicBlock_bordercolor();
			me.__40.logicBlock_bordercolor();
			player.setMediaVisibility("\ub0c9\uc7a5\uace0\uce58\uc218","0",0);
			player.setMediaVisibility("\ucc3d\ubb381","0",0);
			player.setMediaVisibility("\ucc3d\ubb382","0",0);
			player.setMediaVisibility("\uc2dd\ud0c11","0",0);
			player.setMediaVisibility("\uac70\uc2e4\uac00\ub85c","0",0);
			player.setMediaVisibility("\uac70\uc2e4\uc138\ub85c","0",0);
			player.setMediaVisibility("\ud070\ucc3d","0",0);
			player.setMediaVisibility("\uac00\uc2a4\ub808\uc778\uc9c0","0",0);
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
			if (hotspotTemplates.hasOwnProperty('냉장고치수')) {
				for(var i = 0; i < hotspotTemplates['냉장고치수'].length; i++) {
					hotspotTemplates['냉장고치수'][i].ggEvent_hsproxyclick();
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
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_hsproxyclick();
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
			if (hotspotTemplates.hasOwnProperty('냉장고치수')) {
				for(var i = 0; i < hotspotTemplates['냉장고치수'].length; i++) {
					hotspotTemplates['냉장고치수'][i].ggEvent_hsproxydblclick();
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
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_hsproxydblclick();
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
			if (hotspotTemplates.hasOwnProperty('냉장고치수')) {
				for(var i = 0; i < hotspotTemplates['냉장고치수'].length; i++) {
					hotspotTemplates['냉장고치수'][i].ggEvent_hsproxyout();
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
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_hsproxyout();
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
			if (hotspotTemplates.hasOwnProperty('냉장고치수')) {
				for(var i = 0; i < hotspotTemplates['냉장고치수'].length; i++) {
					hotspotTemplates['냉장고치수'][i].ggEvent_hsproxyover();
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
			if (hotspotTemplates.hasOwnProperty('가스레인지')) {
				for(var i = 0; i < hotspotTemplates['가스레인지'].length; i++) {
					hotspotTemplates['가스레인지'][i].ggEvent_hsproxyover();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me._image_10.logicBlock_scaling();
			me._text_1.logicBlock_scaling();
			me._text_1.logicBlock_text();
			me._centeronoff.logicBlock_position();
			me._centeronoff.logicBlock_scaling();
			me.__1_on.logicBlock_scaling();
			me.__1_off.logicBlock_scaling();
			me._center0.logicBlock_position();
			me._center0.logicBlock_scaling();
			me.__1_0.logicBlock_scaling();
			me._center.logicBlock_position();
			me._center.logicBlock_scaling();
			me.__1_.logicBlock_scaling();
			me.__73.logicBlock_position();
			me.__73.logicBlock_scaling();
			me._infopopupm.logicBlock_visible();
			me._popupm0.logicBlock_visible();
			me._popupm.logicBlock_visible();
		});
		player.addListener('varchanged_vis_button_1', function(event) {
			me.__119.logicBlock_bordercolor();
			me.__118.logicBlock_backgroundcolor();
			me.__117.logicBlock_alpha();
			me._image_6661.logicBlock_alpha();
			me.__116.logicBlock_bordercolor();
			me.__115.logicBlock_bordercolor();
			me.__114.logicBlock_backgroundcolor();
			me.__113.logicBlock_alpha();
			me._image_6660.logicBlock_alpha();
			me.__112.logicBlock_bordercolor();
			me.__111.logicBlock_bordercolor();
			me.__110.logicBlock_backgroundcolor();
			me.__18.logicBlock_alpha();
			me._image_666.logicBlock_alpha();
			me.__12.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_2', function(event) {
			me.__217.logicBlock_bordercolor();
			me.__216.logicBlock_backgroundcolor();
			me.__215.logicBlock_alpha();
			me._image_1112.logicBlock_alpha();
			me.__214.logicBlock_bordercolor();
			me.__213.logicBlock_bordercolor();
			me.__212.logicBlock_backgroundcolor();
			me.__211.logicBlock_alpha();
			me._image_1110.logicBlock_alpha();
			me.__210.logicBlock_bordercolor();
			me.__26.logicBlock_bordercolor();
			me.__23.logicBlock_backgroundcolor();
			me.__22.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me.__21.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_3', function(event) {
			me.__316.logicBlock_bordercolor();
			me.__315.logicBlock_backgroundcolor();
			me.__314.logicBlock_alpha();
			me._image_121.logicBlock_alpha();
			me.__313.logicBlock_bordercolor();
			me.__312.logicBlock_bordercolor();
			me.__311.logicBlock_backgroundcolor();
			me.__310.logicBlock_alpha();
			me._image_120.logicBlock_alpha();
			me.__37.logicBlock_bordercolor();
			me.__33.logicBlock_bordercolor();
			me.__32.logicBlock_backgroundcolor();
			me.__31.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me.__30.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_4', function(event) {
			me.__416.logicBlock_bordercolor();
			me.__415.logicBlock_backgroundcolor();
			me.__414.logicBlock_alpha();
			me._image_1311.logicBlock_alpha();
			me.__413.logicBlock_bordercolor();
			me.__412.logicBlock_bordercolor();
			me.__411.logicBlock_backgroundcolor();
			me.__410.logicBlock_alpha();
			me._image_1310.logicBlock_alpha();
			me.__44.logicBlock_bordercolor();
			me.__43.logicBlock_bordercolor();
			me.__42.logicBlock_backgroundcolor();
			me.__41.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__40.logicBlock_bordercolor();
		});
	};
	function SkinHotspotClass__(parentScope,hotspot) {
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
		el=me.__=document.createElement('div');
		el.ggId="\uac00\uc2a4\ub808\uc778\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
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
		me.__.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
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
		hs+='background : #00a6b6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
		me._external_2.onclick=function (e) {
			player.setMediaVisibility("\uac00\uc2a4\ub808\uc778\uc9c0","2",0);
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
		me.__.appendChild(me._external_2);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='가스레인지') {
					me.__.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='가스레인지') {
					me.__.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='가스레인지') {
					me.__.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='가스레인지') {
					me.__.onmouseover();
				}
			};
			me.__div = me.__;
	};
	function SkinHotspotClass__0(parentScope,hotspot) {
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
		el=me.__0=document.createElement('div');
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
		me.__0.ggIsActive=function() {
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
		me.__0.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_0']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_0']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.ggUpdatePosition=function (useTransition) {
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
		me._external_1.onclick=function (e) {
			player.setMediaVisibility("\uac70\uc2e4\uc138\ub85c","2",0);
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
		me.__0.appendChild(me._external_1);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='거실세로') {
					me.__0.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='거실세로') {
					me.__0.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='거실세로') {
					me.__0.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='거실세로') {
					me.__0.onmouseover();
				}
			};
			me.__div = me.__0;
	};
	function SkinHotspotClass__1(parentScope,hotspot) {
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
		el=me.__1=document.createElement('div');
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
		me.__1.ggIsActive=function() {
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
		me.__1.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.ggUpdatePosition=function (useTransition) {
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
		me._external_10.onclick=function (e) {
			player.setMediaVisibility("\uac70\uc2e4\uac00\ub85c","2",0);
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
		me.__1.appendChild(me._external_10);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_10.style.width=hotspot.customimagewidth + 'px';
			me._external_10.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_10.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_10.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='거실가로') {
					me.__1.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='거실가로') {
					me.__1.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='거실가로') {
					me.__1.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='거실가로') {
					me.__1.onmouseover();
				}
			};
			me.__div = me.__1;
	};
	function SkinHotspotClass__2(parentScope,hotspot) {
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
		el=me.__2=document.createElement('div');
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
		me.__2.ggIsActive=function() {
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
		me.__2.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_2']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_2']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.ggUpdatePosition=function (useTransition) {
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
		me._external_11.onclick=function (e) {
			player.setMediaVisibility("\ud070\ucc3d","2",0);
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
		me.__2.appendChild(me._external_11);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_11.style.width=hotspot.customimagewidth + 'px';
			me._external_11.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_11.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_11.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='큰창') {
					me.__2.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='큰창') {
					me.__2.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='큰창') {
					me.__2.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='큰창') {
					me.__2.onmouseover();
				}
			};
			me.__div = me.__2;
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
		me._external_12.onclick=function (e) {
			player.setMediaVisibility("\uc2dd\ud0c11","2",0);
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
		me.__10.appendChild(me._external_12);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_12.style.width=hotspot.customimagewidth + 'px';
			me._external_12.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_12.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_12.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='식탁1') {
					me.__10.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='식탁1') {
					me.__10.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='식탁1') {
					me.__10.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='식탁1') {
					me.__10.onmouseover();
				}
			};
			me.__div = me.__10;
	};
	function SkinHotspotClass__20(parentScope,hotspot) {
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
		el=me.__20=document.createElement('div');
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
		me.__20.ggIsActive=function() {
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
		me.__20.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_20']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_20']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.ggUpdatePosition=function (useTransition) {
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
		me._external_13.onclick=function (e) {
			player.setMediaVisibility("\ucc3d\ubb382","2",0);
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
		me.__20.appendChild(me._external_13);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_13.style.width=hotspot.customimagewidth + 'px';
			me._external_13.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_13.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_13.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='창문2') {
					me.__20.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='창문2') {
					me.__20.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='창문2') {
					me.__20.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='창문2') {
					me.__20.onmouseover();
				}
			};
			me.__div = me.__20;
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
		me._external_14.onclick=function (e) {
			player.setMediaVisibility("\ucc3d\ubb381","2",0);
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
		me.__11.appendChild(me._external_14);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_14.style.width=hotspot.customimagewidth + 'px';
			me._external_14.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_14.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_14.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='창문1') {
					me.__11.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='창문1') {
					me.__11.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='창문1') {
					me.__11.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='창문1') {
					me.__11.onmouseover();
				}
			};
			me.__div = me.__11;
	};
	function SkinHotspotClass__3(parentScope,hotspot) {
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
		el=me.__3=document.createElement('div');
		el.ggId="\ub0c9\uc7a5\uace0\uce58\uc218";
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
		me.__3.ggIsActive=function() {
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
		me.__3.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_3']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_3']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.ggUpdatePosition=function (useTransition) {
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
		me._external_15.onclick=function (e) {
			player.setMediaVisibility("\ub0c9\uc7a5\uace0\uce58\uc218","2",0);
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
		me.__3.appendChild(me._external_15);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_15.style.width=hotspot.customimagewidth + 'px';
			me._external_15.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_15.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_15.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='냉장고치수') {
					me.__3.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='냉장고치수') {
					me.__3.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='냉장고치수') {
					me.__3.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='냉장고치수') {
					me.__3.onmouseover();
				}
			};
			me.__div = me.__3;
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
		el=me.__5=document.createElement('div');
		els=me.__5__text=document.createElement('div');
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
		me.__5.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5.ggUpdateText();
		player.addListener('changenode', function() {
			me.__5.ggUpdateText();
		});
		el.appendChild(els);
		me.__5.ggIsActive=function() {
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
		me.__5.logicBlock_position = function() {
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
			if (me.__5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__5.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__5.ggCurrentLogicStatePosition == 0) {
					me.__5.style.left = 'calc(50% - (50px / 2))';
					me.__5.style.bottom='0px';
				}
				else {
					me.__5.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__5.style.bottom='-28px';
				}
			}
		}
		me.__5.logicBlock_position();
		me.__5.logicBlock_size = function() {
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
			if (me.__5.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__5.ggCurrentLogicStateSize = newLogicStateSize;
				me.__5.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__5.ggCurrentLogicStateSize == 0) {
					me.__5.style.width='95px';
					me.__5.style.height='25px';
					me.__5.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__5);
				}
				else if (me.__5.ggCurrentLogicStateSize == 1) {
					me.__5.style.width='60px';
					me.__5.style.height='25px';
					me.__5.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__5);
				}
				else if (me.__5.ggCurrentLogicStateSize == 2) {
					me.__5.style.width='60px';
					me.__5.style.height='25px';
					me.__5.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__5);
				}
				else {
					me.__5.style.width='50px';
					me.__5.style.height='25px';
					me.__5.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__5);
				}
			}
		}
		me.__5.logicBlock_size();
		me.__5.logicBlock_visible = function() {
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
			if (me.__5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__5.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__5.ggCurrentLogicStateVisible == 0) {
					me.__5.style.visibility="hidden";
					me.__5.ggVisible=false;
				}
				else if (me.__5.ggCurrentLogicStateVisible == 1) {
					me.__5.style.visibility="hidden";
					me.__5.ggVisible=false;
				}
				else {
					me.__5.style.visibility="hidden";
					me.__5.ggVisible=false;
				}
			}
		}
		me.__5.logicBlock_visible();
		me.__5.logicBlock_backgroundcolor = function() {
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
			if (me.__5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__5.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__5.ggCurrentLogicStateBackgroundColor == 0) {
					me.__5.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__5.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__5.logicBlock_backgroundcolor();
		me.__5.logicBlock_text = function() {
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
			if (me.__5.ggCurrentLogicStateText != newLogicStateText) {
				me.__5.ggCurrentLogicStateText = newLogicStateText;
				me.__5.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__5.ggCurrentLogicStateText == 0) {
					if (me.__5.ggUpdateText) {
					me.__5.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__5.ggUpdateText();
					} else {
						if (me.__5.ggUpdatePosition) me.__5.ggUpdatePosition();
					}
				}
				else {
					if (me.__5.ggUpdateText) {
					me.__5.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__5.ggUpdateText();
					} else {
						if (me.__5.ggUpdatePosition) me.__5.ggUpdatePosition();
					}
				}
			}
		}
		me.__5.logicBlock_text();
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__5);
		el=me.__4=document.createElement('div');
		els=me.__4__text=document.createElement('div');
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
		me.__4.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__4.ggUpdateText();
		player.addListener('changenode', function() {
			me.__4.ggUpdateText();
		});
		el.appendChild(els);
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
		me.__4.logicBlock_position = function() {
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
			if (me.__4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__4.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__4.ggCurrentLogicStatePosition == 0) {
					me.__4.style.left = 'calc(50% - (60px / 2))';
					me.__4.style.bottom='0px';
				}
				else if (me.__4.ggCurrentLogicStatePosition == 1) {
					me.__4.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -5px)';
					me.__4.style.bottom='40px';
				}
				else {
					me.__4.style.left='calc(50% - ((60px + 0px) / 2) + 0px)';
					me.__4.style.bottom='-40px';
				}
			}
		}
		me.__4.logicBlock_position();
		me.__4.logicBlock_size = function() {
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
			if (me.__4.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__4.ggCurrentLogicStateSize = newLogicStateSize;
				me.__4.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__4.ggCurrentLogicStateSize == 0) {
					me.__4.style.width='50px';
					me.__4.style.height='25px';
					me.__4.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__4);
				}
				else if (me.__4.ggCurrentLogicStateSize == 1) {
					me.__4.style.width='50px';
					me.__4.style.height='25px';
					me.__4.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__4);
				}
				else if (me.__4.ggCurrentLogicStateSize == 2) {
					me.__4.style.width='95px';
					me.__4.style.height='25px';
					me.__4.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__4);
				}
				else {
					me.__4.style.width='60px';
					me.__4.style.height='30px';
					me.__4.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__4);
				}
			}
		}
		me.__4.logicBlock_size();
		me.__4.logicBlock_visible = function() {
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
			if (me.__4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__4.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__4.ggCurrentLogicStateVisible == 0) {
					me.__4.style.visibility="hidden";
					me.__4.ggVisible=false;
				}
				else if (me.__4.ggCurrentLogicStateVisible == 1) {
					me.__4.style.visibility="hidden";
					me.__4.ggVisible=false;
				}
				else {
					me.__4.style.visibility="hidden";
					me.__4.ggVisible=false;
				}
			}
		}
		me.__4.logicBlock_visible();
		me.__4.logicBlock_backgroundcolor = function() {
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
			if (me.__4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__4.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__4.ggCurrentLogicStateBackgroundColor == 0) {
					me.__4.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__4.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__4.logicBlock_backgroundcolor();
		me.__4.logicBlock_text = function() {
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
			if (me.__4.ggCurrentLogicStateText != newLogicStateText) {
				me.__4.ggCurrentLogicStateText = newLogicStateText;
				me.__4.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__4.ggCurrentLogicStateText == 0) {
					if (me.__4.ggUpdateText) {
					me.__4.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__4.ggUpdateText();
					} else {
						if (me.__4.ggUpdatePosition) me.__4.ggUpdatePosition();
					}
				}
				else {
					if (me.__4.ggUpdateText) {
					me.__4.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__4.ggUpdateText();
					} else {
						if (me.__4.ggUpdatePosition) me.__4.ggUpdatePosition();
					}
				}
			}
		}
		me.__4.logicBlock_text();
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__4);
		me._lottie_2.appendChild(me._container_6);
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
		me.__5.logicBlock_position();
		me.__5.logicBlock_size();
		me.__5.logicBlock_visible();
		me.__5.logicBlock_backgroundcolor();
		me.__5.logicBlock_text();
		me.__4.logicBlock_position();
		me.__4.logicBlock_size();
		me.__4.logicBlock_visible();
		me.__4.logicBlock_backgroundcolor();
		me.__4.logicBlock_text();
			me.ggEvent_activehotspotchanged=function() {
				me.__5.logicBlock_size();
				me.__5.logicBlock_backgroundcolor();
				me.__5.logicBlock_text();
				me.__4.logicBlock_size();
				me.__4.logicBlock_backgroundcolor();
				me.__4.logicBlock_text();
			};
			me.ggEvent_changenode=function() {
				me.__5.logicBlock_size();
				me.__5.logicBlock_backgroundcolor();
				me.__5.logicBlock_text();
				me.__4.logicBlock_size();
				me.__4.logicBlock_backgroundcolor();
				me.__4.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__5.logicBlock_size();
				me.__5.logicBlock_visible();
				me.__5.logicBlock_backgroundcolor();
				me.__5.logicBlock_text();
				me.__4.logicBlock_position();
				me.__4.logicBlock_size();
				me.__4.logicBlock_visible();
				me.__4.logicBlock_backgroundcolor();
				me.__4.logicBlock_text();
			};
			me.ggEvent_hotspotsupdated=function() {
				me.__5.logicBlock_position();
				me.__4.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__5.logicBlock_size();
				me.__5.logicBlock_visible();
				me.__4.logicBlock_size();
				me.__4.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass__29(parentScope,hotspot) {
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
		el=me.__29=document.createElement('div');
		el.ggId="\uc778\ub355\uc158";
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
		me.__29.ggIsActive=function() {
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
		me.__29.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__29.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__29.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_29']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__29.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_29']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		els=me.__34__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me.__34.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me.__34.ggSubElement.setAttribute('alt', player._(me.__34.ggAltText));
			me.__34.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me.__34.ggText_untranslated = img;
			me.__34.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me.__34.ggSubElement.style.width = '0px';
			me.__34.ggSubElement.style.height = '0px';
			me.__34.ggSubElement.src='';
			me.__34.ggSubElement.src=me.__34.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me.__34.ggText != player._(me.__34.ggText_untranslated)) {
				me.__34.ggText = player._(me.__34.ggText_untranslated);
				me.__34.ggUpdateImage()
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
		el.ggId="\uc778\ub355\uc158 \ud0dc\uadf8";
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
			return me.ggNodeId;
		}
		me.__34.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__34.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__34.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__34.style.transition='';
				if (me.__34.ggCurrentLogicStateVisible == 0) {
					me.__34.style.visibility="hidden";
					me.__34.ggSubElement.src='';
					me.__34.ggVisible=false;
				}
				else {
					me.__34.style.visibility=(Number(me.__34.style.opacity)>0||!me.__34.style.opacity)?'inherit':'hidden';
					me.__34.ggSubElement.src=me.__34.ggText;
					me.__34.ggVisible=true;
				}
			}
		}
		me.__34.logicBlock_visible();
		me.__34.onclick=function (e) {
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
		}
		me.__34.ggUpdatePosition=function (useTransition) {
			var parentWidth = me.__34.clientWidth;
			var parentHeight = me.__34.clientHeight;
			var img = me.__34__img;
			var aspectRatioDiv = me.__34.clientWidth / me.__34.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me.__34.ggScrollbars || currentWidth < me.__34.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me.__34.scrollLeft=currentWidth / 2 - me.__34.clientWidth / 2;
			}
			if (!me.__34.ggScrollbars || currentHeight < me.__34.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me.__34.scrollTop=currentHeight / 2 - me.__34.clientHeight / 2;
			}
		}
		me.__29.appendChild(me.__34);
		if ((hotspot) && (hotspot.customimage)) {
			me.__34.style.width=hotspot.customimagewidth + 'px';
			me.__34.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me.__34.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me.__34.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me.__34.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me.__34.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me.__34.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me.__34.logicBlock_visible();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='인덕션') {
					me.__29.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='인덕션') {
					me.__29.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='인덕션') {
					me.__29.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='인덕션') {
					me.__29.onmouseover();
				}
			};
			me.__div = me.__29;
	};
	function SkinHotspotClass__55(parentScope,hotspot) {
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
		el=me.__55=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8";
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
		me.__55.ggIsActive=function() {
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
		me.__55.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__55.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__55.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_55']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__55.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_55']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__56=document.createElement('div');
		els=me.__56__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me.__56.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me.__56.ggSubElement.setAttribute('alt', player._(me.__56.ggAltText));
			me.__56.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me.__56.ggText_untranslated = img;
			me.__56.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me.__56.ggSubElement.style.width = '0px';
			me.__56.ggSubElement.style.height = '0px';
			me.__56.ggSubElement.src='';
			me.__56.ggSubElement.src=me.__56.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me.__56.ggText != player._(me.__56.ggText_untranslated)) {
				me.__56.ggText = player._(me.__56.ggText_untranslated);
				me.__56.ggUpdateImage()
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
		el.ggId="\uc5d0\uc5b4\ucee8 \ud0dc\uadf8";
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
			return me.ggNodeId;
		}
		me.__56.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__56.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__56.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__56.style.transition='';
				if (me.__56.ggCurrentLogicStateVisible == 0) {
					me.__56.style.visibility="hidden";
					me.__56.ggSubElement.src='';
					me.__56.ggVisible=false;
				}
				else {
					me.__56.style.visibility=(Number(me.__56.style.opacity)>0||!me.__56.style.opacity)?'inherit':'hidden';
					me.__56.ggSubElement.src=me.__56.ggText;
					me.__56.ggVisible=true;
				}
			}
		}
		me.__56.logicBlock_visible();
		me.__56.onclick=function (e) {
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
		}
		me.__56.ggUpdatePosition=function (useTransition) {
			var parentWidth = me.__56.clientWidth;
			var parentHeight = me.__56.clientHeight;
			var img = me.__56__img;
			var aspectRatioDiv = me.__56.clientWidth / me.__56.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me.__56.ggScrollbars || currentWidth < me.__56.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me.__56.scrollLeft=currentWidth / 2 - me.__56.clientWidth / 2;
			}
			if (!me.__56.ggScrollbars || currentHeight < me.__56.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me.__56.scrollTop=currentHeight / 2 - me.__56.clientHeight / 2;
			}
		}
		me.__55.appendChild(me.__56);
		if ((hotspot) && (hotspot.customimage)) {
			me.__56.style.width=hotspot.customimagewidth + 'px';
			me.__56.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me.__56.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me.__56.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me.__56.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me.__56.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me.__56.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me.__56.logicBlock_visible();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='에어컨') {
					me.__55.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='에어컨') {
					me.__55.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='에어컨') {
					me.__55.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='에어컨') {
					me.__55.onmouseover();
				}
			};
			me.__div = me.__55;
	};
	function SkinHotspotClass__71(parentScope,hotspot) {
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
		el=me.__71=document.createElement('div');
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
		me.__71.ggIsActive=function() {
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
		me.__71.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__71.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__71.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_71']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__71.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_71']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		el=me.__72=document.createElement('div');
		els=me.__72__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me.__72.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me.__72.ggSubElement.setAttribute('alt', player._(me.__72.ggAltText));
			me.__72.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me.__72.ggText_untranslated = img;
			me.__72.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me.__72.ggSubElement.style.width = '0px';
			me.__72.ggSubElement.style.height = '0px';
			me.__72.ggSubElement.src='';
			me.__72.ggSubElement.src=me.__72.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me.__72.ggText != player._(me.__72.ggText_untranslated)) {
				me.__72.ggText = player._(me.__72.ggText_untranslated);
				me.__72.ggUpdateImage()
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
		el.ggId="\uc138\ud0c1\uae30 \ud0dc\uadf8";
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
			return me.ggNodeId;
		}
		me.__72.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__72.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__72.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__72.style.transition='';
				if (me.__72.ggCurrentLogicStateVisible == 0) {
					me.__72.style.visibility="hidden";
					me.__72.ggSubElement.src='';
					me.__72.ggVisible=false;
				}
				else {
					me.__72.style.visibility=(Number(me.__72.style.opacity)>0||!me.__72.style.opacity)?'inherit':'hidden';
					me.__72.ggSubElement.src=me.__72.ggText;
					me.__72.ggVisible=true;
				}
			}
		}
		me.__72.logicBlock_visible();
		me.__72.onclick=function (e) {
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
		}
		me.__72.ggUpdatePosition=function (useTransition) {
			var parentWidth = me.__72.clientWidth;
			var parentHeight = me.__72.clientHeight;
			var img = me.__72__img;
			var aspectRatioDiv = me.__72.clientWidth / me.__72.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me.__72.ggScrollbars || currentWidth < me.__72.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me.__72.scrollLeft=currentWidth / 2 - me.__72.clientWidth / 2;
			}
			if (!me.__72.ggScrollbars || currentHeight < me.__72.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me.__72.scrollTop=currentHeight / 2 - me.__72.clientHeight / 2;
			}
		}
		me.__71.appendChild(me.__72);
		if ((hotspot) && (hotspot.customimage)) {
			me.__72.style.width=hotspot.customimagewidth + 'px';
			me.__72.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me.__72.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me.__72.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me.__72.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me.__72.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me.__72.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me.__72.logicBlock_visible();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='세탁기') {
					me.__71.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='세탁기') {
					me.__71.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='세탁기') {
					me.__71.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='세탁기') {
					me.__71.onmouseover();
				}
			};
			me.__div = me.__71;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='세탁기') {
				hotspot.skinid = '세탁기';
				hsinst = new SkinHotspotClass__71(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='에어컨') {
				hotspot.skinid = '에어컨';
				hsinst = new SkinHotspotClass__55(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='인덕션') {
				hotspot.skinid = '인덕션';
				hsinst = new SkinHotspotClass__29(me, hotspot);
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
			if (hotspot.skinid=='냉장고치수') {
				hotspot.skinid = '냉장고치수';
				hsinst = new SkinHotspotClass__3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='창문1') {
				hotspot.skinid = '창문1';
				hsinst = new SkinHotspotClass__11(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='창문2') {
				hotspot.skinid = '창문2';
				hsinst = new SkinHotspotClass__20(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='식탁1') {
				hotspot.skinid = '식탁1';
				hsinst = new SkinHotspotClass__10(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='큰창') {
				hotspot.skinid = '큰창';
				hsinst = new SkinHotspotClass__2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='거실가로') {
				hotspot.skinid = '거실가로';
				hsinst = new SkinHotspotClass__1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='거실세로') {
				hotspot.skinid = '거실세로';
				hsinst = new SkinHotspotClass__0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = '가스레인지';
				hsinst = new SkinHotspotClass__(me, hotspot);
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
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
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