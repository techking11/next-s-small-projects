'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


function Dashboard() {
  const router = useRouter();
  const isAuthenticated = false;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('dashboard/login')
    }
  }, [isAuthenticated, router])

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  )
}

export default Dashboard
