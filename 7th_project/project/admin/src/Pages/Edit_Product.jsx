import React,{useState,useEffect} from 'react'
import {Link ,useNavigate,useParams} from 'react-router-dom'
import swal from 'sweetalert';

function Edit_Product() {

    const [formvalue,SetForm]=useState({
        cate_id:"",
        name:"",
        sortdesc:"",
        longdesc:"",
        mainPrice:"",
        discPrice:"",
        use:"",
        status:"Unblock",
        img:""
       
    })
    const [categories,Setcategories]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        fetch(`https://komalreact-default-rtdb.firebaseio.com/categories.json`)
        .then((response) => response.json())
        .then((data) => {
        Setcategories(data);

            fetch(`https://komalreact-default-rtdb.firebaseio.com/products/${id}.json`)
            .then((response) => response.json())
            .then((data) => {
                if(data)
                {
                    SetForm(data);
                }
            });
        
        });
        
        
    },[])

    function changeHandel(e)
    {
        const {name,value}=e.target;
        SetForm({...formvalue, [name]:value});
        //console.log(formvalue);
    }
    
    const navigate=useNavigate();
    function UpdateHandel(e) {
        e.preventDefault();
        fetch(`https://komalreact-default-rtdb.firebaseio.com/products/${id}.json`, {
            method: 'PATCH',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if(data)
                {
                    swal("Success", "Update Success", "success");
                    navigate('/manage_product');
                }

            });
        }
    return ( 

        <div id="page-wrapper" className="gray-bg dashbard-1">
            <div className="content-main">
                {/*banner*/}
                <div className="banner">
                    <h2>
                        <a href="index.html">Home</a>
                        <i className="fa fa-angle-right" />
                        <span>Edit Product</span>
                    </h2>
                </div>
                {/*//banner*/}
                {/*grid*/}
                <div className="validation-system">
                    <div className="validation-form">
                        <form method="post">
                            <div className="vali-form">
                                <div className="col-md-12 form-group1">
                                    <label className="control-label">Category Name</label>
                                    <select name="cate_id" onChange={changeHandel} className="form-control" required>
                                    <option value="">Select Categories of Product</option>
                                    {
                                        Object.keys(categories).map((item,index)=>{
                                               const {name}=categories[item] 
                                            return(
                                                    
                                                <>
                                                {(() => {
                                                  if (item===formvalue.cate_id) 
                                                  {
                                                    return <option value={item} selected>{name}</option>;
                                                  } 
                                                  else 
                                                  {
                                                    return <option value={item}>{name}</option>;
                                                  }
                                                })()}
                                              </>
                                            )
                                            })
                                    }

                                    </select>    
                                    
                                </div>
                                <div className="col-md-12 form-group1">
                                    <label className="control-label">Name</label>
                                    <input type="text" name="name" onChange={changeHandel} value={formvalue.name} placeholder="name" required />
                                    <input type="hidden" name="status" onChange={changeHandel} value={formvalue.status}/>
                                </div>
                                <div className="col-md-12 form-group1">
                                    <label className="control-label">Short Desc</label>
                                    <textarea name="sortdesc" onChange={changeHandel} value={formvalue.sortdesc}  required />
                                </div>
                                <div className="col-md-12 form-group1">
                                    <label className="control-label">Long Desc</label>
                                    <textarea name="longdesc" onChange={changeHandel} value={formvalue.longdesc}  required />
                                </div>
                                <div className="col-md-12 form-group1">
                                    <label className="control-label">Main Price</label>
                                    <input type="text" name="mainPrice" onChange={changeHandel} value={formvalue.mainPrice} placeholder="mainPrice" required />
                                </div>
                                <div className="col-md-12 form-group1">
                                    <label className="control-label">Disc Price</label>
                                    <input type="text" name="discPrice" onChange={changeHandel} value={formvalue.discPrice} placeholder="discPrice" required />
                                </div>
                                <div className="col-md-12 form-group1">
                                    <label className="control-label">How Use</label>
                                    <textarea name="use" onChange={changeHandel} value={formvalue.use}  required />
                                </div>
                                
                                <div className="clearfix"> </div>
                            </div>

                            <div className="col-md-12 form-group1">
                                <label className="control-label">File</label>
                                <img src={formvalue.img} alt="" width="30px" />
                                <input type="text" name="img" onChange={changeHandel} value={formvalue.img} placeholder="img" required />
                                    
                            </div>
                            <div className="clearfix"> </div>
                            <br/>
                            <br/>

                            
                            <div className="clearfix"> </div>
                            <div className="col-md-12 form-group">
                                <button type="submit" onClick={UpdateHandel} className="btn btn-primary">Submit</button>
                                <button type="reset" className="btn btn-default">Reset</button>
                            </div>
                            <div className="clearfix"> </div>
                        </form>
                        {/**/}
                    </div>
                </div>
            </div></div>



    )
}

export default Edit_Product