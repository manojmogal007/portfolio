import React from 'react'
import { repo } from './repo'
const project = () => {
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr'}}>
                  {
                    repo.items.map((el)=>(
                      <a key={el.id} href={el.html_url}><div style={{border:'1px solid grey',borderRadius:'7px',margin:'8px',padding:'10px'}}>
                          <h3>{el.full_name}</h3>
                          <div style={{display:'flex',justifyContent:'space-between'}}>
                          <h4>☆ {el.stargazers_count}</h4>
                          <h4>{el.language}</h4>
                          </div>
                      </div></a>
                    ))
                  }
            </div>
  )
}

export default project