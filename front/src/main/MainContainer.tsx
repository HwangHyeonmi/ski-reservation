import MainBody from "./MainBody";
import SearchBox from "./SearchBox";
import { atom } from "recoil";

export const filterValue = atom({
  key: "filterValue",
  default: [""],
});

const MainContainer = () => {
  return (
    <>
      <SearchBox searchval={true} />
      <MainBody />
    </>
  );
};

export default MainContainer;
