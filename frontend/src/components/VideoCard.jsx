import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: #aaaaaa;
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: #aaaaaa;
`;

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: 'none' }}>
      <Container>
        <Image src={video.imgUrl} />
        <Details>
          <ChannelImage src={video.imgUrl} />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>MyTube Channel</ChannelName>
            <Info>{video.views} views • {new Date(video.createdAt).toLocaleDateString()}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default VideoCard;