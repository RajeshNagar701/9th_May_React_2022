import React,{useState} from 'react'

export default function Form() {

   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   
   
   const [alldata, setalldata] = useState([]);

   

   function submitHandel(e){
    e.preventDefault();
    const formvalue={id:new Date().getTime().toString(),name:name,email:email,password:password}
    setalldata([...alldata,formvalue]);
    setName("");
    setEmail("");
    setPassword("");
    //console.log(alldata);
   
   }

   function deleteHandel(delid){
      const filterablelist= alldata.filter((item) => item.id !== delid)
      setalldata(filterablelist) // set in stortabel arr
   }


    return (
        <div className="container mt-3">
            <h2>Form</h2>
            <form action="" method="post">
                <div className="mb-3 mt-3">
                    <label htmlFor="Name">Name:</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>{ setName(e.target.value)}} id="name" placeholder="Enter name" name="name" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" value={email} id="email" onChange={(e)=>{ setEmail(e.target.value)}} placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control"  value={password}  onChange={(e)=>{ setPassword(e.target.value)}} id="pwd" placeholder="Enter password" name="password" />
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
                          return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td><button className='btn btn-danger' onClick={()=>deleteHandel(item.id)}>Delete</button></td>
                            </tr>
                          )  
                    })
                }
            </table>

        </div>
    )
}
