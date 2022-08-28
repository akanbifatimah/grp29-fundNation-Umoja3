import styles from "./card.module.scss";
import React from 'react'

const index = ({
  project_name,
  raise_amount,
  amount_raised,
  owner,
  project_desc
}: {
  raise_amount: number;
  project_name: string;
  project_desc: string;
  amount_raised: number;
  owner: string;
}) => {
  return (
    <div className={styles.container}>
      <div>{project_name}</div>
    </div>
  );
};

export default index