import {} from 'react'
import { Link } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";

import './header.css'

const Header = () => {

    return(
        <header>
            <h1>Header</h1>
            <nav>
                <Link to="/" className='link'>home</Link>
                <Link to="/favoritos" className='link'>Favoritos</Link>
            </nav>
            <div className='searchInput'>
                <label htmlFor="search">
                    <IoSearchSharp className='iconSearch'/>
                    <input type="text" id='search' placeholder="pesquise"/>
                </label>
            </div>
        </header>
    )
}

export default Header;