/*! For license information please see admin.js.LICENSE.txt */
(()=>{var t={648:(t,e,r)=>{var o=r(814).default;function n(){"use strict";t.exports=n=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},l=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function d(t,e,r,o){var n=e&&e.prototype instanceof h?e:h,a=Object.create(n.prototype),i=new W(o||[]);return a._invoke=function(t,e,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return{value:void 0,done:!0}}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var l=L(i,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var s=f(t,e,r);if("normal"===s.type){if(o=r.done?"completed":"suspendedYield",s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var g={};function h(){}function p(){}function m(){}var v={};c(v,l,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(F([])));w&&w!==r&&a.call(w,l)&&(v=w);var b=m.prototype=h.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(n,i,l,s){var u=f(t[n],t,i);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==o(d)&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,l,s)}),(function(t){r("throw",t,l,s)})):e.resolve(d).then((function(t){c.value=t,l(c)}),(function(t){return r("throw",t,l,s)}))}s(u.arg)}var n;this._invoke=function(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var n=o.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,g):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function W(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function F(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=m,c(b,"constructor",m),c(m,"constructor",p),p.displayName=c(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},x(_.prototype),c(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new _(d(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),c(b,u,"Generator"),c(b,l,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},e.values=F,W.prototype={constructor:W,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],i=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var l=a.call(n,"catchLoc"),s=a.call(n,"finallyLoc");if(l&&s){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(l){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=e,n?(this.method="next",this.next=n.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;k(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:F(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),g}},e}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},814:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},195:(t,e,r)=>{var o=r(648)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};(()=>{"use strict";r.r(o);const t=flarum.core.compat["admin/app"];var e=r.n(t);const n=flarum.core.compat["common/app"];var a=r.n(n);const i=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"];var l=r.n(i);function s(t,e,r,o,n,a,i){try{var l=t[a](i),s=l.value}catch(t){return void r(t)}l.done?e(s):Promise.resolve(s).then(o,n)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}var c=r(195),d=r.n(c);const f=flarum.core.compat["common/utils/extractText"];var g=r.n(f);const h=flarum.core.compat["common/helpers/icon"];var p=r.n(h);const v=flarum.core.compat["common/components/LoadingIndicator"];var y=r.n(v);const w=flarum.core.compat["common/components/Button"];var b=r.n(w);const x=flarum.core.compat["common/components/Link"];var _=r.n(x);const L=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"];var S=r.n(L);const k=flarum.core.compat["v17development/blog/components/FeaturedBlogItem"];var W,F=r.n(k);!function(t){t[t.loading=0]="loading",t[t.loaded=1]="loaded",t[t.failed=2]="failed"}(W||(W={}));var E=function(t){var e,r;function o(){for(var e,r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))||this).data=[],e.loadingState=W.loading,e}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,u(e,r);var n=o.prototype;return n.className=function(){return"BlogFeaturedWidget-widget"},n.icon=function(){return"fas fa-th-large"},n.title=function(){return g()(a().translator.trans("davwheat-blog-featured-widget.forum.widget.title"))},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.loadData()},n.shouldRemoveFromPage=function(t,e){return(!e||e in flarum.extensions)&&!a().forum.attribute("davwheat-blog-featured-widget."+t)},n.view=function(){return this.shouldRemoveFromPage("show_on_tag_pages","flarum-tags")&&"tag"===a().current.data.routeName||this.shouldRemoveFromPage("show_on_following_page","flarum-subscriptions")&&"following"===a().current.data.routeName||this.shouldRemoveFromPage("show_on_byobu_page","fof-byobu")&&"byobuPrivate"===a().current.data.routeName||this.shouldRemoveFromPage("show_on_bookmarks_page","clarkwinkelmann-bookmarks")&&"bookmarks"===a().current.data.routeName?null:t.prototype.view.call(this)},n.header=function(){var t,e=this,r=this.icon(),o=this.$(".BlogFeaturedWidget-articleList")[0],n=0===(null!=(t=null==o?void 0:o.scrollLeft)?t:0),i=(null==o?void 0:o.scrollWidth)-(null==o?void 0:o.clientWidth)-(null==o?void 0:o.scrollLeft)==0;return m("div",{class:"AfruxWidgets-Widget-title"},r?m("span",{class:"AfruxWidgets-Widget-title-icon"},p()(r)):null,m("span",{class:"AfruxWidgets-Widget-title-label BlogFeaturedWidget-title"},this.title()),m("span",{class:"AfruxWidgets-Widget-title-label BlogFeaturedWidget-titleSeparator","aria-hidden":"true"},"•"),m(_(),{href:a().route("blog"),class:"AfruxWidgets-Widget-title-label BlogFeaturedWidget-moreLink"},a().translator.trans("davwheat-blog-featured-widget.forum.widget.more_blog_link"),p()("fas fa-arrow-right",{className:"BlogFeaturedWidget-moreLinkIcon"})),m(b(),{class:"Button Button--icon BlogFeaturedWidget-scrollButton",icon:"fas fa-chevron-left",disabled:n,"aria-label":a().translator.trans("davwheat-blog-featured-widget.forum.widget.scrollers.left"),onclick:function(){e.$(".BlogFeaturedWidget-articleList")[0].scrollLeft-=316}}),m(b(),{class:"Button Button--icon BlogFeaturedWidget-scrollButton",icon:"fas fa-chevron-right",disabled:i,"aria-label":a().translator.trans("davwheat-blog-featured-widget.forum.widget.scrollers.right"),onclick:function(){e.$(".BlogFeaturedWidget-articleList")[0].scrollLeft+=316}}))},n.content=function(){var t=this;return m("div",{className:"BlogFeaturedWidget-widgetContent"},this.loadingStatusMessage(),this.loadingState===W.loaded&&m("div",{class:"BlogFeaturedWidget-articleList"},this.data.map((function(e){return t.blogItem(e)}))))},n.loadingStatusMessage=function(){switch(this.loadingState){case W.loading:return m(y(),null);case W.failed:return m("div",{class:"BlogFeaturedWidget-loadStatusMessage Placeholder"},m("p",null,a().translator.trans("davwheat-blog-featured-widget.forum.widget.status.error")));case W.loaded:return 0!==this.data.length?null:m("div",{class:"BlogFeaturedWidget-loadStatusMessage Placeholder"},m("p",null,a().translator.trans("davwheat-blog-featured-widget.forum.widget.status.no_data")))}},n.requestParams=function(){var t=a().store.all("discussion-languages"),e=m.route.param("lang")?m.route.param("lang"):a().translator.formatter.locale,r={filter:{q:"is:blog"},sort:"-createdAt",page:{limit:9}};return null!=t&&t.length&&(r.filter.q+=" language:"+e),r},n.loadData=function(){var t,e=(t=d().mark((function t(){var e;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a().store.find("discussions",this.requestParams());case 3:(e=t.sent)&&(this.data=e,this.loadingState=W.loaded),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.loadingState=W.failed;case 10:m.redraw();case 11:case"end":return t.stop()}}),t,this,[[0,7]])})),function(){var e=this,r=arguments;return new Promise((function(o,n){var a=t.apply(e,r);function i(t){s(a,o,n,i,l,"next",t)}function l(t){s(a,o,n,i,l,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),n.blogItem=function(t){var e=a().forum.attribute("blogDefaultImage")?"url("+a().forum.attribute("baseUrl")+"/assets/"+a().forum.attribute("blogDefaultImage")+")":null;return m(F(),{article:t,defaultImage:e})},o}(S());const P=flarum.core.compat["admin/utils/isExtensionEnabled"];var B=r.n(P);function O(t){return{type:"bool",label:e().translator.trans("davwheat-blog-featured-widget.admin.settings."+t),setting:"davwheat-blog-featured-widget."+t}}e().initializers.add("davwheat/blog-featured-widget",(function(){(new(l())).add({key:"blogFeaturedArticles",component:E,isDisabled:function(){return!("v17development-blog"in flarum.extensions)},isUnique:!1,placement:"top",position:1}).extend(a(),"davwheat-blog-featured-widget");var t=e().extensionData.for("davwheat-blog-featured-widget");t.registerSetting((function(){return m("p",{style:"margin-bottom: 24px; padding: 4px 0; padding-left: 12px; border-left: 4px solid var(--primary-color);"},e().translator.trans("davwheat-blog-featured-widget.admin.settings.location_note"))})),B()("flarum-tags")&&t.registerSetting(O("show_on_tag_pages")),B()("flarum-subscriptions")&&t.registerSetting(O("show_on_following_page")),B()("fof-byobu")&&t.registerSetting(O("show_on_byobu_page")),B()("clarkwinkelmann-bookmarks")&&t.registerSetting(O("show_on_bookmarks_page"))}))})(),module.exports=o})();
//# sourceMappingURL=admin.js.map