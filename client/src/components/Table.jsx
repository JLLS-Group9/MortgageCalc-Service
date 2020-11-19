import React from 'react';
import styles from '../style.css';

const Table = (props) => (
  <div>
    <div>

      <div>
        <div>
          <div>
            <div className={styles.blueDot}></div>
            <div>{'Principal & Interest'}</div>
          </div>
        </div>
        <div>{props.data.principalAndInterest.toLocaleString('en-US', {style: "currency",
             currency: "USD",
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,})}</div>
      </div>

      <div>
        <div>
          <div>
            <div className={styles.tealDot}></div>
            <div>Property Taxes</div>
          </div>
        </div>
        <div>{(props.data.property_tax/12).toLocaleString('en-US', {style: "currency",
             currency: "USD",
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,})}</div>
      </div>

      <div>
        <div>
          <div>
            <div className={styles.greenDot}></div>
            <div>Home Insurance</div>
          </div>
        </div>
        <div>{props.data.home_ins.toLocaleString('en-US', {style: "currency",
             currency: "USD",
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,})}</div>
      </div>

      <div>
        <div>
          <div>
            <div className={styles.pinkDot}></div>
            <div>HOA</div>
          </div>
        </div>
        <div>{(props.data.hoa).toLocaleString('en-US', {style: "currency",
             currency: "USD",
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,})}</div>
      </div>

      <div>
        <div>
          <div>
            <div className={styles.purpleDot}></div>
            <div>{'Mortgage ins. & other'}</div>
          </div>
        </div>
        <div>{(props.data.other).toLocaleString('en-US', {style: "currency",
             currency: "USD",
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,})}</div>
      </div>

    </div>
    <div>
      <button>Get Pre-Qualified</button>
      <div>or</div>
      <div>See today's Mortgage rates</div>
    </div>
  </div>
);

export default Table;