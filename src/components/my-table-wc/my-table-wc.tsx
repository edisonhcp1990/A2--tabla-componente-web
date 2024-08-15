import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'my-table-wc',  
  styleUrl: 'my-table-wc.css',  
  shadow: true,  
})
export class ResponsiveTable {
  // Propiedad que recibe una URL de API para obtener datos.
  @Prop() apiUrl: string;

  // Estado que almacena los datos obtenidos de la API.
  @State() data: any[] = [];
  
  // Estado que almacena las claves de los objetos de datos para crear las cabeceras de la tabla.
  @State() keys: string[] = [];
  
  // Estado que almacena los mensajes de error, si los hubiera.
  @State() error: string = '';

  // Método que se ejecuta antes de que el componente se cargue por primera vez.
  async componentWillLoad() {
    try {
      // Realiza una solicitud HTTP para obtener los datos de la URL proporcionada.
      const response = await fetch(this.apiUrl);
      // Verifica si la respuesta es correcta, de lo contrario lanza un error.
      if (!response.ok) throw new Error('Error en la red.');
      
      // Convierte la respuesta en JSON.
      const result = await response.json();
      
      // Procesa los datos: si no es un array, intenta acceder a una propiedad 'results' (esto puede variar según la API).
      const processedData = Array.isArray(result) ? result : result.results || [];
      
      // Si hay datos procesados, establece las claves (encabezados de columna) y los datos en el estado.
      if (processedData.length > 0) {
        this.keys = Object.keys(processedData[0]);
        this.data = processedData;
      } else {
        //mensaje de error si no se pueden reconocer los datos, establece un.
        this.error = 'El formato de datos no puede ser reconocido';
      }
    } catch (error) {
      //mensaje de error.
      this.error = `Error al momento de obtener los datos: ${error.message}`;
    }
  }

  // Método que define cómo se debe renderizar el componente.
  render() {
    // Si hay un mensaje de error, muestra el mensaje en un elemento con la clase 'error'.
    if (this.error) return <div class="error">{this.error}</div>;
    
    // Solo renderiza la tabla si hay datos disponibles
    if (this.data.length === 0) return null;

    // Renderiza la tabla con los datos obtenidos.
    return (
      <table>
        <thead>
          <tr>
            {this.keys.map(key => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.data.map(item => (
            <tr>
              {this.keys.map(key => <td>{item[key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
