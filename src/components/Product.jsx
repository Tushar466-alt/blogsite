import React from "react";
import "./Product.css";

function Product(props) {
  console.log(props.product.name);
  return (
    <>
      <div className="product p-4 pb-5">
        <div className="row">
          <div className="col-12">
            <img className="w-100" src={props.product.img} />
          </div>
          <div className="col-12 px-4 py-3 pt-5">
            <span>{props.product.name}</span>
          </div>
          <div className="col-12 px-4">
            <p>{props.product.desc}</p>
          </div>
          <div className="col-12 pt-3 px-4">
            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
