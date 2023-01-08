// import './App.scss'
import '../src/assets/scss/global.scss'
import StateProvider from './context/StateProvider'
// import Footer from './components/Footer'
// import ContextApp from './components/Main'
// import NavBar from './components/NavBar'

import Routes from 'routes'

const App: React.FC = () => {
  return (
    // <StateProvider>
    //   <NavBar />
    //   <ContextApp />
    //   <Footer />
    // </StateProvider>

    <StateProvider>
      <Routes />
    </StateProvider>
  )
}

export default App
