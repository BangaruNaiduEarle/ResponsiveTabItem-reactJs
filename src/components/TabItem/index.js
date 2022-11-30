import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActiveTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const button = isActiveTab ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${button}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
