import React, { FC, useContext } from 'react'
import { FatherContext } from './hooks'
import { Context } from './hooks'
import {Button} from 'antd'

interface ChildProps {
    setParent: Function
}

const Son1: FC<ChildProps> = (props) => {
    const { setParent } = props;
    const count = useContext<Context>(FatherContext).count;
    // useEffect(() => {
    //     console.log(count)
    // })
    // const [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <Button type="primary" onClick={() => setParent(0)}>传值</Button>
        </div>
    )
}

export default Son1