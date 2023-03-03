import styled from '@emotion/styled';
import { m } from 'framer-motion';

const Backdrop = styled(m.div)`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export default Backdrop;
