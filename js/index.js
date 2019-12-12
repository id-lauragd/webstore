const product =[

{
    name:  `lavander`,
    description: `Hand Cream`,
    stock: 5,
    price: `$22`,

},{
    name:  `Sage`,
    description: `Hand Cream`,
    stock: 5,
    price: `$22`,


},{ 
    name:  `Lemon`,
    description: `Hand Cream`,
    stock: 6,
    price: `$22`,

},{

    name:  `Rose`,
    description: `mint`,
    stock: 9,
    price: `$22`,

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

function switchLayout() {
    document.getElementById('product').classList.toggle('');
  }


  function renderproduct(arr) {
    const arrOfHtml = arr.map(getCourseAsHtmlString)
    const strOfHtml = arrOfHtml.join('\n')
    document.getElementById('courses').innerHTML = strOfHtml;
}

