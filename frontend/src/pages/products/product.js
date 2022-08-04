import { Button, ButtonGroup, TableCell } from '@mui/material'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline'
import DeleteIcon from '@mui/icons-material/Delete'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import ProductDetailsPage from '../products/productDetails.js'
import { useState } from 'react'
const click_show_product_details = () => {
  return <ProductDetailsPage />
}
const Book = (props) => {
  const history = useNavigate()
  const { _id, title, subTitle, price, mrpPrice } = props.products
  // -----for dialogbox product detail
  const [openPopup, setOpenPopup] = useState(false)

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8080/product/${_id}`)
      .then((res) => console.log(res))
    // .then(() => history(""));
  }

  return (
    <>
      <TableCell align="center">{title}</TableCell>
      <TableCell align="center">{subTitle}</TableCell>
      <TableCell align="center">
        {price} <CurrencyRupeeIcon fontSize={'7'} align="center" />
      </TableCell>
      <TableCell align="center">
        {mrpPrice} <CurrencyRupeeIcon fontSize={'7'} align="center" />
      </TableCell>
      <TableCell align="center">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            sx={{ borderRadius: 0 }}
            color="info"
            onClick={() => setOpenPopup(true)}
          >
            <RemoveRedEyeIcon />
          </Button>
          <Button
            LinkComponent={Link}
            to={`/product/${_id}`}
            sx={{ borderRadius: 0 }}
            color="warning"
          >
            <ModeEditOutlineIcon />
          </Button>
          <Button
            sx={{ borderRadius: 0 }}
            color="error"
            onClick={deleteHandler}
          >
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </TableCell>
      <ProductDetailsPage
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        products={props}
      />
    </>
  )
}

export default Book
