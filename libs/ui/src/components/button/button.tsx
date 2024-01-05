import clsx from 'clsx';
import './button.css';

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'default' | 'destructive';
  children: React.ReactNode;
}

export function Button({ color = 'default', children }: ButtonProps) {
  return (
    <button className={clsx('button', color && `button--${color}`)}>
      {children}
    </button>
  );
}
