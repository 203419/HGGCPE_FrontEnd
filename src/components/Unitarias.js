import React from "react";
import axios from 'axios';
import FileSaver from 'file-saver';
import styles from "../assets/css/styles.css";

class Unitarias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   selectedFile: null,           //Cambiar el selected file por los distintos campos de imagen
      diagrama_flujo: null,

      cod1: null,
      cod2: null,
      cod3: null,
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
      encargado: '',
      fase: '',
      lugar_fecha: '',
      req: '',
      selec: '',
      repo: '',
      lineas: '',
    };
  }
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

    handleDiagramaFlujo = event => {
        this.setState({
        diagrama_flujo: event.target.files[0]
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

    handleNombreProyectoChange = event => {
        this.setState({
        nombre_proyecto: event.target.value
        });
    };

    handleEncargadoChange = event => {
        this.setState({
        encargado: event.target.value
        });
    };

    handleFaseChange = event => {
        this.setState({
        fase: event.target.value    
        });
    };

    handleLugarFechaChange = event => {
        this.setState({
        lugar_fecha: event.target.value
        });
    };

    handleReqChange = event => {
        this.setState({
        req: event.target.value
        });
    };

    handleSelecChange = event => {
        this.setState({
        selec: event.target.value
        });
    };

    handleRepoChange = event => {
        this.setState({
        repo: event.target.value
        });
    };

    handleCod1Change = event => {
        this.setState({
        cod1: event.target.files[0]
        });
    };

    handleCod2Change = event => {
        this.setState({
        cod2: event.target.files[0]
        });
    };

    handleCod3Change = event => {
        this.setState({
        cod3: event.target.files[0]
        }); 
    };

    handleLineasChange = event => {
        this.setState({
        lineas: event.target.value
        });
    };
   
    handleFormSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('usuario', this.state.usuario);
        formData.append('nombre_proceso', this.state.nombre_proceso);
        formData.append('objetivo', this.state.objetivo);
        formData.append('identificador', this.state.identificador);
        formData.append('ind_met', this.state.ind_met);
        formData.append('des_actividades', this.state.des_actividades);
        formData.append('diagrama_flujo', this.state.diagrama_flujo);
        formData.append('categoria', this.state.categoria);
        formData.append('salida', this.state.salida);
        formData.append('frecuencia', this.state.frecuencia);

        formData.append('nombre_proyecto', this.state.nombre_proyecto);
        formData.append('encargado', this.state.encargado);
        formData.append('fase', this.state.fase);
        formData.append('lugar_fecha', this.state.lugar_fecha);
        formData.append('req', this.state.req);
        formData.append('selec', this.state.selec);
        formData.append('repo', this.state.repo);
        formData.append('cod1', this.state.cod1);
        formData.append('cod2', this.state.cod2);
        formData.append('cod3', this.state.cod3);
        formData.append('lineas', this.state.lineas);
        
        axios.post('http://127.0.0.1:8000/generarPDF/doc_pruebas_uni', formData, {
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
            <h5>Pruebas Unitarias</h5>
            </div>
        <div class="card-body">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-10">
                <h4>Procesos</h4>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input type="text" className="form-control" name="usuario" value={this.state.usuario} onChange={this.handleUserChange} />
                    </div>
                    <div className="form-group">
                        <label>Nombre del Proceso</label>
                        <input type="text" className="form-control" name="nombre_proceso" value={this.state.nombre_proceso} onChange={this.handleNombreChange} />
                    </div>
                    <div className="form-group">
                        <label>Objetivo</label>
                        <input type="text" className="form-control" name="objetivo" value={this.state.objetivo} onChange={this.handleObjetivoChange} />
                    </div>
                    <div className="form-group">
                        <label>Identificador</label>
                        <input type="text" className="form-control" name="identificador" value={this.state.identificador} onChange={this.handleIdentificadorChange} />
                    </div>
                    <div className="form-group">
                        <label>Indicaciones y metricas</label>
                        <textarea type="text" className="form-control" name="ind_met" value={this.state.ind_met} onChange={this.handleIndMetChange} />
                    </div>
                    <div className="form-group">
                        <label>Descripción de actividades</label>
                        <textarea type="text" className="form-control" name="des_actividades" value={this.state.des_actividades} onChange={this.handleDesActividadesChange} />
                    </div>
                    <div className="form-group">
                        <label>Diagrama de flujo</label>
                        <input type="file" className="form-control" name="diagrama_flujo" onChange={this.handleDiagramaFlujo} />
                    </div>
                    <div className="form-group">
                        <label>Categoria</label>
                        <input type="text" className="form-control" name="categoria" value={this.state.categoria} onChange={this.handleCategoriaChange} />
                    </div>
                    <div className="form-group">
                        <label>Evidencias de salida</label>
                        <input type="text" className="form-control" name="salida" value={this.state.salida} onChange={this.handleSalidaChange} />
                    </div>
                    <div className="form-group">
                        <label>Frecuencia</label>
                        <input type="text" className="form-control" name="frecuencia" value={this.state.frecuencia} onChange={this.handleFrecuenciaChange} />
                    </div>

                    <hr />
                    <h4>Evidencias</h4>

                    <div className="form-group">
                        <label>Nombre del Proyecto</label>
                        <input type="text" className="form-control" name="nombre_proyecto" value={this.state.nombre_proyecto} onChange={this.handleNombreProyectoChange} />
                    </div>
                    <div className="form-group">
                        <label>Encargado</label>
                        <input type="text" className="form-control" name="encargado" value={this.state.encargado} onChange={this.handleEncargadoChange} />
                    </div>
                    <div className="form-group">
                        <label>Fase</label>
                        <input type="text" className="form-control" name="fase" value={this.state.fase} onChange={this.handleFaseChange} />
                    </div>
                    <div className="form-group">
                        <label>Lugar y Fecha</label>
                        <input type="text" className="form-control" name="lugar_fecha" value={this.state.lugar_fecha} onChange={this.handleLugarFechaChange} />
                    </div>
                    <div className="form-group">
                        <label>Requerimientos necesarios para el codigo</label>
                        <textarea type="text" className="form-control" name="req" value={this.state.req} onChange={this.handleReqChange} />
                    </div>
                    <div className="form-group">
                        <label>Nombre de la seleccion</label>
                        <input type="text" className="form-control" name="selec" value={this.state.selec} onChange={this.handleSelecChange} />
                    </div>
                    <div className="form-group">
                        <label>Link del repositorio</label>
                        <input type="text" className="form-control" name="repo" value={this.state.repo} onChange={this.handleRepoChange} />
                    </div>
                    <div className="form-group">
                        <label>Capturas del codigo</label>
                        <input type="file" className="form-control" name="cod1" onChange={this.handleCod1Change} />
                        <input type="file" className="form-control" name="cod2" onChange={this.handleCod2Change} />
                        <input type="file" className="form-control" name="cod3" onChange={this.handleCod3Change} />
                    </div>
                    <div className="form-group">
                        <label>Lineas de codigo</label>
                        <input type="text" className="form-control" name="lineas" value={this.state.lineas} onChange={this.handleLineasChange} />
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

export default Unitarias;