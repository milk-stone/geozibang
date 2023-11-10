
import React from 'react';
import { Link, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.statusBar}>
        <img src="/status-bar.png" alt='Status Bar' style={{ width:'100%', height:'100%'}} />
      </div>
      <div style={styles.menuBar} />
    </div>
  );
}

const styles = {
container: {
  width: '393px', 
  height: '852px',
  paddingTop: '0px', 
  backgroundColor:'#D4E9F8',
  margin :'auto',
},
statusBar: {
  height: '47px', 
},
menuBar: {
  position : 'absolute',
  bottom :'0',
  width: '393px',
  height: '90px',
  backgroundColor: '#F8F8F8',
}
};