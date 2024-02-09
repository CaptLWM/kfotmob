import React from "react";

// a태그 link로 변경해야함
export default function Home() {
  return (
    <div className="items-stretch flex flex-col bg-white">
      {/* header */}
      <header className="flex sticky top-0 left-0 w-full  border-l-1 border-neutral-100 bg-blue-400">
        <section className="flex h-[80px] w-full justify-between lg:p-0">
          <div className="flex items-center justify-between md:min-w-[calc(100vw-60px)] mx-auto">
            <a
              href="/"
              className="min-w-[150px] bg-yellow-200 h-full items-center flex"
            >
              kfotmob
            </a>
            <section className="flex w-full lg:flex pl-[50px] ">
              <div className="relative">
                <input className="h-[40px] border-none border rounded-[23px] bg-gray-300 bg-[20px]-center pl-[56px] bg-[14px] bg-no-repeat appearance-none text-sm tracking-[0.2px] text-left" />
              </div>
            </section>
            <div className="flex items-center gap=[24px] xl:gap-[40px] bg-green-300">
              <div className="flex items-center text-[19px] cursor-pointer whitespace-nowrap">
                <a href="/">메뉴1</a>
              </div>
              <div className="flex items-center text-[19px] cursor-pointer whitespace-nowrap">
                <a href="/">메뉴2</a>
              </div>
              <div className="flex items-center text-[19px] cursor-pointer whitespace-nowrap">
                <a href="/">메뉴3</a>
              </div>
            </div>
          </div>
        </section>
      </header>
      {/* 하단 */}
      <div className="min-h-screen m-auto max-w-screen-xl bg-red-400">
        <div>leftsection</div>
        <div>
          <main>main</main>
          <div>rightSection</div>
        </div>
      </div>
    </div>
  );
}
