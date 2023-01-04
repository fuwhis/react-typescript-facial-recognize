import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const ContextApp = () => {
    return (
       <main>
         <div className='min-h-min flex justify-center items-center lg:py-12 sm:py-6 px-2 sm:px-6 lg:px-8'>
            <div className="max-w-md w-full space-y-8">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='sign-up' element={<SignUp />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
       </main>
    );
}

export default ContextApp;