const Testimoni = ({ data }) => {
    return (
        <div className="py-6 px-6 bg-linear-to-br from-slate-50 to-white shadow-xl hover:shadow-2xl transition-shadow rounded-2xl flex flex-col justify-between relative">
            <p className="text-5xl text-indigo-200 absolute -top-4 left-4 select-none">❝</p>
            <p className="text-md md:text-lg text-slate-700 italic mt-6">{data.ungkapan}</p>
            
            <div className="pt-4 mt-6 border-t border-slate-200"></div>
            <div className="flex gap-3 items-center mt-3">
                <img src={data.gambar} alt={data.nama} className="w-12 h-12 rounded-full object-cover border-2 border-indigo-200" />
                <h4 className="font-semibold text-md text-slate-800">{data.nama}</h4>
            </div>
        </div>
    )
}
export default Testimoni
