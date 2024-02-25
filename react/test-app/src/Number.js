import React from'react';

class Number extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (this.props.number!== prevProps.number) {
            console.log('Number updated');
        }
    }

    render() {
        if (this.props.number % 2 === 0){
            return (
                <div>
                    {this.props.number}
                </div>
            );
        }
        else { 
            return null;
        }
    }
}

export default Number;