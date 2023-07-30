'use client'

const ConfirmButton = (props) => {
    const spinner = <div className="lds-dual-ring"></div>

    return (
        <button
            onClick={() => props.clickFunction()}
            className="flex flex-row hover:bg-[#5ab9f8] transition-colors duration-300 ease-in-out hover:shadow-white
                items-center m-auto text-black max-w-sm p-3 rounded-md bg-white
                font-semibold"
        >
            {props.text}
            {props.loading ? spinner : null}
        </button>
    )
}

export default ConfirmButton