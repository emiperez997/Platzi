# Notas

## Recursos
- gitignore.io -> Nos recomiendan una configuracion del archivo .gitignore

## Archivos
- .gitignore -> Ignorar archivos para git
- .eslintrc.json -> Configuracion para el codigo
- .editorconfig -> Configuracion para el editor

## Dependencias
- Development (-D)
  - nodemon
  - eslint
  - eslint-config-prettier
  - eslint-plugin-prettier
  - prettier
  - faker@5.5.3 
- Principales
  - express

## CRUD
- GET
  - Convenciones:

      api.example.com/tasks/{id}/
      api.example.com/products/{id}/
      api.example.com/users/{id}/tasks
  
  - Query Params

      api.example.com/products?page=1
      api.example.com/products?limit=10&offset=0
      api.example.com/products?region=USA&brand=XYZ
      
- POST
- PUT
  - Actualizar datos
- PATCH
  - No pide todos los datos para actualizar

- Status Code
  - 404: Error Not Found
  - 500: Server error
