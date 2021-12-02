import { createSlice } from "@reduxjs/toolkit";


const middlewareActions = {
    getMovies() { }
}
export const getMoviesSlice = createSlice({
    name: 'getMovies',
    initialState: {
        page: {
            data: [],
            current_page: 0,
        },
        activeMovieId: null,
    },
    reducers: {
        setMovies: (state, action) => {
            state.page = action.payload;
        },
        ...middlewareActions,
    },
})


export const {
    getMovies, setMovies
} = getMoviesSlice.actions;

export default getMoviesSlice.reducer;