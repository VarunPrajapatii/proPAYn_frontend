

export default function PaymentMode() {
    return (
        <div className="flex items-center justify-center pt-10">
            <div className="bg-slate-50 p-10 px-44 pb-56 rounded-lg shadow-lg ">
                <div className="pb-10 font-bold text-xl">
                    Total payment to be made: Rs. 500
                </div>
                <div className="flex justify-between ">
                    <div className=" ml-10 mr-20 border-r-2 border-gray-400">
                        <div className="p-3">
                            Saved Details
                        </div>
                        <div className="p-3">
                            Debit Card
                        </div>
                        <div className="p-3">
                            Credit Card
                        </div>
                        <div className="p-3">
                            Net Banking
                        </div>
                        <div className="p-3">
                            UPI
                        </div>
                        <div className="p-3">
                            IMPS
                        </div>
                    </div>
                    <div className="   p-7 mr-20 px-40 ">
                        <div className="border-2 rounded border-blue-600 bg-white p-8">
                            <div className="py-2 text-lg font-semibold mb-2">Select Bank:<br></br></div>
                            <select className="border border-black p-2 rounded w-full" name="Select bank" >
                                <option value="SBI">SBI</option>
                                <option value="CBI">CBI</option>
                                <option value="HDFC">HDFC</option>
                                <option value="AXIS">AXIS</option>
                            </select>
                        </div>
                        <div className="pt-10">
                            <button className="bg-customBlue-dark text-white rounded-md px-64 py-3">
                                Proceed Securely
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}