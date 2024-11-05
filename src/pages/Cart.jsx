import React, { useEffect } from "react";

export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>Cart</div>;
}
