import TextField from "@mui/material/TextField";
import { useHistory } from "react-router";
import { atom, useSetRecoilState } from "recoil";
import CustomButton from "../components/CustomButton";

export const userName = atom({
  key: "userName",
  default: "",
});

export const userPhone = atom({
  key: "userPhone",
  default: "",
});

const InputUserInfo = () => {
  const setName = useSetRecoilState(userName);
  const setPhone = useSetRecoilState(userPhone);
  const history = useHistory();

  const onNameChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };

  const onPhoneNumberChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setPhone(e.currentTarget.value);
  };


  return (
    <div
      style={{ marginBottom: "20px", padding: "20px", boxSizing: "border-box" }}
    >
      <div>
        <h3>고객 정보를 입력하세요</h3>

        <TextField
          style={{ marginBottom: "10px" }}
          id="outlined-basic"
          label="이름"
          variant="outlined"
          onChange={onNameChange}
        />
        <br />
        <TextField
          style={{ marginBottom: "10px" }}
          id="outlined-basic"
          label="휴대폰번호"
          variant="outlined"
          onChange={onPhoneNumberChange}
        />
        <br />

          <CustomButton name="결제하기" onClick={()=>{
            history.push(`/payment`);
          }} />
       
        <br />
      </div>
    </div>
  );
};

export default InputUserInfo;
