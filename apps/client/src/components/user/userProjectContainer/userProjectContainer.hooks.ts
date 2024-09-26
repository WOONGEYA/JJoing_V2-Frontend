import { useState } from 'react';

export const useSearchProcessingProject = () => {
  const [searchProcessingProject, setSearchProcessingProject] = useState(true);

  const handleSeachOptions = () => {
    setSearchProcessingProject((prev) => !prev);
  };

  return { searchProcessingProject, handleSeachOptions };
};
