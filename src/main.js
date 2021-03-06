import { sliderInit } from "../slider.js";
let categories = document.getElementById("categories")
let userProducts = document.getElementById("user-products")
    fetch("/product-list.json").then(res => res.json())
    .then((data) => {
        const userCategories = data.responses[0][0].params.userCategories
        const products = data.responses[0][0].params.recommendedProducts
        console.log(products);
        getUserCategories(userCategories,products)
        getSizeOzel(products)
        sliderInit()
    })
    function getUserCategories(userCategories,products) {
        userCategories.map(userCategory => {
            const category = document.createElement("li")
            category.className = "category"

            if (userCategory.includes(">")) {
                category.innerHTML = userCategory.split('>')[1]
            } else {
                category.innerHTML = userCategory
            }

            categories.appendChild(category)
            category.addEventListener("click", () => {
                if (userProducts.classList.contains('slick-initialized')) {
                    userProducts.classList.remove('slick-initialized')
                }
                if (userCategory == "Size Özel") {
                    getSizeOzel(products)
                    sliderInit()
                }
                if(userCategory == "Yapı Market & Tamirat > Tamir, Tadilat Gereçleri") {
                    
                    getTamirTadilat(products)
                    sliderInit()
                    
                }
                if(userCategory == "Ev, Dekorasyon, Bahçe > Mobilya") {
                    
                    getMobilya(products)
                    sliderInit()
                }
                if(userCategory == "Kozmetik & Kişisel Bakım > Sağlık, Medikal") {
                    
                    getMedical(products)
                    sliderInit()
                }
                if(userCategory == "Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)") {
                    
                    getLaptop(products)
                    sliderInit()
                }
                if(userCategory == "Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi") {
                    
                    getIsıtmaSogutma(products)
                    sliderInit()
                }
                
            })
        });
        
    }

    function getSizeOzel(products) {
        userProducts.innerHTML = ""
        for (let i = 0; i < products["Size Özel"].length; i++) {
            const productImage = document.createElement("img")
            const productPrice = document.createElement("p")
            const productName = document.createElement("p")
            const button = document.createElement("button")
            const contentProduct = document.createElement("div")
            const freeShipping = document.createElement("li")

            productImage.src = products["Size Özel"][i].image
            productImage.setAttribute("data-lazy", productImage.src)
            productName.innerHTML = products["Size Özel"][i].name
            productName.className = "product-name"
            productPrice.innerHTML = products["Size Özel"][i].priceText
            productPrice.className = "price"
            button.innerHTML = "Sepete Ekle"
            button.className = "add-button"
            contentProduct.className = "category-slider"

            contentProduct.appendChild(productImage)
            contentProduct.appendChild(productName)
            contentProduct.appendChild(productPrice)
            contentProduct.appendChild(freeShipping)
            contentProduct.appendChild(button)
            userProducts.append(contentProduct)

            if (products["Size Özel"][i].params.shippingFee == "FREE") {
                freeShipping.innerHTML = "Ücretsiz Kargo"
            } else {
                freeShipping.style.listStyle = "none"
            }
            
            button.addEventListener("click", () => {
                document.getElementById("popup").style.display = "flex"
                setTimeout(() => {
                    document.getElementById("popup").style.display = "none" 
                }, 1200);
                
            })

        }
    }

    function getTamirTadilat(products) {
        userProducts.innerHTML = ""
        for (let i = 0; i < products["Yapı Market & Tamirat > Tamir, Tadilat Gereçleri"].length; i++) {
            const productImage = document.createElement("img")
            const productPrice = document.createElement("p")
            const productName = document.createElement("p")
            const button = document.createElement("button")
            const freeShipping = document.createElement("li")
            const contentProduct = document.createElement("div")

            productImage.src = products["Yapı Market & Tamirat > Tamir, Tadilat Gereçleri"][i].image
            productImage.setAttribute("data-lazy", productImage.src)
            productName.innerHTML = products["Yapı Market & Tamirat > Tamir, Tadilat Gereçleri"][i].name
            productPrice.innerHTML = products["Yapı Market & Tamirat > Tamir, Tadilat Gereçleri"][i].priceText
            productPrice.className = "price"
            button.innerHTML = "Sepete Ekle"
            button.className = "add-button"
            productName.className = "product-name"
            contentProduct.className = "category-slider"

            contentProduct.appendChild(productImage)
            contentProduct.appendChild(productName)
            contentProduct.appendChild(productPrice)
            contentProduct.appendChild(freeShipping)
            contentProduct.appendChild(button)
            userProducts.append(contentProduct)
            if (products["Yapı Market & Tamirat > Tamir, Tadilat Gereçleri"][i].params.shippingFee == "FREE") {
                freeShipping.innerHTML = "Ücretsiz Kargo"
            } else {
                freeShipping.style.listStyle = "none"
            }

            button.addEventListener("click", () => {
                document.getElementById("popup").style.display = "flex"
                setTimeout(() => {
                    document.getElementById("popup").style.display = "none" 
                }, 1200);
                
            })
        }

        
    }

    function getMobilya(products) {
        userProducts.innerHTML = ""
        for (let i = 0; i < products["Ev, Dekorasyon, Bahçe > Mobilya"].length; i++) {
            const productImage = document.createElement("img")
            const productPrice = document.createElement("p")
            const productName = document.createElement("p")
            const button = document.createElement("button")
            const freeShipping = document.createElement("li")
            const contentProduct = document.createElement("div")

            productImage.src = products["Ev, Dekorasyon, Bahçe > Mobilya"][i].image
            productImage.setAttribute("data-lazy", productImage.src)
            productName.innerHTML = products["Ev, Dekorasyon, Bahçe > Mobilya"][i].name
            productPrice.innerHTML = products["Ev, Dekorasyon, Bahçe > Mobilya"][i].priceText
            productPrice.className = "price"
            button.innerHTML = "Sepete Ekle"
            button.className = "add-button"
            contentProduct.className = "category-slider"
            productName.className = "product-name"

            contentProduct.appendChild(productImage)
            contentProduct.appendChild(productName)
            contentProduct.appendChild(productPrice)
            contentProduct.appendChild(freeShipping)
            contentProduct.appendChild(button)
            userProducts.append(contentProduct)
            if (products["Ev, Dekorasyon, Bahçe > Mobilya"][i].params.shippingFee == "FREE") {
                freeShipping.innerHTML = "Ücretsiz Kargo"
            } else {
                freeShipping.style.listStyle = "none"
            }

            button.addEventListener("click", () => {
                document.getElementById("popup").style.display = "flex"
                setTimeout(() => {
                    document.getElementById("popup").style.display = "none" 
                }, 1200);
                
            })

        }

        
    }

    function getMedical(products) {
        userProducts.innerHTML = ""
        for (let i = 0; i < products["Kozmetik & Kişisel Bakım > Sağlık, Medikal"].length; i++) {
            const productImage = document.createElement("img")
            const productPrice = document.createElement("p")
            const productName = document.createElement("p")
            const button = document.createElement("button")
            const freeShipping = document.createElement("li")
            const contentProduct = document.createElement("div")

            productImage.src = products["Kozmetik & Kişisel Bakım > Sağlık, Medikal"][i].image
            productImage.setAttribute("data-lazy", productImage.src)
            productName.innerHTML = products["Kozmetik & Kişisel Bakım > Sağlık, Medikal"][i].name
            productPrice.innerHTML = products["Kozmetik & Kişisel Bakım > Sağlık, Medikal"][i].priceText
            productPrice.className = "price"
            button.innerHTML = "Sepete Ekle"
            button.className = "add-button"
            contentProduct.className = "category-slider"
            productName.className = "product-name"

            contentProduct.appendChild(productImage)
            contentProduct.appendChild(productName)
            contentProduct.appendChild(productPrice)
            contentProduct.appendChild(freeShipping)
            contentProduct.appendChild(button)
            userProducts.append(contentProduct)

            if (products["Kozmetik & Kişisel Bakım > Sağlık, Medikal"][i].params.shippingFee == "FREE") {
                freeShipping.innerHTML = "Ücretsiz Kargo"
            } else {
                freeShipping.style.listStyle = "none"
            }
            
            button.addEventListener("click", () => {
                document.getElementById("popup").style.display = "flex"
                setTimeout(() => {
                    document.getElementById("popup").style.display = "none" 
                }, 1200);
                
            })
        }

        
    }

    function getLaptop(products) {
        userProducts.innerHTML = ""
        for (let i = 0; i < products["Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"].length; i++) {
            const productImage = document.createElement("img")
            const productPrice = document.createElement("p")
            const productName = document.createElement("p")
            const button = document.createElement("button")
            const freeShipping = document.createElement("li")
            const contentProduct = document.createElement("div")

            productImage.src = products["Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"][i].image
            productImage.setAttribute("data-lazy", productImage.src)
            productName.innerHTML = products["Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"][i].name
            productPrice.innerHTML = products["Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"][i].priceText
            productPrice.className = "price"
            button.innerHTML = "Sepete Ekle"
            button.className = "add-button"
            contentProduct.className = "category-slider"
            productName.className = "product-name"

            contentProduct.appendChild(productImage)
            contentProduct.appendChild(productName)
            contentProduct.appendChild(productPrice)
            contentProduct.appendChild(freeShipping)
            contentProduct.appendChild(button)
            userProducts.append(contentProduct)

            if (products["Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"][i].params.shippingFee == "FREE") {
                freeShipping.innerHTML = "Ücretsiz Kargo"
            }  else {
                freeShipping.style.visibility = "hidden"
            }
            
            button.addEventListener("click", () => {
                document.getElementById("popup").style.display = "flex"
                setTimeout(() => {
                    document.getElementById("popup").style.display = "none" 
                }, 1200);
                
            })
        }

        
    }

    function getIsıtmaSogutma(products) {
        userProducts.innerHTML = ""
        for (let i = 0; i < products["Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"].length; i++) {
            const productImage = document.createElement("img")
            const productPrice = document.createElement("p")
            const productName = document.createElement("p")
            const button = document.createElement("button")
            const freeShipping = document.createElement("li")
            const contentProduct = document.createElement("div")

            productImage.src = products["Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"][i].image
            productImage.setAttribute("data-lazy", productImage.src)
            productName.innerHTML = products["Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"][i].name
            productPrice.innerHTML = products["Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"][i].priceText
            productPrice.className = "price"
            button.innerHTML = "Sepete Ekle"
            button.className = "add-button"
            contentProduct.className = "category-slider"
            productName.className = "product-name"

            contentProduct.appendChild(productImage)
            contentProduct.appendChild(productName)
            contentProduct.appendChild(productPrice)
            contentProduct.appendChild(freeShipping)
            contentProduct.appendChild(button)
            userProducts.append(contentProduct)

            if (products["Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"][i].params.shippingFee == "FREE") {
                freeShipping.innerHTML = "Ücretsiz Kargo"
            }  else {
                freeShipping.style.listStyle = "none"
            } 
            
            button.addEventListener("click", () => {
                document.getElementById("popup").style.display = "flex"
                setTimeout(() => {
                    document.getElementById("popup").style.display = "none" 
                }, 1200);
                
            })
        }

        
    }


    