import React from "react";

interface Props {
  match: any;
}

const NavWrapper: React.FunctionComponent<Props> = (props) => {
  return <div>Wrapper - {JSON.stringify(props.match)}</div>;
};

export default NavWrapper;
