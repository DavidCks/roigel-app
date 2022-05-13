const KahnCalendarNavSVG = ({orientation = "left", size = 1}) => {
  if(orientation === "left") {
    return (
      <svg className="calendar-navigation-arrow__left" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={7.16 * size} height={11.596 * size} viewBox="0 0 7.16 11.596">
        <defs>
          <linearGradient id="linear-gradient" x1="0.281" y1="0.765" x2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#575f6b"/>
            <stop offset="1" stopColor="#2c3036"/>
          </linearGradient>
        </defs>
        <path id="Icon_material-keyboard-arrow-right" data-name="Icon material-keyboard-arrow-right" d="M20.045,18.858,15.62,14.423l4.426-4.435L18.683,8.625l-5.8,5.8,5.8,5.8Z" transform="translate(-12.885 -8.625)" fill="url(#linear-gradient)"/>
      </svg>
    )
  } else {
    return (
    <svg className="calendar-navigation-arrow__right" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={7.16 * size} height={11.596 * size} viewBox="0 0 7.16 11.596">
      <defs>
        <linearGradient id="linear-gradient" x1="0.719" y1="0.765" x2="0" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#575f6b"/>
          <stop offset="1" stopColor="#2c3036"/>
        </linearGradient>
      </defs>
      <path id="Icon_material-keyboard-arrow-right" data-name="Icon material-keyboard-arrow-right" d="M12.885,18.858l4.426-4.435L12.885,9.988l1.363-1.363,5.8,5.8-5.8,5.8Z" transform="translate(-12.885 -8.625)" fill="url(#linear-gradient)"/>
    </svg>
    )
  }
}

export default KahnCalendarNavSVG