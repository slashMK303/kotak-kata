export default function SkeletonCard() {
    return (
        <div className="p-4 rounded-lg shadow-sm bg-gray-800 animate-pulse">
            <div className="bg-gray-700 h-16 rounded-md mb-4"></div>
            <div className="flex justify-between items-center text-xs">
                <div className="bg-gray-700 h-3 w-24 rounded"></div>
                <div className="bg-gray-700 h-5 w-20 rounded-full"></div>
            </div>
        </div>
    );
}