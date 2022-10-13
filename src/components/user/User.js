import Address from '../address/Address'
import Posts from '../posts/Posts'
import { useEffect, useState } from "react";
import { getPostOfUser } from '../services/user.axios';


export default function User({ item, item: { address } }) {
    const [posts, setPosts] = useState([]);  
   
    useEffect(() => {      

        getPostOfUser(item.id).then(({ data }) => setPosts([...data]))

    }, [item.id]);


    return (
        <div>
            <h2>{item.name} {item.id}</h2>
            <p>{item.email} {item.username}</p>
            <Address address={address} />
            
            Post of user:
            <Posts posts={posts} />
        </div>
    )
}
