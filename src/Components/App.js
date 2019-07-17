import React from "react";
import { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from "react-apollo-hooks";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Router from "./Router";
import Theme from "../Styles/Theme";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);
  console.log(isLoggedIn);
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router isLoggedIn={isLoggedIn} />
      </>
    </ThemeProvider>
  );
};
