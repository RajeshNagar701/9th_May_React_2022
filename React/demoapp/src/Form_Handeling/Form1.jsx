import React,{useState} from 'react'

export default function Form1() {

   

   const [formValue,setformValue]=useState({
    name:"",
    email:"",
    password:""
   });
   
   function onchangeHandel(e){
    const {name,value}=e.target;
    setformValue({...formValue,[name]:value})
    //setformValue({...formValue,[e.target.name]:[e.target.value]})
   }

   const [alldata, setalldata] = useState([]);
   function submitHandel(e){
    e.preventDefault();
    setalldata([...alldata,formValue]);
    //console.log(alldata);
    setformValue({...formValue,name:"",email:"",password:""})
   }
/*
   function deleteHandel(delid){
      const filterablelist= alldata.filter((item) => item.id !== delid)
      setalldata(filterablelist) // set in stortabel arr
   }
*/

    return (
        <div className="container mt-3">
            <h2>Form</h2>
            <form action="" method="post">
                <div className="mb-3 mt-3">
                    <label htmlFor="Name">Name:</label>
                    <input type="text" className="form-control" value={formValue.name} onChange={onchangeHandel} id="name" placeholder="Enter name" name="name" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" value={formValue.email} id="email" onChange={onchangeHandel} placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control"  value={formValue.password}  onChange={onchangeHandel} id="pwd" placeholder="Enter password" name="password" />
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button type="submit" onClick={submitHandel} className="btn btn-primary">Submit</button>
            </form>

            <hr />
            <h1 className='text-center'>All Data</h1>
            <table className='table'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Delete</th>
               </tr>
                {
                    alldata.map((item,index)=>{
                        const {name,email,password}=item;
                          return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{password}</td>
                                <td><button className='btn btn-danger' >Delete</button></td>
                            </tr>
                          )  
                    })
                }
            </table>

        </div>
    )
}
