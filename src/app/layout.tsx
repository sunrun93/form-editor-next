// layout.tsx 是框架和新的服务端组件

import "@common/styles/frame.scss";
import type { Metadata } from "next";
import AntdClientProvider from "./antdClientProvider";


export const metadata: Metadata = {
  title: "Form Layout Editor",
  description: "Dyncmic form generator",
};

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdClientProvider>{children}</AntdClientProvider>
        {/* 插槽方式，children仍然作为服务端组件加载，AntdClientProvider作为客户端组件加载 */}
        {/* https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#interleaving-server-and-client-components */}
      </body>
    </html>
  );
}
