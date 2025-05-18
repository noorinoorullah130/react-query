import { useQuery } from "@tanstack/react-query";

const useTodos = () => {
    const fetchTodos = () =>
        fetch(`https://jsonplaceholder.typicode.com/user/1/todos`).then((res) =>
            res.json()
        );

    return useQuery({
        // users/1/todos
        queryKey: ["todos"],
        queryFn: fetchTodos,
        staleTime: 3000,
    });
};

export default useTodos;
