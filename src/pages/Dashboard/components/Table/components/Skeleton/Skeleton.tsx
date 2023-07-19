import { ContainerStyled, Container, Content } from './Skeleton.styles';
import { Skeleton } from '@mui/material';

const SkeletonTable: React.FC = () => {
  return (
    <ContainerStyled>
      <Container>
        <Content width='5%'>
          <Skeleton variant='text' width='100%' height={50} />
        </Content>
        <Content width='30%'>
          <Skeleton variant='text' width='30%' height={50} />
        </Content>
        <Content width='34%'>
          <Skeleton variant='text' width='30%' height={50} />
        </Content>
        <Content width='10%'>
          <Skeleton variant='text' width='50%' height={50} />
        </Content>
        <Content width='10%'>
          <Skeleton variant='text' width='50%' height={50} />
        </Content>
        <Content width='5%'>
          <Skeleton variant='text' width='100%' height={50} />
        </Content>
      </Container>
      {Array(9)
        .fill(null)
        .map((_, index) => (
          <Container key={index}>
            <Content width='5%'>
              <Skeleton variant='text' width='100%' height={50} />
            </Content>
            <Content width='30%'>
              <Skeleton variant='text' width='60%' height={50} />
            </Content>
            <Content width='34%'>
              <Skeleton variant='text' width='80%' height={50} />
            </Content>
            <Content width='10%'>
              <Skeleton variant='text' width='50%' height={50} />
            </Content>
            <Content width='10%'>
              <Skeleton variant='text' width='50%' height={50} />
            </Content>
            <Content width='5%'>
              <Skeleton variant='text' width='90%' height={50} />
            </Content>
          </Container>
        ))}
    </ContainerStyled>
  );
};

export default SkeletonTable;
