import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FatText from "./../../Components/FatText";
import Loader from "./../../Components/Loader";
import UserCard from "./../../Components/UserCard";

const Wrapper = styled.div`
  height: 50vh;
`;

const Section = styled.div``;

const SearchPresenter = ({ searchTerm, loading, data }) => {
  if (searchTerm === undefined) {
    return (
      <Wrapper> {searchTerm === undefined && <FatText text={"Search for something"} />}</Wrapper>
    );
  } else if (loading === true) {
    return <Wrapper>{loading && <Loader />}</Wrapper>;
  } else if ((data && data.searchUser) || data.searchPost) {
    return (
      <Wrapper>
        <Section>
          {data.searchUser.length === 0 ? (
            <FatText text="No users found" />
          ) : (
            data.searchUser.map(user => (
              <UserCard
                username={user.username}
                isFollowing={user.isFollowing}
                url={user.url}
                isSelf={user.isSelf}
              />
            ))
          )}
        </Section>
        <Section>
          {data.searchPost.length === 0 ? (
            <FatText text={"No posts found."} />
          ) : (
            data.searchPost.map(post => null)
          )}
        </Section>
      </Wrapper>
    );
  }
};

SearchPresenter.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool
};

export default SearchPresenter;