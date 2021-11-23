# Lichtbrecher first steps guide to a "Hello World" page 
## install
Run ```npm install```, edit ```prismic/config.js``` and ```next.config.js```.
Setup prismic: content types and languages.

## setup prismic
Create a new repository at prismic.io. Go to *Settings > Api & Security*, set the repository security API access to "Private API" and generate a
permanent access token by adding a new application.

Go to *Settings > Previews* and create a preview. Link resolver must be ```/api/preview```.

Example for previews on localhost:

Site Name: localhost, Domain: http://localhost:3000, Link Resolver: /api/preview

## setup prismic custom types

In Prismic, open *Custom Types > Create New*, call your new Custom Type "homepage" and open the JSON Editor. 
Copy and paste the blueprint from ```prismic/blueprints/homepage.json``` into the JSON Editor.

Create inside prismic a new custom type for navigation (e.g. navigation).
Use ```prismic/blueprints/navigation.json``` blueprint to fill this new custom type.

See ```prismic/config.js``` for details and use ```prismic/blueprints``` to scaffold these types.

## add content

In Prismic, return to *Documents*, Create new document, call it "homepage" and use the Custom Type "homepage".
Inside the document go to *Content* and add some text into the fields "richtext".

In "richtext" you can use the WYSIWYG-editor.

In Prismic, return to *Documents*, Create new document, call it "main nav" and use the Custom Type "navigation".
Add some dummy links, just to be able to see something in the frontend.

## start the app in dev mode

Execute ```npm run dev``` to start your server on localhost and visit [localhost:3000](http://localhost:3000) in your browser.

## run storybook
Execute ```npm run storybook``` and have a look at the allready existing components.
