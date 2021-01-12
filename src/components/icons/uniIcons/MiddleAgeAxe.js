import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMiddleAgeAxe(props) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fill={props.color || '#000'}
        d="M577.78 20.52c-2.68 7.22-8.25 15.06-18.36 25.79l-14.65 15.47-4.54-4.33c-4.95-4.54-13.41-5.36-17.13-1.65-3.09 3.09-3.3 13.2-.41 15.06 3.92 2.48 2.06 5.16-9.28 12.58-6.19 4.13-11.35 8.05-11.35 8.46 0 2.48 5.36 10.73 10.73 16.51l6.19 6.4 10.73-11.14 10.52-11.14 28.88 37.14c15.88 20.63 28.68 38.38 28.26 39.82-.82 2.48-43.53 92.64-44.36 93.67-.41.21-17.95 2.06-39.2 3.92-43.74 3.92-50.75 2.68-31.98-5.78 19.81-9.08 30.33-23.11 31.98-42.91 1.24-13.82 4.33-12.17-31.36-17.74-12.38-1.86-23.93-4.13-25.17-4.74-1.65-.82 4.75-6.81 16.3-15.47l18.98-14.24-6.19-4.95c-16.3-13-47.04-17.54-68.7-10.11-30.95 10.73-45.8 46.83-31.15 75.51 5.78 11.14 18.57 24.96 27.85 30.12 3.92 2.06 7.22 4.75 7.22 5.98 0 4.33-10.52 17.54-13.82 17.54-2.06 0-25.17 21.46-51.37 47.66l-48.07 47.85-38.38-4.33c-21.25-2.27-38.79-4.54-39.2-4.95-.83-.82-44.36-90.78-44.36-91.6 0-.41 6.4-2.68 14.24-4.95l14.24-4.33-2.27-6.6c-1.24-3.71-3.92-9.7-6.19-13.21l-3.92-6.81-8.46 5.36c-14.65 8.87-18.57 10.32-19.6 7.43-3.09-9.28-14.85-11.55-20.01-3.71-2.48 3.71-2.68 5.98-1.03 10.52 2.68 7.01 2.06 7.43-16.51 13.82-8.67 2.89-18.57 4.54-27.85 4.75-7.84 0-15.06.83-15.89 2.06-2.89 3.92-1.65 19.6 2.48 30.12 7.22 19.6 19.39 32.39 33.42 35.69l5.57 1.24-2.89-7.22c-4.33-10.11-3.71-20.01 1.65-28.06 4.95-7.43 30.12-27.65 31.98-25.79.41.62 10.52 20.43 22.08 44.15l21.04 42.91-4.75 5.78c-5.57 6.4-6.6 19.39-2.27 28.06 3.71 7.22 15.27 14.44 23.31 14.44 6.6 0 7.43.83 16.09 18.16 10.52 20.84 13.62 24.14 20.84 22.28 9.28-2.27 10.32-8.46 4.13-22.28-3.09-6.81-5.16-12.79-4.54-13.2.41-.41 13.62.62 29.5 2.48 15.68 1.65 31.36 2.68 34.87 2.06 4.33-1.03 14.24-9.49 34.46-29.5 15.68-15.47 28.68-27.85 29.09-27.44.41.62 3.3 24.96 6.4 54.06 7.01 67.46 14.24 93.67 29.3 106.87 10.11 8.67 51.99 20.84 108.11 31.15l13.41 2.48 22.7 28.88c12.58 15.89 22.49 30.33 22.08 32.19-1.24 6.81-14.86 33.42-23.11 45.6-9.49 14.03-24.96 30.95-28.26 30.95-1.24 0-2.68-5.36-3.51-11.97-1.44-12.59-5.57-28.26-9.49-35.69-2.06-3.51-2.89-3.92-4.33-1.65-1.03 1.65-1.86 5.57-1.86 8.67 0 9.08-5.98 20.01-16.92 30.74-9.9 10.11-34.45 26.82-36.93 25.38-.62-.62-1.86-5.98-2.68-12.38-1.86-15.68-5.36-31.98-7.01-31.98-.83 0-3.09 3.92-5.36 8.46-2.27 4.95-8.46 12.17-15.47 17.54-11.14 9.08-40.85 27.65-43.95 27.65-.82 0 .83-5.16 3.71-11.55 10.73-24.35 13.82-50.96 8.25-69.74-1.65-5.36-6.6-15.47-11.14-22.49-14.24-22.08-18.16-45.6-11.97-72.21 3.3-13.82 3.51-13.82-15.06-2.89-16.3 9.49-39.2 31.98-48.28 47.04-12.59 21.25-16.71 37.96-16.51 65.81.21 25.38 3.92 43.53 14.03 68.91l5.36 13.2-28.88 53.02-28.68 53.02 31.77 52.82 31.98 53.02-1.44 15.89-1.24 16.09h64.58l-2.48-4.74c-1.44-2.48-5.98-10.11-10.11-16.92-6.6-11.14-51.58-107.49-51.58-110.58 0-.83 5.78-3.51 13-5.98 14.85-5.36 30.95-15.27 46.42-28.47 10.94-9.29 33.22-35.49 39.41-46.22 3.1-5.36 7.01-6.6 62.51-20.22 71.38-17.54 98.62-25.58 136.79-40.64 44.36-17.54 81.5-37.55 103.98-55.91l9.08-7.43 44.57 9.08c24.55 4.95 44.77 9.08 45.18 9.49.41.21-5.36 9.49-12.79 20.84l-13.62 20.22 22.9 10.73c12.79 5.98 23.73 10.94 24.35 10.94.62 0 5.78-17.33 11.35-38.37 8.25-32.19 9.49-38.79 7.22-40.85-1.65-1.44-23.11-14.44-47.66-28.88l-44.77-26.41 7.22-9.49c10.11-13.41 20.63-35.9 24.76-53.02 3.71-16.09 3.1-53.44-1.24-72.42l-2.27-10.57-15.89 6.81c-35.9 15.47-80.26 22.08-117.6 17.54-26.41-3.3-130.19-23.93-132.87-26.61-.82-.83-2.27-7.63-2.89-15.06-.83-9.9.82-23.52 5.98-53.44l7.22-40.23-12.58-11.55-12.58-11.36 29.71-2.68c16.3-1.44 31.15-3.3 33.01-4.33 7.43-3.92 13-13.62 32.18-54.26 11.14-23.52 20.84-42.71 21.46-42.71.83 0 4.33 4.13 8.05 9.28 8.46 11.76 12.79 14.24 19.81 10.93 9.9-4.54 8.87-10.52-4.95-28.47-11.55-14.86-12.38-16.71-10.52-21.87 3.92-9.9-1.86-25.17-11.14-30.12-2.47-1.44-8.46-3.09-13.41-3.71-9.08-1.03-9.49-1.44-37.55-37.14-15.68-19.81-27.85-36.72-27.44-37.55 1.45-2.27 25.17-14.24 32.6-16.3 8.46-2.48 20.22 1.03 28.06 8.46 3.71 3.51 7.01 6.19 7.43 6.19.41 0 .83-5.16.83-11.35 0-14.24-6.39-27.44-18.98-39.61C601.3 17.63 588.3 10 583.14 10c-1.03 0-3.3 4.75-5.36 10.52z"
      />
      <Path
        fill={props.color || '#000'}
        d="M350.42 137.71c-16.92 4.13-33.63 17.95-42.5 35.28-4.33 8.05-4.95 12.38-5.16 34.87-.41 21.66-1.03 26.2-4.33 30.95-5.98 7.63-13.41 9.9-23.93 6.6-18.16-5.36-17.95-5.36-17.95 1.03 0 11.14 13.82 29.09 27.65 36.31 15.06 7.63 37.34 2.89 52.4-11.35 8.25-8.05 11.97-19.81 13.82-45.18 1.65-21.66 4.95-29.92 12.38-31.77 3.51-.83 5.16-2.68 5.16-5.78 0-6.81 9.08-24.35 16.3-30.95l6.4-6.19-5.57-5.78c-8.26-8.66-20.43-11.34-34.67-8.04zM762.02 194.65c-70.56 14.24-116.98 68.7-136.17 160.31-5.16 23.93-10.73 72.62-9.9 84.38l.62 8.87 13.41 3.1c9.29 2.06 26.2 3.09 54.67 3.09 36.11.21 43.53-.41 59.21-4.33 17.33-4.54 51.17-18.36 51.17-21.04 0-.62-1.24-5.16-2.68-9.9-2.27-7.84-3.92-9.28-17.33-16.09-20.01-9.9-34.04-23.11-41.88-38.79-10.11-21.04-10.32-40.64-.41-40.64 5.37 0 8.67 4.13 8.67 11.14.21 3.51 1.44 9.9 2.89 14.24 7.43 20.84 24.35 34.87 57.56 47.66 22.28 8.67 33.22 17.13 37.34 29.09 3.3 10.11 9.7 14.03 20.63 12.38 11.96-1.65 27.23-10.73 30.12-17.74 4.13-9.7-.83-29.5-14.44-58.59-6.19-13.41-6.6-15.06-4.95-27.85 4.33-33.22 1.45-45.39-18.57-76.13l-9.29-14.65 6.81-22.69c6.81-22.7 6.81-22.7 2.47-23.73-24.96-5.59-67.46-6.63-89.95-2.09zm75.31 111.41c6.81 6.6 7.02 18.36.62 25.17-10.52 11.14-30.53 2.89-30.53-12.79-.01-15.68 18.97-23.52 29.91-12.38zM851.56 529.09l-28.88 7.22-4.75 15.89c-2.47 8.67-7.84 21.87-11.55 29.09-3.92 7.43-6.81 13.62-6.6 14.03.41.21 14.85-6.4 32.19-14.85L863.54 565l10.51 10.1 10.73 10.32-8.87 17.95c-4.95 9.91-8.25 18.57-7.22 19.4 3.51 3.3 44.15 28.88 45.8 28.88 3.92 0 9.49-28.06 9.49-48.48 0-18.98-.62-21.66-6.81-34.87-10.73-22.9-27.44-46.63-32.39-46.42-2.27.2-17.12 3.29-33.22 7.21zM204.97 553.85c-39.61 7.43-66.02 41.06-66.02 84.18 0 14.44 1.03 19.19 10.11 45.39 2.68 7.63 4.33 17.33 4.33 26 0 31.15-21.04 51.99-62.93 61.9l-14.44 3.51 17.54 5.78c33.63 10.73 72.62 8.87 97.38-4.54 11.55-6.39 26.41-21.25 32.18-32.8 6.19-12.17 9.49-31.77 7.84-47.87-3.92-37.96-3.92-45.6-.41-50.96 5.78-8.87 14.44-11.76 32.19-10.93l15.68.62 2.48-10.11c1.44-5.78 5.16-16.09 8.67-23.31l5.98-13-8.67-6.4c-27.44-20.03-61.07-31.18-81.91-27.46zM494.84 777.5c-20.43 5.36-39.61 10.32-42.5 10.93-4.54 1.24-5.78 3.09-7.84 13.21-2.89 12.58-16.71 44.15-27.03 60.66l-5.98 9.91 52.4 46.42 52.41 46.63-4.13 11.76c-2.06 6.39-3.92 11.96-3.92 12.38 0 .21 12.58.62 27.85.62h27.85l-1.24-5.78c-5.78-22.69-11.14-29.71-85-108.11l-11.14-11.76 6.6-3.3c10.32-5.36 33.22-29.71 41.68-44.36 7.63-13 19.19-43.74 17.74-47.25-.4-.84-17.32 2.67-37.75 8.04z"
      />
    </Svg>
  );
}

export default SvgMiddleAgeAxe;
