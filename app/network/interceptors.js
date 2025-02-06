// import store from "../store";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request) => {
  // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // const token = localStorage.getItem("token")
  //   ? localStorage.getItem("token")
  //   : userInfo && userInfo.token
  //   ? userInfo.token
  //   : null;

  if (isHandlerEnabled(request)) {
    // const { disableLoader } = store.getState().loader;
    // Modify request here
    // if (!disableLoader) store.dispatch(loader(true));

    

    // if (token) {
    //   request.headers["Authorization"] = `Bearer ${token}`;
    // }
  }
  return request;
};

export const successHandler = (response) => {
 
  if (isHandlerEnabled(response)) {
    // Hanlde Response
    // store.dispatch(loader(false));
    // store.dispatch(disableLoader(false));
  }
  return response;
};

export const errorHandler = (error) => {
  // if (isHandlerEnabled(error.config)) {
  //   // store.dispatch(loader(false));
  //   // store.dispatch(disableLoader(false));
  //   //session ends //free trial firm deleted
  //   if (error.response?.status === 401 &&  error.response?.data?.message === "Unauthenticated.") {
  //     // Auth.isAuth();
  //     // Auth.signOut();
  //     // localStorage.clear()
  //   }
  //   //[403] try to access with no permission or removed from it
  //   //[404] navigate in case and removed from it in same time]
  //   else if (error.response?.status === 424) {
  //     //expire
      
  //   } else if (navigator && navigator.onLine === false) {
  //     // dispatchSnackbarError(messages[lang].errors.networkError);
  //   } else {
  //     return Promise.reject({ ...error });
  //   }
  // } else {
  //   if (error.response?.status !== 401 || error.response?.status !== 400) {
  //     // dispatchSnackbarError(messages[lang].errors.errorOccurred);
  //   }
  // }
};
