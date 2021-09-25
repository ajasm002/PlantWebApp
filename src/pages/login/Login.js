import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IconButton, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { AuthContext } from "../../Auth/authContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const auth = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    auth.login(data.username);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography style={{ marginBottom: "2%",fontFamily:"Lobster, cursive",fontWeight:"400",fontSize:"40px" }} component="h1" variant="h5">
        Pixl Plant
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          {...register("username")}
          style={{ margin: "5px"}}
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          {...register("password")}
          style={{ margin: "5px" }}
          required
        />
        <IconButton
          style={{
            position: "absolute",
            left: "auto",
            marginLeft: "220px",
            marginTop: "30px",
            marginRight: "auto",
            textAlign: "center",
            backgroundColor: "transparent",
            color:"black"
          }}
          type="submit"
        >
          <PlayCircleIcon style={{ fontSize: "60px" }} />
        </IconButton>
        <span style={{marginTop:"5px",fontWeight:"400"}}>
            New to PixlPlant? 
            <Link to="/register" style={{ textDecoration: "none", }}>
              <b> Sign up now.</b>
            </Link>
          </span>
      </form>
    </div>
  );
};

export default Login;
