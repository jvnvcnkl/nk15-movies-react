import { put, call, takeLatest } from 'redux-saga/effects';
import { setMovies, getMovies } from './slice';
import movieService from '../../services/MovieService';


function* getMoviesHandler({ payload }) {
    try {

        const data = yield call(movieService.getAll, payload?.title)
        yield put(setMovies(data))
    } catch (error) {
        console.log(error)
    }
}

export function* watchGetMovies() {
    yield takeLatest(
        getMovies.type,
        getMoviesHandler
    )
}