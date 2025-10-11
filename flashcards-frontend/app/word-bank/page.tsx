'use client'

import React, { useEffect, useState } from 'react';
import { Word } from '../atoms/types/base-types';
import WordList from '../atoms/components/WordList/WordList';

const WordBank = () => {
  const [words, setWords] = useState<Word[]>([]);

  const fetchWords = async () => {
    setWords([
      {
        id: 1,
        polish_translation: 'przypuszczać, zakładać',
        english_translation: 'assume',
        english_pronunciation: '',
        remaining_repetitions: 0
      },
      {
        id: 2,
        polish_translation: 'rozbawić',
        english_translation: 'amuse',
        english_pronunciation: '',
        remaining_repetitions: 4
      },
    ])
  }

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <>
      <WordList words={words} />
    </>
  )
};

export default WordBank;