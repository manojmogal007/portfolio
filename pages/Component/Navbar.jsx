import React from 'react'
import Link from 'next/link'
import { data } from '../data'
const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-between',height:'60px',backgroundColor:'black',color:'white'}}>
        <div >
            <Link href='/' >Manoj Mogal</Link>
            <Link href='/project' ><button>Project</button></Link>
            <Link href='/experience' ><button>Experience</button></Link>
        </div>
        <div style={{marginRight:'50px'}}>
            <img src={data.avatar_url} alt="avatar" style={{height:'80%',borderRadius:'50%'}} />
        </div>
    </div>
  )
}

export default Navbar