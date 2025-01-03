import { RxCrossCircled } from "react-icons/rx";

const Modal = ({open, onclose, children}) => {
  return (
    <div onClick={onclose} className={`fixed z-10 inset-0 overflow-auto flex justify-center items-center transition-colors ${open ? "visible bg-black/20 dark:bg-black/30" : "invisible" }`}>
        <div onClick={(e) => e.stopPropagation()} className={`w-[90%] md:w-[70%] lg:w-[40%] mt-20 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            <button onClick={onclose} className="absolute top-5 right-2 p-4 rounded-lg text-2xl dark:text-white">
              <RxCrossCircled />
            </button>
            {children} 
        </div>
    </div>
  )
}

export default Modal;