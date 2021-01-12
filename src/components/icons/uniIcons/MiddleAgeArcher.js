import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMiddleAgeArcher(props) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fill={props.color || '#000'}
        d="M535.77 12.23c-3.57 2.77-7.53 15.26-7.53 23.38 0 3.17-18.43 35.47-46.37 82.03-25.56 42.21-46.76 77.08-47.16 77.48-.4.4-9.11-1.78-19.42-5.15-10.3-3.17-24.57-6.34-31.7-6.94-11.29-.99-13.47-.79-18.43 3.17-8.72 6.94-26.35 45.18-22.59 48.94.79.59 5.35-.4 10.3-2.38 5.15-1.78 9.51-2.97 10.11-2.58.4.59 2.18 8.12 3.76 16.64 1.39 8.52 3.76 18.63 5.15 22.19 1.19 3.57 1.98 6.94 1.58 7.33-.4.2-28.33 6.14-62.22 12.68-33.69 6.74-63.8 13.28-66.78 14.27-7.33 2.97-11.49 9.91-11.49 19.42 0 14.66 3.76 16.84 49.54 28.73 24.98 6.36 46.18 13.1 54.5 17.26 13.67 6.74 13.87 6.74 41.61 6.74 30.91 0 51.52-4.36 68.96-14.46 7.73-4.56 38.24-31.9 36.66-32.89-5.35-3.37-32.69-11.89-42.8-13.47-14.86-2.18-22.19-4.56-22.19-7.13 0-1.79 54.49-3.57 167.44-5.35l61.43-.99-31.7 11.1c-27.54 9.51-35.27 11.29-58.46 13.67-14.66 1.58-32.3 2.97-39.23 2.97-16.05 0-20.81 2.58-41.61 22.19-27.74 26.16-55.68 36.26-100.46 36.06-18.82 0-26.16-.79-35.27-4.16l-11.69-3.96 1.19 4.16c2.77 11.69 13.08 74.31 13.08 80.45 0 13.28 1.58 15.46 12.68 18.03 15.44 3.35 68.74 4.54 89.34 1.97 25.96-3.57 26.75-3.77 26.75-9.91.2-4.75.4-4.95 2.77-1.59 1.59 1.98 12.09 19.82 23.78 39.83l21 36.46-1.19 10.7c-.99 8.52-.6 11.49 2.18 14.07 7.53 7.53 18.83 1.19 18.83-10.7 0-16.65 12.88-35.47 39.43-57.46 32.3-26.75 57.46-58.65 76.09-95.9 9.51-19.02 20.02-49.74 22.19-64.6 1.19-8.52 1.98-9.31 8.92-11.49 15.46-4.56 23.38-17.44 18.03-29.13l-2.18-4.75 15.46-.2c8.32-.2 22.79-.79 32.1-1.39l16.84-1.39v-11.89H680.01l-3.37-19.02c-10.7-61.23-38.04-108.39-88.18-152.18-31.7-27.94-43.79-53.9-38.44-82.83 2.18-11.29 2.18-13.08-.99-16.45-4.15-4.56-8.71-4.95-13.26-1.58zm8.52 83.02c4.56 6.94 15.06 18.82 23.38 26.55 34.08 31.31 48.55 48.15 63.01 73.32 13.47 23.38 22.99 51.72 27.15 81.64l1.19 8.52h-10.3c-5.74.2-60.04 1.39-120.47 2.77-60.44 1.59-110.57 2.38-111.16 1.98-.79-.4-.59-4.95.4-10.11 1.98-10.1 5.75-14.46 12.68-14.46 2.38 0 8.52-1.39 13.47-3.17 15.26-5.15 25.56.6 21.4 11.69-1.59 4.16-1.39 4.76 1.78 3.96 1.98-.59 5.94-3.57 8.92-6.54 5.15-5.35 5.35-6.74 4.36-17.63-1.59-18.03-11.49-36.66-24.17-45.38-5.35-3.57-10.11-7.33-10.5-8.32-.4-.99 18.23-32.89 41.41-71.33l42.21-69.55 3.56 11.69c1.77 6.34 7.12 17.24 11.68 24.37zm108.58 263.74c-13.47 48.74-45.57 96.7-86.39 129.59-18.03 14.47-31.31 29.13-37.45 41.02-1.79 3.17-3.77 4.95-4.76 4.16-.79-.99-12.48-20.41-25.56-43l-23.98-41.21 3.57-35.67c1.98-19.42 4.16-35.87 4.56-36.26.4-.4 25.36-3.57 55.68-6.94 52.51-6.14 55.88-6.74 83.22-16.05 15.46-5.15 29.92-9.71 31.71-9.71 2.97-.2 2.97.99-.6 14.07z"
      />
      <Path
        fill={props.color || '#000'}
        d="M343.17 509.58c-1.98 7.93-9.91 32.7-17.44 55.09-7.73 22.39-14.27 42.8-14.86 45.57-2.77 15.06 26.75 34.08 64.8 41.81 28.53 5.55 66.18 5.55 88.18 0 19.22-4.95 40.82-15.46 54.29-25.96l9.91-7.93-2.58-7.33c-1.59-4.16-10.11-24.37-19.02-44.98-8.92-20.81-18.63-45.18-21.4-54.1l-5.35-16.64-7.93 1.19c-40.82 6.34-77.48 6.34-116.91 0l-8.12-1.39-3.57 14.67zM328.11 652.45c0 1.39-1.39 14.66-2.97 29.52l-2.77 27.34-11.1 16.05c-6.14 8.92-10.7 17.44-10.11 18.82.6 1.58 4.76 5.15 9.12 8.12l8.12 5.55-.99 24.77c-.6 13.67-2.18 62.42-3.57 108.39-2.38 83.42-2.38 83.82 1.78 89.17 2.18 3.17 7.13 6.74 10.9 8.12 5.94 2.38 7.93 2.18 14.07-.2 3.77-1.78 8.52-5.15 10.11-7.73 2.38-3.57 5.55-30.71 13.08-109.38 5.35-57.66 9.91-105.41 9.91-106.21 0-.79 3.96-2.97 8.92-4.75 4.95-1.98 9.31-4.36 10.11-5.35.59-.99-1.39-9.12-4.36-18.23L383.01 720l5.35-22.19c6.34-27.34 6.34-28.14.4-28.14-8.52 0-43-9.71-51.92-14.66-5.37-2.96-8.73-3.95-8.73-2.56zM496.53 654.83c-9.31 5.35-26.75 11.29-43 14.66l-16.05 3.17 10.9 29.72 10.9 29.72-2.18 13.87c-1.19 7.53-2.77 15.85-3.37 18.23-.99 3.77-.2 4.36 9.31 5.94l10.3 1.58 37.26 103.05c20.41 56.67 38.25 104.62 39.43 106.6s5.35 4.95 9.11 6.54c13.08 5.55 28.73-4.16 28.54-17.83-.2-3.37-12.48-52.9-27.54-110.17L532.6 755.88l4.36-4.95c10.7-12.09 10.9-10.7-3.17-25.36l-12.69-13.28-7.73-30.32c-4.16-16.45-8.52-30.12-9.71-30.12-1.18.2-4.35 1.39-7.13 2.98z"
      />
    </Svg>
  );
}

export default SvgMiddleAgeArcher;
