import { Button } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/feature/auth/authApi';
import Password from 'antd/es/input/Password';
import { useAppDispatch } from '../redux/hook';
import { setUser, TUser } from '../redux/feature/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            userId:"2025030001",
            password: "student123",
        }
    }); 
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [login] = useLoginMutation();

   

    const onsubmit= async (data : FieldValues)=>{
        const toastId = toast.loading("Logging in");
        try{
        const userInfo = {
        id: data.userId,
        password: data.password
       } 
       
      const res = await login(userInfo).unwrap();

       const user = verifyToken(res?.data?.accessToken) as TUser;
    
       
       dispatch(setUser({user:user, token: res.data.accessToken}));
       toast.success("Logged in",{id: toastId})
       navigate(`/${user.role}/dashboard`);
    }catch (err){
        toast.error("Something went wrong", {id: toastId});
    }
    }
    return (
       <form onSubmit={handleSubmit(onsubmit)}>
        <div>
            <label htmlFor='userId'>Id : </label>
            <input type="text" id='userId' {...register("userId")} />   
        </div>
        <div>
            <label htmlFor='password'>Password : </label>
            <input type="password" id='password' {...register("password")} />
        </div>
        <Button htmlType='submit'>Login</Button>
       </form>
    );
};

export default Login;