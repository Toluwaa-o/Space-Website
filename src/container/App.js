import { Route,
         Outlet, createRoutesFromElements, createBrowserRouter, RouterProvider 
        } from "react-router-dom";

import Page from './Page'
import Destination, { DesLink } from '../pages/Destination'
import Home from '../pages/Home'
import Crew, { CrewLoader } from '../pages/Crew'
import Technology, { TechData } from '../pages/Technology'
import DestinationDetails, { DestinationDetailsLoader } from '../pages/LoaderPages/DestinationDetails'
import CrewDetails, { CrewDetailsLoader } from '../pages/LoaderPages/CrewDetails'
import TechDetails, { TechDetailsLoader } from '../pages/LoaderPages/TechDetails'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/react_project' element={<Page />}>
            <Route index element={<Home />} />

            <Route path='/destination' element={<Destination />} loader={DesLink} >
            {/* <Route index
                        element={<DestinationDetails />}
                        loader={DestinationDetailsLoader} /> */}
                <Route path="/:name"
                        element={<DestinationDetails />}
                        loader={DestinationDetailsLoader} />
            </Route>

            <Route path='/crew' element={<Crew />} loader={CrewLoader} />

            <Route path='/technology' element={<Technology />} loader={TechData} />
        </Route>
    )
)

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}