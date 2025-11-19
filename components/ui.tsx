import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-text mb-4 flex items-center">
      <span className="w-2 h-8 bg-primary mr-4 rounded-sm"></span>
      {title}
    </h2>
    {subtitle && <p className="text-muted text-lg max-w-2xl">{subtitle}</p>}
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode; color?: 'primary' | 'secondary' | 'default' }> = ({ children, color = 'default' }) => {
  const colors = {
    primary: 'text-primary border-primary/30 bg-primary/10',
    secondary: 'text-secondary border-secondary/30 bg-secondary/10',
    default: 'text-muted border-border bg-surface'
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-mono border ${colors[color]} mr-2 mb-2 inline-block`}>
      {children}
    </span>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', to, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded font-medium transition-all duration-300 flex items-center justify-center gap-2 group";
  const variants = {
    primary: "bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]",
    outline: "border border-border text-text hover:border-primary hover:text-primary bg-transparent"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  );
};