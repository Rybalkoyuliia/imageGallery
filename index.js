import{S as L,i as d,a as f}from"./assets/vendor-DEenWwFD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))h(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&h(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function h(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p=document.querySelector(".img-list"),v=document.querySelector(".load-more-btn");function M(o){if(o.hits.length>0){const a=o.hits.map(s=>`<li class="img-item">
        <div class="gallery">
        <a href=${s.largeImageURL}><img class="img" src=${s.webformatURL} alt=${s.tags}/></a></div>
        <ul class="img-descr-list">
        <li class="img-descr-item"><h4 class="descr-name">Likes</h4><p class="descr-value">${s.likes}</p></li>
        <li class="img-descr-item"><h4 class="descr-name">Views</h4><p class="descr-value">${s.views}</p></li>
        <li class="img-descr-item"><h4 class="descr-name">Comments</h4><p class="descr-value">${s.comments}</p></li>
        <li class="img-descr-item"><h4 class="descr-name">Downloads</h4><p class="descr-value">${s.downloads}</p></li>
        </ul>
      </li>`).join("");p.insertAdjacentHTML("beforeend",a),new L(".gallery a",{captionDelay:250})}else v.classList.add("hiddent"),d.error({message:"Sorry, there are no images matching your search query. Please try again!"}),p.innerHTML=""}let m=0,u=42;async function y(o,a){f.defaults.baseURL="https://pixabay.com/api";try{const s=await f.get("/",{params:{key:"42078504-06c0bc861c70afe486d8727f6",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:u}});return M(s.data),m=s.data.totalHits,s.data}catch(s){d.error({message:s.message})}}const e={form:document.querySelector(".form"),list:document.querySelector(".img-list"),loader:document.querySelector(".loader-container"),loadMore:document.querySelector(".load-more-btn"),scrollUp:document.querySelector(".scroll-up-btn")};let l=1,n=1,i="",g=0;e.loader.classList.add("hidden");e.loadMore.classList.add("hidden");e.form.addEventListener("submit",b);function b(o){if(o.preventDefault(),e.loadMore.classList.add("hidden"),e.loader.classList.remove("hidden"),i=o.target.elements.search.value.trim(),i)y(i,l).finally(()=>{n=Math.ceil(m/u),e.loader.classList.add("hidden"),n>1?e.loadMore.classList.remove("hidden"):e.loadMore.classList.add("hidden")});else{d.error({message:"Sorry, searchfield can not be empty. Please, try again!"}),e.loadMore.classList.add("hidden"),e.list.innerHTML="",e.loader.classList.add("hidden");return}e.form.reset(),e.list.innerHTML=""}e.loadMore.addEventListener("click",w);function w(){e.loader.classList.remove("hidden"),e.loadMore.classList.add("hidden"),l++,y(i,l).finally(()=>{e.loader.classList.add("hidden"),e.loadMore.classList.remove("hidden"),g=document.querySelector(".img-item").getBoundingClientRect();let o=Math.floor(g.height)*2;window.scrollBy({top:o,left:0,behavior:"smooth"}),(l===n||m<u)&&(e.loadMore.classList.add("hidden"),d.info({message:"We're sorry, but you've reached the end of search results."}))})}e.scrollUp.addEventListener("click",S);function S(){window.scroll({top:0,left:0,behavior:"smooth"})}document.addEventListener("scroll",q);function q(){window.scrollY<window.innerHeight?e.scrollUp.classList.add("hidden"):e.scrollUp.classList.remove("hidden")}
//# sourceMappingURL=index.js.map
