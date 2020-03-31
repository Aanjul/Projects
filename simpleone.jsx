import React, { Component} from 'react'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom';
import {
    calculateDiscount
} from '../../setup'
import {
    addToCart,
    addToWishlist,
    addToCompare
} from '../../actions'
import ProductContentDefault from './components/ProductContentDefault'
import DescriptionReviewTab from './components/DescriptionReviewTab'
import RelatedProductSlider from './components/RelatedProductSlider'

class ProductSimple extends Component {

    constructor(props) {
    super(props);
    this.state = {
        nav1: null,
        nav2: null,
        backgroundPosition: '0% 0%',
        price: '',
        stockId: '',
        renderAddToCart: false,
        item:[],
        Stock:'',
        quantity:1
    };
  }


  componentDidMount(){
      this.setState({
          nav1: this.productLargeImageSliderSettings,
          nav2: this.productSmallImageSliderSettings
      });
  }

  handleMouseMove = (e, image) => {
      const { left, top, width, height } = e.target.getBoundingClientRect()
      const x = (e.pageX - left) / width * 98
      const y = (e.pageY - top) / height * 70
      this.setState({ backgroundPosition: `${x}% ${y}`, backgroundImage: `url(${process.env.PUBLIC_URL + image})`})
  }

  onSelectedStock = (item) => {
      this.setState({
          price: item.unit_price,
          stockId: item_id
      })
  }

  onImageChange = (image) => {
      const { innerWidth } = window;

      if (innerWidth < 750) {
          return <img
          src={process.env.PUBLIC_URL + image}
          alt=""
          style={{ width: 213, height: 200}}/>
      } else {
          return <img src={process.env.PUBLIC_URL + image} alt=""/>
      }
  }

  render () {
      const {productData, symbol, addToCart, addToWishlist, addToCompare} = this.props;
      const { item } = this.state;
      const { innerWidth } = window;
      let figureOutOfStock = false;
      let image = [];
      if (productData.stocks.length > 0){
          for (let i = 0; i < productData.stocks.length; i++){
              if (productData.stocks[i].stock > 0) {
                  figureOutOfStock = true;
              }
          }
      }

      const StockImage = [];
      if(!!item.image1){
          StockImage.push(item.image1)
      }
      if(!!item.image2){
          StockImage.push(item.image2)
      }
      if(!!item.image3){
          StockImage.push(item.image3)
      }

      if (!!this.props.productData === false){
          return(
              <div
              style={{
                  display:"flex",
                  flexDirection:"row",
                  justifyContent:"row",
                  alignItems:"center"
              }}>
             <h1>
                 Go to <Link to={process.env.PUBLIC_URL + '/'} style={{ borderStyle: "solid" ,  borderSize: "1px"}}>
                     Home Page
                 </Link>
             </h1>
              </div>
          );
      }
      function NextArrow(props) {
          const { onClick } = props;
          return(
              <div onClick={onClick}>
                  <button type="button" 
                  className="product-dec-icon product-dec-next"
                  style={{ marginTop: 10 }}>
                      <i className='negan-icon-arrows-minimal-right' />
                  </button>
              </div>
          );
      }

      function PrevArrow(props) {
          const { onClick } = props;
          return(
                <div onClick={onClick}>
                    <button type="button" className="product-dec-icon product-dec-prev" style={{ marginBottom: 10 }}>
                     <i className='negan-icon-arrows-minimal-left' />
                     </button>
                </div>              
          );
      }

      const productSmallImageSliderSettings = {
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: StockImage.length > 0 ? StockImage.length : productData.images.length,
          slidesToScroll: 1,
          vertical: true,
          autoplay: false,
          focusOnSelect: true,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />,
          responsive: [{
              breakpoint: 1499,
               settings: {
                   slidesToShow: StockImage.length > 0 ? StockImage.length : productData.images.length
               }
          },
        ]
      };

      const productLargeImageSliderSettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      draggable: true,
      focusOnSelect: true,
      fade: false,
      swipeToSlide: true,
      autoplay: false
    }

    let discountedPrice = calculateDiscount(this.state.price, productData.discount);
    discountedPrice = discountedPrice.toFixed(2);
    let productPrice = Number(this.state.price).toFixed(2);

    let RatingStars = []
    for (var i = 0; i < productData.rating; i++){
        RatingStars.push(<i className="negan-icon-star" key={i}></i>)
    }

    const { renderAddToCart} = this.state;
    if (innerWidth < 750){
        return (
            <div>

                <Helmet>
                    <title> Gemshiner | Product Details </title>
                    <meta name="description" content="" />
                </Helmet>
                <div className="product-details-area pt-50" style={{ width: "100%" }}>
                    <div style={{ margin: 40 }}>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div>
                                <Slider
                                        className="product-dec-slider product-dec-left"
                                        {...productSmallImageSliderSettings}
                                        asNavFor={this.state.nav2}
                                        ref={productSmallImageSliderSettings =>
                                            (this.productLargeImageSliderSettings = productSmallImageSliderSettings)
                                            }>
                                                {StockImage.length > 0 ? StockImage.map((image, index) => {
                                                    return(
                                                        <div className="single-small-img" key={index}>
                                                            <img src={process.env.PUBLIC_URL + image} alt=""/>
                                                        </div>
                                                    );
                                                }) : productData.images.map((image, index) => {
                                                    return (
                                                        <div className="single-small-img" key={index}>
                                                            <img src={process.env.PUBLIC_URL + image} alt="" />
                                                        </div>
                                                    );
                                                })
                                                }
                                            </Slider>

                                            <Slider
                                            className="product-dec-right pro-dec-big-img-slider"
                                            {...productLargeImageSliderSettings}
                                            asNavFor={this.state.nav3}
                            </div>
                                </div>
                                </div>

                    </div>

                </div>
                
            </div>
        )
    }
      productData.images.map(image => {
          images.push(image);
      })
      productData.stocks.map(item => {
          images.push(item.image1);
          images.push(item,image2);
          images.push(item,image3);
      })

      let nullImage=[]
      let notnullImages = [];
      images.map(image => {
          if(image === null){
              nullImage.push(image)
          }
          else
          notnullImages.push(image)
      })


      if(!!this.props.productData === false){
          return(
              <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
        <h1>
            Go To <Link to={process.env.PUBLIC_URL + '/'} style={{ borderStyle: "solid", borderSize: "1px" }}> Home Page</Link>
            and Refresh the page
              </h1>

          )
      }
  }



} 
