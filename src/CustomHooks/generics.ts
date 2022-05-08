export function customUseState<T extends number | string = number > (){   // se não for definido o tipo da generic ao chamar a função, vai ser passado number por PADRÃO

  // let state: number | string    //pipe signific UNION que signifa 'Ou'
  let state: T //atribuição do tipo de forma dinâmica através do Generic

  function get() {
    return state
  }

  function set(newValue: T) {
    state = newValue
  }

  return {get, set}

}

/*
 let newState = customUseState<boolean>()  
  não vai dar certo por que na definição do generic foi criada a CONSTRAINT ( extends number | string)
  OU SEJA, a tipagem deve abranger NO MÍNIMO string, ou number.
*/

// se eu quiser somente number ou somente string eu devo passar customUseState<string> ou customUseState<number>

let newState = customUseState<any>()   //pra passar o tipo do generic eu uso <>logo após o nome da função, se houver constraint, deve satisfazer a constraint!
//se nao passar nada (E SE NÃO TIVER UM 'extends' na definição do generic) seria como 'any' então se NÃO PRECISA DE USAR <any> 

newState.get()
newState.set('2')
newState.set(2)   // <--- aqui como foi passado o tipo da função via generic (string, linha 19), nao vai ser aceito parametro do tipo number 
newState.set(false)


/* O Generic é usado para deixar a tipagem mais flexível

  -> Ele vai definir a tipagem EM EXECUÇÃO
  -> a Tipagem que for definida no momento da DECLARAÇÃO 
  é a que vai valer!

  Sintaxe:

    nomeDaFuncao<T>() {
      faz alguma coisa
    }

    OBS: <T> esse 'T' pode ser qualquer outra letra 

    por convenção:

    <S> usado para state
    <T> usado para type
    <K> usado para representar key
    <V> usado para representar valor
    <E> usado para representar um element

 */