import{a as d,S as f,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="YOUR_PIXABAY_KEY",m="https://pixabay.com/api/";async function y(n){const o={key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new f(".gallery a");function h(n){const o=n.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
          <p>👍 ${r.likes}</p>
          <p>👁️ ${r.views}</p>
          <p>💬 ${r.comments}</p>
          <p>⬇️ ${r.downloads}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function S(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),b=u.querySelector("input");u.addEventListener("submit",async n=>{n.preventDefault();const o=b.value.trim();if(!o){i.warning({title:"Oops",message:"Enter a search term!"});return}L(),w();try{const{hits:r}=await y(o);if(!r.length){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r)}catch{i.error({title:"Error",message:"Something went wrong. Try again later."})}finally{S()}});
//# sourceMappingURL=index.js.map
