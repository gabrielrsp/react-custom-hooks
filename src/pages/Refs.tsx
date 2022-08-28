import { FormEvent, FormEventHandler, useCallback, useEffect, useRef, useState } from "react"
import Input from "../Components/Input"
import Modal, { ModalHandles } from "../Components/Modal"


export function Refs () {

  //Acessando propriedade dos elementos diretamente na DOM
  const nameInputRef = useRef<HTMLInputElement>(null)
  
  // Armazenando valores sem atualizar o componente
  const acceptTermsRef = useRef({ value: false })

  const modalRef = useRef<ModalHandles>(null)
  
  /* 
    como estou utilizando refs, 
    quando alterados seus valores, 
    não provocam nova atualização dentro do componente
  */

  useEffect(() => {
    // nameInputRef.current?.focus()
  }, []);

  
  function inputFocus() {
    nameInputRef.current?.focus()
  }

  const handleFocus = useCallback(() => {
    inputFocus()
  }, [])
  

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    inputFocus()

    console.log('INPUT VAL',nameInputRef.current?.value)
    console.log('TERMS',acceptTermsRef.current?.value)
  }

  const handleAcceptTerms = () => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value
  }
  

  const handleOpenModal = useCallback (() => {
    modalRef.current?.openModal()
  }, [])


 /* no Input abaixo estamos encaminhando uma ref componente superior para um componente filho
    ou seja, criei um componente e passei uma ref dele pra dentro de um componente filho
 */


  return (

    <div>
      <h1>Refs</h1>
      <form onSubmit={handleSubmit}>
        <Input name="name" label="Nome Completo" ref={nameInputRef}/>

        <button type="button" onClick={handleAcceptTerms}>Aceitar termos</button>
        <button type="submit"> FOCAR </button>

        <button onClick={handleOpenModal}> Abrir Modal</button>

      </form>
      <Modal ref={modalRef} />
    </div>
  )
}