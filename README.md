# 🚀 API REST CRUD - TypeScript + Express

![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)
![Express](https://img.shields.io/badge/Express-5.1.0-lightgrey?logo=express)
![Node](https://img.shields.io/badge/Node.js-Latest-green?logo=node.js)
![License](https://img.shields.io/badge/License-ISC-yellow)

> **Nota**: Esta es la **versión 1.0** del proyecto. En próximas versiones se integrará una base de datos (PostgreSQL o MongoDB).

## 📋 Descripción

API REST desarrollada con **TypeScript** y **Express** que implementa operaciones CRUD (Create, Read, Update, Delete) para la gestión de usuarios. Actualmente, los datos se almacenan en memoria durante la ejecución del servidor.

### ✨ Características

- ✅ CRUD completo de usuarios
- ✅ Tipado fuerte con TypeScript
- ✅ Arquitectura modular (MVC)
- ✅ Manejo de errores y validaciones
- ✅ Hot reload en desarrollo
- ✅ Generación de IDs únicos con UUID
- 🔜 Integración con base de datos (próxima versión)

## 🛠️ Tecnologías Utilizadas

- **[TypeScript](https://www.typescriptlang.org/)** - Superset de JavaScript con tipado estático
- **[Express](https://expressjs.com/)** - Framework web minimalista para Node.js
- **[Node.js](https://nodejs.org/)** - Entorno de ejecución para JavaScript
- **[pnpm](https://pnpm.io/)** - Gestor de paquetes rápido y eficiente
- **[tsx](https://github.com/privatenumber/tsx)** - TypeScript executor con hot reload

## 📁 Estructura del Proyecto

```
sevidor_prueba/
├── src/
│   ├── index.ts              # Punto de entrada de la aplicación
│   ├── controllers/
│   │   └── userController.ts # Lógica de negocio de usuarios
│   ├── models/
│   │   └── User.ts           # Modelo/Interfaz de Usuario
│   └── routes/
│       └── userRoutes.ts     # Definición de rutas
├── package.json
├── tsconfig.json
├── pnpm-lock.yaml
└── README.md
```

## 🚦 Instalación y Uso

### Prerrequisitos

- Node.js (v18 o superior)
- pnpm (instalado globalmente)

```bash
npm install -g pnpm
```

### Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/XxIvanstromxX/API-CRUD-TypeScript.git
cd API-CRUD-TypeScript
```

2. **Instala las dependencias**

```bash
pnpm install
```

### Ejecución

#### Modo Desarrollo (con hot reload)

```bash
pnpm dev
```

El servidor se iniciará en `http://localhost:3000`

#### Modo Producción

```bash
# Compilar el proyecto
pnpm build

# Ejecutar el servidor
pnpm start
```

## 📡 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/users` | Obtener todos los usuarios |
| `POST` | `/users` | Crear un nuevo usuario |
| `PATCH` | `/users/:id` | Actualizar un usuario existente |
| `DELETE` | `/users/:id` | Eliminar un usuario |

### Ejemplos de Uso

#### 📖 Obtener todos los usuarios
```bash
curl http://localhost:3000/api/users
```

**Respuesta:**
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Juan Pérez",
    "email": "juan@example.com"
  }
]
```

#### ➕ Crear un nuevo usuario
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "María García",
    "email": "maria@example.com",
    "password": "password123"
  }'
```

**Respuesta:**
```json
{
  "message": "Usuario creado con exito",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "name": "María García",
    "email": "maria@example.com",
    "password": "password123"
  }
}
```

#### ✏️ Actualizar un usuario
```bash
curl -X PATCH http://localhost:3000/api/users/550e8400-e29b-41d4-a716-446655440001 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "María González",
    "email": "maria.gonzalez@example.com"
  }'
```

**Respuesta:**
```json
{
  "message": "Usuario modificado",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "name": "María González",
    "email": "maria.gonzalez@example.com",
    "password": "password123"
  }
}
```

#### ❌ Eliminar un usuario
```bash
curl -X DELETE http://localhost:3000/api/users/550e8400-e29b-41d4-a716-446655440001
```

**Respuesta:**
```json
{
  "message": "Usuario eliminado con exito"
}
```

## 🔄 Modelo de Datos

### User

```typescript
interface User {
  id: UUID;        // Identificador único generado automáticamente
  name: string;    // Nombre del usuario
  email: string;   // Correo electrónico
  password?: string; // Contraseña (opcional en respuestas)
}
```

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `pnpm dev` | Inicia el servidor en modo desarrollo con hot reload |
| `pnpm build` | Compila el proyecto TypeScript a JavaScript |
| `pnpm start` | Ejecuta el servidor compilado en producción |

## 🗺️ Roadmap

### Versión 1.0 (Actual) ✅
- [x] CRUD básico de usuarios
- [x] Almacenamiento en memoria
- [x] Arquitectura MVC
- [x] Validaciones básicas

### Versión 2.0 (Próximamente) 🚧
- [ ] Integración con base de datos (PostgreSQL o MongoDB)
- [ ] Autenticación y autorización (JWT)
- [ ] Encriptación de contraseñas
- [ ] Variables de entorno
- [ ] Logging avanzado
- [ ] Tests unitarios y de integración
- [ ] Documentación con Swagger/OpenAPI

## ⚠️ Limitaciones Actuales

- Los datos se almacenan en memoria y se pierden al reiniciar el servidor
- No hay persistencia de datos
- No hay autenticación ni autorización
- Las contraseñas se almacenan en texto plano

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👤 Autor

**Iván Martínez** - [@XxIvanstromxX](https://github.com/XxIvanstromxX)

---

⭐ Si este proyecto te ha sido útil, no olvides darle una estrella en GitHub
