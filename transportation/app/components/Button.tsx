const Button = (props:{ 
      children: React.ReactNode; onClick?: () => void }) => {
    return (
        <button onClick={props.onClick} className="bg-blue-500 text-white px-4 py-2">
            {props.children}
        </button>
    );
}

export default Button;