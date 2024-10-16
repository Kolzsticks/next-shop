

const page = () => {
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
              <div className="card">
                <div className="card-header">
                  <span className="icon icon-map-marker" />
                </div>
                <div className="card-body">
                  <p className="fg-theme mb-0">Location</p>
                  <h5>083 Street, Country</h5>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <span className="icon icon-phone2" />
                </div>
                <div className="card-body">
                  <p className="fg-theme mb-0">Phone Number</p>
                  <h5>+023 1382-2394-222</h5>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <span className="icon icon-mail_outline" />
                </div>
                <div className="card-body">
                  <p className="fg-theme mb-0">Email</p>
                  <h5>example@mail.com</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <form className="contact-form">
                <div className="form-row">
                  <div className="col-12">
                    <div className="input-group floating-label my-2">
                      <input
                        type="text"
                        id="fullname"
                        className="form-control"
                        
                      />
                      <label
                        htmlFor="fullname"
                        className="floating-control-label"
                      >
                        Fullname
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group floating-label my-2">
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        
                      />
                      <label htmlFor="email" className="floating-control-label">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group floating-label my-2">
                      <input
                        type="text"
                        id="subject"
                        className="form-control"
                        
                      />
                      <label
                        htmlFor="subject"
                        className="floating-control-label"
                      >
                        Subject
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group floating-label my-2">
                      <textarea
                        className="form-control"
                        id="message"
                        rows={8}
                        
                        defaultValue={""}
                      />
                      <label
                        htmlFor="message"
                        className="floating-control-label"
                      >
                        Message
                      </label>
                    </div>
                  </div>
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
      <div className="maps-container">
        <div
          id="google-map"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "rgb(229, 227, 223)",
            }}
          >
            <div
              tabIndex={0}
              aria-label="Map"
              aria-roledescription="map"
              role="region"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                padding: 0,
                borderWidth: 0,
                margin: 0,
                left: 0,
                top: 0,
              }}
              aria-describedby="E3888A08-E772-4274-B1AE-0BF5022A53DC"
            >
              <div
                id="E3888A08-E772-4274-B1AE-0BF5022A53DC"
                style={{ display: "none" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                zIndex: 0,
                left: 0,
                top: 0,
                height: "100%",
                width: "100%",
                padding: 0,
                borderWidth: 0,
                margin: 0,
              }}
              className="gm-style"
            >
              <div
                style={{
                  position: "absolute",
                  zIndex: 0,
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: "100%",
                  padding: 0,
                  borderWidth: 0,
                  margin: 0,
                  cursor:
                    'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default',
                  touchAction: "pan-x pan-y",
                }}
              >
                <div
                  style={{
                    zIndex: 1,
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "100%",
                    willChange: "transform",
                    transform: "translate(0px)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      zIndex: 100,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 0,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          zIndex: 983,
                          transform: "matrix(1, 0, 0, 1, -38, -150)",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 256,
                            height: 256,
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-256px",
                            top: 0,
                            width: 256,
                            height: 256,
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 256,
                            top: 0,
                            width: 256,
                            height: 256,
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-512px",
                            top: 0,
                            width: 256,
                            height: 256,
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 512,
                            top: 0,
                            width: 256,
                            height: 256,
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-768px",
                            top: 0,
                            width: 256,
                            height: 256,
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      zIndex: 101,
                      width: "100%",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      zIndex: 102,
                      width: "100%",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      zIndex: 103,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: 26,
                        height: 37,
                        overflow: "hidden",
                        position: "absolute",
                        left: "-13px",
                        top: "-37px",
                        zIndex: 0,
                      }}
                    >
                      <img
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 26,
                          height: 37,
                          userSelect: "none",
                          border: 0,
                          padding: 0,
                          margin: 0,
                          maxWidth: "none",
                        }}
                        alt=""
                        src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi3.png"
                        draggable="false"
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: -1,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          zIndex: 983,
                          transform: "matrix(1, 0, 0, 1, -38, -150)",
                        }}
                      >
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: 0,
                            top: 0,
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: "-256px",
                            top: 0,
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: 256,
                            top: 0,
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: "-512px",
                            top: 0,
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: 512,
                            top: 0,
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: "-768px",
                            top: 0,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ position: "absolute", left: 0, top: 0, zIndex: 0 }}
                  />
                  <div
                    style={{ position: "absolute", left: 0, top: 0, zIndex: 0 }}
                  />
                </div>
                <div
                  style={{
                    zIndex: 3,
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    padding: 0,
                    borderWidth: 0,
                    margin: 0,
                    left: 0,
                    top: 0,
                    touchAction: "pan-x pan-y",
                  }}
                >
                  <div
                    style={{
                      zIndex: 4,
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: "100%",
                      willChange: "transform",
                      transform: "translate(0px)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 104,
                        width: "100%",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 105,
                        width: "100%",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 106,
                        width: "100%",
                      }}
                    >
                      <span
                        id="E53BA2A5-B5CB-480A-8292-0EDFFA8AC323"
                        style={{ display: "none" }}
                      >
                        To navigate, press the arrow keys.
                      </span>
                      <div
                        style={{
                          width: 26,
                          height: 37,
                          overflow: "hidden",
                          position: "absolute",
                          left: "-13px",
                          top: "-37px",
                          zIndex: 0,
                        }}
                        aria-label="South Jakarta, INA"
                        role="img"
                        tabIndex={-1}
                      >
                        <img
                          style={{
                            width: 26,
                            height: 37,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none",
                          }}
                          alt=""
                          src="https://maps.gstatic.com/mapfiles/transparent.png"
                          draggable="false"
                          useMap="#gmimap0"
                        />
                        <map name="gmimap0" id="gmimap0">
                          <area
                            coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5"
                            shape="poly"
                            tabIndex={-1}
                            style={{
                              display: "inline",
                              position: "absolute",
                              left: 0,
                              top: 0,
                              cursor: "pointer",
                              touchAction: "none",
                            }}
                            title="South Jakarta, INA"
                          />
                        </map>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 107,
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    zIndex: 4,
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    padding: 0,
                    borderWidth: 0,
                    margin: 0,
                    left: 0,
                    top: 0,
                    opacity: 0,
                  }}
                  className="gm-style-moc"
                >
                  <p className="gm-style-mot" />
                </div>
              </div>
              <iframe
                aria-hidden="true"
                frameBorder={0}
                tabIndex={-1}
                style={{
                  zIndex: -1,
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  border: "medium",
                  opacity: 0,
                }}
              />
              <div
                style={{
                  pointerEvents: "none",
                  width: "100%",
                  height: "100%",
                  boxSizing: "border-box",
                  position: "absolute",
                  zIndex: 1000002,
                  opacity: 0,
                  border: "2px solid rgb(26, 115, 232)",
                }}
              />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              fontWeight: 500,
              fontFamily: "Roboto, sans-serif",
              padding: "15px 25px",
              boxSizing: "border-box",
              top: 5,
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: 5,
              left: "50%",
              maxWidth: 375,
              position: "absolute",
              transform: "translateX(-50%)",
              width: "calc(100% - 10px)",
              zIndex: 1,
            }}
          >
            <div>
              <img
                alt=""
                src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"
                style={{
                  padding: 0,
                  margin: 0,
                  border: 0,
                  height: 17,
                  verticalAlign: "middle",
                  width: 52,
                  userSelect: "none",
                }}
                draggable="false"
              />
            </div>
            <div style={{ lineHeight: 20, margin: "15px 0px" }}>
              <span style={{ color: "rgba(0, 0, 0, 0.87)", fontSize: 14 }}>
                This page can't load Google Maps correctly.
              </span>
            </div>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ lineHeight: 16, verticalAlign: "middle" }}>
                    <a
                      href="http://g.co/dev/maps-no-account"
                      target="_blank"
                      rel="noopener"
                      style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: 12 }}
                    >
                      Do you own this website?
                    </a>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <button className="dismissButton">OK</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
