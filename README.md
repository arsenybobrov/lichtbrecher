# Lichtbrecher
Lichtbrecher is a setup template for projects running with next.js and consuming content from prismic.io.

See [./docs/firstSteps.md](./docs/firstSteps.md) for a guide how to set up a basic project.

### demo
https://lichtbrecher.vercel.app/

### install frontend
Run ```npm install```, edit ```prismic/config.js``` and ```next.config.js```.
Setup prismic: content types and languages.

### development
```npm run dev```

IMPORTATNT! See ```**/**/*test.*``` folders for snapshot & unit tests.


### testing
```npm run test:all```

It is recomended to use pre-push / pre-commit hooks. Add inside package.json the following:
```
"husky": {
  "hooks": {
    "pre-push": "yarn test:all"
  }
},
````

### build
```npm run build```


### languages
See ```prismic/config.js``` for details and make sure to add all languages in prismic.


### error handling
Static errors are handled inside ```pages/_error.js```. The classic "404 - page not found" is a normal content page delivered by prismic.
The prismic custom type for the 404 error page is inside ```prismic/config.js```.


### templating
Prismic allows you to use slices. So it is not always neccessary to use more than one template.
See ```src/components/templates```. If you need more templates add them inside ```pages/index.tsx```.


### prismic custom types
This setup allows to handle only 4 different custom types:
 - homepage
 - page
 - 404 page
 - shared content

See ```prismic/config.js``` for details and use ```prismic/blueprints``` to scaffold these types.


### prismic slices
Add new slices (prismic modules) inside ```prismic/slices.js```.
```src/templates/partials/ComponentsRenderer.js``` should be used by the templates to render slices according to ```prismic/config.js```.
E.g.: 
```
import get from 'lodash/get';

<ComponentsRenderer
    slices={get(data, 'data.body', [])}
/>
```


### prismic richtext
Add components inside ```prismic/helper/richtextHtmlSerializer.ts``` to controll richt text elements.
E.g.
```
case Elements.paragraph:
  props = { className: 'richtext-p' };
  return React.createElement('p', propsWithUniqueKey(props, key), children);
```


### prismic edit btn
Add a ```data-wio-id={pageId}``` attribute to a DOM element (e.g. ```<div data-wio-id={pageId} />```).


### document relations
Inside prismic the custom type "page" has a document relation field named "category". Select a parent document to create a document relation
between the two documents. This is neccessary for multi-level navigation.


### cheatsheet
#### Manage multi level navigation
Create inside prismic a new custom type for navigation (e.g. navigation).
Use ```prismic/blueprints/navigation.json``` blueprint to fill this new custom type.

Fetch this custom type at the place where you need it. 
E.g. ```const fetchedMainNav = await Client(req).getByUID(navigation, 'main-nav', { lang });``` (custom type, UID, language).

Use ```src/helpers/flatNavToNestedNavConverter.ts``` to convert the prismic output (array of objects) to an array of NESTED objects.
E.g. ```<pre>{JSON.stringify(flatNavToNestedNavConverter(get(fetchedMainNav, 'data.body', [])), null, 2)}</pre>```

#### Handle prismic rich text:
```import { RichText } from 'prismic-reactjs';```

```const richtText = RichText.render(prismic.richtext.object, linkResolver, htmlSerializer);```

#### dangerouslySetInnerHTML
It is recommended to use ```src/helpers/preventCodeInjection.ts``` when using dangerouslySetInnerHTML.


#### Access theme (variables):
```const theme = useContext(ThemeContext);```

#### Get current breakpoint:
```const breakpoint = useContext(BreakpointContext);```

#### Access data from prismic's shared custom type:
```const sharedData = useContext(SharedContentContext);```

#### Media queries inside styled components:
```____
@media(${mq.mdDown}) {
  font-size: 20px;
}
```

#### Internal & external inks:
Use ```src/components/atoms/Link/Link.tsx``` for internal link handling with the ability to handle client-side transitions (if delayClick set to true) and extertnal links.
Links inside a richt text are handled the same way. E.g.:
```<Link text={data.data.link_text} url={data.data.link} title="click me" />``` or

```<Link url={data.data.link} title="click me">Click me!</Link>```.

See tests for details.

#### scss
Want to write styles in JavaScript, but also want Sass-style helper functions and mixins? Need a consistent color palette throughout your app? ✨ polished is for you!
See [`docs`](https://polished.js.org/docs/) for details.

### useful third party
The following libs are not neccessary for the setup to work but are very nice:

- react-gsap
- react-scroll
- react-scrollmagic


### license
MIT. ©Copyright Arseny Bobrov, Daniel Hargesheimer, Chema Mengibar, Martin Malinowski 2020.
