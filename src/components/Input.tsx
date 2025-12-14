import type { InputHTMLAttributes } from 'react';
import './Input.css';
import { HiddenPwIcon, SeePwIcon } from '../assets/icon';

type InputProps = {
  label?: string;
  icon?: string; // URL or path to icon
  showPasswordToggle?: boolean;
  onPasswordToggle?: () => void;
  isPasswordVisible?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  icon,
  showPasswordToggle = false,
  onPasswordToggle,
  isPasswordVisible = false,
  error,
  type = 'text',
  ...props
}: InputProps) {
  return (
    <label className="auth-field">
      {label && <span className="auth-label">{label}</span>}
      <div className="auth-input-wrap">
        <input
          type={
            showPasswordToggle && type === 'password'
              ? isPasswordVisible
                ? 'text'
                : 'password'
              : type
          }
          {...props}
        />
        {icon && <img src={icon} alt="" className="auth-input-icon" />}
        {showPasswordToggle && onPasswordToggle && (
          <img
            src={isPasswordVisible ? HiddenPwIcon : SeePwIcon}
            alt={isPasswordVisible ? 'Hide password' : 'Show password'}
            className="auth-input-icon auth-input-icon--clickable"
            onClick={onPasswordToggle}
          />
        )}
      </div>
      {error && <div className="auth-error">{error}</div>}
    </label>
  );
}
