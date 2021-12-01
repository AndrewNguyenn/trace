import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  width: 85vw;
  margin: 3rem;
  height: 80vh;
  padding: 3rem;
  overflow-y: scroll;
`;

type Props = {
  children: ReactNode;
  title: string;
};

const InnerLayout = ({
  children,
  title
}: Props) => (
  <>
    <Main>
      {/* Create header component with customizable size (lg, mg, sm) */}
      <div>{title}</div>
      {children}
    </Main>
  </>
);

export default InnerLayout;