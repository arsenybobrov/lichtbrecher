# prismic
## templating
Prismic allows you to use slices. So it is not always neccessary to use more than one template.
See ```src/components/templates```. If you need more templates add them inside ```pages/index.tsx```.


## prismic custom types
This setup allows to handle only 5 different custom types:
- homepage
- page
- 404 page
- shared content
- navigation

See ```prismic/config.js``` for details and use ```prismic/blueprints``` to scaffold these types.


## prismic slices
Add new slices (prismic modules) inside ```prismic/slices.js```.
```src/templates/partials/ComponentsRenderer.js``` should be used by the templates to render slices according to ```prismic/config.js```.
E.g.:
```
import get from 'lodash/get';

<ComponentsRenderer
    slices={get(data, 'data.body', [])}
/>
```


## prismic richtext
Add components inside ```prismic/helper/richtextHtmlSerializer.ts``` to controll richt text elements.
E.g.
```
case Elements.paragraph:
  props = { className: 'richtext-p' };
  return React.createElement('p', propsWithUniqueKey(props, key), children);
```


## prismic edit btn
Add a ```data-wio-id={pageId}``` attribute to a DOM element (e.g. ```<div data-wio-id={pageId} />```).


## document relations
Inside prismic the custom type "page" has a document relation field named "category". Select a parent document to create a document relation
between the two documents. This is neccessary for multi-level navigation.
