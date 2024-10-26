import Image from "next/image";

const page = () => {
  return (
    <>
      <div
        className="site-section hero-page bg-image bg-image-parallax overlay-dark"
        style={{ backgroundImage: "url(img/campaign-men.jpg)" }}
      >
        <div className="container">
          <div className="caption text-center fg-white">
            <h1>About</h1>
          </div>
        </div>
      </div>
      <div className="site-section about-page">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-lg-0">
              <a
                href="https://vimeo.com/317571768"
                className="img-place rounded "
              >
                <span className="play-icon">
                  <span className="icon-play" />
                </span>

                <Image
                  src="/img/hero-img_1.jpg"
                  alt="Image"
                  className="img-shadow"
                  width={500}
                  height={500}
                  unoptimized={true}
                />
              </a>
            </div>
            <div className="col-lg-5 ml-auto">
              <h2 className="section-title mb-3">About OnyxShop</h2>
              <p className="lead">
                Eveniet voluptatibus voluptates suscipit minima, cum voluptatum
                ut dolor, sed facere corporis qui, ea quisquam quis odit minus
                nulla vitae. Sit, voluptatem.
              </p>
              <p className="lead">
                Ipsum harum assumenda in eum vel eveniet numquam, cumque vero
                vitae enim cupiditate deserunt eligendi officia modi
                consectetur. Expedita tempora quos nobis earum hic ex asperiores
                quisquam optio nostrum sit!
              </p>
            </div>
          </div>
          <div className="row justify-content-around pt-3">
            <div className="col-md-5">
              <h5 className="fg-theme">Our Vision</h5>
              <p>
                Ipsum harum assumenda in eum vel eveniet numquam, cumque vero
                vitae enim cupiditate deserunt eligendi officia modi
                consectetur. Expedita tempora quos nobis earum hic ex asperiores
                quisquam optio nostrum sit!
              </p>
            </div>
            <div className="col-md-5">
              <h5 className="fg-theme">Our Mission</h5>
              <p>
                Ipsum harum assumenda in eum vel eveniet numquam, cumque vero
                vitae enim cupiditate deserunt eligendi officia modi
                consectetur. Expedita tempora quos nobis earum hic ex asperiores
                quisquam optio nostrum sit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
