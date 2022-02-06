import { ChangeEvent } from 'react';
import { css, Theme } from '@emotion/react';

import useRouterQuery from 'hooks/common/useRouterQuery';

interface ICategoryElementProps {
  name: string;
  defaultValue: string;
  values: string[];
}

function CategoryElement({
  name,
  defaultValue,
  values,
}: ICategoryElementProps) {
  const { getRouterQuery, setRouterQuery, clearRouterQuery } =
    useRouterQuery(name);

  function onChange(e: ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;

    if (value === defaultValue) {
      clearRouterQuery();
      return;
    }

    setRouterQuery(value);
  }

  return (
    <select
      css={selectStyle}
      name={name}
      onChange={onChange}
      defaultValue={getRouterQuery()}
    >
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default CategoryElement;

const selectStyle = (theme: Theme) => css`
  background-color: ${theme.color.bgColor};
  border-radius: 10px;
  border: 2px solid ${theme.color.footerTextColor};
  padding: 2px 6px;
  text-align: center;
  text-align: -moz-center;
  text-align: -webkit-center;
  transition: border-color 0.3s;

  &:hover,
  &:active {
    border-color: ${theme.color.brandColor};
  }
`;
