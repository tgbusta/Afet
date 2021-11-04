import React from 'react'
import {Button} from 'react-bootstrap'
import { FaBox } from "react-icons/fa";

export default function SignedOut({signIn}) {
    return (
        <div>
            
            <Button variant="outline-dark" onClick={signIn} className="mx-2">Giriş Yap</Button>
            
            <Button variant="outline-info"><span className="mx-2">Bağış Kutusu</span><FaBox size="1em"/></Button>
            
        </div>
    )
}
