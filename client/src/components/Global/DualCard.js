const DualCard = ({ titleText='titleText', Icon1, Icon2, h1, h2, t1, t2 }) => {
  return (
    <>
      <p style={{marginLeft: '15px'}}>{titleText}</p>
      <div className="dc nm-shadow nm-bg nm-border std-padding">
        <div className='dc-grid' style={{marginBottom: '-12px'}}>
          <div className="dc-icon nm-shadow-inset">
            <Icon1 color='#575F6B' size={6}/>
          </div>
          <div>
            <p className="dc-1">{h1}</p>
            <p className="dc-2">{t1}</p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width={280} height=".5mm" version="1.1" viewBox="0 0 100 .5">
          <g strokeWidth=".26458"/>
          <path d="M 0,0 100,0" fill="#e50000" stroke="#959595" strokeWidth=".5"/>
        </svg>
        <div className='dc-grid' style={{marginTop: '-10px'}}>
          <div className="dc-icon nm-shadow-inset">
            <Icon2 color='#575F6B' size={6}/>
          </div>
          <div>
            <p className="dc-1">{h2}</p>
            <p className="dc-2">{t2}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DualCard
