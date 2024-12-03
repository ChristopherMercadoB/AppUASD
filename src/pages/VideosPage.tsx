import React from 'react';

type Props = {};

const VideosPage: React.FC<Props> = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Video Page</h1>
      <iframe
        src="https://onedrive.live.com/?cid=55058228DDB9E685&id=55058228DDB9E685%21s5568dc3d60ac4f6aad03ff9bb5b3909e&parId=55058228DDB9E685%21s4f21211e22c64be9bbbf820e2c0f42f0&o=OneUp"
        width="100%"
        height="400"
        style={{ border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideosPage;
