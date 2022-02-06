import { CONTINENT } from 'constants/queryKeys';
import CategoryElement from 'components/Category/CategoryElement';

const continentOptions: string[] = [
  '전체',
  '아시아',
  '유럽',
  '남아메리카',
  '북아메리카',
  '오세아니아',
  '아프리카',
  '중동',
];

function Category() {
  return (
    <section>
      <CategoryElement
        name={CONTINENT}
        defaultValue={continentOptions[0]}
        values={continentOptions}
      />
    </section>
  );
}

export default Category;
