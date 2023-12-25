// Importing necessary dependencies from the 'react' library
import React, { useState } from 'react';

// Importing the 'useDispatch' hook from 'react-redux' and the 'addTodo' action from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

// Define the AddTodo component
function AddTodo() {
    // State variable to manage the input value
    const [input, setInput] = useState('');
    
    // Accessing the dispatch function from the Redux store
    const dispatch = useDispatch();

    // Function to handle the submission of the form (adding a new todo)
    const addTodoHandler = (e) => {
        // Preventing the default form submission behavior
        e.preventDefault();

        // Dispatching the 'addTodo' action with the input value as payload
        dispatch(addTodo(input));

        // Clearing the input field after adding a todo
        setInput('');
    };

    // Render the form for adding a new todo
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            {/* Input field for entering a new todo */}
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            
            {/* Button to submit the form and add a new todo */}
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    );
}

// Export the AddTodo component as the default export of this module
export default AddTodo;
