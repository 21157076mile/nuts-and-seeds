// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import Image from "next/image";

// import { getCatsFetch } from "@redux/slices/catSlice/catState";
import LoginForms from "./login-forms";
// import TopBar from "@shared/ui-components/top-bar";

export default function Login() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCatsFetch());
  // }, []);


  return (
    <main className="flex min-h-screen flex-col items-center">
      <LoginForms />


    </main>
  );
}
