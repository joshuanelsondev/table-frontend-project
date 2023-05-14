import { useState } from "react";
import joshua from"../About/Joshua.jpeg";
import lakisha from"../About/Lakisha.jpeg";
import florence from"../About/florence.png";


const teamMembers = [
  {
    name: "Joshua Nelson ",
    url: "https://github.com/joshuanelsondev",
    linkedin: "https://www.linkedin.com/in/joshuanelsondev/",
    image: joshua,
    about:
      "I am a full stack web developer fellow at Pursuit, an intensive 12 - month software engineering fellowship with a 9% acceptance rate. I am pursuing software engineering because I have a passion for problem-solving, creativity, and engineering. I look to transform the lives of others in underrepresented communities through technology, creativity, and fellowship. Being genuine and open-minded has allowed me to connect with people across all cultures. Outside of coding you can find me playing saxophone in venues throughout New York City, teaching music, as well as working to become fluent in Spanish.",
  },

  {
    name: "Lakisha Trusty",
    url: "https://github.com/daprincessanime",
    linkedin: "https://www.linkedin.com/in/lakisha-trusty-101526118/",
    image: lakisha,
    about:
      "I am  currently a fellow in pursuit studying Full Stack Web developing. Pursuit is a 12-months, Google funded software engineering fellowship with a 9% acceptance rate in graduates getting hired by leading companies such as Pinterest, JP Morgan and Spotify",
  },
  {
    name: "Florence Ernestina Osei",
    url: "https://github.com/pursuit-florence",
    linkedin: "https://www.linkedin.com/in/florence-ernestina-osei/",
    image: florence,
    about:
      "I am a certified IT support specialist, who is currently a fellow in pursuit studying Full Stack Web developing. Pursuit is a 12-months, Google funded software engineering fellowship with a 9% acceptance rate in graduates getting hired by leading companies such as Pinterest, JP Morgan and Spotify",
  },
];

export default function Profile(){
    const [flipCard, setFlipCard] = useState(false);

    const handleFlip = () => {
      setFlipCard(!flipCard);
    }
    
    return (
      <div>
        <div className="grid grid-cols-3">
          {!flipCard && (
            <div
              onClick={handleFlip}
              className="bg-primary h-40 w-40 flex items-center text-center mt-8 m-8 rounded-full cursor-pointer hover:outline outline-2 outline-white"
            >
              <h1 className="text-white font-bold ">
                A Brief Description of The Table
              </h1>
            </div>
          )}

          {flipCard && (
            <div className="col-start-2 col-span-2 w-5/6">
              <p className="bg-primary rounded-3xl p-8 mt-4 mr-8 border-2 border-white leading-loose">
                The Table is based on the idea of a potluck, a meal or party to
                which each of the guests contributes a dish. The Table allows users to add
                their own plate to the table. Users can view the
                pre-existing food items, add new dishes, update the dishes, and
                delete them. The purpose of The Table is to provide a
                platform for potluck events where people can easily view, add
                and manage dishes. We hope you enjoy it!
                <br />
                <button
                  onClick={handleFlip}
                  className="text-white font-bold hover:text-secondary"
                >{`< back`}</button>
              </p>
            </div>
          )}
        </div>

        <h2 className="text-primary text-4xl font-bold mt-8 ml-8">The Team</h2>
        <ul className="flex flex-col gap-y-8">
          {teamMembers.map((member, index) => (
            <li key={index} className="grid grid-cols-2 pb-8">
              <div className="flex justify-center mt-8">
                <img
                  src={member.image}
                  alt=""
                  className="rounded-full shadow-2xl shadow-primary border-2 border-primary"
                />
              </div>
              <div className="flex flex-col justify-evenly h-5/6 w-5/6">
                <h2 className="text-primary text-2xl font-bold ">
                  {member.name}
                </h2>
                <p className="leading-loose ">{member.about}</p>
                <div className="flex gap-8 justify-end">
                  <a
                    href={member.url}
                    target="_blank"
                    className="text-primary font-semibold hover:underline underline-offset-4"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="text-primary font-semibold hover:underline underline-offset-4"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div></div>
      </div>
    );
}