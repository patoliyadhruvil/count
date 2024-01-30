import { useRef  } from "react"

const Ref = () =>{

    const myRef = useRef();

    const HandleClick = () =>{


        console.log("click",myRef);
        myRef.current.style.backgroundColor="red";
        myRef.current.innerText="Hello";

    }

    return(

        <button onClick={HandleClick} type="button" ref={myRef} className="btt">
            Read More...
        </button>

    )
}
export default Ref;