import React from 'react'

function TrendingChip({trending}:{trending:string}) {
    return (
        <div className="w-fit bg-gray-200 rounded-full p-2 flex items-center">
            <div className="bg-orange-500 rounded-full h-8 w-auto flex items-center justify-center mx-1">
                <span className="text-white font-semibold mx-2">Trending</span>
            </div>
            <span className="mx-2 mr-4 font-semibold text-gray-500 w-fit whitespace-nowrap">{trending}</span>

        </div>

    )
}

export default TrendingChip