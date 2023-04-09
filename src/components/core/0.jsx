import { Stack } from "@mui/system";
import React from "react";
import photo1 from "../../assets/1.JPG";
import photo2 from "../../assets/2.JPG";
import photo3 from "../../assets/3.JPG";

export const Zero = () => {
  return (
    <Stack
    width={"100vw"}
    display="flex"
    justifyContent={"center"}
    alignItems={"center"}
    spacing={2}
    marginTop={5}
  >
      Квадрат язгуур агуулсан тоон илэрхийлэл
      <img width={"400px"} src={photo1} />
      Тооны стандарт хэлбэр
      <img width={"400px"} src={photo2} />
      <img width={"400px"} src={photo3} />
    </Stack>
  );
};
