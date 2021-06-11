import { CircleLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
  margin-left: 25px;
  padding: 8px;
`;

const Loader = (props) => {
  return <CircleLoader css={override} color="darkblue" size={30} />;
};

export default Loader;
