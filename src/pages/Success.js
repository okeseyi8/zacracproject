import successimage from "../static/success.png"
import { ReactComponent as SuccessImage } from '../static/pana.svg'
export const SubmitSuccess = () => {
    return(
        <div className="w-screen h-screen pt-[60px] flex flex-col justify-start items-center">
            {/* <img className="w-[300px]" src={successimage} /> */}
            <SuccessImage width={380}  />
            <div>
                <h1 className="font-semibold text-[24px] text-center">
                    Success!!
                </h1>
                <h1 className="font-normal text-[16px] text-center">
                You order has been successfully confirmed
                </h1>
            </div>
        </div>
    )
}