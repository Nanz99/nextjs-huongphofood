/** @format */

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mt32__mb_64: {
    margin: "32px 0 64px",
  },
  hp__text: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24px",
    mb: "12px",
  },
  hp__text__bgyellow: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24px",
    padding: "16px",
    background: "#FBF8ED",
    borderRadius: "8px",
  },
  hp__text__small: {
    fontSize: "14px",
    lineHeight: "21px",
    fontWeight: 400,
  },
  title__medium: {
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "42px",
    textTransform: "uppercase",
   //  m: "32px 0",
  },
  flex__center: {
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
