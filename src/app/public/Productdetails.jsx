import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Productdetails = () => {

  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {

    const getProduct = async () => {
      try {
        const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products/${id}`)
        setProduct(res.data);
        console.log(res);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProduct();
  }, []);

  return (
    <div className="productdetails">
      <Header />
      <main className="main-productdetails">
        <section className="backgroundsbild">
          <img src="\src\assets\images\backgroundbild1.webp" alt="backgroundbild" />
        </section>
        <section className="shop-products">
          <div className="container-products">
            <div className="images-product">
              <div className="image">
                <img className="stora-bilden" src={product?.images[0]} alt={product?.name} />
              </div>
              <div className="images">
                <img src={product?.images[0]} alt={product?.name} />
                <img src={product?.images[1]} alt={product?.name} />
                <img src={product?.images[2]} alt={product?.name} />
                <img src={product?.images[3]} alt={product?.name} />
              </div>
            </div>
            <div className="pruduct">
              <div className="product-title">
                <h2 className="product-info">{product?.name}</h2>
                <p className="product-mera-info">{product?.description}</p>
              </div>
              <br />
              <div className="reviews">
                <div className="reviews-detials" >
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <p className="price-product-info">{product?.price}:-</p>
                  </div>
                </div>
                <div>
                  <p className="reviews-number" >16 Reviews</p>
                </div>
              </div>
              <div className="varukorg">
                <div className="antal-product">
                  <button className="minska-product">-</button>
                  <p className="antal-varor">2</p>
                  <button className="öka-antal-product">+</button>
                </div>
                <div>
                  <button className="add-to-cart">Add to cart <i className="fa-solid fa-cart-shopping"></i> </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="descriptions" >
          <div className="descriptions-main">
            <h2 className="description-title">
              {product?.name}
            </h2>
          </div>
          <div className="description-container">
            <div>
              <p className="description-info"  >
                {product?.description}
              </p>
            </div>
            <div className="description-image">
              <img src={product?.images[0]} alt={product?.name}  />
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}






