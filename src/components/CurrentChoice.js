import React from 'react';

class PollHeader extends React.Component {
  render() {
    return (<p className="text-center" style={{textAlign:"center"}}>{this.props.text}</p>);
  }
}

export default PollHeader;
