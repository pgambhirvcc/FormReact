import React, { useEffect, useState } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/todos';

const UserData = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(100);

    const [todosList, setTodosList] = useState([]);

    const getUserTodos = async () => {
        const userData = await fetch(URL + `/${count}`);
        const userDataJSON = await userData.json();

        if (count > 0) {
            setTodosList([...todosList, userDataJSON]);
        }

        console.log(userDataJSON);
    }

    // Phases of UseEffect
    // Mounting Phase (When your component loads for the very first time)
    // Dependency array can be []
    // Updating Phase (When any of the dependency that you passed change, the useEffect will be called again)
    // Unmount phase (when the component is destroyed)

    // You can have multiple dependencies in a useEffect
    // You can create multiple useEffects as well with 0 or more dependencies

    useEffect(() => {
        console.log('Count updated::', count);
        getUserTodos();
        // return () => {
        //     console.log('Component desrtroyd');
        // }
    }, [count]);

    useEffect(() => {
        console.log("Drecrement called", count2);
    }, [count2])

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount2(count - 1);
    }

    return (
        <div>UserData


            <div>
                <button onClick={increment}>
                    Increment
                </button>
                <div>{count}</div>
                <hr />
                <button onClick={decrement}>
                    Decrement
                </button>
                <div>{count2}</div>
            </div>

            <div>
                {
                    todosList.map((todo) => {
                        return (
                            <div>
                                <h4>ID {todo.id}</h4>
                                <h3>Title: {todo.title}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserData