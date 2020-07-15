import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from './index';

describe('Hooks', () => {
    it('Should respect initialState parameter', async () => {
        const { result } = renderHook(() => useToggle(false));

        expect(result.current.isToggled).toBe(false);
    });

    it('Should respect initialState parameter when is true', async () => {
        const { result } = renderHook(() => useToggle(true));

        expect(result.current.isToggled).toBe(true);
    });

    it('Should change "isToggle" value', async () => {
        const { result } = renderHook(() => useToggle(false));

        act(() => {
            result.current.setToggle();
        });

        expect(result.current.isToggled).toBe(true);
    });
});
