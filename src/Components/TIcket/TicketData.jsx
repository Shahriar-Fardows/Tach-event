/* eslint-disable react/prop-types */
import { Card } from 'flowbite-react';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const TicketData = ({ data }) => {
    const { type, price, benefits } = data;
    const [openModal, setOpenModal] = useState(false);
    return (
        <Card className='max-w-sm flex flex-col'>
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{type} plan</h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="my-7 space-y-5 flex-grow">
                {
                    benefits.map((data, idx) => (
                        <li key={idx} className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{data}</span>
                        </li>
                    ))
                }

            </ul>
            <Button
            onClick={() => setOpenModal(true)}
                type="button"
                className="inline-flex w-full justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Choose plan
            </Button>
            
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to buy this ticket?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => setOpenModal(false)}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Card>
    );
};

export default TicketData;