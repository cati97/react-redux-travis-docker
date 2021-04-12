let interval;

export const logger = store => next => action =>  {
    if (action.type === "INCREMENT") {
        alert("Incrementing");
    }
    if (action.type === "COUNT_DOWN") {
        interval = setInterval(myTimer, 1000);
        function myTimer() {
            next(action)
        }
    }
    if (action.type === "STOP") {
        clearInterval(interval);
    }
    next(action);
    console.log(action);
}
