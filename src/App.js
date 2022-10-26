import { createContext } from "react";
import A from "./components/A";

export let MyContext = createContext();

export default function App() {
  let title = "okten";
  return (
    <div>
      <MyContext.Provider value={'Context'}>
        <A />
      </MyContext.Provider>
    </div>

  );
}