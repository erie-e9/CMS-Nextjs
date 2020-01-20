function SvgComponent(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      id="prefix__addIcon"
      viewBox="0 0 80 80"
      xmlSpace="preserve"
      {...props}
    >
      <path fill={props.color} d="M61 37H43V19h-6v18H19v6h18v18h6V43h18z" />
    </svg>
  );
}

export default SvgComponent;

