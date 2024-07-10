import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Container from "react-bootstrap/Container";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import "../css/Home.css";
import { addProduct } from "../slice/productSlice";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shoppyProducts?.products);
  const cartList = useSelector((state) => state.shoppyProducts?.cartList);
  console.log(cartList,"cartList");
  const handleClick = (id) => {
    dispatch(addProduct(id))
  }
  return (
    <Container>
      <h1 className="title-shop mt-4">Shop Now</h1>
      <main className="main bd-grid">
        {products.map((product) => (
          <article className="card" key={product.id}>
            <div className="card__img">
              <img src={product.imgSrc} alt={product.name} />
            </div>
            <div className="card__name">
              <p>{product.name}</p>
            </div>
            <div className="card__precis">
              <a href="#" className="card__icon">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <div>
                <span className="card__preci card__preci--before">
                  <del>${product.priceBefore}</del>
                </span>
                <span className="card__preci card__preci--now">
                  ${product.priceNow}
                </span>
              </div>
              <a href="#" onClick={() => handleClick(product.id)} className="card__icon">
                {/* <Link to="/about" className="nav-link"> */}
                <OverlayTrigger
                  key={"placement"}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`add-to-bag`}>
                      Add to <strong>Bag</strong>.
                    </Tooltip>
                  }
                >
                  <FontAwesomeIcon icon={faBagShopping} />
                </OverlayTrigger>
                {/* </Link> */}
              </a>
            </div>
          </article>
        ))}
      </main>
    </Container>
  );
}

export default Home;