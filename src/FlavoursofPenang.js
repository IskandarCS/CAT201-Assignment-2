import React from "react";
import "./App.css";
import nasiImage from "./assets/images/deen.jpeg";
import kapitanImage from "./assets/images/kapitan.jpg";
import laksaImage from "./assets/images/laksa.jpeg";

function FlavoursofPenang() {
    return (
        <div className="bucket-list">
            <hr className="featurette-divider" />
            <div className="container">
                {/* Featurette 1: Deens Maju Nasi Kandar */}
                <div className="row featurette align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-bold">
                            Deens Maju Nasi Kandar <span className="text-muted">Rating: <i className="fas fa-star text-warning"></i> 4.9/5</span>
                        </h2>
                        <p className="lead">
                            <strong>Opinion:</strong>  Authentic flavors, generous portions, and a must-try Nasi Kandar experience in town.
                        </p>
                        <p><strong><i className="fas fa-exclamation-circle"></i> Heads-up!:</strong> Lunch-hour is peak hour, so go early to avoid long queues.</p>
                        <p><strong><i className="fas fa-tag"></i>:</strong> <span className="text-muted">#penangfoodie #NasiKandar #DeensMaju #penanglocal</span></p>
                        <p>
                            <a href="https://maps.app.goo.gl/WMaWLMFQnTomZpfQA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fas fa-map-marker-alt"></i> View on Google Maps
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img
                            src={nasiImage}
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Deens Maju Nasi Kandar"
                        />
                    </div>
                </div>

                <hr className="featurette-divider" />

                {/* Featurette 2: Restoran Kapitan (Chulia Street)  */}
                <div className="row featurette align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-bold">
                            Restoran Kapitan (Chulia Street)  <span className="text-muted">Rating: <i className="fas fa-star text-warning"></i> 4.5/5</span>
                        </h2>
                        <p className="lead">
                            <strong>Opinion:</strong> Well-known for their flavorful tandoori chicken and butter naan. A perfect spot for late-night cravings with a lively atmosphere.
                        </p>
                        <p><strong><i className="fas fa-exclamation-circle"></i> Heads-up!:</strong>  Don’t miss their mango lassi—it’s the perfect drink to complement the spicy dishes!</p>
                        <p><strong><i className="fas fa-tag"></i>:</strong> <span className="text-muted">#TandooriChicken #KapitanChulia #PenangFood #LateNightEats</span></p>
                        <p>
                            <a href="https://maps.app.goo.gl/tpAUTFxoHJuigMPB7" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fas fa-map-marker-alt"></i> View on Google Maps
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img
                            src={kapitanImage}
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Restoran Kapitan (Chulia Street)"
                        />
                    </div>
                </div>

                <hr className="featurette-divider" />

                {/* Featurette 3: Laksa Janggus Kak Timah */}
                <div className="row featurette align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-bold">
                            Laksa Janggus Kak Timah <span className="text-muted">Rating: <i className="fas fa-star text-warning"></i> 4/5</span>
                        </h2>
                        <p className="lead">
                            <strong>Opinion:</strong> A hidden gem serving authentic, tangy, and flavorful laksa in a rustic, kampung-style setting, only available in Penang.
                        </p>
                        <p><strong><i className="fas fa-exclamation-circle"></i> Heads-up!:</strong> Try pairing the laksa with their signature coconut shake for a refreshing twist!</p>
                        <p><strong><i className="fas fa-tag"></i>:</strong> <span className="text-muted"> #LaksaLovers #KampungVibes #PenangEats #LaksaJanggus</span></p>
                        <p>
                            <a href="https://maps.app.goo.gl/4euv8JzmTktFboEi6" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fas fa-map-marker-alt"></i> View on Google Maps
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img
                            src={laksaImage}
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Laksa Janggus Kak Timah"
                        />
                    </div>
                </div>
            </div>
            <hr className="featurette-divider" />
        </div>
    );
}

export default FlavoursofPenang;