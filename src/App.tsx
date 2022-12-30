import './App.css'
import StateProvider from './context/StateProvider'
import Footer from './shared/Footer'
import ContextApp from './shared/Main'
import NavBar from './shared/NavBar'

const App: React.FC = () => {
  return (
    <StateProvider>
      <NavBar />
      <ContextApp />
      <Footer />
    </StateProvider>
  )
}

export default App
