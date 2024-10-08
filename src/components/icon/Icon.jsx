import "./iconStyle.css";

export const Icon = ({ Icon, handleClick, ...rest }) => {
  return <Icon onClick={handleClick} {...rest} />;
};
