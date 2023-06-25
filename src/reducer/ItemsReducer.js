export const ItemsReducer = (state = [], action) => {
  switch (action.type) {
    case "AddProductCard":
      return [
        ...state,
        {
          product: action.payload,
          quantity: 1,
        },
      ];
    case "UpdateQuantityAddProductCard":
      return state.map((i) => {
        if (i.product.id === action.payload.id) {
          return {
            ...i,
            quantity:i.quantity+1,

          };
        }
        return i;
      });
    case "DeleteProductCard":
      return state.filter((item) => item.product.id !== action.payload);

    default:
      return state;
  }
};
