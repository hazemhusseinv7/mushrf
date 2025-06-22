import Image from "next/image";

import { useState } from "react";

import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/react";

import { AiOutlineLoading } from "react-icons/ai";

interface FullScreenPreviewProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
}

const FullScreenPreview = ({ src, alt, children }: FullScreenPreviewProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div onClick={onOpen} className="cursor-pointer">
        {children}
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
        <ModalContent>
          <ModalBody className="flex justify-center items-center">
            <div>
              <Image
                src={src}
                width={320}
                height={700}
                className="h-full w-auto object-contain"
                alt={alt}
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>

            {isLoading && (
              <div className="flex justify-center items-center size-full">
                <AiOutlineLoading className="size-7 text-main-blue animate-spin" />
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FullScreenPreview;
