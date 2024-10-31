import { fetchProducts } from "@/app/utils/functions";
import StarRating from "@/app/components/StarRating";
import NotFound from "@/app/not-found";
import Link from "next/link";
import ProductCard from "@/app/components/Products";
import TabComponent from "@/app/components/ProductTab";
import Image from "next/image";

// // Generate static params for each product id
// export async function generateStaticParams() {
//   const allProducts = await fetchProducts();

//   return allProducts.map((product) => ({
//     id: product.id.toString(), // Convert id to string to match dynamic route
//   }));
// }

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = Number((await params).id);
  const allProducts = await fetchProducts();
  console.log(allProducts);
  const product = allProducts.find((product) => Number(product.id) === id);

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <div className="site-section py-5">
        <div className="container">
          <ul className="breadcrumb bg-white">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/product">Product</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="#">{product.category}</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="#">{product.subCategory}</Link>
            </li>
            <li className="breadcrumb-item">{product.name}</li>
          </ul>
          <div className="row">
            <div className="col-lg-7">
              <div className="row no-gutters">
                <div className="" style={{ width: "60%", height: "50%" }}>
                  <div
                    className="img-place"
                    style={{ height: "60%", overflow: "hidden" }}
                  >
                    <Image
                      src={product.image}
                      width={400}
                      height={400}
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        objectFit: "contain",
                        objectPosition: "top",
                      }}
                      alt=""
                      priority={true}
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 py-3">
              <h3 style={{fontSize: '20px', fontWeight: 'bold'}}>{product.name}</h3>
              <div
                className="d-flex flex-row "
                style={{ width: "100%" }}
              >
                <div style={{ fontSize: "20px", marginRight: "10px" }}>
                  {product.rating.stars}
                </div>
                <StarRating rating={product.rating.stars} />
              </div>

              <p className="mt-3">{product.description}</p>
              <p>
                <span className="fs-large fw-bold">Availability:</span> 240
              </p>
              <p className="fs-large fw-bold mb-1 mt-3">Size:</p>
              <div className="btn-group btn-group-gap size-pick">
                <button className="btn btn-theme-outline btn-sm select-target">
                  XS
                </button>
                <button className="btn btn-theme-outline btn-sm select-target">
                  S
                </button>
                <button className="btn btn-theme-outline btn-sm select-target">
                  M
                </button>
                <button className="btn btn-theme-outline btn-sm select-target">
                  L
                </button>
                <button className="btn btn-theme-outline btn-sm select-target">
                  XL
                </button>
              </div>
              <p className="fs-large fw-bold mb-1 mt-3">Quantity:</p>
              <div className="number-input">
                <button className="btn btn-theme btn-sm btn-decrease">
                  <span className="icon-minus" />
                </button>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  min={0}
                  max={250}
                />
                <button className="btn btn-theme btn-sm btn-increase">
                  <span className="icon-plus" />
                </button>
              </div>
              <h4 className="mt-4 mb-3">
                Price: ${(product.priceCents / 100).toFixed(2)}
              </h4>
              <a href="#" className="btn btn-theme-outline mr-2">
                <span className="icon-add_shopping_cart" /> Add to Cart
              </a>
              <Link href="/checkout" className="btn btn-theme">
                Proceed Checkout
              </Link>
            </div>
          </div>
          {/* Tabs all the way here */}

          <TabComponent description={product.description} />
          <div className="row no-gutters bg-light mt-5">
            <div className="col-12">
              <ul className="list-unstyled list-inline text-center mb-0 py-4">
                <li className="list-inline-item">
                  SKU: <span className="text-secondary">JAK-923031</span>
                </li>
                <li className="list-inline-item">
                  Categories:{" "}
                  <span className="text-secondary">{product.category}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 mt-3">
              <h2 className="title-section text-center">Similar Product</h2>
            </div>
            {allProducts.slice(0, 3).map((product, index) => (
              <ProductCard
                key={index}
                uid={index}
                id={product.id}
                name={product.name}
                image={product.image}
                rating={product.rating}
                priceCents={product.priceCents}
                category={product.category}
                subCategory={product.subCategory}
                keywords={product.keywords}
                isColumn={false}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
