import { useState, useCallback } from 'react';

const useModal = () => {
  const [isActive, setIsActive] = useState(false);

  const activate = useCallback(() => {
    setIsActive(true);
  }, []);

  const deactivate = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleDeactivate = useCallback<(event: React.MouseEvent) => void>(
    (event) => {
      const deactivateTriggerElements = Array.from(
        document.querySelectorAll('[data-modal-deactivate]')
      );

      if (
        event.target instanceof Element &&
        deactivateTriggerElements.includes(event.target)
      ) {
        deactivate();
      }
    },
    [deactivate]
  );

  return { isActive, activate, deactivate, handleDeactivate };
};

export default useModal;
