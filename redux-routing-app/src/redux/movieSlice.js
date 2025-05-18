import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import MovieModel from "../models/movieModel";


export const fetchMovies = createAsyncThunk("getmovies", async () => {
    try {
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7");
        return response.data.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
        }));
    } catch (error) {
        console.log(error);
    }
})

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        loading: false,
        movies: [],
        error: null
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.movies = [];
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
                state.error = null;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.movies = [];
                state.error = action.error.message;
            })
    }
})



export default movieSlice.reducer