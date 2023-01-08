import { useContext } from 'react';
import Login from '../elements/Login';
import { userContext } from '../context/StateProvider';

const Home = () => {
  const { state } = useContext(userContext);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {!state?.user ? (
        <Login />
      ) : (
        <div>
          <h1 className='text-3xl font-bold text-yellow-600 flex justify-center items-center'>
            FaceIO authentication using react and typescript
          </h1>

          <h2 className='text-blue-900 pt-28 font-bold'>
            Welcome {state.user.name}
          </h2>
          <h2 className='text-blue-900 pt-28 font-bold'>Email: {state.user.email}</h2>
        </div>
      )}
    </div>
  );
};

export default Home;