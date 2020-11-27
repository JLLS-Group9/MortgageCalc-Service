import React from 'react';
import styles from '../style.css';

const FormLoanType = (props) => (
  <div className={styles.forms}>
  <form className={styles.formsTwo}>
    <div className={styles.ff1}>
      <label className={styles.formHeader} for="loan type">Loan Type</label>
    </div>
    <div className={styles.loanContainer}>
      <div className={styles.loanBox}>

          <div className={styles.loanDefault}>
            {props.data.loan_type}
          </div>
          <div className={styles.loanCarrot}>
            <svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z" fill="#869099"></path>
            </svg>
          </div>
      </div>

        <select className={styles.loan}
          onChange={props.handleInput}
          name="loan_type">
          <option value="30-year fixed">30-year fixed</option>
          <option value="20-year fixed">20-year fixed</option>
          <option value="15-year fixed">15-year fixed</option>
          <option value="10-year fixed">10-year fixed</option>
          <option value="FHA 30-year fixed">FHA 30-year fixed</option>
          <option value="FHA 15-year fixed">FHA 15-year fixed</option>
          <option value="VA 30-year fixed">VA 30-year fixed</option>
          <option value="VA 15-year fixed">VA 15-year fixed</option>
        </select>

    </div>
  </form>
</div>
)

export default FormLoanType