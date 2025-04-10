Feature: CP01 - Validate free trial form

    Background: Validate the form with valid credentials

        Given the user navigates to the main page
        And click the free trial button 

        Scenario: 1- completed the form with vlaid credentials
            When enter valid credentials
            Then the website should display the free trial form module
        
        
        # Scenario: 2- the user login 
            Given user enter to the login
            When enter valid credentials in login
        #     Then the website should display the products module

        # Scenario: 3- the user create register
                Given user click in create register
                When when user enter valid dates in create register
                # Then the website should display the message create register

        # Scenario: 4- the user update register
                    # Given user click in update register
                    # When when user enter valid dates in update register
        #             Then the website should display the products module

        # Scenario: 5- the user delete register
        #             Given user enter to the login
        #             When enter valid credentials
        #             Then the website should display the products module

    
    