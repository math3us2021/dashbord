import React from "react";
import './app.css';
import Header from "./components/Menu/Menu";
import Modal from "./components/Modal/ModalRegras";



function App() {
  const [isVisible, setisVisible] = React.useState(false);

  function openModal(){ 
    setisVisible(true);
  }

  return (
    <div>
      
    {isVisible && <Modal onClose={() => setisVisible(false)} />}
   <div>
      <Header click={openModal} />
    
   </div>
   </div>
  );
}

export default App;
