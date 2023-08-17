import Card from '../UI/Card'

import React from 'react'

const Trainer = ({image, name, job, socials}) => {
    return (
        <Card className='trainer'>
            <div className="trainer__img">
                <img src={image} alt="" />
            </div>
            <h3>{name}</h3>
            <p>{job}</p>
            <div className='trainer__socials'>
                {socials.map(({ icon, link }, index) => (
                    <a key={index} href={link}>{icon}</a>
                ))}
            </div>




        </Card>
    )
}

export default Trainer