import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTabId, isTabActive} = props
  const {tabId, displayText} = tabDetails
  const isTabClicked = () => {
    updatedActiveTabId(tabId)
  }
  const activeTabClassName = isTabActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={isTabClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
