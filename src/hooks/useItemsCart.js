import { useEffect, useReducer } from "react";
import { ItemsReducer } from "../reducer/ItemsReducer";

const initialCardItems = JSON.parse(sessionStorage.getItem("card")) || [];

export const useItemsCart = () => {
    const [cardItems, dispatch] = useReducer(ItemsReducer, initialCardItems);

  useEffect(() => {
    sessionStorage.setItem('card',JSON.stringify(cardItems))
  }, [cardItems]);

  const handlerAddProductCard = (product) => {
    const hasItems = cardItems.find((item) => item.product.id === product.id);

    if (hasItems) {
      dispatch({
        type: "UpdateQuantityAddProductCard",
        payload: product,
      });
    } else {
      dispatch({
        type: "AddProductCard",
        payload: product,
      });
    }
  };

  const handlerDeleteProduct = (id) => {
    dispatch(
      {
        type:'DeleteProductCard',
        payload:id,
      }
    )
  };

    return {
        cardItems,
        handlerAddProductCard,
        handlerDeleteProduct

    }
}