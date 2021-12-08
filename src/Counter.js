import {counter} from './store'
import {useSelector, useDispatch} from 'react-redux'

const Counter = () => {

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    const increaseHandler = ()=>{
        dispatch(counter.increase())
    }

    const decreaseHandler = ()=>{
        dispatch(counter.decreaseByFive(5))
    }
    
    return (
        <div>

            {count}

            <button onClick={increaseHandler}> Increase </button>
            <button onClick={decreaseHandler}> Decrease By 5 </button>
        </div>
    )
}

export default Counter
