import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIsTwoPlusTwo from './WhatIsTwoPlusTwo';
import ReasonForSparing from './ReasonForSparing';


	interface formProps {
		saveData ?: (data: any) => void;
	}



const W12MForm: React.FC<formProps> = ({ saveData }) => {
	const [speciesName, setSpeciesName] = useState<string>('')
	const [planetName, setPlanetName] = useState<string>('')
	const [numberOfBeings, setNumberOfBeings] = useState<string>('');
	const [answer, setAnswer] = useState<string>('4');
	const [reasonForSparing, setReasonForSparing] = useState<string>('');
	const [formData, setFormData] = useState<string>('');
	let isSubmitted : boolean = false

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		alert("Form submitted - may your planet be spared!");
		setFormData(`Your answers were: ${speciesName}, ${planetName}, ${numberOfBeings}, ${answer}, ${reasonForSparing}. Your planet will not be spared! Resistance is useless!`);
		saveData({
			speciesName,
			planetName,
			numberOfBeings,
			answer,
			reasonForSparing
		});
		isSubmitted = true;
		console.log(`This form has been submitted: ${isSubmitted}`);
	  }
	


	return (
		<section >
			<W12MHeader />
			<form  data-testid="form" onSubmit={submitForm}>
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(event : any) => setSpeciesName(event.target.value)}/>
			<PlanetName planetName={planetName} onChangePlanetName={(event : any) => setPlanetName(event.target.value)}/>
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(event : any) => setNumberOfBeings(event.target.value)}/>
			<WhatIsTwoPlusTwo whatIsTwoPlusTwo={answer} onChangeWhatIsTwoPlusTwo={(event : any) => setAnswer(event.target.value)}/>
			<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(event : any) => setReasonForSparing(event.target.value)}/>
			<button id="submit" type="submit" data-testid="submit">Submit</button>
			<p>{formData}</p>
			</form>
		</section>
	);

	}
export default W12MForm