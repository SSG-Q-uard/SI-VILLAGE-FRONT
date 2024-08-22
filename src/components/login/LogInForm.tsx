import { CheckCheck } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import Image  from "next/image";
import Link from "next/link";
function LogInForm() {

  return (
    <main className="h-min-screen">
    <form className="p-10">
      <Input type="search" name="email" placeholder="Email" />
      <Input className ="mt-3" type="search" name="password" placeholder="Password" />
      
      {/* 체크박스,자동 로그인 ID/PW찾기 레이아웃 */}
      <div w-full h-50>

        {/* 체크박스, 자동 로그인 라벨 부모 레이아웃 */}
        <div className="flex items-start mt-5">
      <Input className = "w-7 mt-3" id = "term" type="checkbox"></Input> 
      <label className= "text-black-500 mt-5 ml-3 ts-5" htmlFor="term">자동로그인
        </label> 

        {/* ID와 PW찾기 라벨 부모 레이아웃 */}
        {/* 다른 컴포넌트 구조가 나오면 다음에 페이지 링크 */}
        <div className = "text-sm flex mt-5 absolute right-10">
          <Link href= {'/sign-in/ForgotCredential'}>
        <h1 className="w-100"> ID/PW 찾기</h1>
        </Link>
        </div>
        </div>
        </div>

        <Button className= "w-full h-12 mt-5" type="submit">로그인</Button>
        {/* 소셜 로그인 레이아웃 */}
        <div className="w-full h-14 mr-10 mt-8 flex items-center justify-center">

          <Image
          className="rounded-lg mr-12 bg-gray-200"
          src="/smartphone.png"
          width={45}
          height={45}
          alt='smartphone'>
          </Image>

          <Image
          className="mr-1"
          src="/kakaotalk.png"
          width={45}
          height={45}
          alt='smartphone'>
          </Image>

          <Image
          className="ml-10"
          src="/naver.png"
          width={50}
          height={50}
          alt='smartphone'>
          </Image>
        </div>

        {/* 회원가입 버튼 레이아웃 */}
        <Button className= "border border-2px w-full h-14 mt-10 bg-white-200 text-black hover:bg-white-200">회원가입</Button>

        {/* ID/PW 찾기 링크 레이아웃 */}
        <h1 className="w-100 text-center mt-8 text-sm"> 비회원 주문조회</h1>
    </form>
    </main>
  )
}
export default LogInForm
