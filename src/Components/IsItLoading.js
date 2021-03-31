import React from 'react'
import GetImage from './GetImage'

function IsItLoading({data,loading,}){
    if(loading)
    return <h2>Still loading...Great things are worth waiting for!</h2>
    else{
        return(
            <p>{data.title}<span>(Date: {data.date})</span></p>
            
            <GetImage
            imageUrl={data.url}
            mediaType={data.media_type}
            />
            <h5>Copyright: {data.copyright}</h5>
        )
    }
}

export default IsItLoading;