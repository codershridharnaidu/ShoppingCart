import React from "react";
import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

function Carsitems() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <Container>
      <h3 className="text-center my-4">Cart Items</h3>

      {items.length > 0 ? (
        <table className="table m-4">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {items.map((p) => (
              <tr key={p.id}>
                <td>
                  <img
                    src={p.image}
                    alt={p.title}
                    height={80}
                    width={80}
                  />
                </td>
                <td>{p.title}</td>
                <td>{p.quantity}</td>
                <td>
                  <LiaRupeeSignSolid />
                  {p.price * p.quantity}
                </td>
                <td>
                  <Button variant="danger" size="sm">
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={3} className="text-end fw-bold">
                Total Amount:
              </td>
              <td colSpan={2} className="fw-bold">
                <LiaRupeeSignSolid />
                {totalPrice}
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <>
          <h2 className="text-center">Please Add Products in Cart</h2>
          <Button
            variant="primary"
            className="mx-auto d-block"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </>
      )}
    </Container>
  );
}

export default Carsitems;
  