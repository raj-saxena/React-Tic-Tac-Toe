import React from 'react';

const Cell = (props) => {
    const pos = props.row + "-" +props.column
    return (<div key={pos} className="cell">{pos}</div>)
}

export default Cell;