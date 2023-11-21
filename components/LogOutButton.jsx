'use client'
import {signOut} from 'next-auth/react'


export default function NavbarButton(){

    return(
        <button onClick={()=>signOut()} className={`link hover:bg-primary font-bold py-2 px-4 rounded-tl-lg rounded-tr-lg inline-block mr-4`}>SignOut
        </button>
    )
}