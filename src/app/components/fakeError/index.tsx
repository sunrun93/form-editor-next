'use client'

import { Button } from "antd"
import { useState } from "react"

export default function FakeError({
  message = 'this is a fake error'
}: {
  message?: string
}) {
  const [error, setError] = useState(false)

  if (error) {
    throw new Error(message)
  }

  return <Button type="primary" onClick={() => setError(true)}>Mock Error</Button>
}