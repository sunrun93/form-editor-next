import { Card } from "antd";
import { ReactNode } from "react";

export default function Company1 ({children}: {children: ReactNode}) {
  return (
    <Card className="M-company1">
      Company A {children}
    </Card>
  )
}