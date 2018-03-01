# react-read-more
> Read more component for react.


## properties:
```javascript
BACKUP_PROPERTIES
```

## usage:
```jsx
BACKUP_USAGE
```

## customize style:
```scss
// customize your styles:
$react-read-more-options:(
);

@import '~node_modules/react-read-more/style.scss';
```
## use gradient hidden:

```scss
.react-read-more {
  &-wrapper {
    position: relative;
    &::after {
      content: '\200B';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 20px;
      background: linear-gradient(rgba(255, 255, 255, 0.01), #fff); /* transparent keyword is broken in Safari */
      pointer-events: none;
    }
  }

  &[data-expanded=true],
  &[data-actions-visible=false] {
    .react-read-more-wrapper {
      &::after {
        background: none;
      }
    }
  }

  &-actions {
    padding: 5px;
    color:#fff;
  }
}
```
