import Login from "elements/Login"
import Layout from "layouts"
import { useRoutes } from "react-router-dom"

const Routes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Layout />
        },
        {
            path: '/login',
            element: <Login />
        }
    ])
    return routes
}


export default Routes