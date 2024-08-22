import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {              // os rocks sao funcoes especiais do react principais para trabalhar com mudanca de esstado

 // const [nome_estado, função_setState] = useState(valor_inicial_do_estado)

  return (
    <>
       {/*} <Home 
        titulo = "Minha primeira postagem"
        texto = "Texto da minha primeira postagem"
        />

          <Home 
        titulo = "Minha segunda postagem"
        texto = "Texto da segunda primeira postagem"
        />*/}
        <Contador/>
       <Tarefa/>
    </>
  )
}

export default App
