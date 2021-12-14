import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './AddService.css'


export default function AddService() {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        
        axios.post('https://polar-brushlands-51285.herokuapp.com/services',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('added successfully')
                reset();
            }
        })
        
    }
    return (
        <div className='add-service'>
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='name' />
                <textarea {...register("description")} placeholder='description' />
                <input type="number" {...register("price")} placeholder='price' />
                <input {...register("img")} placeholder='img' />
                <input type="submit" />
            </form>
        </div>
    )
}
