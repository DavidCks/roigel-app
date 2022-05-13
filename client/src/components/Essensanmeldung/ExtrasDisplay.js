const ExtrasDisplay = ({ date }) => {

  const drawExtras = () => {
    let meat = date.extraMeat
    let vegi = date.extraVegi
    let arr = []
    let index = 0

    //add extra meat display rectangles to the returned array
    while(meat > 0) {
      arr[index] = <rect key={index} x={2.7 * index + .010086} y=".001698" width="2.2535" height="4.3686" ry="1.1268" fill="url(#lgMeat)" opacity="1"/>
      meat--
      index++
    }

    //add extra vegi display rectangles to the returned array
    while(vegi > 0) {
      arr[index] = <rect key={index} x={2.7 * index + .010086} y=".001698" width="2.2535" height="4.3686" ry="1.1268" fill="url(#lgVegi)" opacity="1"/>
      vegi--
      index++
    }

    //add the rest of the non-utilized rectangles to the returned array
    while(index < 9){
      arr[index] = <rect key={index} x={2.7 * index + .010086} y=".001698" width="2.2535" height="4.3686" ry="1.1268" fill="url(#lgNone)" opacity="1"/>
      index++
    }

    //return the deconstructed array of JSX
    return arr.map((v)=> v)
  }

  return (
    <svg className='extras-display' version="1.1" viewBox="0 0 23.85 4.3656" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="lgNone" gradientTransform="rotate(45)">
          <stop stopColor="#e5e6ec" offset="0"/>
          <stop stopColor="#f2f3f6" offset="1"/>
        </linearGradient>
        <linearGradient id="lgMeat" gradientTransform="rotate(45)">
          <stop stopColor="#269dff" offset="0"/>
          <stop stopColor="#88caff" offset="1"/>
        </linearGradient>
        <linearGradient id="lgVegi" gradientTransform="rotate(45)">
          <stop stopColor="#00e200" offset="0"/>
          <stop stopColor="#91ff6f" offset="1"/>
        </linearGradient>
      </defs>
      <g strokeWidth="0">
        {drawExtras()}
      </g> 
    </svg>
  )
}

export default ExtrasDisplay
