import React, { useState, useEffect } from 'react';

const CursorAnimation = () => {
  const [mousePos, setMousePos] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({x: e.clientX, y: e.clientY});
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), transparent 50%)`,
          filter: 'blur(50px)'
        }}
      ></div>
    </div>
  );
};

export default CursorAnimation;
