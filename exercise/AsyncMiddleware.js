const isPromise = (payload) => 
    (typeof(payload) === "object" || typeof(payload) ==="function")
    && typeof(payload.then) ==="function";

export const AsyncMiddelware = () => (next) => (action) =>{
    if (isPromise(action.payload)) {
        action.payload.data.then((data) => next({...action, payload:data}))
    } else {
        next(action);
    }
}
