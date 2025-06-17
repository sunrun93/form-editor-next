import { Result } from "antd";
import styles from './not-found.module.scss';
// server side component

export default function NotFound () {
  return (
    <div className={styles['P-not-found']}>
      <Result status="404" title="404" subTitle="Page not found!"></Result>
    </div>
  )
}