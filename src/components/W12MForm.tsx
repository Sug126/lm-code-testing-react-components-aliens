import { ChangeEvent, useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';



const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('humans')




	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={function (e: ChangeEvent<HTMLInputElement>): void {
				throw new Error('Function not implemented.');
			} }/>
			
		</section>
	);
}

export default W12MForm
