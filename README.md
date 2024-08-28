
# Happy Travel :airplane:

## Índice

- [Proyecto 📝](#proyecto-)
    - [Requisitos previos](#requisitos-previos-)
- [Diagramas](#diagrama-)
    - [Diagrama de flujo](#diagrama-de-flujo-)
    - [Diagrama de datos](#diagrama-de-datos-)
- [Instalación 🛠️](#installation-)
    - [Requerimientos](#requerimientos-)
- [Estructura del proyecto](#estructura-del-proyecto-)
- [Tecnologías](#tecnologias-)
- [Uso](#uso-)
- [Contribución 🤝](#contribution-)
- [Coders👩‍💻](#coders-)
- [Demo](#demo-)


## Proyecto 

Desarrollo de una aplicación de viajes en la que cada usuario puede ver, añadir, editar y eliminar destinos a los que quiere ir, además de ver los destinos de otros usuarios. 

La aplicación permite a los usuarios hacer login, y es a través de esta autenticación que tienen acceso a editar y elimiinar sus destinos creados. 

En el proyecto se ha creado tanto la parte del Front on React js con Tailwind para el CSS partiendo de prototipos dados por el cliente, como toda la parte del Back con Java y SpringBoot, y PostgreSQL.


### Requisitos previos

**Funcionalidades**
- Poder ver todos los destinos
- Formulario de registro
- Formulario de acceso con e-mail y contraseña
- Al acceder, el usuario autenticado ve los botones de editar y eliminar en sus destinos
- Los usuarios regostrados pueden ver el detalle de cada destino
- Todas als acciones del usuario con CRUD o registro/acceso tienen alertas 
- Todos los formularios tienen validación y control de errores
- Cambio de iconos en navbar cuando el usuario accese a la app
- Buscador funcional para buscar por nombre de destino o ubicación
- Poder crear destinos 
- Poder editar destinos 


## Diagramas

### Diagrama de flujo

[Ver diagrama de flujo]()

### Diagrama de datos

Se ha normalizado a segunda forma las tablas de la base de datos, resultando en dos tablas: una de destinos y una de usuarios. 

[Ver diagrama de datos](https://drive.google.com/file/d/1XwmNrD5dF5y19a_OfLL5ZvE6qf-GG4yk/view?usp=sharing)



## Instalación 🛠️

### Requerimientos

- [Node.js](https://nodejs.org/en)
- [VSC](https://www.w3schools.com/java/java_intro.asp) con [extensión Java Pack VSC](vscjava.vscode-java-pack), [IntelliJ](https://www.jetbrains.com/es-es/idea/)  or tu IDE de preferencia
- Base de datos


1. Clona los repositorios:
```bash
Front:
 git clone https://github.com/LauraGDev/happy-travel-front

Back:
 git clone https://github.com/flaviferri/HappyTravel-BackEnd

```

2. Haz npm install en el repo del front

3. Crea tu base de datos y conectála al repo del back:
```
pon el link de acceso, tu usuario y contraseña de pgAdmin o de tu BBDD en el archivo application.resources

```



 

## Estructura del proyecto

Como proyecto Full-Stack, la estructura se divide en Front y en Back. 

Estructura del front:

El front se ha realizado con React js, resultando en una estructura de componentes.  

La estructura final del front es la siguiente:

```plaintext
/
├── happy-travel-front
│   ├── src/
│   │    ├── components
│   │    │     ├── buttons
│   │    │     │      ├── Button
│   │    │     │      ├── DeleteIcon
│   │    │     │      └── EditIcon
│   │    │     ├── header
│   │    │     │      ├── navbar
│   │    │     │      │     └── Navbar
│   │    │     │      ├── Search
│   │    │     │      │       ├── Result
│   │    │     │      │       ├── ResultsList
│   │    │     │      │       └── SearchBar
│   │    │     │      └── Header
│   │    │     ├── home
│   │    │     │      ├── CardsContainer
│   │    │     │      ├── DestinationCard
│   │    │     │      └── PreviousNextIcons
│   │    │     ├── input
│   │    │     │      ├── Input
│   │    │     │      ├── InputImg
│   │    │     │      └── InputTextArea
│   │    │     └── popUp
│   │    │          └── popUp
│   │    ├──layout
│   │    │    └── Layout
│   │    ├──pages
│   │    │      ├── Create
│   │    │      ├── Detail
│   │    │      ├── Edit
│   │    │      ├── Home
│   │    │      ├── Login
│   │    │      └── Signin
│   │    ├──routes
│   │    │    └── index.jsx
│   │    └── services
│   │        └── useAPI
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

```

## Tecnologías

- [React.js](https://react.dev/)
- [JavaScript](https://www.w3schools.com/js/js_intro.asp)
- [TailwindCSS](https://tailwindcss.com/)
- [Java](https://www.java.com)
- [PgAdmin](https://www.pgadmin.org/)+ [SQL](https://www.w3schools.com/sql/default.asp)
- [SpringBoot](https://spring.io/projects/spring-boot)



## Uso
El programa debe iniciarse primero en el back.

Para compilar:

```
Da al play para compilar automáticamente.

```

Una vez iniciado el back, en el front:

```
npm run dev
```

Abre el enlace que aparece con tu puerto local.


## Contribución 🤝

1. Haz un fork al repositorio.
2. Crea una nueva rama: `git checkout -b feature/name`.
3. Haz tus cambios.
4. Haz push de tu rama: `git push origin feature/name`.
5. Crea un pull request.


 ## Coders👩‍💻
Las coders que hemos trabajado en este proyecto somos:

- [Flavia Ferri](https://github.com/flaviferri)
- [Laura Gil](https://github.com/LauraGDev)
- [Betty Lopez](https://github.com/BettyLopo)
- [Ziortza Rey](https://github.com/indiakka)
- [Sara Terán](https://github.com/Sarii4)

## Demo

