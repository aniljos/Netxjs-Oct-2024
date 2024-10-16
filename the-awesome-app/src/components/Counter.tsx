'use client'

import {ChangeEvent, useEffect, useState} from 'react';
import Message from './Message';
import {withBorder} from '@/hoc/withBorder';
//Counter initialValue={5}/>
type CounterProps = {
    initialValue: number
}

function Counter(props: CounterProps){

    
    const [counter, setCounter] = useState(props.initialValue);

    useEffect(() => {

        console.log("Counter updated", counter);

    }, [counter])

    function inc(){

       
        console.log("inc invoked");
        //setCounter(counter + 1);
        //setCounter(counter + 1);
        setCounter (prevCounter => prevCounter + 1);
        setCounter (prevCounter => prevCounter + 1);
        
        console.log("inc invoked", counter);
        
    }
    function decr(){
        setCounter(counter - 1);
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>){

        const value = evt.target.value;
        setCounter(Number(value));
    }


    return (
        <div>
            <h4>Count: {counter}</h4>
            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button onClick={decr}>Decr</button>
            </div>
            <div>
                Counter: <input type='number' value={counter} onChange={handleChange}/>
            </div>
            <br/>
            {counter > 10 ? <Message text='Hello'/> : null} 
        </div>
    )
}

export default withBorder(Counter);