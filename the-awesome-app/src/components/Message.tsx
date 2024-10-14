import { useEffect } from "react";

type MessageProps = {
    text: string,
    color?: string
}


function Message(props: MessageProps){

    console.log("rendering Message...");


    useEffect(() => {

        console.log("useEffect on mount");


        return () => {
            console.log("useEffect on ummount");
        }

    }, []);


    return (
        <div>
            <h4 style={{color: props.color}}>Message: {props.text}</h4>
            <p>This is a functional component</p>
            <p>Dynamic Content: {5 + 7}</p>
        </div>
    )
}

export default Message;