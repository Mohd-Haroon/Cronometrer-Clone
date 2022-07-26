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
    // console.log("succes payload",payload)
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
  // console.log('get reducer',userid,datee)
    dispatch(loadings())
    axios({
        url: `https://morning-citadel-47535.herokuapp.com/user/${userid}/${datee}/stats`,
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
    // console.log('post reducer',data,a,userid)
    axios.post(`https://morning-citadel-47535.herokuapp.com/user/${userid}/${a}/stats`, data)
      .then((res)=>{
         dispatch(getData(userid,a))
        // console.log("posted")
        })
      .catch(function (error) {
        // console.log(error);
      });
}


