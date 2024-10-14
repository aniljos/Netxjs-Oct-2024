'use client'
//Counter initialValue={5}/>
type CounterProps = {
    initialValue: number
}

function Counter(props: CounterProps){

    function inc(){
        console.log("inc invoked");
    }


    return (
        <div>
            <h4>Count: {props.initialValue}</h4>
            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button>Decr</button>
            </div>
        </div>
    )
}

export default Counter;