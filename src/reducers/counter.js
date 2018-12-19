import C from '../constants'

export default (state = 0, action) => {
    const { type } = action;

    switch (type) {
        case C.COUNTER_DECREMENT:
            return state - 1

        case C.COUNTER_INCREMENT:  
            return state + 1
            
        default: 
            return state
    }
}