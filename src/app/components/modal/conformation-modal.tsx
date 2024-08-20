
interface Imodal {
    open: boolean;
    close: () => void;
    title?: string;
    
  }
import { Button } from "antd";
import {CustomModal} from "./modal"

export const ConformationModal:React.FC<Imodal> =({open, close}) =>{

    return(
        <CustomModal open={open} close={close}>
            <div className="flex flex-col py-5">
            <p className="text-lg font-medium">Thank you for contacting bestinationz.</p>
            <p className="text-base font-normal">Our representative will call you shortly</p>
            </div>
            <div className="flex justify-end">
                <Button onClick={close} >Close</Button>
            </div>
        </CustomModal>
    )
}