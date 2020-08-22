import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_img"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
        />
        <div className="home_row">
        <Product
           id="12345"
           title="Sony LCD TV with Android Fetures"
           price={450.6}
           rating={5}
           image="http://www.pngall.com/wp-content/uploads/5/LED-TV-PNG-Image.png"
        />

        <Product
           id="12345"
           title="Amazon Echo"
           price={300.6}
           rating={4}
           image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        </div>


    <div className="home_row">

    <Product
           id="12345"
           title="Smart Watch"
           price={45.6}
           rating={5}
           image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />


        <Product
           id="12345"
           title="Sony LCD TV with Android Fetures"
           price={45.6}
           rating={5}
           image="http://www.pngall.com/wp-content/uploads/5/LED-TV-PNG-Image.png"
        />

        <Product
           id="12345"
           title="Sony LCD TV with Android Fetures"
           price={45.6}
           rating={5}
           image="http://www.pngall.com/wp-content/uploads/5/LED-TV-PNG-Image.png"
        />

        </div>

        <div className="home_row">
        <Product
           id="12345"
           title="Sony LCD TV with Android Fetures"
           price={450.6}
           rating={5}
           image="http://www.pngall.com/wp-content/uploads/5/LED-TV-PNG-Image.png"
        />

        <Product
           id="12345"
           title="Amazon Echo"
           price={300.6}
           rating={4}
           image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        </div>

        </div>
    )
}

export default Home
