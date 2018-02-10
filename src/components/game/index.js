import React from 'react';

import StatusBar from './statusBar';
import Board from './board';

export default () => {
    return(
        <div>
            <StatusBar />
            <Board grid_size={3} />
        </div>
    )
}