import "./Services.css";

function Services() {
  const services = [
    "GST Registration",
    "Income Tax Filing",
    "GHMC Registration",
    "GST Registration",
    "Labour License",
    "PAN Application",
    "MSME Registration",
    "Accounting Work",
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, idx) => (
          <div
            className="service-card"
            style={{ animationDelay: `${idx * 0.2}s` }}
            key={idx}
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
