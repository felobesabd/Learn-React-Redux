import React from "react";
import {Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

let App = () => {
    const data = useSelector(e => e.red.counter)

    const login = useSelector(e => e.log.islog)

    const dispatch = useDispatch()

    return (
        <div>
        <h3>Counter:- {data}</h3>
        {
            login === true ? <h3>Success Login</h3> : <h3>Faild Login</h3>
        }
        <Button onClick={()=>dispatch({type: 'increase'})}>Increase +</Button>
        <Button onClick={()=>dispatch({type: 'decrease'})}>Decrease -</Button>
        <Button onClick={()=>dispatch({type: 'reset'})}>Reset +</Button>
        <Button onClick={()=>dispatch({type: 'islogin'})}>Login</Button>
        <Button onClick={()=>dispatch({type: 'notlogin'})}>Not Login</Button>
        </div>
    )
}
export default App;