import React from "react";
import "./App.css";
import { Sortable } from "./Sortable";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";

function App() {
  return (
    <>
      <Sortable
        {...{
          itemCount: 50,
          strategy: verticalListSortingStrategy,
        }}
      />
    </>
  );
}

export default App;
