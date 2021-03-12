import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap/lib';


//vehículo
//número de placa, 
//identificador dispositivo GPS, 
//tipo vehículo (trailer, bus, cureña), 
//asignar velocidad limite, 
//velocidad mínima, 
//estado, 
//agregar foto, 
//número de activo

const data = [
  {id:1, carId:"123456", idGps:1, type:"Trailer", speedLimit:100.0, status:"true", photoUrl:"https://www.google.com", activeNumber:"1"},
  {id:2, carId:"451236", idGps:2, type:"Bus", speedLimit:90.0, status:"true", photoUrl:"https://www.google.com", activeNumber:"2"},
  {id:3, carId:"134526", idGps:3, type:"Cureña", speedLimit:70.0, status:"true", photoUrl:"https://www.google.com", activeNumber:"3"},
  {id:4, carId:"123634", idGps:4, type:"Trailer", speedLimit:100.0, status:"false", photoUrl:"https://www.google.com", activeNumber:"4"},
];




class App extends React.Component{

  state={
    data:data,
    form:{
      id:'',
      carId:'',
      idGps:'',
      type:'',
      speedLimit:'',
      status:'',
      photoUrl:'',
      activeNumber:''
    },
    modalInsert: false,
    modalEdit: false,
  }

  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }

  showModal = () => {
    this.setState({modalInsert:true});
  }
  
  closeModal = () => {
    this.setState({modalInsert:false});
  }

  insert = () => {
    var newValue={...this.state.form}
    newValue.id=this.state.data.length + 1;
    var list = this.state.data;
    list.push(newValue);
    this.setState({data:list, modalInsert:false});
  }

  showModalEdit = (regist) => {
    this.setState({modalEdit:true, form: regist});
  }
  
  closeModalEdit = () => {
    this.setState({modalEdit:false});
  }

  edit = (data) => {
    var count = 0;
    var list = this.state.data;
    list.map((regist) => {
      if(data.id == regist.id){
        list[count].carId = data.carId;
        list[count].idGps = data.idGps;
        list[count].type = data.type;
        list[count].speedLimit = data.speedLimit;
        list[count].status = data.status;
        list[count].photoUrl = data.photoUrl;
        list[count].activeNumber = data.activeNumber;
      }
      count++;
    });
    this.setState({data: list, modalEdit:false});
  }

  render(){
    return (
      <>
      <Container>
        <br/>
        <Button color="success" onClick={() => this.showModal()}>Nuevo Vehículo</Button>
        <br/>
        <br/>
        
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Placa</th>
              <th>Id GPS</th>
              <th>Tipo</th>
              <th>Velocidad límite</th>
              <th>Estado</th>
              <th>Url Foto</th>
              <th>Número de activo</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map((element) => (
              <tr>
                <th>{element.id}</th>
                <th>{element.carId}</th>
                <th>{element.idGps}</th>
                <th>{element.type}</th>
                <th>{element.speedLimit}</th>
                <th>{element.status}</th>
                <th>{element.photoUrl}</th>
                <th>{element.activeNumber}</th>
                <th>
                  <Button color="primary" onClick={() => this.showModalEdit(element)}>Editar</Button>{'  '}
                  <Button color="danger">Eliminar</Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>

      </Container>

      <Modal isOpen={this.state.modalInsert}>
        <ModalHeader>
          <div>
            <h3>Insertar Vehículo</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          
          <FormGroup>
            <label>Id:</label>
            <input className="form-control" readOnly type="text" value={(this.state.data.length + 1)}/>
          </FormGroup>
          
          <FormGroup>
            <label>Placa:</label>
            <input className="form-control" name="carId" type="text" onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup>
            <label>GPS:</label>
            <input className="form-control" name="idGps" type="text" onChange={this.handleChange}/>
          </FormGroup>
          
          <FormGroup>
            <label>Tipo de Vehículo:</label>
            <input className="form-control" name="type" type="text" onChange={this.handleChange}/>
          </FormGroup>
          
          <FormGroup>
            <label>Velocidad límite:</label>
            <input className="form-control" name="speedLimit" type="text" onChange={this.handleChange}/>
          </FormGroup>
          
          <FormGroup>
            <label>Estado:</label>
            <input className="form-control" name="status" type="text" onChange={this.handleChange}/>
          </FormGroup>
          
          <FormGroup>
            <label>Foto:</label>
            <input className="form-control" name="photoUrl" type="text" onChange={this.handleChange}/>
          </FormGroup>
          
          <FormGroup>
            <label>Número de activo:</label>
            <input className="form-control" name="activeNumber" type="text" onChange={this.handleChange}/>
          </FormGroup>

        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => this.insert()}>Insertar</Button>
          <Button color="danger" onClick={() => this.closeModal()}>Cancelar</Button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={this.state.modalEdit}>
        <ModalHeader>
          <div>
            <h3>Editar Vehículo</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          
          <FormGroup>
            <label>Id:</label>
            <input className="form-control" readOnly type="text" value={this.state.form.id}/>
          </FormGroup>
          
          <FormGroup>
            <label>Placa:</label>
            <input className="form-control" name="carId" type="text" onChange={this.handleChange} value={this.state.form.carId}/>
          </FormGroup>

          <FormGroup>
            <label>GPS:</label>
            <input className="form-control" name="idGps" type="text" onChange={this.handleChange} value={this.state.form.idGps}/>
          </FormGroup>
          
          <FormGroup>
            <label>Tipo de Vehículo:</label>
            <input className="form-control" name="type" type="text" onChange={this.handleChange} value={this.state.form.type}/>
          </FormGroup>
          
          <FormGroup>
            <label>Velocidad límite:</label>
            <input className="form-control" name="speedLimit" type="text" onChange={this.handleChange} value={this.state.form.speedLimit}/>
          </FormGroup>
          
          <FormGroup>
            <label>Estado:</label>
            <input className="form-control" name="status" type="text" onChange={this.handleChange} value={this.state.form.status}/>
          </FormGroup>
          
          <FormGroup>
            <label>Foto:</label>
            <input className="form-control" name="photoUrl" type="text" onChange={this.handleChange} value={this.state.form.photoUrl}/>
          </FormGroup>
          
          <FormGroup>
            <label>Número de activo:</label>
            <input className="form-control" name="activeNumber" type="text" onChange={this.handleChange} value={this.state.form.activeNumber}/>
          </FormGroup>

        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => this.edit(this.state.form)}>Editar</Button>
          <Button color="danger" onClick={() => this.closeModalEdit()}>Cancelar</Button>
        </ModalFooter>
      </Modal>


      </>
    );
  }
}

export default App;
