import React, { useState } from 'react';
import Albumcover from './Albumcover';

function Slideralbumcover() {
  const [count, setCount] = useState(0);
  const [showCover, setShowCover] = useState(true);
  
  const [coverImages, setCoverImages] = useState([
      {cover: 'https://img.20mn.fr/LG4o_0n9SByJf0EdpLmmMg/830x532_aventures-simpson-passionnent-telespectateurs-depuis-plus-30-ans.jpg',
       title: '113 fous la merde',
       artist:'ntm',
       track:''
    },
      'https://www.serieously.com/app/uploads/2020/11/les-simpson-bart.jpg',
    'http://www.slate.fr/sites/default/files/styles/1060x523/public/capture_decran_2019-12-19_a_15.png',
  ]);


  return (
    <div className="header">
      <button onClick={() => setCount(count + 1)}>Next</button>
      <button onClick={() => setCount(count - 1)}>Previous</button>

      {showCover && <Albumcover image={coverImages[count]}  />}
    </div>
  );
}

export default Slideralbumcover;