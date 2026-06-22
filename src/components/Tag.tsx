export const Tag = ({ value, isTheoretical = false} : { value: string, isTheoretical?: boolean }) => {
    return (
        <div className={`px-2 w-fit bg-zinc-700 outline-1 outline-white rounded-xl cursor-pointer
        ${isTheoretical ? 'outline-dashed' : ''}`}>
            <span className="text-sm">{value}</span>
        </div>
    );
}