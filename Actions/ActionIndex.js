
export const selectUser = (user) => {
    console.log('You clicked on user', user.firstName);
    return {
        type: "USER_SELECTED",
        payload: user
    }
}