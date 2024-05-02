import * as React from "react";
import { IconBaseProps } from "react-icons";

interface IconBackgroundProps extends IconBaseProps {
  backgroundColor?: string
}

export const Logo: React.FC<IconBaseProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.1667 0H3.83333C1.71624 0 0 1.71766 0 3.8365V19.1825C0 21.3014 1.71624 23.019 3.83333 23.019H19.1667C21.2838 23.019 23 21.3014 23 19.1825V3.8365C23 1.71766 21.2838 0 19.1667 0Z"
      fill="#2AA8FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.8626 7.83005C7.90469 7.8023 9.76526 7.02253 11.1804 5.75488C12.5955 7.02253 14.4561 7.8023 16.4982 7.83005C16.5724 8.27214 16.611 8.72632 16.611 9.18951C16.611 12.7392 14.3442 15.759 11.1804 16.8782C8.01656 15.759 5.74985 12.7392 5.74985 9.18951C5.74985 8.72632 5.78845 8.27214 5.8626 7.83005ZM13.6686 10.321C13.9181 10.0713 13.9181 9.66645 13.6686 9.41676C13.4191 9.16707 13.0146 9.16707 12.7651 9.41676L10.5016 11.6822L9.5957 10.7755C9.34622 10.5258 8.94167 10.5258 8.69219 10.7755C8.4427 11.0252 8.4427 11.4301 8.69219 11.6798L10.0498 13.0385C10.2993 13.2882 10.7039 13.2882 10.9533 13.0385L13.6686 10.321Z"
      fill="white"
    />
  </svg>
);

