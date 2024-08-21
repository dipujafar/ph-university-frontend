import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/feature/auth/authApi';
import Password from 'antd/es/input/Password';
import { useAppDispatch } from '../redux/hook';
import { setUser } from '../redux/feature/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            userId:"2025030001",
            password: "student123",
        }
    }); 
    const dispatch = useAppDispatch();
    const [login, {data,error}] = useLoginMutation();

   

    const onsubmit= async (data)=>{
       const userInfo = {
        id: data.userId,
        password: data.password
       } 
       
      const res = await login(userInfo).unwrap();

       const user = verifyToken(res?.data?.accessToken);
    
       
       dispatch(setUser({user:user, token: res.data.accessToken}))
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