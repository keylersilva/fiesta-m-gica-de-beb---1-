# Fiesta Mágica - Invitación de Cumpleaños

Este proyecto es una aplicación web interactiva diseñada para gestionar las invitaciones y el registro de invitados para el primer cumpleaños de **Ashly Sofia Vanegas Silva**.

## ✨ Características

- **Diseño Personalizado:** Interfaz elegante con tipografía fluida y fondo fotográfico adaptativo.
- **Registro de Invitados:** Formulario para que los invitados confirmen su asistencia, número de acompañantes y datos de contacto.
- **Validación en Tiempo Real:** Generación de códigos únicos de verificación al completar el registro.
- **Panel de Administración:** Sección protegida para gestionar la lista de invitados y configuraciones del evento.
- **Base de Datos en Tiempo Real:** Integración con Firebase Firestore para almacenamiento instantáneo.

## 🚀 Tecnologías

- **Frontend:** React + Vite + TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Motion (Framer Motion)
- **Backend:** Firebase (Authentication & Firestore)
- **Iconos:** Lucide React

## 🛠️ Instalación y Desarrollo

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Correr en modo desarrollo:**
    ```bash
    npm run dev
    ```

3.  **Construir para producción:**
    ```bash
    npm run build
    ```

## 🔐 Guía del Administrador

Para acceder a los datos guardados y gestionar el evento:

1.  Abre la aplicación.
2.  Haz clic en el botón **"ENTRAR"** situado en la esquina superior derecha.
3.  Inicia sesión con tu cuenta de Google autorizada: `untalkeiler@gmail.com`.
4.  Una vez iniciada la sesión, aparecerá la opción **"ADMINISTRAR"** en el menú superior.
5.  Desde el panel podrás:
    - Ver la lista completa de invitados con sus códigos de verificación.
    - Ver el total de personas confirmadas.
    - Eliminar registros si es necesario.

## 📁 Estructura del Proyecto

- `src/App.tsx`: Lógica principal, navegación y componentes del dashboard.
- `src/index.css`: Estilos globales y personalización de la imagen de fondo.
- `firestore.rules`: Reglas de seguridad para proteger los datos de los invitados y el acceso administrativo.
- `firebase-applet-config.json`: Configuración de conexión con el proyecto de Firebase.

---
Hecho con amor para un día especial ✨
