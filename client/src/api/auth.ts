import axios from "axios";



interface LoginRequestData {
    email: string,
    password: string
}

export const loginUser = async (body: LoginRequestData) => {

    try {
        console.log("inside login user api");
        console.log(body);
        // const res: any = await axios.post(`http://localhost:3000/user/login`,body);
        const res: any = await axios({
            method: "post",
            url: `http://localhost:3000/user/login`,
            data: body,
            withCredentials: true
        });
        console.log(res.data);
        return res.data;

    } catch (error) {
        console.log('error in loginuser api');
        throw error;
    }
}