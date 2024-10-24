import { fetchProducts } from "../utils/functions";
import { Product } from "../types/types";

import React from "react";

const SubCategory = async () => {
  const product: Product[] = await fetchProducts();
  console.log(product.length);
  return (
    <>
      {product.map((p) => (
        <div>{p.subCategory}</div>
      ))}
    </>
  );
};

export default SubCategory;
