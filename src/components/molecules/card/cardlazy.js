import React, { Suspense } from 'react';
import AwsomeComponent from 'components/molecules/card/loading';
import styled from 'styled-components';
const Card = React.lazy(() => import('components/molecules/card/card'));
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Cardlazy = (props) => {
  return (
    <CardWrapper>
      <Suspense
        fallback={
          <Wrapper>
            <AwsomeComponent />
          </Wrapper>
        }
      >
        <Card {...props} />
      </Suspense>
    </CardWrapper>
  );
};
export default Cardlazy;
