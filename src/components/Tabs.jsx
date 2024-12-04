
const Tabs = () => {
  const tabs = ['All','Pending','Completed'];
  return (
    <nav className="tab-container">
      {tabs.map((tab,tabIndex)=>{
        return (
          <>
            <button className="tab-btn" key={tabIndex}>{tab} <span className="tab-count">(0)</span></button>
          </>
        )
      })}
    </nav>
  )
}

export {Tabs};