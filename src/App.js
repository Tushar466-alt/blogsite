import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  const product = [
    {
      id: 1,
      img: "Product-1.png",
      name: "Grilled Tomato at Home",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 2,
      img: "Product-2.png",
      name: "Snacks for Travel",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 3,
      img: "Product-3.png",
      name: "Post-workout Recipes",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 4,
      img: "Product-4.png",
      name: "How To Grill Corn",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 5,
      img: "Product-5.png",
      name: "Crunchwrap Supreme",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 6,
      img: "Product-6.png",
      name: "Broccoli Cheese Soup",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard...",
    },
  ];
  return (
    <>
      <div className="container-fluid banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 media">
              <div className="row">
                <div className="col-12 logo">
                  <img className="mt-5" src="logo.png" />
                </div>
                <div className="col-12">
                  <div className="banner-content">
                    <span>
                      Discover the <span>Best</span> Food and Drinks
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="banner-para">
                    <p>
                      Naturally made Healthcare Products for the better care &
                      support of your body.
                    </p>
                  </div>
                </div>
                <div className="col-12">
                  <button className="explore-now">
                    <span>Explore Now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img">
                <button className="get-btn-position">Get in Touch</button>
                <img src="Vector.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 about-us-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="row">
                <div className="about-us-img"></div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="row about-desc">
                <div className="col-12">
                  <span>About Us</span>
                </div>
                <div className="col-12">
                  <p className="mt-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. t has survived not only five centuries.
                  </p>
                </div>
                <div className="col-12">
                <button>Read More</button>
                  {/* <div className="about-btn mt-3">
                    
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5 article">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 pt-5 pb-2">
              <span className="article-span">Latest Article</span>
            </div>
          </div>
          <div className="row">
            {product.map((item, ind) => {
              return (
                <div className="col-sm-12 col-lg-4 mt-5">
                  <Product key={ind} product={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container-fluid footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
