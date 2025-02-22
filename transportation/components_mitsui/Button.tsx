'use client'
const Button=(props)=>{

    return(
        <div>
            <button className="text-gray-500" onClick={props.eventName}>{props.name}</button>
        </div>
    )
};

export default Button;