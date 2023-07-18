import React, { useState } from "react";
import './Todo.css'

function Todo() {

    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    function handChange(event){

        let t = event.target.value;

        setText(t);

    }

    function addItem(event){

        event.preventDefault();

        if(text != ""){
            setItems([...items, text]);
            setText("");
        }

    }

    return (

        <div className="container">
            
            <h1>Todo</h1>

            <form>
                <input onChange={handChange} type="text" value={text}></input>
                <button onClick={addItem}>Add</button>
            </form>

            <ul>
                {items.map((item, key) => {
                    return(<li key={key}>{item}</li>)
                })}
            </ul>

        </div>

    )

}

export default Todo
