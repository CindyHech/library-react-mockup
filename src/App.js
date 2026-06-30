import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";


function App() {

  const [cart, setCart] = useState ([]);

  function addToCart (book) {
    setCart ([...cart, {...book, quantity: 1 }])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => 
     (item.id === book.id) 
      ? {
      ...item,
      quantity: +quantity
     }
     : item
     
    )
  );
  }


  useEffect(() => {
    console.log(cart)
  }, [cart])

  // function addToCart(book) {
  //   const dupeItem = cart.find(item => +item.id === +book.id)
  //   if (dupeItem) {
  //     setCart(cart.map(item => {
  //       if (item.id === dupeItem.id) {
  //         return {
  //           ...item,
  //           quantity: item.quantity + 1,
  //         }
  //       }
  //       else {
  //         return item
  //       }
  //     }))
  //   }
  //   else {
  //     setCart([...cart, {...book, quantity:1}])
  //   }
  // }

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart])



  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/books" element= {<Books books={books}/>} />
         <Route path="/books/:id" element={<BookInfo cart={cart} books={books} addToCart={addToCart}/>} />
         <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
