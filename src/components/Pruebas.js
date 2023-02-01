import React from "react";
import axios from 'axios';
import FileSaver from 'file-saver';
import styles from "../assets/css/styles.css";

class Pruebas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   selectedFile: null,           //Cambiar el selected file por los distintos campos de imagen
      diagrama_flujo: null,

      criterios_aceptacion: null,
      criterios_usa_img: null,
      caso_prueba_img: null,
      reporte_prueba_img: null,
      usuario: '',
      nombre_proceso: '',
      objetivo: '',
      identificador: '',
      ind_met: '',
      des_actividades: '',
      categoria: '',
      salida: '',
      frecuencia: '', 

      tipo_errores: '',
      criterios_usabilidad: '',
      caso_prueba: '',
      folio_caso: '',
      reporte_prueba: '',
      reporte_folio: '',
      metricas: '',
      conclusiones: '',
    };
  }

    handleDiagramaChange = event => {
        this.setState({
        diagrama_flujo: event.target.files[0]
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

    handleTipoErroresChange = event => {
        this.setState({
        tipo_errores: event.target.value
        });
    };

    handleCriteriosAceptacionChange = event => {
        this.setState({
        criterios_aceptacion: event.target.files[0]
        });
    };

    handleCriteriosUsaChange = event => {
        this.setState({
        criterios_usabilidad: event.target.value
        });
    };

    handleCriteriosUsaImgChange = event => {
        this.setState({
        criterios_usa_img: event.target.files[0]
        });
    };

    handleCasoPruebaChange = event => {
        this.setState({
        caso_prueba: event.target.value
        });
    };

    handleFolioCasoChange = event => {
        this.setState({
        folio_caso: event.target.value
        });
    };

    handleCasoPruebaImgChange = event => {
        this.setState({
        caso_prueba_img: event.target.files[0]
        });
    };

    handleReportePruebaChange = event => {
        this.setState({
        reporte_prueba: event.target.value
        });
    };

    handleReporteFolioChange = event => {
        this.setState({
        reporte_folio: event.target.value
        });
    };

    handleReportePruebaImgChange = event => {
        this.setState({
        reporte_prueba_img: event.target.files[0]
        });
    };

    handleMetricasChange = event => {
        this.setState({
        metricas: event.target.value
        });
    };

    handleConclusionesChange = event => {
        this.setState({
        conclusiones: event.target.value
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

        formData.append('tipo_errores', this.state.tipo_errores);
        formData.append('criterios_aceptacion', this.state.criterios_aceptacion);
        formData.append('criterios_usabilidad', this.state.criterios_usabilidad);
        formData.append('criterios_usa_img', this.state.criterios_usa_img);
        formData.append('caso_prueba', this.state.caso_prueba);
        formData.append('folio_caso', this.state.folio_caso);
        formData.append('caso_prueba_img', this.state.caso_prueba_img);
        formData.append('reporte_prueba', this.state.reporte_prueba);
        formData.append('reporte_folio', this.state.reporte_folio);
        formData.append('reporte_prueba_img', this.state.reporte_prueba_img);
        formData.append('metricas', this.state.metricas);
        formData.append('conclusiones', this.state.conclusiones);
        
        axios.post('http://127.0.0.1:8000/generarPDF/doc_pruebas', formData, {
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
            <h5>Documento de pruebas</h5>
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
                        <label>Nombre del proceso</label>
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
                        <input type="text" className="form-control" name="ind_met" value={this.state.ind_met} onChange={this.handleIndMetChange} />
                    </div>
                    <div className="form-group">
                        <label>Descripción de actividades</label>
                        <input type="text" className="form-control" name="des_actividades" value={this.state.des_actividades} onChange={this.handleDesActividadesChange} />
                    </div>
                    <div className="form-group">
                        <label>Diagrama de flujo</label>
                        <input type="file" className="form-control" name="diagrama_flujo" onChange={this.handleDiagramaChange} />
                    </div>
                    <div className="form-group">
                        <label>Categoria</label>
                        <input type="text" className="form-control" name="categoria" value={this.state.categoria} onChange={this.handleCategoriaChange} />
                    </div>
                    <div className="form-group">
                        <label>Salida</label>
                        <input type="text" className="form-control" name="salida" value={this.state.salida} onChange={this.handleSalidaChange} />
                    </div>
                    <div className="form-group">
                        <label>Frecuencia</label>
                        <input type="text" className="form-control" name="frecuencia" value={this.state.frecuencia} onChange={this.handleFrecuenciaChange} />
                    </div>

                    <hr />
                    <h4>Evidencias</h4>

                    <div className="form-group">
                        <label>Tipo de errores</label>
                        <input type="text" className="form-control" name="tipo_errores" value={this.state.tipo_errores} onChange={this.handleTipoErroresChange} />
                    </div>
                    <div className="form-group">
                        <label>Criterios de aceptación de pruebas</label>
                        <input type="file" className="form-control" name="criterios_aceptacion" onChange={this.handleCriteriosAceptacionChange} />
                    </div>
                    <div className="form-group">
                        <label>Criterios para las pruebas usabilidad</label>
                        <input type="text" className="form-control" name="criterios_usabilidad" value={this.state.criterios_usabilidad} onChange={this.handleCriteriosUsaChange} />
                    </div>
                    <div className="form-group">
                        <label>Imagen de los criterios de usabilidad</label>
                        <input type="file" className="form-control" name="criterios_usabilidad_img" onChange={this.handleCriteriosUsaImgChange} />
                    </div>
                    <div className="form-group">
                        <label>Caso de prueba</label>
                        <input type="text" className="form-control" name="caso_prueba" value={this.state.caso_prueba} onChange={this.handleCasoPruebaChange} />
                    </div>
                    <div className="form-group">
                        <label>Folio</label>
                        <input type="text" className="form-control" name="folio_caso" value={this.state.folio} onChange={this.handleFolioChange} />
                    </div>
                    <div className="form-group">
                        <label>Imagen de caso de prueba</label>
                        <input type="file" className="form-control" name="caso_prueba_img" onChange={this.handleCasoPruebaImgChange} />
                    </div>
                    <div className="form-group">
                        <label>Reporte de prueba</label>
                        <input type="text" className="form-control" name="reporte_prueba" value={this.state.reporte_prueba} onChange={this.handleReportePruebaChange} />
                    </div>
                    <div className="form-group">
                        <label>Folio</label>
                        <input type="text" className="form-control" name="folio_reporte" value={this.state.folio_reporte} onChange={this.handleFolioReporteChange} />
                    </div>
                    <div className="form-group">
                        <label>Imagen de reporte de prueba</label>
                        <input type="file" className="form-control" name="reporte_prueba_img" onChange={this.handleReportePruebaImgChange} />
                    </div>
                    <div className="form-group">
                        <label>Metricas de pruebas</label>
                        <input type="text" className="form-control" name="metricas" value={this.state.metricas_pruebas} onChange={this.handleMetricasPruebasChange} />
                    </div>
                    <div className="form-group">
                        <label>Conclusiones</label>
                        <input type="text" className="form-control" name="conclusiones" value={this.state.conclusiones} onChange={this.handleConclusionesChange} />
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

export default Pruebas;