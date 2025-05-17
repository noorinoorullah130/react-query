import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createPost = async (newPost) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
    });

    return response.json();
};

const CreatePost = () => {
    const [title, setTitle] = useState("");

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // mutating data
        mutate({ title, body: "This is a new post" });
    };

    return (
        <div>
            <h3>Lets create a post</h3>
            <form>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Post title..."
                />
                <button onClick={handleSubmit}>Create</button>
            </form>
        </div>
    );
};

export default CreatePost;
