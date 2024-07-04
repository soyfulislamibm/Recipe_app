'use-client';
import { RecipeProps } from '@/Types';
import Image from 'next/image';
import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

interface RecipeDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  recipe: RecipeProps;
}

const RecipeDetails = ({ isOpen, closeModal, recipe }: RecipeDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
          <div className='fixed inset-0 bg-black bg-opacity-25'/>
          </Transition.Child>
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xsl transition-all flex flex-col gap-5'>
                  <button
                    type='button'
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full close-button'
                    onClick={closeModal}
                  >
                    <Image
                      src='/close.svg'
                      alt='cose'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>
                  <div className='flex-1 flex flex-col gap-3 recipe-details-modal '>
                    <div className='relative w-full h-40  bg-cover bg-center rounded-lg'>
                      <Image
                        src={recipe.image}
                        alt='food-image'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                    <div className='flex gap-3'></div>
                  </div>
                  <div className='flex-1 flex flex-col gap-2'>
                    <h2 className='font-semibold text-xl capitalize text-center'>
                      {recipe.title}
                    </h2>

                    <div className='mt-3 flex flex-wrap gap-4'>
                      <div className='flex justify-between gap-5 p-10 w-full text-center'>
                        <h4 className='text-grey capitalize'>
                          {/* {key.split('_').join(' ')} */}
                        </h4>
                        <p
                          className='text-black-100 font-semibold'
                          dangerouslySetInnerHTML={{
                            __html: recipe.instructions,
                          }}
                        >
                          {/* {recipe.instructions} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default RecipeDetails;
