import './index.css'

const TabItems = props => {
  const {buttonDetails, isActive, activeBtn} = props
  const {buttonText, id} = buttonDetails

  const onClickBtn = () => {
    activeBtn(id)
  }

  const btnClassName = isActive ? 'active btn' : 'btn'

  return (
    <li className="item">
      <button type="button" className={btnClassName} onClick={onClickBtn}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItems
