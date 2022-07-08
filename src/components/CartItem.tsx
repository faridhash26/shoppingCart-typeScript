import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Book from "../assets/images/book.jpg";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={Book}
        style={{ width: "124px", height: "75px", objectFit: "cover" }}
        alt={item.name}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && <span className="text-muted">{quantity}</span>}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        size="sm"
        variant="outline-danger"
        onClick={() => removeFromCart(item.id)}
      >
        X
      </Button>
    </Stack>
  );
};

export default CartItem;
