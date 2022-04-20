const apiURL = 'https://bsaleonlinestore.herokuapp.com/';

const HTMLResponse = document.querySelector('#filterSection');
const selectOption = document.createElement('select');
selectOption.setAttribute('id', 'chooseCategory');
selectOption.setAttribute('class', 'chooseCategory');

fetch(`${apiURL}category/`,)
.then((res, rej) => res.json())
.then((category) => {
    category.forEach( cat => {
        let categoryOption = document.createElement('option');
        categoryOption.setAttribute('value', `${cat.name}`);
        categoryOption.appendChild(
            document.createTextNode(`${cat.name}`)
        );
        selectOption.appendChild(categoryOption)
    });

    HTMLResponse.appendChild(selectOption);
})
