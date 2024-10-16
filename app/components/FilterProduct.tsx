interface FilterProductSection {
  categories: { name: string; count: number }[];
  sizes: string[];
  colors: string[];
}

const FilterProduct: React.FC<FilterProductSection> = ({
  categories,
  sizes,
  colors,
}) => {
  return (
    <>
      <div className="col-lg-4">
        <div
          className="card-filter-btn text-center"
          
          
        >
          <button className="btn btn-theme btn-block">Filter Product</button>
        </div>
        <div className="card card-filter">
          <div className="card-header d-flex flex-row justify-content-between py-2">
            <h5>Search Filter</h5>
            <a href="#">Clear All</a>
          </div>
          <div className="card-body py-3">
            <p className="fs-large">Category</p>
            <ul className="categories">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href="#">
                    {category.name}{" "}
                    <span className="badge">{category.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-body py-3">
            <p className="fs-large">Size</p>
            <div className="btn-group size-pick">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className="btn btn-theme-outline btn-sm select-target"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="card-body py-3">
            <p className="fs-large">Color</p>
            <div className="color-pick">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className={`color-item bg-${color} select-target`}
                />
              ))}
            </div>
          </div>
          <div className="card-body py-3">
            <p className="fs-large">Price Range</p>
            <div className="row">
              <div className="col-6">
                <input type="text" className="form-control" placeholder="Min" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control" placeholder="Max" />
              </div>
            </div>
          </div>
          <div className="card-footer py-3">
            <button className="btn btn-theme-outline btn-block mt-2">
              Update Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterProduct;
