# cheatsheet
## handle prismic rich text:
```import { RichText } from 'prismic-reactjs';```

```const richtText = RichText.render(prismic.richtext.object, linkResolver, htmlSerializer);```

## access theme (variables):
```const theme = useContext(ThemeContext);```

## get current breakpoint:
```const breakpoint = useContext(BreakpointContext);```

## access data from prismic's shared custom type:
```const sharedData = useContext(SharedContentContext);```

## media queries inside styled components:
``import { media } from '@nx-kit/styling'```;


```
${media('xl')} {
  font-size: 25 px;
}
${media('xs', 'sm)} {
  font-size: 18 px;
}
```
