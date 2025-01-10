import React from "react";
import "./App.css";
import balikPulauImage from "./assets/images/balikpulau.jpg";
import kerachutImage from "./assets/images/kerachut.jpg";
import turtleImage from "./assets/images/turtle.jpg";


function HiddenGems() {
    return (
        <div className="bucket-list">
            <hr className="featurette-divider" />
            <div className="container">
                {/* Featurette 1: Balik Pulau */}
                <div className="row featurette align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-bold">
                            Balik Pulau <span className="text-muted">Rating: <i className="fas fa-star text-warning"></i> 4/5</span>
                        </h2>
                        <p className="lead">
                            <strong>Opinion:</strong>Here, experience the authentic charm of Penang's countryside  away from the bustling crowds. 
                        </p>
                        <p><strong><i className="fas fa-exclamation-circle"></i> Heads-up!:</strong>Don’t miss trying local delicacies like laksa and durian during your visit!</p>
                        <p><strong><i className="fas fa-tag"></i>:</strong> <span className="text-muted">#countryside #authentic #localfood #Penang</span></p>
                        <p>
                            <a href="https://maps.app.goo.gl/bu3aejZeKXfYXvZ2A" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fas fa-map-marker-alt"></i> View on Google Maps
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img
                            src={balikPulauImage}
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Balik Pulau"
                        />
                    </div>
                </div>

                <hr className="featurette-divider" />

                {/* Featurette 2: Kerachut Beach  */}
                <div className="row featurette align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-bold">
                            Kerachut Beach <span className="text-muted">Rating: <i className="fas fa-star text-warning"></i> 4.6/5</span>
                        </h2>
                        <p className="lead">
                            <strong>Opinion:</strong> A relaxing beach where you can bask in the sun or embark on an adventurous journey along the nearby hiking trail.
                        </p>
                        <p><strong><i className="fas fa-exclamation-circle"></i> Heads-up!:</strong>The hiking trail can be challenging for some—proceed with caution.</p>
                        <p><strong><i className="fas fa-tag"></i>:</strong> <span className="text-muted">#beach #sunnyday #hiking #coconut</span></p>
                        <p>
                            <a href="https://maps.app.goo.gl/VMGjKecNj3jmNrGj9" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fas fa-map-marker-alt"></i> View on Google Maps
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img
                            src={kerachutImage}
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Kerachut Beach"
                        />
                    </div>
                </div>

                <hr className="featurette-divider" />

                {/* Featurette 3: Penang Turtle Sanctuary */}
                <div className="row featurette align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-bold">
                            Penang Turtle Sanctuary <span className="text-muted">Rating: <i className="fas fa-star text-warning"></i> 4/5</span>
                        </h2>
                        <p className="lead">
                            <strong>Opinion:</strong> Located near Kerachut Beach, this beautiful sanctuary is dedicated to conserving sea turtles.
                        </p>
                        <p><strong><i className="fas fa-exclamation-circle"></i> Heads-up!:</strong>Touching marine life is prohibited—stay mindful of the rules.</p>
                        <p><strong><i className="fas fa-tag"></i>:</strong> <span className="text-muted"> #turtle #sanctuary #ocean</span></p>
                        <p>
                            <a href="https://maps.app.goo.gl/dVeUP8krb12eN9gq5" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fas fa-map-marker-alt"></i> View on Google Maps
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img
                            src={turtleImage}
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Penang Turtle Sanctuary"
                        />
                    </div>
                </div>
            </div>
            <hr className="featurette-divider" />
        </div>
    );
}

export default HiddenGems;