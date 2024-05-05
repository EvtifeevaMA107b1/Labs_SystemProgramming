import React, { useState } from "react";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

 function Fetcher() {

    const [id, setId] = useState("");

    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
         
            const postResponse = await fetch(`${POSTS_URL}/${id}`);

            const postData = await postResponse.json();
            setPost(postData);

         if (postData.userId) 
             {
                const userResponse = await fetch(`${USERS_URL}/${postData.userId}`);
                const userData = await userResponse.json();
                setUser(userData);
            }
     
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <br />
            <button type="submit">Получить данные</button>
            {post && user && (
                <div>
                    <div>
                        <strong>Имя:</strong> {user.name}<br />
                        <strong>Почта:</strong> {user.email}
                    </div>
                    <h2>Заголовок: {post.title}</h2>
                    <p>Тело: {post.body}</p>
                    
                </div>
            )}
           
        </form>
    );
}

export default Fetcher;