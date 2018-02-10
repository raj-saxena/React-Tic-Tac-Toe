import React, { Component } from 'react';

import _ from 'lodash';

import Cell from './cell';

class Board extends Component {
    render(props) {
        console.log("grid_size", this.props.grid_size);
        
        const rows = _.range(0, this.props.grid_size);
        const columns = _.range(0, this.props.grid_size);
        return (
            <div className="board">
                <table><tbody>
                    {// Iterate for each row
                      rows.map((value, row_index) => {
                        return (
                            <tr key={row_index}>
                                {// Iterate for each column
                                  columns.map((value, column_index) => {
                                    // Add cell for every position.
                                    return (
                                        <td key={column_index}>
                                            <Cell row={row_index} column={column_index} />
                                        </td>
                                    )
                                  })
                                }
                            </tr>
                        )
                      })
                    }
                </tbody></table>
            </div>
        )
    }
}
export default Board;