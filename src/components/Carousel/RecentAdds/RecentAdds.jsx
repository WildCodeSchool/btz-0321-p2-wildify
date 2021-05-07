import React, { useRef } from 'react';
import Card from '../RecentAdds/Card';
import PropTypes from 'prop-types';
import '../scrollbarwebkit.css';
import { useState, useEffect, useCallback } from 'react';
import throttle from 'lodash/throttle';

const timing = (1 / 60) * 1000;
const decay = (v) => -0.1 * ((1 / timing) ^ 4) + v;

function RecentAdds({ item, setSelectedSong, setMyPlaylist, setIsPlaylist, setIsRecentAddsActive }) {
  const [isClicked, setIsClicked] = useState();

  function useScrollBox(scrollRef) {
    const [clickStartX, setClickStartX] = useState();
    const [isDragging, setIsDragging] = useState(false);
    const [scrollStartX, setScrollStartX] = useState();
    const [direction, setDirection] = useState(0);
    const [momentum, setMomentum] = useState(0);
    const [lastScrollX, setLastScrollX] = useState(0);
    const [speed, setSpeed] = useState(0);
    const scrollWrapperCurrent = scrollRef.current;
    const handleLastScrollX = useCallback(
      throttle((screenX) => {
        setLastScrollX(screenX);
      }, timing),
      [],
    );
    const handleMomentum = useCallback(
      throttle((nextMomentum) => {
        setMomentum(nextMomentum);
        scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + nextMomentum * timing * direction;
      }, timing),
      [scrollWrapperCurrent, direction],
    );
    useEffect(() => {
      if (direction !== 0) {
        if (momentum > 0.1 && !isDragging) {
          handleMomentum(decay(momentum));
        } else if (isDragging) {
          setMomentum(speed);
        } else {
          setDirection(0);
        }
      }
    }, [momentum, isDragging, speed, direction, handleMomentum]);

    useEffect(() => {
      if (!isClicked) {
        setIsDragging(true);
      }
      if (scrollRef.current && !isClicked) {
        const handleDragStart = (e) => {
          setClickStartX(e.screenX);
          setScrollStartX(scrollRef.current.scrollLeft);
          setDirection(0);
        };
        const handleDragMove = (e) => {
          e.preventDefault();
          e.stopPropagation();

          if (clickStartX !== undefined && scrollStartX !== undefined && !isClicked) {
            const touchDelta = clickStartX - e.screenX;
            scrollRef.current.scrollLeft = scrollStartX + touchDelta;

            if (Math.abs(touchDelta) > 1) {
              setIsDragging(true);
              setDirection(touchDelta / Math.abs(touchDelta));
              setSpeed(Math.abs((lastScrollX - e.screenX) / timing));
              handleLastScrollX(e.screenX);
            }
          }
        };
        const handleDragEnd = () => {
          if (isDragging && clickStartX !== undefined) {
            setClickStartX(undefined);
            setScrollStartX(undefined);
            setIsDragging(false);
          }
        };

        if (scrollRef.current.ontouchstart === undefined && !isClicked) {
          scrollRef.current.onmousedown = handleDragStart;
          scrollRef.current.onmousemove = handleDragMove;
          scrollRef.current.onmouseup = handleDragEnd;
          scrollRef.current.onmouseleave = handleDragEnd;
        }
      }
    }, [scrollWrapperCurrent, isClicked, scrollRef, clickStartX, isDragging, scrollStartX, handleLastScrollX, lastScrollX]);

    return { clickStartX, scrollStartX, isDragging, direction, momentum, lastScrollX, speed };
  }

  let itemReversed = [...item];
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef, isClicked);
  itemReversed = itemReversed.reverse();

  return (
    <div
      ref={scrollWrapperRef}
      role="list"
      className="sidebar col-start-1 col-end-2 900:col-end-3 row-start-3 900:row-start-2 row-end-4 900:row-end-3 flex flex-row overflow-x-auto">
      <Card
        isDragging={isDragging}
        item={item}
        setIsRecentAddsActive={setIsRecentAddsActive}
        setMyPlaylist={setMyPlaylist}
        setIsPlaylist={setIsPlaylist}
        itemReversed={itemReversed}
        setSelectedSong={setSelectedSong}
        setIsClicked={setIsClicked}
      />
    </div>
  );
}

export default RecentAdds;

RecentAdds.propTypes = {
  item: PropTypes.array.isRequired,
  setMyPlaylist: PropTypes.func.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
  setIsPlaylist: PropTypes.func.isRequired,
  setIsRecentAddsActive: PropTypes.func.isRequired,
};
