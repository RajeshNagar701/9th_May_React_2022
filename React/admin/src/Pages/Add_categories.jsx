import React,{useState,useEffect} from 'react'
import Navbar from '../Component/Navbar'

function Add_categories() {

    const[formvalue,setformvalue]=useState({
        name:"",
        email:"",
        file:""
    })  
    const[alldata,setalldata]=useState([]);
   
    function changehandel(e){
      setformvalue({...formvalue,[e.target.name]:[e.target.value]});
      console.log(formvalue);
    }
    function submithandel(e){
        e.preventDefault();
        setalldata([...alldata,formvalue]);
        setformvalue({name:"",email:"",file:""})
        console.log(alldata); 
    }
  




    return (

       
                        <div className="container-fluid">
                            {/* Page Heading */}
                            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                                For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>
                            {/* DataTales Example */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3 mt-3">
                                            <label htmlFor="email" className="form-label">Categories Name</label>
                                            <input type="text" className="form-control" name="name" onChange={changehandel} value={formvalue.name} />
                                        </div>
                                        <div className="mb-3 mt-3">
                                            <label htmlFor="email" className="form-label">Description</label>
                                            <textarea className="form-control" name="desc" value={formvalue.desc} onChange={changehandel}>{formvalue.desc}</textarea>
                                        </div>
                                        <div className="mb-3 mt-3">
                                            <label htmlFor="email" className="form-label">Description</label>
                                            <input type="url" className="form-control" name="file" onChange={changehandel} value={formvalue.file} />
                                        </div>
                                        
                                        <button type="submit" className="btn btn-primary" onSubmit={submithandel}>Submit</button>
                                    </form>

                                    <hr />
                                    <h1>Categories List</h1>
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Desc</th>
                                                    <th>File</th>  
                                                </tr>
                                            </thead>
                                            
                                            <tbody>
                                               {   
                                               alldata.map((item,index)=>{

                                                return(
                                                    <tr>
                                                        <td>{index+1}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.desc}</td>
                                                        <td><img src={item.file} width="20opx" /></td>
                                                    </tr>
                                                )

                                               })     
                                               
                                               } 
                                                
                                            </tbody>
                                        </table>
                                    </div>    

                                </div>
                            </div>
                        </div>
                       
    )
}

export default Add_categories