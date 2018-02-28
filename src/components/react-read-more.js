import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    maxHeight: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool,
    elements: PropTypes.array,
  };

  static defaultProps = {
    maxHeight: '10000px',
    value: false,
    onChange: noop,
    elements:[ 'COLLAPSE','EXPAND' ]
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      visible: true,
      maxHeight: inProps.maxHeight
    };
  }

  componentDidMount() {
    const { wrapper, content } = this.refs;
    this._wrapper = wrapper;
    this._content = content;
    this.syncState();
  }

  componentWillReceiveProps(inProps){
    const { maxHeight } = inProps;
    if( maxHeight !== this.state.maxHeight ){
      this.setState({ maxHeight }, this.syncState);
    }
  }

  componentWillUnmount(){
    this._wrapper = null;
    this._content = null;
  }

  syncState = () => {
    const { value, onChange } = this.props;
    const action = value ? 'max' : 'min';
    const _maxHeight = Math[action]( this._wrapper.offsetHeight, this._content.offsetHeight );
    const visible = _maxHeight >= parseFloat(this.props.maxHeight)
    this.setState({
      maxHeight: `${_maxHeight}px`,
      visible
    });
  };

  _onClick = () => {
    const { onChange, value } = this.props;
    const target = { value: !value, callback: this.syncState};
    onChange({ target });
  };


  render(){
    const { className, children, elements, maxHeight, value, ...props } = this.props;
    return (
      <section data-expanded={value} { ...props } className={ classNames('react-read-more',className) }>
        <div ref='wrapper' className='react-read-more-wrapper' style={{ maxHeight: this.state.maxHeight }}>
          <div ref='content' className='react-read-more-content'>
            { children }
          </div>
        </div>
        <button hidden={ !this.state.visible } onClick={this._onClick} className='react-read-more-actions'>
          {value && elements[0]}
          {!value && elements[1]}
        </button>
      </section>
    );
  }
}
