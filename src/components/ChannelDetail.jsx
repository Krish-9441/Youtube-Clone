import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";

const ChannelDetail = () => {
  const {id}=useParams()
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))

     fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  },[id])
  return (
    <Box minHeight='95vh'>
        <Box>
          <div
            sx={{background:'linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)'}}
          />
          <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
        </Box>

        <Box display='flex' p='2'>
          <Box sx={{mr:{sm:'100px'}}} />
            <Videos videos={videos}/>
        </Box>
    </Box>
  )
}

export default ChannelDetail