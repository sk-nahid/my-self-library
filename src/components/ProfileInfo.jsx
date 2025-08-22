"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

export default function ProfileInfo() {

    const { data: session } = useSession();
    if (!session) {
        return <p>no session data found</p>
    }
  return (
      <div>{ session.user.email}</div>
  )
}
