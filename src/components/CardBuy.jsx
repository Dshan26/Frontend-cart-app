import React, { useEffect, useState } from "react";
import { calculateTotal } from "../services/ProductService";
import { useNavigate } from "react-router-dom";

export const CardBuy = ({ handlerDeleteProduct, cardItems }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(calculateTotal(cardItems));
  }, [cardItems]);

  const onDeleProduct = (id) => {
    console.log(id);
    handlerDeleteProduct(id);
  };

  const onCatalog = () => {
    navigate("/catalog");
  };
  return (
    <>
      <div className="my-4 w-50">
        <h3>Carro de Compras</h3>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Prodcutos</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cardItems.map((item) => (
              <tr key={item.product.id}>
                <td>{item.product.name}</td>
                <td>{item.product.price}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.product.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDeleProduct(item.product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="text-end fw-bold">
                Total
              </td>
              <td colSpan="2" className="text-start fw-bold">
                {total}
              </td>
            </tr>
          </tfoot>
        </table>
        <button className="btn btn-success" onClick={onCatalog}>
          Seguir comprando
        </button>
      </div>
    </>
  );
};
