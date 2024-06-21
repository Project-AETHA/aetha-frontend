// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Tabs aria-label="Options" onSelectionChange={(key) => setTheme(key)}>
        <Tab key="light" title="Light" />
        <Tab key="dark" title="Dark" />
      </Tabs>
    </div>
  );
}
