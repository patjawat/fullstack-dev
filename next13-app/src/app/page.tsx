import * as React from 'react';
import { useSession } from "next-auth/react"
type Props = {};

export default function Home({}:Props) {
  const { data: session } = useSession()

  return <div>Hone</div>
}
