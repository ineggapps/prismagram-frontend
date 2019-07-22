import React from "react";
import styled from "styled-components";
import FatText from "../FatText";
import { throwStatement } from "@babel/types";
import mapAgeCleaner from "map-age-cleaner";
import Avatar from "../Avatar";
import { HeartEmpty, HeartFull, Comment } from "./../Icons";

const Post = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 12px;
`;

const Files = styled.div``;

const File = styled.img`
  width: 100%;
  max-width: 100%;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
`;

export default ({ user: { username, avatar }, location, files, isLiked, likeCount, createdAt }) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <FatText text={username} />
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>{files && files.map(file => <File key={file.id} id={file.id} src={file.url} />)}</Files>
    <Meta>
      <Buttons>
        <Button>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
        <Button>
          <Comment />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
      <Timestamp>{createdAt}</Timestamp>
    </Meta>
  </Post>
);