export const LogoWithName: React.FC<IconBaseProps> = ({
  size = 36,
  width = 92,
  height = 27,
  ...props
}) => {
  return (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 92 27"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1667 2H3.83333C1.71624 2 0 3.71766 0 5.8365V21.1825C0 23.3014 1.71624 25.019 3.83333 25.019H19.1667C21.2838 25.019 23 23.3014 23 21.1825V5.8365C23 3.71766 21.2838 2 19.1667 2Z"
        fill="#2AA8FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.8626 9.83005C7.90469 9.8023 9.76526 9.02253 11.1804 7.75488C12.5955 9.02253 14.4561 9.8023 16.4982 9.83005C16.5724 10.2721 16.611 10.7263 16.611 11.1895C16.611 14.7392 14.3442 17.759 11.1804 18.8782C8.01656 17.759 5.74985 14.7392 5.74985 11.1895C5.74985 10.7263 5.78845 10.2721 5.8626 9.83005ZM13.6686 12.321C13.9181 12.0713 13.9181 11.6665 13.6686 11.4168C13.4191 11.1671 13.0146 11.1671 12.7651 11.4168L10.5016 13.6822L9.5957 12.7755C9.34622 12.5258 8.94167 12.5258 8.69219 12.7755C8.4427 13.0252 8.4427 13.4301 8.69219 13.6798L10.0498 15.0385C10.2993 15.2882 10.7039 15.2882 10.9533 15.0385L13.6686 12.321Z"
        fill="white"
      />
      <path
        d="M42.426 7.364V20H39.348V12.422L36.522 20H34.038L31.194 12.404V20H28.116V7.364H31.752L35.298 16.112L38.808 7.364H42.426ZM54.4674 14.816C54.4674 15.104 54.4494 15.404 54.4134 15.716H47.4474C47.4954 16.34 47.6934 16.82 48.0414 17.156C48.4014 17.48 48.8394 17.642 49.3554 17.642C50.1234 17.642 50.6574 17.318 50.9574 16.67H54.2334C54.0654 17.33 53.7594 17.924 53.3154 18.452C52.8834 18.98 52.3374 19.394 51.6774 19.694C51.0174 19.994 50.2794 20.144 49.4634 20.144C48.4794 20.144 47.6034 19.934 46.8354 19.514C46.0674 19.094 45.4674 18.494 45.0354 17.714C44.6034 16.934 44.3874 16.022 44.3874 14.978C44.3874 13.934 44.5974 13.022 45.0174 12.242C45.4494 11.462 46.0494 10.862 46.8174 10.442C47.5854 10.022 48.4674 9.812 49.4634 9.812C50.4354 9.812 51.2994 10.016 52.0554 10.424C52.8114 10.832 53.3994 11.414 53.8194 12.17C54.2514 12.926 54.4674 13.808 54.4674 14.816ZM51.3174 14.006C51.3174 13.478 51.1374 13.058 50.7774 12.746C50.4174 12.434 49.9674 12.278 49.4274 12.278C48.9114 12.278 48.4734 12.428 48.1134 12.728C47.7654 13.028 47.5494 13.454 47.4654 14.006H51.3174ZM55.8392 14.96C55.8392 13.928 56.0312 13.022 56.4152 12.242C56.8112 11.462 57.3452 10.862 58.0172 10.442C58.6892 10.022 59.4392 9.812 60.2672 9.812C60.9272 9.812 61.5272 9.95 62.0672 10.226C62.6192 10.502 63.0512 10.874 63.3632 11.342V6.68H66.4412V20H63.3632V18.56C63.0752 19.04 62.6612 19.424 62.1212 19.712C61.5932 20 60.9752 20.144 60.2672 20.144C59.4392 20.144 58.6892 19.934 58.0172 19.514C57.3452 19.082 56.8112 18.476 56.4152 17.696C56.0312 16.904 55.8392 15.992 55.8392 14.96ZM63.3632 14.978C63.3632 14.21 63.1472 13.604 62.7152 13.16C62.2952 12.716 61.7792 12.494 61.1672 12.494C60.5552 12.494 60.0332 12.716 59.6012 13.16C59.1812 13.592 58.9712 14.192 58.9712 14.96C58.9712 15.728 59.1812 16.34 59.6012 16.796C60.0332 17.24 60.5552 17.462 61.1672 17.462C61.7792 17.462 62.2952 17.24 62.7152 16.796C63.1472 16.352 63.3632 15.746 63.3632 14.978ZM70.576 8.912C70.036 8.912 69.592 8.756 69.244 8.444C68.908 8.12 68.74 7.724 68.74 7.256C68.74 6.776 68.908 6.38 69.244 6.068C69.592 5.744 70.036 5.582 70.576 5.582C71.104 5.582 71.536 5.744 71.872 6.068C72.22 6.38 72.394 6.776 72.394 7.256C72.394 7.724 72.22 8.12 71.872 8.444C71.536 8.756 71.104 8.912 70.576 8.912ZM72.106 9.956V20H69.028V9.956H72.106ZM79.7366 12.512H78.0806V20H75.0026V12.512H73.8866V9.956H75.0026V9.668C75.0026 8.432 75.3566 7.496 76.0646 6.86C76.7726 6.212 77.8106 5.888 79.1786 5.888C79.4066 5.888 79.5746 5.894 79.6826 5.906V8.516C79.0946 8.48 78.6806 8.564 78.4406 8.768C78.2006 8.972 78.0806 9.338 78.0806 9.866V9.956H79.7366V12.512ZM91.803 9.956L85.503 24.77H82.191L84.495 19.658L80.409 9.956H83.847L86.169 16.238L88.473 9.956H91.803Z"
        fill="#2AA8FF"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconBaseProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconBaseProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const SmileFace: React.FC<IconBaseProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_32_1209)">
        <path
          d="M22 44.29C34.1503 44.29 44 34.4403 44 22.29C44 10.1397 34.1503 0.290009 22 0.290009C9.84974 0.290009 0 10.1397 0 22.29C0 34.4403 9.84974 44.29 22 44.29Z"
          fill="url(#paint0_linear_32_1209)"
        />
        <path
          d="M21.9999 38.646C14.3664 38.646 7.64499 33.5044 5.65481 26.1428C5.47484 25.4768 5.87006 24.7887 6.53593 24.6086C6.64343 24.5796 6.7536 24.5649 6.86334 24.5649C7.42654 24.5649 7.92279 24.9452 8.06997 25.4899C9.76587 31.7629 15.4941 36.144 21.9999 36.144C28.5056 36.144 34.2338 31.7629 35.9297 25.4899C36.0769 24.9453 36.5732 24.565 37.1365 24.565C37.2463 24.565 37.3565 24.5797 37.4641 24.6087C38.1297 24.7887 38.525 25.4769 38.3449 26.1428C36.3549 33.5045 29.6335 38.646 21.9999 38.646Z"
          fill="url(#paint1_linear_32_1209)"
        />
        <path
          d="M31.8409 2.60983C33.3246 5.5712 34.161 8.91322 34.161 12.4511C34.161 24.6013 24.3113 34.451 12.1611 34.451C8.62321 34.451 5.28119 33.6147 2.31982 32.1309C5.93196 39.34 13.3872 44.2896 21.9996 44.2896C34.1499 44.2896 43.9996 34.4399 43.9996 22.2896C43.9996 13.6772 39.05 6.22197 31.8409 2.60983Z"
          fill="url(#paint2_linear_32_1209)"
        />
        <path
          d="M15.7643 16.1192C15.7643 18.0013 14.2386 19.527 12.3566 19.527C10.4745 19.527 8.94873 18.0012 8.94873 16.1192C8.94873 14.2372 10.4745 12.7114 12.3566 12.7114C14.2386 12.7114 15.7643 14.2372 15.7643 16.1192Z"
          fill="url(#paint3_linear_32_1209)"
        />
        <path
          d="M15.2009 16.1195C15.2009 17.6902 13.9275 18.9636 12.3568 18.9636C10.786 18.9636 9.5127 17.6903 9.5127 16.1195C9.5127 14.5487 10.786 13.2754 12.3568 13.2754C13.9275 13.2754 15.2009 14.5487 15.2009 16.1195Z"
          fill="url(#paint4_linear_32_1209)"
        />
        <path
          d="M13.8809 13.0708C14.1107 13.5295 14.2403 14.0471 14.2403 14.5952C14.2403 16.4773 12.7146 18.003 10.8325 18.003C10.2845 18.003 9.76683 17.8734 9.30811 17.6436C9.8676 18.7603 11.0225 19.527 12.3565 19.527C14.2386 19.527 15.7643 18.0012 15.7643 16.1192C15.7643 14.7851 14.9976 13.6303 13.8809 13.0708Z"
          fill="url(#paint5_linear_32_1209)"
        />
        <path
          d="M35.0509 16.1192C35.0509 18.0013 33.5252 19.527 31.6432 19.527C29.761 19.527 28.2354 18.0012 28.2354 16.1192C28.2354 14.2372 29.761 12.7114 31.6432 12.7114C33.5253 12.7114 35.0509 14.2372 35.0509 16.1192Z"
          fill="url(#paint6_linear_32_1209)"
        />
        <path
          d="M34.4871 16.1195C34.4871 17.6902 33.2137 18.9636 31.6429 18.9636C30.0721 18.9636 28.7988 17.6903 28.7988 16.1195C28.7988 14.5487 30.0721 13.2754 31.6429 13.2754C33.2136 13.2754 34.4871 14.5487 34.4871 16.1195Z"
          fill="url(#paint7_linear_32_1209)"
        />
        <path
          d="M33.1675 13.0708C33.3974 13.5295 33.527 14.0471 33.527 14.5952C33.527 16.4773 32.0012 18.003 30.1191 18.003C29.5711 18.003 29.0534 17.8734 28.5947 17.6436C29.1542 18.7603 30.3091 19.527 31.6432 19.527C33.5252 19.527 35.0509 18.0012 35.0509 16.1192C35.0509 14.7851 34.2843 13.6303 33.1675 13.0708Z"
          fill="url(#paint8_linear_32_1209)"
        />
        <path
          d="M21.9999 23.9767C30.3499 23.9767 37.1189 19.0871 37.1189 13.0555C37.1189 7.02385 30.3499 2.13425 21.9999 2.13425C13.6499 2.13425 6.88086 7.02385 6.88086 13.0555C6.88086 19.0871 13.6499 23.9767 21.9999 23.9767Z"
          fill="url(#paint9_linear_32_1209)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_32_1209"
          x1="13.7686"
          y1="14.0586"
          x2="42.2622"
          y2="42.5522"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD945" />
          <stop offset="1" stopColor="#FFA325" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_32_1209"
          x1="21.9999"
          y1="28.079"
          x2="21.9999"
          y2="38.8715"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A7889" />
          <stop offset="1" stopColor="#6E566E" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_32_1209"
          x1="22.7637"
          y1="30.7211"
          x2="53.0037"
          y2="-25.5211"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD945" stopOpacity="0" />
          <stop offset="1" stopColor="#B43759" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_32_1209"
          x1="11.0815"
          y1="14.8442"
          x2="15.4952"
          y2="19.2578"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A7889" />
          <stop offset="1" stopColor="#6E566E" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_32_1209"
          x1="11.9639"
          y1="15.5531"
          x2="9.4919"
          y2="11.9896"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BDC2D1" stopOpacity="0" />
          <stop offset="0.3183" stopColor="#C1C6D4" stopOpacity="0.318" />
          <stop offset="0.6082" stopColor="#CCD0DD" stopOpacity="0.608" />
          <stop offset="0.8861" stopColor="#DEE2EC" stopOpacity="0.886" />
          <stop offset="1" stopColor="#E8ECF4" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_32_1209"
          x1="12.4748"
          y1="17.4252"
          x2="17.1591"
          y2="8.71321"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E566E" stopOpacity="0" />
          <stop offset="0.0471" stopColor="#6E566E" stopOpacity="0.047" />
          <stop offset="1" stopColor="#6E566E" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_32_1209"
          x1="30.3681"
          y1="14.8442"
          x2="34.7818"
          y2="19.2578"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A7889" />
          <stop offset="1" stopColor="#6E566E" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_32_1209"
          x1="31.25"
          y1="15.5531"
          x2="28.7781"
          y2="11.9896"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BDC2D1" stopOpacity="0" />
          <stop offset="0.3183" stopColor="#C1C6D4" stopOpacity="0.318" />
          <stop offset="0.6082" stopColor="#CCD0DD" stopOpacity="0.608" />
          <stop offset="0.8861" stopColor="#DEE2EC" stopOpacity="0.886" />
          <stop offset="1" stopColor="#E8ECF4" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_32_1209"
          x1="31.7615"
          y1="17.4252"
          x2="36.4457"
          y2="8.7132"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E566E" stopOpacity="0" />
          <stop offset="0.0471" stopColor="#6E566E" stopOpacity="0.047" />
          <stop offset="1" stopColor="#6E566E" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_32_1209"
          x1="23.7103"
          y1="19.3706"
          x2="18.0169"
          y2="-1.65079"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD945" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <clipPath id="clip0_32_1209">
          <rect
            width="44"
            height="44"
            fill="white"
            transform="translate(0 0.290009)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HandWithHeart: React.FC<IconBaseProps> = ({
  size = 41,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_32_1245"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={41}
        height={41}
      >
        <path d="M40.6201 0.66H0.620056V40.66H40.6201V0.66Z" fill="white" />
      </mask>
      <g mask="url(#mask0_32_1245)">
        <path
          d="M20.6201 16.1899C20.6201 15.1878 21.4325 14.3754 22.4346 14.3754C23.4367 14.3754 24.2491 15.1878 24.2491 16.1899V14.9922C24.2491 13.9901 25.0615 13.1777 26.0636 13.1777C27.0658 13.1777 27.8782 13.9901 27.8782 14.9922V13.5475C27.8782 12.5301 28.7108 11.678 29.728 11.6974C30.7138 11.7163 31.5072 12.5213 31.5072 13.5116V14.9922C31.5072 13.9901 32.3196 13.1777 33.3217 13.1777C34.3238 13.1777 35.1362 13.9901 35.1362 14.9922V32.5303C35.1362 33.9278 34.6253 35.2057 33.7802 36.1881C33.229 36.8288 32.9299 37.6483 32.9299 38.4935V40.0492C32.9299 40.3867 32.6869 40.6604 32.3873 40.6604H22.5323C22.2327 40.6604 21.9897 40.3868 21.9897 40.0492V37.3505C21.9897 36.6919 21.8079 36.0456 21.4605 35.4861C20.9278 34.6276 20.6201 33.6149 20.6201 32.5304V16.1899Z"
          fill="url(#paint0_linear_32_1245)"
        />
        <path
          d="M26.8162 27.7191C31.2777 27.7191 34.8946 29.8962 34.8946 32.5818C34.8946 35.2675 31.2777 37.4446 26.8162 37.4446C24.9509 37.4446 23.2335 37.0639 21.8661 36.4247C21.7774 36.0953 21.6422 35.7786 21.4606 35.486C20.9278 34.6276 20.6201 33.6149 20.6201 32.5303V29.4619C22.102 28.3967 24.3275 27.7191 26.8162 27.7191Z"
          fill="url(#paint1_linear_32_1245)"
        />
        <path
          d="M31.9026 29.0024C32.7822 29.0024 33.5793 29.354 34.1622 29.9238L36.356 27.7301C37.4169 26.6692 39.137 26.6692 40.1979 27.7301C40.7607 28.2929 40.7607 29.2052 40.1979 29.7679L33.7948 36.1711C32.7654 37.3777 31.2339 38.1431 29.5235 38.1431H28.3063C26.7753 38.1431 25.5342 36.9019 25.5342 35.3709C25.5342 31.8536 28.3855 29.0024 31.9026 29.0024Z"
          fill="url(#paint2_linear_32_1245)"
        />
        <path
          d="M31.5078 14.9922V24.698H32C33.7321 24.698 35.1364 26.1024 35.1364 27.8344V14.9922C35.1364 13.9903 34.3242 13.1776 33.3224 13.1776C32.32 13.1776 31.5078 13.9903 31.5078 14.9922Z"
          fill="url(#paint3_linear_32_1245)"
        />
        <path
          d="M27.8784 13.5117V24.698H31.5076V13.5117C31.5076 12.5093 30.6949 11.6971 29.693 11.6971C28.6906 11.6971 27.8784 12.5093 27.8784 13.5117Z"
          fill="url(#paint4_linear_32_1245)"
        />
        <path
          d="M24.249 14.9922V24.698H27.8782V14.9922C27.8782 13.9903 27.066 13.1776 26.0636 13.1776C25.0617 13.1776 24.249 13.9903 24.249 14.9922Z"
          fill="url(#paint5_linear_32_1245)"
        />
        <path
          d="M20.6205 16.1899V27.8343C20.6205 26.1022 22.0248 24.6979 23.7569 24.6979H24.2491V16.1899C24.2491 15.1876 23.4369 14.3753 22.4345 14.3753C21.4326 14.3753 20.6205 15.1876 20.6205 16.1899Z"
          fill="url(#paint6_linear_32_1245)"
        />
        <path
          d="M38.0189 31.969L33.793 36.1794C32.7613 37.3841 31.2284 38.1466 29.5181 38.1434L28.3009 38.1412L26.227 38.1373C23.1273 38.1316 20.6192 35.6142 20.6249 32.5145L20.626 31.9369L38.0189 31.969Z"
          fill="url(#paint7_linear_32_1245)"
        />
        <path
          d="M40.1981 29.7675L33.795 36.1707C33.7919 36.1746 33.7887 36.1777 33.7856 36.1816C33.784 36.1832 33.7817 36.1856 33.7801 36.1879C33.2287 36.8287 32.9299 37.6483 32.9299 38.493V40.0491C32.9299 40.3863 32.6868 40.6601 32.3872 40.6601H30.5707L20.6201 30.7103V16.1895C20.6201 15.1879 21.4326 14.3754 22.4342 14.3754C23.4366 14.3754 24.2491 15.1879 24.2491 16.1895V14.9918C24.2491 13.9903 25.0617 13.1777 26.0632 13.1777C27.0656 13.1777 27.8781 13.9903 27.8781 14.9918V13.5471C27.8781 12.5299 28.7111 11.6781 29.7283 11.6969C30.7134 11.7158 31.5072 12.5212 31.5072 13.5118V14.9918C31.5072 14.4907 31.7103 14.0373 32.0389 13.7095C32.3668 13.3808 32.8209 13.1777 33.3213 13.1777C34.3236 13.1777 35.1362 13.9903 35.1362 14.9918V28.9495L36.3558 27.7299C37.417 26.6687 39.137 26.6687 40.1981 27.7299C40.7605 28.2922 40.7605 29.2052 40.1981 29.7675Z"
          fill="url(#paint8_linear_32_1245)"
        />
        <path
          d="M20.6201 16.1899C20.6201 15.1878 19.8077 14.3754 18.8056 14.3754C17.8034 14.3754 16.991 15.1878 16.991 16.1899V14.9922C16.991 13.9901 16.1787 13.1777 15.1765 13.1777C14.1744 13.1777 13.362 13.9901 13.362 14.9922V13.5475C13.362 12.5301 12.5294 11.678 11.5121 11.6974C10.5263 11.7163 9.73296 12.5213 9.73296 13.5116V14.9922C9.73296 13.9901 8.92056 13.1777 7.91845 13.1777C6.91633 13.1777 6.10394 13.9901 6.10394 14.9922V32.5303C6.10394 33.9278 6.61484 35.2057 7.45994 36.1881C8.01115 36.8288 8.31021 37.6483 8.31021 38.4935V40.0492C8.31021 40.3867 8.55319 40.6604 8.8528 40.6604H18.7079C19.0075 40.6604 19.2505 40.3868 19.2505 40.0492V37.3505C19.2505 36.6919 19.4323 36.0456 19.7797 35.4861C20.3124 34.6276 20.6201 33.6149 20.6201 32.5304V16.1899Z"
          fill="url(#paint9_linear_32_1245)"
        />
        <path
          d="M14.4241 27.7191C9.9625 27.7191 6.34564 29.8962 6.34564 32.5818C6.34564 35.2675 9.9625 37.4446 14.4241 37.4446C16.2894 37.4446 18.0068 37.0639 19.3742 36.4247C19.4629 36.0953 19.5981 35.7786 19.7797 35.486C20.3125 34.6276 20.6202 33.6149 20.6202 32.5303V29.4619C19.1383 28.3967 16.9128 27.7191 14.4241 27.7191Z"
          fill="url(#paint10_linear_32_1245)"
        />
        <path
          d="M9.33741 29.0024C8.45781 29.0024 7.66079 29.354 7.07781 29.9238L4.88408 27.7301C3.82314 26.6692 2.10306 26.6692 1.04211 27.7301C0.47937 28.2929 0.47937 29.2052 1.04211 29.7679L7.44526 36.1711C8.47467 37.3777 10.0061 38.1431 11.7166 38.1431H12.9338C14.4648 38.1431 15.7059 36.9019 15.7059 35.3709C15.7058 31.8536 12.8546 29.0024 9.33741 29.0024Z"
          fill="url(#paint11_linear_32_1245)"
        />
        <path
          d="M9.73256 14.9922V24.698H9.24033C7.50825 24.698 6.10394 26.1024 6.10394 27.8344V14.9922C6.10394 13.9903 6.91617 13.1776 7.91798 13.1776C8.92041 13.1776 9.73256 13.9903 9.73256 14.9922Z"
          fill="url(#paint12_linear_32_1245)"
        />
        <path
          d="M13.3616 13.5117V24.698H9.73236V13.5117C9.73236 12.5093 10.5451 11.6971 11.547 11.6971C12.5494 11.6971 13.3616 12.5093 13.3616 13.5117Z"
          fill="url(#paint13_linear_32_1245)"
        />
        <path
          d="M16.991 14.9922V24.698H13.3618V14.9922C13.3618 13.9903 14.174 13.1776 15.1764 13.1776C16.1783 13.1776 16.991 13.9903 16.991 14.9922Z"
          fill="url(#paint14_linear_32_1245)"
        />
        <path
          d="M20.6198 16.1899V27.8343C20.6198 26.1022 19.2155 24.6979 17.4834 24.6979H16.9911V16.1899C16.9911 15.1876 17.8033 14.3753 18.8057 14.3753C19.8076 14.3753 20.6198 15.1876 20.6198 16.1899Z"
          fill="url(#paint15_linear_32_1245)"
        />
        <path
          d="M3.22113 31.969L7.4471 36.1794C8.47878 37.3841 10.0116 38.1466 11.722 38.1434L12.9392 38.1412L15.0131 38.1373C18.1128 38.1316 20.6209 35.6142 20.6152 32.5145L20.6141 31.9369L3.22113 31.969Z"
          fill="url(#paint16_linear_32_1245)"
        />
        <path
          d="M20.62 16.1895V30.7102L12.5462 22.6365C10.307 20.475 8.9603 18.1848 8.53756 15.8138C8.38619 14.9644 8.38305 14.1079 8.51874 13.2797C9.22619 13.5275 9.73285 14.2005 9.73285 14.9918V13.5118C9.73285 12.5212 10.5266 11.7158 11.5117 11.6969C12.529 11.6781 13.3619 12.5299 13.3619 13.5471V14.9918C13.3619 13.9903 14.1745 13.1777 15.1768 13.1777C16.1784 13.1777 16.9909 13.9903 16.9909 14.9918V16.1895C16.9909 15.1879 17.8035 14.3754 18.8058 14.3754C19.8074 14.3754 20.62 15.1879 20.62 16.1895Z"
          fill="url(#paint17_linear_32_1245)"
        />
        <path
          d="M20.6201 27.54C20.178 27.54 19.7352 27.4353 19.3396 27.2374C18.144 26.639 15.8093 25.356 13.6068 23.4856C10.7417 21.0525 9.04349 18.4408 8.55925 15.7232C8.18317 13.612 8.72011 11.4569 10.0324 9.8103C11.2478 8.28536 12.9701 7.3943 14.882 7.30105C14.9943 7.29556 15.1083 7.29281 15.2204 7.29281C17.0116 7.29281 18.7026 7.98309 19.9818 9.23658C20.2129 9.46301 20.4259 9.70324 20.6199 9.9554C20.814 9.70324 21.0271 9.46293 21.2581 9.2365C22.5373 7.98309 24.2283 7.29281 26.0196 7.29281C26.1318 7.29281 26.2456 7.29556 26.358 7.30105C28.2699 7.39422 29.9922 8.28536 31.2076 9.81038C32.5199 11.457 33.0569 13.6121 32.6806 15.7232C32.1965 18.4407 30.4983 21.0524 27.6332 23.4856C25.4308 25.3559 23.0961 26.6389 21.9004 27.2374C21.5049 27.4354 21.0621 27.54 20.6201 27.54Z"
          fill="url(#paint18_linear_32_1245)"
        />
        <path
          d="M20.6198 5.78816C19.9255 5.78816 19.3627 5.22533 19.3627 4.53106V1.91702C19.3627 1.22282 19.9255 0.66 20.6198 0.66C21.314 0.66 21.8769 1.22282 21.8769 1.9171V4.53114C21.8769 5.22533 21.314 5.78816 20.6198 5.78816Z"
          fill="url(#paint19_linear_32_1245)"
        />
        <path
          d="M17.3805 6.64461C16.8896 7.13551 16.0937 7.13551 15.6027 6.64461L13.7543 4.79621C13.2634 4.30531 13.2634 3.50939 13.7543 3.01841C14.2452 2.52751 15.0411 2.52751 15.532 3.01841L17.3804 4.8668C17.8715 5.35771 17.8715 6.15371 17.3805 6.64461Z"
          fill="url(#paint20_linear_32_1245)"
        />
        <path
          d="M23.8594 6.64461C23.3685 6.15371 23.3685 5.35778 23.8594 4.8668L25.7078 3.01841C26.1987 2.52751 26.9946 2.52751 27.4856 3.01841C27.9765 3.50931 27.9765 4.30523 27.4856 4.79614L25.6372 6.64453C25.1462 7.13551 24.3503 7.13551 23.8594 6.64461Z"
          fill="url(#paint21_linear_32_1245)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_32_1245"
          x1="26.1186"
          y1="23.484"
          x2="32.1764"
          y2="33.0792"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset={1} stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_32_1245"
          x1="26.5734"
          y1="27.8525"
          x2="27.5408"
          y2="31.8263"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset={1} stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_32_1245"
          x1="30.1182"
          y1="25.5498"
          x2="35.3934"
          y2="37.4086"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset={1} stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_32_1245"
          x1="30.9532"
          y1="20.506"
          x2="36.3535"
          y2="20.506"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset={1} stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_32_1245"
          x1="27.15"
          y1="18.1976"
          x2="32.5225"
          y2="18.1976"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset={1} stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_32_1245"
          x1="23.6739"
          y1="18.9378"
          x2="29.2041"
          y2="18.9378"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset={1} stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_32_1245"
          x1="20.2799"
          y1="21.1048"
          x2="25.9326"
          y2="21.1048"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset={1} stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_32_1245"
          x1="28.4599"
          y1="34.8282"
          x2="26.5906"
          y2="41.0594"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F89580" stopOpacity={0} />
          <stop offset="0.9972" stopColor="#C5715A" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_32_1245"
          x1="31.814"
          y1="26.5166"
          x2="25.6963"
          y2="21.2617"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F89580" stopOpacity={0} />
          <stop offset="0.9972" stopColor="#C5715A" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_32_1245"
          x1="8.96786"
          y1="21.6513"
          x2="22.3012"
          y2="36.8147"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset={1} stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_32_1245"
          x1="11.3255"
          y1="28.0831"
          x2="15.4431"
          y2="34.5537"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset={1} stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_32_1245"
          x1="5.93035"
          y1="26.7046"
          x2="10.7539"
          y2="37.0968"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset={1} stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_32_1245"
          x1="10.2872"
          y1="20.506"
          x2="4.88684"
          y2="20.506"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA78F" />
          <stop offset={1} stopColor="#FFDFCF" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_32_1245"
          x1="14.0901"
          y1="18.1976"
          x2="8.71746"
          y2="18.1976"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA78F" />
          <stop offset={1} stopColor="#FFDFCF" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_32_1245"
          x1="17.5661"
          y1="18.9378"
          x2="12.0359"
          y2="18.9378"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA78F" />
          <stop offset={1} stopColor="#FFDFCF" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_32_1245"
          x1="20.9604"
          y1="21.1048"
          x2="15.3076"
          y2="21.1048"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA78F" />
          <stop offset={1} stopColor="#FFDFCF" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_32_1245"
          x1="12.7802"
          y1="34.8282"
          x2="14.6496"
          y2="41.0594"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F89580" stopOpacity={0} />
          <stop offset="0.9972" stopColor="#C5715A" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_32_1245"
          x1="25.0913"
          y1="32.1228"
          x2="17.9801"
          y2="21.5607"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F89580" stopOpacity={0} />
          <stop offset="0.9972" stopColor="#C5715A" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_32_1245"
          x1="16.763"
          y1="11.0241"
          x2="27.5907"
          y2="21.8519"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD3581" />
          <stop offset={1} stopColor="#972437" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_32_1245"
          x1="19.5002"
          y1="3.22651"
          x2="22.9916"
          y2="3.22651"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97DA7B" />
          <stop offset="0.1327" stopColor="#91D67A" />
          <stop offset="0.3049" stopColor="#81CC75" />
          <stop offset="0.4987" stopColor="#66BB6C" />
          <stop offset="0.7084" stopColor="#41A461" />
          <stop offset="0.9286" stopColor="#128653" />
          <stop offset={1} stopColor="#017B4E" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_32_1245"
          x1="14.6422"
          y1="5.67239"
          x2="17.1106"
          y2="3.20398"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97DA7B" />
          <stop offset="0.1327" stopColor="#91D67A" />
          <stop offset="0.3049" stopColor="#81CC75" />
          <stop offset="0.4987" stopColor="#66BB6C" />
          <stop offset="0.7084" stopColor="#41A461" />
          <stop offset="0.9286" stopColor="#128653" />
          <stop offset={1} stopColor="#017B4E" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_32_1245"
          x1="24.8424"
          y1="3.95268"
          x2="27.3109"
          y2="6.42114"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97DA7B" />
          <stop offset="0.1327" stopColor="#91D67A" />
          <stop offset="0.3049" stopColor="#81CC75" />
          <stop offset="0.4987" stopColor="#66BB6C" />
          <stop offset="0.7084" stopColor="#41A461" />
          <stop offset="0.9286" stopColor="#128653" />
          <stop offset={1} stopColor="#017B4E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const StarCheck: React.FC<IconBaseProps> = ({
  size = 20,
  height,
  width,
  ...props
}) => {
  return <svg
    width={width || size}
    height={height || size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_32_1055)">
      <mask
        id="mask0_32_1055"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={20}
        height={20}
      >
        <path d="M20 0H0V20H20V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_32_1055)">
        <path
          d="M19.5135 8.82018L18.1494 7.45608C17.8259 7.13259 17.5613 6.49239 17.5613 6.03316V4.10352C17.5613 3.18507 16.8125 2.43629 15.894 2.43629H13.9644C13.5052 2.43629 12.865 2.17161 12.5415 1.84812L11.1774 0.484018C10.5304 -0.162967 9.46941 -0.162967 8.82017 0.484018L7.45607 1.84812C7.13257 2.17161 6.49011 2.43629 6.03315 2.43629H4.10351C3.18732 2.43629 2.43627 3.18507 2.43627 4.10352V6.03316C2.43627 6.49012 2.1716 7.13259 1.8481 7.45608L0.484006 8.82018C-0.165242 9.46716 -0.165242 10.5281 0.484006 11.1774L1.8481 12.5415C2.1716 12.865 2.43627 13.5074 2.43627 13.9644V15.894C2.43627 16.8102 3.18732 17.5613 4.10351 17.5613H6.03315C6.49237 17.5613 7.13257 17.8259 7.45607 18.1494L8.82017 19.5135C9.46715 20.1605 10.5281 20.1605 11.1774 19.5135L12.5415 18.1494C12.865 17.8259 13.5052 17.5613 13.9644 17.5613H15.894C16.8102 17.5613 17.5613 16.8102 17.5613 15.894V13.9644C17.5613 13.5052 17.8259 12.865 18.1494 12.5415L19.5135 11.1774C20.1605 10.5304 20.1605 9.46943 19.5135 8.82018Z"
          fill="#2AA7FF"
        />
        <path
          d="M8.888 13.7178L5.26172 10.0915L6.84977 8.50345L8.888 10.5417L13.1477 6.28198L14.7358 7.87004L8.888 13.7178Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_32_1055">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
}

