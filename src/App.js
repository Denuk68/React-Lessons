import { useSelector } from "react-redux";

export default function App() {
  let state = useSelector(state => state);
  console.log("App ", state)
  return (
    <div>
      App
    </div>
  );
}