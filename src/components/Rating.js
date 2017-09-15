import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const ratingDiff = nextProps.rating - this.props.rating;

    if (ratingDiff < 0) {
      this.setState({decreasing: true});
      this.setState({increasing: false});
    } else if (ratingDiff > 0) {
      this.setState({decreasing: false});
      this.setState({increasing: true});
    } else {
      this.setState({decreasing: false});
      this.setState({increasing: false});
    }
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
