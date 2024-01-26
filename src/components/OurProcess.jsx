import React from 'react';

function OurProcess() {
    return (
        <>
            <div className='relative flex min-[918px]:flex-row flex-col justify-center mt-40 gap-x-14 gap-y-6 p-4 z-10'>
                <div className='relative flex flex-col element-to-fade-to-top fade-in-top'>
                    <h2 className='text-[#6DBBFF] sm:text-xl xs:text-lg text-base font-extrabold'>
                        OUR PROCESS
                    </h2>
                    <h3 className='sm:text-[39px] text-3xl font-extrabold'>
                        How we serve our clients
                    </h3>
                </div>
                <p className='max-w-[33rem] opacity-80 text-justify text-white sm:text-xl xs:text-lg text-base font-medium element-to-fade-to-top fade-in-top'>
                    TeraByte Web Solutions is like other companies established with earnings in focus, but unlike others, we value support, help, service, and reputation higher than earnings.
                </p>
            </div>
            <div className='flex flex-col justify-center items-center my-28 element-to-fade-to-top fade-in-top max-[670px]:hidden'>
                <div className='relative max-w-[76.2rem] flex flex-wrap justify-center gap-6'>
                    <div className='col-span-1 sm:col-span-2 md:col-span-1 flex flex-col justify-center items-center'>
                        <div className='icon mb-4'>
                            <svg id="svg-fancy_icon-290-53" className="w-32">
                                <use xlinkHref="#Serveeicon-Conceptualize-ideas-presented-by-clients"></use>
                            </svg>
                        </div>
                        <p className='text-center'>
                            Conceptualize ideas<br/> presented by clients
                        </p>
                    </div>

                    <div className='col-span-1 sm:col-span-2 md:col-span-1 flex justify-center items-center'>
                        <div className='icon'>
                            <svg id="svg-fancy_icon-520-12" className="w-8">
                                <use xlinkHref="#Serveeicon-arrow" ng-href="#terabyteicon-smart--clean-code"></use>
                            </svg>
                        </div>
                    </div>

                    <div className='col-span-1 sm:col-span-2 md:col-span-1 flex flex-col justify-center items-center'>
                        <div className='icon mb-4'>
                            <svg id="svg-fancy_icon-301-53" className="w-32">
                                <use xlinkHref="#Serveeicon-Execution-of-concepts-and-work-steps"></use>
                            </svg>
                        </div>
                        <p className='text-center'>
                            Execution of concepts<br/> and work steps
                        </p>
                    </div>

                    <div className='col-span-1 sm:col-span-2 md:col-span-1 flex justify-center items-center'>
                        <div className='icon'>
                            <svg id="svg-fancy_icon-520-12" className="w-8">
                                <use xlinkHref="#Serveeicon-arrow" ng-href="#terabyteicon-smart--clean-code"></use>
                            </svg>
                        </div>
                    </div>

                    <div className='col-span-1 sm:col-span-2 md:col-span-1 flex flex-col justify-center items-center'>
                        <div className='icon mb-4'>
                            <svg id="svg-fancy_icon-298-53" className="w-32">
                                <use xlinkHref="#Serveeicon-Final-result-and-pay-according-to-the-contract"></use>
                            </svg>
                        </div>
                        <p className='text-center'>
                            Prototype review and<br/> revision to the final stage
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center element-to-fade-to-top fade-in-top min-[670px]:hidden'>
                <div className='relative max-w-[76.2rem] flex flex-wrap justify-center gap-6 flex-col mb-8 mt-8'>
                    <div className='col-span-1 sm:col-span-2 md:col-span-1 flex flex-col justify-center items-center'>
                        <div className='icon mb-4'>
                            <svg id="svg-fancy_icon-290-53" className="w-32">
                                <use xlinkHref="#Serveeicon-Conceptualize-ideas-presented-by-clients"></use>
                            </svg>
                        </div>
                        <p className='text-center'>
                            Conceptualize ideas<br/> presented by clients
                        </p>
                    </div>

                    <div className='flex justify-center items-center' style={{height: '50px'}}>
                        <div className='icon rotate-90'>
                            <svg id="svg-fancy_icon-520-12" className="w-8">
                                <use xlinkHref="#Serveeicon-arrow" ng-href="#terabyteicon-smart--clean-code"></use>
                            </svg>
                        </div>
                    </div>

                    <div className='col-span-1 sm:col-span-2 md:col-span-1 flex flex-col justify-center items-center'>
                        <div className='icon mb-4'>
                            <svg id="svg-fancy_icon-301-53" className="w-32">
                                <use xlinkHref="#Serveeicon-Execution-of-concepts-and-work-steps"></use>
                            </svg>
                        </div>
                        <p className='text-center'>
                            Execution of concepts<br/> and work steps
                        </p>
                    </div>

                    <div className='flex justify-center items-center' style={{height: '50px'}}>
                        <div className='icon rotate-90'>
                            <svg id="svg-fancy_icon-520-12" className="w-8">
                                <use xlinkHref="#Serveeicon-arrow" ng-href="#terabyteicon-smart--clean-code"></use>
                            </svg>
                        </div>
                    </div>

                    <div className='col-span-1 sm:col-span-2 md:col-span-1 flex flex-col justify-center items-center'>
                        <div className='icon mb-4'>
                            <svg id="svg-fancy_icon-298-53" className="w-32">
                                <use xlinkHref="#Serveeicon-Final-result-and-pay-according-to-the-contract"></use>
                            </svg>
                        </div>
                        <p className='text-center'>
                            Prototype review and<br/> revision to the final stage
                        </p>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default OurProcess;