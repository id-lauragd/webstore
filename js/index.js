const product =[

{
    name:  `Lavander`,
    description: `Hand Cream`,
    stock: 5,
    price: `$21`,
    img: `img/lavander.png`

},{
    name:  `Sage`,
    description: `Hand Cream`,
    stock: 5,
    price: `$22`,
    img: `img/sage.png`


},{ 
    name:  `Lemon`,
    description: `Hand Cream`,
    stock: 6,
    price: `$20`,
    img: `img/lemon.png`

},{

    name:  `Rose`,
    description: `mint`,
    stock: 9,
    price: `$23`,
    img: `img/rose.png`

}

]

function getproductAsHtmlString(product) {

return `<article class="product">
    <img class="productImg" src="${product.img}" alt= "lavander ${product.name}" >
    <div class = "productInfo">
        <h1 ${product.name}</h1>
        <p> ${product.description}</p>
        <p>${product.stock}</p>
        <p> ${product.price}</p>  
    </div>  
 </article>`;



}



function renderproduct(arrToRender) {
    const arrOfHtmlproduct = arrToRender.map(getproductAsHtmlString)
    const strOfHtmlproduct = arrOfHtmlproduct.join('\n')
    document.getElementById('product').innerHTML = strOfHtmlproduct;
}

renderproduct (product);
document.getElementById (``).addEventListener (``, toggleproduct)