
## README - GESTION DE USUARIOS y CONTACTOS APP

En este repositorio, encontrarás una solución para la aplicación web de Gestión de Usuarios y Contactos desarrollada utilizando React para el front-end y C# con el framework .NET. La aplicación utiliza Redux para el manejo del estado y SQL Server como base de datos.

## Instrucciones de configuración y ejecución:
Clona este repositorio en tu máquina local.

Asegúrate de tener Node.js, npm (Node Package Manager) y .NET 6 instalados en tu sistema.

Configuración del Back-End:

Abre la carpeta del Back-End (ubicada en "/backend").
Restaura los paquetes NuGet utilizando el comando: dotnet restore
Configura la conexión a la base de datos SQL Server en el archivo "appsettings.json".
Ejecuta las migraciones para crear la base de datos utilizando el comando: dotnet ef database update
Inicia el servidor Back-End con el comando: dotnet run
Configuración del Front-End:

Abre la carpeta del Front-End (ubicada en "/frontend").
Instala las dependencias con el comando: npm install
Inicia la aplicación con el comando: npm start
Ahora podrás acceder a la aplicación web desde tu navegador en la dirección: http://localhost:3000/

## Opciones técnicas y arquitectónicas utilizadas:
React y Redux: Se eligió utilizar React y Redux debido a su popularidad y eficiencia en el manejo del estado de la aplicación y la reactividad en la interfaz de usuario.

Back-End con C# y .NET 6: Se seleccionó C# como lenguaje de programación para el Back-End junto con .NET 6 debido a su robustez, seguridad y capacidad para construir aplicaciones web escalables.

Base de datos SQL Server: Se optó por SQL Server como base de datos para garantizar un almacenamiento confiable y consistente de los usuarios y contactos.

Librerías Open Source: Todas las librerías utilizadas en el desarrollo de la aplicación son de código abierto y con licencias compatibles.

Mejoras y posibles expansiones:
Seguridad: Para una versión más completa, se podría implementar autenticación y autorización para proteger las funcionalidades y los datos de los usuarios.

Tests Unitarios: Agregar pruebas unitarias para garantizar la calidad y robustez del código.

Estilos y Diseño: Mejorar el diseño y la interfaz de usuario para brindar una experiencia más agradable al usuario.

Internacionalización: Implementar soporte para diferentes idiomas y localizaciones.

Notificaciones: Agregar notificaciones y mensajes de error más detallados para mejorar la experiencia del usuario.

## Consideraciones finales:
Si se me asignara más tiempo, dedicaría esfuerzos para asegurar una mayor cobertura de pruebas unitarias, implementar seguridad y realizar mejoras adicionales en el diseño y la experiencia de usuario. También realizaría una optimización de la aplicación para mejorar el rendimiento y la eficiencia del código.

Gracias por revisar esta solución técnica. Si tienes alguna pregunta o inquietud, no dudes en contactarme. ¡Espero que encuentres útil esta implementación!

