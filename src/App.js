import { createContext } from "react";
import A from "./components/A";

export let MyContext = createContext();

export default function App() {
  let title = "Hello, i'm context ";
  return (
    <div>
      <MyContext.Provider value={title}>
        <A />
      </MyContext.Provider>
    </div>

  );
}