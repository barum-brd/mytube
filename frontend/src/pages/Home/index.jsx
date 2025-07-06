import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard';
import { mobile } from '../../responsive';

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 5;
`;

const Videos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  ${mobile({ padding: "0" })}
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      <Content>
        <Videos>
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </Videos>
      </Content>
    </Container>
  );
};

export default Home;