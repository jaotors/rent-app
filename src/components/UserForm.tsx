import { useForm, SubmitHandler } from 'react-hook-form'

type UserInputs = {
  firstName: string
  lastName: string
  contactNum: string
  note: string
}

const UserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<UserInputs>()
  const onSubmit: SubmitHandler<UserInputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid'>
        <label htmlFor='firstName'>
          First Name
          <input id='firstName' placeholder='John' {...register('firstName')} />
        </label>
        <label htmlFor='lastName'>
          Last Name
          <input id='lastName' placeholder='Doe' {...register('lastName')} />
        </label>
        <label htmlFor='contactNum'>
          Contact Number
          <input
            id='contactNum'
            placeholder='0912345678'
            {...register('contactNum')}
          />
        </label>
        <label htmlFor='note'>
          Note
          <textarea
            id='note'
            placeholder='Reason or anything etc..'
            {...register('note')}
          />
        </label>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default UserForm
