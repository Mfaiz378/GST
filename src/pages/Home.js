import "./Home.css";

function Home() {
  return (
    <div className="home-page">
     <div className="hero">
  <h1>Welcome to GST &  Services</h1>
  <p>Your one-stop shop for GST AND REGISTRATIONS QUERIES.</p>
  <a href="/contact" className="cta-button">Get Started</a>
</div>
<div className="about">
  <h2>About Us</h2>
  <p>We provide GST filing, tax consultation, registration and various services.</p>
  
</div>
<footer className="footer">
  <div className="footer-details">
    <p><strong>Name:</strong> Naseem Banu</p>
    <p>
      <strong>Contact:</strong>{" "}
      <a href="tel:+918374235865">+91-8374235865</a>
    </p>
    <p>
      <strong>Email:</strong>{" "}
      <a href="mailto:nazbn786@gmail.com">nazbn786@gmail.com</a>
    </p>
  </div>
  <div className="footer-bottom">
    © {new Date().getFullYear()} My GST & Business Services | All Rights Reserved
  </div>
</footer>


    </div>
  );
}

export default Home;
