import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/system";
import { Zero } from "../core/0";
import { One } from "../core/1";
import { Two } from "../core/2";
import { Three } from "../core/3";
import { Four } from "../core/4";
import { Five } from "../core/5";
import { Six } from "../core/6";
import { Seven } from "../core/7";
import { Eight } from "../core/8";

export const Home = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [number, setNumber] = useState(0);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const arr = [
    "I БҮЛЭГ. ТООН ОЛОНЛОГ, ЗЭРЭГ, ЯЗГУУР",
    "II БҮЛЭГ. ПРОЦЕНТ, ХАРЬЦАА, ПРОПОРЦ",
    "III БҮЛЭГ. МАГАДЛАЛ",
    "IV БҮЛЭГ. ИЛЭРХИЙЛЭЛ, ТЭГШИТГЭЛ, ТЭНЦЭТГЭЛ БИШ",
    "V БҮЛЭГ. ДАРААЛАЛ, ФУНКЦ",
    "VI БҮЛЭГ. ДҮРС, ӨНЦӨГ, БАЙГУУЛАЛТ",
    "VII БҮЛЭГ. БАЙРШИЛ, ХӨДӨЛГӨӨН, ХУВИРГАЛТ",
    "VIII БҮЛЭГ. ХЭМЖИГДЭХҮҮН",
    "IX БҮЛЭГ. ӨГӨГДӨЛТЭЙ АЖИЛЛАХ",
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        style={{
          marginLeft: "3vw",
          marginTop: "1vh",
          fontWeight: "700",
          fontSize: "24px",
        }}
      >
        Menu
      </div>
      <Stack marginTop={3} spacing={1}>
        {arr.map((el, index) => {
          return (
            <Stack
              direction={"column"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button onClick={() => setNumber(index)}>{el}</Button>
              <Stack width={"90%"} height={"0.3px"} bgcolor={"black"} />
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );

  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack position={"fixed"} left={"1vw"} top={"1.7vh"}>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Stack>
      {number === 0 && <Zero />}
      {number === 1 && <One />}
      {number === 2 && <Two />}
      {number === 3 && <Three />}
      {number === 4 && <Four />}
      {number === 5 && <Five />}
      {number === 6 && <Six />}
      {number === 7 && <Seven />}
      {number === 8 && <Eight />}
    </Stack>
  );
};
