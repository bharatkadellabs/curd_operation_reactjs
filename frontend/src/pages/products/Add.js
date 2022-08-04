/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Button, Box, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Add() {
  const history = useNavigate();
  const [inputs, setInput] = useState({
    title: "",
    subTitle: "",
    price: "",
    mrpPrice: "",
  });

  const productRequest = async () => {
    await axios
      .post("http://localhost:8080/product", {
        title: String(inputs.title),
        subTitle: String(inputs.subTitle),
        price: Number(inputs.price),
        mrpPrice: Number(inputs.mrpPrice),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    productRequest().then((data) => console.log(data), setOpen(true));
    //  .then(() => history("/"));
  };

  //--------- for update product---------
  const _id = useParams().id;
  console.log(_id);
  useEffect(() => {
    const fetchHandler = async () => {
      const URL = `http://localhost:8080/product/${_id}`;
      return await axios
        .get(URL)
        .then((res) => res.data)
        .then((data) => setInput(data.product));
    };
    fetchHandler();
  }, [_id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateRequest().then((data) => console.log(data), setOpen(true));
    // .then(() => history("/"));
  };

  const updateRequest = async () => {
    await axios
      .put(`http://localhost:8080/product/${_id}`, {
        title: String(inputs.title),
        subTitle: String(inputs.subTitle),
        price: Number(inputs.price),
        mrpPrice: Number(inputs.mrpPrice),
      })
      .then((res) => res.data);
  };

  // --------------for Snackbar -------
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    history("/");
  };
  const action = (
    <React.Fragment>
      <Button color="success" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  if (!_id) {
    return (
      <Box sx={{ margin: "50px auto ", width: "50%" }}>
        <form
          onSubmit={handleSubmit}
          width="50%"
          sx={{ backgroundColor: "red" }}
        >
          <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Add New Project
          </Typography>
          <Box sx={{ padding: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  type="text"
                  label="Product Name Title"
                  onChange={handleChange}
                  name="title"
                  fullWidth
                  required
                  variant="standard"
                  value={inputs.title}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  onChange={handleChange}
                  name="subTitle"
                  value={inputs.subTitle}
                  id="subTitle"
                  label="Sub Title"
                  fullWidth
                  autoComplete="cc-number"
                  variant="standard"
                  type="text"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  onChange={handleChange}
                  name="price"
                  value={inputs.price}
                  id="price"
                  label="Sale Price"
                  fullWidth
                  autoComplete="cc-number"
                  variant="standard"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  onChange={handleChange}
                  name="mrpPrice"
                  value={inputs.mrpPrice}
                  id="mrpPrice"
                  label="MRP Price"
                  fullWidth
                  variant="standard"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={12} marginTop={"30px"} textAlign="center">
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  
                >
                  Add Product
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Product Add Succesfully"
          action={action}
          transition="right"
          ContentProps={{
            sx: {
              background: "#2E7D32",
              marginTop: "50px",
            },
          }}
        />
      </Box>
    );
  } else {
    return (
      <Box sx={{ margin: "50px auto ", width: "50%" }}>
        <form
          onSubmit={handleUpdate}
          width="50%"
          sx={{ backgroundColor: "red" }}
        >
          <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Edit Project
          </Typography>
          <Box sx={{ padding: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  type="text"
                  label="Product Name Title"
                  onChange={handleChange}
                  name="title"
                  fullWidth
                  required
                  variant="standard"
                  value={inputs.title}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  onChange={handleChange}
                  name="subTitle"
                  value={inputs.subTitle}
                  id="subTitle"
                  label="Sub Title"
                  fullWidth
                  autoComplete="cc-number"
                  variant="standard"
                  type="text"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  onChange={handleChange}
                  name="price"
                  value={inputs.price}
                  id="price"
                  label="Sale Price"
                  fullWidth
                  autoComplete="cc-number"
                  variant="standard"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  onChange={handleChange}
                  name="mrpPrice"
                  value={inputs.mrpPrice}
                  id="mrpPrice"
                  label="MRP Price"
                  fullWidth
                  variant="standard"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={12} marginTop={"30px"} textAlign="center">
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  
                >
                  Update Product
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Update Product Succesfully"
          action={action}
          transition="right"
          ContentProps={{
            sx: {
              background: "#2E7D32",
              marginTop: "50px",
            },
          }}
        />
      </Box>
    );
  }
  // return (
  //   <>

  //   </>
}
