export let params = {
    q: "",
    sort: "",
    order: "",
    page: 1,
    per_page: 8,
    category: ""
};

export const inputSearch = document.querySelector("#search input");
export const buttonSearch = document.querySelector("#search button");
export const filter = document.querySelector("#filter");
export const pagiPrevious = document.querySelector("#paginationPrevious");
export const pagiNext = document.querySelector("#paginationNext");
export const pagiNumber = document.querySelector("#paginationNumber");
export const products = document.querySelector("#products");
export const category = document.querySelector("#category");
