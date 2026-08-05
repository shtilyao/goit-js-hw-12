import{a as L,S as w,i}from"./assets/vendor-S2qh7U4E.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const S="56919278-56fc7c07c946b703a6deaca80";async function d(o,e){return(await L.get("https://pixabay.com/api/",{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),v=new w(".gallery a",{captionsData:"alt",captionDelay:250});function P(){u.innerHTML=""}function m(o){const e=o.map(r=>`
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
    `).join("");u.insertAdjacentHTML("beforeend",e),v.refresh()}function y(){f.classList.remove("is-hidden")}function h(){f.classList.add("is-hidden")}const p=document.querySelector(".load-more");function M(){p.classList.remove("is-hidden")}function g(){p.classList.add("is-hidden")}const b=document.querySelector(".form"),q=document.querySelector(".load-more");let a="",s=1;b.addEventListener("submit",$);q.addEventListener("click",B);async function $(o){if(o.preventDefault(),a=o.currentTarget.elements["search-text"].value.trim(),!!a){s=1,P(),g(),y();try{const e=await d(a,s);if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(e.hits);const r=Math.ceil(e.totalHits/15);s<r&&M(),b.reset()}catch(e){i.error({message:"Something went wrong. Please try again later."}),console.error(e)}finally{h()}}}async function B(){s+=1,y();try{const o=await d(a,s);m(o.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"});const r=Math.ceil(o.totalHits/15);s>=r&&(g(),i.info({message:"We're sorry, but you've reached the end of search results."}))}catch(o){i.error({message:"Something went wrong. Please try again later."}),console.error(o)}finally{h()}}
//# sourceMappingURL=index.js.map
