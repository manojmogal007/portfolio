import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { data } from './data'
import { repo } from './repo'
export default function Home() {
  console.log(repo.items)
  return (
    <div className={styles.container}>
      <Head>
        <title>Manoj portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{display:'flex'}}>
        <div style={{width:'30%',border:'1px solid teal'}}>
          <div style={{border:'1px solid red'}} >
            <img src={data.avatar_url} style={{width:'45%',margin:'auto',borderRadius:'50%'}}></img>
            <p>{data.login}</p>
            <p>Full-stack developer | ReactJS | HTML | Javascript | CSS | Chakra-UI</p>
            <a href='https://drive.google.com/file/d/1lc9TtM077mUGi0uSnV7u60tNXNxYhqM9/view?usp=share_link'><button style={{margin:'15px'}}>Resume</button></a>
            <a href={data.html_url} ><button>Follow</button></a>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',marginTop:'10px'}}>
            <div style={{border:'1px solid black',borderRadius:'3px',margin:'2px'}}>ReactJS</div>
            <div style={{border:'1px solid black',borderRadius:'3px',margin:'2px'}}>Javascript</div>
            <div style={{border:'1px solid black',borderRadius:'3px',margin:'2px'}}>HTML</div>
            <div style={{border:'1px solid black',borderRadius:'3px',margin:'2px'}}>CSS</div>
            
            <div style={{border:'1px solid black',borderRadius:'3px',margin:'2px'}}>Git</div>
            <div style={{border:'1px solid black',borderRadius:'3px',margin:'2px'}}>Typescript</div>
            {/* <div style={{border:'1px solid black',borderRadius:'3px',margin:'2px'}}>ReactJS</div> */}
          </div>
        </div>
        {/* ------------------------------------------------------ */}
        <div style={{border:'1px solid yellow',width:'70%'}}>
            <div style={{width:'200px',margin:'auto'}}><h2 >Projects</h2></div>
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

        </div>
      </div>
      
    </div>
  )
}



