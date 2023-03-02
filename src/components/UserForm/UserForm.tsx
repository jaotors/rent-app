import { useForm, SubmitHandler } from 'react-hook-form'

export type UserInputs = {
  firstName: string
  lastName: string
  contactNum: string
  note: string
}

type UserFormProps = {
  onSubmit: Function
}

const UserForm = ({ onSubmit }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserInputs>()
  const onSubmitHandler: SubmitHandler<UserInputs> = (data) => onSubmit(data)

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className='grid'>
        <label htmlFor='firstName'>
          First Name
          <input id='firstName' placeholder='John' {...register('firstName')} />
        </label>
        <label htmlFor='lastName'>
          Last Name
          <input id='lastName' placeholder='Doe' {...register('lastName')} />
        </label>
      </div>
      <div>
        <label htmlFor='contactNum'>
          Contact Number
          <input
            id='contactNum'
            placeholder='0912345678'
            {...register('contactNum')}
          />
        </label>
      </div>
      <div>
        <label htmlFor='note'>
          Note
          <textarea
            id='note'
            placeholder='Reason or anything etc..'
            rows={4}
            cols={50}
            {...register('note')}
          />
        </label>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default UserForm
