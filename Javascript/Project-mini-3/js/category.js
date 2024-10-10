import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./contants.js";
import { category, params } from "./variable.js";
import { drawProduct } from "./drawProduct.js";

fetchApi(API_CATEGORY)
    .then(data => {
        // console.log(data);
        let htmls = data.map(item => {
            return `
                <div class="category__item" data-category="${item.name}">
                    ${item.name}
                </div>
            `;
        })
        // console.log(htmls.join(""));
        category.innerHTML = htmls.join("");

        const listCategory = document.querySelectorAll("#category .category__item");
        // console.log(listCategory);
        listCategory.forEach(item => {
            // console.log(item);
            item.addEventListener("click", function() {
                // params.category = item.dataset.category;
                params.category = item.getAttribute("data-category").toLowerCase();
                drawProduct();
            });
        })
    });