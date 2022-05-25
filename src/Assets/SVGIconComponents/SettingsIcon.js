import * as React from "react";

const SvgSettingsIcon = (props) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#settings-icon_svg__a)" fill="current">
      <path
        d="M36 20.424v-4.848l-4.303-1.53a14.168 14.168 0 0 0-1.217-2.932l1.962-4.127-3.427-3.428-4.127 1.961c-.92-.508-1.904-.92-2.933-1.216L20.425 0h-4.848l-1.532 4.303a14.12 14.12 0 0 0-2.932 1.217L6.985 3.558 3.558 6.986l1.962 4.128c-.508.919-.921 1.901-1.216 2.932L0 15.576v4.848l4.303 1.53c.296 1.03.708 2.013 1.217 2.933l-1.962 4.126 3.428 3.429 4.126-1.962c.92.508 1.903.92 2.932 1.216L15.576 36h4.848l1.532-4.303a14.168 14.168 0 0 0 2.932-1.217l4.127 1.962 3.427-3.429-1.962-4.127c.508-.919.92-1.901 1.216-2.932L36 20.424ZM18 24a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z"
        
      />
    </g>
    <defs>
      <clipPath id="settings-icon_svg__a">
        <path fill="#fff" d="M0 0h36v36H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSettingsIcon;
