import {Routes, Route} from "react-router-dom"
import {
    Main,
    Profile,
    NotFound
} from './pages/index.js'

export const AppRouter = () => {
    return (
            <Routes>
                <Route element={<Main/>} path="/" />
                <Route element={<Profile/>} path="user"/>
                <Route element={<NotFound/>} path="*" />
            </Routes>
    )
}