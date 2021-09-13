export const getUrl = (path) => {
    if (process.env.REACT_APP_USE_LOCAL_SERVER === 'true') {
        return `http://localhost:8080/${path}`;
    } else {
        return `http://13.251.49.123:8080/${path}`;
    }
}