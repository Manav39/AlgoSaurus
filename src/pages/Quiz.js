import React, { useState } from 'react';
import {
  Container,
  Heading,
  Text,
  Button,
  Box,
  VStack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: 'What is the time complexity of push and pop operations in a stack implemented using an array of size N?',
      options: ['O(N)', 'O(1)', 'O(log N)', 'O(N^2)'],
      correctAnswer: 'O(1)',
    },
    {
      id: 2,
      question: 'In a singly linked list, what is the time complexity to insert an element at the end?',
      options: ['O(1)', 'O(log N)', 'O(N)', 'O(N^2)'],
      correctAnswer: 'O(N)',
    },
  ];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    const currentQuestion = questions.find((q) => q.id === 1); 
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
  };

  return (
    <Container maxW="container.md" centerContent>
      <Box textAlign="center">
        <Heading mb={4}>Quiz Time!</Heading>
        <Text fontSize="lg" mb={4}>
          Answer the following questions:
        </Text>

        {questions.map((q) => (
          <VStack key={q.id} align="start" mb={4}>
            <Heading fontSize="md">{q.question}</Heading>
            <RadioGroup onChange={handleOptionChange} value={selectedOption}>
              {q.options.map((option) => (
                <Radio key={option} value={option}>
                  {option}
                </Radio>
              ))}
            </RadioGroup>
          </VStack>
        ))}

        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>

        <Text mt={4}>Score: {score}</Text>
      </Box>
    </Container>
  );
};

export default Quiz;