export const VerifiedHospital: React.FC<IconBackgroundProps> = (
  {
    size = 130,
    height,
    width,
    backgroundColor = "#8CCFFF",
    ...props
  }
) => {
  return (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 130 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <circle cx={62} cy={62} r={62} fill={backgroundColor} />
      <g clipPath="url(#clip0_6254_10)">
        <g clipPath="url(#clip1_6254_10)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M119.999 97.1702L118.101 97.9565L116.647 96.5034L114.592 96.5032L113.805 94.6044L111.906 93.8177L111.906 91.7625L110.453 90.309L111.239 88.4101L110.453 86.5113L111.906 85.0578L111.906 83.0026L113.805 82.2158L114.592 80.3171L116.647 80.3169L118.101 78.8638L119.999 79.6501L121.898 78.8638L123.352 80.3169L125.407 80.3171L126.194 82.2158L128.093 83.0026L128.093 85.0578L129.546 86.5113L128.76 88.4101L129.546 90.309L128.093 91.7625L128.093 93.8177L126.194 94.6044L125.407 96.5032L123.352 96.5034L121.898 97.9565L119.999 97.1702Z"
            fill="#2AA7FF"
            stroke="#F0F0F5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M116.561 88.5128C116.316 88.2932 115.92 88.2932 115.676 88.5128C115.431 88.7324 115.431 89.0885 115.676 89.3082L118.597 91.9326C118.841 92.1523 119.238 92.1523 119.482 91.9326L125.325 86.6837C125.569 86.4641 125.569 86.108 125.325 85.8884C125.08 85.6687 124.684 85.6687 124.439 85.8884L119.039 90.7396L116.561 88.5128Z"
            fill="white"
            stroke="white"
            strokeWidth="0.5"
          />
        </g>
      </g>
      <rect x={22} y={18} width={80} height={80} fill="url(#pattern0_6254_10)" />
      <defs>
        <pattern
          id="pattern0_6254_10"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_6254_10" transform="scale(0.00390625)" />
        </pattern>
        <clipPath id="clip0_6254_10">
          <rect
            width={20}
            height={20}
            fill="white"
            transform="translate(110 78.4102)"
          />
        </clipPath>
        <clipPath id="clip1_6254_10">
          <rect
            width={20}
            height={20}
            fill="white"
            transform="translate(110 78.4102)"
          />
        </clipPath>
        <image
          id="image0_6254_10"
          width={256}
          height={256}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>

  )

}