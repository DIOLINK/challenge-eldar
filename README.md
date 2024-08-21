# Front End Challenge SSR

## Descripción
Este proyecto consiste en la creación de una aplicación web con un sistema de autenticación básico que permite a dos tipos de usuarios, "admin" y "user", acceder a información obtenida desde una API. El usuario "user" tiene acceso de solo lectura, mientras que el usuario "admin" puede realizar operaciones de creación y edición.

## Requisitos Técnicos
- [X] Utilizar **Next.js**.
- [ ] Implementar una arquitectura de carpetas bien estructurada y organizada.
- [ ] Realizar la entrega en un repositorio (no es necesario el deploy).
- [X] Incluir un **README** detallado.

## Funcionalidades
- **Autenticación y Roles**
  - Sistema de autenticación básico para validar credenciales.
  - Dos roles de usuario: "admin" y "user".
  - Validaciones de formularios (campos no vacíos, longitud mínima de contraseñas).
  - Manejo de roles y permisos mediante un contexto o estado global.
  - Protección de rutas para acceso a creación y edición.

- **Interfaz de Usuario**
  - Diseño atractivo, accesible e intuitivo.
  - Página de inicio de sesión para ingresar credenciales.
  - Página de visualización de información para el usuario "user".
  - Opciones de creación y edición de datos para el usuario "admin".

- **Operaciones CRUD**
  - Uso de una API que soporte operaciones CRUD (POST y PUT).
  - Restricciones de edición y creación para el usuario "user".
  - Permisos completos para el usuario "admin" (excepto DELETE).

## Funcionalidades Adicionales (Opcionales)
- Paginación, filtrado o búsqueda para mejorar la experiencia del usuario.
- [X] Notificaciones para operaciones exitosas o fallidas.
- Autenticación con tokens JWT simulados.
- [X] Estilización utilizando frameworks  Material UI.
- [X] Maquetado responsivo.

## Comunicación con la API
- Realizar solicitudes HTTP adecuadas para obtener, crear y actualizar datos.
- Se recomienda utilizar bibliotecas como **Axios** para facilitar las peticiones.

## API Sugerida
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/)

## Estructura de Carpetas
- Asegúrate de organizar los estilos y componentes de manera reutilizable y clara.

## Instalación y Ejecución
1. Clona este [repositorio](https://github.com/DIOLINK/challenge-eldar.git) en tu máquina local con SSH o HTTPS con los siguientes comandos:

   - #### HTTPS:
      ```shell
      git clone https://github.com/DIOLINK/challenge-eldar.git
      ```

   - #### SSH:
      ```shell
      git clone git@github.com:DIOLINK/challenge-eldar.git
      ```

2. Navega al directorio del proyecto colonado:
    ```shell
   cd challenge-eldar
   ```

3. Instala las dependencies con cualquiera de los siguientes comandos:

   - ### npm
      ```shell
      npm install
      ```

   - ### pnpm
      ```shell
      pnpm install
      ```

4. En la raiz del proyecto encontraras un archivo con el nombre de `template.env` el cual deberas renombra a `.env`.
   
5. Inicia la aplicación en modo de desarrollo:
       
      - ### npm
        ```shell
        npm run dev
        ```

      - ### pnpm
        ```shell
        pnpm dev
        ```