import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import GeneralSettings from './GeneralSettings'

export default function Settings2() {
  const tabs = [
    {
      label: 'General',
      value: 'general',
      component: <GeneralSettings />,
    },
    {
      label: 'Security',
      value: 'security',
      component: <></>,
    },
    {
      label: 'Integration',
      value: 'integration',
      component: <></>,
    },
    {
      label: 'Support',
      value: 'support',
      component: <></>,
    },
    {
      label: 'Organizations',
      value: 'organizations',
      component: <></>,
    },
    {
      label: 'Advanced',
      value: 'advanced',
      component: <></>,
    },
  ]
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-6 md:gap-8">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>

      <div className="">
        <Tabs
          defaultValue="general"
          className=" w-[400px] sm:w-[525px] lg:w-[700px] xl:w-[1000px]"
        >
          <TabsList>
            {tabs.map((tab) => {
              return (
                <TabsTrigger key={tab.label} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {tabs.map((tab) => {
            return (
              <TabsContent key={tab.label} className="w-full" value="general">
                {tab.component}
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </main>
  )
}
