import React from 'react';

const Team = () => {

const teams = [
  {id: 1, name: 'Peg Legge', profession: 'CEO', image: 'https://i.ibb.co/WWV6Rw4/Group-13.png'},
  {id: 2, name: 'Richard Guerra', profession: 'CTO', image: 'https://i.ibb.co/ykdWf9q/Group-21.png'},
  {id: 3, name: 'Alexandra Stolz', profession: 'DESIGNER', image: 'https://i.ibb.co/FJcNHRY/Group-18.png'},
  {id: 4, name: 'Janet Bray', profession: 'DEVELOPERS', image: 'https://i.ibb.co/PTn1Ywm/Group-26.png'}
]

  return(
    <>
    <div className="container">
      <div className="team">
        <div className="team__text">
        <div className="team__title">TEAM</div>
        <h1 className="team__text-main">Our Talents</h1>
        <div className="team__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tenetur provident.</div>
        </div>
        <div className="team__list">

          {teams.map(person => 
          <div className="team__person">
            <div className="team__person--photo">
              <img src={person.image} alt=""/>
            </div>
            <div className="team__person--name">
              {person.name}
            </div>
            <div className="team__person--profession">
              {person.profession}
            </div>
          </div>
          )}
        </div>
        <button className="team__button">View Team</button>
      </div>
    </div>
    </>
  )
}

export default Team;