
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Product } from "../../components/Product";



export const Homepage = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {

        const getProducts = async () => {
          try {
            const res = await axios.get('https://js2-ecommerce-api.vercel.app/api/products')
            setProducts(res.data);
            console.log(res)

          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };

        getProducts();
      }, []);


      


    return (
        <div className="homepage">
      <Header />
      <main className="main-homepage">

        <section className="main-section">
          <div className="our-goods">
            <p className="welcome-to-sidan">WELLCOME TO BMARKETO SHOP</p>
            <h2 className="bra-priser">A collection of valuable computers and electronics at good prices</h2>
            <button className="shop-now" > SHOP NOW </button>
          </div>
          <div>
            <img className="backgroundbild"  src="src\assets\images\backgroundbild.webp" alt="backgroundbild" />
          </div>
        </section>

        <section className="kategori">
          <div className="kategori-container">
            <div className="collections">
              <h1 className="collections-title">Best Collection</h1>
              <nav className="collections-form">
                <a href="./https://www.komplett.se/category/21064/mobil-klockor/mobiltelefoner">Mobile /</a>
                <a href="./https://www.komplett.se/category/10011/dator-surfplatta/datorer-barbara/laptop">Laptop /</a>
                <a href="./https://www.komplett.se/category/730/hem-hushaall/koksapparater">Electronic /</a>
              </nav>
            </div>
            <div className="kategori-images">
              {products.map((product) => (
                <Product key={product._id} product={product}/>
              ))}
            </div>
            <div className="load-more">
              <button className="btn ">LOAD MORE</button>
            </div>
          </div>
        </section>

        <section className="discounts">
            <div className="discount">
                <div className="discounts-info">
                    <img className="discount-image" src="src\assets\images\HP-Chromebook.webp" alt="HP-Chromebook" />
                    <p className="kategori-name" >HP Chromebook x360</p>
                    <p className="kategori-pris">5 290:-</p>
                </div>
                <div className="discounts-sale">
                    <p className="title-discount">UP TO SELL</p>
                    <h1 className="percent-discount">50% OFF</h1>
                    <h2 className="title2-discount">Get The Best Price</h2>
                    <p className="rubrik-discount">
                    Get the best daily offer et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea taki
                    </p>
                    <a href="./" className="discover-more">Discover More</a>
                </div>
                <div className="discounts-info">
                    <img className="discount-image" src="src\assets\images\Samsung-65.webp" alt="Samsung-65" />
                    <p className="kategori-name" >Samsung 65" Q70 QLED</p>
                    <p className="kategori-pris">9 990:-</p>
                </div>
            </div>
        </section>

        <section className="newsletters">
                <div className="newsletter-background">
                    <div className="email-newsletter">
                       <input className="input-newsletter" placeholder="Enter your mail here" type="text" />
                       <button className="subscripe-newsletter" >SUBSCRIPE FOR NEWSLETTER</button>
                    </div>
                </div>
        </section>
        </main>
        <Footer/>
    </div>
  )
}







