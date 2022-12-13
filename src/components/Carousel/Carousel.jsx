import React, { useState } from "react";
import { CarouselData as Images } from "./CarouselData";
import "./Carousel.scss";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [rightClick, setRightClick] = useState(false);
  const [leftClick, setLeftClick] = useState(false);

  const length = Images.length;
  let prev = current - 1 < 0 ? length - 1 : current - 1;
  let next = current + 1 === length ? 0 : current + 1;

  const nextNav = () => {
    setRightClick(true);
    setLeftClick(false);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevNav = () => {
    setRightClick(false);
    setLeftClick(true);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Images || Images.length <= 0) {
    return null;
  }

  return (
    <div className="ml-[400px] p-20 overflow-hidden">
      <div className="flex relative items-center justify-center">
        {Images.map((data, index) => {
          return (
            <div>
              {index === prev && (
                <img
                  onClick={prevNav}
                  className={
                    rightClick && !leftClick
                      ? "leftClickRight"
                      : !rightClick && leftClick
                      ? "leftClickLeft"
                      : "leftDefault"
                  }
                  src={data.image}
                  alt="project"
                />
              )}
            </div>
          );
        })}
        {Images.map((data, index) => {
          return (
            <div>
              {index === current && (
                <div>
                  <img
                    className={
                      rightClick && !leftClick
                        ? "centerClickRight"
                        : !rightClick && leftClick
                        ? "centerClickLeft"
                        : "centerDefault"
                    }
                    src={data.image}
                    alt="project"
                  />
                </div>
              )}
            </div>
          );
        })}
        {Images.map((data, index) => {
          return (
            <div>
              {index === next && (
                <img
                  onClick={nextNav}
                  className={
                    rightClick && !leftClick
                      ? "rightClickRight"
                      : !rightClick && leftClick
                      ? "rightClickLeft"
                      : "rightDefault"
                  }
                  src={data.image}
                  alt="project"
                />
              )}
            </div>
          );
        })}
      </div>
      {Images.map((data, index) => {
        return (
          <div>
            {index === current && data.title && data.description && (
              <div className="bg-white rounded-xl shadow-2xl mt-10 contentCard">
                <div className="px-10 pb-10 pt-2">
                  <h1 className="font-bold text-2xl my-6">{data.title}</h1>
                  <p className="text-gray-600 text-xl">{data.description}</p>
                </div>
                {data.link && (
                  <div className="bg-slate-100 pl-10 py-4">
                    <p className="text-sky-500 cursor-pointer transition ease-in-out hover:translate-x-2 duration-300">
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.linkText} →
                      </a>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
