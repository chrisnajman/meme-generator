# React Meme Generator

- Input text to the 'Top text' and 'Bottom text' inputs to generate text above and below the image.
- Click the button to generate a new image.

> [!NOTE]
> No data is saved.

---

## Scrimba Course Link

- [Build a Meme Generator](https://scrimba.com/playlist/prXJpCQ)

> [!NOTE]
> (Free) subscription and login required to follow the course.

---

## useEffect()

### What is a "side effect" in React? What are some examples?

- Any code that affects an outside system, e.g.
- local storage, API, websockets, two states to keep in sync.

### What is NOT a "side effect" in React? Examples?

Anything that React is in charge of, e.g.

- Maintaining state,
- keeping the UI in sync with the data,
- rendering DOM elements.

### When does React run the useEffect function?

- As soon as the component loads (first render).
- On every re-render of the component (assuming no dependencies array).

### When does it NOT run the useEffect function?

- when the values of the dependencies in the array stay the same between renders.

### What is the "dependencies array"?

- Second parameter to the useEffect function.
- A way for React to know whether it should re-run the effect function.

---

## Testing

Tested on Windows 10 with:

- Chrome
- Firefox
- Microsoft Edge

Page tested in both browser and device views.
