let categories = document.getElementById("categories")
let userProducts = document.getElementById("user-products")
    fetch("/product-list.json").then(res => res.json())
    .then((data) => {
        const userCategories = data.responses[0][0].params.userCategories
        const products = data.responses[0][0].params.recommendedProducts
        console.log(products);
        getUserCategories(userCategories,products)
    })
    let count = 0
    function getUserCategories(userCategories,products) {
        count++
        userCategories.map(userCategori => {
            const categori = document.createElement("li")
            categori.className = "hover:bg-blue-100  p-3 cursor-pointer"
            categori.innerHTML = userCategori
            categories.appendChild(categori)
            categori.addEventListener("click", () => {
                if (userCategori == "Size Özel") {
                    getSizeOzel(products)
                }
                if(userCategori == "Yapı Market & Tamirat > Tamir, Tadilat Gereçleri") {
                    getTamirTadilat(products)
                }
                
            })
        });
        
    }

    let contentProduct = document.getElementById("content-product")

    function getSizeOzel(products) {
        userProducts.innerHTML = ""
        for (let i = 0; i < products["Size Özel"].length; i++) {
            const productImage = document.createElement("img")
            const productPrice = document.createElement("li")
            const productName = document.createElement("li")
            const contentProduct = document.createElement("ul")
            productImage.src = products["Size Özel"][i].image
            productName.innerHTML = products["Size Özel"][i].name
            productPrice.innerHTML = products["Size Özel"][i].priceText
            contentProduct.appendChild(productImage)
            contentProduct.appendChild(productName)
            contentProduct.appendChild(productPrice)
            userProducts.append(contentProduct)
        }

    }

    function getTamirTadilat(products) {
        userProducts.innerHTML = ""
        for (let i = 0; i < products["Yapı Market & Tamirat > Tamir, Tadilat Gereçleri"].length; i++) {
            const productImage = document.createElement("img")
            const productPrice = document.createElement("li")
            const productName = document.createElement("li")
            const contentProduct = document.createElement("ul")
            productImage.src = products["Yapı Market & Tamirat > Tamir, Tadilat Gereçleri"][i].image
            productName.innerHTML = products["Yapı Market & Tamirat > Tamir, Tadilat Gereçleri"][i].name
            productPrice.innerHTML = products["Yapı Market & Tamirat > Tamir, Tadilat Gereçleri"][i].priceText
            contentProduct.appendChild(productImage)
            contentProduct.appendChild(productName)
            contentProduct.appendChild(productPrice)
            userProducts.append(contentProduct)
                     
        }
    }


