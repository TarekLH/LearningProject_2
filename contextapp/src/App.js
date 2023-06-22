import React from "react";
// components
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextPovider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextPovider>
          <Navbar/>
          <BookList/>
          <ThemeToggle/>
        </AuthContextPovider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;