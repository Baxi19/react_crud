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
    data:data
  }

  render(){
    return (
      <>
      <Container>
        <br/>
        <Button color="primary">Nuevo Vehículo</Button>
        <br/>
        <br/>
        
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Placa</th>
              <th>Id GPS</th>
              <th>Tipo</th>
              <th>Velocidad limite</th>
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
                  <Button color="primary">Editar</Button>{'  '}
                  <Button color="danger">Eliminar</Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>

      </Container>
      </>
    );
  }
}

export default App;
