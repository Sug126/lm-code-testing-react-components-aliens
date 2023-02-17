import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIsTwoPlusTwo from './WhatIsTwoPlusTwo';
import ReasonForSparing from './ReasonForSparing';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('')
	const [planetName, setPlanetName] = useState<string>('')
	const [numberOfBeings, setNumberOfBeings] = useState<number>(0);
	const [answer, setAnswer] = useState<string>('4');
	const [reasonForSparing, setReasonForSparing] = useState<string>('');
	
	
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form>
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(event : any) => setSpeciesName(event.target.value)}/>
			<PlanetName planetName={planetName} onChangePlanetName={(event : any) => setPlanetName(event.target.value)}/>
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(event : any) => setNumberOfBeings(event.target.value)}/>
			<WhatIsTwoPlusTwo whatIsTwoPlusTwo={answer} onChangeWhatIsTwoPlusTwo={(event : any) => setAnswer(event.target.value)}/>
			<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(event : any) => setReasonForSparing(event.target.value)}/>
			
			</form>
		</section>
	);
};

export default W12MForm;