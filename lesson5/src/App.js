import {useForm} from 'react-hook-form';

export default function App() {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data);
  return(
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <input className='first'{...register("FirstName",{required:true,minLength:{value:5}})} />
      <input className='last' {...register("LastName",{required:true,minLength:{value:5}})} />
        <input type="number"{...register("Age")} />
        <input className='sumbit' type = "submit" />
    </form>
  );
}

