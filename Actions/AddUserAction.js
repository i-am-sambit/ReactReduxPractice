export const addUser = (user) => {
    console.log('You clicked on user', user.firstName);
    return {
        type: "ADD_USER",
        payload: user
    }
}