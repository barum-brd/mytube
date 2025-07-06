import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  background-color: #181818;
`;

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get('/api/videos/random');
      setVideos(res.data);
    };
    fetchVideos();
  }, []);

  return (
    <Container>
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;