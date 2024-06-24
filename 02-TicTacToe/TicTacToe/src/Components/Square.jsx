
export const Square = ({ children, isSelected, updateBoard, index }) => {
    const handleClick = () => { updateBoard(index) }
    const ClassName = `square ${isSelected ? 'is-selected' : ''}`
    return (
      <div onClick={handleClick} className={ClassName}>
        {children}
      </div>
    )
  }

