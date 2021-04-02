import React from 'react'
import GetImage from './GetImage'
import styled from 'styled-components'

const StyledSect = styled.section`
font-size: 25 px;
color:purple;
`;
function IsItLoading({nasaData,loading}){
    if(loading)
    return <h2>Still loading...Great things are worth waiting for!</h2>
    else{
        return(
            <StyledSect className="load">
                <p>{nasaData.title}<span>(Date: {nasaData.date})</span></p>

            <GetImage
            imageUrl={nasaData.url}
            mediaType={nasaData.media_type}
            />
            <h5>Copyright: {nasaData.copyright}</h5>
            
            </StyledSect>
            
        )
    }
}

export default IsItLoading;