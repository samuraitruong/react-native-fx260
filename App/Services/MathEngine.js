import Persitence from './ImmutablePersistenceTransform'
const processKey =  (currentState,shiftOn, key) => {
    const newState = {...currentState};
    newState.display = (newState.display? newState.display: '') +  key.normal;
    newState.lastKey = key;
    
    return Promise.resolve({
        ok: true,
        data: newState
    });
}

export default {
    processKey
}