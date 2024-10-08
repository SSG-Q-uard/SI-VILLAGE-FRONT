'use client';
import { Tabs } from '@/components/ui/tabs';
import { TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface TabMap {
  '/': string;
  '/event': string;
  '/deal': string;
  '/best': string;
  '/silive': string;
  '/content': string;
  '/ssgdf': string;
  [key: string]: string;
}

function MainTab() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('Home');

  const tabMap = {
    '/': 'Home',
    '/event': 'Event',
    '/deal': 'Deal',
    '/best': 'Best',
    '/silive': 'SILIVE',
    '/content': 'Content',
    '/ssgdf': 'SSG DF',
  };

  useEffect(() => {
    const currentTab =
      pathname in tabMap ? tabMap[pathname as keyof typeof tabMap] : 'Home';
    setActiveTab(currentTab);
  }, [pathname]);

  return (
    <main className="sticky top-0 z-20 bg-white border-b">
      <Tabs
        className="w-full flex justify-center items-center"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className="overflow-x-auto whitespace-nowrap scrollbar-hide px-5 space-x-5 mt-2">
          <Link href="/" passHref>
            <TabsTrigger
              value="Home"
              className={`${
                activeTab === 'Home'
                  ? 'border-b-2 border-black'
                  : 'text-si-text-gray'
              } pb-2`}
            >
              Home
            </TabsTrigger>
          </Link>
          <Link href="/event" passHref>
            <TabsTrigger
              value="Event"
              className={`${
                activeTab === 'Event'
                  ? 'border-b-2 border-black'
                  : 'text-si-text-gray'
              } pb-2`}
            >
              Event
            </TabsTrigger>
          </Link>
          <Link href="/deal" passHref>
            <TabsTrigger
              value="Deal"
              className={`${
                activeTab === 'Deal'
                  ? 'border-b-2 border-black'
                  : 'text-si-text-gray'
              } pb-2`}
            >
              Deal
            </TabsTrigger>
          </Link>
          <Link href="/best">
            <TabsTrigger
              value="Best"
              className={`${
                activeTab === 'Best'
                  ? 'border-b-2 border-black'
                  : 'text-si-text-gray'
              } pb-2`}
            >
              Best
            </TabsTrigger>
          </Link>
          <TabsTrigger
            value="SILIVE"
            className={`${
              activeTab === 'SILIVE'
                ? 'border-b-2 border-black'
                : 'text-si-text-gray'
            } pb-2`}
          >
            S.I.LIVE
          </TabsTrigger>
          <TabsTrigger
            value="Content"
            className={`${
              activeTab === 'Content'
                ? 'border-b-2 border-black'
                : 'text-si-text-gray'
            } pb-2`}
          >
            Content
          </TabsTrigger>
          <TabsTrigger
            value="SSG DF"
            className={`${
              activeTab === 'SSG DF'
                ? 'border-b-2 border-black'
                : 'text-si-text-gray'
            } pb-2`}
          >
            SSG DF
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </main>
  );
}

export default MainTab;
