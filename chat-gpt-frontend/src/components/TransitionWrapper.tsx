import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TransitionWrapper.css';

interface TransitionWrapperProps {
  children: React.ReactNode;
  key: string;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children, key }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={key}
        timeout={300}
        classNames="fade"
      >
        <div>
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionWrapper;