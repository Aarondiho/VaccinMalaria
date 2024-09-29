/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/navigation/**/*.{js,jsx,ts,tsx}",
    "./src/screens/auth/**/*.{js,jsx,ts,tsx}",
    "./src/screens/home/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Livvic_400Regular', 'Livvic_500Medium', 'Livvic_700Bold','Livvic_900Black_Italic', 'sans-serif'],
      },
      colors: {
        "bg-one": "#EEE8D5", //#EBE4D9 #f7e5ca
        "bg-agent": "#f7e5ca", //#EBE4D9 #f7e5ca
        "text-black": "#2C1E0E",
        "text-white": "#EBE4D6",
        "btn-color": "#B88409",
        "input": "#E8E8E8",
        "main-one": "#1A7235",
        "main-one-light": "#A4C1AD",
        "main-two": "#BC141A",
        'gold': '#FFD700',
        'light-gold': '#F5D04E', 
        'dark-gold': '#B8860B',
        },
      boxShadow: {
        "sm-blur": "0 0 10px rgba(44, 30, 14, 0.05)",
      },
      dropShadow: { "sm-blur": "0 0 10px rgba(44, 30, 14, 0.05)" },
      backgroundImage: {
        'silver-gradient': 'linear-gradient(135deg, #C0C0C0 0%, #E5E5E5 100%)',
        'gold-gradient' :'linear-gradient(45deg, #FFD700, #FFC107, #FFB300, #FFA000)',
        
      },
    },
  },
  plugins: [],
}

