import { useEffect, useMemo, useState } from "react";
import {
  DEFAULT_TOKENS,
  STORAGE_KEY,
  DesignTokensContext,
  applyTokensToCSS,
  normalizeStoredTokens,
  type Tokens,
  type TokenContextValue,
} from "./design-tokens-core";

export function DesignTokensProvider({ children }: { children: React.ReactNode }) {
  const [tokens, setTokensState] = useState<Tokens>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return DEFAULT_TOKENS;
      const parsed = JSON.parse(raw);
      const normalized = normalizeStoredTokens(parsed);
      return { ...DEFAULT_TOKENS, ...normalized } as Tokens;
    } catch {
      void 0;
      return DEFAULT_TOKENS;
    }
  });

  useEffect(() => {
    applyTokensToCSS(tokens);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tokens));
    } catch {
      void 0;
    }
  }, [tokens]);

  const api = useMemo<TokenContextValue>(
    () => ({
      tokens,
      setTokens(next) {
        setTokensState((prev) => ({ ...prev, ...next }));
      },
      reset() {
        setTokensState(DEFAULT_TOKENS);
      },
    }),
    [tokens]
  );

  return <DesignTokensContext.Provider value={api}>{children}</DesignTokensContext.Provider>;
}
