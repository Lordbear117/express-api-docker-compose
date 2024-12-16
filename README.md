# API Express con PostgreSQL usando Docker Compose

Este repositorio contiene una API sencilla desarrollada con **Express.js** y conectada a una base de datos **PostgreSQL**, todo gestionado a través de **Docker Compose**. El proyecto está diseñado para facilitar la creación y el despliegue de una aplicación backend con base de datos, usando contenedores Docker.

## 🚀 Requisitos

- **Docker** y **Docker Compose** instalados en tu máquina
- Conexión a internet para descargar las imágenes de Docker necesarias

## 📂 Estructura del Proyecto

```
express-postgresql-docker/
│
├── backend/             # Código de la API Express
├── docker-compose.yml   # Configuración de servicios
├── Dockerfile           # Construcción de imagen de la API
└── init.sql             # Script de inicialización de base de datos
```

## 🔧 Instalación y Uso

### 1. Clonar el Repositorio

```bash
git clone https://github.com/Lordbear117/express-api-docker-compose.git
cd express-api-docker-compose
```

### 2. Construir y Levantar los Contenedores

```bash
docker-compose up --build
```

Este comando construirá las imágenes y levantará los servicios:

- API Express: Puerto `3000`
- PostgreSQL: Puerto `5432`

### 3. Acceder a la API

Visita en tu navegador:

```
http://localhost:3000
```

### 4. Acceder a la Base de Datos

```bash
psql -h localhost -U myuser -d mydatabase
```

### 5. Detener los Contenedores

```bash
docker-compose down
```

## 🛠 Detalles Técnicos

### Servicios de Docker Compose

- **Backend**: Servidor Express
- **Base de Datos**: PostgreSQL con almacenamiento persistente

### Inicialización de Base de Datos

Script `init.sql`:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
```

## 🤝 Contribuciones

1. Haz un fork del proyecto
2. Crea tu rama de características (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Añadir nueva característica'`)
5. Sube tu rama (`git push origin feature/nueva-caracteristica`)
6. Abre un Pull Request

## 📄 Licencia

Proyecto bajo **Licencia MIT**. Consulta el archivo `LICENSE` para más detalles.

## 📧 Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme.

---

**Desarrollado con ❤️ usando Docker, Express y PostgreSQL**
