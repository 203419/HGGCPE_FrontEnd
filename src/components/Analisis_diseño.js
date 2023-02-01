import React from "react";
import axios from 'axios';
import FileSaver from 'file-saver';
import styles from "../assets/css/styles.css";

class Analisis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,           //Cambiar el selected file por los distintos campos de imagen
      arq1: null,
      comp1: null,
      usuario: '',
      nombre: '',
      objetivo: '',
      identificador: '',
      ind_met: '',
      des_actividades: '',
      categoria: '',
      salida: '',
      frecuencia: '', 
      introE: '',
      alcanceE: '', 
      objetivosE: '',
      des_componentesE: ''
    };
  }

  handleFileSelect = event => {          //Agregar handleFile y handleChange para nuevos input
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  handleUserChange = event => {
    this.setState({
      usuario: event.target.value
    });
  };

  handleNameChange = event => {
    this.setState({
      nombre: event.target.value
    });
  };

  handleObjetivoChange = event => {
    this.setState({
      objetivo: event.target.value
    });
  };

  handleIdentificadorChange = event => {
    this.setState({
      identificador: event.target.value
    });
  };

  handleIndMetChange = event => {
    this.setState({
      ind_met: event.target.value
    });
  };

  handleDesActividadesChange = event => {
    this.setState({
      des_actividades: event.target.value
    });
  };

  handleCategoriaChange = event => {
    this.setState({
      categoria: event.target.value
    });
  };

  handleSalidaChange = event => {
    this.setState({
      salida: event.target.value
    });
  };

  handleFrecuenciaChange = event => {
    this.setState({
      frecuencia: event.target.value
    });
  };

  handleIntroEChange = event => {
    this.setState({
      introE: event.target.value
    });
  };

  handleAlcanceEChange = event => {
    this.setState({
      alcanceE: event.target.value
    });
  };

  handleObjetivosEChange = event => {
    this.setState({
      objetivosE: event.target.value
    });
  };

  // handdle para arq1
  handleArq1Change = event => {
    this.setState({
      arq1: event.target.files[0]
    });
  };

  // handdle para comp1
  handleComp1Change = event => {
    this.setState({
      comp1: event.target.files[0]
    });
  };

  handleDesComponentesEChange = event => {
    this.setState({
      des_componentesE: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('nombre', this.state.nombre);
    formData.append('usuario', this.state.usuario);
    formData.append('objetivo', this.state.objetivo);
    formData.append('identificador', this.state.identificador);
    formData.append('ind_met', this.state.ind_met);
    formData.append('des_actividades', this.state.des_actividades);
    formData.append('diagrama_flujo', this.state.selectedFile);
    formData.append('categoria', this.state.categoria);
    formData.append('salida', this.state.salida);
    formData.append('frecuencia', this.state.frecuencia);
    formData.append('introE', this.state.introE);
    formData.append('alcanceE', this.state.alcanceE);
    formData.append('objetivosE', this.state.objetivosE);
    formData.append('arq1', this.state.arq1);
    formData.append('comp1', this.state.comp1);
    formData.append('des_componentesE', this.state.des_componentesE);

    axios.post('http://127.0.0.1:8000/generarPDF/doc_analisis', formData, {
        responseType: 'blob', 
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
      .then(response => {
        FileSaver.saveAs(response.data, `${this.state.identificador}.pdf`);
      })
      .catch(error => {
        console.log(error);
      });
  };


  //Agregar los inputs necesarios
  render() {
    return (
      <div className="container col-md-6">
        <div class="card">
            <div class="card-header text-center">
            <h5>Documento de analisi y diseño</h5>
            </div>
        <div class="card-body">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-10">
                <h4>Procesos</h4>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input type="text" className="form-control" value={this.state.usuario} onChange={this.handleUserChange} />
                    </div>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" value={this.state.nombre} onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                        <label>Objetivo</label>
                        <input type="text" className="form-control" value={this.state.objetivo} onChange={this.handleObjetivoChange} />
                    </div>
                    <div className="form-group">
                        <label>Identificador</label>
                        <input type="text" className="form-control" value={this.state.identificador} onChange={this.handleIdentificadorChange} />
                    </div>
                    <div className="form-group">
                        <label>Indicaciones y metricas</label>
                        <textarea type="text" className="form-control" value={this.state.ind_met} onChange={this.handleIndMetChange} />
                    </div>
                    <div className="form-group">
                        <label>Descripcion de actividades</label>
                        <textarea type="text" className="form-control" value={this.state.des_actividades} onChange={this.handleDesActividadesChange} />
                    </div>
                    <div className="form-group">
                        <label>Diagrama de flujo</label>
                        <input type="file" className="form-control" onChange={this.handleFileSelect} />
                    </div>
                    <div className="form-group">
                        <label>Categoria</label>
                        <input type="text" className="form-control" value={this.state.categoria} onChange={this.handleCategoriaChange} />
                    </div>
                    <div className="form-group">
                        <label>Evidencias de salida</label>
                        <input type="text" className="form-control" value={this.state.salida} onChange={this.handleSalidaChange} />
                    </div>
                    <div className="form-group">
                        <label>Frecuencia</label>
                        <input type="text" className="form-control" value={this.state.frecuencia} onChange={this.handleFrecuenciaChange} />
                    </div>

                    <hr />
                    <h4>Evidencias</h4>

                    <div className="form-group">
                        <label>Introduccion</label>
                        <input type="text" className="form-control" value={this.state.introE} onChange={this.handleIntroEChange} />
                    </div>
                    <div className="form-group">
                        <label>Alcance</label>
                        <textarea type="text" className="form-control" value={this.state.alcanceE} onChange={this.handleAlcanceEChange} />
                    </div>
                    <div className="form-group">
                        <label>Objetivos</label>
                        <textarea type="text" className="form-control" value={this.state.objetivosE} onChange={this.handleObjetivosEChange} />
                    </div>
                    <div className="form-group">
                        <label>Arquitectura logica del sistema</label>
                        <input type="file" className="form-control" onChange={this.handleArq1Change} />
                    </div>
                    <div className="form-group">
                        <label>Modelo de componentes del sistema</label>
                        <input type="file" className="form-control" onChange={this.handleComp1Change} />
                    </div>
                    <div className="form-group">
                        <label>Descripcion de componentes</label>
                        <textarea type="text" className="form-control" value={this.state.des_componentesE} onChange={this.handleDesComponentesEChange} />
                    </div>

                    <br/>
                    <div>
                        <button type="submit" className="btn  btn-success col-12" >Generar PDF</button>
                    </div>
                    <br/>
                   
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
  }
}


export default Analisis;