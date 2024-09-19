# Prueba tecnica

Pequeña aplicacion que cuenta con autenticación con jwt, rutas protegidas, validaciones de campos, donde se pueden registrar usuarios para visualizar estadisticas de ventas de un negocio, y tambien cuenta con un pequeño formulario para registrar clientes.



## Backend
```/auth/register```
Registra al usuario con nombre de usuario, correo electronico y contraseña, y retorna un access token.

```/auth/login```
Loguea al usuario para mantener la sesion iniciada retornando un access token.

```/statistics/```
Devuelve datos de ventas de negocio.

```/client/register-client```
Registra a un nuevo cliente con el Nombre, Apellido y Telefono.


# Frontend

Puedes loguearte o registrar un usuario y mostramos graficos de los datos extraidos del back, tenemos las rutas protegidas tambien, para evitar el accesso al dashboard si haberte logueado o registrado.

Luego tenemos el boton para llenar el formulario y registrar un nuevo cliente.

Finalmente puedes cerrar sesion con el boton de sign out que te redirige al login. 

# Tecnologias Utilizadas
### Backend
* Fastify
* jsonwebtoken
* mongoose
* bycryptjs

###Frontend
* Angular
* ngx-charts


