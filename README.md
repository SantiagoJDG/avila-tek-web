# Avila Tek Frontend asssessment

Vercel URL : https://avila-tek-web.vercel.app/

Para correr el proyecto:

```bash
npm install || pnpm install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

[http://localhost:3000](http://localhost:3000) .

## Este proyecto está desarrollado utilizando Next.js, TypeScript y React. La estructura del proyecto ha sido diseñada con una clara filosofía de atomicidad y reutilización de componentes para garantizar un código limpio, escalable y fácil de mantener. 

```
app/

La carpeta app/ se utiliza para gestionar la estructura de nuestro landing page.
Aquí puedes colocar el código relacionado con la configuración de la aplicación,
rutas principales o gestión de estado global, dependiendo de tus necesidades.
En nuestro caso, ordenamos los componentes segun los queremosver renderizado

```
```
components/

La carpeta components/ contiene todos los componentes reutilizables de la aplicación.
Está subdividida en dos carpetas principales: home y shared.
```
```
components/home/
Aquí se encuentran los componentes específicos para nuestra landing.
Estos componentes son independientes y están diseñados para representar secciones individuales.

components/shared
Esta carpeta contiene componentes genéricos o comunes que se utilizan a través de toda la aplicación.
Lo suficientemente abstractas para que se puedan inyectar acorde a su contexto
```

## Decisiones Arquitectónicas

## Atomicidad y Reutilización de Componentes

La estructura de componentes se ha diseñado siguiendo el principio de atomicidad, es decir, dividiendo la interfaz de usuario en componentes pequeños y reutilizables. Esto permite una gestión eficiente de la interfaz y facilita el mantenimiento y las actualizaciones.

## Optimización para Reutilización

Cada componente ha sido diseñado para ser autónomo y reutilizable. Esta estrategia no solo mejora la mantenibilidad del código, sino que también asegura que la interfaz de usuario mantenga una consistencia visual en toda la aplicación.
