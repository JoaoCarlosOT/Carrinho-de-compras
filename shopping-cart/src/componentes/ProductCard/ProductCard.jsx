import {} from "react"
import propTypes from "prop-types"

import "./ProductCard.css"

const ProductCard = ({data}) => {
    const {title, thumbnail, price} = data

    return(
        <div className="productItem">
            <img src={thumbnail} alt="" />
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({}),
  }.isRequired;