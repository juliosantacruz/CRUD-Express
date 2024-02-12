## README - Aplicación CRUD con Node.js, Express y PostgreSQL

Esta es una aplicación CRUD simple desarrollada con Node.js y Express, que utiliza una base de datos PostgreSQL para almacenar los datos. La aplicación proporciona endpoints para crear, leer, actualizar y eliminar registros en una base de datos PostgreSQL.


### Dependencias

Las dependencias utilizadas en este proyecto son las siguientes:

  

@hapi/boom: Proporciona herramientas para manejar errores HTTP de manera fácil y consistente.

dotenv: Módulo para cargar variables de entorno desde un archivo .env.

express: Framework web de Node.js utilizado para crear la aplicación y definir los endpoints.

joi: Biblioteca de validación de objetos JavaScript. Se utiliza para validar los datos de entrada en las solicitudes HTTP.

pg: Cliente PostgreSQL para Node.js utilizado para interactuar con la base de datos desde la aplicación.

pg-hstore: Serializador y deserializador de datos JSON para PostgreSQL.

sequelize: ORM de Node.js para bases de datos relacionales. Se utiliza para definir modelos, realizar consultas y gestionar la base de datos de manera programática.

### Configuración

Para ejecutar la aplicación en tu máquina local, sigue estos pasos:

  

- Clona este repositorio en tu máquina local.

- Instala las dependencias ejecutando el siguiente comando:
   ``` npm install```
-  Crea un archivo .env en la raíz del proyecto y configura las siguientes variables de entorno:

- [ ] DB_HOST=your_database_host
- [ ] DB_USER=your_database_user
- [ ] DB_PASSWORD=your_database_password
- [ ] DB_NAME=your_database_name
- Reemplaza your_database_host, your_database_user, your_database_password y your_database_name con la información de tu base de datos PostgreSQL.
(puedes utilizar el archivo docker-compose.yml para montar una base de datos de prueba)
  
- Ejecuta el siguiente comando para iniciar la aplicación: ``npm run dev``  Esto iniciará el servidor en el puerto predeterminado 3000.

### Uso

Una vez que la aplicación esté en funcionamiento, puedes utilizar Postman u otras herramientas similares para probar los endpoints proporcionados por la aplicación. Asegúrate de enviar solicitudes HTTP válidas y de acuerdo con la documentación de la API para interactuar con la base de datos y realizar operaciones CRUD. 

## CRUD_Express API

### GET  All Products 

> http://localhost:3000/api/v1/products

Regresa todos los registros

### GET Product

http://localhost:3000/api/v1/products/:id

Regresa el registro indicado con el id 

### DELETE Product 

http://localhost:3000/api/v1/products/:id

Elimina el registro del id proporcionado

### PATCH update Product 

http://localhost:3000/api/v1/products/:id

Se actualiza la entrada segun id, se debe enviar cambios

```json
{
    
    "name":"other name"

}
```

### POST new Product 

http://localhost:3000/api/v1/products

Crea una nueva entrada de pruducto
```json
{
    "id":4,
    "name":"product_test",
    "price":34,
    "stars":4
}
```


### GET  All Categories 

> http://localhost:3000/api/v1/category

Regresa todos los registros

### GET category

http://localhost:3000/api/v1/category/:id

Regresa el registro indicado con el id 

### DELETE category 

http://localhost:3000/api/v1/category/:id

Elimina el registro del id proporcionado

### PATCH update category 

http://localhost:3000/api/v1/category/:id

Se actualiza la entrada segun id, se debe enviar cambios

```json
{
    
    "name":"other name"

}
```

### POST new Product 

http://localhost:3000/api/v1/products

Crea una nueva entrada de pruducto
```json
{
   
    "name":"product_test",
   
}
```
