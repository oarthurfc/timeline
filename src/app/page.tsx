import { Calendar, GripVertical } from 'lucide-react';

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col items-center gap-[32px] py-14">
      <h1 className="text-center text-3xl font-bold">Horizontal Timeline</h1>

      {/* Start Timeline Container */}
      <div className="w-full overflow-x-auto">
        {/* Start Timeline Header */}
        <div className="flex justify-between py-4 text-sm text-gray-500">
          <p className="font-bold">YYYY/MM/DD</p>
          <p>MM/DD</p>
          <p>MM/DD</p>
          <p>MM/DD</p>
          <p className="font-bold">YYYY/MM/DD</p>
        </div>
        {/* End Timeline Header */}

        {/* Start Timeline Lanes */}
        <div className="flex gap-6 border-y border-gray-200 px-2 py-6">
          {/* Start Timeline Events */}
          <div className="bg-background shadow-event flex items-center gap-4 rounded-md border-l-4 border-l-green-500 py-3 pr-7 pl-4">
            <GripVertical className="cursor-grab text-gray-600" />
            <div className="flex flex-col gap-0.5 text-sm font-bold">
              <p className="flex gap-2">Plann Sprint Duration</p>
              <div className="flex items-center gap-1.5 text-indigo-400">
                <Calendar className="w-4" strokeWidth={2} />
                <p>Jan 31 - Feb 4</p>
              </div>
            </div>
          </div>
          <div className="bg-background shadow-event flex items-center gap-4 rounded-md border-l-4 border-l-green-500 py-3 pr-7 pl-4">
            <GripVertical className="cursor-grab text-gray-600" />
            <div className="flex flex-col gap-0.5 text-sm font-bold">
              <p className="flex gap-2">Plann Sprint Duration</p>
              <div className="flex items-center gap-1.5 text-indigo-400">
                <Calendar className="w-4" strokeWidth={2} />
                <p>Jan 31 - Feb 4</p>
              </div>
            </div>
          </div>
          {/* End Timeline Events */}
        </div>
        <div className="flex gap-6 border-y border-gray-200 px-2 py-6">
          {/* Start Timeline Events */}
          <div className="bg-background shadow-event flex items-center gap-4 rounded-md border-l-4 border-l-green-500 py-3 pr-7 pl-4">
            <GripVertical className="cursor-grab text-gray-600" />
            <div className="flex flex-col gap-0.5 text-sm font-bold">
              <p className="flex gap-2">Plann Sprint Duration</p>
              <div className="flex items-center gap-1.5 text-indigo-400">
                <Calendar className="w-4" strokeWidth={2} />
                <p>Jan 31 - Feb 4</p>
              </div>
            </div>
          </div>
          <div className="bg-background shadow-event flex items-center gap-4 rounded-md border-l-4 border-l-green-500 py-3 pr-7 pl-4">
            <GripVertical className="cursor-grab text-gray-600" />
            <div className="flex flex-col gap-0.5 text-sm font-bold">
              <p className="flex gap-2">Plann Sprint Duration</p>
              <div className="flex items-center gap-1.5 text-indigo-400">
                <Calendar className="w-4" strokeWidth={2} />
                <p>Jan 31 - Feb 4</p>
              </div>
            </div>
          </div>
          {/* End Timeline Events */}
        </div>

        {/* End Timeline Lanes */}
      </div>
      {/* End Timeline Container */}
    </main>
  );
}
