## Lichtbrecher first steps guide to a "Hello World" page 

You should have cloned the Repository and executed ```yarn install``` before starting.

### Setup Prismic backend
Create a new repository at prismic.io. Go to *Settings > Api & Security*, set the repository security API access to "Private API" and generate a
permanent access token by adding a new application.

Go to *Settings > Previews* and create a preview. Link resolver must be ```/api/preview```.

Example for previews on localhost:

Site Name: localhost, Domain: http://localhost:3000, Link Resolver: /api/preview

### Setup Prismic custom types

In Prismic, open *Custom Types > Create New*, call your new Custom Type "homepage" and open the JSON Editor. 
Copy and paste the configuration from ```prismic/blueprints/homepage.json``` into the JSON Editor.

### Add content

In Prismic, return to *Documents*, Create new document, call it "homepage" and use the Custom Type "homepage".
Inside the document go to *Content* and add some text into the fields "headline" and "richtext".

In "headline" you can set it to be "Heading 1" to "Heading 6". This corresponds to *h1* to *h6* through our Headline-atom.

In "richtext" you can use the WYSIWYG-editor, but remember that the Dummy-molecule only uses "Normal text" and renders it into ```p``` tags. All other elements will be rendered as stringified JSON. 

### Connect to Prismic backend

Open ```next.config.js```. Set the environment variables *apiEndpoint*, *accessToken* and *repoName* to values provided by Prismic.io.

### Start Next.js

Execute ```yarn dev``` or ```yarn build``` and ```yarn start``` to start your server on localhost and visit [localhost:3000](http://localhost:3000) in your browser.
