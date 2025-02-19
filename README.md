# VenApp Test Automation

## Descripción
Este proyecto de automatización de pruebas utiliza Playwright para verificar el funcionamiento de la aplicación VenApp. Incluye pruebas para el inicio de sesión, búsqueda de productos y validación del carrito de compras.


## Requisitos
- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación
1. Clona el repositorio:
   git clone https://github.com/BAP711/Venapp.git
   cd venapp


2. Instala las dependencias:
    npm install

Ejecución de Pruebas

1. Ejecuta las pruebas:

## Ejecución de Pruebas
Para ejecutar todas las pruebas:
    npm test

Para ejecutar una prueba específica, puedes especificar el nombre del archivo de prueba:
    npx playwright test path/to/your/testfile.spec.ts

## Generación de Reportes
Para generar un informe de pruebas de rendimiento (utilizando Allure):
    npx playwright test --allure-results-dir results

Para visualizar el informe Allure, ejecuta el siguiente comando:
    allure serve results

## Configuración del Proyecto
La configuración principal del proyecto se encuentra en playwright.config.ts. Aquí puedes ajustar las opciones de los navegadores, el número de hilos, el tiempo de espera, etc.