"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeMode = "light" | "dark";
type CursorType = "default" | "animated";

interface UIContextType {
    theme: ThemeMode;
    cursorType: CursorType;
    showBgVideo: boolean;
    setTheme: (theme: ThemeMode) => void;
    setCursorType: (type: CursorType) => void;
    setShowBgVideo: (show: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeMode>("dark");
    const [cursorType, setCursorType] = useState<CursorType>("animated");
    const [showBgVideo, setShowBgVideo] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
    }, [theme]);

    return (
        <UIContext.Provider value={{ theme, cursorType, showBgVideo, setTheme, setCursorType, setShowBgVideo }}>
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (!context) throw new Error("useUI must be used within UIProvider");
    return context;
}
