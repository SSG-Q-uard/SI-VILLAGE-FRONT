'use client';
import DialogComponent from '@/components/dialog/DialogComponent';
import MemberTerms from '@/components/dialog/MemberTerms';
import ArrowRightIcon from '@/components/icons/common/ArrowRightIcon';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React, { useState } from 'react';

function MySizeForm() {
  return (
    <div className="space-y-4 p-[32px_24px_40px]">
      {/* Height and Weight */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label htmlFor="height" className="w-1/3 text-sm">
            키
          </label>
          <div className="w-2/3 flex items-center ring-1 ring-si-text-gray text-si-text-gray">
            <Input
              type="text"
              name="height"
              id="height"
              placeholder="입력"
              className="flex-grow border-none"
            />
            <span className="mr-2 text-sm text-[#333333]">cm</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="weight" className="w-1/3 text-sm">
            몸무게
          </label>
          <div className="w-2/3 flex items-center ring-1 ring-si-text-gray text-si-text-gray">
            <Input
              type="text"
              name="weight"
              id="weight"
              placeholder="입력"
              className="flex-grow border-none"
            />
            <span className="mr-2 text-sm text-[#333333]">kg</span>
          </div>
        </div>
      </div>

      {/* Top Size */}
      <div className="flex justify-between items-center">
        <label htmlFor="top-size" className="w-1/3 text-sm">
          평소 상의 사이즈
        </label>
        <Select name="top-size">
          <SelectTrigger className="w-2/3 border-si-text-gray hover:border-black">
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent className="bg-white border-black">
            <SelectItem value="xxs">XXS 이하</SelectItem>
            <SelectItem value="xs">XS</SelectItem>
            <SelectItem value="s">S</SelectItem>
            <SelectItem value="m">M</SelectItem>
            <SelectItem value="l">L</SelectItem>
            <SelectItem value="xl">XL</SelectItem>
            <SelectItem value="xxl">XXL 이상</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bottom Size */}
      <div className="flex justify-between items-center">
        <label htmlFor="bottom-size" className="w-1/3 text-sm">
          평소 하의 사이즈
        </label>
        <Select name="bottom-size">
          <SelectTrigger className="w-2/3 border-si-text-gray open:border-black open:ring-black ">
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent className="bg-white border-black">
            <SelectItem value="23 이하">23 이하</SelectItem>
            {Array.from({ length: 14 }, (_, i) => (
              <SelectItem key={i} value={`${24 + i}`}>{`${24 + i}`}</SelectItem>
            ))}
            <SelectItem value="38 이상">38 이상</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Shoe Size */}
      <div className="flex justify-between items-center">
        <label htmlFor="shoe-size" className="w-1/3 text-sm">
          평소 신발 사이즈
        </label>
        <Select name="shoe-size">
          <SelectTrigger className="w-2/3 border-si-text-gray hover:border-black">
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent className="bg-white border-black">
            <SelectItem value="150 이하">150 이하</SelectItem>
            {Array.from({ length: 13 }, (_, i) => (
              <SelectItem
                key={i}
                value={`${160 + i * 10}`}
              >{`${160 + i * 10}`}</SelectItem>
            ))}
            <SelectItem value="280 이상">280 이상</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="text-xs text-si-text-gray">
        입력하신 사이즈는 통계자료, 사이즈 추천받기 및 상품리뷰에 사용됩니다.
      </div>
    </div>
  );
}

export default MySizeForm;
