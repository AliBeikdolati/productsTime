const main = document.getElementById('root');

function renderProducts(products) {
  main.innerHTML = products
    .map(
      product => `<div class="product" data-product-id="${product.id}">
                    <h1>${product.title}</h1>
                    <p class="price">${product.price} تومان</p>
                    <p class="date">${product.date}</p>
                  </div>`
    )
    .join('');
}

const products = [
  {
    id: 1,
    title: 'محصول اول',
    price: '32000',
    date: '1596902113'
  },
  {
    id: 2,
    title: 'محصول دوم',
    price: '46000',
    date: '1555891200'
  },
  {
    id: 3,
    title: 'محصول سوم',
    price: '20000',
    date: '1515369600'
  },
  {
    id: 4,
    title: 'محصول چهارم',
    price: '88000',
    date: '1509580800'
  },
  {
    id: 5,
    title: 'محصول پنجم',
    price: '11000',
    date: '1477267200'
  }
];

renderProducts(products);

document
  .getElementById('changeProducts')
  .addEventListener('click', changeProducts);

function changeProducts() {
  // your code here...
  for (let i = 0; i < products.length ; i++){
    products[i].price = (parseInt(products[i].price) / 2)
    // products[i].date = products[i].date.toLocaleString()
    let d = new Date()
    d.setTime(parseInt(products[i].date) * 1000)
    d = d.toLocaleString()
    t = d.split(',')
    products[i].date = t[0]
  }
  renderProducts(products)
}
