import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CatalogView } from "../components/CatalogView";
import { CardBuy } from "../components/CardBuy";

export const CartRoutes = ( {handlerAddProductCard,cardItems,handlerDeleteProduct} ) => {
  return (
    <Routes>
      <Route
        path="catalog"
        element={<CatalogView handlerAddProductCard={handlerAddProductCard} />}
      />
      <Route
        path="cart"
        element={
          cardItems?.length <= 0 ? (
            <div className="alert alert-warning">
              No hay productos en el carro de compras
            </div>
          ) : (
            <div className="my-4 w-50">
              <CardBuy
                cardItems={cardItems}
                handlerDeleteProduct={handlerDeleteProduct}
              />
            </div>
          )
        }
      />

      <Route path="/" element={<Navigate to={"/catalog"} />} />
    </Routes>
  );
};
