import { drawProduct } from "./drawProduct.js";
import { buttonSearch, filter, inputSearch, pagiNext, pagiNumber, pagiPrevious, params } from "./variable.js";

drawProduct();

// Search
const search = () => {
    params.q = inputSearch.value;
    drawProduct();
}

buttonSearch.addEventListener("click", function() {
    search();
});

inputSearch.addEventListener("keydown", function(e) {
    // console.log(e);
    // console.log(e.key);

    if(e.key === "Enter") {
        search();
    }
});
// End Search

// Filter
filter.addEventListener("change", function(e) {
    // console.log(e.target.value);
    switch (e.target.value) {
        case "mac-dinh":
            params.sort = "";
            params.order = "";
            break;
        case "gia-thap-den-cao":
            params.sort = "price";
            params.order = "asc";
            break;
        case "gia-cao-den-thap":
            params.sort = "-price";
            params.order = "desc";
            break;
        case "giam-gia-nhieu":
            params.sort = "-discountPercentage";
            params.order = "desc";
            break;
        default:
            break;
    }
    drawProduct();
});

// End Filter

// Pagination
pagiPrevious.addEventListener("click", function() {
    if(params.page > 1) {
        params.page = params.page - 1;
        pagiNumber.innerHTML = params.page;
        drawProduct();
    }
});

pagiNext.addEventListener("click", function() {
    params.page = params.page + 1;
    pagiNumber.innerHTML = params.page;
    drawProduct();
});
// End Pagination