import {useEffect, useContext} from 'react'
import Loading from "../../componentes/loading/loading"
import SearchData from '../../api/SearchData';
import ProductCard from "../../componentes/ProductCard/ProductCard"

import AppContext from '../../context/AppContext';

import "./home.css"


const home = () => {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);



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