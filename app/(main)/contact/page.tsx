// ContactPage.jsx
import React from "react";
// import "../../css/contact.css";

const ContactPage = () => {
  const contactCards = [
    {
      icon: "icon-map-marker",
      label: "Location",
      value: "083 Street, Country",
    },
    {
      icon: "icon-phone2",
      label: "Phone Number",
      value: "+023 1382-2394-222",
    },
    {
      icon: "icon-mail_outline",
      label: "Email",
      value: "example@mail.com",
    },
  ];

  const formFields = [
    { id: "fullname", label: "Fullname", type: "text", col: 12 },
    { id: "email", label: "Email", type: "text", col: "sm-6" },
    { id: "subject", label: "Subject", type: "text", col: "sm-6" },
    { id: "message", label: "Message", type: "textarea", col: 12, rows: 8 },
  ];

  return (
    <>
      <div
        className="site-section hero-page-contact bg-image bg-image-parallax overlay-dark"
        style={{ backgroundImage: "url(img/campaign-men.jpg)" }}
      >
        <div className="container">
          <div className="caption text-center fg-white">
            <h1>Get in Touch</h1>
          </div>
        </div>
      </div>

      <div className="site-section contact-page">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {contactCards.map((card, index) => (
                <div className="card" key={index}>
                  <div className="card-header">
                    <span className={card.icon} />
                  </div>
                  <div className="card-body">
                    <p className="fg-theme mb-0">{card.label}</p>
                    <h5>{card.value}</h5>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-6">
              <form className="contact-form">
                <div className="form-row">
                  {formFields.map((field) => (
                    <div className={`col-${field.col}`} key={field.id}>
                      <div className="input-group floating-label my-2">
                        {field.type === "textarea" ? (
                          <textarea
                            id={field.id}
                            className="form-control"
                            rows={field.rows}
                          />
                        ) : (
                          <input
                            type={field.type}
                            id={field.id}
                            className="form-control"
                          />
                        )}
                        <label
                          htmlFor={field.id}
                          className="floating-control-label"
                        >
                          {field.label}
                        </label>
                      </div>
                    </div>
                  ))}

                  <div className="col-12">
                    <div className="input-group my-2">
                      <div className="custom-file">
                        <input
                          type="file"
                          id="attach"
                          className="custom-file-input"
                        />
                        <label htmlFor="attach" className="custom-file-label">
                          <span className="icon-attach_file" /> Attach File
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-3">
                    <button type="submit" className="btn btn-theme">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="map-container">
        <div id="google-map" className="google-map" />
      </div>
    </>
  );
};

export default ContactPage;
