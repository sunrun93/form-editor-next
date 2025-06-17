'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import '@ant-design/v5-patch-for-react-19'
// 通过provider确保两个插件只在客户端运行，‘use client’是client component标志符，告诉 Next.js 这个组件只能在浏览器端（客户端）运行。Server Component （src/app/layout.tsx）中不能加 'use client'，否则就会报错

export default function AntdClientProvider({
  children,
}: {
  children: React.ReactNode
}){
  return <AntdRegistry>{children}</AntdRegistry>
}