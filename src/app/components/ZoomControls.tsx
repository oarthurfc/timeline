import { ZoomIn, ZoomOut } from 'lucide-react';

type ZoomControlsProps = {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  minZoom: number;
  maxZoom: number;
};

export const ZoomControls = ({
  zoomLevel,
  onZoomIn,
  onZoomOut,
  minZoom,
  maxZoom,
}: ZoomControlsProps) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-2 shadow-sm">
      <button
        onClick={onZoomOut}
        disabled={zoomLevel <= minZoom}
        className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
        title="Diminuir zoom"
      >
        <ZoomOut className="h-4 w-4" />
      </button>

      <span className="min-w-[60px] text-center text-sm font-medium text-gray-600">
        {Math.round(zoomLevel * 100)}%
      </span>

      <button
        onClick={onZoomIn}
        disabled={zoomLevel >= maxZoom}
        className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
        title="Aumentar zoom"
      >
        <ZoomIn className="h-4 w-4" />
      </button>
    </div>
  );
};
