"use client";

const page: React.FC = () => {
  return (
    <>
      <div style={{backgroundColor: '#fff', height: '100svh'}}>
        <form className="container" style={{marginTop: '100px'}}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here..."
                />
                <button type="submit" className="btn btn-theme">
                  Search
                </button>
              </div>
              <ul className="list-unstyled list-inline mt-2">
                <li className="list-inline-item">
                  Popular Search:{" "}
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-secondary badge badge-light">
                    Skinny Fit Pants
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-secondary badge badge-light">
                    Cargo Joggers
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-secondary badge badge-light">
                    Skinny Fit Blazer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
