import React, { JSX, useReducer } from 'react';
import './style.css';

interface Props {
  changeText: string;
  icon: string;
  iconClassName?: any;
  property: 'variant-2' | 'variant-1';
  className?: any;
}

export const Dropdown = ({
  changeText = 'Edit Profil',
  icon,
  iconClassName,
  property,
  className,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property: property || 'variant-1',
  });

  return (
    <div
      className={`dropdown ${state.property1} ${className}`}
      onMouseEnter={() => dispatch('mouse_enter')}
      onMouseLeave={() => dispatch('mouse_leave')}
    >
      {icon && (
        <div className="frame">
          <img src={icon} className={iconClassName} />
        </div>
      )}

      <div className="edit-profil">{changeText}</div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case 'mouse_enter':
      return {
        ...state,
        property: 'variant-2',
      };

    case 'mouse_leave':
      return {
        ...state,
        property: 'varian-1',
      };

    default:
      return state;
  }
}
