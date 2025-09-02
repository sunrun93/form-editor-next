import { App, Layout } from "antd";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Sider from "../components/sider";

async function privateRoute () {
  const cookieStore = await cookies();

  const uid = cookieStore.get('uid')?.value
  const token = cookieStore.get('token')?.value

  if (!uid || !token) {
  redirect('/login')
  }
}

export default async function Entry({children}:
  Readonly<{
    children: React.ReactNode
  }>
) {
  await privateRoute()
  return (
    <App className="G-fullpage">
      <Layout>
        <div style={{height:60,background:'#bae0ff' }}>Header区域</div>
        <Layout style={{flexDirection:'row',overflow:'hidden',flex:1,}}>
          <Sider/>
          
          <div style={{overflow: 'auto', flex: 1 }}>{children}</div>
          </Layout>
      </Layout>
    </App>
  )

}