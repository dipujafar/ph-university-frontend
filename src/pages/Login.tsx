import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";
import PHinput from "../components/form/PHinput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const  defaultValues = {
        userId: "2025030001",
        password: "student123",
      }

  const onsubmit = async (data: FieldValues) => {
    console.log(data);
    
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res?.data?.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <Row justify={"center"} align={"middle"} style={{height: "100vh"}}>
    <PhForm onSubmit={onsubmit} defaultValues={defaultValues}>
        <PHinput type={"text"} name={"userId"} label={"UserId"}></PHinput>
        <PHinput type={"password"} name={"password"} label={"Password"}></PHinput>
      <Button htmlType="submit">Login</Button>
    </PhForm>
    </Row>
  );
};

export default Login;
