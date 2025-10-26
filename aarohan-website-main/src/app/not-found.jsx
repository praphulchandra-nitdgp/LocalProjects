export default function NotFound(){
  

    return (
      <>
        <div
          id="heroID"
          className='min-h-screen flex justify-center items-center py-48 md:py-24 bg-[url("/assets/MainBG.png")] bg-cover bg-center'
        >
          <div className="text-center text-amber-600" id="textAnimate">
            <div>
              <h1 className="text-4xl md:text-7xl font-bold ">Page Not Found</h1>
            </div>
          </div>
        </div>
        <div className="min-h-screen flex items-center py-12 "></div>
      </>
    );
  }
