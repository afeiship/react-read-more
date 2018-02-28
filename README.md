# react-read-more
> Read more component for react.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    maxHeight: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool,
    collapseable: PropTypes.bool,
    elements: PropTypes.array,
  };

  static defaultProps = {
    maxHeight: '10000px',
    value: false,
    collapseable: true,
    onChange: noop,
    elements:[ 'COLLAPSE','EXPAND' ]
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-read-more --save
// import : import ReactReadMore from 'react-read-more'

class App extends React.Component{
  state = {
    collapseable: true,
    value: false,
    maxHeight: '5rem'
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = (e) =>{
    const { value, callback } = e.target;
    this.setState({ value }, callback);
  };

  _onClick = e =>{
    this.setState({ maxHeight: `${e}px`})
  };

  _onToggle = e =>{
    this.setState({
      collapseable: !this.state.collapseable
    })
  };

  render(){
    return (
      <div className="hello-react-read-more">
        <button className="demo-btn btn-oragne" onClick={this._onToggle}>Toggle collapseable:{ ''+(this.state.collapseable)}</button>
        <button className="demo-btn" onClick={this._onClick.bind(this, 300)}>Set maxHeight: 300px;</button>
        <button className="demo-btn" onClick={this._onClick.bind(this, 120)}>Set maxHeight: 120px;</button>
        <button className="demo-btn" onClick={this._onClick.bind(this, 100)}>Set maxHeight: 100px;</button>
        <button className="demo-btn" onClick={this._onClick.bind(this, 20)}>Set maxHeight: 20px;</button>
        <ReactReadMore ref='rc' collapseable={this.state.collapseable} maxHeight={this.state.maxHeight} elements={
          [
            'CLOSE',
            'OPEN',
          ]
        } value={this.state.value} onChange={ this._onChange }>
        <p>This is by far the biggest deep dive I've seen on CSS Variables posted to the web and it's merely Chapter One of complete e-book on the topic.</p>
        <p>Truth is, I'm still on the thick of reading through this myself, but had to stop somewhere in the middle to write this up and share it because </p>
        <p>it's just that gosh-darned useful. For example, the post goes into great detail on three specific use cases for CSS Variables and breaks the code </p>
        <p>
        down to give a better understanding of what it does, in true tutorial fashion.
        Scoping, inheritance, resolving multiple declarations, little gotchas_there's plenty in here for beginners and advanced developers alike.</p>
        </ReactReadMore>
      </div>
    );
  }
}

```

## customize style:
```scss
// customize your styles:
$react-read-more-options:(
);

@import '~node_modules/react-read-more/style.scss';
```
