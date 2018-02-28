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
            '☂CLOSE',
            '☃OPEN',
          ]
        } value={this.state.value} onChange={ this._onChange }>
          XXX(商家名)，有一件宝贝退货申请，立即查看>>>（售后订单列表）
          同意退货：通知对象为买家，通知方式为极光推送和系统消息。
          亲爱的藏友，退货申请已处理，前往查看>>>（售后订单列表）
          申请退款：通知对象为卖家，通知方式为极光推送和系统消息
          XXX(商家名)，有一笔退款申请未处理，立即查看>>>（售后订单列表）
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
