import jsonplaceholder from "../apis/JsonPlaceHolder";

export const fetchPostsAndUsers = () => async dispatch => {
    await(dispatch(fetchPosts()));
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonplaceholder.get("/posts");

        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        });
    };
};

export const fetchUsers = (id) => {
    return async (dispatch) => {
        const response = await jsonplaceholder.get(`/users/${id}`);

        dispatch({
            type: "FETCH_USER",
            payload: response.data
        });
    };
};