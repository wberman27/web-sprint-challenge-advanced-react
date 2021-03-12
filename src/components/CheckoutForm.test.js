import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

describe("Sprint Challenge Tests", () =>{
    
    test("form header renders", () => {
        render(<CheckoutForm />)
        const header = screen.queryByText(/checkout form/i)
        expect(header).toBeInTheDocument();
    
    
    });
        
    test("form shows success message on submit with form details", () => {
        render(<CheckoutForm />)
    
    });

})
