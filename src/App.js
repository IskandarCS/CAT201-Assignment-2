import React from "react";
import "./App.css";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS with Popper.js
import BucketList from "./BucketList";
import FlavoursofPenang from "./FlavoursofPenang";
import Malls from "./Malls";
import HiddenGems from "./HiddenGems";
import nadiahImage from "./assets/images/nadiah.jpg";
import adamImage from "./assets/images/adam.jpg";
import aidilImage from "./assets/images/aidil.jpg";
import amirahImage from "./assets/images/amirah.jpg";


function App() {
    return (
        <div>
            {/* Header Section */}
            <nav className="navbar navbar-light bg-custom">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand text-uppercase fw-bold" href="#">
                        <span>🌴</span> Explore Penang
                    </a>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#">🏠 Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#bucket-list">🗒️ Bucket List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#food">🍴 Flavours</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#malls">🛍️ Shops</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#hidden-gems">💎 Hidden Gems</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#about">📖 About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#contact">📩 Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Cover Section */}
            <section className="cover-section">
                <div className="cover-container">
                    <h1 className="display-1">Welcome to Explore Penang</h1> {/* 'display-1' for a larger heading */}
                    <p className="lead text-center">
                        Discover the wonders of Penang with our exclusive guide for <strong>USM students</strong>. From hidden gems to must-visit hotspots, explore, experience, and make the most of your student journey!
                    </p>
                    <a href="#bucket-list" className="btn btn-lg btn-light fw-bold border-white bg-white mt-3">Let’s Go!</a>
                </div>
            </section>

            {/* Map Section */}
            <section id="map" className="section">
                
            </section> 

            {/* Penang Bucket List Section */}
            <section id="bucket-list" className="section">
                <h2 className="section-title">Penang Bucket List</h2>
                <BucketList />
            </section>

            {/* Flavours of Penang Section */}
            <section id="food" className="section">
                <h2 className="section-title">Flavours of Penang</h2>
                <FlavoursofPenang />
            </section>

            {/* Shop & Chill Spots Section */}
            <section id="malls" className="section">
                <h2 className="section-title">Shop & Chill Spots</h2>
                <Malls />
            </section>

            {/* Penang Hidden Gems Section */}
            <section id="hidden-gems" className="section">
                <h2 className="section-title">Penang Hidden Gems</h2>
                <HiddenGems />
            </section>

            {/* About Section */}
            <section id="about" className="section">
    <h2 className="section-title">About Us</h2>
    <p className="about-intro">
        We are a group of passionate students from USM, dedicated to showcasing the beauty of Penang.
    </p>
    <div className="row justify-content-center text-center mt-4">
        <div className="col-md-3">
            <div className="card shadow-sm p-4">
                <div className="image-container mb-3">
                    <img
                        src={adamImage}
                        alt="Adam Irfan"
                        className="card-img-top"
                    />
                </div>
                <h4>🌴 Adam Irfan</h4>
                <p>
                    Tourist Spots Explorer: Shares the best places for fun and adventure in Penang, perfect for students to explore and unwind.
                </p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card shadow-sm p-4">
                <div className="image-container mb-3">
                    <img
                        src={nadiahImage}
                        alt="Nadiah Shahirah"
                        className="card-img-top"
                    />
                </div>
                <h4>🍴 Nadiah Shahirah</h4>
                <p>
                    Foodie Guide: Highlights Penang’s tastiest local eats, from budget-friendly bites to iconic dishes every student should try.
                </p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card shadow-sm p-4">
                <div className="image-container mb-3">
                    <img
                        src={amirahImage}
                        alt="Nur Amirah"
                        className="card-img-top"
                    />
                </div>
                <h4>🛍️ Nur Amirah</h4>
                <p>
                    Shop Guru: Recommends the best malls in Penang, focusing on a student-friendly vibe for shopping and entertainment.
                </p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card shadow-sm p-4">
                <div className="image-container mb-3">
                    <img
                        src={aidilImage}
                        alt="Aidil Iskandar"
                        className="card-img-top"
                    />
                </div>
                <h4>💎 Aidil Iskandar</h4>
                <p>
                    Hidden Gems Hunter: Uncovers Penang’s secret beaches and trails, helping students discover the island’s peaceful side.
                </p>
            </div>
        </div>
    </div>
</section>



            <section id="map-section" className="section">
                <h2 className="section-title">Find Us on the Map</h2>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4011752826486!2d100.29997057498367!3d5.355594294623133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac1a836ae7e53%3A0x835ac54fe8f4d95a!2sUniversiti%20Sains%20Malaysia!5e0!3m2!1sen!2smy!4v1736343436345!5m2!1sen!2smy"
                        width="800"
                        height="600"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="USM Map"
                    ></iframe>
                </div>
            </section>


            {/* Footer Section */}
            <section id="contact" className="section">
                <Footer />
            </section>
        </div>
    );
}

export default App;
