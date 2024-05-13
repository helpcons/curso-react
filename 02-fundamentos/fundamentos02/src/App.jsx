import './App.css'
import ManageData from './components/ManageData'
// imagens
import City from './assets/city.jpg'

function App() {

  return (
    <>
      <h1>Nova aplicação em React!</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem de um campo ensolarado" />
      </div>
      {/* Importando de assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
    </>
  )
}

export default App
