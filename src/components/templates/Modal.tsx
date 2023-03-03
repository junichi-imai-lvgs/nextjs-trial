import { useCallback, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import ReactFocusLock from 'react-focus-lock';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import modalContext from '@/contexts/modalContext';
import type useModal from '@/hooks/useModal';
import { TRANSITION, VARIANTS } from '@/constants/framerMotion';
import Backdrop from '../atoms/Backdrop';
import ModalContainer from './ModalContainer';
import Portal from './Portal';

type ModalProps = {
  children: React.ReactNode;
} & Omit<ReturnType<typeof useModal>, 'activate'>;

const Modal: React.FC<ModalProps> = ({
  isActive,
  deactivate,
  handleDeactivate,
  children,
}) => {
  const onExitComplete = useCallback(() => {
    enablePageScroll();
  }, []);

  const onAnimationStart = useCallback((definition: keyof typeof VARIANTS) => {
    if (definition === 'active') {
      disablePageScroll();
    }
  }, []);

  const contextValue = useMemo(
    () => ({ isActive, deactivate }),
    [deactivate, isActive]
  );

  useEffect(() => {
    return () => enablePageScroll();
  }, []);

  return (
    <modalContext.Provider value={contextValue}>
      <Portal>
        <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
          {isActive && (
            <ReactFocusLock returnFocus>
              <ModalContainer onClick={handleDeactivate}>
                <Backdrop
                  key="modal-backdrop"
                  initial="inactive"
                  animate="active"
                  exit="inactive"
                  variants={VARIANTS}
                  transition={TRANSITION}
                  onAnimationStart={onAnimationStart}
                  role="presentation"
                  data-modal-deactivate
                />
                {children}
              </ModalContainer>
            </ReactFocusLock>
          )}
        </AnimatePresence>
      </Portal>
    </modalContext.Provider>
  );
};

export default Modal;
