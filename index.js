import{a as w,S as v,i as n}from"./assets/vendor-S2qh7U4E.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const S="56919278-56fc7c07c946b703a6deaca80";async function u(o,e){return(await w.get("https://pixabay.com/api/",{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),P=new v(".gallery a",{captionsData:"alt",captionDelay:250});function M(){f.innerHTML=""}function y(o){const e=o.map(r=>`
        <li class="gallery-item">
            <a href="${r.largeImageURL}">
                <img
                    src="${r.webformatURL}"
                    alt="${r.tags}"
                >
            </a>

            <div class="info">
                <p><b>Likes</b><br>${r.likes}</p>
                <p><b>Views</b><br>${r.views}</p>
                <p><b>Comments</b><br>${r.comments}</p>
                <p><b>Downloads</b><br>${r.downloads}</p>
            </div>
        </li>
    `).join("");f.insertAdjacentHTML("beforeend",e),P.refresh()}function h(){m.classList.remove("is-hidden")}function p(){m.classList.add("is-hidden")}const g=document.querySelector(".load-more");function b(){g.classList.remove("is-hidden")}function l(){g.classList.add("is-hidden")}const L=document.querySelector(".form"),q=document.querySelector(".load-more");let i="",a=1;L.addEventListener("submit",$);q.addEventListener("click",B);async function $(o){if(o.preventDefault(),i=o.currentTarget.elements["search-text"].value.trim(),!!i){a=1,M(),l(),h();try{const e=await u(i,a);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits);const r=Math.ceil(e.totalHits/15);a<r?b():n.info({message:"We're sorry, but you've reached the end of search results."}),L.reset()}catch(e){n.error({message:"Something went wrong. Please try again later."}),console.error(e)}finally{p()}}}async function B(){a+=1,l(),h();try{const o=await u(i,a);y(o.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"});const r=Math.ceil(o.totalHits/15);a<r?b():(l(),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch(o){n.error({message:"Something went wrong. Please try again later."}),console.error(o)}finally{p()}}
//# sourceMappingURL=index.js.map
