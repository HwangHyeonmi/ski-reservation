import styled from "styled-components";
import Button from "@mui/material/Button";
import CustomSelect from "../components/CustomSelect";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
const StyledSearchBox = styled.div`
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  backgroud: white;
  margin: 0 auto;
  height: auto;
  padding: 40px;
  box-sizing: border-box;
`;

interface props {
  searchval: boolean;
}

export const placeValue = atom({
  key: "placeValue",
  default: "",
});

export const dateValue = atom({
  key: "dataValue",
  default: "",
});

export const timeValue = atom({
  key: "timeValue",
  default: "",
});

export const personelValue = atom({
  key: "personelValue",
  default: "",
});
const SearchBox = ({ searchval }: props) => {
  const regionArray = [
    "비발디파크(홍천)",
    "휘닉스파크(평창)",
    "하이원리조트(경선)",
    "곤지암리조트(광주)",
    "웰리힐리파크(횡성)",
  ];

  const dateArray = ["2022년1월1일", "2022년1월2일"];
  const timeArray = ["1시", "4시"];
  const personnelArray = ["1명", "2명", "3명"];

  const setPlaceVal = useSetRecoilState(placeValue);
  const setDateVal = useSetRecoilState(dateValue);
  const setTimeVal = useSetRecoilState(timeValue);
  const setPersonelVal = useSetRecoilState(personelValue);

  const placeVal = useRecoilValue(placeValue);
  const dateVal = useRecoilValue(dateValue);
  const timeVal = useRecoilValue(timeValue);
  const personelVal = useRecoilValue(personelValue);

  const getSelectVal = (val: string, id: number) => {
    switch (id) {
      case 1:
        setPlaceVal(val);
        break;
      case 2:
        setDateVal(val);
        break;
      case 3:
        setTimeVal(val);
        break;
      case 4:
        setPersonelVal(val);
        break;
      default:
        console.log("선택값이 없어요");
    }
  };

  return (
    <StyledSearchBox>
      <CustomSelect
        getSelectVal={getSelectVal}
        name="장소"
        currentVal={placeVal ? placeVal : ""}
        selectArray={regionArray}
        id={1}
      />
      <CustomSelect
        getSelectVal={getSelectVal}
        currentVal={dateVal ? dateVal : ""}
        name="날짜"
        selectArray={dateArray}
        id={2}
      />
      <CustomSelect
        getSelectVal={getSelectVal}
        currentVal={timeVal ? timeVal : ""}
        name="시간"
        selectArray={timeArray}
        id={3}
      />
      <CustomSelect
        getSelectVal={getSelectVal}
        currentVal={personelVal ? personelVal : ""}
        name="인원"
        selectArray={personnelArray}
        id={4}
      />
      {searchval && <Button variant="outlined">검색하기</Button>}
    </StyledSearchBox>
  );
};

export default SearchBox;
