import { useEffect, useState } from "react";

function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Assuming the JSON data is in a local file named products.json
        // You can also fetch this data from an API
        const fetchProducts = async () => {
          const response = await fetch('.../redux-toolkit/package.json');
          const data = await response.json();
          setProducts(data);
          console.log(data);
        };
        fetchProducts();
      }, []);
  return (
    <div>
      
    </div>
  )
}

export default Product
