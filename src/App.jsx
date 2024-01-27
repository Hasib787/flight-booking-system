import background from './assets/Hero-Banner.webp'
import Home from './components/Home/Home'
import './App.css'

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
    >
      <Home />
    </div>
  )
}

export default App
