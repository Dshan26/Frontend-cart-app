import React, { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handlerAddProductCard }) => {
  const [ProductService, setProductService] = useState([]);

  const findAll = async () => {
    const prods = await getProducts();
    setProductService(prods);
  };

  useEffect(() => {
    findAll();
  }, []);

  return (
    <>
      <div className="row">
        {ProductService.map(({ id, name, description, price }) => (
          <div className="col-4 my-2" key={id}>
            <ProductCardView
              handlerAddProductCard={handlerAddProductCard}
              id={id}
              name={name}
              description={description}
              price={price}
            />
          </div>
        ))}
      </div>
    </>
  );
};
