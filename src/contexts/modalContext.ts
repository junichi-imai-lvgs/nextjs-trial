import { createContext } from 'react';

type ModalContext = {
  isActive: boolean;
  deactivate: () => void;
};

const modalContext = createContext<ModalContext>({
  isActive: false,
  deactivate: () => {},
});

export default modalContext;
