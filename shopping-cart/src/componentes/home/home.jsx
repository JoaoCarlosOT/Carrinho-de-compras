import {useEffect, useState} from 'react'
import Loading from "../loading/loading"
import SearchData from '../../api/SearchData';
import ProductCard from "../ProductCard/ProductCard"

import "./home.css"


const home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
      setLoading(true);

      SearchData('iphone').then((response) => {
        setProducts(response);
        setLoading(false);
      });

    }, []);

    if(loading){
        return <Loading/>
    }

    return (
        <div className='products'>
    {
      products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))
    }
       </div>
    )
}


export default home