import React, { useState } from "react";

import Posts from "./components/Posts";
import PostById from "./components/PostById";
import CreatePost from "./components/CreatePost";

function App() {
    const [isMounted, setIsMounted] = useState(false);

    return (
        <div>
            <h1>Hello, React Query!</h1>

            {/* <button onClick={() => setIsMounted((prev) => !prev)}>
                Toggle
            </button>

            {isMounted && <Posts />}

            <PostById id={1} /> */}

            <CreatePost />
        </div>
    );
}

export default App;
