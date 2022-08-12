import { Filter } from "../Filter";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

import { Head } from "./style";
import { FlexContainer } from "../../styles/global";

import "./style.js";

export const Header = () => {
  return (
    <Head>
      <FlexContainer justifyContent="center">
        <Logo />
        <Filter />
        <NavBar />
      </FlexContainer>
    </Head>
  );
};
