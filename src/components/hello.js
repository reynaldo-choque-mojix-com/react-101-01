import React from "react";

class Hello extends React.Component {
    render() {
        return (
            <div>
                hello to xtime {this.props.name}
            </div>
        )
    };
}

export default Hello;