
 const Modal=({modalOpen,setModalOpen,children}) => {
  return (
    <>
       <dialog  className={`modal ${modalOpen ? "modal-open" :""}`}>
         <div className="modal-box relative">
            <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
               <button onClick={()=>setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
              {children}
        </div>
       </dialog>
       
  
    </>
   

  )
}

export default Modal;
