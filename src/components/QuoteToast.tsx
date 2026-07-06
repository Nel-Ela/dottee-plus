"use client";

import { useEffect, useState } from "react";

const TOAST_EVENT = "dottee:quote-toast";
const TOAST_STORAGE_KEY = "dottee:pending-toast";

type ToastDetail = {
  message?: string;
};

export function showQuoteToast(message: string) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(TOAST_STORAGE_KEY, message);
  window.dispatchEvent(new CustomEvent<ToastDetail>(TOAST_EVENT, { detail: { message } }));
}

export function QuoteToastHost() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timer: number | undefined;

    const show = (nextMessage: string) => {
      setMessage(nextMessage);
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => setMessage(""), 3000);
    };

    const pending = window.sessionStorage.getItem(TOAST_STORAGE_KEY);
    if (pending) {
      window.sessionStorage.removeItem(TOAST_STORAGE_KEY);
      show(pending);
    }

    const handleToast = (event: Event) => {
      const detail = (event as CustomEvent<ToastDetail>).detail;
      show(detail?.message ?? "Quote action added. Share quantity and artwork when ready.");
    };

    window.addEventListener(TOAST_EVENT, handleToast);
    return () => {
      if (timer) window.clearTimeout(timer);
      window.removeEventListener(TOAST_EVENT, handleToast);
    };
  }, []);

  if (!message) return null;

  return (
    <div className="quote-toast" role="status" aria-live="polite">
      <strong>Action captured</strong>
      <span>{message}</span>
    </div>
  );
}
