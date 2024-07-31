import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
:root {
  
  &, &.dark-mode {
    --color-grey-0: #000009;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-500: #00ff00;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgb(30 30 30 / 26%);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2rem 2.8rem rgba(0, 0, 0, 0.4);
--shadow-inset: inset 0px 2px 5px 0px rgb(79 40 255 / 80%);
--shadow-outset: 0px 1px 8px 0px rgb(79 40 255 / 80);
--shadow-inset-bot: inset 0px -2px 8px 0px rgb(79 40 255 / 80%);
--shadow-inset-full:inset 0px 0px 25px 25px rgb(79 40 255 / 80%);
--icon-color: var(--color-grey-900);

--image-grayscale: 10%;
--image-opacity: 90%;
  }
  
  &.light-mode {
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-500: #00ff00;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.26);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
--shadow-inset: inset 0px 3px 8px 0px rgb(79 40 255 / 80%);
--shadow-outset: 0px 1px 8px 0px rgb(79 40 255 / 80%);
--shadow-outset-hover: 0px 0px 30px 0px rgb(79 40 255 / 80%);
--shadow-inset-bot: inset 0px -2px 8px 0px rgb(79 40 255 / 80%);
--shadow-inset-full:inset 0px 0px 25px 25px rgb(79 40 255 / 80%);

--shadow-inset-nc: inset 0px 3px 8px 0px;
--shadow-inset-bot-nc: inset 0px -2px 8px 0px;

    --image-grayscale: 0;
  --image-opacity: 100%;
  }
  
  
  
  /* Indigo */
  &{

    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #42139a; // 3730a3
    --color-brand-900: #312e81;
    --filter-blur-md: blur(15px);
    --filter-blur-lg: blur(50px);
  
    --color-back: #33383f51;
    --color-back-md: #232529bf;
  
    --border-main-sm: 2px solid #33383fa3;
  
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 15px;
    --border-radius-lg: 3.2rem;
  
    --shadow-main: 0 0 10px #050505b4;
    --morabba: "Morabba";
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* Creating animations for dark mode */
}

html {
  font-size: 62.5%;
}
::-webkit-scrollbar {
      width: 12px;
   }

   ::-webkit-scrollbar-track {
      border-radius: 10px;
      margin-top: 55px; /* Adjust this value */
      border: 2px solid #3c414896;
   }

   ::-webkit-scrollbar-thumb {
      background: var(--color-grey-300);
      border-radius: 10px;
      border: 2px solid var(--color-grey-100);
   }

   ::-webkit-scrollbar-thumb:hover {
      background: var(--color-grey-200);
   }

   /* Hide scrollbar on mobile screens */
   @media screen and (max-width: 768px) {
      ::-webkit-scrollbar {
         display: none;
      }
   }
@font-face {
  font-family: "Morabba";
  font-weight: 500;
  src: url("/fonts/Morabba/Morabba-Medium.ttf");
  font-display: fallback
}

@font-face {
  font-family: "Morabba";
  font-weight: 600;
  src: url("/fonts/Morabba/Morabba-SemiBold.ttf");
  font-display: fallback
}

@font-face {
  font-family: "Morabba";
  font-weight: 700;
  src: url("/fonts/Morabba/Morabba-Bold.ttf");
  font-display: fallback
}

body {
  font-family: "Morabba", sans-serif;
  color: var(--color-grey-900);
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
  font-weight: 600;
}

img {
  max-width: 100%;

  /* For dark mode */
  /* filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity)); */
}

`;

export default GlobalStyles;

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/
