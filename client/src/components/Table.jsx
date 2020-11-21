import React from 'react';
import styles from '../style.css';
import TableGrid from './TableGrid.jsx';
import TableButtons from './TableButtons.jsx';

const Table = (props) => (
  <div className={styles.tableBox}>
    <TableGrid data={props.data}/>
    <div className={styles.padding}></div>
    <TableButtons/>
  </div>
);

export default Table;

