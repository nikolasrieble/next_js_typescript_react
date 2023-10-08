'use client';
import { SparkLine, TailwindTest } from '@appsignal-tools/appsignal-ui'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <TailwindTest />
         <SparkLine data={[1,2,3,4,5]}/>
      </div>

    </main>
  )
}
