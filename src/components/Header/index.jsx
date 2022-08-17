import { Filter } from "../Filter";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

import { Head } from "./styles.js";

import { FlexContainer } from "../../styles/global";

export const Header = () => {
  return (
    <>
      <Head>
        <FlexContainer justifyContent="space-around" alignItems="center">
          <Logo />
          <Filter />
          <NavBar />
        </FlexContainer>
      </Head>
    </>
  );
};
