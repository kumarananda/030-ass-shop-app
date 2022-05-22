import React from "react";

const AddProduct = () => {
  return (
    <>
      {" "}
      <div className="page-wrapper">
        <header className="header">
          <div className="header-top">
            <div className="container">
              <div className="header-left header-dropdowns">
                <div className="header-dropdown">
                  <a href="#">USD</a>
                  <div className="header-menu">
                    <ul>
                      <li>
                        <a href="#">EUR</a>
                      </li>
                      <li>
                        <a href="#">USD</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End .header-menu --> */}
                </div>
                {/* <!-- End .header-dropown --> */}

                <div className="header-dropdown">
                  <a href="#">
                    <img src="assets/images/flags/en.png" alt="England flag" />
                    ENGLISH
                  </a>
                  <div className="header-menu">
                    <ul>
                      <li>
                        <a href="#">
                          <img
                            src="assets/images/flags/en.png"
                            alt="England flag"
                          />
                          ENGLISH
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="assets/images/flags/fr.png"
                            alt="France flag"
                          />
                          FRENCH
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End .header-menu --> */}
                </div>
                {/* <!-- End .header-dropown --> */}

                <div className="dropdown compare-dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                  >
                    <i className="icon-retweet"></i> Compare (2)
                  </a>

                  <div className="dropdown-menu">
                    <div className="dropdownmenu-wrapper">
                      <ul className="compare-products">
                        <li className="product">
                          <a
                            href="#"
                            className="btn-remove"
                            title="Remove Product"
                          >
                            <i className="icon-cancel"></i>
                          </a>
                          <h4 className="product-title">
                            <a href="product.html">Lady White Top</a>
                          </h4>
                        </li>
                        <li className="product">
                          <a
                            href="#"
                            className="btn-remove"
                            title="Remove Product"
                          >
                            <i className="icon-cancel"></i>
                          </a>
                          <h4 className="product-title">
                            <a href="product.html">Blue Women Shirt</a>
                          </h4>
                        </li>
                      </ul>

                      <div className="compare-actions">
                        <a href="#" className="action-link">
                          Clear All
                        </a>
                        <a href="#" className="btn btn-primary">
                          Compare
                        </a>
                      </div>
                    </div>
                    {/* <!-- End .dropdownmenu-wrapper --> */}
                  </div>
                  {/* <!-- End .dropdown-menu --> */}
                </div>
                {/* <!-- End .dropdown --> */}
              </div>
              {/* <!-- End .header-left --> */}

              <div className="header-right">
                <p className="welcome-msg">Default welcome msg! </p>

                <div className="header-dropdown dropdown-expanded">
                  <a href="#">Links</a>
                  <div className="header-menu">
                    <ul>
                      <li>
                        <a href="my-account.html">MY ACCOUNT </a>
                      </li>
                      <li>
                        <a href="#">DAILY DEAL</a>
                      </li>
                      <li>
                        <a href="#">MY WISHLIST </a>
                      </li>
                      <li>
                        <a href="blog.html">BLOG</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="#" className="login-link">
                          LOG IN
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End .header-menu --> */}
                </div>
                {/* <!-- End .header-dropown --> */}
              </div>
              {/* <!-- End .header-right --> */}
            </div>
            {/* <!-- End .container --> */}
          </div>
          {/* <!-- End .header-top --> */}

          <div className="header-middle">
            <div className="container">
              <div className="header-left">
                <a href="index-2.html" className="logo">
                  <img src="assets/images/logo.png" alt="Porto Logo" />
                </a>
              </div>
              {/* <!-- End .header-left --> */}

              <div className="header-center">
                <div className="header-search">
                  <a href="#" className="search-toggle" role="button">
                    <i className="icon-magnifier"></i>
                  </a>
                  <form action="#" method="get">
                    <div className="header-search-wrapper">
                      <input
                        type="search"
                        className="form-control"
                        name="q"
                        id="q"
                        placeholder="Search..."
                        required
                      />
                      <div className="select-custom">
                        <select id="cat" name="cat">
                          <option value="">All Categories</option>
                          <option value="4">Fashion</option>
                          <option value="12">- Women</option>
                          <option value="13">- Men</option>
                          <option value="66">- Jewellery</option>
                          <option value="67">- Kids Fashion</option>
                          <option value="5">Electronics</option>
                          <option value="21">- Smart TVs</option>
                          <option value="22">- Cameras</option>
                          <option value="63">- Games</option>
                          <option value="7">Home &amp; Garden</option>
                          <option value="11">Motors</option>
                          <option value="31">- Cars and Trucks</option>
                          <option value="32">
                            - Motorcycles &amp; Powersports
                          </option>
                          <option value="33">- Parts &amp; Accessories</option>
                          <option value="34">- Boats</option>
                          <option value="57">
                            - Auto Tools &amp; Supplies
                          </option>
                        </select>
                      </div>
                      {/* <!-- End .select-custom --> */}
                      <button className="btn" type="submit">
                        <i className="icon-magnifier"></i>
                      </button>
                    </div>
                    {/* <!-- End .header-search-wrapper --> */}
                  </form>
                </div>
                {/* <!-- End .header-search --> */}
              </div>
              {/* <!-- End .headeer-center --> */}

              <div className="header-right">
                <button className="mobile-menu-toggler" type="button">
                  <i className="icon-menu"></i>
                </button>
                <div className="header-contact">
                  <span>Call us now</span>
                  <a href="tel:#">
                    <strong>+123 5678 890</strong>
                  </a>
                </div>
                {/* <!-- End .header-contact --> */}

                <div className="dropdown cart-dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                  >
                    <span className="cart-count">2</span>
                  </a>

                  <div className="dropdown-menu">
                    <div className="dropdownmenu-wrapper">
                      <div className="dropdown-cart-header">
                        <span>2 Items</span>

                        <a href="cart.html">View Cart</a>
                      </div>
                      {/* <!-- End .dropdown-cart-header --> */}
                      <div className="dropdown-cart-products">
                        <div className="product">
                          <div className="product-details">
                            <h4 className="product-title">
                              <a href="product.html">Woman Ring</a>
                            </h4>

                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span>x
                              $99.00
                            </span>
                          </div>
                          {/* <!-- End .product-details --> */}

                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <img
                                src="assets/images/products/cart/product-1.jpg"
                                alt="product"
                              />
                            </a>
                            <a
                              href="#"
                              className="btn-remove"
                              title="Remove Product"
                            >
                              <i className="icon-cancel"></i>
                            </a>
                          </figure>
                        </div>
                        {/* <!-- End .product --> */}

                        <div className="product">
                          <div className="product-details">
                            <h4 className="product-title">
                              <a href="product.html">Woman Necklace</a>
                            </h4>

                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span>x
                              $35.00
                            </span>
                          </div>
                          {/* <!-- End .product-details --> */}

                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <img
                                src="assets/images/products/cart/product-2.jpg"
                                alt="product"
                              />
                            </a>
                            <a
                              href="#"
                              className="btn-remove"
                              title="Remove Product"
                            >
                              <i className="icon-cancel"></i>
                            </a>
                          </figure>
                        </div>
                        {/* <!-- End .product --> */}
                      </div>
                      {/* <!-- End .cart-product --> */}

                      <div className="dropdown-cart-total">
                        <span>Total</span>

                        <span className="cart-total-price">$134.00</span>
                      </div>
                      {/* <!-- End .dropdown-cart-total --> */}

                      <div className="dropdown-cart-action">
                        <a
                          href="checkout-shipping.html"
                          className="btn btn-block"
                        >
                          Checkout
                        </a>
                      </div>
                      {/* <!-- End .dropdown-cart-total --> */}
                    </div>
                    {/* <!-- End .dropdownmenu-wrapper --> */}
                  </div>
                  {/* <!-- End .dropdown-menu --> */}
                </div>
                {/* <!-- End .dropdown --> */}
              </div>
              {/* <!-- End .header-right --> */}
            </div>
            {/* <!-- End .container --> */}
          </div>
          {/* <!-- End .header-middle --> */}

          <div className="header-bottom sticky-header">
            <div className="container">
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li>
                    <a href="index-2.html">Home</a>
                  </li>
                  <li>
                    <a href="category.html" className="sf-with-ul">
                      Categories
                    </a>
                    <div className="megamenu megamenu-fixed-width">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="menu-title">
                                <a href="#">
                                  Variations 1
                                  <span className="tip tip-new">New!</span>
                                </a>
                              </div>
                              <ul>
                                <li>
                                  <a href="category-banner-full-width.html">
                                    Fullwidth Banner
                                    <span className="tip tip-hot">Hot!</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="category-banner-boxed-slider.html">
                                    Boxed Slider Banner
                                  </a>
                                </li>
                                <li>
                                  <a href="category-banner-boxed-image.html">
                                    Boxed Image Banner
                                  </a>
                                </li>
                                <li>
                                  <a href="category-sidebar-left.html">
                                    Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="category-sidebar-right.html">
                                    Right Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="category-flex-grid.html">
                                    Product Flex Grid
                                  </a>
                                </li>
                                <li>
                                  <a href="category-horizontal-filter1.html">
                                    Horizontal Filter1
                                  </a>
                                </li>
                                <li>
                                  <a href="category-horizontal-filter2.html">
                                    Horizontal Filter2
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* <!-- End .col-lg-6 --> */}
                            <div className="col-lg-6">
                              <div className="menu-title">
                                <a href="#">Variations 2</a>
                              </div>
                              <ul>
                                <li>
                                  <a href="#">Product List Item Types</a>
                                </li>
                                <li>
                                  <a href="category-infinite-scroll.html">
                                    Ajax Infinite Scroll
                                  </a>
                                </li>
                                <li>
                                  <a href="category-3col.html">
                                    3 Columns Products
                                  </a>
                                </li>
                                <li>
                                  <a href="category-4col.html">
                                    4 Columns Products{" "}
                                    <span className="tip tip-new">New</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="category-5col.html">
                                    5 Columns Products
                                  </a>
                                </li>
                                <li>
                                  <a href="category-6col.html">
                                    6 Columns Products
                                  </a>
                                </li>
                                <li>
                                  <a href="category-7col.html">
                                    7 Columns Products
                                  </a>
                                </li>
                                <li>
                                  <a href="category-8col.html">
                                    8 Columns Products
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* <!-- End .col-lg-6 --> */}
                          </div>
                          {/* <!-- End .row --> */}
                        </div>
                        {/* <!-- End .col-lg-8 --> */}
                        <div className="col-lg-4">
                          <div className="banner">
                            <a href="#">
                              <img
                                src="assets/images/menu-banner-2.jpg"
                                alt="Menu banner"
                              />
                            </a>
                          </div>
                          {/* <!-- End .banner --> */}
                        </div>
                        {/* <!-- End .col-lg-4 --> */}
                      </div>
                    </div>
                    {/* <!-- End .megamenu --> */}
                  </li>
                  <li className="megamenu-container active">
                    <a href="product.html" className="sf-with-ul">
                      Products
                    </a>
                    <div className="megamenu">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="menu-title">
                                <a href="#">Variations</a>
                              </div>
                              <ul>
                                <li>
                                  <a href="product.html">
                                    Horizontal Thumbnails
                                  </a>
                                </li>
                                <li>
                                  <a href="product-full-width.html">
                                    Vertical Thumbnails
                                    <span className="tip tip-hot">Hot!</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="product.html">Inner Zoom</a>
                                </li>
                                <li>
                                  <a href="product-addcart-sticky.html">
                                    Addtocart Sticky
                                  </a>
                                </li>
                                <li>
                                  <a href="product-sidebar-left.html">
                                    Accordion Tabs
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* <!-- End .col-lg-4 --> */}
                            <div className="col-lg-4">
                              <div className="menu-title">
                                <a href="#">Variations</a>
                              </div>
                              <ul>
                                <li>
                                  <a href="product-sticky-tab.html">
                                    Sticky Tabs
                                  </a>
                                </li>
                                <li>
                                  <a href="product-simple.html">
                                    Simple Product
                                  </a>
                                </li>
                                <li>
                                  <a href="product-sidebar-left.html">
                                    With Left Sidebar
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* <!-- End .col-lg-4 --> */}
                            <div className="col-lg-4">
                              <div className="menu-title">
                                <a href="#">Product Layout Types</a>
                              </div>
                              <ul>
                                <li>
                                  <a href="product.html">Default Layout</a>
                                </li>
                                <li>
                                  <a href="product-extended-layout.html">
                                    Extended Layout
                                  </a>
                                </li>
                                <li>
                                  <a href="product-full-width.html">
                                    Full Width Layout
                                  </a>
                                </li>
                                <li>
                                  <a href="product-grid-layout.html">
                                    Grid Images Layout
                                  </a>
                                </li>
                                <li>
                                  <a href="product-sticky-both.html">
                                    Sticky Both Side Info
                                    <span className="tip tip-hot">Hot!</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="product-sticky-info.html">
                                    Sticky Right Side Info
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* <!-- End .col-lg-4 --> */}
                          </div>
                          {/* <!-- End .row --> */}
                        </div>
                        {/* <!-- End .col-lg-8 --> */}
                        <div className="col-lg-4">
                          <div className="banner">
                            <a href="#">
                              <img
                                src="assets/images/menu-banner.jpg"
                                alt="Menu banner"
                                className="product-promo"
                              />
                            </a>
                          </div>
                          {/* <!-- End .banner --> */}
                        </div>
                        {/* <!-- End .col-lg-4 --> */}
                      </div>
                      {/* <!-- End .row --> */}
                    </div>
                    {/* <!-- End .megamenu --> */}
                  </li>
                  <li>
                    <a href="#" className="sf-with-ul">
                      Pages
                    </a>

                    <ul>
                      <li>
                        <a href="cart.html">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="#">Checkout</a>
                        <ul>
                          <li>
                            <a href="checkout-shipping.html">
                              Checkout Shipping
                            </a>
                          </li>
                          <li>
                            <a href="checkout-shipping-2.html">
                              Checkout Shipping 2
                            </a>
                          </li>
                          <li>
                            <a href="checkout-review.html">Checkout Review</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Dashboard</a>
                        <ul>
                          <li>
                            <a href="dashboard.html">Dashboard</a>
                          </li>
                          <li>
                            <a href="my-account.html">My Account</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                        <ul>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="single.html">Blog Post</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="#" className="login-link">
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="forgot-password.html">Forgot Password</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="sf-with-ul">
                      Features
                    </a>
                    <ul>
                      <li>
                        <a href="#">Header Types</a>
                      </li>
                      <li>
                        <a href="#">Footer Types</a>
                      </li>
                    </ul>
                  </li>
                  <li className="float-right">
                    <a href="https://1.envato.market/DdLk5" target="_blank">
                      Buy Porto!
                    </a>
                  </li>
                  <li className="float-right">
                    <a href="#">Special Offer!</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- End .header-bottom --> */}
          </div>
          {/* <!-- End .header-bottom --> */}
        </header>
        {/* <!-- End .header --> */}

        <main className="main">
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index-2.html">
                    <i className="icon-home"></i>
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Electronics</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Headsets
                </li>
              </ol>
            </div>
            {/* <!-- End .container --> */}
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="product-single-container product-single-default">
                  <div className="row">
                    <div className="col-lg-7 col-md-6 product-single-gallery">
                      <div className="product-slider-container product-item">
                        <div className="product-single-carousel owl-carousel owl-theme">
                          <div className="product-item">
                            <img
                              className="product-single-image"
                              src="assets/images/products/zoom/product-1.jpg"
                              data-zoom-image="assets/images/products/zoom/product-1-big.jpg"
                            />
                          </div>
                          <div className="product-item">
                            <img
                              className="product-single-image"
                              src="assets/images/products/zoom/product-2.jpg"
                              data-zoom-image="assets/images/products/zoom/product-2-big.jpg"
                            />
                          </div>
                          <div className="product-item">
                            <img
                              className="product-single-image"
                              src="assets/images/products/zoom/product-3.jpg"
                              data-zoom-image="assets/images/products/zoom/product-3-big.jpg"
                            />
                          </div>
                          <div className="product-item">
                            <img
                              className="product-single-image"
                              src="assets/images/products/zoom/product-4.jpg"
                              data-zoom-image="assets/images/products/zoom/product-4-big.jpg"
                            />
                          </div>
                        </div>
                        {/* <!-- End .product-single-carousel --> */}
                        <span className="prod-full-screen">
                          <i className="icon-plus"></i>
                        </span>
                      </div>
                      <div
                        className="prod-thumbnail row owl-dots"
                        id="carousel-custom-dots"
                      >
                        <div className="col-3 owl-dot">
                          <img src="assets/images/products/zoom/product-1.jpg" />
                        </div>
                        <div className="col-3 owl-dot">
                          <img src="assets/images/products/zoom/product-2.jpg" />
                        </div>
                        <div className="col-3 owl-dot">
                          <img src="assets/images/products/zoom/product-3.jpg" />
                        </div>
                        <div className="col-3 owl-dot">
                          <img src="assets/images/products/zoom/product-4.jpg" />
                        </div>
                      </div>
                    </div>
                    {/* <!-- End .col-lg-7 --> */}

                    <div className="col-lg-5 col-md-6">
                      <div className="product-single-details">
                        <h1 className="product-title">Silver Porto Headset</h1>

                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style="width:60%"></span>
                            {/* <!-- End .ratings --> */}
                          </div>
                          {/* <!-- End .product-ratings --> */}

                          <a href="#" className="rating-link">
                            ( 6 Reviews )
                          </a>
                        </div>
                        {/* <!-- End .product-container --> */}

                        <div className="price-box">
                          <span className="old-price">$81.00</span>
                          <span className="product-price">$101.00</span>
                        </div>
                        {/* <!-- End .price-box --> */}

                        <div className="product-desc">
                          <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non.
                          </p>
                        </div>
                        {/* <!-- End .product-desc --> */}

                        <div className="product-filters-container">
                          <div className="product-single-filter">
                            <label>Colors:</label>
                            <ul className="config-swatch-list">
                              <li className="active">
                                <a
                                  href="#"
                                  style="background-color: #6085a5;"
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  style="background-color: #ab6e6e;"
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  style="background-color: #b19970;"
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  style="background-color: #11426b;"
                                ></a>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- End .product-single-filter --> */}
                        </div>
                        {/* <!-- End .product-filters-container --> */}

                        <div className="sticky-header">
                          <div className="container">
                            <div className="sticky-img">
                              <img src="assets/images/products/zoom/product-1.jpg" />
                            </div>
                            <div className="sticky-detail">
                              <div className="sticky-product-name">
                                <h2 className="product-title">
                                  Silver Porto Headset
                                </h2>
                                <div className="price-box">
                                  <span className="old-price">$81.00</span>
                                  <span className="product-price">$101.00</span>
                                </div>
                                {/* <!-- End .price-box --> */}
                              </div>
                              <div className="ratings-container">
                                <div className="product-ratings">
                                  <span
                                    className="ratings"
                                    style="width:60%"
                                  ></span>
                                  {/* <!-- End .ratings --> */}
                                </div>
                                {/* <!-- End .product-ratings --> */}

                                <a href="#" className="rating-link">
                                  {" "}
                                  ( In stock ){" "}
                                </a>
                              </div>
                              {/* <!-- End .product-container --> */}
                            </div>
                            {/* <!-- End .sticky-detail --> */}
                            <a
                              href="cart.html"
                              className="paction add-cart"
                              title="Add to Cart"
                            >
                              <span>Add to Cart</span>
                            </a>
                          </div>
                          {/* <!-- end .container --> */}
                        </div>
                        {/* <!-- end .sticky-header --> */}

                        <div className="product-action product-all-icons">
                          <div className="product-single-qty">
                            <input
                              className="horizontal-quantity form-control"
                              type="text"
                            />
                          </div>
                          {/* <!-- End .product-single-qty --> */}

                          <a
                            href="cart.html"
                            className="paction add-cart"
                            title="Add to Cart"
                          >
                            <span>Add to Cart</span>
                          </a>
                          <a
                            href="#"
                            className="paction add-wishlist"
                            title="Add to Wishlist"
                          >
                            <span>Add to Wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="paction add-compare"
                            title="Add to Compare"
                          >
                            <span>Add to Compare</span>
                          </a>
                        </div>
                        {/* <!-- End .product-action --> */}

                        <div className="product-single-share">
                          <label>Share:</label>
                          {/* <!-- www.addthis.com share plugin--> */}
                          <div className="addthis_inline_share_toolbox"></div>
                        </div>
                        {/* <!-- End .product single-share --> */}
                      </div>
                      {/* <!-- End .product-single-details --> */}
                    </div>
                    {/* <!-- End .col-lg-5 --> */}
                  </div>
                  {/* <!-- End .row --> */}
                </div>
                {/* <!-- End .product-single-container --> */}

                <div className="product-single-tabs">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="product-tab-desc"
                        data-toggle="tab"
                        href="#product-desc-content"
                        role="tab"
                        aria-controls="product-desc-content"
                        aria-selected="true"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="product-tab-tags"
                        data-toggle="tab"
                        href="#product-tags-content"
                        role="tab"
                        aria-controls="product-tags-content"
                        aria-selected="false"
                      >
                        Tags
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="product-tab-reviews"
                        data-toggle="tab"
                        href="#product-reviews-content"
                        role="tab"
                        aria-controls="product-reviews-content"
                        aria-selected="false"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="product-desc-content"
                      role="tabpanel"
                      aria-labelledby="product-tab-desc"
                    >
                      <div className="product-desc-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat.
                        </p>
                        <ul>
                          <li>
                            <i className="icon-ok"></i>Any Product types that
                            You want - Simple, Configurable
                          </li>
                          <li>
                            <i className="icon-ok"></i>Downloadable/Digital
                            Products, Virtual Products
                          </li>
                          <li>
                            <i className="icon-ok"></i>Inventory Management with
                            Backordered items
                          </li>
                        </ul>
                        <p>
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, <br />
                          quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat.{" "}
                        </p>
                      </div>
                      {/* <!-- End .product-desc-content --> */}
                    </div>
                    {/* <!-- End .tab-pane --> */}

                    <div
                      className="tab-pane fade"
                      id="product-tags-content"
                      role="tabpanel"
                      aria-labelledby="product-tab-tags"
                    >
                      <div className="product-tags-content">
                        <form action="#">
                          <h4>Add Your Tags:</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              required
                            />
                            <input
                              type="submit"
                              className="btn btn-primary"
                              value="Add Tags"
                            />
                          </div>
                          {/* <!-- End .form-group --> */}
                        </form>
                        <p className="note">
                          Use spaces to separate tags. Use single quotes (') for
                          phrases.
                        </p>
                      </div>
                      {/* <!-- End .product-tags-content --> */}
                    </div>
                    {/* <!-- End .tab-pane --> */}

                    <div
                      className="tab-pane fade"
                      id="product-reviews-content"
                      role="tabpanel"
                      aria-labelledby="product-tab-reviews"
                    >
                      <div className="product-reviews-content">
                        <div className="collateral-box">
                          <ul>
                            <li>Be the first to review this product</li>
                          </ul>
                        </div>
                        {/* <!-- End .collateral-box --> */}

                        <div className="add-product-review">
                          <h3 className="text-uppercase heading-text-color font-weight-semibold">
                            WRITE YOUR OWN REVIEW
                          </h3>
                          <p>How do you rate this product? *</p>

                          <form action="#">
                            <table className="ratings-table">
                              <thead>
                                <tr>
                                  <th>&nbsp;</th>
                                  <th>1 star</th>
                                  <th>2 stars</th>
                                  <th>3 stars</th>
                                  <th>4 stars</th>
                                  <th>5 stars</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Quality</td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="ratings[1]"
                                      id="Quality_1"
                                      value="1"
                                      className="radio"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="ratings[1]"
                                      id="Quality_2"
                                      value="2"
                                      className="radio"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="ratings[1]"
                                      id="Quality_3"
                                      value="3"
                                      className="radio"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="ratings[1]"
                                      id="Quality_4"
                                      value="4"
                                      className="radio"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="ratings[1]"
                                      id="Quality_5"
                                      value="5"
                                      className="radio"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Value</td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="value[1]"
                                      id="Value_1"
                                      value="1"
                                      className="radio"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="value[1]"
                                      id="Value_2"
                                      value="2"
                                      className="radio"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="value[1]"
                                      id="Value_3"
                                      value="3"
                                      className="radio"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="value[1]"
                                      id="Value_4"
                                      value="4"
                                      className="radio"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="value[1]"
                                      id="Value_5"
                                      value="5"
                                      className="radio"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Price</td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="price[1]"
                                      id="Price_1"
                                      value="1"
                                      className="radio"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="price[1]"
                                      id="Price_2"
                                      value="2"
                                      className="radio"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="price[1]"
                                      id="Price_3"
                                      value="3"
                                      className="radio"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="price[1]"
                                      id="Price_4"
                                      value="4"
                                      className="radio"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="radio"
                                      name="price[1]"
                                      id="Price_5"
                                      value="5"
                                      className="radio"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <div className="form-group">
                              <label>
                                Nickname <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                required
                              />
                            </div>
                            {/* <!-- End .form-group --> */}
                            <div className="form-group">
                              <label>
                                Summary of Your Review{" "}
                                <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                required
                              />
                            </div>
                            {/* <!-- End .form-group --> */}
                            <div className="form-group mb-2">
                              <label>
                                Review <span className="required">*</span>
                              </label>
                              <textarea
                                cols="5"
                                rows="6"
                                className="form-control form-control-sm"
                              ></textarea>
                            </div>
                            {/* <!-- End .form-group --> */}

                            <input
                              type="submit"
                              className="btn btn-primary"
                              value="Submit Review"
                            />
                          </form>
                        </div>
                        {/* <!-- End .add-product-review --> */}
                      </div>
                      {/* <!-- End .product-reviews-content --> */}
                    </div>
                    {/* <!-- End .tab-pane --> */}
                  </div>
                  {/* <!-- End .tab-content --> */}
                </div>
                {/* <!-- End .product-single-tabs --> */}
              </div>
              {/* <!-- End .col-lg-9 --> */}

              <div className="sidebar-overlay"></div>
              <div className="sidebar-toggle">
                <i className="icon-sliders"></i>
              </div>
              <aside className="sidebar-product col-lg-3 padding-left-lg mobile-sidebar">
                <div className="sidebar-wrapper">
                  <div className="widget widget-brand">
                    <a href="#">
                      <img
                        src="assets/images/product-brand.png"
                        alt="brand name"
                      />
                    </a>
                  </div>
                  {/* <!-- End .widget --> */}

                  <div className="widget widget-info">
                    <ul>
                      <li>
                        <i className="icon-shipping"></i>
                        <h4>
                          FREE
                          <br />
                          SHIPPING
                        </h4>
                      </li>
                      <li>
                        <i className="icon-us-dollar"></i>
                        <h4>
                          100% MONEY
                          <br />
                          BACK GUARANTEE
                        </h4>
                      </li>
                      <li>
                        <i className="icon-online-support"></i>
                        <h4>
                          ONLINE
                          <br />
                          SUPPORT 24/7
                        </h4>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End .widget --> */}

                  <div className="widget widget-banner">
                    <div className="banner banner-image">
                      <a href="#">
                        <img
                          src="assets/images/banners/banner-sidebar.jpg"
                          alt="Banner Desc"
                        />
                      </a>
                    </div>
                    {/* <!-- End .banner --> */}
                  </div>
                  {/* <!-- End .widget --> */}

                  <div className="widget widget-featured">
                    <h3 className="widget-title">Featured Products</h3>

                    <div className="widget-body">
                      <div className="owl-carousel widget-featured-products">
                        <div className="featured-col">
                          <div className="product-default left-details product-widget">
                            <figure>
                              <a href="product.html">
                                <img src="assets/images/products/product-7.jpg" />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h2 className="product-title">
                                <a href="product.html">Product Short Name</a>
                              </h2>
                              <div className="ratings-container">
                                <div className="product-ratings">
                                  <span
                                    className="ratings"
                                    style="width:100%"
                                  ></span>
                                  {/* <!-- End .ratings --> */}
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                {/* <!-- End .product-ratings --> */}
                              </div>
                              {/* <!-- End .product-container --> */}
                              <div className="price-box">
                                <span className="product-price">$49.00</span>
                              </div>
                              {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                          </div>
                          <div className="product-default left-details product-widget">
                            <figure>
                              <a href="product.html">
                                <img src="assets/images/products/product-8.jpg" />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h2 className="product-title">
                                <a href="product.html">Product Short Name</a>
                              </h2>
                              <div className="ratings-container">
                                <div className="product-ratings">
                                  <span
                                    className="ratings"
                                    style="width:100%"
                                  ></span>
                                  {/* <!-- End .ratings --> */}
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                {/* <!-- End .product-ratings --> */}
                              </div>
                              {/* <!-- End .product-container --> */}
                              <div className="price-box">
                                <span className="product-price">$49.00</span>
                              </div>
                              {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                          </div>
                          <div className="product-default left-details product-widget">
                            <figure>
                              <a href="product.html">
                                <img src="assets/images/products/product-9.jpg" />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h2 className="product-title">
                                <a href="product.html">Product Short Name</a>
                              </h2>
                              <div className="ratings-container">
                                <div className="product-ratings">
                                  <span
                                    className="ratings"
                                    style="width:100%"
                                  ></span>
                                  {/* <!-- End .ratings --> */}
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                {/* <!-- End .product-ratings --> */}
                              </div>
                              {/* <!-- End .product-container --> */}
                              <div className="price-box">
                                <span className="product-price">$49.00</span>
                              </div>
                              {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                          </div>
                        </div>
                        {/* <!-- End .featured-col --> */}

                        <div className="featured-col">
                          <div className="product-default left-details product-widget">
                            <figure>
                              <a href="product.html">
                                <img src="assets/images/products/product-10.jpg" />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h2 className="product-title">
                                <a href="product.html">Product Short Name</a>
                              </h2>
                              <div className="ratings-container">
                                <div className="product-ratings">
                                  <span
                                    className="ratings"
                                    style="width:100%"
                                  ></span>
                                  {/* <!-- End .ratings --> */}
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                {/* <!-- End .product-ratings --> */}
                              </div>
                              {/* <!-- End .product-container --> */}
                              <div className="price-box">
                                <span className="product-price">$49.00</span>
                              </div>
                              {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                          </div>
                          <div className="product-default left-details product-widget">
                            <figure>
                              <a href="product.html">
                                <img src="assets/images/products/product-11.jpg" />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h2 className="product-title">
                                <a href="product.html">Product Short Name</a>
                              </h2>
                              <div className="ratings-container">
                                <div className="product-ratings">
                                  <span
                                    className="ratings"
                                    style="width:100%"
                                  ></span>
                                  {/* <!-- End .ratings --> */}
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                {/* <!-- End .product-ratings --> */}
                              </div>
                              {/* <!-- End .product-container --> */}
                              <div className="price-box">
                                <span className="product-price">$49.00</span>
                              </div>
                              {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                          </div>
                          <div className="product-default left-details product-widget">
                            <figure>
                              <a href="product.html">
                                <img src="assets/images/products/product-12.jpg" />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h2 className="product-title">
                                <a href="product.html">Product Short Name</a>
                              </h2>
                              <div className="ratings-container">
                                <div className="product-ratings">
                                  <span
                                    className="ratings"
                                    style="width:100%"
                                  ></span>
                                  {/* <!-- End .ratings --> */}
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                {/* <!-- End .product-ratings --> */}
                              </div>
                              {/* <!-- End .product-container --> */}
                              <div className="price-box">
                                <span className="product-price">$49.00</span>
                              </div>
                              {/* <!-- End .price-box --> */}
                            </div>
                            {/* <!-- End .product-details --> */}
                          </div>
                        </div>
                        {/* <!-- End .featured-col --> */}
                      </div>
                      {/* <!-- End .widget-featured-slider --> */}
                    </div>
                    {/* <!-- End .widget-body --> */}
                  </div>
                  {/* <!-- End .widget --> */}
                </div>
              </aside>
              {/* <!-- End .col-md-3 --> */}
            </div>
            {/* <!-- End .row --> */}
          </div>
          {/* <!-- End .container --> */}

          <div className="featured-section">
            <div className="container">
              <h2 className="carousel-title">Featured Products</h2>

              <div
                className="product-intro owl-carousel owl-theme"
                data-toggle="owl"
                data-owl-options="{
                    'margin': 20,
                    'items': 2,
                    'autoplayTimeout': 5000,
                    'responsive': {
                        '559': {
                            'items': 3
                        },
                        '975': {
                            'items': 4
                        }
                    }
                }"
              >
                <div className="product-default">
                  <figure>
                    <a href="product.html">
                      <img src="assets/images/products/product-1.jpg" />
                    </a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style="width:100%"></span>
                        {/* <!-- End .ratings --> */}
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      {/* <!-- End .product-ratings --> */}
                    </div>
                    {/* <!-- End .product-container --> */}
                    <h2 className="product-title">
                      <a href="product.html">Product Short Name</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$9.00</span>
                    </div>
                    {/* <!-- End .price-box --> */}
                    <div className="product-action">
                      <a href="#" className="btn-icon-wish">
                        <i className="icon-heart"></i>
                      </a>
                      <button
                        className="btn-icon btn-add-cart"
                        data-toggle="modal"
                        data-target="#addCartModal"
                      >
                        <i className="icon-bag"></i>ADD TO CART
                      </button>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- End .product-details --> */}
                </div>
                <div className="product-default">
                  <figure>
                    <a href="product.html">
                      <img src="assets/images/products/product-2.jpg" />
                    </a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style="width:100%"></span>
                        {/* <!-- End .ratings --> */}
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      {/* <!-- End .product-ratings --> */}
                    </div>
                    {/* <!-- End .product-container --> */}
                    <h2 className="product-title">
                      <a href="product.html">Product Short Name</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$9.00</span>
                    </div>
                    {/* <!-- End .price-box --> */}
                    <div className="product-action">
                      <a href="#" className="btn-icon-wish">
                        <i className="icon-heart"></i>
                      </a>
                      <button
                        className="btn-icon btn-add-cart"
                        data-toggle="modal"
                        data-target="#addCartModal"
                      >
                        <i className="icon-bag"></i>ADD TO CART
                      </button>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- End .product-details --> */}
                </div>
                <div className="product-default">
                  <figure>
                    <a href="product.html">
                      <img src="assets/images/products/product-3.jpg" />
                    </a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style="width:100%"></span>
                        {/* <!-- End .ratings --> */}
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      {/* <!-- End .product-ratings --> */}
                    </div>
                    {/* <!-- End .product-container --> */}
                    <h2 className="product-title">
                      <a href="product.html">Product Short Name</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$9.00</span>
                    </div>
                    {/* <!-- End .price-box --> */}
                    <div className="product-action">
                      <a href="#" className="btn-icon-wish">
                        <i className="icon-heart"></i>
                      </a>
                      <button
                        className="btn-icon btn-add-cart"
                        data-toggle="modal"
                        data-target="#addCartModal"
                      >
                        <i className="icon-bag"></i>ADD TO CART
                      </button>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- End .product-details --> */}
                </div>
                <div className="product-default">
                  <figure>
                    <a href="product.html">
                      <img src="assets/images/products/product-4.jpg" />
                    </a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style="width:100%"></span>
                        {/* <!-- End .ratings --> */}
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      {/* <!-- End .product-ratings --> */}
                    </div>
                    {/* <!-- End .product-container --> */}
                    <h2 className="product-title">
                      <a href="product.html">Product Short Name</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$9.00</span>
                    </div>
                    {/* <!-- End .price-box --> */}
                    <div className="product-action">
                      <a href="#" className="btn-icon-wish">
                        <i className="icon-heart"></i>
                      </a>
                      <button
                        className="btn-icon btn-add-cart"
                        data-toggle="modal"
                        data-target="#addCartModal"
                      >
                        <i className="icon-bag"></i>ADD TO CART
                      </button>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- End .product-details --> */}
                </div>
                <div className="product-default">
                  <figure>
                    <a href="product.html">
                      <img src="assets/images/products/product-5.jpg" />
                    </a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style="width:100%"></span>
                        {/* <!-- End .ratings --> */}
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      {/* <!-- End .product-ratings --> */}
                    </div>
                    {/* <!-- End .product-container --> */}
                    <h2 className="product-title">
                      <a href="product.html">Product Short Name</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$9.00</span>
                    </div>
                    {/* <!-- End .price-box --> */}
                    <div className="product-action">
                      <a href="#" className="btn-icon-wish">
                        <i className="icon-heart"></i>
                      </a>
                      <button
                        className="btn-icon btn-add-cart"
                        data-toggle="modal"
                        data-target="#addCartModal"
                      >
                        <i className="icon-bag"></i>ADD TO CART
                      </button>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- End .product-details --> */}
                </div>
              </div>
            </div>
            {/* <!-- End .container --> */}
          </div>
          {/* <!-- End .featured-section --> */}
        </main>
        {/* <!-- End .main --> */}

        <footer className="footer">
          <div className="footer-middle">
            <div className="container">
              <div className="footer-ribbon">Get in touch</div>
              {/* <!-- End .footer-ribbon --> */}
              <div className="row">
                <div className="col-lg-3">
                  <div className="widget">
                    <h4 className="widget-title">Contact Us</h4>
                    <ul className="contact-info">
                      <li>
                        <span className="contact-info-label">Address:</span>123
                        Street Name, City, England
                      </li>
                      <li>
                        <span className="contact-info-label">Phone:</span>Toll
                        Free <a href="tel:">(123) 456-7890</a>
                      </li>
                      <li>
                        <span className="contact-info-label">Email:</span>{" "}
                        <a href="mailto:mail@example.com">mail@example.com</a>
                      </li>
                      <li>
                        <span className="contact-info-label">
                          Working Days/Hours:
                        </span>
                        Mon - Sun / 9:00AM - 8:00PM
                      </li>
                    </ul>
                    <div className="social-icons">
                      <a href="#" className="social-icon" target="_blank">
                        <i className="icon-facebook"></i>
                      </a>
                      <a href="#" className="social-icon" target="_blank">
                        <i className="icon-twitter"></i>
                      </a>
                      <a href="#" className="social-icon" target="_blank">
                        <i className="icon-linkedin"></i>
                      </a>
                    </div>
                    {/* <!-- End .social-icons --> */}
                  </div>
                  {/* <!-- End .widget --> */}
                </div>
                {/* <!-- End .col-lg-3 --> */}

                <div className="col-lg-9">
                  <div className="widget widget-newsletter">
                    <h4 className="widget-title">Subscribe newsletter</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          Get all the latest information on Events,Sales and
                          Offers. Sign up for newsletter today
                        </p>
                      </div>
                      {/* <!-- End .col-md-6 --> */}

                      <div className="col-md-6">
                        <form action="#">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email address"
                            required
                          />

                          <input
                            type="submit"
                            className="btn"
                            value="Subscribe"
                          />
                        </form>
                      </div>
                      {/* <!-- End .col-md-6 --> */}
                    </div>
                    {/* <!-- End .row --> */}
                  </div>
                  {/* <!-- End .widget --> */}

                  <div className="row">
                    <div className="col-md-5">
                      <div className="widget">
                        <h4 className="widget-title">My Account</h4>

                        <div className="row">
                          <div className="col-sm-6 col-md-5">
                            <ul className="links">
                              <li>
                                <a href="#">About Us</a>
                              </li>
                              <li>
                                <a href="#">Contact Us</a>
                              </li>
                              <li>
                                <a href="#">My Account</a>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- End .col-sm-6 --> */}
                          <div className="col-sm-6 col-md-5">
                            <ul className="links">
                              <li>
                                <a href="#">Orders History</a>
                              </li>
                              <li>
                                <a href="#">Advanced Search</a>
                              </li>
                              <li>
                                <a href="#">Login</a>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- End .col-sm-6 --> */}
                        </div>
                        {/* <!-- End .row --> */}
                      </div>
                      {/* <!-- End .widget --> */}
                    </div>
                    {/* <!-- End .col-md-5 --> */}

                    <div className="col-md-7">
                      <div className="widget">
                        <h4 className="widget-title">Main Features</h4>

                        <div className="row">
                          <div className="col-sm-6">
                            <ul className="links">
                              <li>
                                <a href="#">Super Fast Magento Theme</a>
                              </li>
                              <li>
                                <a href="#">1st Fully working Ajax Theme</a>
                              </li>
                              <li>
                                <a href="#">20 Unique Homepage Layouts</a>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- End .col-sm-6 --> */}
                          <div className="col-sm-6">
                            <ul className="links">
                              <li>
                                <a href="#">Powerful Admin Panel</a>
                              </li>
                              <li>
                                <a href="#">Mobile & Retina Optimized</a>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- End .col-sm-6 --> */}
                        </div>
                        {/* <!-- End .row --> */}
                      </div>
                      {/* <!-- End .widget --> */}
                    </div>
                    {/* <!-- End .col-md-7 --> */}
                  </div>
                  {/* <!-- End .row --> */}
                </div>
                {/* <!-- End .col-lg-9 --> */}
              </div>
              {/* <!-- End .row --> */}
            </div>
            {/* <!-- End .container --> */}
          </div>
          {/* <!-- End .footer-middle --> */}

          <div className="container">
            <div className="footer-bottom">
              <p className="footer-copyright">
                Porto eCommerce. &copy; 2018. All Rights Reserved
              </p>

              <img
                src="assets/images/payments.png"
                alt="payment methods"
                className="footer-payments"
              />
            </div>
            {/* <!-- End .footer-bottom --> */}
          </div>
          {/* <!-- End .container --> */}
        </footer>
        {/* <!-- End .footer --> */}
      </div>
      {/* <!-- End .page-wrapper --> */}
    </>
  );
};

export default AddProduct;
