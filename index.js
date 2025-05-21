import{a as p,S as m,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="50384858-0b7fb3bc045111b4da7b5b4d8",g="https://pixabay.com/api/";async function h(i){const o={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await p.get(g,{params:o})).data}catch(r){throw console.error("Error fetching images:",r),r}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const o=i.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:n,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${r}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${n}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async i=>{i.preventDefault();const o=v.value.trim();if(!o){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}w(),S();try{const r=await h(o);r.hits.length===0?a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(r.hits)}catch{a.error({title:"Error",message:"An error occurred while fetching images.",position:"topRight"})}finally{q()}});
//# sourceMappingURL=index.js.map
