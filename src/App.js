import React, { createContext, useContext, useEffect, useState } from "react";
import Body from "./screens/Body/Body";
import Footer from "./screens/Footer/Footer";
import Header from "./screens/Header/Header";
import Sidebar from "./screens/Sidebar/Sidebar";
import "./App.css";

const AppContext = createContext(null);

export function useMyContext() {
  return useContext(AppContext);
}
function App() {
  const storage = localStorage;
  const numbers = localStorage.getItem("numbers");
  const [numbersInStorage, setNumbersInStorage] = useState(
    JSON.parse(numbers) || []
  );
  useEffect(() => {
    storage.setItem("numbers", JSON.stringify([]));
  }, [storage]);
  const addItem = (item) => {
    setNumbersInStorage((prev) => [
      ...prev,
      { id: Math.random().toString(), value: item },
    ]);
    storage.setItem("numbers", JSON.stringify(numbersInStorage));
  };

  const sortItems = () => {
    const sorted = [...numbersInStorage].sort((a, b) => a.value - b.value);
    setNumbersInStorage(sorted);
    storage.setItem("numbers", JSON.stringify(numbersInStorage.slice()));
  };
  const deleteItem = (elm) => {
    const filtered = numbersInStorage.filter((item) => item.id !== elm.id);
    setNumbersInStorage(filtered);
    storage.removeItem("id", elm.id, "value", elm.value);
  };

  const providerValue = {
     addItem,
    sortItems,
    deleteItem,
    nums: numbersInStorage,
  };
  return (
    <div className="App">
      <AppContext.Provider value={providerValue}>
        <div className="mainContainer">
          <div className="topContainer">
            <Header />
            <Body />
          </div>
          <Sidebar />
        </div>
      </AppContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
