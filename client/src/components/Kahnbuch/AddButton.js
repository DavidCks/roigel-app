const AddButton = ({onClick}) => {
  return (
    <button className="AddButton nm-shadow nm-bg" id="AddButton" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="41.809" height="34.632" viewBox="0 0 41.809 34.632">
        <defs>
          <linearGradient id="linear-gradientAddBtn" x1="0.5" y1="0.732" x2="0.236" y2="0.12" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#00ff08"/>
            <stop offset="1" stopColor="#00bf0d"/>
          </linearGradient>
          <filter id="Icon_metro-checkmark" x="0" y="0" width="41.809" height="34.632" filterUnits="userSpaceOnUse">
            <feOffset dy="1" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="1.5" result="blur"/>
            <feFlood floodColor="#24415d" floodOpacity="0.298"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
          </filter>
        </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Icon_metro-checkmark)">
      <path id="Icon_metro-checkmark-2" dataname="Icon metro-checkmark" d="M30.254,5.784,14.874,21.164,7.7,13.986,2.571,19.113l12.3,12.3L35.38,10.911Z" transform="translate(1.93 -2.28)" fill="url(#linear-gradientAddBtn)"/>
      </g>
    </svg>
  </button>
  )
}

export default AddButton