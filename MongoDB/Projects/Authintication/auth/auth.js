const sessionMap = new Map();

const setUser = (id, user) => {
    sessionMap.set(id, user);
}
const getUser = (id) => {
    return sessionMap.get(id);
}

module.exports = { setUser, getUser }