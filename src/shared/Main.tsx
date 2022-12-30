import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../page/Home";
import SignUp from "../page/SignUp";

const ContextApp = () => {
    return (
       <main>
         <div className='min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8'>
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