import { Stack } from "@mui/system";
import React from "react";
import photo1 from "../../assets/4.JPG";
import photo2 from "../../assets/5.JPG";
import photo3 from "../../assets/6.JPG";
import photo4 from "../../assets/7.JPG";

export const One = () => {
  return (
    <Stack
      width={"100vw"}
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      marginTop={60}
    >
        Процент
        <img width={"400px"} src={photo1} />
        <img width={"400px"} src={photo2} />
        Харьцаа, пропорц
        <img width={"400px"} src={photo3} />
        <img width={"400px"} src={photo4} />
    </Stack>
  );
};
