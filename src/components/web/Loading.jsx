import { Loader, Box } from "@mantine/core";

function Loading({ heightValue, sizeValue }) {
  return (
    <Box
      w="100%"
      mih="50px"
      h={heightValue}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader color="green" size={sizeValue} />
    </Box>
  );
}

export default Loading;
