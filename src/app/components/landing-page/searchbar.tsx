// SearchBar.tsx
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

interface SearchInputProps {
  expanded: boolean;
}

const SearchInput = styled.input<SearchInputProps>`
  width: 0;
  opacity: 0;
  padding: 0;
  transition: width 0.5s, opacity 0.5s;
  ${({ expanded }) =>
    expanded &&
    css`
      width: 400px;
      opacity: 1;
      padding: 2px;
    `}
`;

interface SearchIconProps {
  expanded: boolean;
}

const SearchIcon = styled(FiSearch)<SearchIconProps>`
  cursor: pointer;
  margin: 5px;
  transition: transform 0.3s;
  ${({ expanded }) =>
    expanded &&
    css`
      transform: rotate(90deg);
    `}
`;

export const SearchBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSearch = () => {
    setExpanded(!expanded);
  };

  return (
    <Container className='p-2 rounded-full bg-black/60'>
      <SearchIcon expanded={expanded} onClick={toggleSearch}  className='text-white '/>
      <SearchInput
      className='rounded-lg p-3 bg-transparent text-white'
        expanded={expanded}
        type="text"
        placeholder="Search..."
        onBlur={() => setExpanded(false)}
      />
    </Container>
  );
};

