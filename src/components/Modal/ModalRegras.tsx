import "./Modal.css"

export default function ModalRegras({ onClose }: any) {
  function close(){
    onClose();
  }

  return (
    <div className="modal">
      <h1>Teste</h1>
      <button onClick={close}>Sair</button>
    </div>
  )
}
