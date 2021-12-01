import React, { useState } from "react";

import { Navbar, Footer, Routes } from "./components";

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div className={theme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-black dark:text-white min-h-screen">
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
