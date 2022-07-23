import axios from "axios";

export const actionTypes = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR"
};

const loadings = () => {
  return {
    type: actionTypes.LOADING,
  };
};

const Success = (payload) => {
    console.log("succes payload",payload)
  return {
    type: actionTypes.SUCCESS,
    payload,
  };
};

const Error=()=>{
    return {
        type:actionTypes.ERROR
    }
}

export const getData=(userid,datee)=>(dispatch)=>{
  console.log('get reducer',userid,datee)
    dispatch(loadings())
    axios({
        url: `https://salty-chamber-30466.herokuapp.com/user/${userid}/${datee}/stats`,
        method: "GET",
      })
        .then((res) => {
          // console.log("home", res);
          dispatch(Success(res.data));
        })
        .catch((err) => dispatch(Error()));   
}
// console.log("reducerinitstate",)

export const postData=(data,dispatch,a,userid)=>{
    console.log('post reducer',data,dispatch,a,userid)
    axios.post(`https://salty-chamber-30466.herokuapp.com/user/${userid}/${a}/stats`, data)
      .then((res)=>{
         dispatch(getData())
        console.log("posted")
        })
      .catch(function (error) {
        console.log(error);
      });
}


