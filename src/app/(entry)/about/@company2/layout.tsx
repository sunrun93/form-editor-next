import { Card } from "antd";
import { ReactNode } from "react";

export default function Company2 ({children}: {children: ReactNode}) {
  return (
    <Card className="M-company1">
      Company B {children}
    </Card>
  )
}