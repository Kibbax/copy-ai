# CopyCraft Pro - Plataforma Revolucionaria de Copywriting con Inteligencia Artificial

1. [Desarrolladores](#desarrolladores)
2. [Tecnologías y Herramientas Destacadas](#tecnologías-y-herramientas-destacadas)
3. [Objetivo del Proyecto](#objetivo-del-proyecto)
4. [Documentación de Diseño UX/UI](#documentación-de-diseño-uxui)
   - [Concepto del Diseño](#concepto-del-diseño)
5. [Funcionalidades Principales](#funcionalidades-principales)
   - [Briefing de Contenido](#briefing-de-contenido)
   - [Generación Automática de Copias](#generación-automática-de-copias)
   - [Variedad de Formatos](#variedad-de-formatos)
   - [Personalización](#personalización)
   - [Pruebas A/B](#pruebas-ab)
   - [Analíticas y Seguimiento de Rendimiento](#analíticas-y-seguimiento-de-rendimiento)
   - [Descarga de Archivos PDF](#descarga-de-archivos-pdf)
6. [Documentación de Arquitectura e Infraestructura](#documentación-de-arquitectura-e-infraestructura)
   - [Arquitectura de la Aplicación](#arquitectura-de-la-aplicación)
   - [Justificación de Tecnologías](#justificación-de-tecnologías)
   - [Seguridad](#seguridad)
   - [Conclusión](#conclusión)
7. [Levantar el Proyecto Localmente](#levantar-el-proyecto-localmente)

## Desarrolladores
- Ezequiel Cabello - [GitHub](https://github.com/Kibbax) | [LinkedIn](https://www.linkedin.com/in/ezequielcabello/)
- Macarena Álvarez Castillo - [GitHub](https://github.com/MacaAC) | [LinkedIn](https://www.linkedin.com/in/maria-macarena-álvarez-castillo-56445a176/)
- Rodrigo Peralta Montero - [GitHub](https://github.com/Rodrigopm98) | [LinkedIn](https://www.linkedin.com/in/rodrigoperaltam/)

## Tecnologías y Herramientas Destacadas
- **Frontend:** Next.js, React 18, Tailwind CSS
- **Backend:** Node.js, Express, Prisma, PostgreSQL
- **Autenticación:** NextAuth
- **Diseño UX/UI:** Figma
- **Seguridad:** JWT, HTTPS, medidas anti-DDoS

## Objetivo del Proyecto
CopyCraft Pro busca simplificar y acelerar el proceso de creación de contenido para equipos de marketing, utilizando tecnologías avanzadas como la inteligencia artificial.

## Documentación de Diseño UX/UI

### Concepto del Diseño
CopyCraft Pro se enfoca en proporcionar a profesionales de marketing una experiencia de usuario atractiva y efectiva. Con un diseño intuitivo y funciones optimizadas, la plataforma busca inspirar creatividad y eficiencia en la creación de contenido cautivador.

## Funcionalidades Principales

### Briefing de Contenido
Proporciona una descripción detallada del proyecto de marketing, objetivos, audiencia, voz de la marca y palabras clave.

### Generación Automática de Copias
Utiliza algoritmos avanzados basados en inteligencia artificial para generar automáticamente copias para materiales de marketing, como titulares, descripciones de productos y publicidad.

### Variedad de Formatos
Genera contenido adaptado a diferentes formatos y plataformas, como redes sociales, boletines de correo electrónico, blogs y campañas publicitarias.

### Personalización
Permite editar y ajustar las copias generadas para que se alineen con la voz y el estilo único de la marca.

### Pruebas A/B
Facilita la ejecución de pruebas A/B con diferentes variaciones de copias para determinar cuál resuena mejor con la audiencia y tiene tasas de conversión más altas.

### Analíticas y Seguimiento de Rendimiento
Mide el rendimiento del contenido directamente en la aplicación, rastreando la participación, tasas de clics y métricas de conversión para optimizar las campañas de marketing.

### Descarga de Archivos PDF
Permite a los usuarios descargar la copia generada en formato PDF, brindando una forma conveniente de almacenar y compartir el contenido generado por la aplicación.

## Documentación de Arquitectura e Infraestructura

### Arquitectura de la Aplicación
- **Frontend:** React.js, Next.js, Tailwind CSS para una experiencia de usuario atractiva.
- **Backend:** Node.js con Express, Prisma y PostgreSQL como base de datos NoSQL escalable.

### Justificación de Tecnologías
La elección de Next.js para el frontend se debe a su rendimiento optimizado y su capacidad de renderizado del lado del servidor, lo que mejora la experiencia del usuario. React 18 proporciona la flexibilidad necesaria para construir interfaces interactivas y dinámicas.

En el backend, Node.js y Express ofrecen una base sólida para construir una aplicación eficiente y escalable. La decisión de utilizar Prisma y PostgreSQL como base de datos se basa en la necesidad de una solución robusta y escalable, permitiendo un manejo eficiente de los datos.

NextAuth proporciona una autenticación segura y fácil de implementar, mientras que Figma se utiliza para el diseño UX/UI, facilitando la creación de interfaces intuitivas y visualmente atractivas.

### Seguridad
Implementaremos las siguientes medidas de seguridad:
- Autenticación de usuarios con tokens JWT en Auth0.
- Validación de datos de entrada para prevenir ataques de inyección de SQL.
- Protección contra ataques de denegación de servicio (DDoS) mediante límites de solicitudes.
- Seguridad en la comunicación mediante HTTPS.

Para garantizar la integridad de los datos, implementaremos un plan de recuperación ante de los mismos que incluye:
- Sistema de borrado lógico tanto de los usuarios como de sus consultas, para que el mismo pueda recuperar sus datos hasta la fecha de caducidad en donde se borrarán de forma permanente.

### Conclusión
La arquitectura de tres niveles de la aplicación garantiza un diseño escalable y seguro. La separación de responsabilidades entre el frontend, el servidor y la base de datos permite un desarrollo eficiente y un mantenimiento sencillo. Además, la capacidad de consultar una API de terceros y registrar historiales de solicitudes enriquece la funcionalidad de la aplicación.

## Levantar el Proyecto Localmente

1. **Clona el Repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/copycraft-pro.git
   ```

2.

 **Instala las Dependencias:**
   ```bash
   cd copycraft-pro
   npm install
   ```

3. **Configura las Variables de Entorno:**
   - Copia el archivo `.env.example` y renómbralo a `.env`.
   - Completa las variables de entorno necesarias.

4. **Inicia la Aplicación:**
   ```bash
   npm run dev
   ```

5. **Accede a la Aplicación:**
   - Abre tu navegador y visita [http://localhost:3000](http://localhost:3000).

---

¡Gracias por elegir CopyCraft Pro! Esperamos que disfrutes de una experiencia de usuario excepcional y productiva. Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nuestro equipo de desarrollo. ¡Feliz escritura!
