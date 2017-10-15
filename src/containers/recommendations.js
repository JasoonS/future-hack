import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

const rows = [
  [<h1>Exact</>,<h2>Close Match</h2>, <h3>similar</h3>],
  <br/>
  ['Business analyst'<favorite-star></favorite-star>, 'Consultant'<favorite-star></favorite-star>, 'Business consultant'<favorite-star></favorite-star>],
  ['Sales Rep'<favorite-star></favorite-star>, 'Manager'<favorite-star></favorite-star>, 'Developer'<favorite-star></favorite-star>],
];

ReactDOM.render(
  <Table
    rowHeight={50}
    rowsCount={rows.length}
    width={5000}
    height={5000}
    headerHeight={50}>
    <Column
      header={<Cell>Col 1</Cell>}
      cell={<Cell>Column 1 static content</Cell>}
      width={2000}
    />
    <Column
      header={<Cell>Col 2</Cell>}
      cell={<MyCustomCell mySpecialProp="column2" />}
      width={1000}
    />
    <Column
      header={<Cell>Col 3</Cell>}
      cell={({rowIndex, ...props}) => (
        <Cell {...props}>
          Data for column 3: {rows[rowIndex][2]}
        </Cell>
      )}
      width={2000}
    />
  </Table>,
  <RaisedButton
    label='Apply'
    primary={true}
    fullWidth={80%}
    float: left;
    onClick={this.submitEntryDeposit}/>

    <RaisedButton
      label='More Info'
      primary={true}
      fullWidth={80%}
      float: right;
      onClick={this.submitEntryDeposit}/>
  document.getElementById('example')
);
