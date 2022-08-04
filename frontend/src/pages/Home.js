import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'
import Product from './products/product'

const URL = 'http://localhost:8080/product'
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}
const Home = () => {
  const [products, setProducts] = useState()
  useEffect(() => {
    fetchHandler().then((data) => setProducts(data.product))

  }, [products])
  return (
    <div>
      <Container>
        <Grid container padding="30px 0 30px 0" textAlign="left">
          <Grid item xs={12} md={10}>
            <Typography variant="h4" marginBottom={1} component="h3">
              View All Data
            </Typography>
          </Grid>
          <Grid item xs={12} md={2} textAlign="right">
            <Button
              style={{ width: '100%' }}
              variant="contained"
              color="success"
              component={Link}
              to="./addProduct"
            >
              <AddIcon /> Add Data
            </Button>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: '#F4FBFF', fontWeight: 700 }}>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Index
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Product Name
                </TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Sub Title
                </TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Sale Price
                </TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  MRP Price
                </TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products &&
                products.map((products, i) => (
                  <TableRow key={i}>
                    <TableCell align="center" scope="row">
                      {i + 1}
                    </TableCell>
                    <Product products={products} />
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}
export default Home
