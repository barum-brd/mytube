import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../../components/Comments';

const Container = styled.div`
  display: flex;
  gap: 24px;
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
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Watch = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`/videos/find/${id}`);
      setVideo(res.data);
    };
    fetchVideo();
  }, [id]);

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
            width="100%"
            height="500px"
          ></iframe>
        </VideoWrapper>
        <Title>{video.title}</Title>
        <Details>
          <Info>{video.views} views • {new Date(video.createdAt).toLocaleDateString()}</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> {video.likes?.length}
            </Button>
            <Button>
              <ThumbDownOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Comments videoId={video._id} />
      </Content>
    </Container>
  );
};

export default Watch;