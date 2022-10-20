import { useState, useEffect } from "react";
import { getPosts } from "../services/service";
import Posts from "../posts/Posts";
import Address from "../address/Address";

export default function User({ user: { id, name, email, address } }) {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts(id).then(({ data }) => setPosts([...data]))
    }, [id]);

    return (
        <div className="user">
            <h3>-{id} {name} {email}</h3>
            <Address address={address} />
            <h4>Posts of user:</h4>
            <Posts posts={posts} />
        </div>
    )
}