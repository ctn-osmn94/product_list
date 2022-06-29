let categories = document.getElementById("categories")
let userProducts = document.getElementById("user-products")
    fetch("/product-list.json").then(res => res.json())
    .then((data) => {
        const userCategories = data.responses[0][0].params.userCategories
        const products = data.responses[0][0].params.recommendedProducts
        getUserCategories(userCategories)
        getProducts(products)
    })

    function getUserCategories(userCategories,products) {
        console.log(userCategories);
        for (let i = 0; i < userCategories.length; i++) {
            const categori = document.createElement("li")
            categori.className = "hover:bg-blue-100  p-3 cursor-pointer"
            categori.innerHTML = userCategories[i]
            categories.appendChild(categori) 
            categori.addEventListener("click", () => {
                productImage.className = "flex"
            })
         }
    }

    let productImage = document.getElementById("product-image")
    function getProducts(products) {
        for (let i = 0; i < products["Size Özel"].length; i++) {
            console.log(products["Size Özel"][i]);
            productImage.src = products["Size Özel"][i].image
        }
    }



