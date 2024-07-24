import {nextui} from "@nextui-org/react";
import tailwind_scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans-serif font
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          fill: {
            1: "rgba(255, 255, 255, 0.10)",
          },
          scrollbarNormal: 'rgba(73,73,73,0.5)',
          scrollbarActive: 'rgb(0,110,237)',
          scrollbarTrack: 'rgb(197,197,197)',
          recruitBlue: "#0179FE", //main blue
          whiteText:'#FFFFFF',
          primaryText: '#000000',
          secondaryText: '#333333',
          tertiaryText: '#666666',
          subtext: '#475467',
          accentText: '#007BFF',
          warningText: '#FF0000',
          successText: '#28A745',
          infoText: '#17A2B8',
          inputLabel:'#333333',
          authbackground:'bg-gray-50',
          chapters:'#DDDDDD',
          chapterbutton:'#FFFFFF',
          authbackground:'#F9FAFB',
          indigo: {
            500: "#6172F3",
            700: "#3538CD",
          },
          success: {
            25: "#F6FEF9",
            50: "#ECFDF3",
            100: "#D1FADF",
            600: "#039855",
            700: "#027A48",
            900: "#054F31",
          },
          pink: {
            25: "#FEF6FB",
            100: "#FCE7F6",
            500: "#EE46BC",
            600: "#DD2590",
            700: "#C11574",
            900: "#851651",
          },
          purple: {
            50: '#F3E8FF',
            100: '#E9D8FD',
            200: '#D6BCFA',
            300: '#B794F4',
            400: '#9F7AEA',
            500: '#805AD5',
            600: '#6B46C1',
            700: '#553C9A',
            800: '#44337A',
            900: '#322659',
          },
          blue: {
            25: "#F5FAFF",
            100: "#D1E9FF",
            500: "#2E90FA",
            600: "#1570EF",
            700: "#175CD3",
            900: "#194185",
          },
          sky: {
            1: "#F3F9FF",
          },
          black: {
            1: "#00214F",
            2: "#344054",
          },
          gray: {
            25: "#FCFCFD",
            200: "#EAECF0",
            300: "#D0D5DD",
            500: "#667085",
            600: "#475467",
            700: "#344054",
            900: "#101828",
          },}, // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {
          fill: {
            1: "rgba(255, 255, 255, 0.10)",
          },
          scrollbarNormal: 'rgba(244,244,244,0.5)',
          scrollbarActive: 'rgb(0,110,237)',
          scrollbarTrack: 'rgb(39,39,39)',
          recruitBlue: "#0179FE", //main blue
          whiteText:'#000000',
          primaryText: '#FFFFFF', // White for primary text
          secondaryText: '#CCCCCC', // Light grey for secondary text
          tertiaryText: '#999999', // Medium grey for tertiary text
          subtext: '#8C8C8C', // Dark grey for subtext
          accentText: '#66B2FF', // Lighter blue for accent
          warningText: '#FF4C4C', // Light red for warning text
          successText: '#58D68D', // Light green for success text
          infoText: '#33CFFF', // Light teal for info text
          inputLabel:'#CCCCCC',
          authbackground:'bg-gray-900',
          chapters:'#5B5B5B',
          chapterbutton:'#999999',
          authbackground:'#111827',
          indigo: {
            500: "#6172F3",
            700: "#3538CD",
          },
          success: {
            25: "#F6FEF9",
            50: "#ECFDF3",
            100: "#D1FADF",
            600: "#039855",
            700: "#027A48",
            900: "#054F31",
          },
          pink: {
            25: "#FEF6FB",
            100: "#FCE7F6",
            500: "#EE46BC",
            600: "#DD2590",
            700: "#C11574",
            900: "#851651",
          },
          purple: {
            50: '#2D1B42',
            100: '#3E2965',
            200: '#4D3789',
            300: '#5D45AD',
            400: '#6E52D1',
            500: '#7F61F5',
            600: '#926EFF',
            700: '#A37CFF',
            800: '#B48AFF',
            900: '#C59AFF',
          },
          blue: {
            25: "#F5FAFF",
            100: "#D1E9FF",
            500: "#2E90FA",
            600: "#1570EF",
            700: "#175CD3",
            900: "#194185",
          },
          sky: {
            1: "#DDEFFF", // Lightened for dark background
          },
          black: {
            1: "#FFD9B3", // Inverted for dark theme
            2: "#CBB59D", // Adjusted for contrast in dark theme
          },
          gray: {
            25: "#1C1C1C", // Darkened for dark background
            200: "#383838", // Dark grey
            300: "#4F4F4F", // Medium grey
            500: "#B3B3B3", // Light grey
            600: "#8C8C8C", // Medium-light grey
            700: "#696969", // Medium-dark grey
            900: "#E0E0E0", // Lightened for dark background
          },}, // dark theme colors
      },
      // ... custom themes
    },
    }),
    tailwind_scrollbar({ nocompatible: true, preferredStrategy: 'pseudoelements' }),
  ],
};
