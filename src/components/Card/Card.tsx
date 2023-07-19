import { CardContainer } from './Card.styles';

interface CardProps {
  line?: boolean;
  width?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ width, children, line }) => {
  return <CardContainer width={width} line={line}>{children}</CardContainer>;
};

export default Card;
