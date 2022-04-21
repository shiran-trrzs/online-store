const apiURL = 'https://bsaleonlinestore.herokuapp.com/';

const categorySection = document.querySelector('#filterSection');
const selectOption = document.createElement('select');
selectOption.setAttribute('id', 'chooseCategory');
selectOption.setAttribute('class', 'chooseCategory');

const productsSection = document.querySelector('#showProducts');

fetch(`${apiURL}category`)
.then((res, rej) => res.json())
.then((category) => {
    category.forEach( cat => {
        let categoryOption = document.createElement('option');
        categoryOption.setAttribute('value', `${cat.id}`);
        categoryOption.innerHTML = cat.name;
        selectOption.appendChild(categoryOption)
    });

    categorySection.appendChild(selectOption);
})

function showAllProducts() {
    fetch(`${apiURL}product`)
    .then((res, rej) => res.json())
    .then((product) => {
        tlpProducts(product)
    })
}

function tlpProducts(product) {

    showProducts.innerHTML= '';

    product.forEach( prod => {
        const productCardDiv = document.createElement('div');
        productCardDiv.setAttribute('class', 'prodDiv');

        const prodDiv = document.createElement('div');
        prodDiv.setAttribute('class', 'prodImg')
        const productImg = document.createElement('img');
        productImg.src = prod.url_image;

        const prodDetailDiv = document.createElement('div');
        prodDetailDiv.setAttribute('class', 'textDetProd')
        const productName = document.createElement('h4');
        const productPrice = document.createElement('p');
        productName.innerHTML = prod.name;
        productPrice.innerHTML = prod.price + ' pesos';

        productCardDiv.appendChild(prodDiv);
        prodDiv.appendChild(productImg);
        productCardDiv.appendChild(prodDetailDiv);
        prodDetailDiv.appendChild(productName);
        prodDetailDiv.appendChild(productPrice);
        productsSection.appendChild(productCardDiv);
    });
}

showAllProducts()

selectOption.addEventListener('change', () => {
    const selectCategory = selectOption.value;
    fetch(`${apiURL}product/${selectCategory}`)
    .then((res, rej) => res.json())
    .then((product) => {
        tlpProducts(product);
    })
})

const reload= document.querySelector('#refresh');
reload.addEventListener('click', ()=>{
    showAllProducts();
    selectOption.selectedIndex  = 0;
});