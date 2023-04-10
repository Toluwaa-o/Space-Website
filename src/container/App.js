import { Route,
         createRoutesFromElements, createBrowserRouter, RouterProvider 
        } from "react-router-dom";

import Page from './Page'
import Destination from '../pages/Destination'
import Home from '../pages/Home'
import Crew from '../pages/Crew'
import Technology from '../pages/Technology'
import DestinationDetails from '../pages/LoaderPages/DestinationDetails'
import ErrorPage from "../pages/errorPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/react_project' element={<Page />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />

            <Route path='destination' element={<Destination />} />

            <Route path='crew' element={<Crew />} />

            <Route path='technology' element={<Technology />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
)

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}