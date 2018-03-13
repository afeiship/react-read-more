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
    collapseable: PropTypes.bool,
    elements: PropTypes.array,
  };

  static defaultProps = {
    maxHeight: '10000px',
    collapseable: true,
    onChange: noop,
    elements:[ 'COLLAPSE','EXPAND' ]
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: false
    };
  }

  componentDidMount() {
    const { content } = this.refs;
    const { maxHeight, onChange } = this.props;
    const maxHeightValue = parseFloat(maxHeight);
    if( maxHeightValue > content.offsetHeight ){
      const target = { value: true };
      this.setState(target,()=>{
        onChange({ target });
      });
    }
  }


  _onClick = () => {
    const { onChange } = this.props;
    const value = !this.state.value;
    this.setState({ value },()=>{
      onChange({ target: { value }});
    });
  };

  render(){
    const { className, children, elements, maxHeight, collapseable, ...props } = this.props;
    const { value } = this.state;

    return (
      <section data-expanded={value} { ...props } className={ classNames('react-read-more',className) }>
        <div className='react-read-more-wrapper' style={{ maxHeight }}>
          <div ref='content' className='react-read-more-content'>
            { children }
          </div>
        </div>
        <button data-collapseable={collapseable} onClick={this._onClick} className='react-read-more-actions'>
          {value && elements[0]}
          {!value && elements[1]}
        </button>
      </section>
    );
  }
}
