# my-table-wc

**Estudiante:** *Edison Carvajal*

my-table-wc es un componente web reutilizable desarrollado con Stencil.js que permite renderizar una tabla de dinámica basada en los datos obtenidos desde una API REST. 

## Características
- Propiedad de entrada para la URL de la API: Permite la configuración dinámica del origen de los datos.
- Renderizado automático de columnas y filas: Las columnas se generan automáticamente a partir de las claves del JSON obtenido.
- Manejo de errores: Notifica al usuario si ocurre algún problema al obtener los datos.
- Diseño adaptable: La tabla es responsiva y se adapta a distintos tamaños de pantalla.

## Requisitos
- Node.js y npm instalados en tu máquina.
- Proyecto configurado para utilizar Stencil.js.

## Instalacion
1. Clonar el repositorio:

```bash
git clone https://github.com/edisonhcp1990/A2_Table_Componente-web.git
```
2. Dirigirse al proyecto y ubicarse en la carpeta componente-01-ehcarvajal

3. Ejecutar una terminal en la carpeta e instalar dependencias:
```bash
npm install
```

4. Compilar el componente:

```bash
npm run build
```

## Integración del Componente
Puedes integrar el componente my-table-wc en cualquier proyecto web que soporte componentes web (Web Components). Aquí se muestra cómo utilizar el componente en una aplicación:

1. Incluir el componente en tu proyecto HTML:

```html
<my-table-wc apiUrl="http://localhost:3000/cars"></my-table-wc>
```

