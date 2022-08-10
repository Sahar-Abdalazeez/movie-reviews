
export const Register = () =>{
    return (
    <div>
     <h1 className="my-5">Registeration Form</h1>
     <form>
         <div className="mb-3">
            <label className="form-label" htmlFor="first_name">first name </label>
            <input type="text" name="first_name" id="first_name" className="form-control"></input>
         </div>

         <div className="mb-3">
            <label className="form-label" htmlFor="last_name">last name </label>
            <input type="text" name="last_name" id="last_name" className="form-control"></input>
         </div>

         <div className="mb-3">
            <label className="form-label" htmlFor="age">Age</label>
            <input type="number" name="age" id="age" className="form-control"></input>
         </div>

         <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="form-control"></input>
         </div>


         <div className="mb-3">
            <label className="form-label" htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="form-control"></input>
         </div>

     </form>
    </div>

    );
}