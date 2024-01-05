import './button.css';

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <button className="button">{children}</button>;
}

export default Button;
