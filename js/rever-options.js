!function(){function t(t){for(var n=t+"=",r=decodeURIComponent(document.cookie),o=r.split(";"),e=0;e<o.length;e++){for(var i=o[e];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return""}function n(){return t(e)||"guest"}function r(){return t(i)||s}function o(){function t(){var t=o();if(t){var n=JSON.stringify(e);try{localStorage.setItem(t,n)}catch(t){console.warn("Unable to store options")}}}this.lang=r();var o=function(){if(!n())return"";try{return a+n()}catch(t){return console.warn("Unable to get options from storage"),""}},e=function(){var t=o();if(!t)return{};var n=localStorage.getItem(t);try{return JSON.parse(n)}catch(t){return console.warn("Unable to get options from storage"),{}}}()||{};e[this.lang]=e[this.lang]||{},this.saveOption=function(n,r){e[this.lang][n]=r,t()},this.getOption=function(t){return e[this.lang][t]}}var e="ssId",i="rf_lang",a="LocalSettings::",s="vi-vn";window.ReverOptions=new o}();