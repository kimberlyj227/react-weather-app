import React from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import styled from "styled-components";

const SearchWrapper = styled.div`
  padding: 10px;
 .btn {
   background-color: #4192D9;
   border: none;
   margin-left: 20px;
 }


`

const SearchBar = ({ searchTerm, handleInputChange, handleFormSubmit }) => {
  return (
    <SearchWrapper>
      <Form inline onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label for="location" hidden>Location:</Label>
          <Input 
            type="type" 
            name="location" 
            id="location" 
            placeholder="Denver, CO" 
            onChange= {handleInputChange}
            value= {searchTerm}
            />
        </FormGroup>
        <Button>Search</Button>
      </Form>
    </SearchWrapper>
  )
}

export default SearchBar;