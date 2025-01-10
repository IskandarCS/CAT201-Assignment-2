import React from "react";
import "./App.css";
import queensbayImage from "./assets/images/queensbay.jpg";
import gurneyImage from "./assets/images/gurney.jpg";
import straitsQuayImage from "./assets/images/straitsquay.jpg";

function Malls() {
    return (
        <div className="bucket-list">
            <hr className="featurette-divider" />
            <div className="container">
                {/* Featurette 1: Queensbay Mall */}
                <div className="row featurette align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-bold">
                            Queensbay Mall <span className="text-muted">Rating: <i className="fas fa-star text-warning"></i> 4.7/5</span>
                        </h2>
                        <p className="lead">
                            <strong>Opinion:</strong>The largest shopping mall in Penang, offering diverse shops, delicious eateries, and a scenic waterfront view. Perfect for students to shop, dine, and relax with friends.
                        </p>
                        <p><strong><i className="fas fa-exclamation-circle"></i> Heads-up!:</strong> USM students can take the Rapid Penang bus directly from USM to Queensbay Mall to save money on transportation!</p>
                        <p><strong><i className="fas fa-tag"></i>:</strong> <span className="text-muted">#QueensbayMall #PenangShopping #StudentFriendly #PenangViews</span></p>
                        <p>
                            <a href="https://maps.app.goo.gl/LkPLjXUxw61s7kj26" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fas fa-map-marker-alt"></i> View on Google Maps
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img
                            src={queensbayImage}
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Queensbay Mall"
                        />
                    </div>
                </div>

                <hr className="featurette-divider" />

                {/* Featurette 2: Gurney Plaza  */}
                <div className="row featurette align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-bold">
                            Gurney Plaza  <span className="text-muted">Rating: <i className="fas fa-star text-warning"></i> 4.6/5</span>
                        </h2>
                        <p className="lead">
                            <strong>Opinion:</strong> A premium shopping mall with a mix of high-end and affordable stores. Ideal for window shopping and a great spot to unwind after exploring Gurney Drive.
                        </p>
                        <p><strong><i className="fas fa-exclamation-circle"></i> Heads-up!:</strong>  Don’t miss their mango lassi—it’s the perfect drink to complement the spicy dishes!</p>
                        <p><strong><i className="fas fa-tag"></i>:</strong> <span className="text-muted">#GurneyPlaza #CoastalVibes #PenangShoppingSpree #GurneyDrive</span></p>
                        <p>
                            <a href="https://maps.app.goo.gl/9VyN36UdYKfBGCD77" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fas fa-map-marker-alt"></i> View on Google Maps
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img
                            src={gurneyImage}
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Gurney Plaza"
                        />
                    </div>
                </div>

                <hr className="featurette-divider" />

                {/* Featurette 3: Straits Quay Retail Marina */}
                <div className="row featurette align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-bold">
                            Straits Quay Retail Marina <span className="text-muted">Rating: <i className="fas fa-star text-warning"></i> 4.5/5</span>
                        </h2>
                        <p className="lead">
                            <strong>Opinion:</strong> A picturesque waterfront mall with unique boutiques and cozy cafes. Great for a relaxed outing or enjoying the scenic marina views with friends.
                        </p>
                        <p><strong><i className="fas fa-exclamation-circle"></i> Heads-up!:</strong> Best visited in the evening to enjoy the sunset and cool breeze by the marina.</p>
                        <p><strong><i className="fas fa-tag"></i>:</strong> <span className="text-muted"> #StraitsQuay #WaterfrontShopping #PenangMarina #StudentHangout</span></p>
                        <p>
                            <a href="https://maps.app.goo.gl/RaqHQicnK5scYG1i6" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fas fa-map-marker-alt"></i> View on Google Maps
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img
                            src={straitsQuayImage}
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Straits Quay Retail Marina"
                        />
                    </div>
                </div>
            </div>
            <hr className="featurette-divider" />
        </div>
    );
}

export default Malls;