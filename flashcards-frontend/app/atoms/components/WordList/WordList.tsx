import React from 'react';
import { Word } from '../../types/base-types';

interface WordListProps {
  words: Word[];
};

const WordList: React.FC<WordListProps> = ({ words }) => {
  return (
    <>
      {words.map((word) => (
        <div key={word.id}>
          {word.polish_translation} - {word.english_translation}
        </div>
      ))}
    </>
  )
};

export default WordList;