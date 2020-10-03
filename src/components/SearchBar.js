import React from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import styled from "styled-components";

const SearchBar = ({ searchTerm, handleInputChange, handleFormSubmit }) => {
  return (
    <Form inline onSubmit={handleFormSubmit}>
      <FormGroup>
        <Label for="location" hidden>Location:</Label>
        <Input 
          type="type" 
          name="location" 
          id="location" 
          placeholder="Denver, CO OR 80516" 
          onChange= {handleInputChange}
          value= {searchTerm}
          />
      </FormGroup>
      <Button>Search</Button>
    </Form>
  )
}

export default SearchBar;