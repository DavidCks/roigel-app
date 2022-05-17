const DeleteSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 22 22">
      <defs>
        <linearGradient id="linear-gradientDeleteSVG" x1="0.585" y1="0.629" x2="0.255" y2="0.051" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="red"/>
          <stop offset="1" stopColor="#bf0000"/>
        </linearGradient>
        <filter id="Vereinigungsmenge_1" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse">
          <feOffset dy="1" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feFlood floodColor="#24415d" floodOpacity="0.298"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Vereinigungsmenge_1)">
        <path id="Vereinigungsmenge_1-2" dataname="Vereinigungsmenge 1" d="M4.643,13V8.357H0V4.643H4.643V0H8.357V4.643H13V8.357H8.357V13Z" transform="translate(4.5 3.5)" fill="url(#linear-gradientDeleteSVG)"/>
      </g>
    </svg>
  )
}

export default DeleteSVG