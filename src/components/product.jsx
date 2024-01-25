import { Link } from "react-router-dom"

export const Product = ({product}) => {
  
  
    return (
 
          <div className="kategori-image" key={product._id}>
            <Link to={`/productdetails/${product._id}`}>
              <img className="laptop-image" src={product.images[0]} alt={product.name} />
            </Link>
            <p className="kategori-name">{product.name}</p>
            <p className="kategori-pris">{product.price}:-</p>
          </div>

  )
}

