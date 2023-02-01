import React from "react";
import axios from 'axios';
import FileSaver from 'file-saver';
import styles from "../assets/css/styles.css";

class Rastreo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   selectedFile: null,           //Cambiar el selected file por los distintos campos de imagen
      diagrama_flujo: null,
      imagen: null,
      usuario: '',
      nombre_proceso: '',
      objetivo: '',
      identificador: '',
      ind_met: '',
      des_actividades: '',
      
      categoria: '',
      salida: '',
      frecuencia: '', 

      nombre_proyecto: '',
      version: '', 
      puesto: '',
      fecha: '',
      herramienta: '',
      link: '',
    };
  }

    handleFileDiagrama = event => {
        this.setState({
        diagrama_flujo: event.target.files[0]
        });
    };

    handleFileImagen = event => {
        this.setState({
        imagen: event.target.files[0]
        });
    };

    handleUserChange = event => {
        this.setState({
        usuario: event.target.value
        });
    };

    handleNombreChange = event => {
        this.setState({
        nombre_proceso: event.target.value
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

    handleNameChange = event => {
        this.setState({
        nombre_proyecto: event.target.value
        });
    };

    handleVersionChange = event => {
        this.setState({
        version: event.target.value
        });
    };

    handlePuestoChange = event => {
        this.setState({
        puesto: event.target.value
        });
    };

    handleFechaChange = event => {
        this.setState({
        fecha: event.target.value
        });
    };

    handleHerramientaChange = event => {
        this.setState({
        herramienta: event.target.value
        });
    };

    handleLinkChange = event => {
        this.setState({
        link: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('diagrama_flujo', this.state.diagrama_flujo);
        formData.append('usuario', this.state.usuario);
        formData.append('nombre_proceso', this.state.nombre_proceso);
        formData.append('objetivo', this.state.objetivo);
        formData.append('identificador', this.state.identificador);
        formData.append('ind_met', this.state.ind_met);
        formData.append('des_actividades', this.state.des_actividades);
        formData.append('categoria', this.state.categoria);
        formData.append('salida', this.state.salida);
        formData.append('frecuencia', this.state.frecuencia);
        formData.append('nombre_proyecto', this.state.nombre_proyecto);
        formData.append('version', this.state.version);
        formData.append('puesto', this.state.puesto);
        formData.append('fecha', this.state.fecha);
        formData.append('herramienta', this.state.herramienta);
        formData.append('link', this.state.link);
        formData.append('imagen', this.state.imagen);
        axios.post('http://127.0.0.1:8000/generarPDF/doc_registro_rastreo', formData, {
            responseType: 'blob',
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            FileSaver.saveAs(response.data, 'documento.pdf');
        }).catch(error => {
            console.log(error);
        });
    };

  //Agregar los inputs necesarios
  render() {
    return (

    <div className="container col-md-6">
        <div class="card">
            <div class="card-header text-center">
            <h5>Registro de rastreo</h5>
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
                        <label>Nombre del proceso</label>
                        <input type="text" className="form-control" value={this.state.nombre_proceso} onChange={this.handleNombreChange} />
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
                        <label>Descripción de actividades</label>
                        <textarea  type="text" className="form-control" value={this.state.des_actividades} onChange={this.handleDesActividadesChange} />
                    </div>

                    <div className="form-group">
                        <label>Diagrama de flujo</label>
                        <input type="file" name="image" id="image" className="form-control"  onChange={this.handleFileDiagrama} />
                    </div>

                    <div className="form-group">
                        <label>Categoría</label>
                        <input type="text" className="form-control" value={this.state.categoria} onChange={this.handleCategoriaChange} />
                    </div>
                    <div className="form-group">
                        <label>Salida</label>
                        <input type="text" className="form-control" value={this.state.salida} onChange={this.handleSalidaChange} />
                    </div>
                    <div className="form-group">
                        <label>Frecuencia</label>
                        <input type="text" className="form-control" value={this.state.frecuencia} onChange={this.handleFrecuenciaChange} />
                    </div>

                    <hr />
                    <h4>Evidencias</h4>
                    <div className="form-group">
                        <label>Nombre del proyecto</label>
                        <input type="text" className="form-control" value={this.state.nombre_proyecto} onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                        <label>Versión</label>
                        <input type="text" className="form-control" value={this.state.version} onChange={this.handleVersionChange} />
                    </div>
                    <div className="form-group">
                        <label>Puesto</label>
                        <input type="text" className="form-control" value={this.state.puesto} onChange={this.handlePuestoChange} />
                    </div>
                    <div className="form-group">
                        <label>Fecha</label>
                        <input type="text" className="form-control" value={this.state.fecha} onChange={this.handleFechaChange} />
                    </div>
                    <div className="form-group">
                        <label>Herramienta</label>
                        <textarea type="text" className="form-control" value={this.state.herramienta} onChange={this.handleHerramientaChange} />
                    </div>
                    <div className="form-group">
                        <label>Link</label>
                        <input type="text" className="form-control" value={this.state.link} onChange={this.handleLinkChange} />
                    </div>
                    <div className="form-group">
                        <label>Imagen</label>
                        <input type="file" name="image2" id="image2" className="form-control" onChange={this.handleFileImagen} />
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

export default Rastreo;