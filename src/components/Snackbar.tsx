import { useEffect } from "react";
import "./Snackbar.css";

type Props = {
  open: boolean;
  message: string;
  actionLabel?: string;
  duration?: number;
  onAction?: () => void;
  onClose?: () => void;
};

export default function Snackbar({ open, message, actionLabel = "Undo", duration = 2000, onAction, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div className="snackbar-root">
      <div className="snackbar-inner">
        <div className="snackbar-message">{message}</div>
        <button
          className="snackbar-action"
          onClick={() => {
            onAction?.();
            onClose?.();
          }}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
