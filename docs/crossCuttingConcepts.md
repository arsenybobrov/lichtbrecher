# cross-cutting concepts
## basic auth
See next.config.js.

## spacing
Every cms element (prismic slice) is wrapped by src/components/organisms/CmsElmtWrapper/CmsElmtWrapper.tsx.
This wrapper is responsible for margins between cms elements according to their order.
See src/themes/default.tsx > spacing > cmsElements for individual margin definitions.

## multi level navigation
Create inside prismic a new custom type for navigation (e.g. navigation).
Use ```prismic/blueprints/navigation.json``` blueprint to fill this new custom type.

Fetch this custom type at the place where you need it.
E.g. ```const fetchedMainNav = await Client(req).getByUID(navigation, 'main-nav', { lang });``` (custom type, UID, language).

Use ```src/helpers/flatNavToNestedNavConverter.ts``` to convert the prismic output (array of objects) to an array of NESTED objects.
E.g. ```<pre>{JSON.stringify(flatNavToNestedNavConverter(get(fetchedMainNav, 'data.body', [])), null, 2)}</pre>```

## languages
See ```prismic/config.js``` for details and make sure to add all languages in prismic.

## next/image
Do not use next/image inside components. Instead of it use ```src/components/atoms/Picture/Picture.tsx``` even if you do not need art direction.

## dangerouslySetInnerHTML
It is recommended to use ```src/helpers/preventCodeInjection.ts``` when using dangerouslySetInnerHTML.

## snapshot tests
Only slices & siteframe require snapshot tests. Do not add snapshot tests to partials & atoms.

## scss
Want to write styles in JavaScript, but also want Sass-style helper functions and mixins? Need a consistent color palette throughout your app? ✨ polished is for you!
See [`docs`](https://polished.js.org/docs/) for details.

## testing
```npm run test:all```

It is recomended to use pre-push / pre-commit hooks. Add inside package.json the following:
```
"husky": {
  "hooks": {
    "pre-push": "yarn test:all"
  }
},
````

## error handling
Static errors are handled inside ```pages/_error.js```. The classic "404 - page not found" is a normal content page delivered by prismic.
The prismic custom type for the 404 error page is inside ```prismic/config.js```.

## Internal & external inks:
Use ```src/components/atoms/Link/Link.tsx``` for internal link handling with the ability to handle client-side transitions (if delayClick set to true) and extertnal links.
Links inside a richt text are handled the same way. See stories for details.

## nx-kit
We use [nx-kit](https://github.com/nexumAG/nx-kit) as a component library and design system.
Nx-kit components are styled inside ```src/themes/default.tsx``` > defaultTheme.component.
