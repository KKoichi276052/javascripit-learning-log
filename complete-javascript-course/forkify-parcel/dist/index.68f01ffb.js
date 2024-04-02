var e=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var s,o,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(s=new j(a||[]),o=p,function(r,i){if(o===f)throw Error("Generator is already running");if(o===d){if("throw"===r)throw i;return S()}for(s.method=r,s.arg=i;;){var a=s.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(t===a)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var s=h(a,r.iterator,n.arg);if("throw"===s.type)return n.method="throw",n.arg=s.arg,n.delegate=null,g;var o=s.arg;return o?o.done?(n[r.resultName]=o.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,s);if(c){if(c===g)continue;return c}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(o===p)throw o=d,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);o=f;var l=h(e,n,s);if("normal"===l.type){if(o=s.done?d:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:s.done}}"throw"===l.type&&(o=d,s.method="throw",s.arg=l.arg)}})}),c}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var p="suspendedStart",f="executing",d="completed",g={};function v(){}function _(){}function y(){}var m={};l(m,s,function(){return this});var w=Object.getPrototypeOf,b=w&&w(w(M([])));b&&b!==r&&n.call(b,s)&&(m=b);var E=y.prototype=v.prototype=Object.create(m);function L(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var r;i(this,"_invoke",{value:function(i,a){function s(){return new t(function(r,s){!function r(i,a,s,o){var c=h(e[i],e,a);if("throw"===c.type)o(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,s,o)},function(e){r("throw",e,s,o)}):t.resolve(u).then(function(e){l.value=e,s(l)},function(e){return r("throw",e,s,o)})}}(i,a,r,s)})}return r=r?r.then(s,s):s()}})}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function M(e){if(e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:t,done:!0}}return _.prototype=y,i(E,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:_,configurable:!0}),_.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},L(x.prototype),l(x.prototype,o,function(){return this}),e.AsyncIterator=x,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var s=new x(u(t,r,n,i),a);return e.isGeneratorFunction(r)?s:s.next().then(function(e){return e.done?e.value:s.next()})},L(E),l(E,c,"Generator"),l(E,s,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=M,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return o.type="throw",o.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],o=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else if(l){if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return(s.type=e,s.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}const t="https://forkify-api.herokuapp.com/api/v2/recipes",r=async function(e){try{let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 5 second"))},5e3)})]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}},n=function(e){if(parseFloat(e)===parseInt(e))return e;let t=function(e,r){return r<1e-7?e:t(r,Math.floor(e%r))},r=Math.pow(10,e.toString().length-2),n=e*r;var i=t(n,r);let a=0;return(n/=i)>(r/=i)&&(a=Math.floor(n/r),n-=a*r),e=Math.floor(n)+"/"+Math.floor(r),a&&(e=a+" "+e),e},i={recipe:{},search:{query:"",results:[]}},a=async function(e){try{let{recipe:n}=(await r(`${t}/${e}?key=28e45b7c-234f-4704-bd5f-db0b30cb0a1a`)).data;i.recipe={id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients}}catch(e){throw e}},s=async function(e){try{i.search.query=e;let{data:n}=await r(`${t}?search=${e}`);i.search.results=n.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),i.search.results}catch(e){console.error(e)}};class o{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e,this._clear();let t=this._generateMarkup();this._parentEl.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentEl.innerHTML=""}renderSpinner(){let e=`
    <div class="spinner">
      <svg>
        <use href="src/img/icons.svg#icon-loader"></use>
      </svg>
			
    </div>
  `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
		<div class="error">
			<div>
				<svg>
				<use href="src/img/icons.svg#icon-alert-triangle"></use>
				</svg>
			</div>
			<p>${e}</p>
		</div>
		`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
			<div class="message">
				<div>
					<svg>
						<use href="src/img/icons.svg#icon-smile"></use>
					</svg>
				</div>
				<p>${e}</p>
			</div>
		`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}class c extends o{_parentEl=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another operations__content--active";_message;addHandlerRender(e){["hashChange","load"].forEach(t=>window.addEventListener(t,e))}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="src/img/icons.svg#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateIngredient(e){return`
			<li class="recipe__ingredient">
				<svg class="recipe__icon">
					<use href="src/img/icons.svg#icon-check"></use>
				</svg>
				<div class="recipe__quantity">${e.quantity?n(e.quantity).toString():""}</div>
				<div class="recipe__description">
					<span class="recipe__unit">${e.unit}</span>
					${e.description}
				</div>
			</li>
	`}}var l=new c;class u{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var h=new u;class p extends o{_parentEl=document.querySelector(".results");_errorMessage="No Recipe for your query. Try other one!";_message;_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
			<li class="preview">
				<a class="preview__link" href="#${e.id}">
					<figure class="preview__fig">
						<img src="${e.image}" alt="${e.title}" />
					</figure>
					<div class="preview__data">
						<h4 class="preview__title">${e.title}</h4>
						<p class="preview__publisher">${e.publisher}</p>
						<div class="preview__user-generated">
							<svg>
								<use href="src/img/icons.svg#icon-user"></use>
							</svg>
						</div>
					</div>
				</a>
			</li>
			
		`}}var f=new p;document.querySelector(".recipe");const d=async function(){try{l.renderSpinner();let e=window.location.hash.slice(1);if(!e)return;await a(e),l.render(i.recipe)}catch(e){l.renderError()}},g=async function(){try{f.renderSpinner();let e=h.getQuery();if(!e)return;await s(e),f.render(i.search.results)}catch(e){console.error(e)}};l.addHandlerRender(d),h.addHandlerSearch(g);
//# sourceMappingURL=index.68f01ffb.js.map
