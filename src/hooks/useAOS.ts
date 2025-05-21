// src/hooks/useAOS.ts
"use client";

import { useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useAOS() {
  const initAOS = useCallback(() => {
    AOS.init({
      duration: 1000,
      once: true, // 一度だけアニメーションを実行する
      easing: "ease-in-out",
    });
  }, []);

  return { initAOS };
}
