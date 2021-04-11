import {useState} from 'react'

function useForm (callback,defaults){
    const [inputs,setInputs] = useState(defaults)

    const handleChange = (event)=>{
        const {name,value} = event.target
        setInputs({...inputs,[name]:value})
    }

    const hanldeSubimt = (event)=>{
        event.preventDefault()
        callback(inputs)
    }

    return{
        inputs,
        handleChange,
        hanldeSubimt
    }
}

export default useForm;