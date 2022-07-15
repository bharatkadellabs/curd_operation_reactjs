import { Grid, Input, Paper, TextField, Typography } from "@mui/material";
import React from "react";

const Add = () => {
  return (
    <div>
      
        <Typography textAlign="center" variant="h5" width="100%">Add A New Product</Typography>

        <Paper>
          <Grid container>
            <Grid item>
            <TextField id="standard-basic" label="Standard" variant="standard" />

            </Grid>
          </Grid>
        </Paper>
      
    </div>
  );
};

export default Add;
