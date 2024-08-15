import { r as registerInstance, h } from './index-2358ce4e.js';

const myTableWcCss = ":host{display:block;font-family:Arial, sans-serif}table{width:100%;border-collapse:collapse;background-color:#e8f5e9}th,td{padding:10px;text-align:left;border:2px solid #81c784}th{background-color:#388e3c;cursor:pointer}th:hover{background-color:#2e7d32}td{color:#388e3c}tr:nth-child(even){background-color:#c8e6c9}.error{color:#d32f2f;font-weight:bold;margin:10px 0}";

const ResponsiveTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.apiUrl = undefined;
        this.data = [];
        this.keys = [];
        this.error = '';
    }
    // Método que se ejecuta antes de que el componente se cargue por primera vez.
    async componentWillLoad() {
        try {
            // Realiza una solicitud HTTP para obtener los datos de la URL proporcionada.
            const response = await fetch(this.apiUrl);
            // Verifica si la respuesta es correcta, de lo contrario lanza un error.
            if (!response.ok)
                throw new Error('Error en la red.');
            // Convierte la respuesta en JSON.
            const result = await response.json();
            // Procesa los datos: si no es un array, intenta acceder a una propiedad 'results' (esto puede variar según la API).
            const processedData = Array.isArray(result) ? result : result.results || [];
            // Si hay datos procesados, establece las claves (encabezados de columna) y los datos en el estado.
            if (processedData.length > 0) {
                this.keys = Object.keys(processedData[0]);
                this.data = processedData;
            }
            else {
                //mensaje de error si no se pueden reconocer los datos, establece un.
                this.error = 'El formato de datos no puede ser reconocido';
            }
        }
        catch (error) {
            //mensaje de error.
            this.error = `Error al momento de obtener los datos: ${error.message}`;
        }
    }
    // Método que define cómo se debe renderizar el componente.
    render() {
        // Si hay un mensaje de error, muestra el mensaje en un elemento con la clase 'error'.
        if (this.error)
            return h("div", { class: "error" }, this.error);
        // Solo renderiza la tabla si hay datos disponibles
        if (this.data.length === 0)
            return null;
        // Renderiza la tabla con los datos obtenidos.
        return (h("table", null, h("thead", null, h("tr", null, this.keys.map(key => (h("th", null, key))))), h("tbody", null, this.data.map(item => (h("tr", null, this.keys.map(key => h("td", null, item[key]))))))));
    }
};
ResponsiveTable.style = myTableWcCss;

export { ResponsiveTable as my_table_wc };

//# sourceMappingURL=my-table-wc.entry.js.map