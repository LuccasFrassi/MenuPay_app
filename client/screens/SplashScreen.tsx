import { useState } from 'react';
import { StyleSheet } from 'react-native';
import {AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import React from 'react';
import { hideAsync } from 'expo-splash-screen';





    type Props ={
    onComplete: (status: boolean) => void;
    
    }


export function SplashScreen({onComplete}:Props){
    const [lastStatus, setStatus ] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);

    function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
       if(status.isLoaded){
            if(lastStatus.isLoaded !== status.isLoaded){
                hideAsync();
            }

            if(status.didJustFinish){
                onComplete(true);
            }

       }
    }

    return (
        <Video
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        source={require('../assets/splash.mp4')}
        isLooping={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay={true} 
        
        />
    )

}