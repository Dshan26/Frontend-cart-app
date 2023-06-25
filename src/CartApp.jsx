import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
  const { cardItems, handlerAddProductCard, handlerDeleteProduct } =
    useItemsCart();

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h3>Cart app</h3>
        <CartRoutes
          handlerAddProductCard={handlerAddProductCard}
          cardItems={cardItems}
          handlerDeleteProduct={handlerDeleteProduct}
        />
      </div>
    </>
  );
};
