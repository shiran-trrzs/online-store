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
        categoryOption.setAttribute('value', `${cat.name}`);
        categoryOption.innerHTML = cat.name;
        selectOption.appendChild(categoryOption)
    });

    categorySection.appendChild(selectOption);
})

fetch(`${apiURL}product`)
.then((res, rej) => res.json())
.then((product) => {
    console.log(product);
    product.forEach( prod => {
        const productDiv = document.createElement('div');
        let {url_image} = prod;
        let productImg = document.createElement('img');
        productImg.src = url_image;
        productDiv.appendChild(productImg);
        productsSection.appendChild(productDiv);
    });
    
})