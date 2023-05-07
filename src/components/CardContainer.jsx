import { Box, Stack } from "@mui/material"

export default function CardContainer({ children, rounded, backgroundColor }) {
  const boxStyle = {
    backgroundColor: backgroundColor != undefined ? backgroundColor : "#f9f9f9",
    borderRadius: (rounded === undefined || !rounded) ? "10px" : "0px",
    border: "1px solid #c4c4c4",
    padding: "1rem",
    width: "fit-content"
  }

  return <Box sx={ boxStyle }>
    <Stack spacing={1}>
      { children }
    </Stack>
  </Box>
}