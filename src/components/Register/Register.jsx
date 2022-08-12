import { useState } from "react";
import Joi, { string } from 'joi';
export const Register = () =>{

let [user,setUser] = useState({
   first_name: '',
   last_name: '',
   age:'',
   email: '',
   password: '',

 })

let [errors,setErrors] = useState([]);

function submitFormData(e){
  e.preventDefault();
 let validateResult= validateFields();
 console.log('validateResult', validateResult.error.details)

 if(validateResult.error){
    setErrors(validateResult.error.details);
 }
 else{setErrors([])}
}

function getFormValue(e) {
   let myUser = {...user};
   myUser[e.target.name]= e.target.value;
   setUser(myUser)
}


function validateFields (){
   const schema = Joi.object({
        
      first_name: Joi.string().required().min(3).max(20),
      last_name: Joi.string().required().min(3).max(20),
      age:Joi.number().required().min(20).max(80),
      email:Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password:Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,10}$')),

   });
// we used the abort early in order to get all error once otherwise it will show the first error only 
   return schema.validate(user,{abortEarly:false});
}
console.log('errors', errors)
    return (
    <div className="px-5"> 
     <h1 className="my-5">Registeration Form</h1>
         
{errors?.map((error,index)=><div className="alert alert-danger" key={index}>{error.message}</div>)}

     <form onSubmit={submitFormData} >
         <div className="mb-3 ">
            <label className="form-label" htmlFor="first_name">first name </label>
            <input onChange={getFormValue} type="text" name="first_name" id="first_name" className="form-control"></input>
         </div>

         <div className="mb-3">
            <label className="form-label" htmlFor="last_name">last name </label>
            <input type="text" onChange={getFormValue} name="last_name" id="last_name" className="form-control"></input>
         </div>

         <div className="mb-3">
            <label className="form-label" htmlFor="age">Age</label>
            <input type="number" onChange={getFormValue} name="age" id="age" className="form-control"></input>
         </div>

         <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input type="email" onChange={getFormValue} name="email" id="email" className="form-control"></input>
         </div>


         <div className="mb-3">
            <label className="form-label" htmlFor="password">Password</label>
            <input type="password" onChange={getFormValue} name="password" id="password" className="form-control"></input>
         </div>
<button className="btn btn-info ">Register</button>
     </form>
    </div>

    );
}