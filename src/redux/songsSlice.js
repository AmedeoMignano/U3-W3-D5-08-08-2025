import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSongs = createAsyncThunk(
  "songs/fetchSongs",
  async (query = "magikaaaaarp") => {
    const res = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
    );
    const data = await res.json();
    return data.data.slice(0, 12);
  }
);

const songsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    currentSong: null,
    query: "magikaaaaarp",
    status: "idle",
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.songs = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchSongs.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setCurrentSong, setQuery } = songsSlice.actions;
export default songsSlice.reducer;
