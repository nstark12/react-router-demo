import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {

    return (
        <>
           <Navbar />

            <div className="container my-5">
                <Outlet />
            </div>
        </>
    )
}

export default App