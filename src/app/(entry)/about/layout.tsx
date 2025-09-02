import { ReactNode } from "react";

export default function About ({
  children,
  company1,
  company2
}: {
  children: ReactNode,
  company1: ReactNode,
  company2: ReactNode
}) {
  return (
    <div className="P-about">
      {children}
      {company1}
      {company2}
    </div>
  )

}