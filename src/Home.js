import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Sravanthi/MegaSalaryDays_Jan21/Salary-days-Jan-2021-herotator_1500x600._CB412648388_.jpg"
                 alt=""/>
            </div>
            <div className="home_row">
                <Product 
                id="564"
                title="HP DeskJet 2332 All-in-One Inkjet Colour Printer"
                image="https://images-eu.ssl-images-amazon.com/images/I/31mK-PJxU9L._AC_SX184_.jpg"
                price={90.80}
                rating={4}
                />
                <Product 
                id="123"
                title="Timex Analog Blue Dial Men's Watch-TW00ZR262E"
                image="https://images-eu.ssl-images-amazon.com/images/I/41dX4guUACL._AC_UL260_SR200,260_FMwebp_QL70_.jpg"
                price={109.67}
                rating={4}
                /> 
                <Product 
                id="453"
                title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
                price={15.90}
                image="https://images-eu.ssl-images-amazon.com/images/I/31peh6pTVKL._AC_US160_FMwebp_QL70_.jpg"
                rating={4}
                />
            </div>
            <div className="home_row">
                <Product 
                id="897"
                title="Western Digital WD 4TB My Passport Portable External Hard Drive, Black - with Automatic Backup, 256Bit AES Hardware Encryption & Software Protection"
                image="https://images-eu.ssl-images-amazon.com/images/I/31q1k3wRP1L._AC_SX184_.jpg"
                price={231.80}
                rating={5}
                />
                <Product 
                id="245"
                title="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)"
                price={30.33}
                image="https://m.media-amazon.com/images/I/9138VXjBfPL._AC_UY218_.jpg"
                rating={5}
                />
                <Product 
                id="456"
                title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case + Digitek DTR 550LW Lightweight Tripod + Kodak 58mm Filter"
                image="https://images-eu.ssl-images-amazon.com/images/I/51S3hmuGnzL._AC_US160_FMwebp_QL70_.jpg"
                price={997.08}
                rating={4}
                />
            </div>
            <div className="home_row">
                <Product 
                id="432"
                title="Dell G3 3500 Gaming Laptop 15.6-inch FHD 120 Hz Display (10th Gen Core i5-10300H/8GB/1TB + 256GB SSD/Win 10/4GB NVIDIA1650 Ti Graphics/Eclipse Black) D560253HIN9BE"
                image="https://m.media-amazon.com/images/I/61s0UA4pmVL._AC_UY218_.jpg"
                price={943.76}
                rating={4}
                /> <Product 
                id="123"
                title="Timex Analog Blue Dial Men's Watch-TW00ZR262E"
                image="https://images-eu.ssl-images-amazon.com/images/I/41dX4guUACL._AC_UL260_SR200,260_FMwebp_QL70_.jpg"
                price={195.87}
                rating={4}
                />   
            </div>
        </div>
    );
}
export default Home
