import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react'
import React from 'react'

function Authentication() {
  return (
    <div className='sign-in-container'>
        <SignedOut>
            <SignInButton/>
            <SignUpButton />
        </SignedOut>

        <SignedIn>
            <UserButton/>
        </SignedIn>
    </div>
  )
}

export default Authentication