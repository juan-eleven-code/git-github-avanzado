console.log("Hola Mundo");

/**
 * Prefijos de ramas
 *
 * feature/nombre-de-la-funcionalidad
 * bugfix/nombre-del-arreglo
 * release/lanzamiento-de-version
 *
 */

/*
 * Prefijos de Commits
 * feat: Una nueva característica para el usuario.
 * (feature / funcionalidad)
 *
 * fix: Arregla un bug que afecta al usuario.
 * (bugfix / arreglo de fallo)
 *
 * perf: Cambios que mejoran el rendimiento del sitio.
 * (performance / rendimiento)
 *
 * chore: Cambios que afectan a la configuración del proyecto como tal.
 * (chore / faena)
 *
 * build: Cambios en el sistema de build, tareas de despliegue o instalación.
 * (build / "compilacion")
 *
 * ci: Cambios en la integración continua.
 * (ci / continuous integration / integracion continua)
 *
 * docs: Cambios en la documentación.
 * (docs / documentacion)
 *
 * refactor: Refactorización del código como cambios de nombre de variables o funciones.
 * (refactor / rehacer / mejorar o cambios de un código a otro mejor)
 *
 * style: Cambios de formato, tabulaciones, espacios o puntos y coma, etc; no afectan al usuario.
 * (style / estilos)
 *
 * test: Añade tests o refactoriza uno existente.
 * (test / pruebas de código)
 */

/**
 * Reglas buenos mensajes
 * 1. Siempre en imperativo -> fixed something. Fix something
 * 2. Siempre incluye prefijo feat, style, chore, etc.
 * 3. Siempre incluye el entorno o scope (entre paréntesis)
 * 4. Un mensaje descriptivo de los cambios.
 */

// Ejemplos de mensajes (en inglés y en español)
// Te recuerdo que el inglés es el idioma universal de la programación y el que debes usar para tus mensajes de commit

/**
    Español

    feat(auth): agregar funcionalidad de registro de usuarios
    feat(profile): implementar edición de biografía de usuario

    fix(auth): resolver problema con el restablecimiento de contraseña
    fix(ui): corregir alineación de botones en la página principal

    perf(api): optimizar consultas de búsqueda de usuarios
    perf(images): comprimir imágenes para una carga más rápida

    chore(dependencies): actualizar todos los paquetes npm a las últimas versiones
    chore(config): agregar configuración de Prettier para formateo de código

    build(ci): configurar Webpack para compilaciones de producción
    build(scripts): agregar script para migraciones de base de datos

    ci(pipeline): corregir pipeline de CI para ramas de características
    ci(deployment): agregar mecanismo de reversión al flujo de trabajo CI/CD

    docs(readme): actualizar instrucciones de configuración del proyecto
    docs(api): agregar ejemplos de uso para los endpoints de la API

    refactor(auth): simplificar middleware de autenticación
    refactor(ui): reestructurar componentes para mejor reutilización

    style(css): corregir espaciado inconsistente en hojas de estilo
    style(js): eliminar variables no utilizadas en archivos JavaScript

    test(auth): agregar pruebas de integración para el flujo de inicio de sesión
    test(api): refactorizar pruebas para usar datos simulados

    feat(dashboard): agregar widget de análisis
    feat(settings): implementar alternancia de modo oscuro

    fix(dashboard): corregir renderizado incorrecto de datos en gráficos
    fix(settings): resolver problema al guardar preferencias de usuario

    perf(dashboard): mejorar tiempo de carga para grandes conjuntos de datos
    perf(settings): optimizar renderizado de la página de configuración

    chore(lint): agregar reglas de linting para estilo de código consistente
    chore(env): actualizar variables de entorno para staging

    build(docker): agregar Dockerfile de múltiples etapas
    build(deploy): configurar script de despliegue para AWS

    ci(testing): agregar pruebas automatizadas al pipeline de CI
    ci(build): corregir paso de compilación en el flujo de trabajo de CI

    docs(contributing): agregar guía de contribución
    docs(changelog): actualizar changelog para la última versión

    refactor(routes): limpiar definiciones de rutas
    refactor(services): dividir servicios en módulos más pequeños

    style(html): corregir la indentación en archivos HTML
    style(js): formatear código con Prettier

    test(routes): agregar pruebas unitarias para manejadores de rutas
    test(services): mejorar cobertura de pruebas para la capa de servicios
*/

/**
    Inglés
    
    feat(auth): add user registration functionality
    feat(profile): implement user bio editing

    fix(auth): resolve password reset issue
    fix(ui): fix button alignment on the homepage

    perf(api): optimize user search queries
    perf(images): compress images for faster loading

    chore(dependencies): update all npm packages to latest versions
    chore(config): add Prettier configuration for code formatting

    build(ci): configure Webpack for production builds
    build(scripts): add script for database migrations

    ci(pipeline): fix CI pipeline for feature branches
    ci(deployment): add rollback mechanism to CI/CD workflow

    docs(readme): update project setup instructions
    docs(api): add usage examples for API endpoints

    refactor(auth): simplify authentication middleware
    refactor(ui): restructure components for better reusability

    style(css): fix inconsistent spacing in stylesheets
    style(js): remove unused variables in JavaScript files

    test(auth): add integration tests for login flow
    test(api): refactor tests to use mock data

    feat(dashboard): add analytics widget
    feat(settings): implement dark mode toggle

    fix(dashboard): fix incorrect data rendering in charts
    fix(settings): resolve issue with saving user preferences

    perf(dashboard): improve loading time for large datasets
    perf(settings): optimize settings page rendering

    chore(lint): add linting rules for consistent code style
    chore(env): update environment variables for staging

    build(docker): add multi-stage Dockerfile
    build(deploy): configure deployment script for AWS

    ci(testing): add automated tests to CI pipeline
    ci(build): fix build step in CI workflow

    docs(contributing): add contributing guidelines
    docs(changelog): update changelog for latest release

    refactor(routes): clean up route definitions
    refactor(services): split services into smaller modules

    style(html): fix indentation in HTML files
    style(js): format code with Prettier

    test(routes): add unit tests for route handlers
    test(services): improve test coverage for service layer
 */
