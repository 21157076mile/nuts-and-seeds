"use client";

import { useEffect,useState } from "react";
import { ThemeProvider } from "next-themes";

import { LOCAL_STORAGE_KEY } from "@shared/constant";

export default function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute="class"
      storageKey={LOCAL_STORAGE_KEY.uiTheme}
    >
      {children}
    </ThemeProvider>
  );
}
