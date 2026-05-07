# Fiesta Mágica - Gestión de Invitaciones

Este proyecto es una aplicación web interactiva para la gestión de invitaciones al cumpleaños de Ashly Sofia Vanegas Silva. La aplicación permite a los usuarios crear, ver y administrar invitaciones de manera sencilla y eficiente.

## Estructura del Proyecto

- **public/index.html**: Página principal de la aplicación que contiene la estructura básica de HTML y enlaza los archivos de estilo y scripts necesarios.
- **src/main.tsx**: Punto de entrada de la aplicación React que renderiza el componente principal y configura el enrutamiento.
- **src/App.tsx**: Componente principal de la aplicación que configura las rutas y integra los componentes principales.
- **src/index.css**: Estilos globales de la aplicación.
- **src/components**: Contiene los componentes reutilizables de la aplicación:
  - **Header.tsx**: Muestra el encabezado de la aplicación.
  - **DashboardCard.tsx**: Representa una tarjeta en el panel de control.
  - **InviteList.tsx**: Muestra la lista de invitaciones.
  - **InviteForm.tsx**: Permite a los usuarios crear nuevas invitaciones.
- **src/pages**: Contiene las páginas de la aplicación:
  - **Home.tsx**: Página de inicio de la aplicación.
  - **Admin.tsx**: Permite la gestión de invitaciones y configuraciones administrativas.
- **src/hooks/useFirestoreListener.ts**: Hook personalizado que escucha cambios en Firestore y actualiza el estado de la aplicación.
- **src/services/firebase.ts**: Configuración y funciones relacionadas con Firebase.
- **src/store/index.ts**: Configuración del estado global de la aplicación.
- **src/utils/helpers.ts**: Funciones utilitarias para diferentes partes de la aplicación.
- **src/types/index.ts**: Tipos e interfaces utilizados en la aplicación.
- **functions/index.ts**: Funciones de backend para la aplicación.
- **.firebaserc**: Configuración del proyecto de Firebase.
- **firebase.json**: Configuración de Firebase para el despliegue.
- **firebase-applet-config.json**: Configuración de la aplicación Firebase.
- **.env.local**: Variables de entorno locales.
- **package.json**: Configuración del proyecto para npm.
- **tsconfig.json**: Configuración de TypeScript.
- **vite.config.ts**: Configuración para Vite.

## Instrucciones de Despliegue

1. Asegúrate de que tu proyecto esté funcionando localmente.
2. Configura Firebase Hosting en tu proyecto si no lo has hecho. Puedes hacerlo desde la consola de Firebase.
3. Ejecuta el comando `firebase deploy` en la terminal desde la raíz de tu proyecto. Esto subirá tu aplicación a Firebase Hosting.
4. Accede a la URL proporcionada por Firebase para ver tu aplicación en línea.