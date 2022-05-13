const SelectionSingle = ({ mode }) => {
  return (
    <svg className='extras-display selection-single' version="1.1" viewBox="0 0 1.1535 4.3656" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="lgnone" gradientTransform="rotate(45)">
          <stop stopColor="#e5e6ec" offset="0"/>
          <stop stopColor="#f2f3f6" offset="1"/>
        </linearGradient>
        <linearGradient id="lgmeat" gradientTransform="rotate(45)">
          <stop stopColor="#269dff" offset="0"/>
          <stop stopColor="#88caff" offset="1"/>
        </linearGradient>
        <linearGradient id="lgvegi" gradientTransform="rotate(45)">
          <stop stopColor="#00e200" offset="0"/>
          <stop stopColor="#91ff6f" offset="1"/>
        </linearGradient>
      </defs>
      <g strokeWidth="0">
        <rect x=".010086" y=".001698" width="1.1535" height="4.3686" ry=".6268" fill={`url(#lg${mode})`} opacity="1"/>
      </g> 
    </svg>
  )
}

export default SelectionSingle
