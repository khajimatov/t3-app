import React from "react";

import { toast } from "react-hot-toast";

const Nav = () => {
  toast.success("Welcome to StockDash");
  return (
    <header className="flex flex-col items-center gap-x-40">
      <h1 className="text-2xl font-bold">Track favorite stock/crypto prices</h1>
      <h2 className="text-italic italic">
        Your tiny Dashboard
      </h2>
    </header>
  );
};

export default Nav;
