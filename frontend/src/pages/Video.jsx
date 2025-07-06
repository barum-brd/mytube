import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px;
  background-color: #181818;
  color: white;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: #aaaaaa;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: white;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid #373737;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Video = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`/api/videos/find/${id}`);
      setVideo(res.data);
    };
    fetchVideo();
  }, [id]);

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <video
            src={video.videoUrl}
            controls
            style={{ width: '100%', maxHeight: '720px' }}
          />
        </VideoWrapper>
        <Title>{video.title}</Title>
        <Details>
          <Info>{video.views} views • {new Date(video.createdAt).toLocaleDateString()}</Info>
          <Buttons>
            <Button>
              <span>Like</span>
            </Button>
            <Button>
              <span>Dislike</span>
            </Button>
            <Button>
              <span>Share</span>
            </Button>
            <Button>
              <span>Save</span>
            </Button>
          </Buttons>
        </Details>
        <Hr />
      </Content>
      <Recommendation>
        {/* Recommended videos would go here */}
      </Recommendation>
    </Container>
  );
};

export default Video;