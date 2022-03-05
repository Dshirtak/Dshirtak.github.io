import React, { Component, Suspense } from "react";
import axios from "axios";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import FirstSubHeader from "../components/FirstSubHeader/FirstSubHeader";
import MainHeader from "../components/MainHeader/MainHeader";
import SecondSubHeader from "../components/SecondSubHeader/SecondSubHeader";
import ProductDetails from "../components/DetailsContainer/ProductDetails";
import SimilarProducts from "../components/SimilarProducts/SimilarProducts";
import Footer from "../components/Footer/Footer";

const CartDrawer = React.lazy(() =>
  import("../components/CartDrawer/CartDrawer")
);

class CartPage extends Component {
  state = {
    productImages: [],
    mainImage: "",
    sizes: [],
    colors: [],
    openCart: false,
    currentItemsCount: 0,
    cartItems: [],
    totalItemsInCart: 0,
  };
  constructor(props) {
    super(props);
    this.handleShowCart = this.handleShowCart.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleIncrementItems = this.handleIncrementItems.bind(this);
  }
  handleShowCart = () => {
    this.setState({ openCart: !this.state.openCart });
  };
  handleAddToCart = () => {
    this.setState({
      totalItemsInCart:
        this.state.totalItemsInCart + this.state.currentItemsCount,
    });
    this.setState({
      cartItems: [
        ...this.state.cartItems,
        {
          description: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
          quantity: this.state.currentItemsCount,
          price: 9999,
        },
      ],
    });
  };
  handleIncrementItems = () => {
    this.setState({ currentItemsCount: this.state.currentItemsCount + 1 });
  };
  handleRemoveFromCart = () => {
    if (this.state.currentItemsCount !== 0) {
      this.setState({ currentItemsCount: this.state.currentItemsCount - 1 });
    }
  };

  componentDidMount() {
    axios
      .get("http://localhost:3900/api/product")
      .then((response) => {
        this.setState({
          productImages: [...response.data.productsImages],
          mainImage: response.data.mainImage,
          sizes: [...response.data.productSizes],
          colors: [...response.data.productColors],
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <MainHeader />
        <FirstSubHeader
          count={this.state.totalItemsInCart}
          showCart={() => this.handleShowCart()}
        />
        <SecondSubHeader />
        <BreadCrumb />
        <div style={{ height: "140vh" }}>
          <ProductDetails
            handleIncrementItems={this.handleIncrementItems}
            handleAddToCart={this.handleAddToCart}
            handleRemoveFromCart={this.handleRemoveFromCart}
            props={this.state}
          />
        </div>
        <div style={{ marginTop: "50px" }} className="middleContainer">
          <SimilarProducts
            similarProductsArray={[
              {
                describtion:
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                price: "9,999",
                sale: "50%",
                rate: 4.2,
                image: "model12x.png",
              },
              {
                describtion:
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                price: "9,999",
                sale: "50%",
                rate: 4.2,
                image: "model22x.png",
              },
              {
                describtion:
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                price: "9,999",
                sale: "50%",
                rate: 4.2,
                image: "model32x.png",
              },
              {
                describtion:
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                price: "9,999",
                sale: "50%",
                rate: 4.2,
                image: "model42x.png",
              },
              {
                describtion:
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                price: "9,999",
                sale: "50%",
                rate: 4.2,
                image: "model12x.png",
              },
              {
                describtion:
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                price: "9,999",
                sale: "50%",
                rate: 4.2,
                image: "model12x.png",
              },
            ]}
          />
        </div>
        <Footer />
        <Suspense fallback={<div>loading....</div>}>
          <CartDrawer
            cartItems={this.state.cartItems}
            show={this.state.openCart}
            handleCart={() => this.handleShowCart()}
          />
        </Suspense>
      </div>
    );
  }
}

export default CartPage;
