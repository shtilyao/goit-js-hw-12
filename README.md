# Image Search App

An image search application built with **JavaScript**, **Vite**, and the **Pixabay API**. Users can search for images, browse the results in a responsive gallery, and load additional images using pagination.

## Features

### Image Search

- Search images by keyword
- Fetch data from the Pixabay API
- Display results in a responsive gallery
- Open full-size images in a modal window using SimpleLightbox

### Pagination

- Load 15 images per request
- Load additional images using the **Load more** button
- Hide the button when all available images have been loaded
- Display a notification when the end of the search results is reached

### User Experience

- Loading indicator while fetching data
- Smooth scrolling after loading additional images
- Error notifications using iziToast
- Gallery is cleared before each new search

## Technologies

- JavaScript (ES6+)
- Vite
- Axios
- SimpleLightbox
- iziToast
- Pixabay REST API

## Project Structure

```text
src/
├── js/
│   ├── pixabay-api.js
│   └── render-functions.js
├── css/
│   └── styles.css
├── main.js
└── index.html
```

## Installation

Clone the repository:

```bash
git clone https://github.com/shtilyao/goit-js-hw-12.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## Live Demo

https://shtilyao.github.io/goit-js-hw-12/

## Repository

https://github.com/shtilyao/goit-js-hw-12
