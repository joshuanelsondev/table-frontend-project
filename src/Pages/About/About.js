import joshua from"../About/Joshua.jpeg"
import lakisha from"../About/Lakisha.jpeg"
import florence from"../About/florence.png"
      export default function Profile(){
  
    const teamMembers=[
     
      {
      name:"Joshua Nelson ",
      url:"https://github.com/joshuanelsondev",
      linkedin:"https://www.linkedin.com/in/joshuanelsondev/",
      image:joshua,
      about:"I am  currently a fellow in pursuit studying Full Stack Web developing. Pursuit is a 12-months, Google funded software engineering fellowship with a 9% acceptance rate in graduates getting hired by leading companies such as Pinterest, JP Morgan and Spotify"
      
      },
    
      {
      name:"Lakisha Trusty",
      url:"https://github.com/daprincessanime",
      linkedin:"https://www.linkedin.com/in/lakisha-trusty-101526118/",
      image:lakisha,
      about:"I am  currently a fellow in pursuit studying Full Stack Web developing. Pursuit is a 12-months, Google funded software engineering fellowship with a 9% acceptance rate in graduates getting hired by leading companies such as Pinterest, JP Morgan and Spotify"
      
    },
    {
      name:"Florence Ernestina Osei",
      url:"https://github.com/pursuit-florence",
      linkedin:"https://www.linkedin.com/in/florence-ernestina-osei/",
      image:florence,
      about:"I am a certified IT support specialist, who is currently a fellow in pursuit studying Full Stack Web developing. Pursuit is a 12-months, Google funded software engineering fellowship with a 9% acceptance rate in graduates getting hired by leading companies such as Pinterest, JP Morgan and Spotify"
      
    }
    
    ]
    
    return(
            <div className="members">
              <h1 className="project-heading">A Brief Description of our Project</h1>
              <br></br>
              <p className="project">
              The theme of the application is centered around potluck, where users can add their own dishes to the menu. The application is named "The Table" and it will have a database containing pre-existing food items. Users will be able to add their own dishes to the menu and the database. Our website allow users to view the pre-existing food items, add new dishes, update the dishes and delete them. The purpose of the application is to provide a platform for potluck events where people can easily view, add and manage dishes to the menu. We hope you love and enjoy it 
                </p>
                <br></br>
               <h1>The Team</h1>
            <ul>
              {teamMembers.map((member, index) => 
              <li key={index} className="mem">
                
                <div className="member-image"><span className="overlay">
                <img src={member.image} alt='' className="card-img"/></span>
                
                </div>
                
                <div className="name">
                  <h2 className="member-name">{member.name}</h2></div>
                    <p className="details">
                      <br></br>
                      {member.about}</p>
                  <a href={member.url} target="_blank">
                <br></br>
                  Github</a><br></br>
                  <a href={member.linkedin} target="_blank">
                 
                  linkedin</a><br></br>
               
                </li>
              
                )
              }
            </ul>
            
            <div>
            </div>
          </div>
    
          
    )
    }