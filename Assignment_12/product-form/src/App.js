import { Product } from './components/product/Product';
import ProductForm from './components/product-form/ProductForm'
import {useState} from 'react';

function App() {
  const [products,setProduct] =useState([
    {
      product_name:"Air Jordan 1 Mid SE.",
      product_image:"https://static.nike.com/a/images/t_default/53f9e09f-7524-44c2-ba25-b4b85b8f70c8/air-jordan-1-mid-se-shoe-9LWSDx.png",
      product_price:"23,483",
    },
    {
      product_name:"Air Jordan 1 Mid red/black",
      product_image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/385588b7-b56c-4814-8d6c-b373e5530c5b/air-jordan-1-mid-shoes-BpARGV.png",
      product_price:"10,295",
    },
    {
      product_name:"Air Jordan 1 Zoom Cmft",
      product_image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bd5c9b7d-b289-4e4f-a00d-8420438bff49/air-jordan-1-zoom-cmft-shoes-mDxHSk.png",
      product_price:"12,495",
    },
  ]);
  const addNewProductHandler=(product)=>{
    const productObj = {
      product_name:product.productName,
      product_price:product.productPrice,
      product_image:product.productImage
    }
    setProduct([...products,productObj]);
  }
  return (
    <div className="App">

      <ProductForm onProductAdded ={addNewProductHandler}/>
      <h1>List of Products</h1>
      {products.map((product,index) =>
      <Product key = {index} pname = {product.product_name} 
      pimage = {product.product_image} 
      pprice = {'₹'+product.product_price}/>
    )}
    </div>
  )
}
export default App;
