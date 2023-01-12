# Notas

## Programas para instalar
- Docker: sudo pacman -S docker
- Docker-Compose: sudo pacman -S docker-compose

## Iniciar un servidor en docker
- Necesitamos un archivo docker-compose.yml:

    version: '3.3'
    
    services:
      postgres: # Este nombre puede ser cualquiera 
        image: postgres:13
        environment:
          - POSTGRES_DB=my_store
          - POSTGRES_USER=emi
          - POSTGRES_PASSWORD=admin
        ports:
          - 5432:5432
	volumes:
	  - ./postgres_data:/var/lib/postgresql/data 

- Luego utilizamos docker-compose para ejecutarlo: 

      docker-compose up -d <nombre_servicio>

- Para detenerlo usamos:

      docker-compose down

- Para ver el estado utilizamos:

      docker-compose ps

- Para iniciar una consola de postgres

      docker-compose exec <nombre_servicio> bash

- Para ingresar al administrador de postgress

      psql -h localhost -d <nombre_db> -U <nombre-usuario>

- Salir del contenedor
      exit

## Postgress commands
- Chequear las dbs

      # \d+

- Salir de la db

      # \q

## PgAdmin (Interfaz grafica)
- Se incluye el servicio en el docker-compose.yml
 
     pgadmin:
        image: dpage/pgadmin4
        environment:
          - PGADMIN_DEFAULT_EMAIL=admin@gmail.com
          - PGADMIN_DEFAULT_PASSWORD=admin
        ports:
          - 5050:80

- Para ingresar a la interfaz grafica (localhost:<puerto_servicio>)

    docker-compose up -d <nombre_servicio>

- Luego de esto, debo crear un server para conectar mi db:
  - Object
  - Register -> Server
  - Name -> Puede ser cualquiera
  - Pestaña Connection
    - Host -> <nombre_servicio>
    - Port -> <puerto_servicio>
    - User -> <usuario_servicio>
    - Password -> <password_servicio>
