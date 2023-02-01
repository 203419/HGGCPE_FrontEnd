import React from "react";
import axios from 'axios';
import FileSaver from 'file-saver';
import styles from "../assets/css/styles.css";

class Requisitos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   selectedFile: null,           //Cambiar el selected file por los distintos campos de imagen
      diagrama_flujo: null,

      referencias: null,
      usuario: '',
      nombre_proceso: '',
      objetivo: '',
      identificador: '',
      ind_met: '',
      des_actividades: '',
      categoria: '',
      salida: '',
      frecuencia: '', 

      proposito: '',
      alcance: '',
      funcionalidades: '',
      clases: '',
      entorno: '',
      req_f: '',
      req_nf: '',
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

    handlePropositoChange = event => {
        this.setState({
        proposito: event.target.value
        });
    };

    handleAlcanceChange = event => {
        this.setState({
        alcance: event.target.value
        });
    };

    handleReferenciasChange = event => {
        this.setState({
        referencias: event.target.files[0]
        });
    };

    handleFuncionalidadesChange = event => {
        this.setState({
        funcionalidades: event.target.value
        });
    };

    handleClasesChange = event => {
        this.setState({
        clases: event.target.value
        });
    };

    handleEntornoChange = event => {
        this.setState({
        entorno: event.target.value
        });
    };

    handleReqFChange = event => {
        this.setState({
        req_f: event.target.value
        });
    };

    handleReqNFChange = event => {
        this.setState({
        req_nf: event.target.value
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
        formData.append('proposito', this.state.proposito);
        formData.append('alcance', this.state.alcance);
        formData.append('referencias', this.state.referencias);
        formData.append('funcionalidades', this.state.funcionalidades);
        formData.append('clases', this.state.clases);
        formData.append('entorno', this.state.entorno);
        formData.append('req_f', this.state.req_f);
        formData.append('req_nf', this.state.req_nf);
        axios.post('http://127.0.0.1:8000/generarPDF/doc_requisitos', formData, {
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
            <h5>Documento de requisitos</h5>
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
                        <textarea type="text" className="form-control" value={this.state.objetivo} onChange={this.handleObjetivoChange} />
                    </div>
                    <div className="form-group">
                        <label>Identificador</label>
                        <input type="text" className="form-control" value={this.state.identificador} onChange={this.handleIdentificadorChange} />
                    </div>
                    <div className="form-group">
                        <label>Indicaciones y metricas</label>
                        <input type="text" className="form-control" value={this.state.ind_met} onChange={this.handleIndMetChange} />
                    </div>
                    <div className="form-group">
                        <label>Descripción de actividades</label>
                        <textarea type="text" className="form-control" value={this.state.des_actividades} onChange={this.handleDesActividadesChange} />
                    </div>
                    <div className="form-group">
                        <label>Diagrama de flujo</label>
                        <input type="file" className="form-control" onChange={this.handleDiagramaFlujo} />
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
                        <label>Proposito</label>
                        <input type="text" className="form-control" value={this.state.proposito} onChange={this.handlePropositoChange} />
                    </div>
                    <div className="form-group">
                        <label>Alcance</label>
                        <textarea type="text" className="form-control" value={this.state.alcance} onChange={this.handleAlcanceChange} />
                    </div>
                    <div className="form-group">
                        <label>Referencias</label>
                        <input type="file" className="form-control" onChange={this.handleReferenciasChange} />
                    </div>
                    <div className="form-group">
                        <label>Funcionalidades del producto</label>
                        <textarea type="text" className="form-control" value={this.state.funcionalidades} onChange={this.handleFuncionalidadesChange} />
                    </div>
                    <div className="form-group">
                        <label>Clases y caracteristicas del usuario</label>
                        <textarea type="text" className="form-control" value={this.state.clases} onChange={this.handleClasesChange} />
                    </div>
                    <div className="form-group">
                        <label>Entorno operativo</label>
                        <input type="text" className="form-control" value={this.state.entorno} onChange={this.handleEntornoChange} />
                    </div>
                    <div className="form-group">
                        <label>Requerimientos funcionales</label>
                        <textarea type="text" className="form-control" value={this.state.req_f} onChange={this.handleReqFChange} />
                    </div>
                    <div className="form-group">
                        <label>Requerimientos no funcionales</label>
                        <textarea type="text" className="form-control" value={this.state.req_nf} onChange={this.handleReqNFChange} />
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

export default Requisitos;