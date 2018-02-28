import './dev.scss';
import ReactReadMore from './main';

/*===example start===*/

// install: npm install afeiship/react-read-more --save
// import : import ReactReadMore from 'react-read-more'

class App extends React.Component{
  state = {
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

  render(){
    return (
      <div className="hello-react-read-more">
        <button className="demo-btn" onClick={this._onClick.bind(this, 250)}>Set maxHeight: 250px;</button>
        <button className="demo-btn" onClick={this._onClick.bind(this, 120)}>Set maxHeight: 120px;</button>
        <button className="demo-btn" onClick={this._onClick.bind(this, 100)}>Set maxHeight: 100px;</button>
        <button className="demo-btn" onClick={this._onClick.bind(this, 20)}>Set maxHeight: 20px;</button>
        <ReactReadMore ref='rc' maxHeight={this.state.maxHeight} elements={
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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
