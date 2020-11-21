import React from 'react';
import styles from '../style.css';

const TableGrid = (props) => (
  <div className={styles.tableGrid}>
    <div className={styles.tableData}>
      <div className={styles.tableRow}>
        <div className={styles.dotAndField}>
          <div>
            <div className={styles.layer1}>
              <div className={styles.layer2}>
                <div className={styles.blueDot}></div>
                <div className={styles.fieldName}>
                  <div className={styles.fieldInner}>{'Principal & Interest'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fieldValue}>{props.data.principalAndInterest.toLocaleString('en-US', {style: "currency",
           currency: "USD",
           minimumFractionDigits: 0,
           maximumFractionDigits: 0,})}
        </div>
      </div>
    </div>

    <div className={styles.tableData}>
      <div className={styles.tableRow}>
        <div className={styles.dotAndField}>
          <div>
            <div className={styles.layer1}>
              <div className={styles.layer2}>
                <div className={styles.tealDot}></div>
                <div className={styles.fieldName}>
                  <div className={styles.fieldInner}>Property Taxes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fieldValue}>{(props.data.property_tax/12).toLocaleString('en-US', {style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,})}
        </div>
      </div>
    </div>

    <div className={styles.tableData}>
      <div className={styles.tableRow}>
        <div className={styles.dotAndField}>
          <div>
            <div className={styles.layer1}>
              <div className={styles.layer2}>
                <div className={styles.greenDot}></div>
                <div className={styles.fieldName}>
                  <div className={styles.fieldInner}>Home Insurance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fieldValue}>{props.data.home_ins.toLocaleString('en-US', {style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,})}
        </div>
      </div>
    </div>

    <div className={styles.tableData}>
      <div className={styles.tableRow}>
        <div className={styles.dotAndField}>
          <div>
            <div className={styles.layer1}>
              <div className={styles.layer2}>
                <div className={styles.pinkDot}></div>
                <div className={styles.fieldName}>
                  <div className={styles.fieldInner}>HOA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fieldValue}>{(props.data.hoa).toLocaleString('en-US', {style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,})}
        </div>
      </div>
    </div>

    <div className={styles.tableData}>
      <div className={styles.tableRow}>
        <div className={styles.dotAndField}>
          <div>
            <div className={styles.layer1}>
              <div className={styles.layer2}>
              <div className={styles.purpleDot}></div>
              <div className={styles.fieldName}>
                <div className={styles.fieldInner}>{'Mortgage ins. & other'}</div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fieldValue}>{(props.data.other).toLocaleString('en-US', {style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,})}</div>
      </div>
    </div>

</div>
);

export default TableGrid;