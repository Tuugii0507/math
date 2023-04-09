import { Stack } from "@mui/material";
import React from "react";
import photo1 from "../../assets/8.JPG";
import photo2 from "../../assets/9.JPG";
import photo3 from "../../assets/10.JPG";

export const Two = () => {
  return (
    <Stack
      width={"100vw"}
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
    >
      Нийлмэл үзэгдлийн магадлал
      <img width={"400px"} src={photo1} />
      <img width={"400px"} src={photo2} />
      <img width={"400px"} src={photo3} />
    </Stack>
  );
};
