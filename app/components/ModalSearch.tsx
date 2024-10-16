"use client";
interface SearchButtonProps {
  handleShowSearchModal: () => void; // Update type to match usage
}

const ModalSearch: React.FC<SearchButtonProps> = ({
  handleShowSearchModal,
}) => {
  return (
    <>
      <div
        className="modal"
        id="modalSearch"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                onClick={handleShowSearchModal}
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true" className="icon-close2" />
              </button>
              <form className="container my-3">
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
                      <li className="list-inline-item text-white">
                        Popular Search:{" "}
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="text-secondary badge badge-light"
                        >
                          Skinny Fit Pants
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="text-secondary badge badge-light"
                        >
                          Cargo Joggers
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="text-secondary badge badge-light"
                        >
                          Skinny Fit Blazer
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSearch;
