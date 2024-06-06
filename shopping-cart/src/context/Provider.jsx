import React, {useState} from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';

const Provider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
  
    const value = {
      products, 
      setProducts,
      loading, 
      setLoading,
    };

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: PropTypes.any,
  }.isRequired;