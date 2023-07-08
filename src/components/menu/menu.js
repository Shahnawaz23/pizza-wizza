import React from "react";
import "./menu.css";
import images from "../images/schezwan-margherita.jpg";
import mazedarMakhniPaneer from '../images/mazedar-makhni-paneer.jpg';
import americanCheesy from '../images/awesome-american-cheesy.jpg'
import randooriVeggie from '../images/ultimate-tandoori-veggie.jpg'
import maxicanFiesta from '../images/mexican-fiesta.jpg'


function Menu() {
    return (
      <div className="container1">
        <section className="item">
          <img className="images" src={images} alt="Schezwan Margherita" />
          <div className="about">
            <h3 className="menu-name">Schezwan Margherita</h3>
            <p className="detail">
              Your very own Margherita, now with a spicy twist! Loaded with our
              signature spicy schezwan sauce & 100% mozzarella cheese.
            </p>
          </div>
          <button type="button" className="order">
            Order &#8377;300
          </button>
        </section>

        <section className="item">
          <img
            className="images"
            src={mazedarMakhniPaneer}
            alt="Mazedar Makhni Paneer"
          />
          <div className="about">
            <h3 className="menu-name">Mazedar Makhni Paneer</h3>
            <p className="detail">
              A treat for all makhni lovers. Spiced paneer, onion, juicy red
              bell peppers with our new flavourful makhni sauce, topped with
              100% mozzarella cheese and buttery spice sprinkle
            </p>
          </div>
          <button type="button" className="order">
            Order &#8377;500
          </button>
        </section>

        <section className="item">
          <img className="images" src={images} alt="Schezwan Margherita" />
          <div className="about">
            <h3 className="menu-name">Schezwan Margherita</h3>
            <p className="detail">
              Your very own Margherita, now with a spicy twist! Loaded with our
              signature spicy schezwan sauce & 100% mozzarella cheese.
            </p>
          </div>
          <button type="button" className="order">
            Order &#8377;300
          </button>
        </section>

        <section className="item">
          <img
            className="images"
            src={americanCheesy}
            alt="awesome-american-cheesy"
          />
          <div className="about">
            <h3 className="menu-name">Awesome American Cheesy</h3>
            <p className="detail">
              Our divine peruvian flavoured cheesy sauce, topped with sweet
              corn, green capsicum, red paprika and 100% mozzarella cheese,
              finished with a generous drizzle of texas garlic sauce.
            </p>
          </div>
          <button type="button" className="order">
            Order &#8377;500
          </button>
        </section>

        <section className="item">
          <img
            className="images"
            src={randooriVeggie}
            alt="awesome-american-cheesy"
          />
          <div className="about">
            <h3 className="menu-name">Ultimate Tandoori Veggie</h3>
            <p className="detail">
              An ultimate combination of your favourite veggies- onion, green
              capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce,
              topped with 100% mozzarella cheese & generous drizzle of mint
              mayo.
            </p>
          </div>
          <button type="button" className="order">
            Order &#8377;500
          </button>
        </section>

        <section className="item">
          <img
            className="images"
            src={maxicanFiesta}
            alt="awesome-american-cheesy"
          />
          <div className="about">
            <h3 className="menu-name">Mexican Fiesta</h3>
            <p className="detail">
              Flavourful mix of red capsicum, green capsicum, jalapeno, onion,
              black olives, sweet corn and 100% mozzarella Cheese with a
              signature spice sprinkle & our flavourful pan sauce.
            </p>
          </div>
          <button type="button" className="order">
            Order &#8377;450
          </button>
        </section>
      </div>
    );
}

export default Menu;