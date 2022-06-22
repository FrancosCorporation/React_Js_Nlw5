import { useState } from "react";

export function Button(props) {
    const [counter, setCounter] = useState(1);

    function increment(){
        setCounter(counter+1);
    }
    return (
        <div>
            <span>{counter}</span>
            <button onClick={increment}>{props.children}</button>
        </div>
    );
}
