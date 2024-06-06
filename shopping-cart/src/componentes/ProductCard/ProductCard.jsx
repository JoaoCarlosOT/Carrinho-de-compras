import {} from "react"
import propTypes from "prop-types"
import formatCurrency from '../../utils/formatCurrency';

import "./ProductCard.css"

const ProductCard = ({data}) => {
    const {title, thumbnail, price} = data

    return(
        <div className="productItem">
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />
            <h2>{formatCurrency(price, 'BRL')}</h2>
            <p>{title}</p>
        </div>
    )
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({}),
  }.isRequired;