import React, {useState } from 'react'
import './App.css';
import Modal from './Modals';
import Item from './seedData.js'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";



function Featuredproducts(){
    const [open, setOpen] = React.useState(false);
  
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };

  
  
    return(
        <>
        <div className = 'Featuredproducts'>
                <h2>Items</h2>
                <div className='Features'>
                {
                    Item.map( item => {
                        return(<>
                                <div className='Featureitems'>
                                    <img src= {item.image} alt='' />
                                    <p className='Itemtittle'>{item.title} </p>
                                    <p>£{item.price} </p>
                                    <Button variant="outlined" onClick={handleClickToOpen}> SEE MORE </Button>
                                    <Dialog open={open} onClose={handleToClose}>
                                        <DialogTitle id='dialog-title' aria-describedby='dialog-description'>{item.title}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                {item.title}
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleToClose} 
                                                    color="primary" autoFocus>
                                                Close
                                            </Button>
                                    </DialogActions>
                                </Dialog>
                                </div>
                            </> 
                        )
                    })
                }
                </div>
        </div>
        </>
    )
}

export default Featuredproducts;