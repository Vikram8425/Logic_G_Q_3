import {
  Card,CardBody,Button, Modal, ModalHeader,
   ModalBody, ModalFooter, Container,Row,Col, 
   Form, Label,Input,Table
  } 
   from 'reactstrap';
   import { useMediaQuery } from 'react-responsive';

import React,{ useState } from 'react';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { json } from 'react-router-dom';
function Appjs() {
  
  const [modal, setModal] = useState(false);
  const [modal1,setModal1] = useState(false);
  
  const[user,setUser]=useState({
      id:'',
      name:'',
      gender:'',
      age:'',
      designation:'',
      derpartment:'',
      joiningDate:''
  })

  const toggle = () => setModal(!modal);
  const onFieldChange=(event,fieldName)=>{
      setUser({...user,[fieldName]:event.target.value})
    
  }
  const closeModol=()=>{
      setModal(false)
    }
    const closeModol1=()=>{
      setModal1(false)
      localStorage.getItem("userupdate").clear()
    }
    const newuser=(event)=>{
      let empty= false
      if(user.name===""){
          alert("Plz Write Your Name")
          empty = true
      }
      if(user.gender===''){
          alert("plz Select Your gender");
          empty = true
      }
      if(isNaN(user.age)){
          alert("age must should be integer")
          empty = true
      }
      if(user.designation===""){
         alert("Designation cannot be empty");
         empty = true
      }
      if(user.derpartment===''){

          alert("derpartment Cannot be empty")
          empty = true
      }
      if(user.joiningDate===''){
          alert("Fill Date of Joining");
          empty = true
      }else{
        alert(user.name)
      }
      if (empty) {
        return
      }


      let id = Math.random().toString(16).slice(2)
      console.log(Math.random().toString(16).slice(2))
      let users=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
      users.push({
          id:id,
          name:user.name,
          age:user.age,
          gender:user.gender,
          derpartment:user.derpartment,
          designation:user.designation,
          joiningDate:user.joiningDate
      })
     
      localStorage.setItem("user",JSON.stringify(users))
      alert("Your Record saved")
      setUser("")
     toggle()
    }


    const update=(event)=>{
      let empty = false
      if(user.name===""){
        user.name=getdata().name
        if (user.name==="") {
          alert("Plz Write Your Name")
          empty = true
        }
      }
      if(user.gender===''){
        user.gender=getdata().gender
        if (user.gender==='') {
          alert("plz Select Your gender")
          empty = true
        }   
      }
      if(isNaN(user.age)){
        user.age= getdata().age
        if (isNaN(user.age)) {
          alert("age must should be integer")
          empty = true
        }
          
         
      }
      if(user.designation===""){
        user.designation= getdata().designation
        if (user.designation==="") {
          alert("Designation cannot be empty")
          empty = true
        } 
        
      }
      if(user.derpartment===''){
        user.derpartment= getdata().derpartment
        if (user.derpartment==='') {
          alert("derpartment Cannot be empty")
          empty = true
        }
          
      }
      if(user.joiningDate===''){
        user.joiningDate= getdata().joiningDate
        if (user.joiningDate==='') {
          alert("Fill Date of Joining")
          empty = true
        }  
      }
      if (empty) {
        return
      }

      let temp =JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
      const upuser= temp.map(p =>p.id===user.id?{...p,
        name:user.name,
        age:user.age,
        gender:user.gender,
        derpartment:user.derpartment,
        designation:user.designation,
        joiningDate:user.joiningDate
      }:p)
      console.log(upuser)
      localStorage.clear()
      localStorage.setItem("user",JSON.stringify(upuser))
      alert("Successful Update ")
    }

    const add=()=>{
      setModal(true)
      
  }
  const add1=()=>{
      setModal1(true) 
  }
     
let localData=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
const edit=(l)=>{ 
  add1()
  localStorage.setItem("userupdate",JSON.stringify(l))    
}


const Delete=(l)=>{

if (window.confirm("Do you really want to delete ")) {
  var data =JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
  for (let i = 0; i < data.length; i++) {
    if (data[i].id===l.id) {
      data.splice(i,1)
    }
    
  }
  localStorage.clear()
  localStorage.setItem("user",JSON.stringify(data))
  window.location.reload()
}else{

}

  



}
    
  const styleobj={
      width:"96%",
      height:"170px",
      marginTop:"100px",
      marginLeft:"20px"
     
      
  }
  const styleobj1={
      width:"100%",
      height:"80px",
      marginTop:"30px",
      marginLeft:"0px"
     
      
  }
let getdata =()=>{
  return JSON.parse(localStorage.getItem("userupdate"))?JSON.parse(localStorage.getItem("userupdate")):[]

}

  const htmlModel1=()=>{
    
    if (getdata().length!==0) {
      user.id=getdata().id
      console.log(getdata().id);
     
    }
      return( <div>
                     
          <Modal isOpen={modal1} toggle1={closeModol1} >
         
            <ModalHeader toggle1={closeModol1}>Edit Employee</ModalHeader>
            <ModalBody>
               
              <Form onSubmit={update}>
                  {//JSON.stringify(user)
                  }
                  {//console.log(getdata().id)
                  
                  }
              <Container> 
                  <Row >
                  <Input type="hidden" onChange={(event)=>onFieldChange(event,'id')} value={user.id} placeholder={getdata().id} style={{width:200,marginBlockEnd:15}}></Input>
                  
                 <Col md={{size:6,offset:0}}> 
                  <Label>Name : {getdata().name}</Label>
                  <Input onChange={(event)=>onFieldChange(event,'name')} value={user.name} placeholder={getdata().name} style={{width:200,marginBlockEnd:15}}></Input>
                  </Col>

                  <Col md={{size:6,offset:0}} >
                  <Label >Gender :{getdata().gender}</Label>
                  <Input onChange={(event)=>onFieldChange(event,'gender')} value={user.gender} placeholder={getdata().gender} type='select' style={{width:200,marginBlockEnd:15}}>
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  </Input>
                  </Col>

                  <Col md={{size:6,offset:0}}> 
                  <Label >Age :{getdata().age}</Label>
                  <Input type='number'  onChange={(event)=>onFieldChange(event,'age')} value={user.age} placeholder={getdata().age} style={{width:200}}></Input>
                  </Col>

                  <Col md={{size:6,offset:0}}> 
                  <Label >Designation :{getdata().designation}</Label>
                  <Input onChange={(event)=>onFieldChange(event,'designation')} value={user.designation} placeholder={getdata().designation} style={{width:200}}></Input>
                  </Col>

                  <Col md={{size:6,offset:0}} style={{marginTop:14}}> 
                  <Label >Department :{getdata().derpartment}</Label>
                  <Input onChange={(event)=>onFieldChange(event,'derpartment')} value={user.derpartment} placeholder={getdata().derpartment}  style={{width:200}}></Input>
                  </Col>
                  <Col md={{size:6,offset:0}} style={{marginTop:14}}> 
                  <Label >Joining Date :{getdata().joiningDate}</Label>
                  <Input  onChange={(event)=>onFieldChange(event,'joiningDate')} value={user.joiningDate} placeholder={getdata().joiningDate} style={{width:200}} type= 'date'></Input>
                  </Col>
                  </Row>
              </Container>
              <ModalFooter>
              <Button  className="square border border-danger square border border-1 "  size='sm' color="Light"  onClick={()=>setModal1(false)}>
               Cancel 
              </Button>{' '}
              <Button size='sm' color="success"  >
                Save
              </Button>
            </ModalFooter>
              </Form>
              
            </ModalBody>
           
          </Modal>
        </div>
        )
  }


  const htmlModel=()=>{
      return( <div>
                     
          <Modal isOpen={modal} toggle={closeModol} >
         
            <ModalHeader toggle={closeModol}>Add Employee</ModalHeader>
            <ModalBody>
               
              <Form onSubmit={newuser}>
                  {//JSON.stringify(user)
                  }
              <Container> 
                  <Row >
                 <Col md={{size:6,offset:0}}> 
                  <Label>Name</Label>
                  <Input onChange={(event)=>onFieldChange(event,'name')} value={user.name} placeholder='Enter' style={{width:200,marginBlockEnd:15}}></Input>
                  </Col>

                  <Col md={{size:6,offset:0}} >
                  <Label >Gender</Label>
                  <Input onChange={(event)=>onFieldChange(event,'gender')} value={user.gender} placeholder='Enter' type='select' style={{width:200,marginBlockEnd:15}}>
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  </Input>
                  </Col>

                  <Col md={{size:6,offset:0}}> 
                  <Label >Age</Label>
                  <Input type='number'  onChange={(event)=>onFieldChange(event,'age')} value={user.age} placeholder='Enter' style={{width:200}}></Input>
                  </Col>

                  <Col md={{size:6,offset:0}}> 
                  <Label >Designation</Label>
                  <Input onChange={(event)=>onFieldChange(event,'designation')} value={user.designation} placeholder='Enter' style={{width:200}}></Input>
                  </Col>

                  <Col md={{size:6,offset:0}} style={{marginTop:14}}> 
                  <Label >Department</Label>
                  <Input onChange={(event)=>onFieldChange(event,'derpartment')} value={user.derpartment} placeholder='Enter'  style={{width:200}}></Input>
                  </Col>
                  <Col md={{size:6,offset:0}} style={{marginTop:14}}> 
                  <Label >Joining Date</Label>
                  <Input  onChange={(event)=>onFieldChange(event,'joiningDate')} value={user.joiningDate} placeholder='Enter' style={{width:200}} type= 'date'></Input>
                  </Col>
                  </Row>
              </Container>
              <ModalFooter>
              <Button  className="square border border-danger square border border-1 "  size='sm' color="Light"  onClick={toggle}>
               Cancel 
              </Button>{' '}
              <Button size='sm' color="success"  >
                Save
              </Button>
            </ModalFooter>
              </Form>
              
            </ModalBody>
           
          </Modal>
        </div>
        )
  }

 

const [tableData,SetTableDate]=useState(localData);
const [filter,setFilter]=useState()
const [value,setValue]=useState()
const serch=(event)=>{
  event.preventDefault()
  setValue(event.target.value)
  const filterTable=tableData.filter(each =>each.name.includes(event.target.value))
  setFilter([...filterTable])
}


const cart=()=>{
  return(
          
      <div> 
          <Card body style={styleobj1} color="light" className="shadow-4 " >

              <Container >
                  <Input onChange={(event)=>serch(event)}  className='text-center square border border-primary square border border-1' placeholder='Enter Id here '  style={{width:500,marginLeft:300}}></Input>
              </Container>
          </Card>

                 
      <Card body style={styleobj} color="white" className="shadow-4 " >
        
      <CardBody>
       
          <p style={{fontSize:20,fontWeight:'bold',color:'grey',fontFamily:'Calibri (Body)',margin:-15 }}>Available :{}</p>
          <p  style={{fontSize:20,fontWeight:'bold',fontFamily:'Calibri (Body)',margin:10,marginLeft:-16,marginTop:20}}> Total :{localData.length}</p>
          <Button style={{marginTop:15, marginLeft:-23 ,fontSize:18}} onClick={add} color="primary"  > ╋ Add Employee</Button>
     
      </CardBody>
    
  </Card> 
      <Container> 
       <Table
       bordered 
       responsive 
       className='mt-3'
       borderless
       hover 
       >
          <thead> 
          <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Joining Date</th>
              <th></th>
              <th></th>
            
          </tr>
          </thead>
          
          <tbody>  
              { //



             value ? filter.map((l,index)=>{
                  return(
                      <tr key={index}>
                          <td>{l.name}</td>
                          <td>{l.gender}</td>
                          <td>{l.age}</td>
                          <td>{l.derpartment}</td>
                          <td>{l.designation}</td>
                          <td>{l.joiningDate}</td>
                          <td  >
                              <Button className='text-center square border border-primary' onClick={()=>edit(l)} color='white' style={{marginLeft:20}}>
                                  Edit
                              </Button>
                            </td>
                            <td>
                              <Button 
                                 onClick={()=>Delete(l)} className='text-center square border border-danger' 
                               color='white'  style={{marginLeft:4,color:'red'}}>Delete</Button>
                          </td>
                      </tr>

                  )}
                 ):localData.map((l,index) =>{

                  return(
                    <tr key={index}>
                          <td>{l.name}</td>
                          <td>{l.gender}</td>
                          <td>{l.age}</td>
                          <td>{l.derpartment}</td>
                          <td>{l.designation}</td>
                          <td>{l.joiningDate}</td>
                          <td  >
                              <Button className='text-center square border border-primary' onClick={()=>edit(l)} color='white' style={{marginLeft:20}}>
                                  Edit
                              </Button>
                            </td>
                            <td>
                              <Button 
                                 onClick={()=>Delete(l)} className='text-center square border border-danger' 
                               color='white'  style={{marginLeft:4,color:'red'}}>Delete</Button>
                          </td>
                      </tr>

                  )

                 })




                 //
                  }               
               </tbody>
          
       </Table>
       </Container>
  </div>
 
 
 
 
  )
  
}
return(
            <div> 
            {localData ? cart():<h1>no Data</h1> }
            {console.log(getdata().length)
            }



    
    
            {htmlModel()}
            {htmlModel1()}
            
             </div>
)
}

export default Appjs;
