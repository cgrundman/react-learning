const NewTodo = () => {
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' />
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodo;