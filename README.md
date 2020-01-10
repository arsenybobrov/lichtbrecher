# Lichtbrecher

### installation
```yarn install```

Copy ```api/prismic/configuration-dummy.js```, rename it to ```api/prismic/configuration.js``` and edit the vars.


### development
```yarn dev```


### testing
```yarn test:all```

There is a pre-push hook that runs ```yarn test:all```.


### deployment
```yarn build```


### prismic
This setup requires the following custom types:

 - homepage
 - page
 - global_config


 ### Cheatsheet
 Handle prismic rich texts:
 
 ```const richtText = RichText.render(prismic.richtext.object, linkResolver, htmlSerializer);```
 
 Get current breakpoint:
 
 ```const breakpoint = useContext(BreakpointContext);```
 
 Access theme (variables):
 
 ```const theme = useContext(ThemeContext);```
 
 Access data from prismic's global_conf:
 
 ```const globalData = useContext(GlobalConfigContext);```

 
 ### usefull third party
 The following libs are not neccessary for the setup to work but are very nice:
 
 - react-gsap
 - react-scroll


### license
MIT. ©Copyright Arseny Bobrov, 2020.
