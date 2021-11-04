import React from 'react'
import {Button} from 'react-bootstrap'

export default function SignedOut({signIn}) {
    return (
        <div>
            
            <Button variant="outline-dark" onClick={signIn}>Giriş Yap</Button>
        </div>
    )
}
