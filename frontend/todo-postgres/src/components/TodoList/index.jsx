import { Todo } from "./styles"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { useContext } from "react";
import { GetContext } from "../../contexts/getContext";
import axios from "axios";

export function TodoList() {
    const {getTodos, todos} = useContext(GetContext)

    async function deleteTodo(todo) {
        await axios.delete(`http://localhost:3232/todos/${todo.id}`);
        getTodos();
    }

    async function handleStatusChange(todo) {
        await axios.put("http://localhost:3232/todos", {
            id: todo.id,
            status: !todo.status
        })
        getTodos();
    }
    
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <Todo key={todo.id}>
                        <div>
                            <input  onClick={() => handleStatusChange(todo)} type={"checkbox"}></input>
                            <p>{todo.name}</p>
                        </div>

                        <section>
                            <button className="editButton">
                                <AiOutlineEdit size={20} color={"#000"}/>
                            </button>
                            <button onClick={() => deleteTodo(todo)}>
                                <AiOutlineDelete size={20} color={"#E52E4D"} />
                            </button>
                        </section>
                        
                    </Todo>
                );
            })}
        </div>
    );
}