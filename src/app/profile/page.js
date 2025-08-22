"use clint"
import ProfileInfo from '@/components/ProfileInfo'
import { useSession } from 'next-auth/react'
import React from 'react'




export default function page() {


    return (
        <div>
            <div>page</div>
            <ProfileInfo></ProfileInfo>
        </div>
    )
}
