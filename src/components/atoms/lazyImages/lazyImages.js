import React, { Suspense} from 'react';
import AwsomeComponent from "components/molecules/card/loading";
import styled from 'styled-components';

 const WrapperLoading = styled.div`
 display:flex;
 justify-content: center;
 align-items:center;
 width: 80vw;
height: 85vh;
 `;
const Images = React.lazy(() => import('components/atoms/lazyImages/images'));

const LazyImages=()=> {
  return (
      <Suspense fallback={<WrapperLoading><AwsomeComponent/></WrapperLoading>}>
          <Images/>
      </Suspense>
  );
}
export default LazyImages;

