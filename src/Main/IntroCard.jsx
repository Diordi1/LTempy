function IntroCard() {
    return ( <div className="flex flex-row mt-16 justify-center gap-24">
        <div className="card flex flex-col items-center bg-orange-200 gap-4 p-3 h-fit rounded ">
            <div className="image1 p-2 bg-orange-500 rounded-full">
            <svg class="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
</svg>

            </div>
            <div className="contente">
                <p className="text-center">Total Revenue</p>
                <p className="text-center">$168.2</p>
            </div>
        </div>
       

       {/* revenue1 */}
        <div className="card flex flex-col items-center bg-green-200 gap-4 p-3 h-fit rounded ">
            <div className="image1 p-2 bg-green-500 rounded-full">
            <svg class="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
</svg>

            </div>
            <div className="contente">
                <p className="text-center">Total Revenue</p>
                <p className="text-center">$168.2</p>
            </div>
        </div>

        {/* revenue2 */}
        <div className="card flex flex-col items-center bg-yellow-200 gap-4 p-3 h-fit rounded ">
            <div className="image1 p-2 bg-yellow-500 rounded-full">
            <svg class="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
</svg>

            </div>
            <div className="contente">
                <p className="text-center">Total Revenue</p>
                <p className="text-center">$168.2</p>
            </div>
        </div>

        {/* revenue3 */}
        <div className="card flex flex-col items-center bg-blue-200 gap-4 p-3 h-fit rounded ">
            <div className="image1 p-2 bg-blue-500 rounded-full">
            <svg class="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
</svg>

            </div>
            <div className="contente">
                <p className="text-center">Total Revenue</p>
                <p className="text-center">$168.2</p>
            </div>
        </div>


    </div> );
}

export default IntroCard;