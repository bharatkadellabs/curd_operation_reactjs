import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Divider, Grid, Typography } from '@mui/material'
import { fontSize } from '@mui/system'

export default function productDetails(props) {
  console.log(props)
  const { openPopup, setOpenPopup } = props
  const productData = props.products.products
  console.log(productData)
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const handleClickOpen = () => {
    setOpenPopup(true)
  }

  const handleClose = () => {
    setOpenPopup(false)
  }

  return (
    <div>
      <Dialog open={openPopup} onClose={handleClose} style={{ width: '100%' }}>
        <DialogTitle>
          Product Details
          <br />
          <h6 style={{ color: 'rgba(0, 0, 0, 0.6)', margin: 0 }}>
            Product Id ( #{productData._id} )
          </h6>
        </DialogTitle>
        <Divider></Divider>
        <DialogContent>
          <DialogContentText>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography color={'blue'}>
                  Details
                  <hr />
                </Typography>
                <Typography>Product Title:- {productData.title} </Typography>
                <Typography>
                  Product Sub Title:- {productData.subTitle}{' '}
                </Typography>
                <Typography>Sale Price:- {productData.price} </Typography>
                <Typography color={'red'}>
                  MRP Price:- {productData.mrpPrice}{' '}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                Sometimes, we want to set a height of a dialog in React Material
                UI. In this article, we’ll look at how to set a height of a
                dialog in React Material UI.
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  )
}
