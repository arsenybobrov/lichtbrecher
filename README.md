# Lichtbrecher

### installation
```yarn install```

Copy ```api/prismic/config/configuration-dummy.js```, rename it to ```api/prismic/config/configuration.js``` and edit the vars.


### development
```yarn dev```

IMPORTATNT! See ```**/**/test``` folders for snapshot & unit tests.


### testing
```yarn test:all```

There is a pre-push hook that runs ```yarn test:all```.


### build
```yarn build```


### prismic
This setup requires the following custom types:

- homepage
- page
- global_config

Add new slices (prismic modules) inside ```api/prismic/slices/map.js```.

```src/templates/partials/ComponentsRenderer.tsx``` should be used by the templates to render slices according to ```api/prismic/slices/map.js```.
E.g.: 
```
<ComponentsRenderer
    slices={get(data, 'data.body', [])}
/>
```

Modify ```api/prismic/helper/richtextHtmlSerializer.js``` to impact editors richtext input, wich is handled by prismic richtext resolver.

It is recommended to use ```src/helpers/preventScriptInjection.ts``` if the editor has a possibility to insert script inside prismic richtext editor.



### languages
Edit / handle languages inside:

- ```server/server.js```



### cheatsheet
Handle prismic rich texts:

```import { RichText } from 'prismic-reactjs';```

```const richtText = RichText.render(prismic.richtext.object, linkResolver, htmlSerializer);```

Get current breakpoint:

```const breakpoint = useContext(BreakpointContext);```

Access theme (variables):

```const theme = useContext(ThemeContext);```

Access data from prismic's global_conf:

```const globalData = useContext(GlobalConfigContext);```

Use ```src/components/atoms/NextLink/NextLink.tsx``` for internal and external link handling.
Links inside a richt text are handled the similar way.


### usefull third party
The following libs are not neccessary for the setup to work but are very nice:

- react-gsap
- react-scroll


### license
MIT. ©Copyright Arseny Bobrov, 2020.
