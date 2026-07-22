import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme은 ThemeProvider 내부에서만 사용할 수 있습니다.");
  return ctx;
}
