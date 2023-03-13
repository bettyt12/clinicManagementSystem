import React from 'react'
import "./viewPatient.css";

import Box from '@mui/material/Box';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import Sidebar from '../../components/Sidebar/Sidebar';

const ViewPatient = () => {
  return (
    <>
      <Box flex={4} p={{ xs: 1, md: 2 }} sx={{ml:7}}>
        <Sidebar />
      </Box>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Abebe Bekele</span>
                <span className="userShowUserTitle">Card Number - 112</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Patient Details</span>
              <div className="userShowInfo">
                <PermIdentityIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Abebe Bekele</span>
              </div>
              <div className="userShowInfo">
                <CalendarTodayIcon className="userShowIcon" />
                <span className="userShowInfoTitle">22 - Age</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroidIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Kebele 10</span>
              </div>
              <div className="userShowInfo">
                <MailOutlineIcon className="userShowIcon" />
                <span className="userShowInfoTitle">+2518979690</span>
              </div>
              <div className="userShowInfo">
                <LocationSearchingIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Addis Ababa | Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ViewPatient