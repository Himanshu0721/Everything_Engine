import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>

     <Route path="/" element={<Home />} />q
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
