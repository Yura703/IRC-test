// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge } = require('electron');
const path = require('path');
const fs = require('fs');
const { execFile } = require('node:child_process');

contextBridge.exposeInMainWorld('electron', {
  openFile: (number) => {    
    let linkProg = '';
    switch (number) {
      case 1:
        linkProg = 'D:\Рабочая\Alarm_3_2.exe';
        break;
      case 2:
        linkProg = 'D:\Рабочая\Alarm.exe';
        break;
      case 3:
        linkProg = 'D:\Рабочая\Editor0.exe';
        break;
      case 4:
        linkProg = 'D:\Рабочая\AddEmplyee.exe';
        break;
      default:
        linkProg = "";
        break;
    }
    const child = execFile(linkProg, [], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }      
    }); 
    return;
  }
  
});