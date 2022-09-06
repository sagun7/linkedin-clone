import React from 'react'
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
const newsArticle =(heading, subtitle) =>(
  <div className='widgets__article'>
   <div className='widgets__articleLeft'>
      <FiberManualRecordIcon />
    </div>


    <div className='widgets__articleRight'>
      <h4> {heading}</h4>
      <p> {subtitle}</p>
    </div>

  </div>
);

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Sagun is back","Top news - 100 readers")}
      {newsArticle("Permanent Residence: Australia","Top news - 90 readers")}
      {newsArticle("Blockchain : Australia","Top news - 80 readers")}
    </div>
  )
}

export default Widgets