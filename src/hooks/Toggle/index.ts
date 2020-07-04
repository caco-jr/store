import { useState, useCallback } from 'react';

export const useToggle = (
  initialState: boolean
): { isToggled: boolean; setToggle: React.Dispatch<void> } => {
  const [isToggled, setIsToggled] = useState<boolean>(initialState);

  const toggle = useCallback(() => setIsToggled((state) => !state), [
    setIsToggled,
  ]);

  return { isToggled, setToggle: toggle };
};
