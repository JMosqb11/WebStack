import React, { useEffect, useState } from "react";

import { Item } from "@/interface/apiskills";
import { ApiContenful, IresultApi } from "../../pages/api/skills";

import Image from "next/image";

const Containerskills: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse: IresultApi = await ApiContenful();
      if (apiResponse.StatusResponse) {
        setData(apiResponse.data.items);
      }
    };
    fetchData();
  }, []);

    return (
        
        <>
        <section className="flex justify-center">
            <div className="flex justify-around flex-wrap gap-10 bg-found-section w-[100%] md:w-[90%] h-auto py-10 mt-5 rounded-[20px]">
            {data.map((item: Item) => (
                <div key={item.sys.id}>
                <div className="w-[160px] md:w-[190px] h-[128px] bg-slate-50 rounded-t-xl flex items-center justify-center bg-opacity-20 backdrop-blur-44 webkit-backdrop-blur-44">
                    <Image
                    width={100}
                    height={100}
                    src={item.fields.iconLenguaje}
                    alt={item.fields.name}
                    loading="lazy"
                    />
                </div>
                <div className="text-white w-[160px] md:w-[190px] h-[67px] bg-slate-600 rounded-b-xl flex items-center justify-center bg-opacity-20 backdrop-blur-44 webkit-backdrop-blur-44">
                    <p>{item.fields.name}</p>
                </div>
                </div>
                ))}
            </div> 
         </section>
        
      </>
    );
};

export default Containerskills;
