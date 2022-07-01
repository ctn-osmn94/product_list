let categories = document.getElementById("categories")
let userProducts = document.getElementById("user-products")
    fetch("/product-list.json").then(res => res.json())
    .then((data) => {
        const userCategories = data.responses[0][0].params.userCategories
        const products = data.responses[0][0].params.recommendedProducts
        console.log(products);
        getUserCategories(userCategories,products)
        getSizeOzel(products)
    })
    let count = 0
    function getUserCategories(userCategories,products) {
        count++
        userCategories.map(userCategori => {
            const categori = document.createElement("li")
            categori.innerHTML = userCategori
            categories.appendChild(categori)
            categori.addEventListener("click", () => {
                if (userCategori == "Size Özel") {
                    getSizeOzel(products)
                }
                if(userCategori == "Yapı Market & Tamirat > Tamir, Tadilat Gereçleri") {
                    getTamirTadilat(products)
                }
                if(userCategori == "Ev, Dekorasyon, Bahçe > Mobilya") {
                    getMobilya(products)
                }
                if(userCategori == "Kozmetik & Kişisel Bakım > Sağlık, Medikal") {
                    getMedical(products)
                }
                if(userCategori == "Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)") {
                    getLaptop(products)
                }
                if(userCategori == "Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi") {
                    getStuff(products)
                }
            })
        });
        
    }

        

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
            productImage.className = "w-full"
            
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

    function getMobilya(products) {
        userProducts.innerHTML = ""
        for (let i = 0; i < products["Ev, Dekorasyon, Bahçe > Mobilya"].length; i++) {
            const productImage = document.createElement("img")
            const productPrice = document.createElement("li")
            const productName = document.createElement("li")
            const contentProduct = document.createElement("ul")
            productImage.src = products["Ev, Dekorasyon, Bahçe > Mobilya"][i].image
            productName.innerHTML = products["Ev, Dekorasyon, Bahçe > Mobilya"][i].name
            productPrice.innerHTML = products["Ev, Dekorasyon, Bahçe > Mobilya"][i].priceText
            contentProduct.appendChild(productImage)
            contentProduct.appendChild(productName)
            contentProduct.appendChild(productPrice)
            userProducts.append(contentProduct)
                     
        }
    }

    function getMedical(products) {
        userProducts.innerHTML = ""
        for (let i = 0; i < products["Kozmetik & Kişisel Bakım > Sağlık, Medikal"].length; i++) {
            const productImage = document.createElement("img")
            const productPrice = document.createElement("li")
            const productName = document.createElement("li")
            const contentProduct = document.createElement("ul")
            productImage.src = products["Kozmetik & Kişisel Bakım > Sağlık, Medikal"][i].image
            productName.innerHTML = products["Kozmetik & Kişisel Bakım > Sağlık, Medikal"][i].name
            productPrice.innerHTML = products["Kozmetik & Kişisel Bakım > Sağlık, Medikal"][i].priceText
            contentProduct.appendChild(productImage)
            contentProduct.appendChild(productName)
            contentProduct.appendChild(productPrice)
            userProducts.append(contentProduct)
                     
        }
    }

    function getLaptop(products) {
        userProducts.innerHTML = ""
        for (let i = 0; i < products["Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"].length; i++) {
            const productImage = document.createElement("img")
            const productPrice = document.createElement("li")
            const productName = document.createElement("li")
            const contentProduct = document.createElement("ul")
            productImage.src = products["Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"][i].image
            productName.innerHTML = products["Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"][i].name
            productPrice.innerHTML = products["Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"][i].priceText
            contentProduct.appendChild(productImage)
            contentProduct.appendChild(productName)
            contentProduct.appendChild(productPrice)
            userProducts.append(contentProduct)
                     
        }
    }

    function getStuff(products) {
        userProducts.innerHTML = ""
        for (let i = 0; i < products["Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"].length; i++) {
            const productImage = document.createElement("img")
            const productPrice = document.createElement("li")
            const productName = document.createElement("li")
            const contentProduct = document.createElement("ul")
            productImage.src = products["Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"][i].image
            productName.innerHTML = products["Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"][i].name
            productPrice.innerHTML = products["Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"][i].priceText
            contentProduct.appendChild(productImage)
            contentProduct.appendChild(productName)
            contentProduct.appendChild(productPrice)
            userProducts.append(contentProduct)
                     
        }
    }



