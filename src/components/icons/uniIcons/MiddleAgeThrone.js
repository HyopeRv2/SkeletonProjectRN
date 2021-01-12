import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMiddleAgeThrone(props) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fill={props.color || '#000'}
        d="M489.55 14.32c-5.33 5.74-5.53 24.39-.2 29.93 3.07 3.48 3.48 8.4 3.48 35.26v31.16l-20.91-1.02c-11.68-.41-24.39-1.23-28.29-1.64-6.15-.61-7.38.21-9.02 4.92-1.64 4.3-1.23 6.35 1.43 9.43 3.07 3.49 5.94 3.69 25.01 2.87l21.52-1.02v9.22c0 7.79 1.02 10.04 7.79 16.6l7.79 7.58 7.58-7.79c6.35-6.56 7.58-9.22 7.58-16.6v-9.02l23.57 1.02c21.11.82 23.98.41 27.06-2.87 2.66-3.07 3.08-5.12 1.43-9.43-1.64-4.71-2.87-5.53-9.02-4.92-3.89.41-17.01 1.23-29.1 1.64l-22.14 1.02V78.48c0-27.88.41-32.8 3.69-36.28 4.51-5.12 4.51-19.47-.2-26.65-4.5-6.97-13.31-7.38-19.05-1.23zM310.4 42.81c-7.38 7.38-4.3 23.78 5.94 32.8 4.51 3.89 7.99 11.68 15.17 33.21l9.22 28.08-19.27 6.35c-10.86 3.69-21.32 6.15-23.57 5.54-2.05-.62-5.94.61-8.4 2.66-3.89 3.07-4.3 4.51-2.66 9.43 2.25 6.56 11.27 9.22 16.19 5.12 3.89-3.28 31.77-12.5 32.8-10.86.41.82 1.84 4.72 3.07 8.81 1.84 5.53 4.51 8.2 11.68 11.68 5.12 2.46 10.04 4.1 10.86 3.69.82-.62 3.28-5.33 5.12-10.45 2.87-7.38 3.28-10.66 1.44-15.78-1.23-3.48-2.25-6.97-2.25-7.99 0-1.84 29.52-11.68 37.71-12.5 7.38-.82 10.45-5.33 8.61-12.5-1.84-7.38-10.04-9.43-16.19-4.1-3.69 3.48-42.43 18.04-43.45 16.4-.21-.21-4.71-13.32-9.84-29.11-7.58-23.37-9.22-30.54-8.2-38.13 2.26-19.27-12.91-33.41-23.98-22.35zM670.13 43.23c-6.15 5.33-9.22 16.4-6.97 24.8 1.23 4.92-6.56 33.21-17.42 62.31-1.23 3.28-37.51-8.61-43.86-14.35-6.35-5.94-15.58-2.87-16.4 5.33-.82 7.38 2.66 11.68 9.63 11.68 2.87 0 12.5 2.46 21.32 5.33 14.55 4.92 15.98 5.74 14.96 9.84-3.69 12.3-3.48 15.37.62 23.57 2.46 4.51 4.72 8.4 5.33 8.4 2.67 0 19.47-9.22 19.47-10.66 0-1.02 1.23-4.92 2.87-8.81l3.07-6.97 14.76 4.92c8.2 2.87 15.99 6.15 17.01 7.17 2.46 2.46 9.43 2.67 12.71.41 1.23-.82 2.87-3.48 3.69-5.94 1.85-5.94-4.92-13.12-10.87-11.48-5.53 1.43-43.86-11.48-42.63-14.55.41-1.23 4.92-14.55 9.84-29.72 6.97-21.32 10.04-27.88 13.53-29.52 5.74-2.46 11.89-17.83 10.04-24.8-2.87-11.68-11.89-14.55-20.7-6.96zM146.01 143.46c-4.71 2.66-4.71 12.71-.41 20.29 3.89 6.35 12.91 12.3 18.65 12.3 2.05 0 13.53 9.84 25.83 22.14l21.93 21.93-13.73 13.73c-7.79 7.58-16.4 14.76-19.68 15.78-6.97 2.67-8.81 7.17-5.74 13.73 3.07 7.17 14.35 6.35 18.04-1.23 1.23-2.87 7.17-9.63 12.71-15.37l10.45-10.04 6.76 6.56c5.74 5.74 8.2 6.56 17.42 6.56h10.66v-10.66c0-9.22-.82-11.68-6.56-17.42l-6.56-6.76 12.09-12.3c6.76-6.76 13.12-12.3 14.55-12.3 3.48 0 9.02-6.97 9.02-11.48 0-5.74-3.89-9.02-10.66-9.02-4.51 0-6.35 1.44-8.2 5.53-1.23 3.28-8.81 12.5-16.81 20.7l-14.55 14.76-22.96-22.96c-14.35-14.35-23.16-24.6-23.16-27.26.02-12.29-18.64-23.36-29.09-17.21zM826.32 151.04c-7.79 5.12-11.48 10.66-11.69 16.81 0 3.89-5.95 11.07-22.55 27.67l-22.55 22.55L756 204.75c-7.38-7.38-14.76-16.4-16.19-20.09-2.25-5.12-4.1-6.56-8.61-6.56-3.28 0-6.97 1.02-8.4 2.46-5.12 5.12-2.26 10.66 13.53 25.42l15.78 14.76-6.76 7.17c-6.15 6.35-6.77 7.99-6.15 17.01l.61 10.04 10.04.61c9.02.62 10.66 0 17.01-6.15l7.17-6.76 15.99 16.81c17.63 18.65 24.6 21.52 28.9 12.09 2.67-5.94-.61-13.53-5.94-13.53-3.69 0-33.21-28.29-33.21-31.77 0-3.69 41.82-44.07 45.71-44.07 10.66 0 21.93-11.48 21.93-22.34.02-11.68-10.02-15.98-21.09-8.81zM483.81 187.12v25.62l-10.25 1.23c-17.83 2.25-44.07 9.02-60.06 15.37-8.4 3.49-15.99 6.15-17.01 6.15s-5.54-11.68-10.25-26.24c-4.92-14.35-9.43-26.85-10.25-27.67-.61-.82-3.07 2.05-5.12 6.56l-3.69 8.2-8-4.1c-4.51-2.26-8.61-3.69-9.22-3.08-.61.62 3.48 14.76 9.22 31.77l10.25 30.75-13.53 10.25c-7.58 5.54-19.27 15.78-26.03 22.55l-12.3 12.5-28.08-28.08-28.29-28.29v21.52h-19.47L285.6 306l43.66 43.66 4.92 24.39c2.66 13.32 4.71 24.8 4.51 25.62-.41.82-22.75-15.99-49.6-37.51-37.71-29.93-51.65-39.97-60.26-42.84-12.09-4.1-18.86-4.92-18.86-2.05 0 .82 3.48 6.97 7.58 13.12 6.15 9.43 19.06 20.7 68.46 59.85l60.88 48.17 2.25 10.66c1.23 5.74 2.05 10.66 1.64 11.07-.21.41-19.47-10.45-42.43-24.19-27.88-16.4-45.91-25.62-53.29-27.47-23.16-5.74-25.62-2.87-11.27 12.91 6.97 7.99 20.5 17.01 60.88 40.58 28.49 16.6 52.27 30.54 52.68 30.95.82.82 6.56 27.88 5.94 28.7-.41.21-19.47-9.63-42.63-21.93-40.58-21.52-42.43-22.34-54.93-22.34H252.8l3.07 5.53c6.35 12.09 16.6 19.06 64.36 44.48 27.26 14.35 49.6 26.44 49.81 26.44 0 .21 3.89 24.6 8.81 54.11l8.61 53.91h-46.32v38.94H660.9V662.02l-23.16-.62-23.16-.61 9.02-55.34 9.02-55.34 46.12-24.6c34.43-18.45 48.17-26.85 54.11-33.21 12.09-13.12 11.07-15.58-5.74-14.55-12.91 1.02-16.6 2.46-50.42 20.7-20.09 11.09-36.69 19.91-37.1 19.91-.82 0 4.51-26.44 5.95-28.7.41-.82 22.75-14.35 49.4-29.93 36.9-21.52 50.43-30.75 57.39-38.33 14.14-15.78 11.69-18.65-11.48-12.91-7.38 1.64-24.8 10.66-50.01 25.62-21.31 12.5-38.95 22.75-39.15 22.75s.62-5.53 2.05-12.5c1.64-7.58 4.1-13.53 6.35-15.17 2.26-1.43 27.88-21.73 57.19-44.89 50.84-40.59 62.31-51.65 67.23-65.39 1.64-4.71-2.87-4.51-17.42.41-8.82 3.07-22.14 12.5-56.78 39.97-24.8 19.88-45.71 36.08-46.12 36.08-.21 0 1.85-11.89 4.72-26.65l5.33-26.65 36.89-36.9 36.9-36.9h-19.48v-21.52l-23.37 23.37-23.57 23.38-16.4-15.37c-9.02-8.61-20.7-18.24-25.83-21.32-5.13-3.28-9.22-7.17-9.22-8.61 0-1.44 4.1-14.96 9.22-30.34 5.12-15.37 9.02-28.49 8.4-28.9-.41-.41-4.71 1.02-9.43 3.48l-8.4 4.31-3.28-8.2c-1.85-4.71-3.9-8.4-4.51-8.4-.82 0-5.53 12.3-10.45 27.47l-9.22 27.47-12.3-5.12c-15.58-6.56-45.09-14.14-62.92-15.99l-13.94-1.44v-25.42c0-13.94-.41-25.42-1.02-25.42-.61 0-3.69 3.07-6.97 6.56l-6.15 6.76-6.76-6.76c-3.89-3.48-7.38-6.56-7.79-6.56-.63 0-1.04 11.48-.83 25.42zm47.96 79.32c38.13 4.71 72.15 21.93 89.37 45.5 4.92 6.76 9.64 14.14 10.25 16.6.82 3.28-48.37 281.43-57.8 327.55l-1.23 5.74H429.7l-1.23-5.74c-9.43-46.12-58.62-324.27-57.8-327.55.62-2.46 5.33-9.84 10.25-16.6 26.43-36.07 85.26-53.9 150.85-45.5z"
      />
      <Path
        fill={props.color || '#000'}
        d="M488.73 352.74c-5.94 10.45-11.68 20.09-12.71 21.52-1.23 1.64-7.17-1.02-20.29-9.02-10.04-6.35-18.86-10.86-19.47-10.45-.82.82 6.97 30.75 14.76 57.39 1.03 3.48 5.12 3.69 50.01 3.69s48.99-.21 50.01-3.69c7.79-26.65 15.58-56.57 14.76-57.39-.61-.41-9.43 4.1-19.47 10.45-13.12 7.99-19.06 10.66-20.29 9.02-1.02-1.44-6.77-11.07-12.71-21.52-5.94-10.25-11.48-18.86-12.3-18.86-.82 0-6.36 8.61-12.3 18.86zM242.14 607.31c-6.15 18.65-10.66 34.23-10.04 34.85 1.44 1.64 130.57 1.64 132 .21.61-.61-2.05-14.35-5.74-30.34-3.89-15.99-7.38-31.16-7.99-33.82l-1.02-4.51h-95.92l-11.29 33.61zM652.71 574.31c0 .41-3.28 15.17-7.17 32.8-3.9 17.63-7.17 33-7.17 34.23 0 2.25 129.34 3.08 131.6.82.61-.61-3.89-16.19-10.04-34.85l-11.3-33.61h-47.96c-26.44 0-47.96.2-47.96.61zM275.96 665.32c-1.64 3.08-73.59 175.46-77.48 185.71-1.23 3.28 3.07 3.49 59.44 3.49h60.68V661.84h-20.5c-17.22 0-20.7.61-22.14 3.48zM683.45 758.17v96.34h60.47c33.21 0 60.47-.61 60.26-1.64 0-.82-17.83-43.86-39.35-95.72l-39.36-94.29-21.11-.61-20.91-.62v96.54z"
      />
      <Path
        fill={props.color || '#000'}
        d="M341.15 804.29v76.87l-88.55.41-88.75.61-9.63 19.47c-5.12 10.66-9.63 20.09-9.63 20.91-.21 1.02 44.07 1.64 98.18 1.64h98.39v24.6H106.45l-10.86 20.5-10.86 20.5 9.22.2H904l11.27-.2-10.86-20.5-10.87-20.5H660.9v-24.6h194.72l-2.87-6.56c-1.43-3.69-5.94-13.32-9.63-21.11l-6.97-14.35-87.52-.61-87.73-.41V727.42H341.15v76.87z"
      />
    </Svg>
  );
}

export default SvgMiddleAgeThrone;
