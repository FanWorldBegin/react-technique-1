import React, { Component } from 'react';
//原始文件在component 里面
import {WithFetch} from './withFetch';
export const Joke = WithFetch('http://api.icndb.com/jokes/random/3')(props => {
  return (
    <div>
      {
        props.data.value.map(joke => (
          <p key={ joke.id }>{ joke.joke }</p>
        ))
      }
    </div>
  )
})