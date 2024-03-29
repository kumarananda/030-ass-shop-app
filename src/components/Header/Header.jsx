import React from "react";
import flug1 from "../../_assets/images/flags/en.png";
import logoProto from "../../_assets/images/logo.png";

const Header = () => {
  return (
    <>
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
                {/* <!-- End .header-menu -->*/}
              </div>
              {/* <!-- End .header-dropown -->*/}

              <div className="header-dropdown">
                <a href="#">
                  <img src={flug1} alt="England flag" />
                  ENGLISH
                </a>
                <div className="header-menu">
                  <ul>
                    <li>
                      <a href="#">
                        <img src={flug1} alt="England flag" />
                        ENGLISH
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={flug1} alt="France flag" />
                        FRENCH
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End .header-menu -->*/}
              </div>
              {/* <!-- End .header-dropown -->*/}

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
                  {/* <!-- End .dropdownmenu-wrapper -->*/}
                </div>
                {/* <!-- End .dropdown-menu -->*/}
              </div>
              {/* <!-- End .dropdown -->*/}
            </div>
            {/* <!-- End .header-left -->*/}

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
                {/* <!-- End .header-menu -->*/}
              </div>
              {/* <!-- End .header-dropown -->*/}
            </div>
            {/* <!-- End .header-right -->*/}
          </div>
          {/* <!-- End .container -->*/}
        </div>
        {/* <!-- End .header-top -->*/}

        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <a href="index-2.html" className="logo">
                <img src={logoProto} alt="Porto Logo" />
              </a>
            </div>
            {/* <!-- End .header-left -->*/}

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
                        <option value="57">- Auto Tools &amp; Supplies</option>
                      </select>
                    </div>
                    {/* <!-- End .select-custom -->*/}
                    <button className="btn" type="submit">
                      <i className="icon-magnifier"></i>
                    </button>
                  </div>
                  {/* <!-- End .header-search-wrapper -->*/}
                </form>
              </div>
              {/* <!-- End .header-search -->*/}
            </div>
            {/* <!-- End .headeer-center -->*/}

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
              {/* <!-- End .header-contact -->*/}

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
                    {/* <!-- End .dropdown-cart-header -->*/}
                    <div className="dropdown-cart-products">
                      <div className="product">
                        <div className="product-details">
                          <h4 className="product-title">
                            <a href="product.html">Woman Ring</a>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>x $99.00
                          </span>
                        </div>
                        {/* <!-- End .product-details -->*/}

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
                      {/* <!-- End .product -->*/}

                      <div className="product">
                        <div className="product-details">
                          <h4 className="product-title">
                            <a href="product.html">Woman Necklace</a>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>x $35.00
                          </span>
                        </div>
                        {/* <!-- End .product-details -->*/}

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
                      {/* <!-- End .product -->*/}
                    </div>
                    {/* <!-- End .cart-product -->*/}

                    <div className="dropdown-cart-total">
                      <span>Total</span>

                      <span className="cart-total-price">$134.00</span>
                    </div>
                    {/* <!-- End .dropdown-cart-total -->*/}

                    <div className="dropdown-cart-action">
                      <a
                        href="checkout-shipping.html"
                        className="btn btn-block"
                      >
                        Checkout
                      </a>
                    </div>
                    {/* <!-- End .dropdown-cart-total -->*/}
                  </div>
                  {/* <!-- End .dropdownmenu-wrapper -->*/}
                </div>
                {/* <!-- End .dropdown-menu -->*/}
              </div>
              {/* <!-- End .dropdown -->*/}
            </div>
            {/* <!-- End .header-right -->*/}
          </div>
          {/* <!-- End .container -->*/}
        </div>
        {/* <!-- End .header-middle -->*/}

        <div className="header-bottom sticky-header">
          <div className="container">
            <nav className="main-nav">
              <ul className="menu sf-arrows">
                <li className="active">
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
                            <ul>
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
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End .megamenu -->*/}
                </li>

                <li>
                  <a href="#" className="sf-with-ul">
                    Products
                  </a>

                  <ul>
                    <li>
                      <a href="cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="#">Checkout</a>
                      <ul>
                        <li>
                          <a href="checkout-shipping.html">Checkout Shipping</a>
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
                          <a href="checkout-shipping.html">Checkout Shipping</a>
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
        </div>
      </header>
    </>
  );
};

export default Header;
