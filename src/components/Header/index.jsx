import { Filter } from "../Filter";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

import { Head, BoxContainer } from "./styles.js";

export const Header = () => {
  return (
    <>
      <Head>
        <BoxContainer>
          <Logo />
          <Filter />
          <NavBar />
        </BoxContainer>
      </Head>
    </>
  );
};
