import React from "react";
import "./App.css";
import escapeImage from "./assets/images/escape.jpg";
import penangHillImage from "./assets/images/penang hill.jpg";
import armenianImage from "./assets/images/armenian-05.webp";

function BucketList() {
    return (
        <div className="bucket-list">
            <hr className="featurette-divider" />
            <div className="container">
                {/* Featurette 1: Escape Penang */}
                <div className="row featurette align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-bold">
                            Escape Penang <span className="text-muted">Rating: <i className="fas fa-star text-warning"></i> 4.5/5</span>
                        </h2>
                        <p className="lead">
                            <strong>Opinion:</strong> Escape Penang is the ultimate adventure spot for us, offering thrilling activities like zip-lining and water slides in a beautiful, eco-friendly setting.
                        </p>
                        <p><strong><i className="fas fa-exclamation-circle"></i> Heads-up!:</strong> Wear comfy sportswear, stay hydrated, and book tickets online for better deals.</p>
                        <p><strong><i className="fas fa-tag"></i>:</strong> <span className="text-muted">#Adventure #PenangFun #ThemePark</span></p>
                        <p>
                            <a href="https://maps.app.goo.gl/k2UVCMgLTHWa6T7C7" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fas fa-map-marker-alt"></i> View on Google Maps
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img
                            src={escapeImage}
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Escape Penang"
                        />
                    </div>
                </div>

                <hr className="featurette-divider" />

                {/* Featurette 2: Penang Hill */}
                <div className="row featurette align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-bold">
                            Penang Hill <span className="text-muted">Rating: <i className="fas fa-star text-warning"></i> 4/5</span>
                        </h2>
                        <p className="lead">
                            <strong>Opinion:</strong> Penang Hill offers stunning views, cool weather, and nature attractions like The Habitat, perfect for a scenic escape.
                        </p>
                        <p><strong><i className="fas fa-exclamation-circle"></i> Heads-up!:</strong> Expect long queues; book fast lane tickets online for a smoother experience.</p>
                        <p><strong><i className="fas fa-tag"></i>:</strong> <span className="text-muted">#PenangHill #ScenicEscape #NatureViews #PenangAttractions</span></p>
                        <p>
                            <a href="https://maps.app.goo.gl/JaADwFpgrVba315v6" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fas fa-map-marker-alt"></i> View on Google Maps
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img
                            src={penangHillImage}
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Penang Hill"
                        />
                    </div>
                </div>

                <hr className="featurette-divider" />

                {/* Featurette 3: Armenian Street */}
                <div className="row featurette align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-bold">
                            Armenian Street <span className="text-muted">Rating: <i className="fas fa-star text-warning"></i> 4/5</span>
                        </h2>
                        <p className="lead">
                            <strong>Opinion:</strong> Armenian Street is a vibrant spot in George Town, known for its famous street art, heritage buildings, and local crafts.
                        </p>
                        <p><strong><i className="fas fa-exclamation-circle"></i> Heads-up!:</strong> It can get busy, so visit early to enjoy the art and explore the area more peacefully.</p>
                        <p><strong><i className="fas fa-tag"></i>:</strong> <span className="text-muted">#ArmenianStreet #PenangStreetArt #HeritageTrail #GeorgeTown</span></p>
                        <p>
                            <a href="https://maps.app.goo.gl/ywHY5YkAcpYEGUsG9" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fas fa-map-marker-alt"></i> View on Google Maps
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img
                            src={armenianImage}
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Armenian Street"
                        />
                    </div>
                </div>
            </div>
            <hr className="featurette-divider" />
        </div>
    );
}

export default BucketList;
