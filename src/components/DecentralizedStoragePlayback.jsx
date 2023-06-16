import { Player } from '@livepeer/react';
import React, { useState } from 'react'

const DecentralizedStoragePlayback = () => {
    const [url, setUrl] = useState('');

  return (
      <div>
          <p>IPFS or Arweave CID</p>
      <input
        type="text"
        placeholder="ipfs://... or ar://"
        onChange={(e) => setUrl(e.target.value)}
      />
 
          {/* {url && <p>Provided value is not a valid identifier.</p>} */}
          
          {
        url &&  
        <div style={{display: 'flex', justifyContent: "center", marginTop: "100px"}}>
            
        <div style={{ width: '1000px' }}>
              <Player
              src={url}
              autoPlay
              autoUrlUpload={{ fallback: true, ipfsGateway: 'https://simplr.mypinata.cloud/' }}
            />
            </div>
            </div>
            }
    </div>
  )
}

export default DecentralizedStoragePlayback