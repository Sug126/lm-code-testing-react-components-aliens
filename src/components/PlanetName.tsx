import { useState } from "react";
import ErrorMessage from "./ErrorMessage";


interface PlanetNameProps{
    planetName:string,
    onChangePlanetName:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName }) =>  {
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');
    
  const validate : (value : string) => string | undefined = (value) => {
    const regex = /^[a-zA-Z0-9]{2,49}$/;
    if (regex.test(value) === false) {
      return "Error: Planet Name must be between 2 and 49 characters and can only contain letters and numbers.";
    }
  }

    return (
      <>
          <label htmlFor='planetName'>Planet Name</label>
          <input type='text' 
              placeholder="Enter a planet name" 
              value={planetName} 
              onChange={(e) => {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                onChangePlanetName(e);
                }
              } 
            />
            <ErrorMessage errorMessage={errorMessage}/>
      </> );
  };
  
  export default PlanetName;