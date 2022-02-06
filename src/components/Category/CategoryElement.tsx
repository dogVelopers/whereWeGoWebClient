import { ChangeEvent, useEffect } from 'react';
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
    <select name={name} onChange={onChange} defaultValue={getRouterQuery()}>
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default CategoryElement;
