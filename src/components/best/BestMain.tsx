import React from 'react';
import Image from 'next/image';
import { bestCreateDataType } from '@/types/best/bestTypes';

function BestMain({ data }: { data: bestCreateDataType[] }) {
  return (
    <div className="mt-4 overflow-x-hidden">
      <div className="">
        {/* 조건부에 따라 데이터 배치 */}
        {/* 데이터의 length가 1 ~ 2까지는 상단 grid-cols로 2개 배치 */}
        <ul className={`grid gap-3 ${data.length >= 2 ? 'grid-cols-2' : ''}`}>
          {data.map(
            (item, index) =>
              index < 2 && (
                <li
                  key={index}
                  className="flex flex-col w-[170px] text-wrap line-clamp-2"
                >
                  <Image
                    src={item.ProductImage}
                    alt={item.Product_Content}
                    width={170}
                    height={270}
                    className="object-cover h-[270px]"
                  />
                  <div className="mt-3 p-2 ">
                    <p className="text-sm font-bold ">{item.Product_Title}</p>
                    <p className="text-xs ">{item.Product_Content}</p>
                    <div className="flex mt-2">
                      <p className="text-xs text-orange-400">
                        {item.Product_DiscountRate}%
                      </p>
                      <p className="text-xs ml-2">
                        {item.Product_price.toLocaleString('ko-KR')}
                      </p>
                    </div>
                  </div>
                </li>
              )
          )}
        </ul>

        {/* 하단 그리드: 데이터 3개 이상일 때 grid-cols-3으로 배치 */}
        {data.length > 2 && (
          <ul className="grid gap-3 grid-cols-3 mt-4 text-wrap line-clamp-2">
            {data.map(
              (item, index) =>
                index >= 2 && (
                  <li
                    key={index}
                    className="flex flex-col w-[120px] text-wrap line-clamp-2"
                  >
                    <Image
                      src={item.ProductImage}
                      alt={item.Product_Content}
                      width={113}
                      height={170}
                      className="object-cover h-[170px]"
                    />
                    <div className="mt-3 pl-2 w-[120px] text-wrap line-clamp-2">
                      <p className="text-sm font-bold truncate">
                        {item.Product_Title}
                      </p>
                      <p className="text-xs mt-2 line-clamp-2">
                        {item.Product_Content}
                      </p>
                      <div className="flex mt-2">
                        <p className="text-xs text-orange-400">
                          {item.Product_DiscountRate}%
                        </p>
                        <p className="text-xs ml-2">
                          {item.Product_price.toLocaleString('ko-KR')}
                        </p>
                      </div>
                    </div>
                  </li>
                )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
export default BestMain;
