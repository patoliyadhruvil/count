import { useState } from "react"

const Plus = () =>{

    const [count , setcount] = useState(0);

    const Increment = ()=>{

        console.log("Click");
        setcount(count + 1);

    }

    const Decrement = () =>{
        if(count == 0){
            setcount(0)
        }else{
            setcount(count - 1);
        }

    }

    return(
        <div>
            <button onClick={Increment}>
                +
            </button>

            <button>
                {count}
            </button>

            <button onClick={Decrement}>
                -
            </button>
        </div>

    )


}
export default Plus;