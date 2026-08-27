import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => cleanup());

// jsdom has no layout engine, so recharts' ResponsiveContainer (which sizes
// itself via ResizeObserver + getBoundingClientRect) never reports a usable
// size and its children refuse to render. Stub both with a fixed, deterministic
// rect so chart-bearing components render their real SVG output in tests.
class ResizeObserverMock implements ResizeObserver {
  constructor(private callback: ResizeObserverCallback) {}
  observe(target: Element) {
    this.callback([{ target, contentRect: target.getBoundingClientRect() } as ResizeObserverEntry], this);
  }
  unobserve() {}
  disconnect() {}
}
vi.stubGlobal('ResizeObserver', ResizeObserverMock);

Object.defineProperty(Element.prototype, 'getBoundingClientRect', {
  configurable: true,
  value: () => ({
    width: 320,
    height: 180,
    top: 0,
    left: 0,
    bottom: 180,
    right: 320,
    x: 0,
    y: 0,
    toJSON() {},
  }),
});
