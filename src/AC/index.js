import C from '../constants';

export const increment = () => ({
    type: C.COUNTER_INCREMENT
})

export const decrement = () => ({
    type: C.COUNTER_DECREMENT
})

export const reset = () => ({
    type: C.COUNTER_RESET
})