type Props = {
    isDisabled?: boolean
}

const Buttons: React.FC<Props> = ({ isDisabled }: Props): JSX.Element => {
    if (isDisabled) return <button>DES</button>
    return (
        <button
            className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >Buttons</button>
    )
}

export default Buttons;