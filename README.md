# Backend - API de Planes para Mascotas

Este es el backend de la aplicación de planes para mascotas, construido con Node.js, Express, TypeScript y MongoDB.

## 🚀 Tecnologías Utilizadas

- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- dotenv para variables de entorno

## 📁 Estructura del Proyecto

```
backend/
├── src/
│   ├── controllers/
│   │   └── planes.controller.ts    # Controladores para los planes
│   ├── models/
│   │   └── Plan.ts                 # Modelo de datos para planes
│   ├── routes/
│   │   └── planes.routes.ts        # Rutas de la API
│   ├── database.ts                 # Configuración de MongoDB
│   └── server.ts                   # Punto de entrada principal
├── .env                           # Variables de entorno
├── package.json
└── tsconfig.json
```

## 🛠 Instalación

1. Clona el repositorio
2. Navega al directorio del backend:
   ```bash
   cd backend
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Crea un archivo `.env` con las siguientes variables:
   ```env
   MONGO_URI=tu_uri_de_mongodb
   PORT=3000
   ```

## 🚀 Uso

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

## 📡 Endpoints de la API

### Planes

| Método | Ruta                     | Descripción                       |
| ------ | ------------------------ | --------------------------------- |
| GET    | `/api/planes`            | Obtiene todos los planes          |
| GET    | `/api/planes/:id`        | Obtiene un plan por ID            |
| GET    | `/api/planes/tipo/:tipo` | Obtiene planes por tipo (dog/cat) |
| POST   | `/api/planes`            | Crea un nuevo plan                |
| PUT    | `/api/planes/:id`        | Actualiza un plan existente       |
| DELETE | `/api/planes/:id`        | Elimina un plan                   |

### Estructura del Plan

```typescript
{
  type: "dog" | "cat",       // Tipo de mascota
  name: string,              // Nombre del plan
  benefits: string[],        // Lista de beneficios
  price: number             // Precio del plan
}
```

### Ejemplo de Solicitud POST

```json
{
  "type": "dog",
  "name": "Plan Básico Canino",
  "benefits": ["Consulta veterinaria", "Vacunación anual", "Desparasitación"],
  "price": 50000
}
```

## ⚙️ Validaciones

- **type**: Solo acepta "dog" o "cat"
- **name**: Mínimo 3 caracteres
- **benefits**: Debe incluir al menos un beneficio
- **price**: Debe ser mayor o igual a 1000

## 🔒 Variables de Entorno

- `MONGO_URI`: URI de conexión a MongoDB
- `PORT`: Puerto en el que se ejecutará el servidor (por defecto: 3000)

## 🧪 Manejo de Errores

La API incluye manejo de errores para:

- Validación de datos
- Errores de base de datos
- Recursos no encontrados
- Errores del servidor

## 📝 Notas Adicionales

- La API utiliza TypeScript para un mejor tipado y mantenibilidad
- Implementa arquitectura MVC (Model-View-Controller)
- Incluye validaciones robustas usando Mongoose
- Sigue las mejores prácticas de REST API
