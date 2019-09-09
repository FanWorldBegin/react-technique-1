
import React from 'react';
//原始文件在component 里面
import {WithFetch} from './withFetch';
export const User = WithFetch('https://randomuser.me/api/')(props => {
  return (
    <h1>{props.data.results[0].email}</h1>
  )
})