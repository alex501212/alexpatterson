import React, { useState } from "react";
import { OtherData as Projects } from "./OtherData";

const Other = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState({});

  const openModalHandler = (data) => {
    setOpen(true);
    setImage(data);
  };

  open === true
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="ml-[400px] p-20 overflow-hidden">
      {Projects.map((data) => {
        return (
          <div>
            <div className="bg-white rounded-xl shadow-2xl mt-10">
              <div className="px-10 pb-10 pt-2">
                <h1 className="font-bold text-2xl my-6">{data.title} </h1>
                <img
                  onClick={() => openModalHandler(data.image)}
                  src={data.image}
                  alt="project"
                  className="float-right w-80 bottom-[75px] relative shadow-2xl hover:brightness-75 cursor-pointer rounded-md"
                />
                {setOpen && (
                  <div
                    onClick={() => setOpen(false)}
                    className={`fixed inset-0 flex justify-center items-center transition-colors ${
                      open ? "visible bg-black/20" : "invisible"
                    }`}
                  >
                    <img
                      onClick={() => setOpen(true)}
                      src={image}
                      alt="project"
                      className="w-[740px] h-[434px] rounded-md inset-x-[12.5rem] relative"
                    />
                  </div>
                )}
                <p className="text-gray-600 text-xl">{data.description} </p>
              </div>
              {data.link && (
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <div className="bg-slate-100 pl-10 py-4">
                    <p className="text-sky-500 cursor-pointer transition ease-in-out hover:translate-x-5 duration-100">
                      {data.linkText} →
                    </p>
                  </div>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Other;
