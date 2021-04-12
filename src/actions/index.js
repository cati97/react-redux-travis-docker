export const add_counter = (name, step) => {
    return {
        type: "ADD_COUNTER",
        payload: {
            name: name,
            step: step
        }
    }
}

export const increment = (name) => {
    return {
        type: "INCREMENT",
        payload: {
            name: name
        }
    }
}

export const decrement = (name) => {
    return {
        type: "DECREMENT",
        payload: {
            name: name
        }
    }
}

export const edit_step = (name, step) => {
    return {
        type: "EDIT_STEP",
        payload: {
            name: name,
            step: step
        }
    }
}

export const remove = (name) => {
    return {
        type: "REMOVE",
        payload: {
            name: name
        }
    }
}

export const count_down = (name) => {
    return {
        type: "COUNT_DOWN",
        payload: {
            name: name
        }
    }
}

export const stop = (name) => {
    return {
        type: "STOP",
        payload: {
            name: name
        }
    }
}