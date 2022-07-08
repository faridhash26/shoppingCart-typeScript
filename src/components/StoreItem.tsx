import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};
const StoreItem = ({ id, name, price, imageUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  var quantity = getItemQuantity(id);

  return (
    <Card>
      <Card.Img
        variant="top"
        src={imageUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex  justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button onClick={() => increaseItemQuantity(id)}>
              add to cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center "
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                  cart
                </div>
                <Button onClick={() => increaseItemQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
