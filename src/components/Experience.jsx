import { EXPERIENCES } from '../data';
import Achievements from './Achievements';
import Section from './Section';
import TabButton from './TabButton';
import { useState } from 'react'

export default function Experience () {
	const [selectedExperience, setSelectedExperience] = useState(0)

  function handleSelect(selected) {
    setSelectedExperience(selected);
    console.log(EXPERIENCES[selected].company);
  }

	return (
		<>
			<Section id="experience" title="Experiences">
			<div className="content-tab">
				<menu className="tab-menu">
					{EXPERIENCES.map((experience, index) => (
						<TabButton 
							key={index}
							onClick={() => handleSelect(index)} 
							company={experience.company}
							isSelected={selectedExperience === index}
						/>
					))}
				</menu>
				<Achievements {...EXPERIENCES[selectedExperience]}/>
			</div>
			</Section>
		</>
	)
}
