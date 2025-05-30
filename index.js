import{a as y,S as b,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const L="50384858-0b7fb3bc045111b4da7b5b4d8",w="https://pixabay.com/api/";async function S(i){const o={key:L,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await y.get(w,{params:o})).data}catch(r){throw console.error("Error fetching images:",r),r}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let c=null;function q(i){d();const o=i.map(({webformatURL:e,largeImageURL:t,tags:s,likes:p,views:m,comments:g,downloads:h})=>`
      <li class="gallery-item">
        <a href="${t}">
          <img src="${e}" alt="${s}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${p}</p>
          <p><b>Views:</b> ${m}</p>
          <p><b>Comments:</b> ${g}</p>
          <p><b>Downloads:</b> ${h}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o);const r=l.querySelectorAll("img");let n=0;r.forEach(e=>{e.addEventListener("load",()=>{n++,n===r.length&&(c?c.refresh():c=new b(".gallery a",{captionsData:"alt",captionDelay:250}))})})}function d(){l.innerHTML=""}function v(){u.classList.remove("hidden")}function E(){u.classList.add("hidden")}const f=document.querySelector(".form"),P=f.querySelector('input[name="search-text"]');f.addEventListener("submit",async i=>{i.preventDefault();const o=P.value.trim();if(!o){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}d(),v();try{const r=await S(o);r.hits.length===0?a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):q(r.hits)}catch{a.error({title:"Error",message:"An error occurred while fetching images.",position:"topRight"})}finally{E()}});
//# sourceMappingURL=index.js.map
