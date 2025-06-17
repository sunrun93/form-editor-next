'use client'

import { apiReqs } from "@/api/client"
import { Button, Form, Input } from "antd"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { KeyOutlined, UserOutlined} from "@ant-design/icons"
export default function Login () {

  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const loginSubmit = (values: {account: string; password: string}) => {
      setLoading(true)
      const data = {
        account: values.account,
        password: values.password
      }

      apiReqs.signIn({
        data,
        success: () => {
          router.push('/')
        }
      })

  }

  return (
    <div className="P-login">
      <h3>Welcome!</h3>
      <p className="subtext">Please Login</p>
      <Form onFinish={loginSubmit}>
        <Form.Item
        name="account"
        rules={[
          {required: true, message: 'please provide your account'}
        ]}>
          <Input
          size="large"
          placeholder="please provide your account"
          prefix={<UserOutlined/>}
          autoComplete="account"
          >
          </Input>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required:
              true
            }
          ]}>
            <Input.Password
            size="large"
            placeholder="please provide your password"
            prefix={<KeyOutlined/>}
            autoComplete="password"
            />

        </Form.Item>
        <Form.Item>
          <Button
          type="primary"
          htmlType="submit"
          size="large"
          block={true}
          loading={loading}
          ></Button>
        </Form.Item>


      </Form>
      
    </div>
)
  
}