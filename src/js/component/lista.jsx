import React, { useCallback, useEffect, useState } from "react";


export default function App() {

    const [lista, setLista] = useState(['Nain'])
    const [inputText, setInputText] = useState("")
    function handleChange(e) {
        setInputText(e.target.value)
    }

    function delateTask(i){
        setLista(lista.filter((t,index)=> i != index))
        
    }
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
         
            setLista((prev )=> prev.concat([inputText]));
             setInputText("");
        }

    }

    return (
        <div className="container" >
            <div className="InputList m-auto">
                <input  className="p-2 m-auto"style={{ borderBottom: " 2px red",width:"21",color:"white" }} onChange={handleChange} value={inputText} onKeyDown={handleKeyPress} type="text "  placeholder="Ingrese su nombre"></input>
            </div>
            <div className="ToDoList m-auto mt-3 " style={{ listStyle: "none", width: "39rem", height: "25rem" }} >
                <ul style={{ listStyle: "none" }}>
                    { lista.map((nombre  , i) => (
                        <div className="ItemsContainer m-auto p-3  mt-2 d-flex justify-content-between  align-items-center " style={{ background: "hsl(227, 19%, 72%)", height: "4rem", width: "21rem", borderRadius: "0.8rem",overflow:"hidden"}} >

                            <li className="text-white" aria-disabled="true">{nombre}  </li>
                           <button style={{background:"hsl(227, 19%, 72%)",  border:"none"  }}><i className="fas fa-trash-alt"
                                onClick={() =>delateTask(i)}> </i> </button> 
                        </div>
                    )
                    )}
                    
                </ul>
            </div >

        </div >

    )
}
