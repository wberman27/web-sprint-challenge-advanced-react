import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

describe("Sprint Challenge Tests", () =>{
    
    test("form header renders", () => {
        render(<CheckoutForm />)
        //grab checkout form header text
        const header = screen.queryByText(/checkout form/i)
        //check if header exists on the page
        expect(header).toBeInTheDocument();
    
    });
        
    test("form shows success message on submit with form details", () => {
        render(<CheckoutForm />)
        //grab each input but their label text
        const firstName = screen.getByLabelText(/first name:/i)
        const lastName = screen.getByLabelText(/last name:/i)
        const address = screen.getByLabelText(/address:/i)
        const city = screen.getByLabelText(/city:/i)
        const state = screen.getByLabelText(/state:/i)
        const zip = screen.getByLabelText(/zip:/i)

        const checkout = screen.getByRole("button")
        
        //simulate type and click into forms
        userEvent.type(firstName, "William")
        userEvent.type(lastName, "Berman")
        userEvent.type(address, "1234 East West Blvd")
        userEvent.type(city, "Detroit")
        userEvent.type(state, "Texas")
        userEvent.type(zip, "90210")
        userEvent.click(checkout)

        //grab success message
        const successMessage = screen.queryByText(/You have ordered some plants! Woo-hoo!/i)
        
        //check that name and address submitted correctly
        const name = screen.queryByText(/William Berman/i)
        const street = screen.queryByText(/1234 East West Blvd/i)
        const region = screen.queryByText(/Detroit, Texas 90210/i)
        
        //expect these to exist on the page
        expect(successMessage).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(street).toBeInTheDocument();
        expect(region).toBeInTheDocument();
        

    });

})
