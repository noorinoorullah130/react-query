import React from "react";

import { useQuery } from "@tanstack/react-query";

const fetchPosts = async (id) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) throw new Error("Error fetching data");
    return response.json();
};

function Posts({ id }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ["posts", id],
        queryFn: () => fetchPosts(id),
        staleTime: 5000,
    });

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Error occured: {error.message}</p>;

    return <div>{data.title}</div>;
}

export default Posts;
