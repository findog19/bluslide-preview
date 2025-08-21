'use client';

import { useEffect, useState } from 'react';

export default function OrganismPage() {
  const [progress, setProgress] = useState(342);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Living progress counter
    const updateProgress = () => {
      if (progress < 500) {
        // Irregular, organic growth
        const growth = Math.random() > 0.7 ? Math.floor(Math.random() * 3) + 1 : 0;
        const newProgress = Math.min(progress + growth, 500);
        setProgress(newProgress);
        
        // Accelerate near completion
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
        sibling.style.borderColor = 'rgba(255, 138, 101, 0.2)';
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
    card.style.animation = 'fruit-hover-pulse 0.5s ease-in-out';
    setTimeout(() => {
      card.style.animation = '';
    }, 500);
  };

  const handleInputFocus = () => {
    const seedElement = document.querySelector('.living-seed');
    if (seedElement) {
      seedElement.style.animationDuration = '1.5s';
      seedElement.style.transform = 'scale(1.1)';
    }
  };

  const handleInputBlur = () => {
    const seedElement = document.querySelector('.living-seed');
    if (seedElement) {
      seedElement.style.animationDuration = '3s';
      seedElement.style.transform = 'scale(1)';
    }
  };

  const handleInputChange = (e) => {
    const length = e.target.value.length;
    if (length > 10) {
      e.target.style.animationDuration = '3s';
      e.target.style.borderColor = 'var(--electric-secondary)';
      e.target.style.background = 'rgba(77, 222, 128, 0.05)';
    } else {
      e.target.style.animationDuration = '7s';
      e.target.style.borderColor = 'var(--glass-border)';
      e.target.style.background = 'rgba(0, 0, 0, 0.4)';
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;900&family=Exo+2:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700&family=Caveat:wght@400;500;600&display=swap');

        :root {
            --void-deep: #0a0f14;
            --void-surface: #1a1f2e;
            --glass-border: rgba(255, 255, 255, 0.08);
            --glass-surface: rgba(255, 255, 255, 0.03);
            --electric-primary: #00d4ff;
            --electric-secondary: #4ade80;
            --soul-warm: #ff8a65;
            --soul-gold: #ffd93d;
            --soul-whisper: #ff6b6b;
            --text-primary: #f8fafc;
            --text-secondary: #cbd5e1;
            --text-subtle: #94a3b8;
            --heartbeat-interval: 4s;
            --breath-interval: 6s;
        }

        .organism-body {
            background: radial-gradient(ellipse at top, var(--void-surface) 0%, var(--void-deep) 100%);
            color: var(--text-primary);
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
            min-height: 100vh;
            font-weight: 300;
            animation: body-breath 8s ease-in-out infinite;
            margin: 0;
            padding: 0;
        }

        @keyframes body-breath {
            0%, 100% { background-size: 100% 100%; }
            50% { background-size: 110% 110%; }
        }

        .organism-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 30px;
            position: relative;
        }

        /* Living Header */
        .living-header {
            text-align: center;
            margin-bottom: 80px;
            position: relative;
            animation: gentle-breath var(--breath-interval) ease-in-out infinite;
        }

        @keyframes gentle-breath {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-3px) scale(1.005); }
        }

        .brand-title {
            font-family: 'Orbitron', monospace;
            font-size: 3.2rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--electric-primary), var(--electric-secondary), var(--soul-gold));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 16px;
            letter-spacing: 0.02em;
            animation: title-pulse var(--heartbeat-interval) ease-in-out infinite;
        }

        @keyframes title-pulse {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.1); }
        }

        .brand-subtitle {
            font-family: 'Merriweather', serif;
            font-size: 1.1rem;
            color: var(--text-secondary);
            font-weight: 400;
            margin-bottom: 8px;
            animation: subtitle-sway 7s ease-in-out infinite;
        }

        @keyframes subtitle-sway {
            0%, 100% { transform: translateX(0px); }
            33% { transform: translateX(2px); }
            66% { transform: translateX(-2px); }
        }

        .brand-soul {
            font-family: 'Caveat', cursive;
            font-size: 1rem;
            color: var(--soul-warm);
            opacity: 0.8;
            animation: soul-glow 5s ease-in-out infinite;
        }

        @keyframes soul-glow {
            0%, 100% { text-shadow: 0 0 10px rgba(255, 138, 101, 0.3); }
            50% { text-shadow: 0 0 20px rgba(255, 138, 101, 0.5); }
        }

        /* Living Glass Cards */
        .living-card {
            background: var(--glass-surface);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 24px;
            padding: 48px;
            margin-bottom: 40px;
            position: relative;
            overflow: hidden;
            animation: card-breath var(--breath-interval) ease-in-out infinite;
            transition: all 0.4s ease;
        }

        @keyframes card-breath {
            0%, 100% { 
                transform: scale(1);
                box-shadow: 0 8px 32px rgba(255, 255, 255, 0.05);
            }
            50% { 
                transform: scale(1.002);
                box-shadow: 0 12px 40px rgba(255, 255, 255, 0.08);
            }
        }

        .living-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--electric-primary), transparent);
            opacity: 0.6;
            animation: energy-flow 3s ease-in-out infinite;
        }

        @keyframes energy-flow {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 0.8; }
            100% { transform: translateX(100%); opacity: 0; }
        }

        .living-card:hover {
            transform: scale(1.01) !important;
            border-color: rgba(77, 222, 128, 0.3);
            background: rgba(77, 222, 128, 0.03);
            animation-duration: 2s;
        }

        .card-title {
            font-family: 'Exo 2', sans-serif;
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--electric-primary);
            margin-bottom: 32px;
            text-align: center;
            animation: title-heartbeat var(--heartbeat-interval) ease-in-out infinite;
            letter-spacing: 0.02em;
        }

        .orchard-title {
            font-family: 'Merriweather', serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--soul-warm);
            margin-bottom: 32px;
            text-align: center;
            animation: title-heartbeat var(--heartbeat-interval) ease-in-out infinite;
        }

        @keyframes title-heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.02); }
            50% { transform: scale(1); }
            75% { transform: scale(1.01); }
        }

        /* Living Seed */
        .seed-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
        }

        .living-seed {
            width: 64px;
            height: 64px;
            background: radial-gradient(circle, var(--soul-gold), var(--soul-warm));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            position: relative;
        }

        .living-seed::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: radial-gradient(circle, transparent 60%, var(--soul-warm));
            opacity: 0;
            animation: seed-aura 4s ease-in-out infinite;
        }

        @keyframes seed-heartbeat {
            0%, 100% { 
                transform: scale(1); 
                box-shadow: 0 8px 32px rgba(255, 217, 61, 0.2); 
            }
            25% { 
                transform: scale(1.05); 
                box-shadow: 0 12px 40px rgba(255, 217, 61, 0.4); 
            }

            50% { 
                transform: scale(1.02); 
                box-shadow: 0 10px 36px rgba(255, 217, 61, 0.3); 
            }
            75% { 
                transform: scale(1.08); 
                box-shadow: 0 15px 45px rgba(255, 217, 61, 0.5); 
            }
        }

        @keyframes seed-aura {
            0%, 100% { transform: scale(1); opacity: 0; }
            50% { transform: scale(1.5); opacity: 0.3; }
        }

        .idea-input {
            width: 100%;
            max-width: 560px;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid var(--glass-border);
            border-radius: 16px;
            padding: 24px;
            color: var(--text-primary);
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            font-weight: 300;
            text-align: center;
            transition: all 0.4s ease;

            resize: none;
            min-height: 100px;
            backdrop-filter: blur(10px);
            animation: input-breath 7s ease-in-out infinite;
        }

        @keyframes input-breath {
            0%, 100% { border-color: var(--glass-border); }
            50% { border-color: rgba(77, 222, 128, 0.2); }
        }

        .idea-input:focus {
            outline: none;
            border-color: var(--electric-secondary);
            background: rgba(77, 222, 128, 0.05);
            box-shadow: 0 0 0 4px rgba(77, 222, 128, 0.1);
            animation: input-focus-pulse 2s ease-in-out infinite;
        }

        @keyframes input-focus-pulse {
            0%, 100% { box-shadow: 0 0 0 4px rgba(77, 222, 128, 0.1); }
            50% { box-shadow: 0 0 0 8px rgba(77, 222, 128, 0.15); }
        }

        .idea-input::placeholder {
            color: var(--text-subtle);
            font-style: italic;
        }

        .plant-button {
            background: linear-gradient(135deg, var(--electric-secondary), var(--electric-primary));
            border: none;
            border-radius: 12px;
            padding: 16px 32px;
            font-family: 'Exo 2', sans-serif;
            font-weight: 600;
            color: white;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
            animation: button-heartbeat 5s ease-in-out infinite;
            position: relative;
            overflow: hidden;
            letter-spacing: 0.02em;
        }

        @keyframes button-heartbeat {
            0%, 100% { 
                transform: scale(1);
                box-shadow: 0 4px 20px rgba(77, 222, 128, 0.25);
            }
            20% { 
                transform: scale(1.02);
                box-shadow: 0 6px 25px rgba(77, 222, 128, 0.35);
            }
            40% { 
                transform: scale(1);
                box-shadow: 0 4px 20px rgba(77, 222, 128, 0.25);
            }
            60% { 
                transform: scale(1.01);
                box-shadow: 0 5px 22px rgba(77, 222, 128, 0.3);
            }
        }

        .plant-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            animation: button-energy 6s ease-in-out infinite;
        }

        @keyframes button-energy {
            0%, 100% { left: -100%; }
            50% { left: 100%; }
        }

        /* Living Growth Canvas */
        .growth-canvas {
            height: 300px;
            background: linear-gradient(to bottom, 
                rgba(77, 222, 128, 0.08), 
                rgba(0, 212, 255, 0.05));
            border-radius: 20px;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(77, 222, 128, 0.15);
            animation: canvas-breath 8s ease-in-out infinite;
        }

        @keyframes canvas-breath {
            0%, 100% { 
                background: linear-gradient(to bottom, 
                    rgba(77, 222, 128, 0.08), 
                    rgba(0, 212, 255, 0.05));
            }
            50% { 
                background: linear-gradient(to bottom, 
                    rgba(77, 222, 128, 0.12), 
                    rgba(0, 212, 255, 0.08));
            }
        }

        .progress-indicator {
            position: absolute;
            top: 24px;
            right: 24px;
            font-family: 'Orbitron', monospace;
            font-size: 1.4rem;
            font-weight: 500;
            color: var(--electric-secondary);
            background: rgba(0, 0, 0, 0.6);
            padding: 12px 20px;
            border-radius: 12px;
            border: 1px solid var(--glass-border);
            backdrop-filter: blur(10px);
            animation: progress-pulse 3s ease-in-out infinite;
            letter-spacing: 0.1em;
        }

        @keyframes progress-pulse {
            0%, 100% { transform: scale(1); color: var(--electric-secondary); }
            50% { transform: scale(1.05); color: var(--soul-gold); }
        }

        /* Living Tree */
        .tree-visualization {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            animation: tree-sway 12s ease-in-out infinite;
        }

        @keyframes tree-sway {
            0%, 100% { transform: translateX(-50%) rotate(0deg); }
            25% { transform: translateX(-50%) rotate(0.5deg); }
            75% { transform: translateX(-50%) rotate(-0.5deg); }
        }

        .trunk {
            width: 6px;
            height: 80px;
            background: linear-gradient(to top, var(--electric-secondary), var(--electric-primary));
            margin: 0 auto;
            border-radius: 3px;
            opacity: 0.8;
            animation: trunk-grow 4s ease-in-out infinite;
        }

        @keyframes trunk-grow {
            0%, 100% { height: 80px; }
            50% { height: 85px; }
        }

        .branches-container {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 120px;
        }

        .branch {
            position: absolute;
            background: linear-gradient(45deg, var(--electric-secondary), var(--electric-primary));
            border-radius: 1px;
            opacity: 0.6;
            transform-origin: bottom center;
            animation: branch-grow 6s ease-in-out infinite;
        }

        @keyframes branch-grow {
            0%, 100% { transform: scale(1) rotate(var(--rotation)); }
            50% { transform: scale(1.1) rotate(calc(var(--rotation) + 2deg)); }
        }

        .branch-1 { --rotation: -20deg; width: 1px; height: 40px; bottom: 0; left: 48%; animation-delay: 0s; }
        .branch-2 { --rotation: 15deg; width: 1px; height: 35px; bottom: 20px; left: 52%; animation-delay: 1s; }
        .branch-3 { --rotation: -25deg; width: 1px; height: 30px; bottom: 35px; left: 45%; animation-delay: 2s; }

        .growth-fruit {
            position: absolute;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, var(--soul-gold), var(--soul-warm));
            border-radius: 50%;
            animation: fruit-life 4s ease-in-out infinite;
        }

        @keyframes fruit-life {
            0%, 100% { 
                transform: scale(0.8); 
                opacity: 0.8;
                box-shadow: 0 0 0 rgba(255, 217, 61, 0.3);
            }
            25% { 
                transform: scale(1.2); 
                opacity: 1;
                box-shadow: 0 0 8px rgba(255, 217, 61, 0.5);
            }
            50% { 
                transform: scale(0.9); 
                opacity: 0.9;
                box-shadow: 0 0 4px rgba(255, 217, 61, 0.4);
            }
            75% { 
                transform: scale(1.1); 
                opacity: 1;
                box-shadow: 0 0 6px rgba(255, 217, 61, 0.6);
            }
        }

        /* Connection Lines with Spark Effect */
        .connection-line {
            position: absolute;
            height: 3px;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(77, 222, 128, 0.15),
                rgba(77, 222, 128, 0.4), 
                rgba(77, 222, 128, 0.15),
                transparent);
            border-radius: 2px;
            animation: connection-pulse 6s ease-in-out infinite;
            overflow: hidden;
        }

        .connection-line::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent,
                rgba(77, 222, 128, 0.2),
                rgba(0, 212, 255, 0.8),
                rgba(255, 217, 61, 1),
                rgba(0, 212, 255, 0.8),
                rgba(77, 222, 128, 0.2),
                transparent);
            border-radius: 2px;
            box-shadow: 0 0 8px rgba(255, 217, 61, 0.6), 
                        0 0 4px rgba(0, 212, 255, 0.4);
            animation: spark-travel 8s ease-in-out infinite;
            transform: translateX(-100%);
        }

        .connection-line::after {
            content: '';
            position: absolute;
            top: -1px;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, 
                transparent,
                rgba(77, 222, 128, 0.1),
                rgba(77, 222, 128, 0.3),
                rgba(77, 222, 128, 0.1),
                transparent);
            border-radius: 3px;
            animation: line-glow 6s ease-in-out infinite;
        }

        @keyframes connection-pulse {
            0%, 100% { 
                opacity: 0.3; 
                transform: scaleX(0.8);
                filter: brightness(0.8);
            }
            50% { 
                opacity: 0.8; 
                transform: scaleX(1.1);
                filter: brightness(1.2);
            }
        }

        @keyframes spark-travel {
            0% { 
                transform: translateX(-100%) scaleX(0);
                opacity: 0;
            }
            10% { 
                transform: translateX(-80%) scaleX(0.3);
                opacity: 0.6;
            }
            50% { 
                transform: translateX(0%) scaleX(1);
                opacity: 1;
            }
            90% { 
                transform: translateX(80%) scaleX(0.3);
                opacity: 0.6;
            }
            100% { 
                transform: translateX(100%) scaleX(0);
                opacity: 0;
            }
        }

        @keyframes line-glow {
            0%, 100% { 
                opacity: 0.4;
                box-shadow: 0 0 2px rgba(77, 222, 128, 0.2);
            }
            50% { 
                opacity: 0.8;
                box-shadow: 0 0 6px rgba(77, 222, 128, 0.4);
            }
        }

        /* Living Harvest */
        .basket {
            background: radial-gradient(ellipse at center, 
                rgba(255, 138, 101, 0.08), 
                rgba(255, 217, 61, 0.04));
            border: 1px solid rgba(255, 138, 101, 0.2);
            border-radius: 20px;
            padding: 40px;
            position: relative;
            margin: 32px auto;
            max-width: 800px;
            animation: basket-breath 7s ease-in-out infinite;
        }

        @keyframes basket-breath {
            0%, 100% { 
                transform: scale(1);
                border-color: rgba(255, 138, 101, 0.2);
            }
            50% { 
                transform: scale(1.005);
                border-color: rgba(255, 138, 101, 0.3);
            }
        }

        .fruits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
            margin-top: 24px;
        }

        .fruit-card {
            background: var(--glass-surface);
            border: 1px solid var(--glass-border);
            border-radius: 16px;
            padding: 24px;
            transition: all 0.4s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            animation: fruit-card-life 5s ease-in-out infinite;
        }

        .fruit-card:nth-child(odd) { animation-delay: 0.5s; }
        .fruit-card:nth-child(even) { animation-delay: 1.5s; }

        @keyframes fruit-card-life {
            0%, 100% { 
                transform: scale(1);
                border-color: var(--glass-border);
            }
            50% { 
                transform: scale(1.01);
                border-color: rgba(255, 138, 101, 0.15);
            }
        }

        .fruit-card:hover {
            transform: translateY(-4px) scale(1.02) !important;
            border-color: var(--soul-warm);
            box-shadow: 0 12px 40px rgba(255, 138, 101, 0.15);
            background: rgba(255, 138, 101, 0.05);
            animation: fruit-hover-pulse 1s ease-in-out infinite;
        }

        @keyframes fruit-hover-pulse {
            0%, 100% { box-shadow: 0 12px 40px rgba(255, 138, 101, 0.15); }
            50% { box-shadow: 0 16px 50px rgba(255, 138, 101, 0.25); }
        }

        .fruit-name-tech {
            font-family: 'Exo 2', sans-serif;
            color: var(--electric-primary);
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 8px;
            letter-spacing: 0.02em;
        }

        .fruit-name-organic {
            font-family: 'Merriweather', serif;
            color: var(--soul-warm);
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .orchard-link {
            display: inline-block;
            margin-top: 32px;
            font-family: 'Merriweather', serif;
            font-size: 1.1rem;
            color: var(--electric-secondary);
            text-decoration: none;
            border-bottom: 1px dashed rgba(77, 222, 128, 0.4);
            transition: all 0.3s ease;
            padding-bottom: 2px;
            font-weight: 400;
        }

        .orchard-link:hover {
            color: var(--soul-gold);
            border-bottom-color: rgba(255, 217, 61, 0.6);
        }

        /* Energy Particles */
        .energy-particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--electric-primary);
            border-radius: 50%;
            animation: particle-flow 8s linear infinite;
            opacity: 0;
        }

        @keyframes particle-flow {
            0% { 
                opacity: 0; 
                transform: translateY(0px) scale(0);
            }
            20% { 
                opacity: 1; 
                transform: translateY(-20px) scale(1);
            }
            80% { 
                opacity: 1; 
                transform: translateY(-80px) scale(1);
            }
            100% { 
                opacity: 0; 
                transform: translateY(-100px) scale(0);
            }
        }

        /* Soul Whispers - More Alive */
        .soul-whisper {
            position: absolute;
            font-family: 'Caveat', cursive;
            color: rgba(255, 138, 101, 0.25);
            font-size: 0.8rem;
            animation: soul-float 15s ease-in-out infinite;
            pointer-events: none;
            font-weight: 400;
        }

        @keyframes soul-float {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg); 
                opacity: 0.3; 
            }
            25% { 
                transform: translateY(-25px) rotate(2deg); 
                opacity: 0.7; 
            }
            50% { 
                transform: translateY(-15px) rotate(0deg); 
                opacity: 0.5; 
            }
            75% { 
                transform: translateY(-20px) rotate(-2deg); 
                opacity: 0.6; 
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .brand-title { font-size: 2.5rem; }
            .living-card { padding: 32px 24px; }
            .fruits-grid { grid-template-columns: 1fr; }
        }

        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
      `}</style>

      <div className="organism-body">
        <div className="organism-container">
          {/* Living Header */}
          <header className="living-header">
            <h1 className="brand-title">BluSlide.AI</h1>
            <p className="brand-subtitle">Digital Orchard of Ideas</p>
            <p className="brand-soul">where algorithms breathe with human dreams</p>
            
            {/* Soul Whispers */}
            <div className="soul-whisper" style={{top: '15%', left: '12%', animationDelay: '0s'}}>whisper</div>
            <div className="soul-whisper" style={{top: '25%', right: '18%', animationDelay: '5s'}}>flourish</div>
            <div className="soul-whisper" style={{bottom: '20%', left: '8%', animationDelay: '10s'}}>bloom</div>
            
            {/* Energy Particles */}
            <div className="energy-particle" style={{top: '20%', left: '30%', animationDelay: '1s'}}></div>
            <div className="energy-particle" style={{top: '30%', right: '25%', animationDelay: '3s'}}></div>
            <div className="energy-particle" style={{bottom: '15%', right: '15%', animationDelay: '5s'}}></div>
            <div className="energy-particle" style={{top: '10%', left: '60%', animationDelay: '7s'}}></div>
          </header>

          {/* Living Seed Section */}
          <section className="living-card">
            <h2 className="orchard-title">Plant Your Living Seed</h2>
            <div className="seed-section">
              <div className="living-seed">🌱</div>
              <textarea 
                className="idea-input" 
                placeholder="Breathe life into your idea... what vision wants to grow through you?"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
              />
              <button className="plant-button">CULTIVATE 500 LIVING BRANCHES</button>
            </div>
          </section>

          {/* Living Growth */}
          <section className="living-card">
            <h2 className="card-title">DIGITAL GROWTH MATRIX</h2>
            <div className="growth-canvas">
              <div className="progress-indicator">{progress}/500</div>
              <div className="tree-visualization">
                <div className="trunk"></div>
                <div className="branches-container">
                  <div className="branch branch-1">
                    <div className="growth-fruit" style={{top: '-6px', left: '-4px'}}></div>
                  </div>
                  <div className="branch branch-2">
                    <div className="growth-fruit" style={{top: '-6px', right: '-4px', animationDelay: '1s'}}></div>
                  </div>
                  <div className="branch branch-3">
                    <div className="growth-fruit" style={{top: '-6px', left: '-4px', animationDelay: '2s'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Connection Lines */}
              <div className="connection-line" style={{top: '40%', left: '20%', width: '60px', animationDelay: '1s'}}></div>
              <div className="connection-line" style={{top: '60%', right: '25%', width: '80px', animationDelay: '3s'}}></div>
            </div>
          </section>

          {/* Living Harvest */}
          <section className="living-card">
            <h2 className="orchard-title">Your Living Harvest</h2>
            <div className="basket">
              <div className="fruits-grid">
                <div className="fruit-card" onMouseEnter={handleFruitHover} onClick={handleFruitClick}>
                  <span style={{fontSize: '1.8rem', display: 'block', marginBottom: '12px'}}>🔮</span>
                  <div className="fruit-name-organic">Soul Essence</div>
                  <div style={{color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5'}}>The breathing heart of your idea, pulsing with pure intention...</div>
                </div>
                <div className="fruit-card" onMouseEnter={handleFruitHover} onClick={handleFruitClick}>
                  <span style={{fontSize: '1.8rem', display: 'block', marginBottom: '12px'}}>⚡</span>
                  <div className="fruit-name-tech">ELECTRIC ACCELERATION</div>
                  <div style={{color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5'}}>How technology could amplify your vision into living reality...</div>
                </div>
                <div className="fruit-card" onMouseEnter={handleFruitHover} onClick={handleFruitClick}>
                  <span style={{fontSize: '1.8rem', display: 'block', marginBottom: '12px'}}>🌊</span>
                  <div className="fruit-name-organic">Human Current</div>
                  <div style={{color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5'}}>The flowing connection between your idea and human hearts...</div>
                </div>
                <div className="fruit-card" onMouseEnter={handleFruitHover} onClick={handleFruitClick}>
                  <span style={{fontSize: '1.8rem', display: 'block', marginBottom: '12px'}}>🎭</span>
                  <div className="fruit-name-tech">PARADOX PROTOCOL</div>
                  <div style={{color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5'}}>The beautiful contradiction that gives your idea its computational life force...</div>
                </div>
                <div className="fruit-card" onMouseEnter={handleFruitHover} onClick={handleFruitClick}>
                  <span style={{fontSize: '1.8rem', display: 'block', marginBottom: '12px'}}>🌸</span>
                  <div className="fruit-name-organic">Gentle Revolution</div>
                  <div style={{color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5'}}>The quiet transformation breathing through your concept...</div>
                </div>
                <div className="fruit-card" onMouseEnter={handleFruitHover} onClick={handleFruitClick}>
                  <span style={{fontSize: '1.8rem', display: 'block', marginBottom: '12px'}}>🔥</span>
                  <div className="fruit-name-tech">NEURAL FIRE</div>
                  <div style={{color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5'}}>The passionate flame that keeps your algorithmic vision alive and processing...</div>
                </div>
              </div>
              
              <div style={{textAlign: 'center', marginTop: '32px'}}>
                <a href="#" className="orchard-link">walk through the living orchard (all 500 breathing branches) →</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
