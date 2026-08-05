import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from "./js/render-functions.js";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let currentQuery = "";
let currentPage = 1;

form.addEventListener("submit", onSubmit);
loadMoreBtn.addEventListener("click", onLoadMore);

async function onSubmit(event) {
    event.preventDefault();

    currentQuery = event.currentTarget.elements["search-text"].value.trim();

    if (!currentQuery) return;

    currentPage = 1;

    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage);

        if (data.hits.length === 0) {
            iziToast.error({
                message:
                "Sorry, there are no images matching your search query. Please try again!",
            });
            return;
        }

        createGallery(data.hits);

        const totalPages = Math.ceil(data.totalHits / 15);

        if (currentPage < totalPages) {
            showLoadMoreButton();
        } else {

            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        }

        form.reset();
    } catch (error) {
        iziToast.error({
        message: "Something went wrong. Please try again later.",
        });

        console.error(error);
    } finally {
        hideLoader();
    }
}

async function onLoadMore() {
    currentPage += 1;

    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage);

        createGallery(data.hits);

        const card = document
            .querySelector(".gallery-item")
            .getBoundingClientRect();

        window.scrollBy({
            top: card.height * 2,
            behavior: "smooth",
        });

        const totalPages = Math.ceil(data.totalHits / 15);

        if (currentPage < totalPages) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();

            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        }
    } catch (error) {
        iziToast.error({
        message: "Something went wrong. Please try again later.",
        });

        console.error(error);
    } finally {
        hideLoader();
    }
}