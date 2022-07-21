import { Product } from './components/Product'
function App() {
  const product_arr = [
    {
      product_name:'Laptop',
      product_image:"https://m.media-amazon.com/images/I/718ETwvLVOL._SL1500_.jpg",
      product_price:"Price: 68000/-"
    },
    {
      product_name:'Shoes',
      product_image:"https://cconnect.s3.amazonaws.com/wp-content/uploads/2020/09/Evolution-of-the-Nike-Air-Jordan-Shoe-Series-Nike-Air-Jordan-35-XXXV-thumb-950.jpg",
      product_price:"Price: 17000/-"
    },
    {
      product_name:'Watch',
      product_image:"https://m.media-amazon.com/images/I/61ZQAd1GNqL._UX342_.jpg",
      product_price:"Price: 6400/-"
    }
  ]

  return (
    <div className="App">
      <h1>List of Products</h1>
      <Product pname={product_arr[0].product_name} pimage={product_arr[0].product_image} price={product_arr[0].product_price}/>
      <Product pname={product_arr[1].product_name} pimage={product_arr[1].product_image} price={product_arr[1].product_price}/>
      <Product pname={product_arr[2].product_name} pimage={product_arr[2].product_image} price={product_arr[2].product_price}/>
    </div>
  );
}

export default App;
