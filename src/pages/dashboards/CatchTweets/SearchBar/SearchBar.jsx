import { Input } from "@mui/material";
import React from "react";
import search from "../Data/search";
import { Background, Container, SubContainer, Botton } from "./SearchBarStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    updateJson(e.target.value);
  };

  const updateJson = (value) => {
    search.search = value;
  };

  return (
    <Background>
      <Container>
          <Input
            placeholder="Search"
            inputProps={{ "aria-label": "description" }}
            onChange={handleSearch}
            style={{'width':'100%'}}
          />
          <SubContainer>
            <Botton variant="contained">
                <FontAwesomeIcon icon={faSearch} />
            </Botton>
          </SubContainer>
        </Container>
    </Background>
  );
};

export default SearchBar;
