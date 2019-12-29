# Lichtbrecher

## installation
```yarn install```

Copy ```api/prismic-configuration-dummy.js```, rename it to ```api/prismic-configuration.js``` and edit the vars.


## development
```yarn dev```


## deployment
```yarn build```


## next js
```pages/_document.js``` is only needed for the styled components to be rendered on the server.
You will get a really nasty page jumping if styled components are not rendered this way.

```pages/**.js``` contain rendering of different custom types. See ```src/templates/**/*``` for details.


## Prismic (API)
Set API visibility to private in order to avoid the search bots rendering of the API.

Copy ```api/prismic-configuration-dummy.js```, rename it to ```api/prismic-configuration.js``` and edit the vars.


Custom types are:

 - homepage
 - page
 - global_config


All custom type templates are inside ```src/templates/**/*```.

Global Configuration / shared content can be found inside ```global_config``` - custom type inside the prismic project. This custom type can be used by template.


## components
This setup uses the atomic design approach. Components are inside ```src/components/**/*```.


## styled components
Styled components theming context is inside ```src/styles/wrapper.js```.

Use theme vars inside styled components: ```color: ${(props) => props.theme.colors.primary};```

Use ```const theme = useContext(ThemeContext);``` in order to access theme vars inside react components. import { useContext } from 'react'.

Example for conditional css: ```${(props) => ((props.theme.name === 'lichtbrecher') && css`color: red;`)}```. import { css } from 'styled-components'.

## pages/_document.js
This file is only needed for the styled components to be rendered on the server.
You will get a really nasty page jumping if styled components are not rendered this way.


## global styling
See ```src/styles/**CSS.js``` for global css & fonts import. Wrap all components with ```src/styles/Wrapper.js```.

Variables are inside ```src/themes/**.js```.


## images & fonts
You find these inside ```static/**/*```.


## error pages
See ```templates/errors/*.js```.


## license
MIT. ©Copyright Arseny Bobrov, 2020.
