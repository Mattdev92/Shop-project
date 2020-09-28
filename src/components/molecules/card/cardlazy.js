import React, { Suspense} from 'react';
import AwsomeComponent from "components/molecules/card/loading";
import styled from 'styled-components';
const OtherComponent = React.lazy(() => import('components/molecules/card/card'));
const Wrapper = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
`;
const Cardlazy=(props)=> {
  return (
    <div>
      <Suspense fallback={<Wrapper><AwsomeComponent/></Wrapper>}>
        <section>
          <OtherComponent {...props}/>
        </section>
      </Suspense>
    </div>
  );
}
export default Cardlazy;