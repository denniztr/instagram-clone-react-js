import {Routes, Route} from "react-router-dom"
import {Main, NotFound} from './pages/index.js'

export const AppRouter = () => {
    return (
            <Routes>
                <Route element={<Main/>} path="/" />
                <Route element={<NotFound/>} path="*" />
            </Routes>
    )
}