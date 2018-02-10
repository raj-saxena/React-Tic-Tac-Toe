import React from 'react';

import StatusBar from './statusBar';
import Board from './board';

export default (props) => {
    const grid_size = parseInt(props.match.params.grid_size, 10);
    return(
        <div>
            <StatusBar />
            <Board grid_size={grid_size} />
        </div>
    )
}