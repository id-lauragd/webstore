const natureProduct =[

{
    product: 001,
    name:  `lavander`,
    price: `$22`,
    quantity: 5,
    description: `Hand Cream`,

},{
    product: 002,
    name:  `sage`,
    price: `$22`,
    quantity: 3,
    description: `Hand Cream`,


},{
    product: 003,
    name:  `lemon`,
    price: `$22`,
    quantity: 7,
    description: `Hand Cream`,

},{
    product: 004,
    name:  `lavander`,
    price: `$22`,
    quantity: 8,
    description: `mint`,

}

]

funtion getnatureProductsAsHtmlString(products); {

    return `<section id="product" class="product">
        <img class="productImg" src="img/lavander.png" >
        <h2 id="name">Lavander</h2>
        <ul>
        <li id="quantity">number of products</li>
        <li id="description">This is hand soap.</li>
        <li id="price">$20</li>
        </ul>
   
        </section>`;

    

}


funtion rendernatureProduct(arrToRender); {

const arrOfHtmlnatureProduct = arrToRender.map(getnatureProductsAsHtmlString);
const arrOfHtmlnatureProduct = arrOfHtmlnatureProduct.join(`/n`);
document.getElementById(`natureProduct`).innerHTML = strOfHtmlString;
}
