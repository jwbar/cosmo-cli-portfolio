import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', 'Source Code Pro', 'monospace'],
				display: ['Orbitron', 'JetBrains Mono', 'monospace'],
				code: ['Source Code Pro', 'JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				hacker: {
					orange: 'hsl(var(--hacker-orange))',
					purple: 'hsl(var(--hacker-purple))',
					cyan: 'hsl(var(--hacker-cyan))',
					yellow: 'hsl(var(--hacker-yellow))',
					red: 'hsl(var(--hacker-red))',
					blue: 'hsl(var(--hacker-blue))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'neon-pulse': {
					'0%, 100%': { 
						textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
						transform: 'scale(1)'
					},
					'50%': { 
						textShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor, 0 0 12px currentColor',
						transform: 'scale(1.02)'
					}
				},
				'matrix-drop': {
					'0%': { transform: 'translateY(-100vh)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'cyber-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
						borderColor: 'currentColor'
					},
					'50%': { 
						boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
						borderColor: 'currentColor'
					}
				},
				'scan-line': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'terminal-boot': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'50%': { opacity: '0.5' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'code-flow': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '100% 100%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'matrix-drop': 'matrix-drop 3s linear infinite',
				'cyber-glow': 'cyber-glow 1.5s ease-in-out infinite',
				'scan-line': 'scan-line 2s linear infinite',
				'glitch': 'glitch 0.3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'terminal-boot': 'terminal-boot 0.8s ease-out',
				'code-flow': 'code-flow 10s linear infinite'
			},
			backgroundImage: {
				'gradient-matrix': 'var(--gradient-matrix)',
				'gradient-cyber': 'var(--gradient-cyber)',
				'gradient-terminal': 'var(--gradient-terminal)',
				'gradient-neon': 'var(--gradient-neon)',
				'gradient-scan': 'var(--gradient-scan)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
