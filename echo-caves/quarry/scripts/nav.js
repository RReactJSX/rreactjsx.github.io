document.getElementsByClassName("search-buttons")[0].addEventListener("click", function() { applyFilter(0);});
document.getElementsByClassName("search-buttons")[1].addEventListener("click", function() { applyFilter(1);});
document.getElementsByClassName("search-buttons")[2].addEventListener("click", function() { applyFilter(2);});
document.getElementsByClassName("search-buttons")[3].addEventListener("click", function() { applyFilter(3);});
document.getElementsByClassName("search-buttons")[4].addEventListener("click", function() { applyFilter(4);});
document.getElementsByClassName("search-buttons")[5].addEventListener("click", function() { applyFilter(5);});

document.getElementsByClassName("search-buttons")[0].style = "background-color: #5e366d; border-color: #b697c9;";

let previousIndex = 0;
let catalog = document.getElementById("products");
let product = catalog.getElementsByClassName("product-card");

function applyFilter(index) {

    document.getElementsByClassName("search-buttons")[previousIndex].style = "";
    document.getElementsByClassName("search-buttons")[index].style = "background-color: #5e366d; border-color: #b697c9;";

    previousIndex = index;
    
    switch(index) {

        case 0: allThemes(); break;    
        case 1: filterThemes("isDeveloper", "TRUE"); break;
        case 2: filterThemes("isDeveloper", "FALSE"); break;
        case 3: filterThemes("isDark", "TRUE"); break;
        case 4: filterThemes("isDark", "FALSE"); break;
        case 5: filterThemes("isNew", "TRUE"); break;

    }

}

function allThemes() {

    for (i = 0; i < product.length; i++) {
        product[i].style.display = "";
    }

    document.getElementById("search").innerText="";

}

function filterThemes(filter, value) {

    for (i = 0; i < product.length; i++) {

        txtValue = product[i].getAttribute( filter )

        if ( txtValue.toUpperCase().indexOf( value ) > -1 ) {

            product[i].style.display = "";

        } else {

            product[i].style.display = "none";

        }

    }

    document.getElementById("search").textContent="";

}

function searchThemes() {

    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();
    let catalog = document.getElementById("products");
    let product = catalog.getElementsByClassName("product-card");

    for ( i = 0; i < product.length; i++ ) {

        let productHeader = product[i].getElementsByTagName("p");
        let productName = productHeader[0].textContent
        let developerName = productHeader[1].textContent;

        if ( productName.toUpperCase().indexOf( filter ) > -1 || developerName.toUpperCase().indexOf( filter ) > -1 ) {

            product[i].style.display = "";

        } else {

            product[i].style.display = "none";

        }

    }

}