'use client';

import Image from 'next/image';
const PostImages = (images) => {
  return (
    <div style={{ display: 'flex' }}>
      {images.images?.map((img, index) => {
        return (
          <div key={index}>
            <Image
              layout='responsive'
              alt=''
              src={`https://vehiculum-coding-challenge.herokuapp.com${img.m}`}
              width={711}
              height={400}
              quality={100}
            ></Image>
          </div>
        );
      })}
    </div>
  );
};

export default PostImages;
