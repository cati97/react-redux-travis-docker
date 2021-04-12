
// const counters = [
//     {
//         name: "Days till holiday",
//         value: 0,
//         step: 2 // o ile chcemy modyfikowac
//     },
//     {
//         name: "Hours till end of day",
//         value: 0,
//         step: 1
//     }
// ]

const counterReducer = (counters= [], action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return [...counters, newCounter(action.payload.name, action.payload.step)]
        case 'INCREMENT':
            return counters.map(counter => {
                if (counter.name === action.payload.name) {
                    return {...counter, value: counter.value + counter.step}
                }
                return counter;
            })
        case 'DECREMENT':
            return counters.map(counter => {
                if (counter.name === action.payload.name) {
                    return {...counter, value: counter.value - counter.step}
                }
                return counter;
            })
        case 'EDIT_STEP':
            return counters.map(counter => {
                if (counter.name === action.payload.name) {
                    return {...counter, step: action.payload.step}
                }
                return counter;
            })
        case 'REMOVE':
            return counters.filter(counter => counter.name !== action.payload.name)
        case 'COUNT_DOWN':
            return counters.map(counter => {
                if (counter.name === action.payload.name) {
                    return {...counter, value: counter.value - 1}
                }
                return counter;
            })
        case 'STOP':
            return counters;
        default:
            return counters;
    }
}

const newCounter = (name, step) => {
    return {name: name, value: 0, step: step}
}

export default counterReducer;