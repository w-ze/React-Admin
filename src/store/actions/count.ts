import { ADD, ADD_TYPE } from '../../constants/index'

export interface ADDAction {
    type: ADD_TYPE,
    data?: object
}


export function add(data?: {}): ADDAction {
    return {
        type: ADD,
        data: data
    }
}
