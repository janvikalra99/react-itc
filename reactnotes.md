- when dealing with maps, use immutable, not regular maps.
  if using regular maps, to update use: questionMap: new Map([prevState.questionMap]).set(6, 'new state'),
  - this.state.questionMap.get(0)

1. a component can be written inside another component itself. do this for small components
  ```
  const bar = (props) => {
    return (
      <div>
        {this.props.id}
      </div>
      )
  } // creates a component bar
  ```

  2. printing: `console.log(`makenew value:${makeNew}`);`
  3. `autoFocus` makes the new text inputted mounted the one that it focuses on
  4. Don't create a list of objects! When you're creating a list of objects, it's good practice to have a list of primitives and them render them into objects in `render()`
  ```
  this.state = {
    bars: [1, 2, 3, 4, 5],
  };

  return (
    <div>
      {this.state.bars.map(x => (<Bar id={x} makeNew={this.makeNew} key={x} initialText={x} />))}
    </div>
  );
  ```
  the `map` function changes each value in the list, calls it `x` to a `<Bar... />`
then, i'm pushing & popping primitives.
React only renders things that have changed, and can't read an object so can't tell if it's changed.

5. Symbols:
`()` - is for what you want to render. In a one-line anonymous function, that's all you need. Don't need the word `render`
`{}` - for javascript. put javascript inside of it.

setState either takes an object or prevState as functions
() -> prevState is a parameter i am passing into the function hence need () **QUESTION -> correct interp?**
{} -> javascript
*can only change one state variable inside setState in one setState call*
```
this.setState(prevState => ({ id: prevState.id + 1 }));
```

6. `this.forceUpdate()`

7. `splice()` can be using for deleting items from an array. `splice(-1, 1)` -> at the -1th element (last), add no new elements, delete 1 element.

```
// NOT
handleDelete = () => {
    this.setState({ bars: this.state.bars.splice(-1, 1) }); // bc splice returns the deleted element so bars is now set to the deleted element
// INSTEAD
const array = [...this.state.bars]; // make a separate copy of the array
    array.splice(-1, 1);
    this.setState({ bars: array });
```

8. it's standard protocol to set `key` value for any `input`/`component` to a number
9. `{this.state.bars.map(x => (<Bar id={x} makeNew={this.makeNew} deleteBar={this.deleteBar} key={x} initialText="add option" />))}` bc it's doesn't automatically increment. **QUESTION -> what is X actually?** **QUESTION -> how do i name the first two different things?**

10. in html `radio buttons` if you take out `name` - destroys radio button group
```
<input type="radio" name="importance" value="male" /> Male<br />
<input type="radio" name="importance" value="female" /> Female<br />
<input type="radio" name="importance" value="other" /> Other
```
11. The `<select>` element defines a drop-down list:
