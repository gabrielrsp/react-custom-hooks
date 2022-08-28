import React, { forwardRef, useCallback, useState, useImperativeHandle } from 'react'

//Definindo quais metodos eu quero expor pro componente pai
export interface ModalHandles {
  openModal: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = ({}, ref) => {
  const [visible, setVisible] = useState(true);

  
  const openModal = useCallback(() => {
    setVisible(true);
  },[])


  // EXPONDO A FUNÇÃO PARA O COMPONENTE PAI !!!!!
  useImperativeHandle(ref, () => {
    return {
      openModal 
    }
  })

  const handleCloseModal = useCallback(() => {
    setVisible(false)
  }, [])

  if (!visible) {
    return null;
  }

  return (
    <div>
      Modal Aberto
      <button onClick={handleCloseModal}>Fechar Modal</button>
    </div>
  )
}

export default forwardRef(Modal)