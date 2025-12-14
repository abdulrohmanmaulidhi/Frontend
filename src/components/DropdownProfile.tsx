import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, type User } from '../api/auth';
import './DropdownProfile.css';
import {
  AvatarDefaultIcon,
  ProfileIcon,
  EditProfileIcon,
  LogOutIcon,
} from '../assets/icon';

interface DropdownProfileProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLElement | null>;
}

const DropdownProfile: React.FC<DropdownProfileProps> = ({
  user,
  isOpen,
  onClose,
  anchorRef,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, anchorRef]);

  const handleEditProfile = () => {
    navigate('/profile');
    onClose();
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    } finally {
      onClose();
    }
  };

  if (!isOpen || !user) {
    return null;
  }

  return (
    <div className="st-profile-dropdown">
      <div className="st-dropdown-header">
        <div className="st-dropdown-avatar">
          {user.avatar_url ? (
            <img src={user.avatar_url} alt="User Avatar" />
          ) : (
            <img
              src={ProfileIcon}
              alt="Avatar Default"
              className="default-icon"
            />
          )}
        </div>
        <div className="st-dropdown-info">
          <div className="st-dropdown-name">{user.fullname}</div>
          <div className="st-dropdown-email">{user.email}</div>
        </div>
      </div>
      <div className="st-dropdown-divider"></div>
      <button className="st-dropdown-item" onClick={handleEditProfile}>
        <img
          src={EditProfileIcon}
          alt="Edit Profile"
          className="dropdown-icon"
        />
        Edit Profile
      </button>
      <button
        className="st-dropdown-item st-dropdown-logout"
        onClick={handleSignOut}
      >
        <img src={LogOutIcon} alt="Sign Out" className="dropdown-icon" />
        Sign Out
      </button>
    </div>
  );
};

export default DropdownProfile;
