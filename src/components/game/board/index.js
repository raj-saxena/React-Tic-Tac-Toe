import React, { Component } from 'react';

import Cell from './cell';

class Board extends Component {
    render(props) {
        console.log("grid_size", this.props.grid_size);
        // Iterate for each row
            // Iterate for each column
                // Add cell for every position.

        // Create an empty array to loop N x N times
        var dummy_array = Array.apply(null, Array(this.props.grid_size));
        return (
            <div className="board">
                <table><tbody>
                    {
                      dummy_array.map((value, row_index) => {
                        return (
                            <tr key={row_index}>
                                {
                                  dummy_array.map((value, column_index) => {
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