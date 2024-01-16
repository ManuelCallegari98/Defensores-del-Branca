import React, { useState } from 'react';


const SelectorCantidad = ({quantity, setQuantity}) => {

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <label for="Quantity" class="sr-only"> Quantity </label>

      <div class="flex items-center gap-1">
        <button type="button" onClick={decrement} class="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75">
          -
        </button>

        <input
          type="number"
          id="Quantity"
          value={quantity}
          class="h-6 w-6 rounded border-gray-200 sm:text-sm text-black" style={{
            "-webkit-appearance": "none",
            "margin": "0",
            "-moz-appearance": "textfield"
          }}
        />

        <button type="button" onClick={increment} class="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75">
          +
        </button>
      </div>
    </div>
  );
};

export default SelectorCantidad;