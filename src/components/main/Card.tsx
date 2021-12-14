import { INation } from 'types';

interface ICardProps extends INation {
  isSelected: boolean;
}

function Card({
  isSelected,
  nation_name,
  image_url,
  introduce,
  quarantine_policy,
}: ICardProps) {
  return (
    <div>
      <p>{isSelected.toString()}</p>
      {nation_name}
    </div>
  );
}

export default Card;
