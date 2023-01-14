import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./services/posts.api";


export default function App() {
  let state = useSelector(state => state);
  let { posts } = state;

  let dispatch = useDispatch()

  useEffect(() => {
    getPosts().then( data => {
      dispatch({type: "GET_POSTS", payload: data})
    })
  }, [])


  return (
    <div>
      {posts.map(value => <div key={value.id}> {value.id} - {value.title}</div>)}
    </div>
  );
}