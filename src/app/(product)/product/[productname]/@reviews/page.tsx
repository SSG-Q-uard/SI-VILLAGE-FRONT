import React from 'react';
import DetailReview from '@/components/pages/detail/DetailReview';
import { reviewListByProductId } from '@/actions/reviewActions';

async function page({ params }: { params: { productname: string } }) {
  // 리뷰 id 조회 api
  const getIdData = async () => {
    const reviewId = await reviewListByProductId(params.productname); // API 호출 결과를 배열로 받음
    return reviewId;
  };

  const reviewId = await getIdData(); // 비동기 처리 후 id 리스트를 reviewId에 저장
  console.log(reviewId, '리뷰 ID 목록');

  return (
    <main>
      <div className="h-full">
        <DetailReview id={reviewId} productname={params.productname} />
      </div>
    </main>
  );
}

export default page;
