import React from 'react';
import Navbar from '../components/Navbar';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'

const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" centerContent>
        <Stack spacing={8} textAlign="center">
          <Heading fontSize="4xl">Welcome to AlgoQuiz - Master DSA with MCQ Quizzes!</Heading>
          <Text>
            Unlock the world of Data Structures and Algorithms through engaging Multiple-Choice-Question (MCQ) quizzes on AlgoQuiz. Whether you're a coding novice or an experienced programmer, our platform is designed to make learning DSA fun and effective.
          </Text>

          <Box textAlign="left">
            <Heading fontSize="2xl" mt={8} mb={4}>Why AlgoQuiz?</Heading>
            <Text>
              <strong>Interactive Learning:</strong> Dive into a world of interactive quizzes that challenge and reinforce your understanding of key Data Structures and Algorithms concepts.
            </Text>
            <Text>
              <strong>MCQ Format:</strong> Our quizzes follow a multiple-choice format, providing a dynamic and efficient way to assess and enhance your knowledge.
            </Text>
            <Text>
              <strong>Varied Difficulty Levels:</strong> From easy warm-ups to brain-teasing challenges, we've got MCQs for every proficiency level. Progress at your own pace and level up your skills.
            </Text>
            <Text>
              <strong>Detailed Explanations:</strong> Receive detailed explanations for each question immediately after submission. Understand the reasoning behind correct and incorrect answers.
            </Text>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
