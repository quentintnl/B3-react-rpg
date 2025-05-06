function Button ({ children, variant = 'default', disabled = false, ...props }) {
  let color
  switch (variant) {
    case 'success':
      color = `bg-green-400 ${disabled ? '' : 'hover:bg-green-200'}`
      break
    case 'danger':
      color = `bg-red-400 ${disabled ? '' : 'hover:bg-red-200'}`
     break
    case 'warning':
      color = `bg-orange-400 ${disabled ? '' : 'hover:bg-orange-200'}`
      break
    case 'info':
      color = `bg-blue-400 ${disabled ? '' : 'hover:bg-blue-200'}`
      break
    case 'default':
    default:
      color = `bg-gray-400 ${disabled ? '' : 'hover:bg-gray-200'}`
      break
  }

  const cursor = disabled ? 'opacity-50' : 'shadow-md transition-all duration-300'

  return (
    <button
      className={`${color} px-4 py-2 rounded-lg  ${cursor}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
