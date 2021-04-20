import React, { useEffect } from "react";
import Header from "./components/Header/index";
import Table from "./components/Table/index";
import "./style.css";
// import SearchForm from "./components/SearchForm/index";

// import Header from "./components/Header";
// import SearchForm from "./components/SearchForm";// Change to Search
// import Table from "./components/Table";

function App() {
  useEffect(() => {
    console.log("Hey");
  }, [])
  return (
    <div className="main">
      <Header />
      {/* <SearchForm /> */}
      <Table />
    </div>
    

      
  );
}

export default App;
