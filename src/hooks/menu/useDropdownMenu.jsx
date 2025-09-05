import { useEffect, useRef, useState } from "react";

export default function useDropdownMenu() {
  const [openId, setOpenId] = useState(null); // 'about' | 'test' | ... | null
  const rootRef = useRef(null);

  const open = (id) => setOpenId(id);
  const close = () => setOpenId(null);
  const isOpen = (id) => openId === id;

  // 바깥 클릭 닫기
  useEffect(() => {
    const onDocClick = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) close();
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // ESC 닫기
  const onKeyDown = (e) => {
    if (e.key === "Escape") close();
  };

  // 포커스 빠져나가면 닫기
  const onBlurGroup = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) close();
  };

  return { openId, open, close, isOpen, rootRef, onKeyDown, onBlurGroup };
}
