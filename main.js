const createBtn = document.querySelector("#create-btn");
const nameInput = document.querySelector("#nameInput");
const priceInput = document.querySelector("#priceInput");
const tableBody = document.querySelector("#table tbody");
const clearBtn = document.querySelector("#clear-btn");

createBtn.onclick = () => {
    let prod = new Product(nameInput.value, priceInput.value);
    console.log(prod);

    AddProductToTable(prod);
};

clearBtn.onclick = () => {
    tableBody.innerHTML = "";
}

function AddProductToTable(prod) {
    tableBody.insertAdjacentHTML("beforeend", `<tr>
    <th scope="row">${prod.id}</th>
    <td>${prod.name}</td>
    <td>${prod.price}</td>
</tr>`);
}

class Product {
    static count = 2;

    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = ++Product.count;
    }
}