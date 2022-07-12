import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

export function Forms () {

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Please, inform the task'),
    owner: zod.string().optional(),
    minutesAmount: zod.number().min(5).max(60, 'max cycle is 60')
  })



  // TYPE to create a type from another variable or reference
  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>  //Infering from the schema, then you no longer need the interface below
   //OBS: You cannot use a variable. you need to use typeOf to reference a JS variable
   // TRY ADDING OTHER FIELDS ON THE SCHEMA

  // INTERFACE  TO DEFINE THE OBJECT OF VALIDATION
  // interface NewCycleFormData {
  //   task: string
  //   minutesAmount: number
  // } 


  const { register, handleSubmit, watch, formState, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    } 
  })


  /**
   * function register(name: string) {
   * return {
   *  onchange: () => void
   *  blur: () => void
   *  onFocus: () => void
   *  }
   * 
   * }
   */

  function handleCreateNewCycle(data: any) {
    console.log(data)
    reset() // reset to default values
  }

  console.log('aaaa',formState.errors)

  const task = watch('task')
  const isSubmitDisabled = !task  //aux variable



  return (
    <>
      <h1>Forms</h1>

      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <input
          id="task"
          placeholder='task name'
          {...register('task')}
        />

        <input
          id="minutes amount"
          type="number"
          placeholder='00'
          {...register('minutesAmount', {valueAsNumber: true})}
        />

        <button disabled={isSubmitDisabled} type='submit'> enter</button>
      </form>
    </>
  )

}