# JNG vite notes

## Vite requirements   
node: vite requires node ^20   
react vite requires react ^18.2.0   
ReactDOM.render FAILS in this build (DEPRECATED in react ^18)

**use_root.jsx**
```jsx

  import {createRoot} from 'react-dom/client';// vite

  const use_root = (elements, root) => {

    root = typeof root == "string" ? document.querySelector(`${root}`) : root;

    const rootDOM = createRoot(root);

    rootDOM.render(
        elements,
    );

  }

```


~~ReactDOM.render~~ FAILS instead use createPortal
```jsx
  ReactDOM.createPortal(
    elements,
    document.querySelector('.root')
  );
```

current issues

- issue with App.jsx > wow.min.js