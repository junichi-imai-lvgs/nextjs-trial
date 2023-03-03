import { act, renderHook } from '@testing-library/react';
import useModal from '../useModal';
import type { RenderHookResult } from '@testing-library/react';

describe('useModal', () => {
  let hookResult: RenderHookResult<
    ReturnType<typeof useModal>,
    unknown
  >['result'];

  beforeEach(() => {
    hookResult = renderHook(() => useModal()).result;
  });

  test('isActiveの初期値はfalseであること', () => {
    expect(hookResult.current.isActive).toBe(false);
  });

  test('activateしたとき、isActiveはtrueであること', () => {
    act(() => hookResult.current.activate());
    expect(hookResult.current.isActive).toBe(true);
  });

  test('activate後にdeactivateしたとき、isActiveはfalseであること', () => {
    act(() => hookResult.current.activate());
    expect(hookResult.current.isActive).toBe(true);
    act(() => hookResult.current.deactivate());
    expect(hookResult.current.isActive).toBe(false);
  });
});
