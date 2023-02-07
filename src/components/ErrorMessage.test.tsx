import { ErrorMessage,ErrorMessageProps } from "./ErrorMessage";
import {render, screen} from '@testing-library/react';

describe("ErrorMessage",()=>{
   
 it('when component render , SpeciesName input error message text',()=>{
    const errorMessage :ErrorMessageProps ={
        errorMessage :"Character should not be less than 3 and not more than 23 "
    }
     render(<ErrorMessage {...errorMessage}/>);
     expect(screen.getByText(/Character should not be less than 3 and not more than 2/i)).toBeInTheDocument();
})

})