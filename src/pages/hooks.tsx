import React, { FC, useEffect, useState, createContext } from 'react'
import Son1 from './son1'

export interface Context {
    count: number
}

export const FatherContext = createContext<Context>({ count: 0 });

const Hooks: FC = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        return (() => {

        })
    }, [count])
    return (
        <div>
            <button>-</button>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <FatherContext.Provider value={{count:count}}>
                <Son1 setParent={(count:number)=>{setCount(0)}}></Son1>
            </FatherContext.Provider>
        </div>
    )
}

export default Hooks