import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const titulo = "Bienvendido a nuestra tienda de juguetes!";
  return (
    <>
      <Navbar />
      <ItemListContainer titulo={titulo} />
    </>
  );
}

export default App;
