import { Stack } from "@mui/material";
import React from "react";
import photo1 from "../../assets/11.JPG";
import photo2 from "../../assets/12.JPG";
import photo3 from "../../assets/13.JPG";
import photo4 from "../../assets/14.JPG";

export const Three = () => {
  return (
    <Stack
      width={"100vw"}
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      marginTop={40}
    >
      Алгебрын илэрхийлэл
      <img width={"400px"} src={photo1} />
      <img width={"400px"} src={photo2} />
      <img width={"400px"} src={photo3} />
      <img width={"400px"} src={photo4} />
    </Stack>
  );
};
