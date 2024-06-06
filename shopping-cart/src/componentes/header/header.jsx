import {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";

import SearchData from '../../api/SearchData.js';
import AppContext from '../../context/AppContext';

import './header.css'

const Header = () => {
    const [search, setSearch] = useState("");
    const { setProducts, setLoading } = useContext(AppContext);
  
  
    const handleSearch = async (e) => {
      e.preventDefault();
      setLoading(true);
      const products = await SearchData(search);
      
      setProducts(products);
      setLoading(false);
      setSearch("");
    };



    return(
        <header>
            <h1>Header</h1>
            <nav>
                <Link to="/" className='link'>home</Link>
            </nav>
            <form className='searchInput' onSubmit={(e)=>handleSearch(e)}>
                <button type="submit" className='buttonSearch'>
                        <IoSearchSharp className='iconSearch'/>
                </button> 

                <label htmlFor="search">            
                    <input type="text" id='search' placeholder="buscar produtos" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </label>

            </form>
            <nav>
                <Link to="/favoritos" className='link'><IoIosHeart className='iconHeart'/></Link>
                <Link to="/carrinho" className='link'><IoCartSharp className='iconCart'/></Link>
            </nav>
        </header>
    )
}

export default Header;