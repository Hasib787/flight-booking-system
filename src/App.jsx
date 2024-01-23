import background from './assets/Hero-Banner.webp'
import Home from './components/Home/Home'

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Home />
    </div>
  )
}

export default App
