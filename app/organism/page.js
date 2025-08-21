'use client';

import { useEffect, useState } from 'react';

export default function OrganismPage() {
  const [progress, setProgress] = useState(342);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Living progress counter
    const updateProgress = () => {
      if (progress < 500) {
        const growth = Math.random() > 0.7 ? Math.floor(Math.random() * 3) + 1 : 0;
        const newProgress = Math.min(progress + growth, 500);
        setProgress(newProgress);
        
        const delay = newProgress > 450 ? 100 : 400;
        setTimeout(updateProgress, delay + Math.random() * 200);
      }
    };
    updateProgress();

    // Mouse tracking for organic responses
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Create floating particles occasionally
    const particleInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const particle = document.createElement('div');
        particle.className = 'energy-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 8000);
      }
    }, 2000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(particleInterval);
    };
  }, [progress]);

  const handleFruitHover = (e) => {
    const card = e.currentTarget;
    const siblings = card.parentElement.children;
    Array.from(siblings).forEach((sibling, index) => {
      setTimeout(() => {
        sibling.style.transform = 'scale(1.02)';
        sibling.style.borderColor = 'rgba(0, 212, 255, 0.4)';
        setTimeout(() => {
          if (!sibling.matches(':hover')) {
            sibling.style.transform = '';
            sibling.style.borderColor = '';
          }
        }, 300);
      }, index * 100);
    });
  };

  const handleFruitClick = (e) => {
    const card = e.currentTarget;
    card.style.animation = 'crystal-pulse 0.5s ease-in-out';
    setTimeout(() => {
      card.style.animation = '';
    }, 500);
  };

  const handleInputFocus = () => {
    const seedElement = document.querySelector('.crystal-seed');
    if (seedElement) {
      seedElement.style.animationDuration = '1.5s';
      seedElement.style.transform = 'scale(1.1)';
    }
  };

  const handleInputBlur = () => {
    const seedElement = document.querySelector('.crystal-seed');
    if (seedElement) {
      seedElement.style.animationDuration = '3s';
      seedElement.style.transform = 'scale(1)';
    }
  };

  const handleInputChange = (e) => {
    const length = e.target.value.length;
    if (length > 10) {
      e.target.style.animationDuration = '3s';
      e.target.style.borderColor = 'rgba(0, 212, 255, 0.6)';
      e.target.style.background = 'rgba(0, 212, 255, 0.08)';
      e.target.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 212, 255, 0.1)';
    } else {
      e.target.style.animationDuration = '7s';
      e.target.style.borderColor = 'rgba(0, 212, 255, 0.2)';
      e.target.style.background = 'rgba(0, 30, 60, 0.4)';
      e.target.style.boxShadow = 'none';
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;900&family=Exo+2:wght@300;400;500;600;700&display=swap');

        :root {
            --crystal-deep: #0a1628;
            --crystal-surface: #132844;
            --crystal-blue: #00d4ff;
            --crystal-bright: #4ade80;
            --crystal-accent: #60a5fa;
            --glass-border: rgba(0, 212, 255, 0.2);
            --glass-surface: rgba(0, 212, 255, 0.03);
            --glass-intense: rgba(0, 212, 255, 0.08);
            --text-primary: #ffffff;
            --text-secondary: #e2e8f0;
            --text-subtle: #94a3b8;
            --heartbeat-interval: 4s;
            --breath-interval: 6s;
        }

        .crystal-body {
            background: 
                radial-gradient(ellipse at 20% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 70%, rgba(74, 222, 128, 0.08) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, var(--crystal-surface) 0%, var(--crystal-deep) 100%);
            color: var(--text-primary);
            font-family: 'Exo 2', sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
            min-height: 100vh;
            font-weight: 300;
            animation: background-flow 12s ease-in-out infinite;
            margin: 0;
            padding: 0;
        }

        @keyframes background-flow {
            0%, 100% { 
                background-size: 100% 100%, 100% 100%, 100% 100%;
                filter: brightness(1);
            }
            33% { 
                background-size: 110% 110%, 90% 90%, 105% 105%;
                filter: brightness(1.05);
            }
            66% { 
                background-size: 90% 90%, 110% 110%, 95% 95%;
                filter: brightness(1.02);
            }
        }

        .crystal-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 30px;
            position: relative;
        }

        /* Immersive Flow Behind Logo */
        .crystal-header {
            text-align: center;
            margin-bottom: 80px;
            position: relative;
            animation: header-float var(--breath-interval) ease-in-out infinite;
        }

        .crystal-header::before {
            content: '';
            position: absolute;
            top: -50px;
            left: -50px;
            right: -50px;
            bottom: -50px;
            background: 
                radial-gradient(ellipse at 30% 40%, rgba(0, 212, 255, 0.3) 0%, transparent 40%),
                radial-gradient(ellipse at 70% 60%, rgba(74, 222, 128, 0.2) 0%, transparent 40%),
                linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.1) 50%, transparent 70%);
            border-radius: 50%;
            animation: flow-behind 8s ease-in-out infinite;
            z-index: -1;
            filter: blur(40px);
        }

        .crystal-header::after {
            content: '';
            position: absolute;
            top: -30px;
            left: -30px;
            right: -30px;
            bottom: -30px;
            background: 
                conic-gradient(from 0deg at 50% 50%, 
                    transparent 0deg, 
                    rgba(0, 212, 255, 0.4) 90deg, 
                    transparent 180deg, 
                    rgba(74, 222, 128, 0.3) 270deg, 
                    transparent 360deg);
            border-radius: 50%;
            animation: flow-rotation 15s linear infinite;
            z-index: -1;
            filter: blur(30px);
        }

        @keyframes header-float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-8px) scale(1.01); }
        }

        @keyframes flow-behind {
            0%, 100% { 
                transform: scale(1) rotate(0deg);
                opacity: 0.6;
            }
            33% { 
                transform: scale(1.2) rotate(120deg);
                opacity: 0.8;
            }
            66% { 
                transform: scale(0.8) rotate(240deg);
                opacity: 0.7;
            }
        }

        @keyframes flow-rotation {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .brand-title {
            font-family: 'Orbitron', monospace;
            font-size: 3.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, 
                var(--crystal-blue) 0%, 
                var(--crystal-bright) 35%,
                var(--crystal-accent) 70%,
                var(--crystal-blue) 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
            letter-spacing: 0.05em;
            animation: title-crystal-pulse var(--heartbeat-interval) ease-in-out infinite;
            text-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
            position: relative;
            z-index: 2;
        }

        @keyframes title-crystal-pulse {
            0%, 100% { 
                filter: brightness(1) drop-shadow(0 0 10px rgba(0, 212, 255, 0.3));
                transform: scale(1);
            }
            50% { 
                filter: brightness(1.2) drop-shadow(0 0 20px rgba(0, 212, 255, 0.5));
                transform: scale(1.02);
            }
        }

        .brand-subtitle {
            font-family: 'Exo 2', sans-serif;
            font-size: 1.3rem;
            color: var(--crystal-accent);
            font-weight: 400;
            margin-bottom: 12px;
            animation: subtitle-glow 7s ease-in-out infinite;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        @keyframes subtitle-glow {
            0%, 100% { 
                color: var(--crystal-accent);
                text-shadow: 0 0 10px rgba(96, 165, 250, 0.4);
            }
            50% { 
                color: var(--crystal-blue);
                text-shadow: 0 0 20px rgba(0, 212, 255, 0.6);
            }
        }

        .brand-tagline {
            font-family: 'Exo 2', sans-serif;
            font-size: 1rem;
            color: var(--text-secondary);
            font-weight: 300;
            opacity: 0.8;
            letter-spacing: 0.05em;
            animation: tagline-shimmer 9s ease-in-out infinite;
        }

        @keyframes tagline-shimmer {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
        }

        /* Crystal Glass Cards */
        .crystal-card {
            background: var(--glass-surface);
            backdrop-filter: blur(30px);
            border: 2px solid var(--glass-border);
            border-radius: 28px;
            padding: 50px;
            margin-bottom: 50px;
            position: relative;
            overflow: hidden;
            animation: card-crystal-breath var(--breath-interval) ease-in-out infinite;
            transition: all 0.4s ease;
            box-shadow: 
                0 8px 32px rgba(0, 212, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        @keyframes card-crystal-breath {
            0%, 100% { 
                transform: scale(1);
                box-shadow: 
                    0 8px 32px rgba(0, 212, 255, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1);
                border-color: var(--glass-border);
            }
            50% { 
                transform: scale(1.005);
                box-shadow: 
                    0 12px 40px rgba(0, 212, 255, 0.15),
                    inset 0 1px 0 rgba(255, 255, 255, 0.15);
                border-color: rgba(0, 212, 255, 0.3);
            }
        }

        .crystal-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, 
                transparent,
                var(--crystal-blue),
                var(--crystal-bright),
                var(--crystal-blue),
                transparent);
            animation: energy-flow-crystal 4s ease-in-out infinite;
        }

        @keyframes energy-flow-crystal {
            0% { transform: translateX(-100%); opacity: 0; }
            25% { opacity: 1; }
            75% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
        }

        .crystal-card:hover {
            transform: scale(1.01) !important;
            border-color: rgba(0, 212, 255, 0.5);
            background: var(--glass-intense);
            animation-duration: 2s;
            box-shadow: 
                0 20px 60px rgba(0, 212, 255, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .card-title {
            font-family: 'Orbitron', monospace;
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--crystal-blue);
            margin-bottom: 40px;
            text-align: center;
            animation: title-heartbeat var(--heartbeat-interval) ease-in-out infinite;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            text-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
        }

        @keyframes title-heartbeat {
            0%, 100% { 
                transform: scale(1);
                text-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
            }
            25% { 
                transform: scale(1.03);
                text-shadow: 0 0 25px rgba(0, 212, 255, 0.6);
            }
            50% { 
                transform: scale(1.01);
                text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
            }
            75% { 
                transform: scale(1.02);
                text-shadow: 0 0 30px rgba(0, 212, 255, 0.7);
            }
        }

        /* Crystal Seed */
        .seed-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
        }

        .crystal-seed {
            width: 80px;
            height: 80px;
            background: 
                radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
                radial-gradient(circle, var(--crystal-blue), var(--crystal-bright));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.2rem;
            animation: crystal-seed-pulse 3s ease-in-out infinite;
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.2);
            box-shadow: 
                0 0 30px rgba(0, 212, 255, 0.4),
                inset 0 2px 10px rgba(255, 255, 255, 0.2);
        }

        .crystal-seed::before {
            content: '';
            position: absolute;
            width: 120%;
            height: 120%;
            border-radius: 50%;
            background: 
                conic-gradient(from 0deg, 
                    transparent 0deg,
                    rgba(0, 212, 255, 0.4) 120deg,
                    transparent 240deg);
            animation: seed-aura-rotation 6s linear infinite;
            z-index: -1;
        }

        @keyframes crystal-seed-pulse {
            0%, 100% { 
                transform: scale(1); 
                box-shadow: 
                    0 0 30px rgba(0, 212, 255, 0.4),
                    inset 0 2px 10px rgba(255, 255, 255, 0.2);
            }
            25% { 
                transform: scale(1.1); 
                box-shadow: 
                    0 0 40px rgba(0, 212, 255, 0.6),
                    inset 0 3px 15px rgba(255, 255, 255, 0.3);
            }
            50% { 
                transform: scale(1.05); 
                box-shadow: 
                    0 0 35px rgba(0, 212, 255, 0.5),
                    inset 0 2px 12px rgba(255, 255, 255, 0.25);
            }
            75% { 
                transform: scale(1.12); 
                box-shadow: 
                    0 0 50px rgba(0, 212, 255, 0.7),
                    inset 0 4px 20px rgba(255, 255, 255, 0.4);
            }
        }

        @keyframes seed-aura-rotation {
            0% { transform: rotate(0deg) scale(1); opacity: 0.6; }
            50% { transform: rotate(180deg) scale(1.1); opacity: 0.8; }
            100% { transform: rotate(360deg) scale(1); opacity: 0.6; }
        }

        .crystal-input {
            width: 100%;
            max-width: 600px;
            background: rgba(0, 30, 60, 0.4);
            border: 2px solid rgba(0, 212, 255, 0.2);
            border-radius: 20px;
            padding: 28px;
            color: var(--text-primary);
            font-family: 'Exo 2', sans-serif;
            font-size: 1.1rem;
            font-weight: 300;
            text-align: center;
            transition: all 0.4s ease;
            resize: none;
            min-height: 120px;
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        @keyframes input-crystal-breath {
            0%, 100% { 
                border-color: rgba(0, 212, 255, 0.2);
                box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3);
            }
            animation: input-focus-pulse 2s ease-in-out infinite;
        }

        @keyframes input-focus-pulse {
            0%, 100% { 
                box-shadow: 
                    0 0 0 4px rgba(0, 212, 255, 0.2),
                    inset 0 2px 20px rgba(0, 212, 255, 0.1);
            }
            50% { 
                box-shadow: 
                    0 0 0 8px rgba(0, 212, 255, 0.3),
                    inset 0 2px 30px rgba(0, 212, 255, 0.15);
            }
        }

        .crystal-input::placeholder {
            color: var(--text-subtle);
            font-style: italic;
            opacity: 0.8;
        }

        .crystal-button {
            background: linear-gradient(135deg, var(--crystal-blue), var(--crystal-bright));
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            padding: 20px 40px;
            font-family: 'Orbitron', monospace;
            font-weight: 600;
            color: white;
            cursor: pointer;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            animation: button-crystal-pulse 5s ease-in-out infinite;
            position: relative;
            overflow: hidden;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            box-shadow: 
                0 8px 25px rgba(0, 212, 255, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        @keyframes button-crystal-pulse {
            0%, 100% { 
                transform: scale(1);
                box-shadow: 
                    0 8px 25px rgba(0, 212, 255, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3);
            }
            20% { 
                transform: scale(1.05);
                box-shadow: 
                    0 12px 35px rgba(0, 212, 255, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.4);
            }
            40% { 
                transform: scale(1.02);
                box-shadow: 
                    0 10px 30px rgba(0, 212, 255, 0.35),
                    inset 0 1px 0 rgba(255, 255, 255, 0.35);
            }
            60% { 
                transform: scale(1.03);
                box-shadow: 
                    0 15px 40px rgba(0, 212, 255, 0.45),
                    inset 0 1px 0 rgba(255, 255, 255, 0.45);
            }
        }

        .crystal-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(255, 255, 255, 0.4), 
                transparent);
            animation: button-energy-sweep 8s ease-in-out infinite;
        }

        @keyframes button-energy-sweep {
            0%, 100% { left: -100%; }
            50% { left: 100%; }
        }

        .crystal-button:hover {
            transform: scale(1.05) translateY(-2px);
            box-shadow: 
                0 15px 45px rgba(0, 212, 255, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        /* Crystal Growth Canvas */
        .growth-canvas {
            height: 350px;
            background: 
                radial-gradient(ellipse at 30% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 80%, rgba(74, 222, 128, 0.12) 0%, transparent 50%),
                linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(74, 222, 128, 0.03));
            border-radius: 24px;
            position: relative;
            overflow: hidden;
            border: 2px solid rgba(0, 212, 255, 0.2);
            animation: canvas-crystal-flow 10s ease-in-out infinite;
            box-shadow: inset 0 2px 20px rgba(0, 212, 255, 0.1);
        }

        @keyframes canvas-crystal-flow {
            0%, 100% { 
                background: 
                    radial-gradient(ellipse at 30% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
                    radial-gradient(ellipse at 70% 80%, rgba(74, 222, 128, 0.12) 0%, transparent 50%),
                    linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(74, 222, 128, 0.03));
            }
            33% { 
                background: 
                    radial-gradient(ellipse at 60% 30%, rgba(0, 212, 255, 0.2) 0%, transparent 50%),
                    radial-gradient(ellipse at 40% 70%, rgba(74, 222, 128, 0.18) 0%, transparent 50%),
                    linear-gradient(135deg, rgba(74, 222, 128, 0.08), rgba(0, 212, 255, 0.04));
            }
            66% { 
                background: 
                    radial-gradient(ellipse at 20% 60%, rgba(0, 212, 255, 0.18) 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 40%, rgba(74, 222, 128, 0.15) 0%, transparent 50%),
                    linear-gradient(135deg, rgba(0, 212, 255, 0.06), rgba(74, 222, 128, 0.05));
            }
        }

        .progress-indicator {
            position: absolute;
            top: 30px;
            right: 30px;
            font-family: 'Orbitron', monospace;
            font-size: 1.6rem;
            font-weight: 600;
            color: var(--crystal-blue);
            background: rgba(0, 30, 60, 0.8);
            padding: 16px 24px;
            border-radius: 16px;
            border: 2px solid rgba(0, 212, 255, 0.3);
            backdrop-filter: blur(20px);
            animation: progress-crystal-pulse 3s ease-in-out infinite;
            letter-spacing: 0.1em;
            box-shadow: 
                0 8px 25px rgba(0, 212, 255, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        @keyframes progress-crystal-pulse {
            0%, 100% { 
                transform: scale(1); 
                color: var(--crystal-blue);
                text-shadow: 0 0 10px rgba(0, 212, 255, 0.6);
            }
            50% { 
                transform: scale(1.05); 
                color: var(--crystal-bright);
                text-shadow: 0 0 20px rgba(74, 222, 128, 0.8);
            }
        }

        /* Crystal Tree */
        .tree-visualization {
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            animation: tree-crystal-sway 15s ease-in-out infinite;
        }

        @keyframes tree-crystal-sway {
            0%, 100% { transform: translateX(-50%) rotate(0deg); }
            25% { transform: translateX(-50%) rotate(1deg); }
            75% { transform: translateX(-50%) rotate(-1deg); }
        }

        .trunk {
            width: 8px;
            height: 100px;
            background: linear-gradient(to top, 
                var(--crystal-blue), 
                var(--crystal-bright));
            margin: 0 auto;
            border-radius: 4px;
            opacity: 0.9;
            animation: trunk-crystal-grow 6s ease-in-out infinite;
            box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
        }

        @keyframes trunk-crystal-grow {
            0%, 100% { 
                height: 100px; 
                box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
            }
            50% { 
                height: 110px; 
                box-shadow: 0 0 25px rgba(0, 212, 255, 0.6);
            }
        }

        .branches-container {
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            width: 250px;
            height: 150px;
        }

        .branch {
            position: absolute;
            background: linear-gradient(45deg, var(--crystal-blue), var(--crystal-bright));
            border-radius: 2px;
            opacity: 0.7;
            transform-origin: bottom center;
            animation: branch-crystal-grow 8s ease-in-out infinite;
            box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
        }

        @keyframes branch-crystal-grow {
            0%, 100% { 
                transform: scale(1) rotate(var(--rotation)); 
                box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
            }
            50% { 
                transform: scale(1.15) rotate(calc(var(--rotation) + 3deg)); 
                box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
            }
        }

        .branch-1 { --rotation: -25deg; width: 2px; height: 50px; bottom: 0; left: 46%; animation-delay: 0s; }
        .branch-2 { --rotation: 20deg; width: 2px; height: 45px; bottom: 25px; left: 54%; animation-delay: 1s; }
        .branch-3 { --rotation: -30deg; width: 2px; height: 40px; bottom: 45px; left: 43%; animation-delay: 2s; }

        .growth-fruit {
            position: absolute;
            width: 12px;
            height: 12px;
            background: 
                radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6) 0%, transparent 50%),
                radial-gradient(circle, var(--crystal-bright), var(--crystal-blue));
            border-radius: 50%;
            animation: fruit-crystal-life 5s ease-in-out infinite;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
        }

        @keyframes fruit-crystal-life {
            0%, 100% { 
                transform: scale(0.8); 
                opacity: 0.8;
                box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
            }
            25% { 
                transform: scale(1.3); 
                opacity: 1;
                box-shadow: 0 0 25px rgba(0, 212, 255, 0.6);
            }
            50% { 
                transform: scale(1); 
                opacity: 0.9;
                box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
            }
            75% { 
                transform: scale(1.2); 
                opacity: 1;
                box-shadow: 0 0 30px rgba(0, 212, 255, 0.7);
            }
        }

        /* Enhanced Connection Lines with Better Sparks */
        .connection-line {
            position: absolute;
            height: 4px;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(0, 212, 255, 0.2),
                rgba(0, 212, 255, 0.6), 
                rgba(0, 212, 255, 0.2),
                transparent);
            border-radius: 2px;
            animation: connection-crystal-pulse 8s ease-in-out infinite;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
        }

        .connection-line::before {
            content: '';
            position: absolute;
            top: -1px;
            left: 0;
            width: 100%;
            height: 6px;
            background: linear-gradient(90deg, 
                transparent,
                rgba(0, 212, 255, 0.3),
                rgba(74, 222, 128, 1),
                rgba(0, 212, 255, 1),
                rgba(74, 222, 128, 1),
                rgba(0, 212, 255, 0.3),
                transparent);
            border-radius: 3px;
            box-shadow: 
                0 0 15px rgba(0, 212, 255, 0.8), 
                0 0 8px rgba(74, 222, 128, 0.6);
            animation: spark-crystal-travel 10s ease-in-out infinite;
            transform: translateX(-100%);
        }

        @keyframes connection-crystal-pulse {
            0%, 100% { 
                opacity: 0.4; 
                transform: scaleX(0.9);
                filter: brightness(0.8);
                box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
            }
            50% { 
                opacity: 0.9; 
                transform: scaleX(1.1);
                filter: brightness(1.3);
                box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
            }
        }

        @keyframes spark-crystal-travel {
            0% { 
                transform: translateX(-100%) scaleX(0);
                opacity: 0;
            }
            15% { 
                transform: translateX(-70%) scaleX(0.5);
                opacity: 0.8;
            }
            50% { 
                transform: translateX(0%) scaleX(1);
                opacity: 1;
            }
            85% { 
                transform: translateX(70%) scaleX(0.5);
                opacity: 0.8;
            }
            100% { 
                transform: translateX(100%) scaleX(0);
                opacity: 0;
            }
        }

        /* Crystal Harvest */
        .crystal-basket {
            background: 
                radial-gradient(ellipse at center, 
                    rgba(0, 212, 255, 0.08), 
                    rgba(74, 222, 128, 0.04));
            border: 2px solid rgba(0, 212, 255, 0.3);
            border-radius: 24px;
            padding: 50px;
            position: relative;
            margin: 40px auto;
            max-width: 900px;
            animation: basket-crystal-breath 9s ease-in-out infinite;
            box-shadow: 
                0 20px 60px rgba(0, 212, 255, 0.1),
                inset 0 2px 10px rgba(255, 255, 255, 0.05);
        }

        @keyframes basket-crystal-breath {
            0%, 100% { 
                transform: scale(1);
                border-color: rgba(0, 212, 255, 0.3);
                box-shadow: 
                    0 20px 60px rgba(0, 212, 255, 0.1),
                    inset 0 2px 10px rgba(255, 255, 255, 0.05);
            }
            50% { 
                transform: scale(1.01);
                border-color: rgba(0, 212, 255, 0.5);
                box-shadow: 
                    0 25px 70px rgba(0, 212, 255, 0.15),
                    inset 0 3px 15px rgba(255, 255, 255, 0.08);
            }
        }

        .fruits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }

        .crystal-fruit-card {
            background: var(--glass-surface);
            border: 2px solid rgba(0, 212, 255, 0.2);
            border-radius: 20px;
            padding: 30px;
            transition: all 0.4s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            animation: fruit-card-crystal-life 6s ease-in-out infinite;
            box-shadow: 
                0 8px 25px rgba(0, 212, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .crystal-fruit-card:nth-child(odd) { animation-delay: 0.8s; }
        .crystal-fruit-card:nth-child(even) { animation-delay: 2s; }

        @keyframes fruit-card-crystal-life {
            0%, 100% { 
                transform: scale(1);
                border-color: rgba(0, 212, 255, 0.2);
                box-shadow: 
                    0 8px 25px rgba(0, 212, 255, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1);
            }
            50% { 
                transform: scale(1.015);
                border-color: rgba(0, 212, 255, 0.35);
                box-shadow: 
                    0 12px 35px rgba(0, 212, 255, 0.15),
                    inset 0 2px 5px rgba(255, 255, 255, 0.15);
            }
        }

        .crystal-fruit-card:hover {
            transform: translateY(-8px) scale(1.03) !important;
            border-color: rgba(0, 212, 255, 0.6);
            box-shadow: 
                0 20px 50px rgba(0, 212, 255, 0.2),
                inset 0 2px 10px rgba(255, 255, 255, 0.2);
            background: var(--glass-intense);
            animation: crystal-pulse 1.5s ease-in-out infinite;
        }

        @keyframes crystal-pulse {
            0%, 100% { 
                box-shadow: 
                    0 20px 50px rgba(0, 212, 255, 0.2),
                    inset 0 2px 10px rgba(255, 255, 255, 0.2);
            }
            50% { 
                box-shadow: 
                    0 25px 60px rgba(0, 212, 255, 0.3),
                    inset 0 3px 15px rgba(255, 255, 255, 0.3);
            }
        }

        .fruit-name {
            font-family: 'Orbitron', monospace;
            color: var(--crystal-blue);
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 12px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            text-shadow: 0 0 10px rgba(0, 212, 255, 0.4);
        }

        .fruit-description {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.6;
            font-weight: 300;
            opacity: 0.9;
        }

        .crystal-link {
            display: inline-block;
            margin-top: 40px;
            font-family: 'Exo 2', sans-serif;
            font-size: 1.2rem;
            color: var(--crystal-blue);
            text-decoration: none;
            border-bottom: 2px solid rgba(0, 212, 255, 0.4);
            transition: all 0.3s ease;
            padding-bottom: 4px;
            font-weight: 400;
            letter-spacing: 0.05em;
            text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
        }

        .crystal-link:hover {
            color: var(--crystal-bright);
            border-bottom-color: rgba(74, 222, 128, 0.6);
            text-shadow: 0 0 15px rgba(74, 222, 128, 0.5);
            transform: translateY(-2px);
        }

        /* Energy Particles */
        .energy-particle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: var(--crystal-blue);
            border-radius: 50%;
            animation: particle-crystal-flow 12s linear infinite;
            opacity: 0;
            box-shadow: 0 0 6px rgba(0, 212, 255, 0.8);
        }

        @keyframes particle-crystal-flow {
            0% { 
                opacity: 0; 
                transform: translateY(0px) scale(0);
            }
            20% { 
                opacity: 1; 
                transform: translateY(-30px) scale(1);
            }
            80% { 
                opacity: 1; 
                transform: translateY(-120px) scale(1);
            }
            100% { 
                opacity: 0; 
                transform: translateY(-150px) scale(0);
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .brand-title { font-size: 2.8rem; }
            .crystal-card { padding: 35px 25px; }
            .fruits-grid { grid-template-columns: 1fr; }
            .crystal-container { padding: 40px 20px; }
        }
      `}</style>

      <div className="crystal-body">
        <div className="crystal-container">
          {/* Immersive Crystal Header */}
          <header className="crystal-header">
            <h1 className="brand-title">BluSlide.AI</h1>
            <p className="brand-subtitle">Digital Crystal Orchard</p>
            <p className="brand-tagline">Advanced Idea Acceleration Matrix</p>
          </header>

          {/* Crystal Seed Section */}
          <section className="crystal-card">
            <h2 className="card-title">Initialize Seed Protocol</h2>
            <div className="seed-section">
              <div className="crystal-seed">✨</div>
              <textarea 
                className="crystal-input" 
                placeholder="Input your conceptual matrix... what innovation vector seeks digital amplification?"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
              />
              <button className="crystal-button">Execute 500 Branch Generation</button>
            </div>
          </section>

          {/* Crystal Growth */}
          <section className="crystal-card">
            <h2 className="card-title">Neural Growth Matrix</h2>
            <div className="growth-canvas">
              <div className="progress-indicator">{progress}/500</div>
              <div className="tree-visualization">
                <div className="trunk"></div>
                <div className="branches-container">
                  <div className="branch branch-1">
                    <div className="growth-fruit" style={{top: '-8px', left: '-6px'}}></div>
                  </div>
                  <div className="branch branch-2">
                    <div className="growth-fruit" style={{top: '-8px', right: '-6px', animationDelay: '1s'}}></div>
                  </div>
                  <div className="branch branch-3">
                    <div className="growth-fruit" style={{top: '-8px', left: '-6px', animationDelay: '2s'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Connection Lines */}
              <div className="connection-line" style={{top: '35%', left: '18%', width: '80px', animationDelay: '1s'}}></div>
              <div className="connection-line" style={{top: '65%', right: '22%', width: '100px', animationDelay: '3s'}}></div>
              <div className="connection-line" style={{top: '50%', left: '35%', width: '90px', animationDelay: '5s'}}></div>
            </div>
          </section>

          {/* Crystal Harvest */}
          <section className="crystal-card">
            <h2 className="card-title">Optimal Output Matrix</h2>
            <div className="crystal-basket">
              <div className="fruits-grid">
                <div className="crystal-fruit-card" onMouseEnter={handleFruitHover} onClick={handleFruitClick}>
                  <span style={{fontSize: '2rem', display: 'block', marginBottom: '15px'}}>🔮</span>
                  <div className="fruit-name">Core Essence Protocol</div>
                  <div className="fruit-description">Primary algorithmic distillation of conceptual framework with maximum coherence optimization...</div>
                </div>
                <div className="crystal-fruit-card" onMouseEnter={handleFruitHover} onClick={handleFruitClick}>
                  <span style={{fontSize: '2rem', display: 'block', marginBottom: '15px'}}>⚡</span>
                  <div className="fruit-name">Acceleration Vector</div>
                  <div className="fruit-description">Neural enhancement pathway utilizing emergent technology amplification matrices...</div>
                </div>
                <div className="crystal-fruit-card" onMouseEnter={handleFruitHover} onClick={handleFruitClick}>
                  <span style={{fontSize: '2rem', display: 'block', marginBottom: '15px'}}>🌊</span>
                  <div className="fruit-name">Human Interface Layer</div>
                  <div className="fruit-description">Organic connection protocol bridging digital systems with human cognitive patterns...</div>
                </div>
                <div className="crystal-fruit-card" onMouseEnter={handleFruitHover} onClick={handleFruitClick}>
                  <span style={{fontSize: '2rem', display: 'block', marginBottom: '15px'}}>🎭</span>
                  <div className="fruit-name">Paradox Resolution Engine</div>
                  <div className="fruit-description">Advanced contradiction synthesis system generating novel solution pathways...</div>
                </div>
                <div className="crystal-fruit-card" onMouseEnter={handleFruitHover} onClick={handleFruitClick}>
                  <span style={{fontSize: '2rem', display: 'block', marginBottom: '15px'}}>💎</span>
                  <div className="fruit-name">Crystal Clarity Matrix</div>
                  <div className="fruit-description">Precision refinement algorithm delivering transparent high-fidelity insights...</div>
                </div>
                <div className="crystal-fruit-card" onMouseEnter={handleFruitHover} onClick={handleFruitClick}>
                  <span style={{fontSize: '2rem', display: 'block', marginBottom: '15px'}}>🔥</span>
                  <div className="fruit-name">Quantum Fire Protocol</div>
                  <div className="fruit-description">High-energy transformation engine maintaining system vitality and processing momentum...</div>
                </div>
              </div>
              
              <div style={{textAlign: 'center', marginTop: '40px'}}>
                <a href="#" className="crystal-link">Access Complete Neural Orchard (500 Branch Matrix) →</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}            box-shadow: 
                0 0 0 4px rgba(0, 212, 255, 0.2),
                inset 0 2px 20px rgba(0, 212, 255, 0.1);
            50% { 
                border-color: rgba(0, 212, 255, 0.4);
            background: rgba(0, 212, 255, 0.08);
                box-shadow: 
                    inset 0 2px 10px rgba(0, 0, 0, 0.3),
                    0 0 20px rgba(0, 212, 255, 0.2);
            }
        }

        .crystal-input:focus {
            outline: none;
            border-color: rgba(0, 212, 255, 0.6);

