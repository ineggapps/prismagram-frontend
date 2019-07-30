import React from "react";
import styled from "styled-components";
import Avatar from "../../Components/Avatar";
import Loader from "../../Components/Loader";

const Wrapper = styled.div`
  min-height: 60vh;
`;

const Header = styled.div``;

const HeaderColumn = styled.div``;

export default ({ data, loading }) => {
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else {
    console.log(data);
    const {
      seeUser: {
        username,
        avatar,
        fullName,
        isFollowing,
        isSelf,
        bio,
        followingCount,
        followersCount,
        postsCount,
        posts
      }
    } = data;
    return (
      <>
        <Header>
          <HeaderColumn>
            <Avatar size="lg" url={avatar} />
          </HeaderColumn>
        </Header>
      </>
    );
  }
  return null;
};
