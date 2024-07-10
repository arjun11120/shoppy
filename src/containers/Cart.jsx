import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct, incrementCount, decrementCount } from "../slice/productSlice";
import '../css/Cart.css'

const Cart = () => {
const dispatch = useDispatch();
// const products = useSelector((state) => state.shoppyProducts?.products);
const cartList = useSelector((state) => state.shoppyProducts?.cartList);
  return (
    <div className="card-body p-0">
      {cartList.length === 0 ? (
        <table className="table cart-table mb-0">
          <tbody>
            <tr>
              <td colSpan="6">
                <div className="cart-empty">
                  <i className="fa fa-shopping-cart"></i>
                  <p>Your Cart Is empty</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table className="table cart-table mb-0">
          <thead>
            <tr>
              <th>Action</th>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th className="text-right">
                <span id="amount" className="amount">
                  Total Amount
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((data, index) => {
              const { id, imgSrc, name, priceNow, count } = data;
              return (
                <tr key={index}>
                  <td>
                    <button
                      className="prdct-delete"
                      onClick={() => dispatch(removeProduct(id))}
                    >
                      <i className="fa fa-trash-alt"></i>
                    </button>
                  </td>
                  <td>
                    <div className="product-img">
                      <img src={imgSrc} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="product-name">
                      <p>{name}</p>
                    </div>
                  </td>
                  <td>${priceNow}</td>
                  <td>
                    <div className="prdct-qty-container">
                      <button
                        className="prdct-qty-btn"
                        type="button"
                        onClick={() => dispatch(decrementCount(id))}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        name="qty"
                        className="qty-input-box"
                        value={count}
                        disabled
                      />
                      <button
                        className="prdct-qty-btn"
                        type="button"
                        onClick={() => dispatch(incrementCount(id))}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td className="text-right">${(count * priceNow).toFixed(0)}</td>
                </tr>
              );
            })}
          </tbody>
          {/* <tfoot>
            <tr>
              <th>&nbsp;</th>
              <th colSpan="3">&nbsp;</th>
              <th>
                Items in Cart<span className="ml-2 mr-2">:</span>
                <span className="text-danger">{cartTotalQty}</span>
              </th>
              <th className="text-right">
                Total Price<span className="ml-2 mr-2">:</span>
                <span className="text-danger">
                  $ {cartTotalAmount.toFixed(0)}
                </span>
              </th>
            </tr>
          </tfoot> */}
        </table>
      )}
    </div>
  );
};

export default Cart;
