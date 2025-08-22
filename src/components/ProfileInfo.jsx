"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const ProfileInfo = () => {
    const session = useSession()
    return (
        <div>
            <p>{ JSON.stringify(session)}</p>
        </div>
    );
};

export default ProfileInfo;