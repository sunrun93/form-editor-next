'use client' 
//异常页面必须是客户端组件
//global error 不会使用layout.tsx， 因此需要完整的HTML结构
import { Button, Result } from 'antd'
import styles from './global-error.module.scss'


export default function GlobalError({
  error,
  reset
}:{
  error: Error & {digest?: string}
  reset: () => {}
}){
  return (
    <html>
      <body>
        <div className={styles['P-global-error']}>
          <Result status="500" title="Server Error..." subTitle={error.message} extra={
            <Button type="primary" onClick={() => reset()}>再试一次</Button>
          }></Result>
        </div>
      </body>
    </html>
  )
}