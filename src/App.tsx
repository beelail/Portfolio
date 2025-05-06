import './App.css'
import './assets/style/Timeline.css'
import './assets/style/cantact.css'
import Header from './components/header/Header' 


function App() {
  return (
    <>
 
    <Header />

<main>
 <div className="Home"id="Home">
        
        <div className="name">ELAKREMI <br/>Bilel</div>
        
            <img src="/Portfolio/img/me.png" alt="Not Supported" className="MyImage"/>
        
    <div className="profile">
        <p>Dedicated and results-driven computer science graduate with honors degree,
             Specializing in Software Engineering and Information Systems 
             enthusiast in software development and programming.
              Searching for opportunities to solve real-world challenges 
              with the implementation of complex software solutions.  </p> 
    </div>
  </div>
    


        <div className="experience" id="Experience">


<h1>EXPERIENCE</h1>


<ul>
 <li style= {{'--accent-color' :'#41516C'   } as React.CSSProperties}     >
     <div className="date">2024</div>
     <div className="title">End of Studies internship <br/>
         Gpro-consulting | 10 Feb - 31 May 2024</div>
     <div className="descr">
         &#x2022; Responsible for the Development of a project management web application with friendly user interface.<br/>
         &#x2022; Technologies : ExpressJS,JavaScript,Spring Boot,PostgreSQL<br/>
         &#x2022; Software design pattern MVC (model view controller)<br/>
         &#x2022; Hands on experience with architecture RestFUL<br/>
         &#x2022; Development environments: Vscode,Intellj idea</div>
 </li>

 <li style={{'--accent-color':'#FBCA3E'}as React.CSSProperties}>
     <div className="date">2023</div>
     <div className="title">Summer internship <br/>
         Tunisie Telecom El Kef  | 1 July - 31 July 2023</div>
     <div className="descr">
         &#x2022; Responsible for the Development of website that manages a database with friendly user interface.<br/>
         &#x2022; Building model that connects with backend and frontend of the project.<br/>
         &#x2022; Technologies: PHP , MySQL , Ajax, JavaScript, Html-CSS .</div>
 </li>
</ul>
</div>

  


<div className="skills" id="Skills">
        <h1>Skills</h1>
         <div >
            <div className="skill-name" style={{ marginBottom: '2rem', fontSize: 'x-large' }}>Programming Languages</div>
            <div className="pl">

                    <div>
                        <img src="/Portfolio/img/skills/Java.png" alt="Not Supported"/>
                     </div>

                   <div>
                     <img src="/Portfolio/img/skills/c,c++.png" alt="Not Supported"/>
                   </div>
                   <div>
                     <img src="/Portfolio/img/skills/python.png" alt="Not Supported"/>
                   </div>
                    <div> 
                      <img src="/Portfolio/img/skills/javascript-logo-7539.png" alt="Not Supported"/>
                    </div>
                   <div> 
                    <img src="/Portfolio/img/skills/php.png" alt="Not Supported"/>
                    </div>
                
            </div>
         </div>
         <div >
            <div className="skill-name" style={{marginBottom: '2rem', marginTop: '2rem', fontSize: 'x-large'}}>Others</div>
            <div className="others">

                    <div>
                        <img src="/Portfolio/img/skills/spring-boot.png" alt="Not Supported"/>
                    </div>
                   <div>
                    <img src="/Portfolio/img/skills/clipart2423721.png" alt="Not Supported"/>
                   </div>
                   <div>
                    <img src="/Portfolio/img/skills/sql.png" alt="Not Supported"/>
                   </div>
                   <div> <img src="/Portfolio/img/skills/restful.png" alt="Not Supported"/>
                </div>
                   <div> <img src="/Portfolio/img/skills/MVC.png" alt="Not Supported"/></div>
                
            </div>
         </div>

    </div>



    <div className="skills" id="Projects">
        <h1>Github Projects</h1>
        
            <div className="pl">
                         <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}> <a style={{fontWeight: 'bold', textDecoration: 'none' ,color: 'black'}}
                           href=" https://github.com/beelail/WebScraping">Web Scraper</a>  </div>

                         <div style={{ display: 'flex' ,justifyContent: 'center', alignItems: 'center'}}> <a style={{fontWeight: 'bold', textDecoration: 'none', color: 'black'}}
                        href="https://github.com/beelail/vector-space-model-information-retrieval">Information retrieval (IR)</a>
                   </div>
                   <div style={{display: 'flex' ,justifyContent: 'center', alignItems: 'center' }}>
                   <a style={{ fontWeight: 'bold', textDecoration: 'none', color: 'black'}} href="https://github.com/beelail/snake-game">Tkinter game</a> </div>
                
                  
                <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
                    <a style={{fontWeight: 'bold', textDecoration: 'none' , color: 'black'}} href="https://github.com/beelail/CesarCypherAndBruteForceAttack">Cesar Cypher</a> </div>
                 </div>
            </div>












 <div className="cantact" id="contact">
      

<div className="info" >  
 <div className="info2">
  <h1 className="tit">Cantact me</h1>
  <p>Need to get in touch with me? Either fill out this form with your inquiry or you can call me on my phone.</p>
      <h3>Phone number</h3>
      Tunisia: +216 26 382 150
      <svg
       width="20px" height="20px" viewBox="0 0 32 32" version="1.1" 
       xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      fill="#000000">
      <g id="SVGRepo_bgCarrier" 
      strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
          <title>phone</title>
           <desc>Created with Sketch Beta.</desc>
            <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-258.000000, -309.000000)" fill="#000000"> 
              <path d="M289.073,313.433 L286.195,310.563 C285.401,309.77 284.112,309.77 283.317,310.563 L279,316.303 C278.341,317.274 278.206,318.38 279,319.173 L280.762,320.93 C279.456,322.68 277.888,324.588 276.123,326.348 C274.127,328.338 271.907,330.147 269.911,331.633 L268.208,329.936 C267.414,329.143 266.305,329.277 265.33,329.936 L259.574,334.241 C258.609,334.906 258.779,336.318 259.574,337.111 L262.452,339.98 C264.042,341.566 266.109,341.058 268.208,339.98 C268.208,339.98 274.561,336.424 280,331 C285.116,325.898 289.073,319.173 289.073,319.173 C289.898,316.91 290.663,315.018 289.073,313.433" id="phone" > </path> </g> </g> </g>
          </svg>
  </div> 

  <form
action="https://formspree.io/f/mjkbdpzq" method="POST">
<label>
    Your name:
    <input type="text" name="name"/>
  </label>
<label>
  Your email:
  <input type="email" name="email"/>
</label>
<label>
  Your message:
  <textarea name="message" rows={5}></textarea>
</label>

<button type="submit">Send</button>
</form>

</div>

                                      <div className="rights"><h4>All rights reserved &copy; 2024 Portfolio-Project</h4></div>
  </div>









  </main>
    </>
  )
}

export default App
